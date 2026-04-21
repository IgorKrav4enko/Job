using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Globalization;
using System.Diagnostics;

const int MicrosoftSearchPageSize = 10;
const int NvidiaSearchPageSize = 10;
const int AmazonSearchPageSize = 10;

var mode = GetMode(args);
var root = FindRepositoryRoot();
var configPath = Path.Combine(root, "config", "google-careers-locations.json");
var outputPath = Path.Combine(root, "data", "google-careers-jobs.json");
var runsPath = Path.Combine(root, "data", "google-careers-runs.json");
var runDetailsPath = Path.Combine(root, "data", "google-careers-run-details.json");
var removedDetailsPath = Path.Combine(root, "data", "google-careers-removed-details.json");
var rawRunsDirectoryPath = Path.Combine(root, "data-raw", "google-careers", "runs");
var metaConfigPath = Path.Combine(root, "config", "meta-careers-locations.json");
var metaOutputPath = Path.Combine(root, "data", "meta-careers-jobs.json");
var metaRunsPath = Path.Combine(root, "data", "meta-careers-runs.json");
var metaRunDetailsPath = Path.Combine(root, "data", "meta-careers-run-details.json");
var metaRemovedDetailsPath = Path.Combine(root, "data", "meta-careers-removed-details.json");
var metaRawRunsDirectoryPath = Path.Combine(root, "data-raw", "meta-careers", "runs");
var metaFixturesDirectoryPath = Path.Combine(root, "data-debug", "meta-careers", "fixtures");
var appleOutputPath = Path.Combine(root, "data", "apple-careers-jobs.json");
var appleRunsPath = Path.Combine(root, "data", "apple-careers-runs.json");
var appleRunDetailsPath = Path.Combine(root, "data", "apple-careers-run-details.json");
var appleRemovedDetailsPath = Path.Combine(root, "data", "apple-careers-removed-details.json");
var appleRawRunsDirectoryPath = Path.Combine(root, "data-raw", "apple-jobs", "runs");
var microsoftConfigPath = Path.Combine(root, "config", "microsoft-careers-locations.json");
var microsoftOutputPath = Path.Combine(root, "data", "microsoft-careers-jobs.json");
var microsoftRunsPath = Path.Combine(root, "data", "microsoft-careers-runs.json");
var microsoftRunDetailsPath = Path.Combine(root, "data", "microsoft-careers-run-details.json");
var microsoftRemovedDetailsPath = Path.Combine(root, "data", "microsoft-careers-removed-details.json");
var microsoftRawRunsDirectoryPath = Path.Combine(root, "data-raw", "microsoft-careers", "runs");
var microsoftFixturesDirectoryPath = Path.Combine(root, "data-debug", "microsoft-careers", "payloads");
var nvidiaConfigPath = Path.Combine(root, "config", "nvidia-careers-locations.json");
var nvidiaOutputPath = Path.Combine(root, "data", "nvidia-careers-jobs.json");
var nvidiaRunsPath = Path.Combine(root, "data", "nvidia-careers-runs.json");
var nvidiaRunDetailsPath = Path.Combine(root, "data", "nvidia-careers-run-details.json");
var nvidiaRemovedDetailsPath = Path.Combine(root, "data", "nvidia-careers-removed-details.json");
var nvidiaRawRunsDirectoryPath = Path.Combine(root, "data-raw", "nvidia-careers", "runs");
var nvidiaFixturesDirectoryPath = Path.Combine(root, "data-debug", "nvidia-careers", "payloads");
var amazonConfigPath = Path.Combine(root, "config", "amazon-jobs-locations.json");
var amazonOutputPath = Path.Combine(root, "data", "amazon-jobs-jobs.json");
var amazonRunsPath = Path.Combine(root, "data", "amazon-jobs-runs.json");
var amazonRunDetailsPath = Path.Combine(root, "data", "amazon-jobs-run-details.json");
var amazonRemovedDetailsPath = Path.Combine(root, "data", "amazon-jobs-removed-details.json");
var amazonRawRunsDirectoryPath = Path.Combine(root, "data-raw", "amazon-jobs", "runs");
var amazonFixturesDirectoryPath = Path.Combine(root, "data-debug", "amazon-jobs", "payloads");

var locations = LoadLocations(configPath);
var searchTerm = Environment.GetEnvironmentVariable("GOOGLE_CAREERS_SEARCH_TERM")?.Trim();
var maxPages = GetMaxPages();
if (string.IsNullOrWhiteSpace(searchTerm))
{
    searchTerm = "\"Software Engineer\"";
}

