using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Globalization;

var mode = GetMode(args);
var root = FindRepositoryRoot();
var configPath = Path.Combine(root, "config", "google-careers-locations.json");
var outputPath = Path.Combine(root, "data", "google-careers-jobs.json");
var runsPath = Path.Combine(root, "data", "google-careers-runs.json");
var runDetailsPath = Path.Combine(root, "data", "google-careers-run-details.json");
var rawRunsDirectoryPath = Path.Combine(root, "data-raw", "google-careers", "runs");

var locations = LoadLocations(configPath);
var searchTerm = Environment.GetEnvironmentVariable("GOOGLE_CAREERS_SEARCH_TERM")?.Trim();
var maxPages = GetMaxPages();
if (string.IsNullOrWhiteSpace(searchTerm))
{
    searchTerm = "\"Software Engineer\"";
}

switch (mode)
{
    case PipelineMode.CollectAndAnalyze:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var previousDataset = LoadJsonOrDefault<JobDataset>(outputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(runsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(runDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        var fetchResult = await FetchJobsAsync(locations, searchTerm, runCapturedAt, maxPages);
        var rawRun = BuildRawRun(runId, runCapturedAt, searchTerm, fetchResult.RawSources);
        await WriteJsonFileAsync(Path.Combine(rawRunsDirectoryPath, $"{runId}.json"), rawRun);

        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), fetchResult.Jobs, runCapturedAt);
        var dataset = BuildDataset(locations, mergeResult.Jobs, searchTerm, runCapturedAt);
        var runsDataset = BuildRunsDataset(previousRuns, runId, runCapturedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, runId, mergeResult);
        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, dataset, runsDataset, runDetailsDataset);

        Console.WriteLine(
            $"Wrote dataset for {mergeResult.Jobs.Count} jobs to {outputPath} " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count})");
        break;
    }

    case PipelineMode.Collect:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var fetchResult = await FetchJobsAsync(locations, searchTerm, runCapturedAt, maxPages);
        var rawRun = BuildRawRun(runId, runCapturedAt, searchTerm, fetchResult.RawSources);

        Directory.CreateDirectory(rawRunsDirectoryPath);
        var rawRunPath = Path.Combine(rawRunsDirectoryPath, $"{runId}.json");
        await WriteJsonFileAsync(rawRunPath, rawRun);

        Console.WriteLine($"Collected raw run {runId} with {fetchResult.Jobs.Count} unique jobs.");
        break;
    }

    case PipelineMode.AnalyzeLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(rawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No raw runs found. Run collect first.");
        }

        var latestRawRun = LoadJsonOrDefault<RawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read raw run file '{latestRawRunPath}'.");

        var previousDataset = LoadJsonOrDefault<JobDataset>(outputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(runsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(runDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"Raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildDataset(locations, mergeResult.Jobs, latestRawRun.SearchTerm, latestRawRun.GeneratedAt);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);

        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, dataset, runsDataset, runDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

    case PipelineMode.Rebuild:
    {
        var rawRunPaths = GetRawRunFilePaths(rawRunsDirectoryPath);
        if (rawRunPaths.Count == 0)
        {
            throw new FileNotFoundException("No raw runs found. Run collect first.");
        }

        var rawRuns = rawRunPaths
            .Select(path => LoadJsonOrDefault<RawRun>(path) ?? throw new InvalidOperationException($"Could not read raw run file '{path}'."))
            .OrderBy(run => run.GeneratedAt, StringComparer.Ordinal)
            .ThenBy(run => run.RunId, StringComparer.Ordinal)
            .ToList();

        var currentJobs = new List<JobItem>();
        var currentRuns = new RunHistoryDataset(new List<RunSummary>());
        var currentRunDetails = new RunDetailsDataset(new List<RunDetail>());

        foreach (var rawRun in rawRuns)
        {
            var latestJobs = BuildJobsFromRawRun(rawRun);
            var mergeResult = MergeJobs(currentJobs, latestJobs, rawRun.GeneratedAt);
            currentJobs = mergeResult.Jobs;
            currentRuns = BuildRunsDataset(currentRuns, rawRun.RunId, rawRun.GeneratedAt, mergeResult);
            currentRunDetails = BuildRunDetailsDataset(currentRunDetails, rawRun.RunId, mergeResult);
        }

        var latestRawRun = rawRuns[^1];
        currentRunDetails = NormalizeRunDetails(currentRunDetails) ?? currentRunDetails;
        currentRuns = NormalizeRunHistory(currentRuns, currentRunDetails) ?? currentRuns;
        var dataset = BuildDataset(locations, currentJobs, latestRawRun.SearchTerm, latestRawRun.GeneratedAt);

        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, dataset, currentRuns, currentRunDetails);

        Console.WriteLine($"Rebuilt normalized datasets from {rawRuns.Count} raw runs.");
        break;
    }

    default:
        throw new InvalidOperationException($"Unsupported mode '{mode}'.");
}

return;

static PipelineMode GetMode(string[] args)
{
    if (args.Length == 0)
    {
        return PipelineMode.CollectAndAnalyze;
    }

    return args[0].Trim().ToLowerInvariant() switch
    {
        "collect" => PipelineMode.Collect,
        "analyze-latest" => PipelineMode.AnalyzeLatest,
        "rebuild" => PipelineMode.Rebuild,
        _ => throw new ArgumentOutOfRangeException(nameof(args), $"Unknown mode '{args[0]}'.")
    };
}

static async Task WriteNormalizedDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
}

