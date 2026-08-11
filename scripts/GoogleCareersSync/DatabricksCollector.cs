using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;

internal static class DatabricksCollector
{
    private const string PageDataUrl = "https://www.databricks.com/careers-assets/page-data/company/careers/open-positions/page-data.json";
    private static readonly string[] DefaultCountries =
    {
        "Switzerland", "United Kingdom", "Canada", "Germany", "Netherlands",
        "France", "Spain", "Czechia", "Ireland", "Poland"
    };

    public static async Task<DatabricksFetchResult> FetchAsync(string capturedAt)
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(60) };
        client.DefaultRequestHeaders.UserAgent.ParseAdd("CareersTracker/1.0");
        Console.WriteLine($"Fetching Databricks page data {PageDataUrl}");
        var payload = await client.GetStringAsync(PageDataUrl);
        using var document = JsonDocument.Parse(payload);
        var countries = GetCountries();
        var sources = countries.ToDictionary(
            static country => country,
            static _ => new List<DatabricksRawJobItem>(),
            StringComparer.Ordinal);

        var nodes = document.RootElement
            .GetProperty("result")
            .GetProperty("pageContext")
            .GetProperty("data")
            .GetProperty("allGreenhouseJob")
            .GetProperty("nodes");

        foreach (var item in nodes.EnumerateArray())
        {
            if (!IsEngineering(item)) continue;
            var location = ReadString(item.GetProperty("location"), "name") ?? string.Empty;
            var matchedCountries = countries
                .Where(country => location.Contains(country, StringComparison.OrdinalIgnoreCase))
                .ToList();
            if (matchedCountries.Count == 0) continue;

            var jobId = ReadString(item, "gh_Id");
            if (string.IsNullOrWhiteSpace(jobId)) continue;
            var job = new DatabricksRawJobItem(
                jobId,
                ReadString(item, "title"),
                "Databricks",
                location.Split("; ", StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList(),
                ReadString(item, "absolute_url") ?? $"https://www.databricks.com/company/careers/open-positions/job?gh_jid={jobId}",
                PageDataUrl,
                ReadString(item, "absolute_url"),
                WebUtility.HtmlDecode(ReadString(item, "content")),
                ReadArrayNames(item, "departments"),
                null,
                ReadString(item, "updated_at"),
                capturedAt);

            foreach (var country in matchedCountries)
            {
                sources[country].Add(job with { RequestedLocation = country });
            }
        }

        return new DatabricksFetchResult(PageDataUrl, sources);
    }

    private static bool IsEngineering(JsonElement item)
    {
        if (!item.TryGetProperty("metadata", out var metadata) || metadata.ValueKind != JsonValueKind.Array) return false;
        return metadata.EnumerateArray().Any(entry =>
            string.Equals(ReadString(entry, "filterDept"), "Engineering", StringComparison.Ordinal) &&
            entry.TryGetProperty("value", out var value) &&
            value.ValueKind == JsonValueKind.Array &&
            value.EnumerateArray().Any(element => string.Equals(element.GetString(), "Engineering", StringComparison.Ordinal)));
    }

    private static List<string> GetCountries()
    {
        var raw = Environment.GetEnvironmentVariable("DATABRICKS_JOBS_COUNTRIES");
        return string.IsNullOrWhiteSpace(raw)
            ? DefaultCountries.ToList()
            : raw.Split(new[] { '|', ';' }, StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList();
    }

    private static string? ReadString(JsonElement item, string propertyName)
    {
        if (!item.TryGetProperty(propertyName, out var value) || value.ValueKind is JsonValueKind.Null or JsonValueKind.Undefined) return null;
        return value.ValueKind == JsonValueKind.String ? value.GetString() : value.ToString();
    }

    private static List<string> ReadArrayNames(JsonElement item, string propertyName)
    {
        if (!item.TryGetProperty(propertyName, out var values) || values.ValueKind != JsonValueKind.Array) return new List<string>();
        return values.EnumerateArray()
            .Select(value => ReadString(value, "name"))
            .Where(static value => !string.IsNullOrWhiteSpace(value))
            .Select(static value => value!)
            .ToList();
    }
}

internal sealed record DatabricksRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("sources")] List<DatabricksRawSource> Sources);

internal sealed record DatabricksRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<DatabricksRawJobItem> Jobs);

internal sealed record DatabricksRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("departmentsRaw")] List<string> DepartmentsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation = "");

internal sealed record DatabricksFetchResult(string SearchUrl, Dictionary<string, List<DatabricksRawJobItem>> JobsByCountry);