switch (mode)
{
    case PipelineMode.ParseHtml:
    {
        var htmlPath = args.Length > 1
            ? args[1]
            : throw new ArgumentException("Usage: dotnet run -- parse-html <htmlPath> [label] [slug] [query] [outPath]");
        var label = args.Length > 2 ? args[2] : "Local HTML";
        var slug = args.Length > 3 ? args[3] : "local-html";
        var query = args.Length > 4 ? args[4] : label;
        var outPath = args.Length > 5 ? args[5] : null;
        var capturedAt = DateTimeOffset.UtcNow.ToString("O");
        var html = await File.ReadAllTextAsync(htmlPath);
        var location = new LocationConfig(slug, label, query);
        var result = ParseJobsFromHtml(html, location, $"file://{Path.GetFullPath(htmlPath)}", capturedAt);
        var preview = BuildParseHtmlPreview(htmlPath, location, capturedAt, result);

        Console.WriteLine($"Parsed {result.Jobs.Count} visible jobs from {htmlPath}.");
        Console.WriteLine($"Raw jobs with about: {preview.Summary.WithAbout}");
        Console.WriteLine($"Raw jobs with responsibilities: {preview.Summary.WithResponsibilities}");
        Console.WriteLine($"Raw jobs with minimum qualifications: {preview.Summary.WithMinimumQualifications}");
        Console.WriteLine($"Raw jobs with preferred qualifications: {preview.Summary.WithPreferredQualifications}");
        Console.WriteLine($"Raw jobs with apply link: {preview.Summary.WithApplyLink}");

        if (!string.IsNullOrWhiteSpace(outPath))
        {
            await WriteJsonFileAsync(outPath, preview);
            Console.WriteLine($"Wrote parse preview to {outPath}.");
        }

        break;
    }

    case PipelineMode.CollectMeta:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var metaLocations = LoadMetaLocations(metaConfigPath);
        var metaSearchTerm = GetMetaSearchTerm();
        var maxMetaPages = GetMetaMaxPages();
        var maxMetaDetails = GetMetaMaxDetails();
        var fetchResult = ShouldFetchMetaLive()
            ? await FetchMetaJobsAsync(metaLocations, metaSearchTerm, runCapturedAt, maxMetaPages, maxMetaDetails)
            : await FetchMetaJobsFromCacheAsync(metaFixturesDirectoryPath, runCapturedAt, maxMetaDetails);
        var rawRun = new MetaRawRun(runId, runCapturedAt, "meta-careers", fetchResult.Sources);

        Directory.CreateDirectory(metaRawRunsDirectoryPath);
        var rawRunPath = Path.Combine(metaRawRunsDirectoryPath, $"{runId}.json");
        await WriteJsonFileAsync(rawRunPath, rawRun);

        Console.WriteLine($"Collected Meta raw run {runId} with {fetchResult.JobCount} unique jobs.");
        Console.WriteLine($"Wrote {rawRunPath}.");
        break;
    }

    case PipelineMode.NormalizeMetaLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(metaRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Meta raw runs found. Run collect-meta first.");
        }

        var latestRawRun = LoadJsonOrDefault<MetaRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Meta raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(metaOutputPath);
        var latestJobs = BuildMetaJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildMetaDataset(LoadMetaLocations(metaConfigPath), mergeResult.Jobs, latestRawRun.GeneratedAt);

        await WriteJsonFileAsync(metaOutputPath, dataset);

        Console.WriteLine(
            $"Normalized latest Meta raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"({mergeResult.Jobs.Count(static job => job.IsActive)} active / " +
            $"{mergeResult.Jobs.Count(static job => !job.IsActive)} inactive).");
        Console.WriteLine($"Wrote {metaOutputPath}.");
        break;
    }

    case PipelineMode.AnalyzeMetaLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(metaRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Meta raw runs found. Run collect-meta first.");
        }

        var latestRawRun = LoadJsonOrDefault<MetaRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Meta raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(metaOutputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(metaRunsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(metaRunDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"Meta raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildMetaJobsFromRawRun(latestRawRun);
        var previousJobs = previousRuns.Runs.Count == 0
            ? new List<JobItem>()
            : previousDataset?.Jobs ?? new List<JobItem>();
        var mergeResult = MergeJobs(previousJobs, latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildMetaDataset(LoadMetaLocations(metaConfigPath), mergeResult.Jobs, latestRawRun.GeneratedAt);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);
        var rawRuns = LoadMetaRawRuns(metaRawRunsDirectoryPath);
        var removedDetailsDataset = BuildMetaRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteMetaDatasetsAsync(metaOutputPath, metaRunsPath, metaRunDetailsPath, metaRemovedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest Meta raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

    case PipelineMode.NormalizeAppleLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(appleRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Apple raw runs found. Run Apple raw collection first.");
        }

        var latestRawRun = LoadJsonOrDefault<AppleRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Apple raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(appleOutputPath);
        var latestJobs = BuildAppleJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildAppleDataset(latestRawRun, mergeResult.Jobs);

        await WriteJsonFileAsync(appleOutputPath, dataset);

        Console.WriteLine(
            $"Normalized latest Apple raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"({mergeResult.Jobs.Count(static job => job.IsActive)} active / " +
            $"{mergeResult.Jobs.Count(static job => !job.IsActive)} inactive).");
        Console.WriteLine($"Wrote {appleOutputPath}.");
        break;
    }

    case PipelineMode.AnalyzeAppleLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(appleRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Apple raw runs found. Run Apple raw collection first.");
        }

        var latestRawRun = LoadJsonOrDefault<AppleRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Apple raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(appleOutputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(appleRunsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(appleRunDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"Apple raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildAppleJobsFromRawRun(latestRawRun);
        var previousJobs = previousRuns.Runs.Count == 0
            ? new List<JobItem>()
            : previousDataset?.Jobs ?? new List<JobItem>();
        var mergeResult = MergeJobs(previousJobs, latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildAppleDataset(latestRawRun, mergeResult.Jobs);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);
        var rawRuns = LoadAppleRawRuns(appleRawRunsDirectoryPath);
        var removedDetailsDataset = BuildAppleRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteAppleDatasetsAsync(appleOutputPath, appleRunsPath, appleRunDetailsPath, appleRemovedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest Apple raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

    case PipelineMode.CollectMicrosoft:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var microsoftLocations = LoadMicrosoftLocations(microsoftConfigPath);
        var microsoftSearchTerm = GetMicrosoftSearchTerm();
        var maxMicrosoftPages = GetMicrosoftMaxPages();
        var maxMicrosoftDetails = GetMicrosoftMaxDetails();
        var fetchResult = ShouldFetchMicrosoftLive()
            ? await FetchMicrosoftJobsAsync(microsoftLocations, microsoftSearchTerm, runCapturedAt, maxMicrosoftPages, maxMicrosoftDetails)
            : await FetchMicrosoftJobsFromCacheAsync(microsoftLocations, microsoftFixturesDirectoryPath, microsoftSearchTerm, runCapturedAt, maxMicrosoftPages, maxMicrosoftDetails);
        var rawRun = new MicrosoftRawRun(runId, runCapturedAt, "microsoft-careers", microsoftSearchTerm, fetchResult.Sources);

        Directory.CreateDirectory(microsoftRawRunsDirectoryPath);
        var rawRunPath = Path.Combine(microsoftRawRunsDirectoryPath, $"{runId}.json");
        await WriteJsonFileAsync(rawRunPath, rawRun);

        Console.WriteLine($"Collected Microsoft raw run {runId} with {fetchResult.JobCount} unique jobs.");
        Console.WriteLine($"Wrote {rawRunPath}.");
        break;
    }

    case PipelineMode.NormalizeMicrosoftLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(microsoftRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Microsoft raw runs found. Run collect-microsoft first.");
        }

        var latestRawRun = LoadJsonOrDefault<MicrosoftRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Microsoft raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(microsoftOutputPath);
        var latestJobs = BuildMicrosoftJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildMicrosoftDataset(latestRawRun, mergeResult.Jobs);

        await WriteJsonFileAsync(microsoftOutputPath, dataset);

        Console.WriteLine(
            $"Normalized latest Microsoft raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"({mergeResult.Jobs.Count(static job => job.IsActive)} active / " +
            $"{mergeResult.Jobs.Count(static job => !job.IsActive)} inactive).");
        Console.WriteLine($"Wrote {microsoftOutputPath}.");
        break;
    }

    case PipelineMode.AnalyzeMicrosoftLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(microsoftRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Microsoft raw runs found. Run collect-microsoft first.");
        }

        var latestRawRun = LoadJsonOrDefault<MicrosoftRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Microsoft raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(microsoftOutputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(microsoftRunsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(microsoftRunDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"Microsoft raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildMicrosoftJobsFromRawRun(latestRawRun);
        var previousJobs = previousRuns.Runs.Count == 0
            ? new List<JobItem>()
            : previousDataset?.Jobs ?? new List<JobItem>();
        var mergeResult = MergeJobs(previousJobs, latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildMicrosoftDataset(latestRawRun, mergeResult.Jobs);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);
        var rawRuns = LoadMicrosoftRawRuns(microsoftRawRunsDirectoryPath);
        var removedDetailsDataset = BuildMicrosoftRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteMicrosoftDatasetsAsync(microsoftOutputPath, microsoftRunsPath, microsoftRunDetailsPath, microsoftRemovedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest Microsoft raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

    case PipelineMode.CollectNvidia:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var nvidiaLocations = LoadNvidiaLocations(nvidiaConfigPath);
        var nvidiaSearchTerm = GetNvidiaSearchTerm();
        var maxNvidiaPages = GetNvidiaMaxPages();
        var maxNvidiaDetails = GetNvidiaMaxDetails();
        var fetchResult = ShouldFetchNvidiaLive()
            ? await FetchNvidiaJobsAsync(nvidiaLocations, nvidiaSearchTerm, runCapturedAt, maxNvidiaPages, maxNvidiaDetails)
            : await FetchNvidiaJobsFromCacheAsync(nvidiaLocations, nvidiaFixturesDirectoryPath, nvidiaSearchTerm, runCapturedAt, maxNvidiaPages, maxNvidiaDetails);
        var rawRun = new NvidiaRawRun(runId, runCapturedAt, "nvidia-careers", nvidiaSearchTerm, fetchResult.Sources);

        Directory.CreateDirectory(nvidiaRawRunsDirectoryPath);
        var rawRunPath = Path.Combine(nvidiaRawRunsDirectoryPath, $"{runId}.json");
        await WriteJsonFileAsync(rawRunPath, rawRun);

        Console.WriteLine($"Collected NVIDIA raw run {runId} with {fetchResult.JobCount} unique jobs.");
        Console.WriteLine($"Wrote {rawRunPath}.");
        break;
    }

    case PipelineMode.NormalizeNvidiaLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(nvidiaRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No NVIDIA raw runs found. Run collect-nvidia first.");
        }

        var latestRawRun = LoadJsonOrDefault<NvidiaRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read NVIDIA raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(nvidiaOutputPath);
        var latestJobs = BuildNvidiaJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildNvidiaDataset(latestRawRun, mergeResult.Jobs);

        await WriteJsonFileAsync(nvidiaOutputPath, dataset);

        Console.WriteLine(
            $"Normalized latest NVIDIA raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"({mergeResult.Jobs.Count(static job => job.IsActive)} active / " +
            $"{mergeResult.Jobs.Count(static job => !job.IsActive)} inactive).");
        Console.WriteLine($"Wrote {nvidiaOutputPath}.");
        break;
    }

    case PipelineMode.AnalyzeNvidiaLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(nvidiaRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No NVIDIA raw runs found. Run collect-nvidia first.");
        }

        var latestRawRun = LoadJsonOrDefault<NvidiaRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read NVIDIA raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(nvidiaOutputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(nvidiaRunsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(nvidiaRunDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"NVIDIA raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildNvidiaJobsFromRawRun(latestRawRun);
        var previousJobs = previousRuns.Runs.Count == 0
            ? new List<JobItem>()
            : previousDataset?.Jobs ?? new List<JobItem>();
        var mergeResult = MergeJobs(previousJobs, latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildNvidiaDataset(latestRawRun, mergeResult.Jobs);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);
        var rawRuns = LoadNvidiaRawRuns(nvidiaRawRunsDirectoryPath);
        var removedDetailsDataset = BuildNvidiaRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteNvidiaDatasetsAsync(nvidiaOutputPath, nvidiaRunsPath, nvidiaRunDetailsPath, nvidiaRemovedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest NVIDIA raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

    case PipelineMode.CollectAmazon:
    {
        var runId = DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH-mm-ssZ", CultureInfo.InvariantCulture);
        var runCapturedAt = DateTimeOffset.UtcNow.ToString("O");
        var amazonLocations = LoadAmazonLocations(amazonConfigPath);
        var maxAmazonPages = GetAmazonMaxPages();
        var fetchResult = ShouldFetchAmazonLive()
            ? await FetchAmazonJobsAsync(amazonLocations, runCapturedAt, maxAmazonPages)
            : await FetchAmazonJobsFromCacheAsync(amazonLocations, amazonFixturesDirectoryPath, runCapturedAt, maxAmazonPages);
        var rawRun = new AmazonRawRun(runId, runCapturedAt, "amazon-jobs", fetchResult.Sources);

        Directory.CreateDirectory(amazonRawRunsDirectoryPath);
        var rawRunPath = Path.Combine(amazonRawRunsDirectoryPath, $"{runId}.json");
        await WriteJsonFileAsync(rawRunPath, rawRun);

        Console.WriteLine($"Collected Amazon raw run {runId} with {fetchResult.JobCount} unique jobs.");
        Console.WriteLine($"Wrote {rawRunPath}.");
        break;
    }

    case PipelineMode.NormalizeAmazonLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(amazonRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Amazon raw runs found. Run collect-amazon first.");
        }

        var latestRawRun = LoadJsonOrDefault<AmazonRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Amazon raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(amazonOutputPath);
        var latestJobs = BuildAmazonJobsFromRawRun(latestRawRun);
        var mergeResult = MergeJobs(previousDataset?.Jobs ?? new List<JobItem>(), latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildAmazonDataset(latestRawRun, mergeResult.Jobs);

        await WriteJsonFileAsync(amazonOutputPath, dataset);

        Console.WriteLine(
            $"Normalized latest Amazon raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"({mergeResult.Jobs.Count(static job => job.IsActive)} active / " +
            $"{mergeResult.Jobs.Count(static job => !job.IsActive)} inactive).");
        Console.WriteLine($"Wrote {amazonOutputPath}.");
        break;
    }

    case PipelineMode.AnalyzeAmazonLatest:
    {
        var latestRawRunPath = GetRawRunFilePaths(amazonRawRunsDirectoryPath).LastOrDefault();
        if (latestRawRunPath is null)
        {
            throw new FileNotFoundException("No Amazon raw runs found. Run collect-amazon first.");
        }

        var latestRawRun = LoadJsonOrDefault<AmazonRawRun>(latestRawRunPath)
            ?? throw new InvalidOperationException($"Could not read Amazon raw run file '{latestRawRunPath}'.");
        var previousDataset = LoadJsonOrDefault<JobDataset>(amazonOutputPath);
        var previousRuns = LoadJsonOrDefault<RunHistoryDataset>(amazonRunsPath) ?? new RunHistoryDataset(new List<RunSummary>());
        var previousRunDetails = LoadJsonOrDefault<RunDetailsDataset>(amazonRunDetailsPath) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRunDetails = NormalizeRunDetails(previousRunDetails) ?? new RunDetailsDataset(new List<RunDetail>());
        previousRuns = NormalizeRunHistory(previousRuns, previousRunDetails) ?? new RunHistoryDataset(new List<RunSummary>());

        if (previousRuns.Runs.Any(run => run.RunId == latestRawRun.RunId))
        {
            Console.WriteLine($"Amazon raw run {latestRawRun.RunId} is already analyzed. Skipping.");
            break;
        }

        var latestJobs = BuildAmazonJobsFromRawRun(latestRawRun);
        var previousJobs = previousRuns.Runs.Count == 0
            ? new List<JobItem>()
            : previousDataset?.Jobs ?? new List<JobItem>();
        var mergeResult = MergeJobs(previousJobs, latestJobs, latestRawRun.GeneratedAt);
        var dataset = BuildAmazonDataset(latestRawRun, mergeResult.Jobs);
        var runsDataset = BuildRunsDataset(previousRuns, latestRawRun.RunId, latestRawRun.GeneratedAt, mergeResult);
        var runDetailsDataset = BuildRunDetailsDataset(previousRunDetails, latestRawRun.RunId, mergeResult);
        var rawRuns = LoadAmazonRawRuns(amazonRawRunsDirectoryPath);
        var removedDetailsDataset = BuildAmazonRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteAmazonDatasetsAsync(amazonOutputPath, amazonRunsPath, amazonRunDetailsPath, amazonRemovedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

        Console.WriteLine(
            $"Analyzed latest Amazon raw run {latestRawRun.RunId} -> {mergeResult.Jobs.Count} jobs " +
            $"(+{mergeResult.Added.Count} / -{mergeResult.Removed.Count} / ~{mergeResult.Changed.Count})");
        break;
    }

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
        var rawRuns = LoadRawRuns(rawRunsDirectoryPath);
        var removedDetailsDataset = BuildRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);
        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, removedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

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
        var rawRuns = LoadRawRuns(rawRunsDirectoryPath);
        var removedDetailsDataset = BuildRemovedDetailsDataset(dataset, runDetailsDataset, rawRuns);

        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, removedDetailsPath, dataset, runsDataset, runDetailsDataset, removedDetailsDataset);

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
        var removedDetailsDataset = BuildRemovedDetailsDataset(dataset, currentRunDetails, rawRuns);

        await WriteNormalizedDatasetsAsync(outputPath, runsPath, runDetailsPath, removedDetailsPath, dataset, currentRuns, currentRunDetails, removedDetailsDataset);

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
        "parse-html" => PipelineMode.ParseHtml,
        "collect-meta" => PipelineMode.CollectMeta,
        "normalize-meta-latest" => PipelineMode.NormalizeMetaLatest,
        "analyze-meta-latest" => PipelineMode.AnalyzeMetaLatest,
        "normalize-apple-latest" => PipelineMode.NormalizeAppleLatest,
        "analyze-apple-latest" => PipelineMode.AnalyzeAppleLatest,
        "collect-microsoft" => PipelineMode.CollectMicrosoft,
        "normalize-microsoft-latest" => PipelineMode.NormalizeMicrosoftLatest,
        "analyze-microsoft-latest" => PipelineMode.AnalyzeMicrosoftLatest,
        "collect-nvidia" => PipelineMode.CollectNvidia,
        "normalize-nvidia-latest" => PipelineMode.NormalizeNvidiaLatest,
        "analyze-nvidia-latest" => PipelineMode.AnalyzeNvidiaLatest,
        "collect-amazon" => PipelineMode.CollectAmazon,
        "normalize-amazon-latest" => PipelineMode.NormalizeAmazonLatest,
        "analyze-amazon-latest" => PipelineMode.AnalyzeAmazonLatest,
        _ => throw new ArgumentOutOfRangeException(nameof(args), $"Unknown mode '{args[0]}'.")
    };
}

static async Task WriteNormalizedDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    RemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteMetaDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    MetaRemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteAppleDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    AppleRemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteMicrosoftDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    MicrosoftRemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteNvidiaDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    NvidiaRemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteAmazonDatasetsAsync(
    string outputPath,
    string runsPath,
    string runDetailsPath,
    string removedDetailsPath,
    JobDataset dataset,
    RunHistoryDataset runsDataset,
    RunDetailsDataset runDetailsDataset,
    AmazonRemovedDetailsDataset removedDetailsDataset)
{
    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
    await WriteJsonFileAsync(outputPath, dataset);
    await WriteJsonFileAsync(runsPath, runsDataset);
    await WriteJsonFileAsync(runDetailsPath, runDetailsDataset);
    await WriteJsonFileAsync(removedDetailsPath, removedDetailsDataset);
}

static async Task WriteJsonFileAsync<T>(string path, T value)
{
    Directory.CreateDirectory(Path.GetDirectoryName(path)!);
    await File.WriteAllTextAsync(path, JsonSerializer.Serialize(value, JsonOptions()) + Environment.NewLine);
}

static ParseHtmlPreview BuildParseHtmlPreview(
    string htmlPath,
    LocationConfig location,
    string capturedAt,
    ParseResult result)
{
    var summary = new ParseHtmlSummary(
        result.Jobs.Count,
        result.RawJobs.Count(static job => !string.IsNullOrWhiteSpace(job.AboutTheJobRaw)),
        result.RawJobs.Count(static job => !string.IsNullOrWhiteSpace(job.ResponsibilitiesRaw)),
        result.RawJobs.Count(static job => !string.IsNullOrWhiteSpace(job.MinimumQualificationsRaw)),
        result.RawJobs.Count(static job => !string.IsNullOrWhiteSpace(job.PreferredQualificationsRaw)),
        result.RawJobs.Count(static job => !string.IsNullOrWhiteSpace(job.ApplyUrlRaw)));

    return new ParseHtmlPreview(
        "google-careers",
        Path.GetFullPath(htmlPath),
        capturedAt,
        location,
        summary,
        result.Jobs,
        result.RawJobs);
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

static List<RawRun> LoadRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<RawRun>(path) ?? throw new InvalidOperationException($"Could not read raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
        .ToList();
}

static List<MetaRawRun> LoadMetaRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<MetaRawRun>(path) ?? throw new InvalidOperationException($"Could not read Meta raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
        .ToList();
}

static List<AppleRawRun> LoadAppleRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<AppleRawRun>(path) ?? throw new InvalidOperationException($"Could not read Apple raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
        .ToList();
}

static List<MicrosoftRawRun> LoadMicrosoftRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<MicrosoftRawRun>(path) ?? throw new InvalidOperationException($"Could not read Microsoft raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
        .ToList();
}

static List<NvidiaRawRun> LoadNvidiaRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<NvidiaRawRun>(path) ?? throw new InvalidOperationException($"Could not read NVIDIA raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
        .ToList();
}

static List<AmazonRawRun> LoadAmazonRawRuns(string rawRunsDirectoryPath)
{
    return GetRawRunFilePaths(rawRunsDirectoryPath)
        .Select(path => LoadJsonOrDefault<AmazonRawRun>(path) ?? throw new InvalidOperationException($"Could not read Amazon raw run file '{path}'."))
        .OrderBy(static run => run.GeneratedAt, StringComparer.Ordinal)
        .ThenBy(static run => run.RunId, StringComparer.Ordinal)
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

static List<JobItem> BuildMetaJobsFromRawRun(MetaRawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? "Meta" : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .Where(static job => !string.IsNullOrWhiteSpace(job.Id) && !string.IsNullOrWhiteSpace(job.Title))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group => group.First())
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static List<JobItem> BuildAppleJobsFromRawRun(AppleRawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? "Apple" : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .Where(static job => !string.IsNullOrWhiteSpace(job.Id) && !string.IsNullOrWhiteSpace(job.Title))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group =>
        {
            var first = group.First();
            var locations = group
                .SelectMany(static job => job.Locations)
                .Where(static location => !string.IsNullOrWhiteSpace(location))
                .Distinct(StringComparer.Ordinal)
                .OrderBy(static location => location, StringComparer.OrdinalIgnoreCase)
                .ToList();

            return first with { Locations = locations.Count == 0 ? first.Locations : locations };
        })
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static List<JobItem> BuildMicrosoftJobsFromRawRun(MicrosoftRawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? "Microsoft" : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .Where(static job => !string.IsNullOrWhiteSpace(job.Id) && !string.IsNullOrWhiteSpace(job.Title))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group =>
        {
            var first = group.First();
            var locations = group
                .SelectMany(static job => job.Locations)
                .Where(static location => !string.IsNullOrWhiteSpace(location))
                .Distinct(StringComparer.Ordinal)
                .OrderBy(static location => location, StringComparer.OrdinalIgnoreCase)
                .ToList();

            return first with { Locations = locations.Count == 0 ? first.Locations : locations };
        })
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static List<JobItem> BuildNvidiaJobsFromRawRun(NvidiaRawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? "NVIDIA" : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .Where(static job => !string.IsNullOrWhiteSpace(job.Id) && !string.IsNullOrWhiteSpace(job.Title))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group =>
        {
            var first = group.First();
            var locations = group
                .SelectMany(static job => job.Locations)
                .Where(static location => !string.IsNullOrWhiteSpace(location))
                .Distinct(StringComparer.Ordinal)
                .OrderBy(static location => location, StringComparer.OrdinalIgnoreCase)
                .ToList();

            return first with { Locations = locations.Count == 0 ? first.Locations : locations };
        })
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static List<JobItem> BuildAmazonJobsFromRawRun(AmazonRawRun rawRun)
{
    return rawRun.Sources
        .SelectMany(source =>
            source.Jobs.Select(job =>
                new JobItem(
                    job.JobId,
                    HtmlDecode(job.TitleRaw ?? string.Empty),
                    string.IsNullOrWhiteSpace(job.CompanyRaw) ? "Amazon" : HtmlDecode(job.CompanyRaw),
                    job.LocationsRaw ?? new List<string>(),
                    job.JobUrl,
                    job.RequestedLocation,
                    job.SearchUrl,
                    job.PostedAtCandidate,
                    job.UpdatedAtCandidate)))
        .Where(static job => !string.IsNullOrWhiteSpace(job.Id) && !string.IsNullOrWhiteSpace(job.Title))
        .GroupBy(static job => job.Id, StringComparer.Ordinal)
        .Select(static group =>
        {
            var first = group.First();
            var locations = group
                .SelectMany(static job => job.Locations)
                .Where(static location => !string.IsNullOrWhiteSpace(location))
                .Distinct(StringComparer.Ordinal)
                .OrderBy(static location => location, StringComparer.OrdinalIgnoreCase)
                .ToList();

            return first with { Locations = locations.Count == 0 ? first.Locations : locations };
        })
        .OrderBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.Id, StringComparer.Ordinal)
        .ToList();
}

static RemovedDetailsDataset BuildRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<RawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new RemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.ExperienceLevelRaw,
                rawMatch?.job.ExperienceLevelDescriptionRaw,
                rawMatch?.job.LocationsRawDetailed,
                rawMatch?.job.RawTimestampPairs ?? new List<string>());
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new RemovedDetailsDataset(jobs);
}

static MetaRemovedDetailsDataset BuildMetaRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<MetaRawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new MetaRemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.PostedAtCandidate,
                rawMatch?.job.UpdatedAtCandidate);
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new MetaRemovedDetailsDataset(jobs);
}

static AppleRemovedDetailsDataset BuildAppleRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<AppleRawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new AppleRemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.PostedAtCandidate,
                rawMatch?.job.UpdatedAtCandidate);
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new AppleRemovedDetailsDataset(jobs);
}

static MicrosoftRemovedDetailsDataset BuildMicrosoftRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<MicrosoftRawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new MicrosoftRemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.PostedAtCandidate,
                rawMatch?.job.UpdatedAtCandidate);
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new MicrosoftRemovedDetailsDataset(jobs);
}

static NvidiaRemovedDetailsDataset BuildNvidiaRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<NvidiaRawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new NvidiaRemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.PostedAtCandidate,
                rawMatch?.job.UpdatedAtCandidate);
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new NvidiaRemovedDetailsDataset(jobs);
}

static AmazonRemovedDetailsDataset BuildAmazonRemovedDetailsDataset(
    JobDataset dataset,
    RunDetailsDataset runDetailsDataset,
    List<AmazonRawRun> rawRuns)
{
    var inactiveJobs = dataset.Jobs
        .Where(static job => !job.IsActive)
        .ToDictionary(static job => job.Id, StringComparer.Ordinal);

    var removedAtById = runDetailsDataset.Runs
        .SelectMany(run => run.Removed.Select(job => new { job.Id, run.RunId }))
        .GroupBy(static item => item.Id, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.First().RunId,
            StringComparer.Ordinal);

    var rawByJobId = rawRuns
        .SelectMany(run => run.Sources.SelectMany(source => source.Jobs.Select(job => new { run, job })))
        .GroupBy(static item => item.job.JobId, StringComparer.Ordinal)
        .ToDictionary(
            static group => group.Key,
            group => group.Last(),
            StringComparer.Ordinal);
    var generatedAtByRunId = rawRuns.ToDictionary(static run => run.RunId, static run => run.GeneratedAt, StringComparer.Ordinal);

    var jobs = inactiveJobs.Values
        .Select(job =>
        {
            rawByJobId.TryGetValue(job.Id, out var rawMatch);
            removedAtById.TryGetValue(job.Id, out var removedInRunId);
            var removedAt = removedInRunId is not null && generatedAtByRunId.TryGetValue(removedInRunId, out var generatedAt)
                ? generatedAt
                : removedInRunId;

            return new AmazonRemovedJobDetail(
                job.Id,
                job.Title,
                job.Company,
                job.Url,
                job.Locations,
                job.RequestedLocation,
                job.FirstSeenAt,
                job.LastSeenAt,
                removedAt,
                removedInRunId,
                rawMatch?.job.ApplyUrlRaw,
                rawMatch?.job.AboutTheJobRaw,
                rawMatch?.job.ResponsibilitiesRaw,
                rawMatch?.job.MinimumQualificationsRaw,
                rawMatch?.job.PreferredQualificationsRaw,
                rawMatch?.job.PostedAtCandidate,
                rawMatch?.job.UpdatedAtCandidate);
        })
        .OrderByDescending(static job => job.RemovedAt, StringComparer.Ordinal)
        .ThenBy(static job => job.Title, StringComparer.OrdinalIgnoreCase)
        .ToList();

    return new AmazonRemovedDetailsDataset(jobs);
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

static List<MetaLocationConfig> LoadMetaLocations(string configPath)
{
    var envValue = Environment.GetEnvironmentVariable("META_CAREERS_LOCATIONS");
    var json = string.IsNullOrWhiteSpace(envValue)
        ? File.ReadAllText(configPath)
        : envValue;

    var locations = JsonSerializer.Deserialize<List<MetaLocationConfig>>(json, JsonOptions());
    return locations ?? new List<MetaLocationConfig>();
}

static List<MicrosoftLocationConfig> LoadMicrosoftLocations(string configPath)
{
    var envValue = Environment.GetEnvironmentVariable("MICROSOFT_CAREERS_LOCATIONS");
    var json = string.IsNullOrWhiteSpace(envValue)
        ? File.ReadAllText(configPath)
        : envValue;

    var locations = JsonSerializer.Deserialize<List<MicrosoftLocationConfig>>(json, JsonOptions());
    return locations ?? new List<MicrosoftLocationConfig>();
}

static List<NvidiaLocationConfig> LoadNvidiaLocations(string configPath)
{
    var envValue = Environment.GetEnvironmentVariable("NVIDIA_CAREERS_LOCATIONS");
    var json = string.IsNullOrWhiteSpace(envValue)
        ? File.ReadAllText(configPath)
        : envValue;

    var locations = JsonSerializer.Deserialize<List<NvidiaLocationConfig>>(json, JsonOptions());
    return locations ?? new List<NvidiaLocationConfig>();
}

static List<AmazonLocationConfig> LoadAmazonLocations(string configPath)
{
    var envValue = Environment.GetEnvironmentVariable("AMAZON_JOBS_LOCATIONS");
    var json = string.IsNullOrWhiteSpace(envValue)
        ? File.ReadAllText(configPath)
        : envValue;

    var locations = JsonSerializer.Deserialize<List<AmazonLocationConfig>>(json, JsonOptions());
    return locations ?? new List<AmazonLocationConfig>();
}

static int GetMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("GOOGLE_CAREERS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 5;
}

static int GetMetaMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("META_CAREERS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 2;
}

static string GetMetaSearchTerm()
{
    return Environment.GetEnvironmentVariable("META_CAREERS_SEARCH_TERM")?.Trim() ?? "Software Engineering";
}

static int GetMetaMaxDetails()
{
    var rawValue = Environment.GetEnvironmentVariable("META_CAREERS_MAX_DETAILS");
    return int.TryParse(rawValue, out var parsed) && parsed >= 0 ? parsed : 5;
}

static bool ShouldFetchMetaLive()
{
    var rawValue = Environment.GetEnvironmentVariable("META_CAREERS_LIVE");
    return string.Equals(rawValue, "true", StringComparison.OrdinalIgnoreCase) ||
        string.Equals(rawValue, "1", StringComparison.Ordinal);
}

static int GetMicrosoftMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("MICROSOFT_CAREERS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 2;
}

static int GetMicrosoftMaxDetails()
{
    var rawValue = Environment.GetEnvironmentVariable("MICROSOFT_CAREERS_MAX_DETAILS");
    return int.TryParse(rawValue, out var parsed) && parsed >= 0 ? parsed : 5;
}

static string GetMicrosoftSearchTerm()
{
    return Environment.GetEnvironmentVariable("MICROSOFT_CAREERS_SEARCH_TERM")?.Trim() ?? "Software Engineer";
}

static bool ShouldFetchMicrosoftLive()
{
    var rawValue = Environment.GetEnvironmentVariable("MICROSOFT_CAREERS_LIVE");
    return string.Equals(rawValue, "true", StringComparison.OrdinalIgnoreCase) ||
        string.Equals(rawValue, "1", StringComparison.Ordinal);
}

static int GetNvidiaMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("NVIDIA_CAREERS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 2;
}

static int GetNvidiaMaxDetails()
{
    var rawValue = Environment.GetEnvironmentVariable("NVIDIA_CAREERS_MAX_DETAILS");
    return int.TryParse(rawValue, out var parsed) && parsed >= 0 ? parsed : 5;
}

static string GetNvidiaSearchTerm()
{
    return Environment.GetEnvironmentVariable("NVIDIA_CAREERS_SEARCH_TERM")?.Trim() ?? "software engineer";
}

static bool ShouldFetchNvidiaLive()
{
    var rawValue = Environment.GetEnvironmentVariable("NVIDIA_CAREERS_LIVE");
    return string.Equals(rawValue, "true", StringComparison.OrdinalIgnoreCase) ||
        string.Equals(rawValue, "1", StringComparison.Ordinal);
}

static int GetAmazonMaxPages()
{
    var rawValue = Environment.GetEnvironmentVariable("AMAZON_JOBS_MAX_PAGES");
    return int.TryParse(rawValue, out var parsed) && parsed > 0 ? parsed : 2;
}

static bool ShouldFetchAmazonLive()
{
    var rawValue = Environment.GetEnvironmentVariable("AMAZON_JOBS_LIVE");
    return string.Equals(rawValue, "true", StringComparison.OrdinalIgnoreCase) ||
        string.Equals(rawValue, "1", StringComparison.Ordinal);
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

static async Task<MetaFetchResult> FetchMetaJobsAsync(
    List<MetaLocationConfig> locations,
    string searchTerm,
    string capturedAt,
    int maxPages,
    int maxDetails)
{
    using var httpClient = CreateHttpClient();
    var sources = new List<MetaRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var location in locations)
    {
        var rawJobs = new List<MetaRawJobItem>();
        var seenForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 1; page <= maxPages; page += 1)
        {
            var searchUrl = BuildMetaSearchUrl(location.Offices, searchTerm, page);
            Console.WriteLine($"Fetching Meta search {searchUrl}");

            List<MetaSearchResult> searchResults;
            try
            {
                searchResults = await FetchMetaSearchResultsAsync(httpClient, searchUrl, location.Label, searchTerm, page, location.Offices);
            }
            catch (HttpRequestException error)
            {
                Console.WriteLine($"Meta search fetch failed for {location.Label} page {page}: {error.Message}");
                break;
            }

            var newJobsOnPage = 0;

            foreach (var searchResult in searchResults)
            {
                if (!seenForLocation.Add(searchResult.JobId))
                {
                    continue;
                }

                newJobsOnPage += 1;
                uniqueJobIds.Add(searchResult.JobId);
                // Meta MVP policy:
                // required raw fields come from search payload for every discovered job;
                // detail fields are best-effort and intentionally limited to avoid large live crawls.
                if (enrichedDetails < maxDetails)
                {
                    rawJobs.Add(await EnrichMetaRawJobAsync(httpClient, searchResult, capturedAt));
                    enrichedDetails += 1;
                }
                else
                {
                    rawJobs.Add(BuildMetaRawJob(searchResult, null, capturedAt));
                }
            }

            if (searchResults.Count == 0)
            {
                Console.WriteLine($"No Meta job links found on page {page} for {location.Label}. Stopping pagination.");
                break;
            }

            if (newJobsOnPage == 0)
            {
                Console.WriteLine($"No new Meta job ids on page {page} for {location.Label}. Stopping pagination.");
                break;
            }
        }

        sources.Add(
            new MetaRawSource(
                location.Label,
                location.Slug,
                location.Offices,
                BuildMetaSearchUrl(location.Offices, searchTerm, 1),
                rawJobs));
    }

    return new MetaFetchResult(sources, uniqueJobIds.Count);
}

static async Task<MetaFetchResult> FetchMetaJobsFromCacheAsync(
    string fixturesDirectoryPath,
    string capturedAt,
    int maxDetails)
{
    var searchDirectoryPath = Path.Combine(fixturesDirectoryPath, "search");
    var detailDirectoryPath = Path.Combine(fixturesDirectoryPath, "details");
    if (!Directory.Exists(searchDirectoryPath))
    {
        throw new DirectoryNotFoundException(
            $"Meta fixtures not found at '{searchDirectoryPath}'. Set META_CAREERS_LIVE=true for live validation.");
    }

    var sourcesBySlug = new Dictionary<string, MetaRawSourceDraft>(StringComparer.Ordinal);
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var path in Directory.GetFiles(searchDirectoryPath, "*.json", SearchOption.TopDirectoryOnly).OrderBy(static item => item, StringComparer.Ordinal))
    {
        using var document = JsonDocument.Parse(await File.ReadAllTextAsync(path));
        var root = document.RootElement;
        var requestedLocation = ReadJsonString(root, "requestedLocation") ?? "Unknown";
        var locationSlug = ReadJsonString(root, "locationSlug") ?? requestedLocation.ToLowerInvariant().Replace(' ', '-');
        var searchUrl = ReadJsonString(root, "searchUrl") ?? string.Empty;
        var offices = ReadJsonStringList(root, "offices");
        var payload = root.TryGetProperty("payload", out var payloadElement) ? payloadElement.GetRawText() : root.GetRawText();
        var searchResults = ParseMetaGraphqlSearchResults(payload, searchUrl, requestedLocation);

        if (!sourcesBySlug.TryGetValue(locationSlug, out var source))
        {
            source = new MetaRawSourceDraft(requestedLocation, locationSlug, offices, searchUrl, new List<MetaRawJobItem>());
            sourcesBySlug[locationSlug] = source;
        }

        foreach (var searchResult in searchResults)
        {
            uniqueJobIds.Add(searchResult.JobId);
            MetaJobDetail? detail = null;
            var detailPath = Path.Combine(detailDirectoryPath, $"{searchResult.JobId}.html");
            if (enrichedDetails < maxDetails && File.Exists(detailPath))
            {
                detail = ParseMetaJobDetailHtml(await File.ReadAllTextAsync(detailPath), searchResult.JobId);
                enrichedDetails += 1;
            }

            source.Jobs.Add(BuildMetaRawJob(searchResult, detail, capturedAt));
        }
    }

    var sources = sourcesBySlug.Values
        .Select(static source => new MetaRawSource(source.RequestedLocation, source.LocationSlug, source.Offices, source.SearchUrl, source.Jobs))
        .OrderBy(static source => source.RequestedLocation, StringComparer.Ordinal)
        .ToList();

    return new MetaFetchResult(sources, uniqueJobIds.Count);
}

static async Task<MicrosoftFetchResult> FetchMicrosoftJobsAsync(
    List<MicrosoftLocationConfig> locations,
    string searchTerm,
    string capturedAt,
    int maxPages,
    int maxDetails)
{
    using var httpClient = CreateHttpClient();
    var sources = new List<MicrosoftRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var location in locations)
    {
        var rawJobs = new List<MicrosoftRawJobItem>();
        var seenForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 0; page < maxPages; page += 1)
        {
            var start = page * MicrosoftSearchPageSize;
            var searchUrl = BuildMicrosoftSearchApiUrl(location.SearchLocation, searchTerm, start);
            Console.WriteLine($"Fetching Microsoft search {searchUrl}");
            var payload = await httpClient.GetStringAsync(searchUrl);
            var searchPage = ParseMicrosoftSearchPayload(payload, searchUrl, location.Label);

            var newJobsOnPage = 0;
            foreach (var searchResult in searchPage.Results)
            {
                if (!seenForLocation.Add(searchResult.JobId))
                {
                    continue;
                }

                newJobsOnPage += 1;
                uniqueJobIds.Add(searchResult.JobId);
                // Microsoft MVP policy:
                // every discovered job must have required raw fields from search API;
                // detail enrichment is best-effort and intentionally capped to avoid large live crawls.
                if (enrichedDetails < maxDetails)
                {
                    rawJobs.Add(await EnrichMicrosoftRawJobAsync(httpClient, searchResult, location.SearchLocation, capturedAt));
                    enrichedDetails += 1;
                }
                else
                {
                    rawJobs.Add(BuildMicrosoftRawJob(searchResult, null, capturedAt));
                }
            }

            if (searchPage.Results.Count == 0 || newJobsOnPage == 0 || start + MicrosoftSearchPageSize >= searchPage.TotalCount)
            {
                break;
            }
        }

        sources.Add(
            new MicrosoftRawSource(
                location.Label,
                location.Slug,
                location.SearchLocation,
                BuildMicrosoftSearchApiUrl(location.SearchLocation, searchTerm, 0),
                rawJobs));
    }

    return new MicrosoftFetchResult(sources, uniqueJobIds.Count);
}