static async Task WriteJsonFileAsync<T>(string path, T value)
{
    Directory.CreateDirectory(Path.GetDirectoryName(path)!);
    await File.WriteAllTextAsync(path, JsonSerializer.Serialize(value, JsonOptions()) + Environment.NewLine);
}

static List<string> GetRawRunFilePaths(string rawRunsDirectoryPath)
{
    if (!Directory.Exists(rawRunsDirectoryPath))
    {
        return new List<string>();
    }

    return Directory.GetFiles(rawRunsDirectoryPath, "*.json", SearchOption.TopDirectoryOnly)
        .OrderBy(path => Path.GetFileName(path), StringComparer.Ordinal)
        .ToList();
}

static List<JobItem> BuildJobsFromRawRun(RawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? null : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group => group.First())
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static string FindRepositoryRoot()
{
    var current = new DirectoryInfo(AppContext.BaseDirectory);

    while (current is not null)
    {
        var configDir = Path.Combine(current.FullName, "config");
        var scriptsDir = Path.Combine(current.FullName, "scripts");

        if (Directory.Exists(configDir) && Directory.Exists(scriptsDir))
        {
            return current.FullName;
        }

        current = current.Parent;
    }

    throw new DirectoryNotFoundException(
        "Could not locate the repository root containing both 'config' and 'scripts' directories.");
}

static List<LocationConfig> LoadLocations(string configPath)
{
    var envValue = Environment.GetEnvironmentVariable("GOOGLE_CAREERS_LOCATIONS");
    // У GitHub Actions можна підмінити список локацій через змінну середовища,
    // не редагуючи файл конфіга в репозиторії.
    var json = string.IsNullOrWhiteSpace(envValue)
        ? File.ReadAllText(configPath)
        : envValue;

    var locations = JsonSerializer.Deserialize<List<LocationConfig>>(json, JsonOptions());
    return locations ?? new List<LocationConfig>();
}

static int GetMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("GOOGLE_CAREERS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 5;
}

static T? LoadJsonOrDefault<T>(string path)
{
    if (!File.Exists(path))
    {
        return default;
    }

    return JsonSerializer.Deserialize<T>(File.ReadAllText(path), JsonOptions());
}

static RunHistoryDataset? NormalizeRunHistory(RunHistoryDataset? dataset, RunDetailsDataset? runDetailsDataset)
{
    if (dataset is null)
    {
        return null;
    }

    var detailsByRunId = (runDetailsDataset?.Runs ?? new List<RunDetail>())
        .ToDictionary(static detail => detail.RunId, StringComparer.Ordinal);

    var normalizedRuns = dataset.Runs
        .Select(run =>
        {
            if (run.PerLocation is { Count: > 0 })
            {
                return run;
            }

            if (!detailsByRunId.TryGetValue(run.RunId, out var detail))
            {
                return run with { PerLocation = new List<PerLocationRunSummary>() };
            }

            return run with
            {
                PerLocation = BackfillPerLocationSummaries(detail)
            };
        })
        .ToList();

    return dataset with { Runs = normalizedRuns };
}

static RunDetailsDataset? NormalizeRunDetails(RunDetailsDataset? dataset)
{
    if (dataset is null)
    {
        return null;
    }

    var normalizedRuns = dataset.Runs
        .Select(run =>
        {
            var normalizedRun = run with
            {
                Added = run.Added ?? new List<JobDeltaItem>(),
                Removed = run.Removed ?? new List<JobDeltaItem>(),
                Changed = run.Changed ?? new List<JobChangedDeltaItem>(),
                Unchanged = run.Unchanged ?? new List<JobDeltaItem>()
            };

            return normalizedRun with
            {
                PerLocation = run.PerLocation is { Count: > 0 }
                    ? run.PerLocation
                    : BackfillPerLocationDetails(normalizedRun)
            };
        })
        .ToList();

    return dataset with { Runs = normalizedRuns };
}

static List<PerLocationRunSummary> BackfillPerLocationSummaries(RunDetail detail)
{
    return BackfillPerLocationDetails(detail)
        .Select(static item =>
            new PerLocationRunSummary(
                item.Location,
                item.Added.Count + item.Changed.Count + item.Unchanged.Count,
                item.Added.Count,
                item.Removed.Count,
                item.Changed.Count,
                item.Unchanged.Count))
        .ToList();
}

