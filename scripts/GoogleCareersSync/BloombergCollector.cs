using System.Net;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

internal static class BloombergCollector
{
    private const string DefaultSearchUrl = "https://bloomberg.avature.net/careers/SearchJobs/software%20engineer";
    private static readonly Regex ArticlePattern = new(
        "<article[^>]+class=\"[^\"]*article--result[^\"]*\"[^>]*>(?<body>.*?)</article>",
        RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    private static readonly Regex JobPattern = new(
        "href=\"(?<url>https://bloomberg\\.avature\\.net/careers/JobDetail/[^\"]+/(?<id>\\d+))\"[^>]*>(?<title>.*?)</a>",
        RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    private static readonly Regex LocationPattern = new(
        "<span[^>]+class=\"[^\"]*list-item-location[^\"]*\"[^>]*>(?<location>.*?)</span>",
        RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    private static readonly Regex TagsPattern = new("<[^>]+>", RegexOptions.CultureInvariant);
    private static readonly Regex DescriptionPattern = new(
        "<article[^>]+class=\"[^\"]*article--details[^\"]*\"[^>]*>.*?Description\\s*&amp;\\s*Requirements(?<body>.*?)</article>",
        RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    private static readonly Regex ApplyPattern = new(
        "href=\"(?<url>https://bloomberg\\.avature\\.net/careers/Login\\?jobId=\\d+)\"",
        RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    private static readonly Regex BusinessAreaPattern = new(
        "Business Area\\s*</div>\\s*<div[^>]*article__content__view__field__value[^>]*>(?<value>.*?)</div>",
        RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);

    private static readonly Dictionary<string, string> CountryMarkers = new(StringComparer.OrdinalIgnoreCase)
    {
        ["Canada"] = "Canada", ["Switzerland"] = "Switzerland", ["United Kingdom"] = "United Kingdom",
        ["Ireland"] = "Ireland", ["Germany"] = "Germany", ["France"] = "France",
        ["Netherlands"] = "Netherlands", ["Spain"] = "Spain", ["Poland"] = "Poland",
        ["Czech Republic"] = "Czechia", ["Czechia"] = "Czechia", ["Romania"] = "Romania",
        ["Italy"] = "Italy", ["Portugal"] = "Portugal", ["Austria"] = "Austria",
        ["Belgium"] = "Belgium", ["Denmark"] = "Denmark", ["Sweden"] = "Sweden",
        ["Norway"] = "Norway", ["Finland"] = "Finland", ["Luxembourg"] = "Luxembourg"
    };

    public static async Task<BloombergFetchResult> FetchAsync(
        string capturedAt,
        int maxPages,
        IReadOnlyDictionary<string, BloombergRawJobItem>? cachedJobs = null)
    {
        var searchUrl = Environment.GetEnvironmentVariable("BLOOMBERG_JOBS_SEARCH_URL")?.Trim();
        if (string.IsNullOrWhiteSpace(searchUrl)) searchUrl = DefaultSearchUrl;

        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(60) };
        client.DefaultRequestHeaders.UserAgent.ParseAdd("CareersTracker/1.0");
        var jobs = new List<BloombergRawJobItem>();

        for (var page = 0; page < maxPages; page++)
        {
            var pageUrl = BuildPageUrl(searchUrl, page * 12);
            Console.WriteLine($"Fetching Bloomberg search {pageUrl}");
            var html = await client.GetStringAsync(pageUrl);
            var pageJobs = ParseJobs(html, pageUrl, capturedAt);
            if (pageJobs.Count == 0) break;
            jobs.AddRange(pageJobs);
        }

        var uniqueJobs = jobs
            .GroupBy(static job => job.JobId, StringComparer.Ordinal)
            .Select(static group => group.First())
            .ToList();
        var details = new Dictionary<string, BloombergJobDetail>(StringComparer.Ordinal);
        var jobsToFetch = new List<BloombergRawJobItem>();
        foreach (var job in uniqueJobs)
        {
            if (cachedJobs is not null && cachedJobs.TryGetValue(job.JobId, out var cached) &&
                !string.IsNullOrWhiteSpace(cached.AboutTheJobRaw))
            {
                details[job.JobId] = new BloombergJobDetail(cached.AboutTheJobRaw, cached.ApplyUrlRaw, cached.BusinessAreaRaw);
            }
            else
            {
                jobsToFetch.Add(job);
            }
        }

        foreach (var pair in await FetchDetailsAsync(client, jobsToFetch)) details[pair.Key] = pair.Value;
        uniqueJobs = uniqueJobs.Select(job => details.TryGetValue(job.JobId, out var detail)
            ? job with
            {
                AboutTheJobRaw = detail.Description,
                ApplyUrlRaw = detail.ApplyUrl,
                BusinessAreaRaw = detail.BusinessArea
            }
            : job).ToList();
        Console.WriteLine($"Bloomberg details: {uniqueJobs.Count - jobsToFetch.Count} cached, {jobsToFetch.Count} requested.");
        return new BloombergFetchResult(searchUrl, uniqueJobs);
    }

    private static async Task<Dictionary<string, BloombergJobDetail>> FetchDetailsAsync(
        HttpClient client,
        List<BloombergRawJobItem> jobs)
    {
        using var gate = new SemaphoreSlim(6);
        var tasks = jobs.Select(async job =>
        {
            await gate.WaitAsync();
            try
            {
                Console.WriteLine($"Fetching Bloomberg detail {job.JobUrl}");
                var html = await client.GetStringAsync(job.JobUrl);
                var description = DescriptionPattern.Match(html);
                var apply = ApplyPattern.Match(html);
                var businessArea = BusinessAreaPattern.Match(html);
                return (job.JobId, Detail: new BloombergJobDetail(
                    description.Success ? CleanText(description.Groups["body"].Value) : null,
                    apply.Success ? WebUtility.HtmlDecode(apply.Groups["url"].Value) : job.JobUrl,
                    businessArea.Success ? CleanText(businessArea.Groups["value"].Value) : null));
            }
            catch (Exception exception)
            {
                Console.WriteLine($"Bloomberg detail failed for {job.JobId}: {exception.Message}");
                return (job.JobId, Detail: (BloombergJobDetail?)null);
            }
            finally
            {
                gate.Release();
            }
        });

        return (await Task.WhenAll(tasks))
            .Where(static result => result.Detail is not null)
            .ToDictionary(static result => result.JobId, static result => result.Detail!, StringComparer.Ordinal);
    }

    private static List<BloombergRawJobItem> ParseJobs(string html, string searchUrl, string capturedAt)
    {
        var jobs = new List<BloombergRawJobItem>();
        foreach (Match article in ArticlePattern.Matches(html))
        {
            var body = article.Groups["body"].Value;
            var jobMatch = JobPattern.Match(body);
            var locationMatch = LocationPattern.Match(body);
            if (!jobMatch.Success || !locationMatch.Success) continue;

            var location = CleanText(locationMatch.Groups["location"].Value);
            var country = InferCountry(location);
            if (country is null) continue;
            jobs.Add(new BloombergRawJobItem(
                jobMatch.Groups["id"].Value,
                CleanText(jobMatch.Groups["title"].Value),
                "Bloomberg",
                new List<string> { location },
                WebUtility.HtmlDecode(jobMatch.Groups["url"].Value),
                searchUrl,
                country,
                null,
                null,
                null,
                null,
                capturedAt));
        }
        return jobs;
    }

    private static string BuildPageUrl(string searchUrl, int offset)
    {
        var baseUrl = searchUrl.Split('#')[0];
        var separator = baseUrl.Contains('?') ? "&" : "?";
        return $"{baseUrl}{separator}jobRecordsPerPage=12&jobOffset={offset}";
    }

    private static string? InferCountry(string location) => CountryMarkers
        .FirstOrDefault(pair => location.Contains(pair.Key, StringComparison.OrdinalIgnoreCase))
        .Value;

    private static string CleanText(string value) =>
        WebUtility.HtmlDecode(TagsPattern.Replace(value, " ")).Trim();
}

internal sealed record BloombergRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("sources")] List<BloombergRawSource> Sources);

internal sealed record BloombergRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<BloombergRawJobItem> Jobs);

internal sealed record BloombergRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("businessAreaRaw")] string? BusinessAreaRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record BloombergFetchResult(string SearchUrl, List<BloombergRawJobItem> Jobs);

internal sealed record BloombergJobDetail(string? Description, string? ApplyUrl, string? BusinessArea);
