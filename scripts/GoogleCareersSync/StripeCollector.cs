using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

internal static class StripeCollector
{
    private const string SearchUrl = "https://stripe.com/careers/search";
    private static readonly Regex NextDataPattern = new(
        "<script[^>]+id=\"__NEXT_DATA__\"[^>]*>(?<json>.*?)</script>",
        RegexOptions.Singleline | RegexOptions.CultureInvariant);

    private static readonly Dictionary<string, string> CountryNames = new(StringComparer.Ordinal)
    {
        ["AT"] = "Austria", ["BE"] = "Belgium", ["BG"] = "Bulgaria",
        ["CA"] = "Canada", ["CH"] = "Switzerland", ["CY"] = "Cyprus",
        ["CZ"] = "Czechia", ["DE"] = "Germany", ["DK"] = "Denmark",
        ["EE"] = "Estonia", ["ES"] = "Spain", ["FI"] = "Finland",
        ["FR"] = "France", ["GB"] = "United Kingdom", ["GR"] = "Greece",
        ["HR"] = "Croatia", ["HU"] = "Hungary", ["IE"] = "Ireland",
        ["IS"] = "Iceland", ["IT"] = "Italy", ["LI"] = "Liechtenstein",
        ["LT"] = "Lithuania", ["LU"] = "Luxembourg", ["LV"] = "Latvia",
        ["MT"] = "Malta", ["NL"] = "Netherlands", ["NO"] = "Norway",
        ["PL"] = "Poland", ["PT"] = "Portugal", ["RO"] = "Romania",
        ["SE"] = "Sweden", ["SI"] = "Slovenia", ["SK"] = "Slovakia"
    };

