# Codex migration notes for the LCC project

## Recommended approach
Place `AGENTS.md` in the project root:

`/Users/martin/Library/CloudStorage/OneDrive-AuraLightInternationalAB/📌 AI - Dokument/AI/LCC/AGENTS.md`

This is the cleanest Codex-native setup.

## Optional compatibility approach
If you want Codex to also recognize legacy instruction filenames in projects, add this to:

`~/.codex/config.toml`

```toml
project_doc_fallback_filenames = ["CLAUDE.md"]
project_doc_max_bytes = 65536
```

Then restart Codex.

## Useful Codex commands
From the project directory:

```bash
cd '/Users/martin/Library/CloudStorage/OneDrive-AuraLightInternationalAB/📌 AI - Dokument/AI/LCC'

codex
```

Useful first prompts inside Codex:

```text
Summarize the current instructions and active project guidance.

Tell me about this LCC project, its structure, and what files appear most important.

Compare lcc.html with the Excel master workbook and identify functional gaps.

Validate that the calculator fields and labels match the workbook semantics.
```

## Important warning
The uploaded `CLAUDE.md` you provided appears to describe a different Go project (`BlogWatcher`) and should not simply be copied into this LCC repository as-is.