static List<PerLocationRunDetail> BackfillPerLocationDetails(RunDetail detail)
{
    var locationKeys = detail.Added.Select(static item => item.RequestedLocation)
        .Concat(detail.Removed.Select(static item => item.RequestedLocation))
        .Concat(detail.Changed.Select(static item => item.RequestedLocation))
        .Concat(detail.Unchanged.Select(static item => item.RequestedLocation))
        .Distinct(StringComparer.Ordinal)
        .OrderBy(static key => key, StringComparer.OrdinalIgnoreCase);

    return locationKeys
        .Select(locationKey =>
            new PerLocationRunDetail(
                locationKey,
                detail.Added.Where(item => item.RequestedLocation == locationKey).ToList(),
                detail.Removed.Where(item => item.RequestedLocation == locationKey).ToList(),
                detail.Changed.Where(item => item.RequestedLocation == locationKey).ToList(),
                detail.Unchanged.Where(item => item.RequestedLocation == locationKey).ToList()))
        .ToList();
}

static async Task<FetchResult> FetchJobsAsync(
    List<LocationConfig> locations,
    string searchTerm,
    string capturedAt,
    int maxPages)
{
    using var httpClient = CreateHttpClient();
    var jobsById = new Dictionary<string, JobItem>(StringComparer.Ordinal);
    var rawSources = new List<RawSource>();

    foreach (var location in locations)
    {
        var sourceSearchUrl = BuildSearchUrl(location.Query, searchTerm, 1);
        var rawJobs = new List<RawJobItem>();
        var seenJobIdsForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 1; page <= maxPages; page += 1)
        {
            var searchUrl = BuildSearchUrl(location.Query, searchTerm, page);
            Console.WriteLine($"Fetching {searchUrl}");

            var html = await httpClient.GetStringAsync(searchUrl);
            var parseResult = ParseJobsFromHtml(html, location, searchUrl, capturedAt);
            if (parseResult.Jobs.Count == 0)
            {
                Console.WriteLine($"No jobs found on page {page} for {location.Label}. Stopping pagination.");
                break;
            }

            rawJobs.AddRange(parseResult.RawJobs);

            var newJobsOnPage = 0;
            foreach (var job in parseResult.Jobs)
            {
                if (seenJobIdsForLocation.Add(job.Id))
                {
                    newJobsOnPage += 1;
                }

                if (!jobsById.ContainsKey(job.Id))
                {
                    jobsById[job.Id] = job;
                }
            }

            if (newJobsOnPage == 0)
            {
                Console.WriteLine($"No new job ids on page {page} for {location.Label}. Stopping pagination.");
                break;
            }
        }

        rawSources.Add(
            new RawSource(
                location.Label,
                location.Slug,
                sourceSearchUrl,
                rawJobs));
    }

    return new FetchResult(
        jobsById.Values
            .OrderBy(job => job.Title, StringComparer.OrdinalIgnoreCase)
            .ThenBy(job => job.Id, StringComparer.Ordinal)
            .ToList(),
        rawSources);
}