static async Task<MicrosoftFetchResult> FetchMicrosoftJobsFromCacheAsync(
    List<MicrosoftLocationConfig> locations,
    string fixturesDirectoryPath,
    string searchTerm,
    string capturedAt,
    int maxPages,
    int maxDetails)
{
    if (!Directory.Exists(fixturesDirectoryPath))
    {
        throw new DirectoryNotFoundException(
            $"Microsoft fixtures not found at '{fixturesDirectoryPath}'. Set MICROSOFT_CAREERS_LIVE=true for live validation.");
    }

    var sources = new List<MicrosoftRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var location in locations)
    {
        var rawJobs = new List<MicrosoftRawJobItem>();
        var seenForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 0; page < maxPages; page += 1)
        {
            var start = page * MicrosoftSearchPageSize;
            var searchUrl = BuildMicrosoftSearchApiUrl(location.SearchLocation, searchTerm, start);
            var cachePath = FindMicrosoftSearchCachePath(fixturesDirectoryPath, location.CacheSlug ?? location.Slug, start);
            if (cachePath is null)
            {
                if (page == 0)
                {
                    Console.WriteLine($"No Microsoft cached search payload found for {location.Label}.");
                }

                break;
            }

            var searchPage = ParseMicrosoftSearchPayload(await File.ReadAllTextAsync(cachePath), searchUrl, location.Label);
            var newJobsOnPage = 0;

            foreach (var searchResult in searchPage.Results)
            {
                if (!seenForLocation.Add(searchResult.JobId))
                {
                    continue;
                }

                newJobsOnPage += 1;
                uniqueJobIds.Add(searchResult.JobId);
                MicrosoftJobDetail? detail = null;
                var detailPath = Path.Combine(fixturesDirectoryPath, $"detail-{searchResult.JobId}-api.json");
                if (enrichedDetails < maxDetails && File.Exists(detailPath))
                {
                    detail = ParseMicrosoftDetailPayload(await File.ReadAllTextAsync(detailPath), searchResult);
                    enrichedDetails += 1;
                }

                rawJobs.Add(BuildMicrosoftRawJob(searchResult, detail, capturedAt));
            }

            if (searchPage.Results.Count == 0 || newJobsOnPage == 0 || start + MicrosoftSearchPageSize >= searchPage.TotalCount)
            {
                break;
            }
        }

        sources.Add(
            new MicrosoftRawSource(
                location.Label,
                location.Slug,
                location.SearchLocation,
                BuildMicrosoftSearchApiUrl(location.SearchLocation, searchTerm, 0),
                rawJobs));
    }

    return new MicrosoftFetchResult(sources, uniqueJobIds.Count);
}

