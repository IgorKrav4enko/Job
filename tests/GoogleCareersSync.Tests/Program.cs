using System.Reflection;

var runner = new ReflectionTestRunner();
await runner.RunAsync();

internal sealed class ReflectionTestRunner
{
    private readonly Assembly _targetAssembly;
    private readonly Type _programType;

    public ReflectionTestRunner()
    {
        _targetAssembly = Assembly.Load("GoogleCareersSync");

        _programType = _targetAssembly.GetTypes().First(type => type.Name == "Program");
    }

    public async Task RunAsync()
    {
        // Базовий набір тестів покриває найризиковіші частини парсера:
        // побудову URL, витяг job id, hash/diff логіку та парсинг HTML/payload.
        var tests = new List<(string Name, Func<Task> Body)>
        {
            ("BuildSearchUrl encodes location, query and page", TestBuildSearchUrlAsync),
            ("ExtractJobId returns the numeric id from a Google Careers URL", TestExtractJobIdAsync),
            ("ComputeContentHash ignores location order but reacts to meaningful field changes", TestContentHashAsync),
            ("MergeJobs classifies added, removed, changed and unchanged correctly", TestMergeJobsAsync),
            ("MergeJobs does not emit duplicate removed events for already inactive jobs", TestMergeJobsDoesNotRepeatRemovedAsync),
            ("ParseJobsFromHtml extracts visible card fields and payload-derived raw data", TestParseJobsFromHtmlAsync),
            ("Meta normalization preserves firstSeenAt, updates lastSeenAt and deactivates missing jobs", TestMetaNormalizationStateTrackingAsync),
            ("Apple normalization preserves firstSeenAt, updates lastSeenAt and deactivates missing jobs", TestAppleNormalizationStateTrackingAsync),
            ("Microsoft normalization preserves firstSeenAt, updates lastSeenAt and deactivates missing jobs", TestMicrosoftNormalizationStateTrackingAsync),
            ("NVIDIA normalization preserves firstSeenAt, updates lastSeenAt and deactivates missing jobs", TestNvidiaNormalizationStateTrackingAsync),
            ("Apple history outputs include changed fields, per-location summaries and removed raw details", TestAppleHistoryOutputsAsync),
            ("Meta history outputs include changed fields, per-location summaries and removed raw details", TestMetaHistoryOutputsAsync),
            ("NVIDIA history outputs include changed fields, per-location summaries and removed raw details", TestNvidiaHistoryOutputsAsync)
        };

        var failures = new List<string>();

        foreach (var (name, body) in tests)
        {
            try
            {
                await body();
                Console.WriteLine($"PASS {name}");
            }
            catch (Exception error)
            {
                failures.Add($"{name}: {error.Message}");
                Console.WriteLine($"FAIL {name}");
            }
        }

        if (failures.Count > 0)
        {
            Console.WriteLine();
            Console.WriteLine("Failures:");
            foreach (var failure in failures)
            {
                Console.WriteLine($"- {failure}");
            }

            Environment.ExitCode = 1;
            return;
        }

        Console.WriteLine();
        Console.WriteLine($"All {tests.Count} tests passed.");
    }

    private Task TestBuildSearchUrlAsync()
    {
        // Перевіряємо, що URL пошуку складається коректно:
        // локація, query і номер сторінки мають бути правильно закодовані.
        var result = InvokeStatic<string>("BuildSearchUrl", "Zurich, Switzerland", "\"Software Engineer\"", 3);
        AssertEqual(
            "https://www.google.com/about/careers/applications/jobs/results?location=Zurich%2C%20Switzerland&q=%22Software%20Engineer%22&page=3",
            result,
            "BuildSearchUrl should URL-encode both location and query.");
        return Task.CompletedTask;
    }

    private Task TestExtractJobIdAsync()
    {
        // Перевіряємо 2 сценарії:
        // 1. коректний URL повертає numeric job id
        // 2. невалідний URL не ламає логіку і повертає null
        var valid = InvokeNullableStatic<string>(
            "ExtractJobId",
            "https://www.google.com/about/careers/applications/jobs/results/127025001-software-engineer?location=Zurich");
        var invalid = InvokeNullableStatic<string>("ExtractJobId", "https://www.google.com/about/careers/applications/jobs/results/no-id-here");

        AssertEqual("127025001", valid, "The parser should extract the numeric job id.");
        AssertTrue(invalid is null, "Non-matching URLs should return null.");
        return Task.CompletedTask;
    }