static HttpClient CreateHttpClient()
{
    var client = new HttpClient();
    client.DefaultRequestHeaders.UserAgent.ParseAdd(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36");
    client.DefaultRequestHeaders.AcceptLanguage.ParseAdd("en-US,en;q=0.9");
    return client;
}

static string BuildSearchUrl(string locationQuery, string searchTerm, int page)
{
    var query = new Dictionary<string, string?>
    {
        ["location"] = locationQuery,
        ["q"] = searchTerm,
        ["page"] = page.ToString()
    };

    var encodedQuery = string.Join(
        "&",
        query.Select(item =>
            $"{Uri.EscapeDataString(item.Key)}={Uri.EscapeDataString(item.Value ?? string.Empty)}"));

    return $"https://www.google.com/about/careers/applications/jobs/results?{encodedQuery}";
}

static ParseResult ParseJobsFromHtml(
    string html,
    LocationConfig location,
    string searchUrl,
    string capturedAt)
{
    var payloadEntries = ParsePayloadEntries(html);
    var blocks = Regex.Split(html, "(?=<li class=\"lLd3Je\")", RegexOptions.CultureInvariant);
    var jobs = new List<JobItem>();
    var rawJobs = new List<RawJobItem>();

    foreach (var block in blocks)
    {
        var title = ExtractFirst(block, "<h3 class=\"QJPWVe\">(?<value>.*?)</h3>");
        var href = ExtractFirst(block, "href=\"(?<value>jobs/results/[^\"]+)\"");
        if (string.IsNullOrWhiteSpace(title) || string.IsNullOrWhiteSpace(href))
        {
            continue;
        }

        var company = ExtractFirst(
            block,
            "<span class=\"RP7SMd\">.*?<span[^>]*>(?<value>.*?)</span></span>");

        var locations = ExtractMany(block, "<span class=\"r0wTof(?: [^\"]*)?\"[^>]*>(?<value>.*?)</span>")
            .Select(static value => value.Trim().TrimStart(';').Trim())
            .Where(static value => !string.IsNullOrWhiteSpace(value))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        var normalizedHref = WebUtility.HtmlDecode(href);
        var id = ExtractJobId(normalizedHref);
        if (string.IsNullOrWhiteSpace(id))
        {
            continue;
        }

        payloadEntries.TryGetValue(id, out var payloadEntry);

        jobs.Add(
            new JobItem(
                id,
                HtmlDecode(title),
                string.IsNullOrWhiteSpace(company) ? null : HtmlDecode(company),
                locations,
                NormalizeJobUrl(normalizedHref),
                location.Label,
                searchUrl,
                payloadEntry?.PostedAtCandidate,
                payloadEntry?.UpdatedAtCandidate));

        rawJobs.Add(
            new RawJobItem(
                id,
                title,
                company,
                locations,
                payloadEntry?.LocationsRawDetailed,
                NormalizeJobUrl(normalizedHref),
                searchUrl,
                location.Label,
                payloadEntry?.ApplyUrlRaw,
                payloadEntry?.AboutTheJobRaw,
                payloadEntry?.ResponsibilitiesRaw,
                payloadEntry?.MinimumQualificationsRaw,
                payloadEntry?.PreferredQualificationsRaw,
                payloadEntry?.ExperienceLevelRaw,
                payloadEntry?.ExperienceLevelDescriptionRaw,
                payloadEntry?.RawTimestampPairs ?? new List<string>(),
                payloadEntry?.PostedAtCandidate,
                payloadEntry?.UpdatedAtCandidate,
                payloadEntry?.CompanyProjectPathRaw,
                payloadEntry?.LanguageRaw,
                payloadEntry?.BrandRaw,
                payloadEntry?.CityRaw,
                payloadEntry?.RegionCodeRaw,
                payloadEntry?.CountryCodeRaw,
                payloadEntry?.PostalCodeRaw,
                payloadEntry?.RawPayloadFragment,
                capturedAt));
    }

    return new ParseResult(jobs, rawJobs);
}

static Dictionary<string, PayloadEntry> ParsePayloadEntries(string html)
{
    var entries = new Dictionary<string, PayloadEntry>(StringComparer.Ordinal);
    var matches = Regex.Matches(
        html,
        "\\[\"(?<id>\\d+)\",\"(?<title>(?:\\\\.|[^\"\\\\])*)\",\"(?<applyUrl>(?:\\\\.|[^\"\\\\])*)\"(?<tail>.*?)\\],\\[\"(?<nextId>\\d+)\"",
        RegexOptions.CultureInvariant | RegexOptions.Singleline);

    foreach (Match match in matches)
    {
        var id = match.Groups["id"].Value;
        var tail = match.Groups["tail"].Value;
        var timestamps = Regex.Matches(
                tail,
                "\\[(?<seconds>\\d{10}),(?<nanos>\\d{6,9})\\]",
                RegexOptions.CultureInvariant)
            .Select(static item => ToIsoTimestamp(item.Groups["seconds"].Value, item.Groups["nanos"].Value))
            .Distinct(StringComparer.Ordinal)
            .OrderBy(static value => value, StringComparer.Ordinal)
            .ToList();

        if (timestamps.Count == 0)
        {
            timestamps = new List<string>();
        }

        var groups = Regex.Matches(tail, "\\[(?<content>[^\\[\\]]+)\\]", RegexOptions.CultureInvariant | RegexOptions.Singleline)
            .Select(static match => match.Groups["content"].Value)
            .ToList();

        var minimumQualificationsRaw = ExtractHtmlListAfterLabel(tail, "Minimum qualifications:");
        var preferredQualificationsRaw = ExtractHtmlListAfterLabel(tail, "Preferred qualifications:");
        var responsibilitiesRaw = ExtractNthHtmlList(tail, 0);
        var aboutTheJobRaw = ExtractNthParagraphBlock(tail, 0);
        var detailedLocations = ExtractDetailedLocations(tail);
        var firstLocation = detailedLocations.FirstOrDefault();
        var experienceLevelRaw = ExtractExperienceLevel(groups);
        var experienceLevelDescriptionRaw = ExtractExperienceDescription(groups);

        entries[id] = new PayloadEntry(
            HtmlDecode(match.Groups["title"].Value),
            WebUtility.HtmlDecode(match.Groups["applyUrl"].Value),
            timestamps.FirstOrDefault(),
            timestamps.LastOrDefault(),
            timestamps,
            CleanRawHtml(responsibilitiesRaw),
            CleanRawHtml(minimumQualificationsRaw),
            CleanRawHtml(preferredQualificationsRaw),
            CleanRawHtml(aboutTheJobRaw),
            detailedLocations,
            experienceLevelRaw,
            experienceLevelDescriptionRaw,
            ExtractProjectPath(groups),
            ExtractLanguageRaw(groups),
            ExtractBrandRaw(groups),
            firstLocation?.City,
            firstLocation?.RegionCode,
            firstLocation?.CountryCode,
            firstLocation?.PostalCode,
            tail[..Math.Min(tail.Length, 4000)]);
    }

    return entries;
}

static string ToIsoTimestamp(string secondsValue, string nanosValue)
{
    var seconds = long.Parse(secondsValue);
    var nanos = long.Parse(nanosValue);
    var dateTimeOffset = DateTimeOffset.FromUnixTimeSeconds(seconds).AddTicks(nanos / 100);
    return dateTimeOffset.ToString("O");
}

static string NormalizeJobUrl(string href)
{
    return href.StartsWith("http", StringComparison.OrdinalIgnoreCase)
        ? href
        : $"https://www.google.com/about/careers/applications/{href.TrimStart('/')}";
}

static string? ExtractJobId(string href)
{
    var match = Regex.Match(
        href,
        @"jobs/results/(?<id>\d+)-",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);

    return match.Success ? match.Groups["id"].Value : null;
}

static string? ExtractFirst(string input, string pattern)
{
    var match = Regex.Match(
        input,
        pattern,
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);

    return match.Success ? match.Groups["value"].Value : null;
}

static List<string> ExtractMany(string input, string pattern)
{
    return Regex.Matches(
            input,
            pattern,
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline)
        .Select(static match => match.Groups["value"].Value)
        .ToList();
}

static string HtmlDecode(string value)
{
    return WebUtility.HtmlDecode(value).Trim();
}

static string? CleanRawHtml(string? value)
{
    if (string.IsNullOrWhiteSpace(value))
    {
        return null;
    }

    return WebUtility.HtmlDecode(value).Trim();
}

static string? ExtractNthHtmlList(string input, int index)
{
    var matches = Regex.Matches(
        input,
        @"\[null,""(?<value>.*?<ul>.*?</ul>)""\]",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);

    return matches.Count > index ? matches[index].Groups["value"].Value : null;
}

static string? ExtractHtmlListAfterLabel(string input, string label)
{
    var pattern =
        Regex.Escape(label).Replace(":", @"\s*:") +
        @"</h3>(?<value>.*?<ul>.*?</ul>)";

    var match = Regex.Match(
        input,
        pattern,
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);

    return match.Success ? match.Groups["value"].Value : null;
}

static string? ExtractNthParagraphBlock(string input, int index)
{
    var matches = Regex.Matches(
        input,
        @"\[(?:null,)?""(?<value>.*?(?:</p>|</div>))""\]",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);

    return matches.Count > index ? matches[index].Groups["value"].Value : null;
}

static List<RawLocationDetail> ExtractDetailedLocations(string input)
{
    var matches = Regex.Matches(
        input,
        "\\[\\[\"(?<display>(?:\\\\.|[^\"\\\\])*)\",\\[(?<addresses>.*?)\\],\"(?<city>(?:\\\\.|[^\"\\\\])*)\",(?<postal>null|\"(?:\\\\.|[^\"\\\\])*\"),\"(?<region>(?:\\\\.|[^\"\\\\])*)\",\"(?<country>(?:\\\\.|[^\"\\\\])*)\"\\]",
        RegexOptions.CultureInvariant | RegexOptions.Singleline);

    var locations = new List<RawLocationDetail>();
    foreach (Match match in matches)
    {
        var postal = match.Groups["postal"].Value;
        locations.Add(
            new RawLocationDetail(
                WebUtility.HtmlDecode(UnescapePayloadString(match.Groups["display"].Value)),
                ExtractAddresses(match.Groups["addresses"].Value),
                EmptyToNull(UnescapePayloadString(match.Groups["city"].Value)),
                postal == "null" ? null : EmptyToNull(UnescapePayloadString(postal.Trim('"'))),
                EmptyToNull(UnescapePayloadString(match.Groups["region"].Value)),
                EmptyToNull(UnescapePayloadString(match.Groups["country"].Value))));
    }

    return locations;
}

static List<string> ExtractAddresses(string input)
{
    return Regex.Matches(input, "\"(?<value>(?:\\\\.|[^\"\\\\])*)\"", RegexOptions.CultureInvariant)
        .Select(static match => WebUtility.HtmlDecode(UnescapePayloadString(match.Groups["value"].Value)))
        .Where(static value => !string.IsNullOrWhiteSpace(value))
        .ToList();
}

static string? ExtractProjectPath(List<string> groups)
{
    return groups
        .Select(static group => Regex.Match(group, @"""(?<value>projects/[^""]+)""", RegexOptions.CultureInvariant))
        .FirstOrDefault(static match => match.Success)?
        .Groups["value"].Value;
}

static string? ExtractLanguageRaw(List<string> groups)
{
    return groups
        .Select(static group => Regex.Match(group, @"""(?<value>[a-z]{2}-[A-Z]{2})""", RegexOptions.CultureInvariant))
        .FirstOrDefault(static match => match.Success)?
        .Groups["value"].Value;
}

static string? ExtractBrandRaw(List<string> groups)
{
    return groups
        .Select(static group => Regex.Match(group, @"""(?<value>Google|YouTube|Fitbit|DeepMind)""", RegexOptions.CultureInvariant))
        .FirstOrDefault(static match => match.Success)?
        .Groups["value"].Value;
}

static string? ExtractExperienceLevel(List<string> groups)
{
    var knownLevels = new[] { "Early", "Mid", "Advanced" };
    foreach (var group in groups)
    {
        foreach (var level in knownLevels)
        {
            if (group.Contains($"\"{level}\"", StringComparison.Ordinal))
            {
                return level;
            }
        }
    }

    return null;
}

static string? ExtractExperienceDescription(List<string> groups)
{
    return groups
        .Select(static group => Regex.Match(group, @"""(?<value>Experience [^""]+)""", RegexOptions.CultureInvariant))
        .FirstOrDefault(static match => match.Success)
        ?.Groups["value"].Value;
}

static string UnescapePayloadString(string value)
{
    return Regex.Unescape(value);
}

static string? EmptyToNull(string? value)
{
    return string.IsNullOrWhiteSpace(value) ? null : value;
}

static RawRun BuildRawRun(
    string runId,
    string generatedAt,
    string searchTerm,
    List<RawSource> rawSources)
{
    return new RawRun(runId, generatedAt, searchTerm, rawSources);
}

static MergeResult MergeJobs(
    List<JobItem> previousJobs,
    List<JobItem> latestJobs,
    string generatedAt)
{
    var previousById = previousJobs.ToDictionary(static job => job.Id, StringComparer.Ordinal);
    var latestById = latestJobs.ToDictionary(static job => job.Id, StringComparer.Ordinal);
    var mergedJobs = new List<JobItem>();
    var added = new List<JobDeltaItem>();
    var removed = new List<JobDeltaItem>();
    var unchanged = new List<JobDeltaItem>();
    var changed = new List<JobChangedDeltaItem>();

    foreach (var latestJob in latestJobs)
    {
        var latestHash = ComputeContentHash(latestJob);
        if (previousById.TryGetValue(latestJob.Id, out var previousJob))
        {
            var previousHash = previousJob.ContentHash ?? ComputeContentHash(previousJob);
            var mergedJob = latestJob with
            {
                FirstSeenAt = previousJob.FirstSeenAt ?? generatedAt,
                LastSeenAt = generatedAt,
                IsActive = true,
                ContentHash = latestHash
            };

            mergedJobs.Add(mergedJob);
            if (previousHash == latestHash)
            {
                unchanged.Add(ToDeltaItem(mergedJob));
            }
            else
            {
                changed.Add(
                    new JobChangedDeltaItem(
                        mergedJob.Id,
                        mergedJob.Title,
                        mergedJob.Company,
                        mergedJob.Url,
                        mergedJob.Locations,
                        mergedJob.RequestedLocation,
                        previousHash,
                        latestHash,
                        GetChangedFields(previousJob, mergedJob)));
            }
        }
        else
        {
            var mergedJob = latestJob with
            {
                FirstSeenAt = generatedAt,
                LastSeenAt = generatedAt,
                IsActive = true,
                ContentHash = latestHash
            };

            mergedJobs.Add(mergedJob);
            added.Add(ToDeltaItem(mergedJob));
        }
    }

    foreach (var previousJob in previousJobs)
    {
        if (latestById.ContainsKey(previousJob.Id))
        {
            continue;
        }

        var inactiveJob = previousJob with
        {
            LastSeenAt = previousJob.LastSeenAt ?? generatedAt,
            IsActive = false
        };

        mergedJobs.Add(inactiveJob);
        removed.Add(ToDeltaItem(inactiveJob));
    }

    return new MergeResult(
        mergedJobs
            .OrderByDescending(static job => job.IsActive)
            .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
            .ThenBy(static job => job.Id, StringComparer.Ordinal)
            .ToList(),
        added.OrderBy(static item => item.Title, StringComparer.OrdinalIgnoreCase).ToList(),
        removed.OrderBy(static item => item.Title, StringComparer.OrdinalIgnoreCase).ToList(),
        changed.OrderBy(static item => item.Title, StringComparer.OrdinalIgnoreCase).ToList(),
        unchanged.OrderBy(static item => item.Title, StringComparer.OrdinalIgnoreCase).ToList());
}

static JobDeltaItem ToDeltaItem(JobItem job)
{
    return new JobDeltaItem(job.Id, job.Title, job.Company, job.Url, job.Locations, job.RequestedLocation);
}

static RunHistoryDataset BuildRunsDataset(
    RunHistoryDataset previousRuns,
    string runId,
    string generatedAt,
    MergeResult mergeResult)
{
    var runs = previousRuns.Runs.ToList();
    runs.Add(
        new RunSummary(
            runId,
            generatedAt,
            mergeResult.Jobs.Count(static job => job.IsActive),
            mergeResult.Added.Count,
            mergeResult.Removed.Count,
            mergeResult.Changed.Count,
            mergeResult.Unchanged.Count,
            BuildPerLocationRunSummaries(mergeResult)));

    return new RunHistoryDataset(runs);
}

static RunDetailsDataset BuildRunDetailsDataset(
    RunDetailsDataset previousRunDetails,
    string runId,
    MergeResult mergeResult)
{
    var runs = previousRunDetails.Runs.ToList();
    runs.Add(
        new RunDetail(
            runId,
            mergeResult.Added,
            mergeResult.Removed,
            mergeResult.Changed,
            mergeResult.Unchanged,
            BuildPerLocationRunDetails(mergeResult)));

    return new RunDetailsDataset(runs);
}

static List<PerLocationRunSummary> BuildPerLocationRunSummaries(MergeResult mergeResult)
{
    var locationKeys = mergeResult.Jobs
        .Select(static job => job.RequestedLocation)
        .Concat(mergeResult.Added.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Removed.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Changed.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Unchanged.Select(static item => item.RequestedLocation))
        .Distinct(StringComparer.Ordinal)
        .OrderBy(static key => key, StringComparer.OrdinalIgnoreCase);

    return locationKeys
        .Select(locationKey =>
            new PerLocationRunSummary(
                locationKey,
                mergeResult.Jobs.Count(job => job.IsActive && job.RequestedLocation == locationKey),
                mergeResult.Added.Count(item => item.RequestedLocation == locationKey),
                mergeResult.Removed.Count(item => item.RequestedLocation == locationKey),
                mergeResult.Changed.Count(item => item.RequestedLocation == locationKey),
                mergeResult.Unchanged.Count(item => item.RequestedLocation == locationKey)))
        .ToList();
}

static List<PerLocationRunDetail> BuildPerLocationRunDetails(MergeResult mergeResult)
{
    var locationKeys = mergeResult.Jobs
        .Select(static job => job.RequestedLocation)
        .Concat(mergeResult.Added.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Removed.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Changed.Select(static item => item.RequestedLocation))
        .Concat(mergeResult.Unchanged.Select(static item => item.RequestedLocation))
        .Distinct(StringComparer.Ordinal)
        .OrderBy(static key => key, StringComparer.OrdinalIgnoreCase);

    return locationKeys
        .Select(locationKey =>
            new PerLocationRunDetail(
                locationKey,
                mergeResult.Added.Where(item => item.RequestedLocation == locationKey).ToList(),
                mergeResult.Removed.Where(item => item.RequestedLocation == locationKey).ToList(),
                mergeResult.Changed.Where(item => item.RequestedLocation == locationKey).ToList(),
                mergeResult.Unchanged.Where(item => item.RequestedLocation == locationKey).ToList()))
        .ToList();
}

static string ComputeContentHash(JobItem job)
{
    var normalizedLocations = job.Locations
        .Select(static location => NormalizeForHash(location))
        .OrderBy(static value => value, StringComparer.Ordinal)
        .ToList();

    var payload = string.Join(
        "\n",
        new[]
        {
            $"title={NormalizeForHash(job.Title)}",
            $"company={NormalizeForHash(job.Company)}",
            $"locations={string.Join("|", normalizedLocations)}",
            $"url={NormalizeForHash(job.Url)}",
            $"postedAtCandidate={NormalizeForHash(job.PostedAtCandidate)}",
            $"updatedAtCandidate={NormalizeForHash(job.UpdatedAtCandidate)}"
        });

    var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(payload));
    return Convert.ToHexString(bytes).ToLowerInvariant();
}

