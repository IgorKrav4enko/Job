using System.Globalization;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using Microsoft.Playwright;

internal static partial class UberCollector
{
    private const int PageSize = 10;

    public static async Task<UberFetchResult> FetchAsync(
        List<UberLocationConfig> locations,
        string searchTerm,
        string capturedAt,
        int maxPages,
        int maxDetails)
    {
        using var playwright = await Playwright.CreateAsync();
        var launchOptions = new BrowserTypeLaunchOptions { Headless = true };
        var executablePath = Environment.GetEnvironmentVariable("UBER_CHROME_EXECUTABLE")?.Trim();
        if (string.IsNullOrWhiteSpace(executablePath) && File.Exists("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"))
        {
            executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
        }
        if (!string.IsNullOrWhiteSpace(executablePath))
        {
            launchOptions.ExecutablePath = executablePath;
        }

        await using var browser = await playwright.Chromium.LaunchAsync(launchOptions);
        var context = await browser.NewContextAsync(new BrowserNewContextOptions
        {
            Locale = "en-US",
            UserAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36"
        });
        var page = await context.NewPageAsync();
        var sources = new List<UberRawSource>();
        var uniqueIds = new HashSet<string>(StringComparer.Ordinal);
        var detailCache = new Dictionary<string, UberJobDetail?>(StringComparer.Ordinal);
        var detailCount = 0;

        foreach (var location in locations)
        {
            var jobs = new List<UberRawJobItem>();
            var seen = new HashSet<string>(StringComparer.Ordinal);
            for (var pageNumber = 1; pageNumber <= maxPages; pageNumber += 1)
            {
                var searchUrl = BuildSearchUrl(location.SearchLocation, searchTerm, pageNumber);
                Console.WriteLine($"Fetching Uber browser search {searchUrl}");
                await page.GotoAsync(searchUrl, new PageGotoOptions { WaitUntil = WaitUntilState.DOMContentLoaded, Timeout = 60000 });
                await page.WaitForTimeoutAsync(1800);
                var browserJobsJson = await page.EvaluateAsync<string>(@"() => JSON.stringify(Array.from(document.querySelectorAll('main [data-slot=card]')).map(card => {
                    const link = card.querySelector('h2 a[href*=""/en/jobs/""]');
                    if (!link) return null;
                    const lines = (card.innerText || '').split('\n').map(x => x.trim()).filter(Boolean);
                    const location = lines.find(x => x.includes(',')) || '';
                    const team = lines.find(x => x === 'Engineer') || '';
                    const id = (link.getAttribute('href') || '').match(/\/en\/jobs\/(\d+)/)?.[1] || '';
                    return { jobId: id, title: link.textContent?.trim() || '', location, team };
                }).filter(Boolean))");
                var browserJobs = (JsonSerializer.Deserialize<List<UberBrowserJob>>(browserJobsJson) ?? new List<UberBrowserJob>())
                    .Where(job => job.Location.Contains(location.SearchLocation, StringComparison.OrdinalIgnoreCase))
                    .ToList();
                var newOnPage = 0;

                foreach (var browserJob in browserJobs)
                {
                    if (string.IsNullOrWhiteSpace(browserJob.JobId) || !seen.Add(browserJob.JobId)) continue;
                    newOnPage += 1;
                    var result = new UberSearchResult(
                        browserJob.JobId,
                        browserJob.Title,
                        string.IsNullOrWhiteSpace(browserJob.Location) ? new List<string>() : new List<string> { browserJob.Location },
                        browserJob.Team,
                        null,
                        $"https://jobs.uber.com/en/jobs/{browserJob.JobId}/",
                        searchUrl,
                        location.Label);
                    uniqueIds.Add(result.JobId);
                    if (!detailCache.TryGetValue(result.JobId, out var detail) && detailCount < maxDetails)
                    {
                        detail = await FetchDetailWithBrowserAsync(page, result);
                        detailCache[result.JobId] = detail;
                        detailCount += 1;
                    }
                    jobs.Add(BuildRawJob(result, detail, capturedAt));
                }

                if (browserJobs.Count < PageSize || newOnPage == 0) break;
            }

