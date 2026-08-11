using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;

internal static class DatadogCollector
{
    private const string DefaultHost = "gk6e3zbyuntvc5dap.a1.typesense.net";
    private const string DefaultApiKey = "1Hwq7hntXp211hKvRS3CSI2QSU7w2gFm";
    private const string DefaultCollection = "careers_alias";
    private const string DefaultQuery = "software engeneer";
    private const string DefaultFilter = "child_department_Engineering:=[`Backend`] && region_EMEA:=[`EMEA`]";

    public static async Task<DatadogFetchResult> FetchAsync(string capturedAt)
    {
        var host = Environment.GetEnvironmentVariable("DATADOG_TYPESENSE_HOST")?.Trim() ?? DefaultHost;
        var apiKey = Environment.GetEnvironmentVariable("DATADOG_TYPESENSE_API_KEY")?.Trim() ?? DefaultApiKey;
        var collection = Environment.GetEnvironmentVariable("DATADOG_TYPESENSE_COLLECTION")?.Trim() ?? DefaultCollection;
        var query = Environment.GetEnvironmentVariable("DATADOG_JOBS_SEARCH_TERM")?.Trim() ?? DefaultQuery;
        var filter = Environment.GetEnvironmentVariable("DATADOG_JOBS_FILTER")?.Trim() ?? DefaultFilter;
        var searchUrl = BuildSearchUrl(host, collection, query, filter);

        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(45) };
        client.DefaultRequestHeaders.Add("x-typesense-api-key", apiKey);
        client.DefaultRequestHeaders.UserAgent.ParseAdd("CareersTracker/1.0");

        Console.WriteLine($"Fetching Datadog search {searchUrl}");
        var payload = await client.GetStringAsync(searchUrl);
        using var document = JsonDocument.Parse(payload);
        var jobs = new List<DatadogRawJobItem>();

        if (document.RootElement.TryGetProperty("hits", out var hits) && hits.ValueKind == JsonValueKind.Array)
        {
            foreach (var hit in hits.EnumerateArray())
            {
                if (!hit.TryGetProperty("document", out var item)) continue;
                var jobId = ReadString(item, "job_id");
                if (string.IsNullOrWhiteSpace(jobId)) continue;

                var location = ReadString(item, "location_string");
                jobs.Add(new DatadogRawJobItem(
                    jobId,
                    ReadString(item, "title"),
                    "Datadog",
                    SplitLocations(location),
                    ReadString(item, "absolute_url") ?? $"https://careers.datadoghq.com/detail/{jobId}/?gh_jid={jobId}",
                    searchUrl,
                    "EMEA",
                    ReadString(item, "absolute_url"),
                    WebUtility.HtmlDecode(ReadString(item, "description")),
                    ReadString(item, "department"),
                    ReadString(item, "team"),
                    null,
                    ReadString(item, "last_mod"),
                    capturedAt));
            }
        }

        return new DatadogFetchResult(searchUrl, query, filter, jobs);
    }

    private static string BuildSearchUrl(string host, string collection, string query, string filter)
    {
        return $"https://{host}/collections/{Uri.EscapeDataString(collection)}/documents/search" +
            $"?q={Uri.EscapeDataString(query)}&preset=careers_list_view" +
            $"&filter_by={Uri.EscapeDataString(filter)}&page=1&per_page=100";
    }

    private static string? ReadString(JsonElement item, string propertyName)
    {
        if (!item.TryGetProperty(propertyName, out var value) || value.ValueKind is JsonValueKind.Null or JsonValueKind.Undefined)
        {
            return null;
        }

        return value.ValueKind == JsonValueKind.String ? value.GetString() : value.ToString();
    }

    private static List<string> SplitLocations(string? value)
    {
        return string.IsNullOrWhiteSpace(value)
            ? new List<string>()
            : value.Split("; ", StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList();
    }
}

internal sealed record DatadogRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("filter")] string Filter,
    [property: JsonPropertyName("sources")] List<DatadogRawSource> Sources);

internal sealed record DatadogRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<DatadogRawJobItem> Jobs);

internal sealed record DatadogRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("departmentRaw")] string? DepartmentRaw,
    [property: JsonPropertyName("teamRaw")] string? TeamRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record DatadogFetchResult(string SearchUrl, string SearchTerm, string Filter, List<DatadogRawJobItem> Jobs);