static string NormalizeForHash(string? value)
{
    return string.IsNullOrWhiteSpace(value) ? "" : value.Trim();
}

static List<string> GetChangedFields(JobItem previousJob, JobItem currentJob)
{
    var changedFields = new List<string>();

    if (!string.Equals(previousJob.Title, currentJob.Title, StringComparison.Ordinal))
    {
        changedFields.Add("title");
    }

    if (!string.Equals(previousJob.Company, currentJob.Company, StringComparison.Ordinal))
    {
        changedFields.Add("company");
    }

    if (!previousJob.Locations.SequenceEqual(currentJob.Locations, StringComparer.Ordinal))
    {
        changedFields.Add("locations");
    }

    if (!string.Equals(previousJob.Url, currentJob.Url, StringComparison.Ordinal))
    {
        changedFields.Add("url");
    }

    if (!string.Equals(previousJob.PostedAtCandidate, currentJob.PostedAtCandidate, StringComparison.Ordinal))
    {
        changedFields.Add("postedAtCandidate");
    }

    if (!string.Equals(previousJob.UpdatedAtCandidate, currentJob.UpdatedAtCandidate, StringComparison.Ordinal))
    {
        changedFields.Add("updatedAtCandidate");
    }

    return changedFields;
}

static JobDataset BuildDataset(
    List<LocationConfig> locations,
    List<JobItem> jobs,
    string searchTerm,
    string generatedAt)
{
    return new JobDataset(
        generatedAt,
        "Google Careers",
        "success",
        $"Fetched {jobs.Count} jobs for query {searchTerm}.",
        searchTerm,
        locations,
        jobs);
}

