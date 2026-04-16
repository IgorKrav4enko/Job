# Careers Parser Lab

Use this folder for offline parser experiments before connecting a new company to the production pipeline.

Recommended flow:

1. Save one HTML page from a careers search result into `html/<source>/`.
2. Run the parser against that local file.
3. Write the parsed preview into `parsed/<source>/`.
4. Compare the preview with the page manually.
5. Only after the parser is stable, connect the source to `collect` / `analyze-latest`.

Example:

```bash
dotnet run --project scripts/GoogleCareersSync/GoogleCareersSync.csproj -- \
  parse-html \
  data-debug/html/google-careers/ireland-page-1.html \
  Ireland \
  ireland \
  Ireland \
  data-debug/parsed/google-careers/ireland-page-1.preview.json
```

Notes:

- `parse-html` does not call the internet.
- `parse-html` does not write to `data/`.
- `parse-html` does not create a production raw run.
- Large downloaded HTML files and generated previews are ignored by git by default.