static async Task<NvidiaFetchResult> FetchNvidiaJobsAsync(
    List<NvidiaLocationConfig> locations,
    string searchTerm,
    string capturedAt,
    int maxPages,
    int maxDetails)
{
    using var httpClient = CreateHttpClient();
    var sources = new List<NvidiaRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var location in locations)
    {
        var rawJobs = new List<NvidiaRawJobItem>();
        var seenForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 0; page < maxPages; page += 1)
        {
            var start = page * NvidiaSearchPageSize;
            var searchUrl = BuildNvidiaSearchApiUrl(location.SearchLocation, searchTerm, start);
            Console.WriteLine($"Fetching NVIDIA search {searchUrl}");
            var payload = await httpClient.GetStringAsync(searchUrl);
            var searchPage = ParseNvidiaSearchPayload(payload, searchUrl, location.Label);

            var newJobsOnPage = 0;
            foreach (var searchResult in searchPage.Results)
            {
                if (!seenForLocation.Add(searchResult.JobId))
                {
                    continue;
                }

                newJobsOnPage += 1;
                uniqueJobIds.Add(searchResult.JobId);
                // NVIDIA MVP policy:
                // search API gives all required raw fields; detail enrichment is best-effort
                // and intentionally capped so one run does not become a huge live crawl.
                if (enrichedDetails < maxDetails)
                {
                    rawJobs.Add(await EnrichNvidiaRawJobAsync(httpClient, searchResult, location.SearchLocation, capturedAt));
                    enrichedDetails += 1;
                }
                else
                {
                    rawJobs.Add(BuildNvidiaRawJob(searchResult, null, capturedAt));
                }
            }

            if (searchPage.Results.Count == 0 || newJobsOnPage == 0 || start + NvidiaSearchPageSize >= searchPage.TotalCount)
            {
                break;
            }
        }

        sources.Add(
            new NvidiaRawSource(
                location.Label,
                location.Slug,
                location.SearchLocation,
                BuildNvidiaSearchApiUrl(location.SearchLocation, searchTerm, 0),
                rawJobs));
    }

    return new NvidiaFetchResult(sources, uniqueJobIds.Count);
}

static async Task<NvidiaFetchResult> FetchNvidiaJobsFromCacheAsync(
    List<NvidiaLocationConfig> locations,
    string fixturesDirectoryPath,
    string searchTerm,
    string capturedAt,
    int maxPages,
    int maxDetails)
{
    if (!Directory.Exists(fixturesDirectoryPath))
    {
        throw new DirectoryNotFoundException(
            $"NVIDIA fixtures not found at '{fixturesDirectoryPath}'. Set NVIDIA_CAREERS_LIVE=true for live validation.");
    }

    var sources = new List<NvidiaRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);
    var enrichedDetails = 0;

    foreach (var location in locations)
    {
        var rawJobs = new List<NvidiaRawJobItem>();
        var seenForLocation = new HashSet<string>(StringComparer.Ordinal);

        for (var page = 0; page < maxPages; page += 1)
        {
            var start = page * NvidiaSearchPageSize;
            var searchUrl = BuildNvidiaSearchApiUrl(location.SearchLocation, searchTerm, start);
            var cachePath = FindNvidiaSearchCachePath(fixturesDirectoryPath, location.CacheSlug ?? location.Slug, start);
            if (cachePath is null)
            {
                if (page == 0)
                {
                    Console.WriteLine($"No NVIDIA cached search payload found for {location.Label}.");
                }

                break;
            }

            var searchPage = ParseNvidiaSearchPayload(await File.ReadAllTextAsync(cachePath), searchUrl, location.Label);
            var newJobsOnPage = 0;

            foreach (var searchResult in searchPage.Results)
            {
                if (!seenForLocation.Add(searchResult.JobId))
                {
                    continue;
                }

                newJobsOnPage += 1;
                uniqueJobIds.Add(searchResult.JobId);
                NvidiaJobDetail? detail = null;
                var detailPath = Path.Combine(fixturesDirectoryPath, $"detail-{searchResult.JobId}-api.json");
                if (enrichedDetails < maxDetails && File.Exists(detailPath))
                {
                    detail = ParseNvidiaDetailPayload(await File.ReadAllTextAsync(detailPath), searchResult);
                    enrichedDetails += 1;
                }

                rawJobs.Add(BuildNvidiaRawJob(searchResult, detail, capturedAt));
            }

            if (searchPage.Results.Count == 0 || newJobsOnPage == 0 || start + NvidiaSearchPageSize >= searchPage.TotalCount)
            {
                break;
            }
        }

        sources.Add(
            new NvidiaRawSource(
                location.Label,
                location.Slug,
                location.SearchLocation,
                BuildNvidiaSearchApiUrl(location.SearchLocation, searchTerm, 0),
                rawJobs));
    }

    return new NvidiaFetchResult(sources, uniqueJobIds.Count);
}

static async Task<AmazonFetchResult> FetchAmazonJobsAsync(
    List<AmazonLocationConfig> locations,
    string capturedAt,
    int maxPages)
{
    using var httpClient = CreateHttpClient();
    var sources = new List<AmazonRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);

    foreach (var location in locations)
    {
        foreach (var searchTerm in location.Queries)
        {
            var rawJobs = new List<AmazonRawJobItem>();
            var seenForSource = new HashSet<string>(StringComparer.Ordinal);

            for (var page = 0; page < maxPages; page += 1)
            {
                var offset = page * AmazonSearchPageSize;
                var searchUrl = BuildAmazonSearchApiUrl(searchTerm, location.CountryCode, location.LocQuery, offset);
                Console.WriteLine($"Fetching Amazon search {searchUrl}");
                var payload = await httpClient.GetStringAsync(searchUrl);
                var searchPage = ParseAmazonSearchPayload(payload, searchUrl, location.Label, capturedAt);

                var newJobsOnPage = 0;
                foreach (var rawJob in searchPage.Jobs)
                {
                    if (!seenForSource.Add(rawJob.JobId))
                    {
                        continue;
                    }

                    newJobsOnPage += 1;
                    uniqueJobIds.Add(rawJob.JobId);
                    rawJobs.Add(rawJob);
                }

                if (searchPage.Jobs.Count == 0 || newJobsOnPage == 0 || offset + AmazonSearchPageSize >= searchPage.Hits)
                {
                    break;
                }
            }

            sources.Add(
                new AmazonRawSource(
                    location.Label,
                    location.Slug,
                    location.CountryCode,
                    location.LocQuery,
                    searchTerm,
                    BuildAmazonSearchApiUrl(searchTerm, location.CountryCode, location.LocQuery, 0),
                    rawJobs));
        }
    }

    return new AmazonFetchResult(sources, uniqueJobIds.Count);
}

static async Task<AmazonFetchResult> FetchAmazonJobsFromCacheAsync(
    List<AmazonLocationConfig> locations,
    string fixturesDirectoryPath,
    string capturedAt,
    int maxPages)
{
    if (!Directory.Exists(fixturesDirectoryPath))
    {
        throw new DirectoryNotFoundException(
            $"Amazon fixtures not found at '{fixturesDirectoryPath}'. Set AMAZON_JOBS_LIVE=true for live validation.");
    }

    var sources = new List<AmazonRawSource>();
    var uniqueJobIds = new HashSet<string>(StringComparer.Ordinal);

    foreach (var location in locations)
    {
        foreach (var searchTerm in location.Queries)
        {
            var rawJobs = new List<AmazonRawJobItem>();
            var seenForSource = new HashSet<string>(StringComparer.Ordinal);

            for (var page = 0; page < maxPages; page += 1)
            {
                var offset = page * AmazonSearchPageSize;
                var cachePath = FindAmazonSearchCachePath(fixturesDirectoryPath, location.CacheSlug ?? location.Slug, searchTerm, offset);
                var searchUrl = BuildAmazonSearchApiUrl(searchTerm, location.CountryCode, location.LocQuery, offset);
                if (cachePath is null)
                {
                    break;
                }

                var searchPage = ParseAmazonSearchPayload(await File.ReadAllTextAsync(cachePath), searchUrl, location.Label, capturedAt);
                var newJobsOnPage = 0;
                foreach (var rawJob in searchPage.Jobs)
                {
                    if (!seenForSource.Add(rawJob.JobId))
                    {
                        continue;
                    }

                    newJobsOnPage += 1;
                    uniqueJobIds.Add(rawJob.JobId);
                    rawJobs.Add(rawJob);
                }

                if (searchPage.Jobs.Count == 0 || newJobsOnPage == 0 || offset + AmazonSearchPageSize >= searchPage.Hits)
                {
                    break;
                }
            }

            sources.Add(
                new AmazonRawSource(
                    location.Label,
                    location.Slug,
                    location.CountryCode,
                    location.LocQuery,
                    searchTerm,
                    BuildAmazonSearchApiUrl(searchTerm, location.CountryCode, location.LocQuery, 0),
                    rawJobs));
        }
    }

    return new AmazonFetchResult(sources, uniqueJobIds.Count);
}

static string? FindMicrosoftSearchCachePath(string fixturesDirectoryPath, string cacheSlug, int start)
{
    var exactPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-start{start}-api.json");
    if (File.Exists(exactPath))
    {
        return exactPath;
    }

    var legacyStartZeroPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-api.json");
    return start == 0 && File.Exists(legacyStartZeroPath) ? legacyStartZeroPath : null;
}

static string? FindNvidiaSearchCachePath(string fixturesDirectoryPath, string cacheSlug, int start)
{
    var exactPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-start{start}-api.json");
    if (File.Exists(exactPath))
    {
        return exactPath;
    }

    var legacyStartZeroPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-api.json");
    return start == 0 && File.Exists(legacyStartZeroPath) ? legacyStartZeroPath : null;
}

static string? FindAmazonSearchCachePath(string fixturesDirectoryPath, string cacheSlug, string searchTerm, int offset)
{
    var querySlug = ToSimpleSlug(searchTerm);
    var exactPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-{querySlug}-offset{offset}-api.json");
    if (File.Exists(exactPath))
    {
        return exactPath;
    }

    var legacyStartZeroPath = Path.Combine(fixturesDirectoryPath, $"search-{cacheSlug}-{querySlug}-api.json");
    return offset == 0 && File.Exists(legacyStartZeroPath) ? legacyStartZeroPath : null;
}

static string ToSimpleSlug(string value)
{
    var slug = Regex.Replace(value.Trim().ToLowerInvariant(), @"[^a-z0-9]+", "-", RegexOptions.CultureInvariant);
    return slug.Trim('-');
}

static async Task<MicrosoftRawJobItem> EnrichMicrosoftRawJobAsync(
    HttpClient httpClient,
    MicrosoftSearchResult searchResult,
    string queriedLocation,
    string capturedAt)
{
    try
    {
        var detailUrl = BuildMicrosoftDetailApiUrl(searchResult.JobId, queriedLocation);
        Console.WriteLine($"Fetching Microsoft detail {detailUrl}");
        var payload = await httpClient.GetStringAsync(detailUrl);
        var detail = ParseMicrosoftDetailPayload(payload, searchResult);
        return BuildMicrosoftRawJob(searchResult, detail, capturedAt);
    }
    catch (HttpRequestException error)
    {
        Console.WriteLine($"Microsoft detail fetch failed for {searchResult.JobId}: {error.Message}");
        return BuildMicrosoftRawJob(searchResult, null, capturedAt);
    }
    catch (JsonException error)
    {
        Console.WriteLine($"Microsoft detail parse failed for {searchResult.JobId}: {error.Message}");
        return BuildMicrosoftRawJob(searchResult, null, capturedAt);
    }
}

static async Task<NvidiaRawJobItem> EnrichNvidiaRawJobAsync(
    HttpClient httpClient,
    NvidiaSearchResult searchResult,
    string queriedLocation,
    string capturedAt)
{
    try
    {
        var detailUrl = BuildNvidiaDetailApiUrl(searchResult.JobId, queriedLocation);
        Console.WriteLine($"Fetching NVIDIA detail {detailUrl}");
        var payload = await httpClient.GetStringAsync(detailUrl);
        var detail = ParseNvidiaDetailPayload(payload, searchResult);
        return BuildNvidiaRawJob(searchResult, detail, capturedAt);
    }
    catch (HttpRequestException error)
    {
        Console.WriteLine($"NVIDIA detail fetch failed for {searchResult.JobId}: {error.Message}");
        return BuildNvidiaRawJob(searchResult, null, capturedAt);
    }
    catch (JsonException error)
    {
        Console.WriteLine($"NVIDIA detail parse failed for {searchResult.JobId}: {error.Message}");
        return BuildNvidiaRawJob(searchResult, null, capturedAt);
    }
}