    public static async Task<StripeFetchResult> FetchAsync(
        string capturedAt,
        IReadOnlyDictionary<string, StripeRawJobItem>? cachedJobs = null)
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(60) };
        client.DefaultRequestHeaders.UserAgent.ParseAdd("CareersTracker/1.0");

        Console.WriteLine($"Fetching Stripe careers {SearchUrl}");
        var html = await client.GetStringAsync(SearchUrl);
        var match = NextDataPattern.Match(html);
        if (!match.Success) throw new InvalidOperationException("Stripe __NEXT_DATA__ payload was not found.");

        using var document = JsonDocument.Parse(match.Groups["json"].Value);
        var index = document.RootElement
            .GetProperty("props")
            .GetProperty("pageProps")
            .GetProperty("jobIndexData");
        var locations = index.GetProperty("filters").GetProperty("locations").EnumerateArray().ToArray();
        var sources = CountryNames.Values.ToDictionary(
            static country => country,
            static _ => new List<StripeRawJobItem>(),
            StringComparer.Ordinal);

        foreach (var item in index.GetProperty("listings").EnumerateArray())
        {
            var title = ReadString(item, "title");
            if (string.IsNullOrWhiteSpace(title) || !IsEngineeringTitle(title)) continue;

            var jobId = ReadString(item, "greenhouseId");
            var slug = ReadString(item, "slug");
            if (string.IsNullOrWhiteSpace(jobId) || string.IsNullOrWhiteSpace(slug)) continue;

            var matchedLocations = item.GetProperty("locationIndices").EnumerateArray()
                .Select(indexValue => locations[indexValue.GetInt32()])
                .Select(location => new
                {
                    Name = ReadString(location, "name"),
                    CountryCode = ReadString(location, "countryCode")
                })
                .Where(location => !string.IsNullOrWhiteSpace(location.Name) &&
                    !string.IsNullOrWhiteSpace(location.CountryCode) &&
                    CountryNames.ContainsKey(location.CountryCode))
                .ToList();
            if (matchedLocations.Count == 0) continue;

            var jobUrl = $"https://stripe.com/jobs/listing/{slug}/{jobId}";
            foreach (var countryGroup in matchedLocations.GroupBy(location => CountryNames[location.CountryCode!]))
            {
                sources[countryGroup.Key].Add(new StripeRawJobItem(
                    jobId,
                    title,
                    "Stripe",
                    countryGroup.Select(location => location.Name!).Distinct(StringComparer.Ordinal).ToList(),
                    jobUrl,
                    SearchUrl,
                    countryGroup.Key,
                    jobUrl,
                    null,
                    ReadString(item, "employmentType"),
                    null,
                    capturedAt));
            }
        }

        var jobs = sources.Values
            .SelectMany(static source => source)
            .DistinctBy(static job => job.JobId)
            .ToList();
        var details = new Dictionary<string, StripeJobDetail>(StringComparer.Ordinal);
        var jobsToRefresh = new List<StripeRawJobItem>();
        foreach (var job in jobs)
        {
            if (cachedJobs is not null &&
                cachedJobs.TryGetValue(job.JobId, out var cached) &&
                IsFresh(cached, capturedAt))
            {
                details[job.JobId] = new StripeJobDetail(
                    cached.AboutTheJobRaw,
                    cached.PostedAtCandidate,
                    cached.ApplyUrlRaw);
            }
            else
            {
                jobsToRefresh.Add(job);
            }
        }

        foreach (var pair in await FetchDetailsAsync(client, jobsToRefresh)) details[pair.Key] = pair.Value;
        Console.WriteLine($"Stripe details: {details.Count - jobsToRefresh.Count} cached, {jobsToRefresh.Count} refreshed.");
        foreach (var country in sources.Keys.ToList())
        {
            sources[country] = sources[country]
                .Select(job => details.TryGetValue(job.JobId, out var detail)
                    ? job with
                    {
                        AboutTheJobRaw = detail.Description,
                        PostedAtCandidate = detail.PostedAt,
                        ApplyUrlRaw = detail.ApplyUrl ?? job.ApplyUrlRaw
                    }
                    : job)
                .ToList();
        }

        return new StripeFetchResult(SearchUrl, sources);
    }

    private static bool IsFresh(StripeRawJobItem cached, string capturedAt)
    {
        if (string.IsNullOrWhiteSpace(cached.AboutTheJobRaw) || string.IsNullOrWhiteSpace(cached.PostedAtCandidate)) return false;
        return DateTimeOffset.TryParse(cached.CapturedAt, out var cachedAt) &&
            DateTimeOffset.TryParse(capturedAt, out var currentAt) &&
            currentAt - cachedAt < TimeSpan.FromDays(7);
    }

    private static async Task<Dictionary<string, StripeJobDetail>> FetchDetailsAsync(
        HttpClient client,
        List<StripeRawJobItem> jobs)
    {
        using var gate = new SemaphoreSlim(6);
        var tasks = jobs.Select(async job =>
        {
            await gate.WaitAsync();
            try
            {
                Console.WriteLine($"Fetching Stripe detail {job.JobUrl}");
                var html = await client.GetStringAsync(job.JobUrl);
                var match = NextDataPattern.Match(html);
                if (!match.Success) return (job.JobId, Detail: (StripeJobDetail?)null);

                using var document = JsonDocument.Parse(match.Groups["json"].Value);
                var listing = document.RootElement
                    .GetProperty("props")
                    .GetProperty("pageProps")
                    .GetProperty("listing");
                return (job.JobId, Detail: new StripeJobDetail(
                    ReadString(listing, "contentMarkdown"),
                    ReadString(listing, "postedAt"),
                    ReadString(listing, "applyUrl")));
            }
            catch (Exception exception)
            {
                Console.WriteLine($"Stripe detail failed for {job.JobId}: {exception.Message}");
                return (job.JobId, Detail: (StripeJobDetail?)null);
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

    private static bool IsEngineeringTitle(string title) =>
        title.Contains("engineer", StringComparison.OrdinalIgnoreCase) ||
        title.Contains("developer", StringComparison.OrdinalIgnoreCase);

    private static string? ReadString(JsonElement item, string propertyName)
    {
        if (!item.TryGetProperty(propertyName, out var value) || value.ValueKind is JsonValueKind.Null or JsonValueKind.Undefined) return null;
        return value.ValueKind == JsonValueKind.String ? value.GetString() : value.ToString();
    }
}

internal sealed record StripeRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("sources")] List<StripeRawSource> Sources);

internal sealed record StripeRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<StripeRawJobItem> Jobs);

internal sealed record StripeRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("employmentTypeRaw")] string? EmploymentTypeRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record StripeFetchResult(string SearchUrl, Dictionary<string, List<StripeRawJobItem>> JobsByCountry);

internal sealed record StripeJobDetail(string? Description, string? PostedAt, string? ApplyUrl);