    private Task TestContentHashAsync()
    {
        // Тут перевіряємо fingerprint вакансії:
        // однаковий зміст із різним порядком locations має дати той самий hash,
        // а зміна важливого поля повинна дати інший hash.
        var first = CreateJobItem(
            id: "1",
            title: "Software Engineer",
            company: "Google",
            locations: new[] { "Warsaw, Poland", "Zurich, Switzerland" },
            url: "https://example.test/jobs/1",
            requestedLocation: "Warsaw, Poland",
            searchUrl: "https://example.test/search",
            postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
            updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00");

        var sameMeaningDifferentLocationOrder = CreateJobItem(
            id: "1",
            title: "Software Engineer",
            company: "Google",
            locations: new[] { "Zurich, Switzerland", "Warsaw, Poland" },
            url: "https://example.test/jobs/1?page=2&location=Poland",
            requestedLocation: "Warsaw, Poland",
            searchUrl: "https://example.test/search",
            postedAtCandidate: null,
            updatedAtCandidate: null);

        var changed = CreateJobItem(
            id: "1",
            title: "Software Engineer III",
            company: "Google",
            locations: new[] { "Zurich, Switzerland", "Warsaw, Poland" },
            url: "https://example.test/jobs/1",
            requestedLocation: "Warsaw, Poland",
            searchUrl: "https://example.test/search",
            postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
            updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00");

        var firstHash = InvokeStatic<string>("ComputeContentHash", first);
        var secondHash = InvokeStatic<string>("ComputeContentHash", sameMeaningDifferentLocationOrder);
        var changedHash = InvokeStatic<string>("ComputeContentHash", changed);

        AssertEqual(firstHash, secondHash, "Location order should not affect the content hash.");
        AssertTrue(firstHash != changedHash, "A title change should produce a different content hash.");
        return Task.CompletedTask;
    }

    private Task TestMergeJobsAsync()
    {
        // Це ключовий тест для історії запусків:
        // перевіряємо, що merge правильно класифікує вакансії як
        // added / removed / changed / unchanged.
        var previous = CreateList(
            "JobItem",
            CreateJobItem(
                id: "stay",
                title: "Software Engineer",
                company: "Google",
                locations: new[] { "Warsaw, Poland" },
                url: "https://example.test/jobs/stay",
                requestedLocation: "Warsaw, Poland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
                updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00",
                firstSeenAt: "2026-04-10T10:00:00.0000000+00:00",
                lastSeenAt: "2026-04-11T10:00:00.0000000+00:00",
                isActive: true,
                contentHash: null),
            CreateJobItem(
                id: "change",
                title: "Software Engineer",
                company: "Google",
                locations: new[] { "Zurich, Switzerland" },
                url: "https://example.test/jobs/change",
                requestedLocation: "Zurich, Switzerland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
                updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00",
                firstSeenAt: "2026-04-10T10:00:00.0000000+00:00",
                lastSeenAt: "2026-04-11T10:00:00.0000000+00:00",
                isActive: true,
                contentHash: null),
            CreateJobItem(
                id: "remove",
                title: "SRE",
                company: "Google",
                locations: new[] { "Warsaw, Poland" },
                url: "https://example.test/jobs/remove",
                requestedLocation: "Warsaw, Poland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: null,
                updatedAtCandidate: null,
                firstSeenAt: "2026-04-10T10:00:00.0000000+00:00",
                lastSeenAt: "2026-04-11T10:00:00.0000000+00:00",
                isActive: true,
                contentHash: null));

        var latest = CreateList(
            "JobItem",
            CreateJobItem(
                id: "stay",
                title: "Software Engineer",
                company: "Google",
                locations: new[] { "Warsaw, Poland" },
                url: "https://example.test/jobs/stay",
                requestedLocation: "Warsaw, Poland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
                updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00"),
            CreateJobItem(
                id: "change",
                title: "Software Engineer III",
                company: "Google",
                locations: new[] { "Zurich, Switzerland" },
                url: "https://example.test/jobs/change",
                requestedLocation: "Zurich, Switzerland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
                updatedAtCandidate: "2026-04-12T10:00:00.0000000+00:00"),
            CreateJobItem(
                id: "add",
                title: "Staff Engineer",
                company: "YouTube",
                locations: new[] { "Zurich, Switzerland" },
                url: "https://example.test/jobs/add",
                requestedLocation: "Zurich, Switzerland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: null,
                updatedAtCandidate: null));

        var mergeResult = InvokeStatic("MergeJobs", previous, latest, "2026-04-15T12:00:00.0000000+00:00")!;

        AssertEqual(1, GetListCount(mergeResult, "Added"), "Expected exactly one added job.");
        AssertEqual(1, GetListCount(mergeResult, "Removed"), "Expected exactly one removed job.");
        AssertEqual(1, GetListCount(mergeResult, "Changed"), "Expected exactly one changed job.");
        AssertEqual(1, GetListCount(mergeResult, "Unchanged"), "Expected exactly one unchanged job.");

        var changedItem = GetListItem(mergeResult, "Changed", 0);
        var changedFields = GetStringListProperty(changedItem, "ChangedFields");
        // Окремо перевіряємо, що changedFields пояснює,
        // які саме нормалізовані поля реально змінилися.
        AssertTrue(changedFields.Contains("title"), "Changed fields should include title.");
        AssertTrue(!changedFields.Contains("updatedAtCandidate"), "Candidate timestamps should not count as meaningful content changes.");

        var mergedJobs = GetList(mergeResult, "Jobs");
        var removedJob = mergedJobs.Cast<object>().Single(item => GetStringProperty(item, "Id") == "remove");
        // Removed job не повинен зникати безслідно з snapshot:
        // він має лишитися в історії, але бути позначеним як inactive.
        AssertTrue(!GetBooleanProperty(removedJob, "IsActive"), "Removed jobs should be marked inactive in the merged snapshot.");
        return Task.CompletedTask;
    }

    private Task TestMergeJobsDoesNotRepeatRemovedAsync()
    {
        // Якщо вакансія вже inactive з попереднього запуску, наступний snapshot без неї
        // не повинен створювати ще один removed event.
        var previous = CreateList(
            "JobItem",
            CreateJobItem(
                id: "already-removed",
                title: "Software Engineer III, Google Tasks Web",
                company: "Google",
                locations: new[] { "Zürich, Switzerland" },
                url: "https://example.test/jobs/already-removed",
                requestedLocation: "Switzerland",
                searchUrl: "https://example.test/search",
                postedAtCandidate: null,
                updatedAtCandidate: null,
                firstSeenAt: "2026-04-15T23:21:43.0000000+00:00",
                lastSeenAt: "2026-04-15T23:21:43.0000000+00:00",
                isActive: false,
                contentHash: null));
        var latest = CreateList("JobItem");
        var mergeResult = InvokeStatic("MergeJobs", previous, latest, "2026-04-18T14:27:24.0000000+00:00")!;

        AssertEqual(0, GetListCount(mergeResult, "Removed"), "Already inactive jobs should not emit duplicate removed events.");
        var mergedJob = GetListItem(mergeResult, "Jobs", 0);
        AssertTrue(!GetBooleanProperty(mergedJob, "IsActive"), "Already inactive job should remain inactive in the dataset.");
        AssertEqual("2026-04-15T23:21:43.0000000+00:00", GetStringProperty(mergedJob, "LastSeenAt"), "Already inactive job should keep its real last seen timestamp.");
        return Task.CompletedTask;
    }

    private Task TestParseJobsFromHtmlAsync()
    {
        // Це інтеграційний тест на невеликому HTML/payload sample:
        // перевіряємо, що парсер дістає видимі дані з card
        // і додаткові raw-поля з вбудованого payload.
        var html = """
            <html>
              <body>
                <ul>
                  <li class="lLd3Je">
                    <a href="jobs/results/127025001-software-engineer-iii"></a>
                    <h3 class="QJPWVe">Software Engineer III</h3>
                    <span class="RP7SMd"><span>Google</span></span>
                    <span class="r0wTof">Zurich, Switzerland</span>
                    <span class="r0wTof">Warsaw, Poland</span>
                  </li>
                </ul>
                ["127025001","Software Engineer III","https://apply.example.test/job-127025001",[null,"<ul><li>Build systems</li></ul>"],[null,"<h3>Minimum qualifications:</h3><ul><li>BSc</li></ul><br><h3>Preferred qualifications:</h3><ul><li>MSc</li></ul>"],"projects/gweb-careers-proto/tenants/demo/companies/demo-company",null,"Google","en-US",[["Zurich, Switzerland",["Zurich, Switzerland"],"Zurich",null,"ZH","CH"]],[null,"<p>Work on search infrastructure.</p>"],["Mid"],[1774513750,577000000],[1776176968,939000000],[null,""],[null,""],[null,"Experience with mid-level engineering scope"]],["999","Next title","https://apply.example.test/job-999"]
              </body>
            </html>
            """;

        var location = CreateRecord("LocationConfig", "zurich", "Zurich, Switzerland", "Zurich, Switzerland");
        var result = InvokeStatic("ParseJobsFromHtml", html, location, "https://example.test/search", "2026-04-15T12:00:00.0000000+00:00")!;
        var expectedPostedAt = InvokeStatic<string>("ToIsoTimestamp", "1774513750", "577000000");
        var expectedUpdatedAt = InvokeStatic<string>("ToIsoTimestamp", "1776176968", "939000000");

        AssertEqual(1, GetListCount(result, "Jobs"), "The HTML sample should yield one visible job.");
        AssertEqual(1, GetListCount(result, "RawJobs"), "The HTML sample should yield one raw job.");

        var job = GetListItem(result, "Jobs", 0);
        // Нормалізований JobItem повинен мати базові поля для UI та diff-логіки.
        AssertEqual("127025001", GetStringProperty(job, "Id"), "Parsed job id should match the URL id.");
        AssertEqual("Software Engineer III", GetStringProperty(job, "Title"), "Parsed title should come from the job card.");
        AssertEqual("Google", GetStringProperty(job, "Company"), "Parsed company should come from the job card.");
        AssertEqual(expectedPostedAt, GetStringProperty(job, "PostedAtCandidate"), "Posted candidate timestamp should come from payload.");
        AssertEqual(expectedUpdatedAt, GetStringProperty(job, "UpdatedAtCandidate"), "Updated candidate timestamp should come from payload.");

        var rawJob = GetListItem(result, "RawJobs", 0);
        // RawJobItem повинен зберігати багатші технічні дані,
        // щоб ми могли переаналізувати run пізніше без нового scraping.
        AssertEqual("https://apply.example.test/job-127025001", GetStringProperty(rawJob, "ApplyUrlRaw"), "Raw job should include apply URL.");
        AssertTrue(GetStringProperty(rawJob, "AboutTheJobRaw")?.Contains("Work on search infrastructure.", StringComparison.Ordinal) == true, "Raw job should include the about-the-job block.");
        AssertTrue(GetStringProperty(rawJob, "MinimumQualificationsRaw")?.Contains("BSc", StringComparison.Ordinal) == true, "Raw job should include minimum qualifications.");
        AssertTrue(GetStringProperty(rawJob, "PreferredQualificationsRaw")?.Contains("MSc", StringComparison.Ordinal) == true, "Raw job should include preferred qualifications.");
        AssertEqual("Mid", GetStringProperty(rawJob, "ExperienceLevelRaw"), "Payload badges should map to the Mid experience level.");
        return Task.CompletedTask;
    }

    private Task TestMetaNormalizationStateTrackingAsync()
    {
        // Meta normalization має довести саме поведінку state tracking на двох raw snapshots:
        // job, який лишився, зберігає firstSeenAt і оновлює lastSeenAt;
        // job, який зник, лишається в normalized output як inactive.
        var firstRunAt = "2026-04-17T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-17T12:00:00.0000000+00:00";
        var firstRawRun = CreateMetaRawRun(
            "meta-run-1",
            firstRunAt,
            CreateMetaRawJob(
                jobId: "shared",
                titleRaw: "Software Engineer",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: firstRunAt),
            CreateMetaRawJob(
                jobId: "removed",
                titleRaw: "Product Engineer",
                locationsRaw: new[] { "London, UK" },
                requestedLocation: "United Kingdom",
                capturedAt: firstRunAt));
        var secondRawRun = CreateMetaRawRun(
            "meta-run-2",
            secondRunAt,
            CreateMetaRawJob(
                jobId: "shared",
                titleRaw: "Software Engineer",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: secondRunAt),
            CreateMetaRawJob(
                jobId: "new",
                titleRaw: "Machine Learning Engineer",
                locationsRaw: new[] { "London, UK" },
                requestedLocation: "United Kingdom",
                capturedAt: secondRunAt));

        var firstJobs = InvokeStatic("BuildMetaJobsFromRawRun", firstRawRun)!;
        var firstMerge = InvokeStatic("MergeJobs", CreateList("JobItem"), firstJobs, firstRunAt)!;
        var secondJobs = InvokeStatic("BuildMetaJobsFromRawRun", secondRawRun)!;
        var secondMerge = InvokeStatic("MergeJobs", GetList(firstMerge, "Jobs"), secondJobs, secondRunAt)!;
        var mergedJobs = GetList(secondMerge, "Jobs").Cast<object>().ToList();

        AssertEqual(3, mergedJobs.Count, "Expected one shared, one removed and one new normalized Meta job.");
        AssertEqual(3, mergedJobs.Select(job => GetStringProperty(job, "Id")).Distinct().Count(), "Meta normalization should keep one record per job id.");

        var shared = mergedJobs.Single(job => GetStringProperty(job, "Id") == "shared");
        AssertEqual(firstRunAt, GetStringProperty(shared, "FirstSeenAt"), "Existing Meta job should preserve firstSeenAt.");
        AssertEqual(secondRunAt, GetStringProperty(shared, "LastSeenAt"), "Existing Meta job should update lastSeenAt on newer raw snapshot.");
        AssertTrue(GetBooleanProperty(shared, "IsActive"), "Existing Meta job should stay active.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(shared, "ContentHash")), "Existing Meta job should have contentHash.");

        var removed = mergedJobs.Single(job => GetStringProperty(job, "Id") == "removed");
        AssertEqual(firstRunAt, GetStringProperty(removed, "FirstSeenAt"), "Removed Meta job should keep original firstSeenAt.");
        AssertEqual(firstRunAt, GetStringProperty(removed, "LastSeenAt"), "Removed Meta job should keep last seen timestamp from its last active run.");
        AssertTrue(!GetBooleanProperty(removed, "IsActive"), "Missing Meta job should become inactive.");

        var added = mergedJobs.Single(job => GetStringProperty(job, "Id") == "new");
        AssertEqual(secondRunAt, GetStringProperty(added, "FirstSeenAt"), "New Meta job should initialize firstSeenAt from the newer raw snapshot.");
        AssertEqual(secondRunAt, GetStringProperty(added, "LastSeenAt"), "New Meta job should initialize lastSeenAt from the newer raw snapshot.");
        AssertTrue(GetBooleanProperty(added, "IsActive"), "New Meta job should be active.");
        return Task.CompletedTask;
    }

    private Task TestMetaHistoryOutputsAsync()
    {
        // Це Task 3 proof: Meta history/diff має ті самі meaningful-change правила,
        // perLocation aggregation і removed-details з raw detail останнього активного snapshot.
        var firstRunAt = "2026-04-17T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-17T12:00:00.0000000+00:00";
        var firstRawRun = CreateMetaRawRun(
            "meta-history-run-1",
            firstRunAt,
            CreateMetaRawJob(
                jobId: "change",
                titleRaw: "Software Engineer",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: firstRunAt),
            CreateMetaRawJob(
                jobId: "remove",
                titleRaw: "Removed Engineer",
                locationsRaw: new[] { "London, UK" },
                requestedLocation: "United Kingdom",
                capturedAt: firstRunAt,
                aboutTheJobRaw: "Removed role details",
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"));
        var secondRawRun = CreateMetaRawRun(
            "meta-history-run-2",
            secondRunAt,
            CreateMetaRawJob(
                jobId: "change",
                titleRaw: "Software Engineer II",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: secondRunAt),
            CreateMetaRawJob(
                jobId: "add",
                titleRaw: "New Engineer",
                locationsRaw: new[] { "Dublin, Ireland" },
                requestedLocation: "Ireland",
                capturedAt: secondRunAt));

        var firstMerge = InvokeStatic(
            "MergeJobs",
            CreateList("JobItem"),
            InvokeStatic("BuildMetaJobsFromRawRun", firstRawRun),
            firstRunAt)!;
        var secondMerge = InvokeStatic(
            "MergeJobs",
            GetList(firstMerge, "Jobs"),
            InvokeStatic("BuildMetaJobsFromRawRun", secondRawRun),
            secondRunAt)!;
        var previousRunDetails = CreateRecord("RunDetailsDataset", CreateList("RunDetail"));
        var runDetails = InvokeStatic("BuildRunDetailsDataset", previousRunDetails, "meta-history-run-2", secondMerge)!;
        var previousRuns = CreateRecord("RunHistoryDataset", CreateList("RunSummary"));
        var runs = InvokeStatic("BuildRunsDataset", previousRuns, "meta-history-run-2", secondRunAt, secondMerge)!;
        var dataset = CreateRecord(
            "JobDataset",
            secondRunAt,
            "Meta Careers",
            "success",
            "test",
            "Software Engineering",
            CreateList("LocationConfig", CreateRecord("LocationConfig", "switzerland", "Switzerland", "Zurich, Switzerland")),
            GetList(secondMerge, "Jobs"));
        var removedDetails = InvokeStatic(
            "BuildMetaRemovedDetailsDataset",
            dataset,
            runDetails,
            CreateList("MetaRawRun", firstRawRun, secondRawRun))!;

        AssertEqual(1, GetListCount(secondMerge, "Added"), "Meta diff should classify one added job.");
        AssertEqual(1, GetListCount(secondMerge, "Removed"), "Meta diff should classify one removed job.");
        AssertEqual(1, GetListCount(secondMerge, "Changed"), "Meta diff should classify one changed job.");

        var changed = GetListItem(secondMerge, "Changed", 0);
        var changedFields = GetStringListProperty(changed, "ChangedFields");
        AssertTrue(changedFields.Contains("title"), "Meta changed fields should include title.");
        AssertTrue(!changedFields.Contains("searchUrl"), "Meta changed fields should not include searchUrl.");

        var runSummary = GetListItem(runs, "Runs", 0);
        AssertTrue(GetListCount(runSummary, "PerLocation") > 0, "Meta run summary should include perLocation entries.");
        var runDetail = GetListItem(runDetails, "Runs", 0);
        AssertTrue(GetListCount(runDetail, "PerLocation") > 0, "Meta run details should include perLocation entries.");

        var removed = GetListItem(removedDetails, "Jobs", 0);
        AssertEqual("remove", GetStringProperty(removed, "Id"), "Meta removed-details should include removed job id.");
        AssertEqual("meta-history-run-2", GetStringProperty(removed, "RemovedInRunId"), "Meta removed-details should include removal run id.");
        AssertEqual(secondRunAt, GetStringProperty(removed, "RemovedAt"), "Meta removed-details should include removal timestamp.");
        AssertEqual("Removed role details", GetStringProperty(removed, "AboutTheJobRaw"), "Meta removed-details should preserve raw detail fields.");
        AssertEqual("2026-04-01T00:00:00.0000000+00:00", GetStringProperty(removed, "PostedAtCandidate"), "Meta removed-details should preserve raw posted candidate.");
        return Task.CompletedTask;
    }

    private Task TestAppleNormalizationStateTrackingAsync()
    {
        // Apple має окрему identity-особливість: кілька source postings можуть мати
        // один logical positionId. Нормалізація повинна звести їх до одного JobItem.
        var firstRunAt = "2026-04-20T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-20T12:00:00.0000000+00:00";
        var firstRawRun = CreateAppleRawRun(
            "apple-run-1",
            firstRunAt,
            CreateAppleRawJob(
                jobId: "200650800",
                sourceJobId: "200650800-2114",
                titleRaw: "Early Career CAD Tools Optimisation Engineer",
                locationsRaw: new[] { "London, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: firstRunAt,
                postedAtCandidate: "2026-03-10T15:48:18.618Z"),
            CreateAppleRawJob(
                jobId: "200650800",
                sourceJobId: "200650800-1251",
                titleRaw: "Early Career CAD Tools Optimisation Engineer",
                locationsRaw: new[] { "Cambridge, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: firstRunAt,
                postedAtCandidate: "2026-03-10T15:48:18.618Z"),
            CreateAppleRawJob(
                jobId: "removed",
                sourceJobId: "removed-4170",
                titleRaw: "Removed Apple Engineer",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: firstRunAt));
        var secondRawRun = CreateAppleRawRun(
            "apple-run-2",
            secondRunAt,
            CreateAppleRawJob(
                jobId: "200650800",
                sourceJobId: "200650800-2114",
                titleRaw: "Early Career CAD Tools Optimisation Engineer",
                locationsRaw: new[] { "London, United Kingdom", "Cambridge, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: secondRunAt,
                postedAtCandidate: "2026-03-10T15:48:18.618Z"),
            CreateAppleRawJob(
                jobId: "new",
                sourceJobId: "new-4170",
                titleRaw: "New Apple Engineer",
                locationsRaw: new[] { "Dublin, Ireland" },
                requestedLocation: "Ireland",
                capturedAt: secondRunAt));

        var firstJobs = InvokeStatic("BuildAppleJobsFromRawRun", firstRawRun)!;
        AssertEqual(2, ((System.Collections.IList)firstJobs).Count, "Apple normalization should collapse duplicate source postings into one logical job.");

        var firstMerge = InvokeStatic("MergeJobs", CreateList("JobItem"), firstJobs, firstRunAt)!;
        var secondJobs = InvokeStatic("BuildAppleJobsFromRawRun", secondRawRun)!;
        var secondMerge = InvokeStatic("MergeJobs", GetList(firstMerge, "Jobs"), secondJobs, secondRunAt)!;
        var mergedJobs = GetList(secondMerge, "Jobs").Cast<object>().ToList();

        AssertEqual(3, mergedJobs.Count, "Expected one shared, one removed and one new normalized Apple job.");
        AssertEqual(3, mergedJobs.Select(job => GetStringProperty(job, "Id")).Distinct().Count(), "Apple normalization should keep one record per job id.");

        var shared = mergedJobs.Single(job => GetStringProperty(job, "Id") == "200650800");
        AssertEqual(firstRunAt, GetStringProperty(shared, "FirstSeenAt"), "Existing Apple job should preserve firstSeenAt.");
        AssertEqual(secondRunAt, GetStringProperty(shared, "LastSeenAt"), "Existing Apple job should update lastSeenAt on newer raw snapshot.");
        AssertTrue(GetBooleanProperty(shared, "IsActive"), "Existing Apple job should stay active.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(shared, "ContentHash")), "Existing Apple job should have contentHash.");
        AssertEqual(2, GetStringListProperty(shared, "Locations").Count, "Shared Apple job should retain merged locations.");

        var removed = mergedJobs.Single(job => GetStringProperty(job, "Id") == "removed");
        AssertEqual(firstRunAt, GetStringProperty(removed, "FirstSeenAt"), "Removed Apple job should keep original firstSeenAt.");
        AssertEqual(firstRunAt, GetStringProperty(removed, "LastSeenAt"), "Removed Apple job should keep last seen timestamp from its last active run.");
        AssertTrue(!GetBooleanProperty(removed, "IsActive"), "Missing Apple job should become inactive.");

        var added = mergedJobs.Single(job => GetStringProperty(job, "Id") == "new");
        AssertEqual(secondRunAt, GetStringProperty(added, "FirstSeenAt"), "New Apple job should initialize firstSeenAt from the newer raw snapshot.");
        AssertEqual(secondRunAt, GetStringProperty(added, "LastSeenAt"), "New Apple job should initialize lastSeenAt from the newer raw snapshot.");
        AssertTrue(GetBooleanProperty(added, "IsActive"), "New Apple job should be active.");
        return Task.CompletedTask;
    }

    private Task TestAppleHistoryOutputsAsync()
    {
        // Apple history має спиратися на ті самі meaningful-change правила:
        // title/company/locations рахуються як changed, а url/timestamps/search metadata - ні.
        var firstRunAt = "2026-04-20T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-20T12:00:00.0000000+00:00";
        var firstRawRun = CreateAppleRawRun(
            "apple-history-run-1",
            firstRunAt,
            CreateAppleRawJob(
                jobId: "change",
                sourceJobId: "change-2114",
                titleRaw: "Apple Engineer",
                locationsRaw: new[] { "London, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: firstRunAt),
            CreateAppleRawJob(
                jobId: "metadata-only",
                sourceJobId: "metadata-only-2114",
                titleRaw: "Metadata Stable Engineer",
                locationsRaw: new[] { "Dublin, Ireland" },
                requestedLocation: "Ireland",
                capturedAt: firstRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateAppleRawJob(
                jobId: "remove",
                sourceJobId: "remove-4170",
                titleRaw: "Removed Apple Engineer",
                locationsRaw: new[] { "Zurich, Switzerland" },
                requestedLocation: "Switzerland",
                capturedAt: firstRunAt,
                postedAtCandidate: "2026-03-01T00:00:00.0000000+00:00"));
        var secondRawRun = CreateAppleRawRun(
            "apple-history-run-2",
            secondRunAt,
            CreateAppleRawJob(
                jobId: "change",
                sourceJobId: "change-2114",
                titleRaw: "Apple Engineer",
                locationsRaw: new[] { "London, United Kingdom", "Cambridge, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: secondRunAt),
            CreateAppleRawJob(
                jobId: "metadata-only",
                sourceJobId: "metadata-only-2114",
                titleRaw: "Metadata Stable Engineer",
                locationsRaw: new[] { "Dublin, Ireland" },
                requestedLocation: "Ireland",
                capturedAt: secondRunAt,
                postedAtCandidate: "2026-04-02T00:00:00.0000000+00:00"),
            CreateAppleRawJob(
                jobId: "add",
                sourceJobId: "add-2114",
                titleRaw: "New Apple Engineer",
                locationsRaw: new[] { "London, United Kingdom" },
                requestedLocation: "United Kingdom",
                capturedAt: secondRunAt));

        var firstMerge = InvokeStatic(
            "MergeJobs",
            CreateList("JobItem"),
            InvokeStatic("BuildAppleJobsFromRawRun", firstRawRun),
            firstRunAt)!;
        var secondMerge = InvokeStatic(
            "MergeJobs",
            GetList(firstMerge, "Jobs"),
            InvokeStatic("BuildAppleJobsFromRawRun", secondRawRun),
            secondRunAt)!;
        var runsDataset = InvokeStatic(
            "BuildRunsDataset",
            InvokeStatic("BuildRunsDataset", CreateRecord("RunHistoryDataset", CreateList("RunSummary")), "apple-history-run-1", firstRunAt, firstMerge),
            "apple-history-run-2",
            secondRunAt,
            secondMerge)!;
        var runDetailsDataset = InvokeStatic(
            "BuildRunDetailsDataset",
            InvokeStatic("BuildRunDetailsDataset", CreateRecord("RunDetailsDataset", CreateList("RunDetail")), "apple-history-run-1", firstMerge),
            "apple-history-run-2",
            secondMerge)!;
        var dataset = InvokeStatic(
            "BuildAppleDataset",
            secondRawRun,
            GetList(secondMerge, "Jobs"))!;
        var removedDetailsDataset = InvokeStatic(
            "BuildAppleRemovedDetailsDataset",
            dataset,
            runDetailsDataset,
            CreateList("AppleRawRun", firstRawRun, secondRawRun))!;

        var latestRun = GetListItem(runsDataset, "Runs", 1);
        AssertEqual(3, GetIntProperty(latestRun, "TotalJobs"), "Apple run summary should count active jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "AddedCount"), "Apple run summary should count added jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "RemovedCount"), "Apple run summary should count removed jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "ChangedCount"), "Apple run summary should count meaningful location changes.");
        AssertEqual(1, GetIntProperty(latestRun, "UnchangedCount"), "Apple run summary should ignore metadata-only changes.");
        AssertTrue(GetList(latestRun, "PerLocation").Count > 0, "Apple run summary should include per-location entries.");

        var latestDetails = GetListItem(runDetailsDataset, "Runs", 1);
        AssertEqual(1, GetListCount(latestDetails, "Added"), "Apple run-details should include added jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Removed"), "Apple run-details should include removed jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Changed"), "Apple run-details should include meaningful changed jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Unchanged"), "Apple run-details should include metadata-only unchanged jobs.");
        AssertTrue(GetList(latestDetails, "PerLocation").Count > 0, "Apple run-details should include per-location entries.");

        var changed = GetListItem(latestDetails, "Changed", 0);
        AssertEqual("change", GetStringProperty(changed, "Id"), "Apple changed item should be the location-changed job.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(changed, "PreviousHash")), "Apple changed item should include previousHash.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(changed, "CurrentHash")), "Apple changed item should include currentHash.");
        var changedFields = GetStringListProperty(changed, "ChangedFields");
        AssertEqual(1, changedFields.Count, "Only locations should be reported as changed.");
        AssertEqual("locations", changedFields[0], "Apple changed fields should use Google meaningful-change semantics.");
        AssertEqual(1, GetListCount(changed, "FieldChanges"), "Apple changed item should include fieldChanges.");

        var removedDetails = GetList(removedDetailsDataset, "Jobs").Cast<object>().ToList();
        AssertEqual(1, removedDetails.Count, "Apple removed-details should include removed jobs.");
        var removed = removedDetails.Single();
        AssertEqual("remove", GetStringProperty(removed, "Id"), "Apple removed-details should preserve normalized id.");
        AssertEqual("Removed Apple Engineer", GetStringProperty(removed, "Title"), "Apple removed-details should preserve normalized title.");
        AssertEqual("Apple job summary", GetStringProperty(removed, "AboutTheJobRaw"), "Apple removed-details should include raw detail fields when available.");
        AssertEqual("2026-03-01T00:00:00.0000000+00:00", GetStringProperty(removed, "PostedAtCandidate"), "Apple removed-details should include raw timestamps when available.");
        AssertEqual(secondRunAt, GetStringProperty(removed, "RemovedAt"), "Apple removed-details should record removedAt from the removal run.");
        AssertEqual("apple-history-run-2", GetStringProperty(removed, "RemovedInRunId"), "Apple removed-details should record removedInRunId.");
        return Task.CompletedTask;
    }

    private Task TestMicrosoftNormalizationStateTrackingAsync()
    {
        var firstRunAt = "2026-04-20T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-20T12:00:00.0000000+00:00";

        var firstRawRun = CreateMicrosoftRawRun(
            "microsoft-state-run-1",
            firstRunAt,
            CreateMicrosoftRawJob(
                "shared",
                "Software Engineer",
                new[] { "Switzerland, Zürich, Zürich" },
                "Switzerland",
                firstRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateMicrosoftRawJob(
                "shared",
                "Software Engineer",
                new[] { "United Kingdom, London, London" },
                "United Kingdom",
                firstRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateMicrosoftRawJob(
                "remove",
                "Removed Microsoft Engineer",
                new[] { "Ireland, Dublin, Dublin" },
                "Ireland",
                firstRunAt));

        var secondRawRun = CreateMicrosoftRawRun(
            "microsoft-state-run-2",
            secondRunAt,
            CreateMicrosoftRawJob(
                "shared",
                "Software Engineer",
                new[] { "Switzerland, Zürich, Zürich" },
                "Switzerland",
                secondRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateMicrosoftRawJob(
                "shared",
                "Software Engineer",
                new[] { "United Kingdom, London, London" },
                "United Kingdom",
                secondRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateMicrosoftRawJob(
                "add",
                "New Microsoft Engineer",
                new[] { "Poland, Mazowieckie, Warsaw" },
                "Poland",
                secondRunAt));

        var firstJobs = InvokeStatic("BuildMicrosoftJobsFromRawRun", firstRawRun)!;
        AssertEqual(2, ((System.Collections.IList)firstJobs).Count, "Microsoft normalization should collapse duplicate source postings into one logical job.");

        var firstMerge = InvokeStatic("MergeJobs", CreateList("JobItem"), firstJobs, firstRunAt)!;
        var secondJobs = InvokeStatic("BuildMicrosoftJobsFromRawRun", secondRawRun)!;
        var secondMerge = InvokeStatic("MergeJobs", GetList(firstMerge, "Jobs"), secondJobs, secondRunAt)!;
        var mergedJobs = GetList(secondMerge, "Jobs").Cast<object>().ToList();

        AssertEqual(3, mergedJobs.Count, "Expected one shared, one removed and one new normalized Microsoft job.");
        AssertEqual(3, mergedJobs.Select(job => GetStringProperty(job, "Id")).Distinct().Count(), "Microsoft normalization should keep one record per job id.");

        var shared = mergedJobs.Single(job => GetStringProperty(job, "Id") == "shared");
        AssertEqual(firstRunAt, GetStringProperty(shared, "FirstSeenAt"), "Existing Microsoft job should preserve firstSeenAt.");
        AssertEqual(secondRunAt, GetStringProperty(shared, "LastSeenAt"), "Existing Microsoft job should update lastSeenAt on newer raw snapshot.");
        AssertTrue(GetBooleanProperty(shared, "IsActive"), "Existing Microsoft job should stay active.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(shared, "ContentHash")), "Existing Microsoft job should have contentHash.");
        AssertEqual(2, GetStringListProperty(shared, "Locations").Count, "Shared Microsoft job should retain merged locations.");
        AssertEqual("2026-04-01T00:00:00.0000000+00:00", GetStringProperty(shared, "PostedAtCandidate"), "Posted candidate should propagate when available.");

        var removed = mergedJobs.Single(job => GetStringProperty(job, "Id") == "remove");
        AssertEqual(firstRunAt, GetStringProperty(removed, "FirstSeenAt"), "Removed Microsoft job should keep original firstSeenAt.");
        AssertEqual(firstRunAt, GetStringProperty(removed, "LastSeenAt"), "Removed Microsoft job should keep last seen timestamp from its last active run.");
        AssertTrue(!GetBooleanProperty(removed, "IsActive"), "Missing Microsoft job should become inactive.");

        var added = mergedJobs.Single(job => GetStringProperty(job, "Id") == "add");
        AssertEqual(secondRunAt, GetStringProperty(added, "FirstSeenAt"), "New Microsoft job should initialize firstSeenAt from the newer raw snapshot.");
        AssertEqual(secondRunAt, GetStringProperty(added, "LastSeenAt"), "New Microsoft job should initialize lastSeenAt from the newer raw snapshot.");
        AssertTrue(GetBooleanProperty(added, "IsActive"), "New Microsoft job should be active.");

        return Task.CompletedTask;
    }

    private Task TestNvidiaNormalizationStateTrackingAsync()
    {
        // NVIDIA використовує той самий PCSX-підхід, але має власний raw type.
        // Тут явно доводимо, що state tracking не залежить від Microsoft fixtures.
        var firstRunAt = "2026-04-01T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-02T10:00:00.0000000+00:00";

        var firstRawRun = CreateNvidiaRawRun(
            "nvidia-state-run-1",
            firstRunAt,
            CreateNvidiaRawJob(
                "shared",
                "Senior Software Engineer",
                new[] { "Switzerland, Zurich", "Remote - Poland" },
                "Switzerland",
                firstRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateNvidiaRawJob(
                "shared",
                "Senior Software Engineer",
                new[] { "Remote - Germany" },
                "Germany",
                firstRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateNvidiaRawJob(
                "remove",
                "Removed NVIDIA Engineer",
                new[] { "Remote - UK" },
                "United Kingdom",
                firstRunAt));

        var secondRawRun = CreateNvidiaRawRun(
            "nvidia-state-run-2",
            secondRunAt,
            CreateNvidiaRawJob(
                "shared",
                "Senior Software Engineer",
                new[] { "Switzerland, Zurich" },
                "Switzerland",
                secondRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateNvidiaRawJob(
                "shared",
                "Senior Software Engineer",
                new[] { "Remote - Poland" },
                "Poland",
                secondRunAt,
                postedAtCandidate: "2026-04-01T00:00:00.0000000+00:00"),
            CreateNvidiaRawJob(
                "add",
                "New NVIDIA Engineer",
                new[] { "Remote - Ireland" },
                "Ireland",
                secondRunAt));

        var firstJobs = InvokeStatic("BuildNvidiaJobsFromRawRun", firstRawRun)!;
        AssertEqual(2, ((System.Collections.IList)firstJobs).Count, "NVIDIA normalization should collapse duplicate source postings into one logical job.");

        var firstMerge = InvokeStatic("MergeJobs", CreateList("JobItem"), firstJobs, firstRunAt)!;
        var secondJobs = InvokeStatic("BuildNvidiaJobsFromRawRun", secondRawRun)!;
        var secondMerge = InvokeStatic("MergeJobs", GetList(firstMerge, "Jobs"), secondJobs, secondRunAt)!;
        var mergedJobs = GetList(secondMerge, "Jobs").Cast<object>().ToList();

        AssertEqual(3, mergedJobs.Count, "Expected one shared, one removed and one new normalized NVIDIA job.");
        AssertEqual(3, mergedJobs.Select(job => GetStringProperty(job, "Id")).Distinct().Count(), "NVIDIA normalization should keep one record per job id.");

        var shared = mergedJobs.Single(job => GetStringProperty(job, "Id") == "shared");
        AssertEqual(firstRunAt, GetStringProperty(shared, "FirstSeenAt"), "Existing NVIDIA job should preserve firstSeenAt.");
        AssertEqual(secondRunAt, GetStringProperty(shared, "LastSeenAt"), "Existing NVIDIA job should update lastSeenAt on newer raw snapshot.");
        AssertTrue(GetBooleanProperty(shared, "IsActive"), "Existing NVIDIA job should stay active.");
        AssertTrue(!string.IsNullOrWhiteSpace(GetStringProperty(shared, "ContentHash")), "Existing NVIDIA job should have contentHash.");
        AssertEqual(2, GetStringListProperty(shared, "Locations").Count, "Shared NVIDIA job should retain merged locations.");
        AssertEqual("2026-04-01T00:00:00.0000000+00:00", GetStringProperty(shared, "PostedAtCandidate"), "Posted candidate should propagate when available.");

        var removed = mergedJobs.Single(job => GetStringProperty(job, "Id") == "remove");
        AssertEqual(firstRunAt, GetStringProperty(removed, "FirstSeenAt"), "Removed NVIDIA job should keep original firstSeenAt.");
        AssertEqual(firstRunAt, GetStringProperty(removed, "LastSeenAt"), "Removed NVIDIA job should keep last seen timestamp from its last active run.");
        AssertTrue(!GetBooleanProperty(removed, "IsActive"), "Missing NVIDIA job should become inactive.");

        var added = mergedJobs.Single(job => GetStringProperty(job, "Id") == "add");
        AssertEqual(secondRunAt, GetStringProperty(added, "FirstSeenAt"), "New NVIDIA job should initialize firstSeenAt from the newer raw snapshot.");
        AssertEqual(secondRunAt, GetStringProperty(added, "LastSeenAt"), "New NVIDIA job should initialize lastSeenAt from the newer raw snapshot.");
        AssertTrue(GetBooleanProperty(added, "IsActive"), "New NVIDIA job should be active.");

        return Task.CompletedTask;
    }

    private Task TestNvidiaHistoryOutputsAsync()
    {
        // NVIDIA Task 3 proof: history/diff використовує ті самі meaningful поля:
        // title/company/locations. URL і timestamps не повинні створювати changed.
        var firstRunAt = "2026-04-03T10:00:00.0000000+00:00";
        var secondRunAt = "2026-04-04T10:00:00.0000000+00:00";
        var firstRawRun = CreateNvidiaRawRun(
            "nvidia-history-run-1",
            firstRunAt,
            CreateNvidiaRawJob("change", "NVIDIA Engineer", new[] { "Remote - Switzerland" }, "Switzerland", firstRunAt),
            CreateNvidiaRawJob("metadata-only", "Stable NVIDIA Engineer", new[] { "Remote - UK" }, "United Kingdom", firstRunAt),
            CreateNvidiaRawJob("remove", "Removed NVIDIA Engineer", new[] { "Remote - Germany" }, "Germany", firstRunAt));
        var secondRawRun = CreateNvidiaRawRun(
            "nvidia-history-run-2",
            secondRunAt,
            CreateNvidiaRawJob("change", "NVIDIA Engineer", new[] { "Remote - Switzerland", "Remote - Poland" }, "Switzerland", secondRunAt),
            CreateNvidiaRawJob("metadata-only", "Stable NVIDIA Engineer", new[] { "Remote - UK" }, "United Kingdom", secondRunAt),
            CreateNvidiaRawJob("add", "New NVIDIA Engineer", new[] { "Remote - Ireland" }, "Ireland", secondRunAt));

        var firstMerge = InvokeStatic(
            "MergeJobs",
            CreateList("JobItem"),
            InvokeStatic("BuildNvidiaJobsFromRawRun", firstRawRun),
            firstRunAt)!;
        var secondMerge = InvokeStatic(
            "MergeJobs",
            GetList(firstMerge, "Jobs"),
            InvokeStatic("BuildNvidiaJobsFromRawRun", secondRawRun),
            secondRunAt)!;
        var runsDataset = InvokeStatic(
            "BuildRunsDataset",
            InvokeStatic("BuildRunsDataset", CreateRecord("RunHistoryDataset", CreateList("RunSummary")), "nvidia-history-run-1", firstRunAt, firstMerge),
            "nvidia-history-run-2",
            secondRunAt,
            secondMerge)!;
        var runDetailsDataset = InvokeStatic(
            "BuildRunDetailsDataset",
            InvokeStatic("BuildRunDetailsDataset", CreateRecord("RunDetailsDataset", CreateList("RunDetail")), "nvidia-history-run-1", firstMerge),
            "nvidia-history-run-2",
            secondMerge)!;
        var dataset = InvokeStatic(
            "BuildNvidiaDataset",
            secondRawRun,
            GetList(secondMerge, "Jobs"))!;
        var removedDetails = InvokeStatic(
            "BuildNvidiaRemovedDetailsDataset",
            dataset,
            runDetailsDataset,
            CreateList("NvidiaRawRun", firstRawRun, secondRawRun))!;

        var latestRun = GetListItem(runsDataset, "Runs", 1);
        AssertEqual(3, GetIntProperty(latestRun, "TotalJobs"), "NVIDIA run summary should count active jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "AddedCount"), "NVIDIA run summary should count added jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "RemovedCount"), "NVIDIA run summary should count removed jobs.");
        AssertEqual(1, GetIntProperty(latestRun, "ChangedCount"), "NVIDIA run summary should count meaningful location changes.");
        AssertEqual(1, GetIntProperty(latestRun, "UnchangedCount"), "NVIDIA run summary should ignore metadata-only changes.");

        var latestDetails = GetListItem(runDetailsDataset, "Runs", 1);
        AssertEqual(1, GetListCount(latestDetails, "Added"), "NVIDIA run-details should include added jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Removed"), "NVIDIA run-details should include removed jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Changed"), "NVIDIA run-details should include changed jobs.");
        AssertEqual(1, GetListCount(latestDetails, "Unchanged"), "NVIDIA run-details should include unchanged jobs.");

        var changed = GetListItem(latestDetails, "Changed", 0);
        AssertTrue(GetStringListProperty(changed, "ChangedFields").SequenceEqual(new[] { "locations" }), "NVIDIA changed fields should use Google meaningful-change semantics.");
        AssertEqual(1, GetListCount(changed, "FieldChanges"), "NVIDIA changed item should include fieldChanges.");

        var removedJobs = GetList(removedDetails, "Jobs");
        AssertEqual(1, removedJobs.Count, "NVIDIA removed-details should include removed jobs.");
        var removed = removedJobs[0]!;
        AssertEqual("remove", GetStringProperty(removed, "Id"), "NVIDIA removed-details should preserve normalized id.");
        AssertEqual("NVIDIA overview", GetStringProperty(removed, "AboutTheJobRaw"), "NVIDIA removed-details should include raw detail fields when available.");
        AssertEqual(secondRunAt, GetStringProperty(removed, "RemovedAt"), "NVIDIA removed-details should include removal timestamp.");

        return Task.CompletedTask;
    }

    private object CreateJobItem(
        string id,
        string title,
        string? company,
        IEnumerable<string> locations,
        string url,
        string requestedLocation,
        string searchUrl,
        string? postedAtCandidate,
        string? updatedAtCandidate,
        string? firstSeenAt = null,
        string? lastSeenAt = null,
        bool isActive = true,
        string? contentHash = null)
    {
        return CreateRecord(
            "JobItem",
            id,
            title,
            company,
            locations.ToList(),
            url,
            requestedLocation,
            searchUrl,
            postedAtCandidate,
            updatedAtCandidate,
            firstSeenAt,
            lastSeenAt,
            isActive,
            contentHash);
    }

    private object CreateMetaRawRun(string runId, string generatedAt, params object[] jobs)
    {
        var source = CreateRecord(
            "MetaRawSource",
            "Switzerland",
            "switzerland",
            new List<string> { "Zurich, Switzerland" },
            "https://www.metacareers.com/jobsearch?offices[0]=Zurich%2C%20Switzerland",
            CreateList("MetaRawJobItem", jobs));

        return CreateRecord(
            "MetaRawRun",
            runId,
            generatedAt,
            "meta-careers",
            CreateList("MetaRawSource", source));
    }

    private object CreateMetaRawJob(
        string jobId,
        string titleRaw,
        IEnumerable<string> locationsRaw,
        string requestedLocation,
        string capturedAt,
        string? aboutTheJobRaw = null,
        string? postedAtCandidate = null)
    {
        return CreateRecord(
            "MetaRawJobItem",
            jobId,
            titleRaw,
            "Meta",
            locationsRaw.ToList(),
            $"https://www.metacareers.com/profile/job_details/{jobId}",
            $"https://www.metacareers.com/jobsearch?offices[0]={Uri.EscapeDataString(requestedLocation)}",
            requestedLocation,
            null,
            aboutTheJobRaw,
            null,
            null,
            null,
            postedAtCandidate,
            null,
            capturedAt);
    }

    private object CreateAppleRawRun(string runId, string generatedAt, params object[] jobs)
    {
        var source = CreateRecord(
            "AppleRawSource",
            "United Kingdom",
            "united-kingdom",
            "https://jobs.apple.com/en-us/search?location=united-kingdom-GBR&key=software%2520engineer",
            CreateList("AppleRawJobItem", jobs));

        return CreateRecord(
            "AppleRawRun",
            runId,
            generatedAt,
            "apple-jobs",
            "software engineer",
            CreateList("AppleRawSource", source));
    }

    private object CreateAppleRawJob(
        string jobId,
        string sourceJobId,
        string titleRaw,
        IEnumerable<string> locationsRaw,
        string requestedLocation,
        string capturedAt,
        string? postedAtCandidate = null)
    {
        return CreateRecord(
            "AppleRawJobItem",
            jobId,
            sourceJobId,
            titleRaw,
            "Apple",
            locationsRaw.ToList(),
            $"https://jobs.apple.com/en-us/details/{sourceJobId}/test-role",
            $"https://jobs.apple.com/en-us/search?location={Uri.EscapeDataString(requestedLocation)}&key=software%2520engineer",
            requestedLocation,
            null,
            "Apple job summary",
            "Apple job description",
            null,
            null,
            postedAtCandidate,
            null,
            capturedAt);
    }

    private object CreateMicrosoftRawRun(string runId, string generatedAt, params object[] jobs)
    {
        var source = CreateRecord(
            "MicrosoftRawSource",
            "Switzerland",
            "switzerland",
            "Switzerland, Multiple Locations, Multiple Locations",
            "https://apply.careers.microsoft.com/api/pcsx/search?domain=microsoft.com&query=Software%20Engineer&location=Switzerland%2C%20Multiple%20Locations%2C%20Multiple%20Locations&start=0&sort_by=relevance&filter_include_remote=1",
            CreateList("MicrosoftRawJobItem", jobs));

        return CreateRecord(
            "MicrosoftRawRun",
            runId,
            generatedAt,
            "microsoft-careers",
            "Software Engineer",
            CreateList("MicrosoftRawSource", source));
    }

    private object CreateMicrosoftRawJob(
        string jobId,
        string titleRaw,
        IEnumerable<string> locationsRaw,
        string requestedLocation,
        string capturedAt,
        string? postedAtCandidate = null)
    {
        return CreateRecord(
            "MicrosoftRawJobItem",
            jobId,
            titleRaw,
            "Microsoft",
            locationsRaw.ToList(),
            $"https://apply.careers.microsoft.com/careers/job/{jobId}",
            $"https://apply.careers.microsoft.com/api/pcsx/search?domain=microsoft.com&query=Software%20Engineer&location={Uri.EscapeDataString(requestedLocation)}&start=0",
            requestedLocation,
            $"https://apply.careers.microsoft.com/careers/job/{jobId}",
            "Microsoft overview",
            "Microsoft responsibilities",
            "Microsoft required skills",
            null,
            postedAtCandidate,
            null,
            capturedAt);
    }

    private object CreateNvidiaRawRun(string runId, string generatedAt, params object[] jobs)
    {
        var source = CreateRecord(
            "NvidiaRawSource",
            "Switzerland",
            "switzerland",
            "Zurich",
            "https://jobs.nvidia.com/api/pcsx/search?domain=nvidia.com&query=software%20engineer&location=Zurich&start=0&sort_by=relevance&filter_distance=160&filter_include_remote=1",
            CreateList("NvidiaRawJobItem", jobs));

        return CreateRecord(
            "NvidiaRawRun",
            runId,
            generatedAt,
            "nvidia-careers",
            "software engineer",
            CreateList("NvidiaRawSource", source));
    }

    private object CreateNvidiaRawJob(
        string jobId,
        string titleRaw,
        IEnumerable<string> locationsRaw,
        string requestedLocation,
        string capturedAt,
        string? postedAtCandidate = null)
    {
        return CreateRecord(
            "NvidiaRawJobItem",
            jobId,
            titleRaw,
            "NVIDIA",
            locationsRaw.ToList(),
            $"https://jobs.nvidia.com/careers/job/{jobId}",
            $"https://jobs.nvidia.com/api/pcsx/search?domain=nvidia.com&query=software%20engineer&location={Uri.EscapeDataString(requestedLocation)}&start=0",
            requestedLocation,
            $"https://jobs.nvidia.com/careers/job/{jobId}",
            "NVIDIA overview",
            "NVIDIA responsibilities",
            "NVIDIA required skills",
            "NVIDIA preferred skills",
            postedAtCandidate,
            null,
            capturedAt);
    }

    private object CreateRecord(string typeName, params object?[] args)
    {
        var type = _targetAssembly.GetTypes().First(type => type.Name == typeName);
        var constructors = type.GetConstructors(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
            .Where(candidate => candidate.GetParameters().Length == args.Length)
            .Where(candidate => !(args.Length == 1 && candidate.GetParameters()[0].ParameterType == type))
            .ToList();
        if (constructors.Count != 1)
        {
            throw new InvalidOperationException($"Expected one constructor for {typeName} with {args.Length} args, found {constructors.Count}.");
        }

        var constructor = constructors[0];
        return constructor.Invoke(args);
    }

    private object CreateList(string elementTypeName, params object[] items)
    {
        var elementType = _targetAssembly.GetTypes().First(type => type.Name == elementTypeName);
        var listType = typeof(List<>).MakeGenericType(elementType);
        var list = (System.Collections.IList)Activator.CreateInstance(listType)!;
        foreach (var item in items)
        {
            list.Add(item);
        }

        return list;
    }

    private T InvokeStatic<T>(string name, params object?[] args)
    {
        return (T)(InvokeStatic(name, args) ?? throw new InvalidOperationException($"Method '{name}' returned null."));
    }

    private T? InvokeNullableStatic<T>(string name, params object?[] args)
    {
        return (T?)InvokeStatic(name, args);
    }

    private object? InvokeStatic(string name, params object?[] args)
    {
        var method = _programType
            .GetMethods(BindingFlags.Static | BindingFlags.NonPublic)
            .SingleOrDefault(candidate =>
                candidate.Name.Contains(name, StringComparison.Ordinal) &&
                candidate.GetParameters().Length == args.Length)
            ?? throw new InvalidOperationException($"Could not find method '{name}'.");

        return method.Invoke(null, args);
    }

    private static int GetListCount(object parent, string propertyName)
    {
        var list = GetList(parent, propertyName);
        return list.Count;
    }

    private static System.Collections.IList GetList(object parent, string propertyName)
    {
        return (System.Collections.IList)(parent.GetType().GetProperty(propertyName)!.GetValue(parent)
            ?? throw new InvalidOperationException($"Property '{propertyName}' is null."));
    }

    private static object GetListItem(object parent, string propertyName, int index)
    {
        return GetList(parent, propertyName)[index]!;
    }

    private static List<string> GetStringListProperty(object instance, string propertyName)
    {
        return ((System.Collections.IEnumerable)(instance.GetType().GetProperty(propertyName)!.GetValue(instance)
                ?? throw new InvalidOperationException($"Property '{propertyName}' is null.")))
            .Cast<object>()
            .Select(item => item.ToString() ?? string.Empty)
            .ToList();
    }

    private static string? GetStringProperty(object instance, string propertyName)
    {
        return instance.GetType().GetProperty(propertyName)!.GetValue(instance)?.ToString();
    }

    private static bool GetBooleanProperty(object instance, string propertyName)
    {
        return (bool)(instance.GetType().GetProperty(propertyName)!.GetValue(instance)
            ?? throw new InvalidOperationException($"Property '{propertyName}' is null."));
    }

    private static int GetIntProperty(object instance, string propertyName)
    {
        return (int)(instance.GetType().GetProperty(propertyName)!.GetValue(instance)
            ?? throw new InvalidOperationException($"Property '{propertyName}' is null."));
    }

    private static void AssertEqual<T>(T expected, T actual, string message)
    {
        if (!EqualityComparer<T>.Default.Equals(expected, actual))
        {
            throw new InvalidOperationException($"{message} Expected: {expected}. Actual: {actual}.");
        }
    }

    private static void AssertTrue(bool condition, string message)
    {
        if (!condition)
        {
            throw new InvalidOperationException(message);
        }
    }
}