static MicrosoftRawJobItem BuildMicrosoftRawJob(
    MicrosoftSearchResult searchResult,
    MicrosoftJobDetail? detail,
    string capturedAt)
{
    return new MicrosoftRawJobItem(
        searchResult.JobId,
        detail?.TitleRaw ?? searchResult.TitleRaw,
        detail?.CompanyRaw ?? searchResult.CompanyRaw ?? "Microsoft",
        detail?.LocationsRaw is { Count: > 0 } ? detail.LocationsRaw : searchResult.LocationsRaw,
        detail?.JobUrl ?? searchResult.JobUrl,
        searchResult.SearchUrl,
        searchResult.RequestedLocation,
        detail?.ApplyUrlRaw ?? searchResult.JobUrl,
        detail?.AboutTheJobRaw,
        detail?.ResponsibilitiesRaw,
        detail?.MinimumQualificationsRaw,
        detail?.PreferredQualificationsRaw,
        detail?.PostedAtCandidate ?? searchResult.PostedAtCandidate,
        detail?.UpdatedAtCandidate,
        capturedAt);
}

static NvidiaRawJobItem BuildNvidiaRawJob(
    NvidiaSearchResult searchResult,
    NvidiaJobDetail? detail,
    string capturedAt)
{
    return new NvidiaRawJobItem(
        searchResult.JobId,
        detail?.TitleRaw ?? searchResult.TitleRaw,
        detail?.CompanyRaw ?? searchResult.CompanyRaw ?? "NVIDIA",
        detail?.LocationsRaw is { Count: > 0 } ? detail.LocationsRaw : searchResult.LocationsRaw,
        detail?.JobUrl ?? searchResult.JobUrl,
        searchResult.SearchUrl,
        searchResult.RequestedLocation,
        detail?.ApplyUrlRaw ?? searchResult.JobUrl,
        detail?.AboutTheJobRaw,
        detail?.ResponsibilitiesRaw,
        detail?.MinimumQualificationsRaw,
        detail?.PreferredQualificationsRaw,
        detail?.PostedAtCandidate ?? searchResult.PostedAtCandidate,
        detail?.UpdatedAtCandidate,
        capturedAt);
}

static MicrosoftSearchPage ParseMicrosoftSearchPayload(string payload, string searchUrl, string requestedLocation)
{
    using var document = JsonDocument.Parse(payload);
    var data = GetJsonPropertyOrDefault(document.RootElement, "data");
    var positions = data.ValueKind == JsonValueKind.Object && data.TryGetProperty("positions", out var positionsElement)
        ? positionsElement
        : default;
    var totalCount = ReadJsonInt(data, "count") ?? 0;
    var results = new List<MicrosoftSearchResult>();

    if (positions.ValueKind != JsonValueKind.Array)
    {
        return new MicrosoftSearchPage(totalCount, results);
    }

    foreach (var position in positions.EnumerateArray())
    {
        var id = ReadJsonStringOrNumber(position, "id");
        if (string.IsNullOrWhiteSpace(id))
        {
            continue;
        }

        var jobUrl = NormalizeMicrosoftJobUrl(ReadJsonString(position, "publicUrl") ?? ReadJsonString(position, "positionUrl"), id);
        results.Add(
            new MicrosoftSearchResult(
                id,
                ReadJsonString(position, "name"),
                "Microsoft",
                ReadJsonStringList(position, "locations"),
                jobUrl,
                searchUrl,
                requestedLocation,
                ReadMicrosoftUnixTimestamp(position, "postedTs")));
    }

    return new MicrosoftSearchPage(totalCount, results);
}

static NvidiaSearchPage ParseNvidiaSearchPayload(string payload, string searchUrl, string requestedLocation)
{
    using var document = JsonDocument.Parse(payload);
    var data = GetJsonPropertyOrDefault(document.RootElement, "data");
    var positions = data.ValueKind == JsonValueKind.Object && data.TryGetProperty("positions", out var positionsElement)
        ? positionsElement
        : default;
    var totalCount = ReadJsonInt(data, "count") ?? 0;
    var results = new List<NvidiaSearchResult>();

    if (positions.ValueKind != JsonValueKind.Array)
    {
        return new NvidiaSearchPage(totalCount, results);
    }

    foreach (var position in positions.EnumerateArray())
    {
        var id = ReadJsonStringOrNumber(position, "id");
        if (string.IsNullOrWhiteSpace(id))
        {
            continue;
        }

        var jobUrl = NormalizeNvidiaJobUrl(ReadJsonString(position, "publicUrl") ?? ReadJsonString(position, "positionUrl"), id);
        results.Add(
            new NvidiaSearchResult(
                id,
                ReadJsonString(position, "name"),
                "NVIDIA",
                ReadJsonStringList(position, "locations"),
                jobUrl,
                searchUrl,
                requestedLocation,
                ReadMicrosoftUnixTimestamp(position, "postedTs")));
    }

    return new NvidiaSearchPage(totalCount, results);
}

static MicrosoftJobDetail? ParseMicrosoftDetailPayload(string payload, MicrosoftSearchResult fallback)
{
    using var document = JsonDocument.Parse(payload);
    var data = GetJsonPropertyOrDefault(document.RootElement, "data");
    if (data.ValueKind != JsonValueKind.Object)
    {
        return null;
    }

    var jobDescription = ReadJsonString(data, "jobDescription");
    var sections = SplitMicrosoftJobDescription(jobDescription);
    var id = ReadJsonStringOrNumber(data, "id") ?? fallback.JobId;
    var jobUrl = NormalizeMicrosoftJobUrl(ReadJsonString(data, "publicUrl") ?? ReadJsonString(data, "positionUrl"), id);

    return new MicrosoftJobDetail(
        id,
        ReadJsonString(data, "name") ?? fallback.TitleRaw,
        "Microsoft",
        ReadJsonStringList(data, "locations"),
        jobUrl,
        jobUrl,
        sections.AboutTheJobRaw,
        sections.ResponsibilitiesRaw,
        sections.MinimumQualificationsRaw,
        sections.PreferredQualificationsRaw,
        ReadMicrosoftUnixTimestamp(data, "postedTs") ?? fallback.PostedAtCandidate,
        null);
}

static NvidiaJobDetail? ParseNvidiaDetailPayload(string payload, NvidiaSearchResult fallback)
{
    using var document = JsonDocument.Parse(payload);
    var data = GetJsonPropertyOrDefault(document.RootElement, "data");
    if (data.ValueKind != JsonValueKind.Object)
    {
        return null;
    }

    var jobDescription = ReadJsonString(data, "jobDescription");
    var sections = SplitNvidiaJobDescription(jobDescription);
    var id = ReadJsonStringOrNumber(data, "id") ?? fallback.JobId;
    var jobUrl = NormalizeNvidiaJobUrl(ReadJsonString(data, "publicUrl") ?? ReadJsonString(data, "positionUrl"), id);
    var applyUrl = ReadJsonString(GetJsonPropertyOrDefault(GetJsonPropertyOrDefault(data, "positionUserActions"), "applyAction"), "applyUrl");

    return new NvidiaJobDetail(
        id,
        ReadJsonString(data, "name") ?? fallback.TitleRaw,
        "NVIDIA",
        ReadJsonStringList(data, "locations"),
        jobUrl,
        applyUrl ?? jobUrl,
        sections.AboutTheJobRaw,
        sections.ResponsibilitiesRaw,
        sections.MinimumQualificationsRaw,
        sections.PreferredQualificationsRaw,
        ReadMicrosoftUnixTimestamp(data, "postedTs") ?? fallback.PostedAtCandidate,
        null);
}

static AmazonSearchPage ParseAmazonSearchPayload(string payload, string searchUrl, string requestedLocation, string capturedAt)
{
    using var document = JsonDocument.Parse(payload);
    var root = document.RootElement;
    var hits = ReadJsonInt(root, "hits") ?? 0;
    var jobs = GetJsonPropertyOrDefault(root, "jobs");
    var rawJobs = new List<AmazonRawJobItem>();

    if (jobs.ValueKind != JsonValueKind.Array)
    {
        return new AmazonSearchPage(hits, rawJobs);
    }

    foreach (var job in jobs.EnumerateArray())
    {
        var id = ReadJsonStringOrNumber(job, "id_icims") ?? ReadJsonStringOrNumber(job, "id");
        if (string.IsNullOrWhiteSpace(id))
        {
            continue;
        }

        var locations = ExtractAmazonLocations(job);
        var jobPath = ReadJsonString(job, "job_path");
        var jobUrl = NormalizeAmazonJobUrl(jobPath, id);
        rawJobs.Add(
            new AmazonRawJobItem(
                id,
                ReadJsonString(job, "title"),
                ReadJsonString(job, "company_name") ?? "Amazon",
                locations,
                jobUrl,
                searchUrl,
                requestedLocation,
                ReadJsonString(job, "url_next_step") ?? jobUrl,
                ReadJsonString(job, "description"),
                ExtractAmazonResponsibilities(ReadJsonString(job, "description")),
                ReadJsonString(job, "basic_qualifications"),
                ReadJsonString(job, "preferred_qualifications"),
                ParseAmazonPostedDate(ReadJsonString(job, "posted_date")),
                null,
                capturedAt));
    }

    return new AmazonSearchPage(hits, rawJobs);
}

static List<string> ExtractAmazonLocations(JsonElement job)
{
    var locations = new List<string>();
    var rawLocations = ReadJsonStringList(job, "locations");
    foreach (var rawLocation in rawLocations)
    {
        try
        {
            using var locationDocument = JsonDocument.Parse(rawLocation);
            var locationRoot = locationDocument.RootElement;
            var normalized = ReadJsonString(locationRoot, "normalizedLocation");
            var nonStemming = ReadJsonString(locationRoot, "locationNonStemming");
            var display = !string.IsNullOrWhiteSpace(normalized) ? normalized : nonStemming;
            if (!string.IsNullOrWhiteSpace(display))
            {
                locations.Add(display);
            }
        }
        catch (JsonException)
        {
            if (!string.IsNullOrWhiteSpace(rawLocation))
            {
                locations.Add(rawLocation);
            }
        }
    }

    var primary = ReadJsonString(job, "normalized_location") ?? ReadJsonString(job, "location");
    if (!string.IsNullOrWhiteSpace(primary))
    {
        locations.Add(primary);
    }

    return locations
        .Where(static location => !string.IsNullOrWhiteSpace(location))
        .Distinct(StringComparer.Ordinal)
        .ToList();
}

static string? ExtractAmazonResponsibilities(string? description)
{
    return ExtractAmazonSection(description, "Key job responsibilities", new[] { "A day in the life", "About the team", "About AWS" });
}

static string? ExtractAmazonSection(string? html, string startHeading, IReadOnlyCollection<string> endHeadings)
{
    if (string.IsNullOrWhiteSpace(html))
    {
        return null;
    }

    var startMatch = Regex.Match(
        html,
        Regex.Escape(startHeading),
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);
    if (!startMatch.Success)
    {
        return null;
    }

    var startIndex = startMatch.Index + startMatch.Length;
    var endIndex = html.Length;
    foreach (var endHeading in endHeadings)
    {
        var endMatch = Regex.Match(
            html[startIndex..],
            Regex.Escape(endHeading),
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);
        if (endMatch.Success)
        {
            endIndex = Math.Min(endIndex, startIndex + endMatch.Index);
        }
    }

    return CleanRawHtml(html[startIndex..endIndex]);
}

static string? ParseAmazonPostedDate(string? postedDate)
{
    if (string.IsNullOrWhiteSpace(postedDate))
    {
        return null;
    }

    if (DateTimeOffset.TryParse(postedDate, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal, out var parsed))
    {
        return parsed.ToString("O");
    }

    return postedDate.Trim();
}

static MicrosoftJobDescriptionSections SplitMicrosoftJobDescription(string? jobDescription)
{
    if (string.IsNullOrWhiteSpace(jobDescription))
    {
        return new MicrosoftJobDescriptionSections(null, null, null, null);
    }

    var about = ExtractMicrosoftSection(jobDescription, "Overview", new[] { "Responsibilities", "Qualifications" });
    var responsibilities = ExtractMicrosoftSection(jobDescription, "Responsibilities", new[] { "Qualifications" });
    var qualifications = ExtractMicrosoftSection(jobDescription, "Qualifications", Array.Empty<string>());
    var minimum = ExtractMicrosoftSection(qualifications, "Required skills", new[] { "Desired skills" }) ?? qualifications;
    var preferred = ExtractMicrosoftSection(qualifications, "Desired skills", Array.Empty<string>());

    return new MicrosoftJobDescriptionSections(
        CleanRawHtml(about),
        CleanRawHtml(responsibilities),
        CleanRawHtml(minimum),
        CleanRawHtml(preferred));
}

