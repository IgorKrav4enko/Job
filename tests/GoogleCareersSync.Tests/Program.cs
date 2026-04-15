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
            ("ParseJobsFromHtml extracts visible card fields and payload-derived raw data", TestParseJobsFromHtmlAsync)
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
        // а зміна важливого поля (наприклад title) повинна дати інший hash.
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
            url: "https://example.test/jobs/1",
            requestedLocation: "Warsaw, Poland",
            searchUrl: "https://example.test/search",
            postedAtCandidate: "2026-04-10T10:00:00.0000000+00:00",
            updatedAtCandidate: "2026-04-11T10:00:00.0000000+00:00");

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
        AssertTrue(changedFields.Contains("updatedAtCandidate"), "Changed fields should include updatedAtCandidate.");

        var mergedJobs = GetList(mergeResult, "Jobs");
        var removedJob = mergedJobs.Cast<object>().Single(item => GetStringProperty(item, "Id") == "remove");
        // Removed job не повинен зникати безслідно з snapshot:
        // він має лишитися в історії, але бути позначеним як inactive.
        AssertTrue(!GetBooleanProperty(removedJob, "IsActive"), "Removed jobs should be marked inactive in the merged snapshot.");
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

    private object CreateRecord(string typeName, params object?[] args)
    {
        var type = _targetAssembly.GetTypes().First(type => type.Name == typeName);
        var constructor = type.GetConstructors(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
            .Single(candidate => candidate.GetParameters().Length == args.Length);
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