static JsonSerializerOptions JsonOptions()
{
    return new JsonSerializerOptions
    {
        // Файл читається сайтом напряму, тому читабельний JSON зручніший для дебагу.
        WriteIndented = true,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
    };
}

internal sealed record LocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("query")] string Query);

internal sealed record JobItem(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt = null,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt = null,
    [property: JsonPropertyName("isActive")] bool IsActive = true,
    [property: JsonPropertyName("contentHash")] string? ContentHash = null);

internal sealed record PayloadEntry(
    string? TitleRaw,
    string? ApplyUrlRaw,
    string? PostedAtCandidate,
    string? UpdatedAtCandidate,
    List<string> RawTimestampPairs,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw,
    string? AboutTheJobRaw,
    List<RawLocationDetail> LocationsRawDetailed,
    string? ExperienceLevelRaw,
    string? ExperienceLevelDescriptionRaw,
    string? CompanyProjectPathRaw,
    string? LanguageRaw,
    string? BrandRaw,
    string? CityRaw,
    string? RegionCodeRaw,
    string? CountryCodeRaw,
    string? PostalCodeRaw,
    string? RawPayloadFragment);

internal sealed record RawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("sources")] List<RawSource> Sources);

internal sealed record RawSource(
    [property: JsonPropertyName("location")] string Location,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<RawJobItem> Jobs);