static NvidiaJobDescriptionSections SplitNvidiaJobDescription(string? jobDescription)
{
    if (string.IsNullOrWhiteSpace(jobDescription))
    {
        return new NvidiaJobDescriptionSections(null, null, null, null);
    }

    var responsibilities = ExtractNvidiaSection(jobDescription, "What you will be doing", new[] { "What we need to see", "Ways to stand out from the crowd" });
    var minimum = ExtractNvidiaSection(jobDescription, "What we need to see", new[] { "Ways to stand out from the crowd" });
    var preferred = ExtractNvidiaSection(jobDescription, "Ways to stand out from the crowd", Array.Empty<string>());
    var firstHeading = Regex.Match(
        jobDescription,
        @"<(?:b|strong)>\s*What you will be doing:?\s*</(?:b|strong)>",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
    var about = firstHeading.Success ? jobDescription[..firstHeading.Index] : jobDescription;

    return new NvidiaJobDescriptionSections(
        CleanRawHtml(about),
        CleanRawHtml(responsibilities),
        CleanRawHtml(minimum),
        CleanRawHtml(preferred));
}

static string? ExtractNvidiaSection(string? html, string startHeading, IReadOnlyCollection<string> endHeadings)
{
    if (string.IsNullOrWhiteSpace(html))
    {
        return null;
    }

    var startMatch = Regex.Match(
        html,
        $@"<(?:b|strong)>\s*{Regex.Escape(startHeading)}:?\s*</(?:b|strong)>",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
    if (!startMatch.Success)
    {
        return null;
    }

    var startIndex = startMatch.Index + startMatch.Length;
    var endIndex = html.Length;
    foreach (var endHeading in endHeadings)
    {
        var endMatch = Regex.Match(
            html[startIndex..],
            $@"<(?:b|strong)>\s*{Regex.Escape(endHeading)}:?\s*</(?:b|strong)>",
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
        if (endMatch.Success)
        {
            endIndex = Math.Min(endIndex, startIndex + endMatch.Index);
        }
    }

    return html[startIndex..endIndex];
}

static string? ExtractMicrosoftSection(string? html, string startHeading, IReadOnlyCollection<string> endHeadings)
{
    if (string.IsNullOrWhiteSpace(html))
    {
        return null;
    }

    var startMatch = Regex.Match(
        html,
        $@"<(?:b|strong)>\s*{Regex.Escape(startHeading)}\s*</(?:b|strong)>",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
    if (!startMatch.Success)
    {
        return null;
    }

    var startIndex = startMatch.Index + startMatch.Length;
    var endIndex = html.Length;
    foreach (var endHeading in endHeadings)
    {
        var endMatch = Regex.Match(
            html[startIndex..],
            $@"<(?:b|strong)>\s*{Regex.Escape(endHeading)}\s*</(?:b|strong)>",
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
        if (endMatch.Success)
        {
            endIndex = Math.Min(endIndex, startIndex + endMatch.Index);
        }
    }

    return html[startIndex..endIndex];
}

static string BuildMicrosoftSearchApiUrl(string sourceLocation, string searchTerm, int start)
{
    var query = new Dictionary<string, string?>
    {
        ["domain"] = "microsoft.com",
        ["query"] = searchTerm,
        ["location"] = sourceLocation,
        ["start"] = start.ToString(CultureInfo.InvariantCulture),
        ["sort_by"] = "relevance",
        ["filter_include_remote"] = "1"
    };

    return "https://apply.careers.microsoft.com/api/pcsx/search?" + BuildQueryString(query);
}

static string BuildNvidiaSearchApiUrl(string sourceLocation, string searchTerm, int start)
{
    var query = new Dictionary<string, string?>
    {
        ["domain"] = "nvidia.com",
        ["query"] = searchTerm,
        ["location"] = sourceLocation,
        ["start"] = start.ToString(CultureInfo.InvariantCulture),
        ["sort_by"] = "relevance",
        ["filter_distance"] = "160",
        ["filter_include_remote"] = "1"
    };

    return "https://jobs.nvidia.com/api/pcsx/search?" + BuildQueryString(query);
}

static string BuildAmazonSearchApiUrl(string searchTerm, string countryCode, string locQuery, int offset)
{
    var query = new Dictionary<string, string?>
    {
        ["offset"] = offset.ToString(CultureInfo.InvariantCulture),
        ["result_limit"] = AmazonSearchPageSize.ToString(CultureInfo.InvariantCulture),
        ["sort"] = "relevant",
        ["base_query"] = searchTerm,
        ["loc_query"] = locQuery,
        ["country"] = countryCode,
        ["latitude"] = string.Empty,
        ["longitude"] = string.Empty,
        ["loc_group_id"] = string.Empty,
        ["invalid_location"] = "false",
        ["city"] = string.Empty,
        ["region"] = string.Empty,
        ["county"] = string.Empty
    };

    return "https://www.amazon.jobs/en/search.json?" + BuildQueryString(query);
}

static string BuildMicrosoftDetailApiUrl(string jobId, string queriedLocation)
{
    var query = new Dictionary<string, string?>
    {
        ["position_id"] = jobId,
        ["domain"] = "microsoft.com",
        ["hl"] = "en",
        ["queried_location"] = queriedLocation
    };

    return "https://apply.careers.microsoft.com/api/pcsx/position_details?" + BuildQueryString(query);
}

static string BuildNvidiaDetailApiUrl(string jobId, string queriedLocation)
{
    var query = new Dictionary<string, string?>
    {
        ["position_id"] = jobId,
        ["domain"] = "nvidia.com",
        ["hl"] = "en",
        ["queried_location"] = queriedLocation
    };

    return "https://jobs.nvidia.com/api/pcsx/position_details?" + BuildQueryString(query);
}

static string BuildQueryString(Dictionary<string, string?> query)
{
    return string.Join(
        "&",
        query.Select(static item =>
            $"{Uri.EscapeDataString(item.Key)}={Uri.EscapeDataString(item.Value ?? string.Empty)}"));
}

static string NormalizeMicrosoftJobUrl(string? rawUrl, string jobId)
{
    if (string.IsNullOrWhiteSpace(rawUrl))
    {
        return $"https://apply.careers.microsoft.com/careers/job/{jobId}";
    }

    if (rawUrl.StartsWith("http", StringComparison.OrdinalIgnoreCase))
    {
        return rawUrl;
    }

    return $"https://apply.careers.microsoft.com/{rawUrl.TrimStart('/')}";
}

static string NormalizeNvidiaJobUrl(string? rawUrl, string jobId)
{
    if (string.IsNullOrWhiteSpace(rawUrl))
    {
        return $"https://jobs.nvidia.com/careers/job/{jobId}";
    }

    if (rawUrl.StartsWith("http", StringComparison.OrdinalIgnoreCase))
    {
        return rawUrl;
    }

    return $"https://jobs.nvidia.com/{rawUrl.TrimStart('/')}";
}

static string NormalizeAmazonJobUrl(string? rawUrl, string jobId)
{
    if (string.IsNullOrWhiteSpace(rawUrl))
    {
        return $"https://www.amazon.jobs/en/jobs/{jobId}";
    }

    if (rawUrl.StartsWith("http", StringComparison.OrdinalIgnoreCase))
    {
        return rawUrl;
    }

    return $"https://www.amazon.jobs/{rawUrl.TrimStart('/')}";
}

static string? ReadMicrosoftUnixTimestamp(JsonElement element, string propertyName)
{
    var value = ReadJsonLong(element, propertyName);
    return value is null ? null : DateTimeOffset.FromUnixTimeSeconds(value.Value).ToString("O");
}

static int? ReadJsonInt(JsonElement element, string propertyName)
{
    var value = ReadJsonLong(element, propertyName);
    return value is > int.MaxValue or < int.MinValue ? null : (int?)value;
}

static long? ReadJsonLong(JsonElement element, string propertyName)
{
    if (element.ValueKind != JsonValueKind.Object || !element.TryGetProperty(propertyName, out var value))
    {
        return null;
    }

    if (value.ValueKind == JsonValueKind.Number && value.TryGetInt64(out var number))
    {
        return number;
    }

    if (value.ValueKind == JsonValueKind.String && long.TryParse(value.GetString(), NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed))
    {
        return parsed;
    }

    return null;
}

static string? ReadJsonStringOrNumber(JsonElement element, string propertyName)
{
    if (element.ValueKind != JsonValueKind.Object || !element.TryGetProperty(propertyName, out var value))
    {
        return null;
    }

    return value.ValueKind switch
    {
        JsonValueKind.String => value.GetString(),
        JsonValueKind.Number => value.TryGetInt64(out var number) ? number.ToString(CultureInfo.InvariantCulture) : value.GetRawText(),
        _ => null
    };
}

static async Task<string> GetMetaSearchHtmlAsync(HttpClient httpClient, string searchUrl)
{
    try
    {
        return await httpClient.GetStringAsync(searchUrl);
    }
    catch (HttpRequestException)
    {
        // Meta currently rejects HttpClient's canonicalized offices[0] query format.
        // curl -g preserves the bracketed query keys that the public site accepts.
        return await FetchWithCurlAsync(searchUrl);
    }
}

static async Task<string> FetchWithCurlAsync(string url)
{
    var startInfo = new ProcessStartInfo
    {
        FileName = "curl",
        RedirectStandardOutput = true,
        RedirectStandardError = true
    };
    startInfo.ArgumentList.Add("-g");
    startInfo.ArgumentList.Add("-L");
    startInfo.ArgumentList.Add("--fail");
    startInfo.ArgumentList.Add("--silent");
    startInfo.ArgumentList.Add("--show-error");
    startInfo.ArgumentList.Add(url);

    using var process = Process.Start(startInfo) ?? throw new InvalidOperationException("Could not start curl.");
    var outputTask = process.StandardOutput.ReadToEndAsync();
    var errorTask = process.StandardError.ReadToEndAsync();
    await process.WaitForExitAsync();

    if (process.ExitCode != 0)
    {
        var error = await errorTask;
        throw new HttpRequestException($"curl failed with exit code {process.ExitCode}: {error}");
    }

    return await outputTask;
}

static async Task<string> PostMetaGraphqlWithCurlAsync(
    Dictionary<string, string> formFields,
    string lsdToken,
    string referer)
{
    var startInfo = new ProcessStartInfo
    {
        FileName = "curl",
        RedirectStandardOutput = true,
        RedirectStandardError = true
    };
    startInfo.ArgumentList.Add("-L");
    startInfo.ArgumentList.Add("--fail");
    startInfo.ArgumentList.Add("--silent");
    startInfo.ArgumentList.Add("--show-error");
    startInfo.ArgumentList.Add("--compressed");
    startInfo.ArgumentList.Add("https://www.metacareers.com/api/graphql/");
    startInfo.ArgumentList.Add("-H");
    startInfo.ArgumentList.Add("content-type: application/x-www-form-urlencoded");
    startInfo.ArgumentList.Add("-H");
    startInfo.ArgumentList.Add($"x-fb-lsd: {lsdToken}");
    startInfo.ArgumentList.Add("-H");
    startInfo.ArgumentList.Add($"referer: {referer}");

    foreach (var (key, value) in formFields)
    {
        startInfo.ArgumentList.Add("--data-urlencode");
        startInfo.ArgumentList.Add($"{key}={value}");
    }

    using var process = Process.Start(startInfo) ?? throw new InvalidOperationException("Could not start curl.");
    var outputTask = process.StandardOutput.ReadToEndAsync();
    var errorTask = process.StandardError.ReadToEndAsync();
    await process.WaitForExitAsync();

    if (process.ExitCode != 0)
    {
        var error = await errorTask;
        throw new HttpRequestException($"Meta GraphQL curl failed with exit code {process.ExitCode}: {error}");
    }

    return await outputTask;
}

static async Task<List<MetaSearchResult>> FetchMetaSearchResultsAsync(
    HttpClient httpClient,
    string searchUrl,
    string requestedLocation,
    string searchTerm,
    int page,
    List<string> offices)
{
    var searchHtml = await GetMetaSearchHtmlAsync(httpClient, searchUrl);
    var lsdToken = ExtractMetaLsdToken(searchHtml);
    if (string.IsNullOrWhiteSpace(lsdToken))
    {
        return ExtractMetaSearchResults(searchHtml, searchUrl, requestedLocation);
    }

    var variables = new
    {
        search_input = new
        {
            q = searchTerm,
            divisions = Array.Empty<string>(),
            offices,
            roles = Array.Empty<string>(),
            leadership_levels = Array.Empty<string>(),
            saved_jobs = Array.Empty<string>(),
            saved_searches = Array.Empty<string>(),
            sub_teams = Array.Empty<string>(),
            teams = Array.Empty<string>(),
            is_remote_only = false,
            sort_by_new = false,
            page,
            results_per_page = (int?)null
        }
    };

    var formFields = new Dictionary<string, string>
    {
        ["__a"] = "1",
        ["__user"] = "0",
        ["fb_api_caller_class"] = "RelayModern",
        ["fb_api_req_friendly_name"] = "CareersJobSearchResultsDataQuery",
        ["variables"] = JsonSerializer.Serialize(variables),
        ["server_timestamps"] = "true",
        ["doc_id"] = "29615178951461218",
        ["lsd"] = lsdToken
    };

    var json = await PostMetaGraphqlWithCurlAsync(formFields, lsdToken, searchUrl);
    return ParseMetaGraphqlSearchResults(json, searchUrl, requestedLocation);
}

static async Task<MetaRawJobItem> EnrichMetaRawJobAsync(
    HttpClient httpClient,
    MetaSearchResult searchResult,
    string capturedAt)
{
    try
    {
        Console.WriteLine($"Fetching Meta detail {searchResult.JobUrl}");
        var detailHtml = await GetMetaDetailHtmlAsync(httpClient, searchResult.JobUrl);
        var detail = ParseMetaJobDetailHtml(detailHtml, searchResult.JobId);
        return BuildMetaRawJob(searchResult, detail, capturedAt);
    }
    catch (HttpRequestException error)
    {
        Console.WriteLine($"Meta detail fetch failed for {searchResult.JobId}: {error.Message}");
        return BuildMetaRawJob(searchResult, null, capturedAt);
    }
}

static async Task<string> GetMetaDetailHtmlAsync(HttpClient httpClient, string jobUrl)
{
    try
    {
        return await httpClient.GetStringAsync(jobUrl);
    }
    catch (HttpRequestException)
    {
        return await FetchWithCurlAsync(jobUrl);
    }
}

static MetaRawJobItem BuildMetaRawJob(
    MetaSearchResult searchResult,
    MetaJobDetail? detail,
    string capturedAt)
{
    return new MetaRawJobItem(
        searchResult.JobId,
        detail?.TitleRaw ?? searchResult.TitleRaw,
        detail?.CompanyRaw ?? searchResult.CompanyRaw ?? "Meta",
        detail?.LocationsRaw ?? searchResult.LocationsRaw,
        detail?.JobUrl ?? searchResult.JobUrl,
        searchResult.SearchUrl,
        searchResult.RequestedLocation,
        detail?.ApplyUrlRaw,
        detail?.AboutTheJobRaw,
        detail?.ResponsibilitiesRaw,
        detail?.MinimumQualificationsRaw,
        detail?.PreferredQualificationsRaw,
        detail?.PostedAtCandidate,
        detail?.UpdatedAtCandidate,
        capturedAt);
}

static string BuildMetaSearchUrl(List<string> offices, string searchTerm, int page)
{
    var parts = offices
        .Select((office, index) => $"offices[{index}]={Uri.EscapeDataString(office)}")
        .ToList();

    if (!string.IsNullOrWhiteSpace(searchTerm))
    {
        parts.Add($"q={Uri.EscapeDataString(searchTerm)}");
    }

    if (page > 1)
    {
        parts.Add($"page={page.ToString(CultureInfo.InvariantCulture)}");
    }

    return $"https://www.metacareers.com/jobsearch?{string.Join("&", parts)}";
}

static List<MetaSearchResult> ExtractMetaSearchResults(
    string html,
    string searchUrl,
    string requestedLocation)
{
    var decoded = WebUtility.HtmlDecode(html);
    var matches = Regex.Matches(
            decoded,
            @"profile/job_details/(?<id>\d+)",
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase)
        .Select(static match => match.Groups["id"].Value)
        .Distinct(StringComparer.Ordinal)
        .OrderBy(static value => value, StringComparer.Ordinal)
        .ToList();

    return matches
        .Select(id =>
            new MetaSearchResult(
                id,
                null,
                "Meta",
                new List<string>(),
                NormalizeMetaJobUrl(id),
                searchUrl,
                requestedLocation))
        .ToList();
}

static string? ExtractMetaLsdToken(string html)
{
    return ExtractFirst(html, @"""LSD"",\[\],\{""token"":""(?<value>[^""]+)""");
}

static List<MetaSearchResult> ParseMetaGraphqlSearchResults(
    string json,
    string searchUrl,
    string requestedLocation)
{
    using var document = JsonDocument.Parse(json);
    if (!document.RootElement.TryGetProperty("data", out var data) ||
        !data.TryGetProperty("job_search_with_featured_jobs", out var container))
    {
        return new List<MetaSearchResult>();
    }

    var results = new List<MetaSearchResult>();
    AddMetaGraphqlJobs(results, container, "featured_jobs", searchUrl, requestedLocation);
    AddMetaGraphqlJobs(results, container, "all_jobs", searchUrl, requestedLocation);

    return results
        .GroupBy(static job => job.JobId, StringComparer.Ordinal)
        .Select(static group => group.First())
        .OrderBy(static job => job.TitleRaw, StringComparer.OrdinalIgnoreCase)
        .ThenBy(static job => job.JobId, StringComparer.Ordinal)
        .ToList();
}

static void AddMetaGraphqlJobs(
    List<MetaSearchResult> results,
    JsonElement container,
    string propertyName,
    string searchUrl,
    string requestedLocation)
{
    if (!container.TryGetProperty(propertyName, out var jobs) || jobs.ValueKind != JsonValueKind.Array)
    {
        return;
    }

    foreach (var job in jobs.EnumerateArray())
    {
        var id = ReadJsonString(job, "id");
        if (string.IsNullOrWhiteSpace(id))
        {
            continue;
        }

        results.Add(
            new MetaSearchResult(
                id,
                ReadJsonString(job, "title"),
                "Meta",
                ReadJsonStringList(job, "locations"),
                NormalizeMetaJobUrl(id),
                searchUrl,
                requestedLocation));
    }
}

static List<string> ReadJsonStringList(JsonElement element, string propertyName)
{
    if (element.ValueKind != JsonValueKind.Object ||
        !element.TryGetProperty(propertyName, out var value) ||
        value.ValueKind != JsonValueKind.Array)
    {
        return new List<string>();
    }

    return value.EnumerateArray()
        .Where(static item => item.ValueKind == JsonValueKind.String)
        .Select(static item => item.GetString() ?? string.Empty)
        .Where(static item => !string.IsNullOrWhiteSpace(item))
        .ToList();
}

static MetaJobDetail? ParseMetaJobDetailHtml(string html, string fallbackJobId)
{
    foreach (var json in ExtractMetaJsonLdBlocks(html))
    {
        try
        {
            using var document = JsonDocument.Parse(json);
            var root = document.RootElement;
            var jobPosting = FindMetaJobPosting(root);
            if (jobPosting is null)
            {
                continue;
            }

            var jobUrl = ExtractMetaCanonicalUrl(html) ?? NormalizeMetaJobUrl(fallbackJobId);
            var locations = ExtractMetaJsonLdLocations(jobPosting.Value);
            var qualifications = SplitMetaQualifications(ReadJsonString(jobPosting.Value, "qualifications"));
            return new MetaJobDetail(
                fallbackJobId,
                ReadJsonString(jobPosting.Value, "title"),
                ReadJsonString(GetJsonPropertyOrDefault(jobPosting.Value, "hiringOrganization"), "name") ?? "Meta",
                locations,
                jobUrl,
                null,
                ReadJsonString(jobPosting.Value, "description"),
                ReadJsonString(jobPosting.Value, "responsibilities"),
                qualifications.MinimumQualificationsRaw,
                qualifications.PreferredQualificationsRaw,
                ReadJsonString(jobPosting.Value, "datePosted"),
                null);
        }
        catch (JsonException)
        {
            continue;
        }
    }

    return null;
}

static MetaQualifications SplitMetaQualifications(string? qualificationsRaw)
{
    if (string.IsNullOrWhiteSpace(qualificationsRaw))
    {
        return new MetaQualifications(null, null);
    }

    var match = Regex.Match(
        qualificationsRaw,
        @"(?<minimum>.*?)(?:\s| )*Preferred Qualifications(?:\s| )*(?<preferred>.*)",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);

    if (!match.Success)
    {
        match = Regex.Match(
            qualificationsRaw,
            @"(?<minimum>.*?)(?<preferred>B\.S\. Computer Science or related technical field.*)",
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline);
    }

    return match.Success
        ? new MetaQualifications(
            EmptyToNull(match.Groups["minimum"].Value.Trim()),
            EmptyToNull(match.Groups["preferred"].Value.Trim()))
        : new MetaQualifications(qualificationsRaw.Trim(), null);
}

static List<string> ExtractMetaJsonLdBlocks(string html)
{
    return Regex.Matches(
            html,
            @"<script[^>]+type=[""']application/ld\+json[""'][^>]*>(?<value>.*?)</script>",
            RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Singleline)
        .Select(static match => WebUtility.HtmlDecode(match.Groups["value"].Value).Trim())
        .Where(static value => !string.IsNullOrWhiteSpace(value))
        .ToList();
}

static JsonElement? FindMetaJobPosting(JsonElement element)
{
    if (IsMetaJobPosting(element))
    {
        return element;
    }

    if (element.ValueKind == JsonValueKind.Array)
    {
        foreach (var child in element.EnumerateArray())
        {
            var match = FindMetaJobPosting(child);
            if (match is not null)
            {
                return match;
            }
        }
    }

    if (element.ValueKind == JsonValueKind.Object && element.TryGetProperty("@graph", out var graph))
    {
        return FindMetaJobPosting(graph);
    }

    return null;
}

static bool IsMetaJobPosting(JsonElement element)
{
    if (element.ValueKind != JsonValueKind.Object || !element.TryGetProperty("@type", out var typeElement))
    {
        return false;
    }

    if (typeElement.ValueKind == JsonValueKind.String)
    {
        return string.Equals(typeElement.GetString(), "JobPosting", StringComparison.OrdinalIgnoreCase);
    }

    return typeElement.ValueKind == JsonValueKind.Array &&
        typeElement.EnumerateArray().Any(static item =>
            item.ValueKind == JsonValueKind.String &&
            string.Equals(item.GetString(), "JobPosting", StringComparison.OrdinalIgnoreCase));
}

static List<string> ExtractMetaJsonLdLocations(JsonElement jobPosting)
{
    if (!jobPosting.TryGetProperty("jobLocation", out var locationElement))
    {
        return new List<string>();
    }

    var locationElements = locationElement.ValueKind == JsonValueKind.Array
        ? locationElement.EnumerateArray().ToList()
        : new List<JsonElement> { locationElement };

    return locationElements
        .Select(static item => ReadJsonString(item, "name"))
        .Where(static value => !string.IsNullOrWhiteSpace(value))
        .Select(static value => value!)
        .Distinct(StringComparer.Ordinal)
        .ToList();
}

static string? ExtractMetaCanonicalUrl(string html)
{
    return ExtractFirst(html, @"<link[^>]+rel=[""']canonical[""'][^>]+href=[""'](?<value>[^""']+)[""']");
}

static string NormalizeMetaJobUrl(string jobId)
{
    return $"https://www.metacareers.com/profile/job_details/{jobId}";
}

static string? ReadJsonString(JsonElement element, string propertyName)
{
    if (element.ValueKind != JsonValueKind.Object || !element.TryGetProperty(propertyName, out var value))
    {
        return null;
    }

    return value.ValueKind == JsonValueKind.String ? value.GetString() : null;
}

static JsonElement GetJsonPropertyOrDefault(JsonElement element, string propertyName)
{
    return element.ValueKind == JsonValueKind.Object && element.TryGetProperty(propertyName, out var value)
        ? value
        : default;
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

    foreach (var fragment in ExtractPayloadEntryFragments(html))
    {
        if (TryParsePayloadEntryFragment(fragment, out var parsedId, out var parsedEntry))
        {
            entries[parsedId] = parsedEntry;
            continue;
        }

        var match = Regex.Match(
            fragment,
            "^\\[\"(?<id>\\d+)\",\"(?<title>(?:\\\\.|[^\"\\\\])*)\",\"(?<applyUrl>(?:\\\\.|[^\"\\\\])*)\"(?<tail>.*)\\]$",
            RegexOptions.CultureInvariant | RegexOptions.Singleline);
        if (!match.Success)
        {
            continue;
        }

        var id = match.Groups["id"].Value;
        var tail = match.Groups["tail"].Value;
        var decodedTail = UnescapePayloadString(tail);
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

        var groups = Regex.Matches(decodedTail, "\\[(?<content>[^\\[\\]]+)\\]", RegexOptions.CultureInvariant | RegexOptions.Singleline)
            .Select(static match => match.Groups["content"].Value)
            .ToList();

        var minimumQualificationsRaw = ExtractHtmlListAfterLabel(decodedTail, "Minimum qualifications:");
        var preferredQualificationsRaw = ExtractHtmlListAfterLabel(decodedTail, "Preferred qualifications:");
        var responsibilitiesRaw = ExtractNthHtmlList(decodedTail, 0);
        var aboutTheJobRaw = ExtractNthParagraphBlock(decodedTail, 0);
        var detailedLocations = ExtractDetailedLocations(decodedTail);
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
            fragment[..Math.Min(fragment.Length, 4000)]);
    }

    return entries;
}

static bool TryParsePayloadEntryFragment(string fragment, out string id, out PayloadEntry entry)
{
    id = string.Empty;
    entry = default!;

    try
    {
        using var document = JsonDocument.Parse(fragment);
        var root = document.RootElement;
        if (root.ValueKind != JsonValueKind.Array || root.GetArrayLength() < 10)
        {
            return false;
        }

        id = GetStringAt(root, 0) ?? string.Empty;
        if (string.IsNullOrWhiteSpace(id))
        {
            return false;
        }

        var titleRaw = GetStringAt(root, 1);
        var applyUrlRaw = GetStringAt(root, 2);
        var responsibilitiesRaw = GetNestedString(root, 3, 1);
        var qualificationsRaw = GetNestedString(root, 4, 1);
        var aboutTheJobRaw = GetNestedString(root, 10, 1);
        var timestamps = ExtractTimestamps(fragment);
        var detailedLocations = ExtractDetailedLocationsFromJson(root, 9);
        var firstLocation = detailedLocations.FirstOrDefault();

        entry = new PayloadEntry(
            titleRaw,
            applyUrlRaw,
            timestamps.FirstOrDefault(),
            timestamps.LastOrDefault(),
            timestamps,
            CleanRawHtml(responsibilitiesRaw),
            CleanRawHtml(ExtractHtmlListAfterLabel(qualificationsRaw ?? string.Empty, "Minimum qualifications:")),
            CleanRawHtml(ExtractHtmlListAfterLabel(qualificationsRaw ?? string.Empty, "Preferred qualifications:")),
            CleanRawHtml(aboutTheJobRaw),
            detailedLocations,
            ExtractExperienceLevelFromJson(root, 11),
            null,
            ExtractProjectPathFromJson(root, 5),
            GetStringAt(root, 8),
            GetStringAt(root, 7),
            firstLocation?.City,
            firstLocation?.RegionCode,
            firstLocation?.CountryCode,
            firstLocation?.PostalCode,
            fragment[..Math.Min(fragment.Length, 4000)]);
        return true;
    }
    catch (JsonException)
    {
        return false;
    }
}

static string? GetStringAt(JsonElement element, int index)
{
    if (element.ValueKind != JsonValueKind.Array || element.GetArrayLength() <= index)
    {
        return null;
    }

    var value = element[index];
    return value.ValueKind == JsonValueKind.String ? value.GetString() : null;
}

static string? GetNestedString(JsonElement element, int outerIndex, int innerIndex)
{
    if (element.ValueKind != JsonValueKind.Array || element.GetArrayLength() <= outerIndex)
    {
        return null;
    }

    return GetStringAt(element[outerIndex], innerIndex);
}

static List<string> ExtractTimestamps(string input)
{
    return Regex.Matches(
            input,
            "\\[(?<seconds>\\d{10}),(?<nanos>\\d{6,9})\\]",
            RegexOptions.CultureInvariant)
        .Select(static item => ToIsoTimestamp(item.Groups["seconds"].Value, item.Groups["nanos"].Value))
        .Distinct(StringComparer.Ordinal)
        .OrderBy(static value => value, StringComparer.Ordinal)
        .ToList();
}

static List<RawLocationDetail> ExtractDetailedLocationsFromJson(JsonElement element, int index)
{
    if (element.ValueKind != JsonValueKind.Array || element.GetArrayLength() <= index)
    {
        return new List<RawLocationDetail>();
    }

    var locationsElement = element[index];
    if (locationsElement.ValueKind != JsonValueKind.Array)
    {
        return new List<RawLocationDetail>();
    }

    var locations = new List<RawLocationDetail>();
    foreach (var locationElement in locationsElement.EnumerateArray())
    {
        if (locationElement.ValueKind != JsonValueKind.Array || locationElement.GetArrayLength() < 6)
        {
            continue;
        }

        locations.Add(
            new RawLocationDetail(
                GetStringAt(locationElement, 0) ?? string.Empty,
                ExtractAddressListFromJson(locationElement[1]),
                GetStringAt(locationElement, 2),
                GetStringAt(locationElement, 3),
                GetStringAt(locationElement, 4),
                GetStringAt(locationElement, 5)));
    }

    return locations;
}

static List<string> ExtractAddressListFromJson(JsonElement element)
{
    if (element.ValueKind != JsonValueKind.Array)
    {
        return new List<string>();
    }

    return element.EnumerateArray()
        .Where(static item => item.ValueKind == JsonValueKind.String)
        .Select(static item => item.GetString() ?? string.Empty)
        .Where(static value => !string.IsNullOrWhiteSpace(value))
        .ToList();
}

static string? ExtractExperienceLevelFromJson(JsonElement element, int index)
{
    var stringLevels = GetStringListAt(element, index);
    if (stringLevels.Contains("Early", StringComparer.Ordinal))
    {
        return "Early";
    }

    if (stringLevels.Contains("Mid", StringComparer.Ordinal))
    {
        return "Mid";
    }

    if (stringLevels.Contains("Advanced", StringComparer.Ordinal))
    {
        return "Advanced";
    }

    var levels = GetNumberListAt(element, index);
    if (levels.Contains(1))
    {
        return "Early";
    }

    if (levels.Contains(2))
    {
        return "Mid";
    }

    if (levels.Contains(3))
    {
        return "Advanced";
    }

    return null;
}

static List<string> GetStringListAt(JsonElement element, int index)
{
    if (element.ValueKind != JsonValueKind.Array || element.GetArrayLength() <= index || element[index].ValueKind != JsonValueKind.Array)
    {
        return new List<string>();
    }

    return element[index].EnumerateArray()
        .Where(static item => item.ValueKind == JsonValueKind.String)
        .Select(static item => item.GetString() ?? string.Empty)
        .Where(static value => !string.IsNullOrWhiteSpace(value))
        .ToList();
}

static List<int> GetNumberListAt(JsonElement element, int index)
{
    if (element.ValueKind != JsonValueKind.Array || element.GetArrayLength() <= index || element[index].ValueKind != JsonValueKind.Array)
    {
        return new List<int>();
    }

    return element[index].EnumerateArray()
        .Where(static item => item.ValueKind == JsonValueKind.Number)
        .Select(static item => item.GetInt32())
        .ToList();
}

static string? ExtractProjectPathFromJson(JsonElement element, int index)
{
    var value = GetStringAt(element, index);
    return value?.StartsWith("projects/", StringComparison.Ordinal) == true ? value : null;
}

static List<string> ExtractPayloadEntryFragments(string html)
{
    var fragments = new List<string>();
    var matches = Regex.Matches(
        html,
        "\\[\"(?<id>\\d{6,})\",\"(?:\\\\.|[^\"\\\\])*\",\"(?:\\\\.|[^\"\\\\])*\"",
        RegexOptions.CultureInvariant);

    foreach (Match match in matches)
    {
        var fragment = ExtractBalancedArray(html, match.Index);
        if (!string.IsNullOrWhiteSpace(fragment))
        {
            fragments.Add(fragment);
        }
    }

    return fragments;
}

static string? ExtractBalancedArray(string input, int startIndex)
{
    var depth = 0;
    var inString = false;
    var escaped = false;

    for (var index = startIndex; index < input.Length; index += 1)
    {
        var current = input[index];
        if (inString)
        {
            if (escaped)
            {
                escaped = false;
            }
            else if (current == '\\')
            {
                escaped = true;
            }
            else if (current == '"')
            {
                inString = false;
            }

            continue;
        }

        if (current == '"')
        {
            inString = true;
            continue;
        }

        if (current == '[')
        {
            depth += 1;
            continue;
        }

        if (current != ']')
        {
            continue;
        }

        depth -= 1;
        if (depth == 0)
        {
            return input[startIndex..(index + 1)];
        }
    }

    return null;
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
                        GetChangedFields(previousJob, mergedJob),
                        BuildFieldChanges(previousJob, mergedJob)));
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
        if (previousJob.IsActive)
        {
            removed.Add(ToDeltaItem(inactiveJob));
        }
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
            $"locations={string.Join("|", normalizedLocations)}"
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

    return changedFields;
}

static List<FieldChange> BuildFieldChanges(JobItem previousJob, JobItem currentJob)
{
    var changes = new List<FieldChange>();

    if (!string.Equals(previousJob.Title, currentJob.Title, StringComparison.Ordinal))
    {
        changes.Add(FieldChange.ForValue("title", previousJob.Title, currentJob.Title));
    }

    if (!string.Equals(previousJob.Company, currentJob.Company, StringComparison.Ordinal))
    {
        changes.Add(FieldChange.ForValue("company", previousJob.Company, currentJob.Company));
    }

    if (!previousJob.Locations.SequenceEqual(currentJob.Locations, StringComparer.Ordinal))
    {
        var added = currentJob.Locations
            .Except(previousJob.Locations, StringComparer.Ordinal)
            .OrderBy(static value => value, StringComparer.Ordinal)
            .ToList();
        var removed = previousJob.Locations
            .Except(currentJob.Locations, StringComparer.Ordinal)
            .OrderBy(static value => value, StringComparer.Ordinal)
            .ToList();
        changes.Add(FieldChange.ForList("locations", added, removed));
    }

    return changes;
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

static JobDataset BuildMetaDataset(
    List<MetaLocationConfig> locations,
    List<JobItem> jobs,
    string generatedAt)
{
    var googleCompatibleLocations = locations
        .Select(static location => new LocationConfig(location.Slug, location.Label, string.Join(" | ", location.Offices)))
        .ToList();

    return new JobDataset(
        generatedAt,
        "Meta Careers",
        "success",
        $"Normalized {jobs.Count(static job => job.IsActive)} active Meta jobs from latest raw snapshot.",
        "Software Engineering",
        googleCompatibleLocations,
        jobs);
}

static JobDataset BuildAppleDataset(AppleRawRun rawRun, List<JobItem> jobs)
{
    var googleCompatibleLocations = rawRun.Sources
        .GroupBy(static source => source.LocationSlug, StringComparer.Ordinal)
        .Select(static group =>
        {
            var source = group.First();
            return new LocationConfig(source.LocationSlug, source.RequestedLocation, source.SearchUrl);
        })
        .OrderBy(static location => location.Label, StringComparer.Ordinal)
        .ToList();

    return new JobDataset(
        rawRun.GeneratedAt,
        "Apple Jobs",
        "success",
        $"Normalized {jobs.Count(static job => job.IsActive)} active Apple jobs from latest raw snapshot.",
        rawRun.SearchTerm,
        googleCompatibleLocations,
        jobs);
}

static JobDataset BuildMicrosoftDataset(MicrosoftRawRun rawRun, List<JobItem> jobs)
{
    var googleCompatibleLocations = rawRun.Sources
        .GroupBy(static source => source.LocationSlug, StringComparer.Ordinal)
        .Select(static group =>
        {
            var source = group.First();
            return new LocationConfig(source.LocationSlug, source.RequestedLocation, source.SearchLocation);
        })
        .OrderBy(static location => location.Label, StringComparer.Ordinal)
        .ToList();

    return new JobDataset(
        rawRun.GeneratedAt,
        "Microsoft Careers",
        "success",
        $"Normalized {jobs.Count(static job => job.IsActive)} active Microsoft jobs from latest raw snapshot.",
        rawRun.SearchTerm,
        googleCompatibleLocations,
        jobs);
}

static JobDataset BuildNvidiaDataset(NvidiaRawRun rawRun, List<JobItem> jobs)
{
    var googleCompatibleLocations = rawRun.Sources
        .GroupBy(static source => source.LocationSlug, StringComparer.Ordinal)
        .Select(static group =>
        {
            var source = group.First();
            return new LocationConfig(source.LocationSlug, source.RequestedLocation, source.SearchLocation);
        })
        .OrderBy(static location => location.Label, StringComparer.Ordinal)
        .ToList();

    return new JobDataset(
        rawRun.GeneratedAt,
        "NVIDIA Careers",
        "success",
        $"Normalized {jobs.Count(static job => job.IsActive)} active NVIDIA jobs from latest raw snapshot.",
        rawRun.SearchTerm,
        googleCompatibleLocations,
        jobs);
}

static JobDataset BuildAmazonDataset(AmazonRawRun rawRun, List<JobItem> jobs)
{
    var googleCompatibleLocations = rawRun.Sources
        .GroupBy(static source => source.LocationSlug, StringComparer.Ordinal)
        .Select(static group =>
        {
            var source = group.First();
            return new LocationConfig(source.LocationSlug, source.RequestedLocation, source.LocQuery);
        })
        .OrderBy(static location => location.Label, StringComparer.Ordinal)
        .ToList();
    var searchTerms = rawRun.Sources
        .Select(static source => source.SearchTerm)
        .Distinct(StringComparer.Ordinal)
        .ToList();

    return new JobDataset(
        rawRun.GeneratedAt,
        "Amazon Jobs",
        "success",
        $"Normalized {jobs.Count(static job => job.IsActive)} active Amazon jobs from latest raw snapshot.",
        string.Join(" | ", searchTerms),
        googleCompatibleLocations,
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

internal sealed record MetaLocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("offices")] List<string> Offices);

internal sealed record MicrosoftLocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("searchLocation")] string SearchLocation,
    [property: JsonPropertyName("cacheSlug")] string? CacheSlug = null);

internal sealed record NvidiaLocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("searchLocation")] string SearchLocation,
    [property: JsonPropertyName("cacheSlug")] string? CacheSlug = null);