            sources.Add(new UberRawSource(
                location.Label,
                location.Slug,
                location.SearchLocation,
                BuildSearchUrl(location.SearchLocation, searchTerm, 1),
                jobs));
        }

        return new UberFetchResult(sources, uniqueIds.Count);
    }

    private static async Task<UberJobDetail?> FetchDetailWithBrowserAsync(IPage page, UberSearchResult result)
    {
        try
        {
            Console.WriteLine($"Fetching Uber browser detail {result.JobUrl}");
            await page.GotoAsync(result.JobUrl, new PageGotoOptions { WaitUntil = WaitUntilState.DOMContentLoaded, Timeout = 60000 });
            try
            {
                await page.WaitForSelectorAsync("a[href*='/apply/']", new PageWaitForSelectorOptions
                {
                    State = WaitForSelectorState.Attached,
                    Timeout = 5000
                });
            }
            catch (TimeoutException)
            {
                // Some closed or malformed postings can legitimately omit the Apply link.
            }
            var detail = ParseDetailHtml(await page.ContentAsync(), result);
            var applyUrl = await page.EvaluateAsync<string?>("() => document.querySelector('a[href*=\"/apply/\"]')?.href || null");
            return detail with { ApplyUrlRaw = applyUrl ?? detail.ApplyUrlRaw };
        }
        catch (PlaywrightException error)
        {
            Console.WriteLine($"Uber detail fetch failed for {result.JobId}: {error.Message}");
            return null;
        }
    }

    public static string BuildSearchUrl(string location, string searchTerm, int page)
    {
        return "https://jobs.uber.com/en/jobs/?" + string.Join("&", new[]
        {
            $"search={Uri.EscapeDataString(searchTerm)}",
            $"location={Uri.EscapeDataString(location)}",
            "radius=50",
            "team=Engineer",
            $"page={page.ToString(CultureInfo.InvariantCulture)}",
            $"pagesize={PageSize.ToString(CultureInfo.InvariantCulture)}"
        });
    }

    internal static List<UberSearchResult> ParseSearchHtml(string html, string searchUrl, string requestedLocation)
    {
        var results = new List<UberSearchResult>();
        foreach (Match match in EmbeddedJobRegex().Matches(html))
        {
            var id = match.Groups["id"].Value;
            if (results.Any(result => result.JobId == id))
            {
                continue;
            }

            results.Add(new UberSearchResult(
                id,
                DecodeJsonText(match.Groups["title"].Value),
                ParseEmbeddedLocations(match.Groups["locations"].Value),
                DecodeJsonText(match.Groups["team"].Value),
                ParsePostedDate(match.Groups["posted"].Value),
                $"https://jobs.uber.com/en/jobs/{id}/",
                searchUrl,
                requestedLocation));
        }

        return results;
    }

    private static bool MatchesLocation(UberSearchResult result, string searchLocation)
    {
        return result.TeamRaw.Contains("Engineer", StringComparison.OrdinalIgnoreCase) &&
            result.LocationsRaw.Any(location => location.Contains(searchLocation, StringComparison.OrdinalIgnoreCase));
    }

    private static List<string> ParseEmbeddedLocations(string value)
    {
        return EmbeddedAddressRegex().Matches(value)
            .Select(match => DecodeJsonText(match.Groups["value"].Value))
            .Where(static location => !string.IsNullOrWhiteSpace(location))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
    }

    private static string DecodeJsonText(string value)
    {
        return WebUtility.HtmlDecode(value)
            .Replace("\\u0026", "&", StringComparison.OrdinalIgnoreCase)
            .Replace("\\\"", "\"")
            .Replace("\\n", "\n")
            .Trim();
    }

    internal static UberJobDetail ParseDetailHtml(string html, UberSearchResult fallback)
    {
        var title = MatchValue(html, TitleRegex()) ?? fallback.TitleRaw;
        var location = MatchDefinition(html, "Location");
        var postedRaw = MatchDefinition(html, "Posted on");
        var postedAt = ParsePostedDate(postedRaw);
        var applyUrl = MatchValue(html, ApplyLinkRegex());
        var description = ExtractMainText(html);

        return new UberJobDetail(
            fallback.JobId,
            title,
            SplitLocations(location),
            fallback.JobUrl,
            applyUrl,
            description,
            postedAt,
            null);
    }

    private static async Task<UberJobDetail?> FetchDetailAsync(HttpClient client, UberSearchResult result)
    {
        try
        {
            Console.WriteLine($"Fetching Uber detail {result.JobUrl}");
            var html = await client.GetStringAsync(result.JobUrl);
            return ParseDetailHtml(html, result);
        }
        catch (Exception error) when (error is HttpRequestException or TaskCanceledException)
        {
            Console.WriteLine($"Uber detail fetch failed for {result.JobId}: {error.Message}");
            return null;
        }
    }

    private static UberRawJobItem BuildRawJob(UberSearchResult result, UberJobDetail? detail, string capturedAt)
    {
        return new UberRawJobItem(
            result.JobId,
            detail?.TitleRaw ?? result.TitleRaw,
            "Uber",
            detail?.LocationsRaw is { Count: > 0 } ? detail.LocationsRaw : result.LocationsRaw,
            result.JobUrl,
            result.SearchUrl,
            result.RequestedLocation,
            detail?.ApplyUrlRaw,
            detail?.AboutTheJobRaw,
            detail?.PostedAtCandidate ?? result.PostedAtCandidate,
            detail?.UpdatedAtCandidate,
            capturedAt);
    }

    private static HttpClient CreateHttpClient()
    {
        var handler = new HttpClientHandler
        {
            AutomaticDecompression = DecompressionMethods.All,
            CookieContainer = new CookieContainer()
        };
        var client = new HttpClient(handler) { Timeout = TimeSpan.FromSeconds(45) };
        client.DefaultRequestHeaders.UserAgent.ParseAdd("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0 Safari/537.36");
        client.DefaultRequestHeaders.Accept.ParseAdd("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
        client.DefaultRequestHeaders.AcceptLanguage.ParseAdd("en-US,en;q=0.9");
        client.DefaultRequestHeaders.Referrer = new Uri("https://jobs.uber.com/en/jobs/");
        return client;
    }

    private static string? MatchDefinition(string html, string label)
    {
        var pattern = $@"<dt[^>]*>\s*{Regex.Escape(label)}\s*</dt>\s*<dd[^>]*>(?<value>.*?)</dd>";
        var match = Regex.Match(html, pattern, RegexOptions.IgnoreCase | RegexOptions.Singleline);
        return match.Success ? CleanHtml(match.Groups["value"].Value) : null;
    }

    private static string? MatchValue(string html, Regex regex)
    {
        var match = regex.Match(html);
        return match.Success ? WebUtility.HtmlDecode(match.Groups["value"].Value).Trim() : null;
    }

    private static List<string> SplitLocations(string? location)
    {
        if (string.IsNullOrWhiteSpace(location))
        {
            return new List<string>();
        }

        return location.Split(new[] { " / ", " | " }, StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
    }

    private static string? ParsePostedDate(string? value)
    {
        if (DateTimeOffset.TryParse(value, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal, out var parsed))
        {
            return parsed.ToUniversalTime().ToString("O");
        }

        return null;
    }

    private static string? ExtractMainText(string html)
    {
        var match = MainRegex().Match(html);
        if (!match.Success)
        {
            return null;
        }

        var text = CleanHtml(match.Groups["value"].Value);
        return text.Length > 120 ? text : null;
    }

    private static string CleanHtml(string value)
    {
        var withBreaks = Regex.Replace(value, @"<\s*(br|/p|/li|/h[1-6])\s*/?>", "\n", RegexOptions.IgnoreCase);
        var text = Regex.Replace(withBreaks, "<[^>]+>", " ");
        text = WebUtility.HtmlDecode(text);
        text = Regex.Replace(text, @"[ \t\r\f\v]+", " ");
        text = Regex.Replace(text, @"\n\s*\n+", "\n");
        return text.Trim();
    }

    [GeneratedRegex("\\\\\"AdditionalText\\\\\":\\\\\"(?<team>(?:\\\\.|[^\"])*?)\\\\\".*?\\\\\"DisplayDate\\\\\":\\\\\"(?<posted>[^\"]+)\\\\\".*?\\\\\"Id\\\\\":\\\\\"(?<id>\\d+)\\\\\",\\\\\"Title\\\\\":\\\\\"(?<title>(?:\\\\.|[^\"])*?)\\\\\".*?\\\\\"Locations\\\\\":\\[(?<locations>.*?)\\],\\\\\"Urls\\\\\":", RegexOptions.IgnoreCase | RegexOptions.Singleline)]
    private static partial Regex EmbeddedJobRegex();

    [GeneratedRegex("\\\\\"Address\\\\\":\\\\\"(?<value>(?:\\\\.|[^\"])*?)\\\\\"")]
    private static partial Regex EmbeddedAddressRegex();

    [GeneratedRegex("<h1[^>]*>(?<value>.*?)</h1>", RegexOptions.IgnoreCase | RegexOptions.Singleline)]
    private static partial Regex TitleRegex();

    [GeneratedRegex("href=[\"'](?<value>https://[^\"']+/jobs/preview/\\d+/apply/[^\"']*)[\"']", RegexOptions.IgnoreCase)]
    private static partial Regex ApplyLinkRegex();

    [GeneratedRegex("<main[^>]*>(?<value>.*?)</main>", RegexOptions.IgnoreCase | RegexOptions.Singleline)]
    private static partial Regex MainRegex();
}

internal sealed record UberLocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("searchLocation")] string SearchLocation);

internal sealed record UberRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("sources")] List<UberRawSource> Sources);

internal sealed record UberRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchLocation")] string SearchLocation,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<UberRawJobItem> Jobs);

internal sealed record UberRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record UberSearchResult(string JobId, string TitleRaw, List<string> LocationsRaw, string TeamRaw, string? PostedAtCandidate, string JobUrl, string SearchUrl, string RequestedLocation);
internal sealed record UberBrowserJob(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("location")] string Location,
    [property: JsonPropertyName("team")] string Team);
internal sealed record UberJobDetail(string JobId, string TitleRaw, List<string> LocationsRaw, string JobUrl, string? ApplyUrlRaw, string? AboutTheJobRaw, string? PostedAtCandidate, string? UpdatedAtCandidate);
internal sealed record UberFetchResult(List<UberRawSource> Sources, int JobCount);