internal sealed record RawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("locationsRawDetailed")] List<RawLocationDetail>? LocationsRawDetailed,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("experienceLevelRaw")] string? ExperienceLevelRaw,
    [property: JsonPropertyName("experienceLevelDescriptionRaw")] string? ExperienceLevelDescriptionRaw,
    [property: JsonPropertyName("rawTimestampPairs")] List<string> RawTimestampPairs,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("companyProjectPathRaw")] string? CompanyProjectPathRaw,
    [property: JsonPropertyName("languageRaw")] string? LanguageRaw,
    [property: JsonPropertyName("brandRaw")] string? BrandRaw,
    [property: JsonPropertyName("cityRaw")] string? CityRaw,
    [property: JsonPropertyName("regionCodeRaw")] string? RegionCodeRaw,
    [property: JsonPropertyName("countryCodeRaw")] string? CountryCodeRaw,
    [property: JsonPropertyName("postalCodeRaw")] string? PostalCodeRaw,
    [property: JsonPropertyName("rawPayloadFragment")] string? RawPayloadFragment,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record RawLocationDetail(
    [property: JsonPropertyName("displayName")] string DisplayName,
    [property: JsonPropertyName("addresses")] List<string> Addresses,
    [property: JsonPropertyName("city")] string? City,
    [property: JsonPropertyName("postalCode")] string? PostalCode,
    [property: JsonPropertyName("regionCode")] string? RegionCode,
    [property: JsonPropertyName("countryCode")] string? CountryCode);