internal sealed record AmazonLocationConfig(
    [property: JsonPropertyName("slug")] string Slug,
    [property: JsonPropertyName("label")] string Label,
    [property: JsonPropertyName("countryCode")] string CountryCode,
    [property: JsonPropertyName("locQuery")] string LocQuery,
    [property: JsonPropertyName("queries")] List<string> Queries,
    [property: JsonPropertyName("cacheSlug")] string? CacheSlug = null);

internal sealed record ParseHtmlPreview(
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("htmlPath")] string HtmlPath,
    [property: JsonPropertyName("capturedAt")] string CapturedAt,
    [property: JsonPropertyName("location")] LocationConfig Location,
    [property: JsonPropertyName("summary")] ParseHtmlSummary Summary,
    [property: JsonPropertyName("jobs")] List<JobItem> Jobs,
    [property: JsonPropertyName("rawJobs")] List<RawJobItem> RawJobs);

internal sealed record ParseHtmlSummary(
    [property: JsonPropertyName("visibleJobs")] int VisibleJobs,
    [property: JsonPropertyName("withAbout")] int WithAbout,
    [property: JsonPropertyName("withResponsibilities")] int WithResponsibilities,
    [property: JsonPropertyName("withMinimumQualifications")] int WithMinimumQualifications,
    [property: JsonPropertyName("withPreferredQualifications")] int WithPreferredQualifications,
    [property: JsonPropertyName("withApplyLink")] int WithApplyLink);

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

