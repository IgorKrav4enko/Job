# Meta Careers raw collection fixtures

These fixtures keep Meta raw collection development cache-first.

Use the default command for cached development/debugging:

```bash
dotnet run --project scripts/GoogleCareersSync/GoogleCareersSync.csproj -- collect-meta
```

Use live fetching only for validation:

```bash
META_CAREERS_LIVE=true dotnet run --project scripts/GoogleCareersSync/GoogleCareersSync.csproj -- collect-meta
```

Policy:

- Search payload fixtures provide required raw fields for every discovered job.
- Detail HTML fixtures provide best-effort enrichment for a small representative subset.
- Missing optional detail fields must not fail raw collection.