internal sealed record FetchResult(
    List<JobItem> Jobs,
    List<RawSource> RawSources);

internal sealed record ParseResult(
    List<JobItem> Jobs,
    List<RawJobItem> RawJobs);

internal sealed record MergeResult(
    List<JobItem> Jobs,
    List<JobDeltaItem> Added,
    List<JobDeltaItem> Removed,
    List<JobChangedDeltaItem> Changed,
    List<JobDeltaItem> Unchanged);

internal sealed record RunHistoryDataset(
    [property: JsonPropertyName("runs")] List<RunSummary> Runs);

internal sealed record RunSummary(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("totalJobs")] int TotalJobs,
    [property: JsonPropertyName("addedCount")] int AddedCount,
    [property: JsonPropertyName("removedCount")] int RemovedCount,
    [property: JsonPropertyName("changedCount")] int ChangedCount,
    [property: JsonPropertyName("unchangedCount")] int UnchangedCount,
    [property: JsonPropertyName("perLocation")] List<PerLocationRunSummary> PerLocation);

internal sealed record RunDetailsDataset(
    [property: JsonPropertyName("runs")] List<RunDetail> Runs);

internal sealed record RunDetail(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("added")] List<JobDeltaItem> Added,
    [property: JsonPropertyName("removed")] List<JobDeltaItem> Removed,
    [property: JsonPropertyName("changed")] List<JobChangedDeltaItem> Changed,
    [property: JsonPropertyName("unchanged")] List<JobDeltaItem> Unchanged,
    [property: JsonPropertyName("perLocation")] List<PerLocationRunDetail> PerLocation);

internal sealed record PerLocationRunSummary(
    [property: JsonPropertyName("location")] string Location,
    [property: JsonPropertyName("totalJobs")] int TotalJobs,
    [property: JsonPropertyName("addedCount")] int AddedCount,
    [property: JsonPropertyName("removedCount")] int RemovedCount,
    [property: JsonPropertyName("changedCount")] int ChangedCount,
    [property: JsonPropertyName("unchangedCount")] int UnchangedCount);

internal sealed record PerLocationRunDetail(
    [property: JsonPropertyName("location")] string Location,
    [property: JsonPropertyName("added")] List<JobDeltaItem> Added,
    [property: JsonPropertyName("removed")] List<JobDeltaItem> Removed,
    [property: JsonPropertyName("changed")] List<JobChangedDeltaItem> Changed,
    [property: JsonPropertyName("unchanged")] List<JobDeltaItem> Unchanged);

internal sealed record JobDeltaItem(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation);

internal sealed record JobChangedDeltaItem(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("previousHash")] string PreviousHash,
    [property: JsonPropertyName("currentHash")] string CurrentHash,
    [property: JsonPropertyName("changedFields")] List<string> ChangedFields);

internal sealed record JobDataset(
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("status")] string Status,
    [property: JsonPropertyName("notes")] string Notes,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("locations")] List<LocationConfig> Locations,
    [property: JsonPropertyName("jobs")] List<JobItem> Jobs);

internal enum PipelineMode
{
    CollectAndAnalyze,
    Collect,
    AnalyzeLatest,
    Rebuild
}