internal sealed record MetaRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("sources")] List<MetaRawSource> Sources);

internal sealed record MetaRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("offices")] List<string> Offices,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<MetaRawJobItem> Jobs);

internal sealed record MetaRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record AppleRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("sources")] List<AppleRawSource> Sources);

internal sealed record AppleRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<AppleRawJobItem> Jobs);

internal sealed record AppleRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("sourceJobId")] string? SourceJobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record MicrosoftRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("sources")] List<MicrosoftRawSource> Sources);

internal sealed record MicrosoftRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchLocation")] string SearchLocation,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<MicrosoftRawJobItem> Jobs);

internal sealed record MicrosoftRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record NvidiaRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("sources")] List<NvidiaRawSource> Sources);

internal sealed record NvidiaRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("searchLocation")] string SearchLocation,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<NvidiaRawJobItem> Jobs);

internal sealed record NvidiaRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record AmazonRawRun(
    [property: JsonPropertyName("runId")] string RunId,
    [property: JsonPropertyName("generatedAt")] string GeneratedAt,
    [property: JsonPropertyName("source")] string Source,
    [property: JsonPropertyName("sources")] List<AmazonRawSource> Sources);

internal sealed record AmazonRawSource(
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("locationSlug")] string LocationSlug,
    [property: JsonPropertyName("countryCode")] string CountryCode,
    [property: JsonPropertyName("locQuery")] string LocQuery,
    [property: JsonPropertyName("searchTerm")] string SearchTerm,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("jobs")] List<AmazonRawJobItem> Jobs);

internal sealed record AmazonRawJobItem(
    [property: JsonPropertyName("jobId")] string JobId,
    [property: JsonPropertyName("titleRaw")] string? TitleRaw,
    [property: JsonPropertyName("companyRaw")] string? CompanyRaw,
    [property: JsonPropertyName("locationsRaw")] List<string> LocationsRaw,
    [property: JsonPropertyName("jobUrl")] string JobUrl,
    [property: JsonPropertyName("searchUrl")] string SearchUrl,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate,
    [property: JsonPropertyName("capturedAt")] string CapturedAt);

internal sealed record MetaSearchResult(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string SearchUrl,
    string RequestedLocation);

internal sealed record MetaJobDetail(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string? ApplyUrlRaw,
    string? AboutTheJobRaw,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw,
    string? PostedAtCandidate,
    string? UpdatedAtCandidate);

internal sealed record MicrosoftSearchResult(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string SearchUrl,
    string RequestedLocation,
    string? PostedAtCandidate);

internal sealed record MicrosoftSearchPage(
    int TotalCount,
    List<MicrosoftSearchResult> Results);

internal sealed record MicrosoftJobDetail(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string? ApplyUrlRaw,
    string? AboutTheJobRaw,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw,
    string? PostedAtCandidate,
    string? UpdatedAtCandidate);

internal sealed record MicrosoftJobDescriptionSections(
    string? AboutTheJobRaw,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw);

internal sealed record NvidiaSearchResult(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string SearchUrl,
    string RequestedLocation,
    string? PostedAtCandidate);

internal sealed record NvidiaSearchPage(
    int TotalCount,
    List<NvidiaSearchResult> Results);

internal sealed record NvidiaJobDetail(
    string JobId,
    string? TitleRaw,
    string? CompanyRaw,
    List<string> LocationsRaw,
    string JobUrl,
    string? ApplyUrlRaw,
    string? AboutTheJobRaw,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw,
    string? PostedAtCandidate,
    string? UpdatedAtCandidate);

internal sealed record NvidiaJobDescriptionSections(
    string? AboutTheJobRaw,
    string? ResponsibilitiesRaw,
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw);

internal sealed record AmazonSearchPage(
    int Hits,
    List<AmazonRawJobItem> Jobs);

internal sealed record MetaQualifications(
    string? MinimumQualificationsRaw,
    string? PreferredQualificationsRaw);

internal sealed record MetaFetchResult(
    List<MetaRawSource> Sources,
    int JobCount);

internal sealed record MicrosoftFetchResult(
    List<MicrosoftRawSource> Sources,
    int JobCount);

internal sealed record NvidiaFetchResult(
    List<NvidiaRawSource> Sources,
    int JobCount);

internal sealed record AmazonFetchResult(
    List<AmazonRawSource> Sources,
    int JobCount);

internal sealed record MetaRawSourceDraft(
    string RequestedLocation,
    string LocationSlug,
    List<string> Offices,
    string SearchUrl,
    List<MetaRawJobItem> Jobs);

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

internal sealed record RemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<RemovedJobDetail> Jobs);

internal sealed record MetaRemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<MetaRemovedJobDetail> Jobs);

internal sealed record AppleRemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<AppleRemovedJobDetail> Jobs);

internal sealed record MicrosoftRemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<MicrosoftRemovedJobDetail> Jobs);

internal sealed record NvidiaRemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<NvidiaRemovedJobDetail> Jobs);

internal sealed record AmazonRemovedDetailsDataset(
    [property: JsonPropertyName("jobs")] List<AmazonRemovedJobDetail> Jobs);

internal sealed record MetaRemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate);

internal sealed record AppleRemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate);

internal sealed record MicrosoftRemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate);

internal sealed record NvidiaRemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate);

internal sealed record AmazonRemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("postedAtCandidate")] string? PostedAtCandidate,
    [property: JsonPropertyName("updatedAtCandidate")] string? UpdatedAtCandidate);

internal sealed record RemovedJobDetail(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("title")] string Title,
    [property: JsonPropertyName("company")] string? Company,
    [property: JsonPropertyName("url")] string Url,
    [property: JsonPropertyName("locations")] List<string> Locations,
    [property: JsonPropertyName("requestedLocation")] string RequestedLocation,
    [property: JsonPropertyName("firstSeenAt")] string? FirstSeenAt,
    [property: JsonPropertyName("lastSeenAt")] string? LastSeenAt,
    [property: JsonPropertyName("removedAt")] string? RemovedAt,
    [property: JsonPropertyName("removedInRunId")] string? RemovedInRunId,
    [property: JsonPropertyName("applyUrlRaw")] string? ApplyUrlRaw,
    [property: JsonPropertyName("aboutTheJobRaw")] string? AboutTheJobRaw,
    [property: JsonPropertyName("responsibilitiesRaw")] string? ResponsibilitiesRaw,
    [property: JsonPropertyName("minimumQualificationsRaw")] string? MinimumQualificationsRaw,
    [property: JsonPropertyName("preferredQualificationsRaw")] string? PreferredQualificationsRaw,
    [property: JsonPropertyName("experienceLevelRaw")] string? ExperienceLevelRaw,
    [property: JsonPropertyName("experienceLevelDescriptionRaw")] string? ExperienceLevelDescriptionRaw,
    [property: JsonPropertyName("locationsRawDetailed")] List<RawLocationDetail>? LocationsRawDetailed,
    [property: JsonPropertyName("rawTimestampPairs")] List<string> RawTimestampPairs);

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
    [property: JsonPropertyName("changedFields")] List<string> ChangedFields,
    [property: JsonPropertyName("fieldChanges")] List<FieldChange> FieldChanges);

internal sealed record FieldChange(
    [property: JsonPropertyName("field")] string Field,
    [property: JsonPropertyName("previous")] string? Previous,
    [property: JsonPropertyName("current")] string? Current,
    [property: JsonPropertyName("added")] List<string>? Added,
    [property: JsonPropertyName("removed")] List<string>? Removed)
{
    public static FieldChange ForValue(string field, string? previous, string? current)
    {
        return new FieldChange(field, previous, current, null, null);
    }

    public static FieldChange ForList(string field, List<string> added, List<string> removed)
    {
        return new FieldChange(field, null, null, added, removed);
    }
}

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
    ParseHtml,
    CollectMeta,
    NormalizeMetaLatest,
    AnalyzeMetaLatest,
    NormalizeAppleLatest,
    AnalyzeAppleLatest,
    CollectMicrosoft,
    NormalizeMicrosoftLatest,
    AnalyzeMicrosoftLatest,
    CollectNvidia,
    NormalizeNvidiaLatest,
    AnalyzeNvidiaLatest,
    CollectAmazon,
    NormalizeAmazonLatest,
    AnalyzeAmazonLatest,
    CollectAndAnalyze,
    Collect,
    AnalyzeLatest,
    Rebuild
}
