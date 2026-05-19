# AGENTS.md

## Project overview
This repository appears to be the Aura Light LCC calculator project, not the unrelated Go/BlogWatcher project described in the uploaded `CLAUDE.md`.

The current implementation is centered around a static web application in `lcc.html` with a Swedish-first UI for LCC (life cycle cost) calculations for lighting proposals. The working model and terminology should stay aligned with the Excel master workbook `LCC-dokument 2026 Master.xlsx`.

## Current implementation assumptions
- Primary app file: `lcc.html`
- Tech stack: plain HTML + CSS + JavaScript
- UI libraries loaded from CDN: Tailwind CSS and Chart.js
- Current UX includes tabs for input, results, and summary
- Current UX includes market presets for SE / NO / DE / EU
- Current UX includes multilingual labels/translations embedded in the app

## Product/domain rules
- LCC means Life Cycle Costs for lighting installations.
- Treat the Excel master workbook as the reference model for calculation fields, labels, and business semantics.
- Preserve these core input concepts unless explicitly asked to change them:
  - project
  - date
  - contact / officer
  - calculation period
  - discount rate
  - electricity price
  - annual energy price escalation
  - CO₂ factor
  - operating hours
  - building type
  - room type
  - luminaire designation
  - luminaire count
  - luminaire price
  - installation/material cost
  - power per luminaire including driver losses
  - control type
  - control reduction factors
  - annual maintenance cost
- Be careful with terminology. The tool is customer-facing and commercially sensitive.
- Keep Aura Light branding professional, restrained, and credible.

## Source-of-truth hierarchy
1. Actual code in this repository
2. `lcc.html` behavior and UI structure
3. `LCC-dokument 2026 Master.xlsx` for field semantics and calculation intent
4. Older exported LCC PDFs only as examples of output, not as implementation authority

## How to work in this repo
- Start by understanding the existing flow before changing structure.
- Prefer minimal, high-confidence edits over broad rewrites.
- Do not re-platform the app unless explicitly asked.
- If the project is still single-file, prefer keeping changes compatible with a single-file deployment model.
- Preserve backwards compatibility for existing saved data formats where practical.
- Avoid changing visible text labels, currencies, units, or formulas silently.
- If a requested change affects calculations, explicitly state:
  - what changed
  - why it changed
  - which fields or formulas are affected
  - how it was validated

## Validation expectations
For any meaningful change, validate at least the following:
- the page loads without console errors
- tabs still work
- calculation runs end-to-end
- summary view still renders
- charts still render
- print flow still works reasonably
- language or region preset behavior still works
- representative values match the expected semantics from the Excel master

## Run / preview
Because the project appears to be a static HTML app, prefer lightweight local preview methods such as:
- opening `lcc.html` directly in a browser, or
- running a simple local server, for example `python3 -m http.server`

If the repository later contains a dedicated dev server or build pipeline, use that instead.

## Public deployment rule
- `http://asrv92/` opens `index.html`, so every saved/latest LCC version must also be mirrored to the served `index.html`.
- When saving a versioned file such as `lcc1.x.html`, keep the same approved contents in `lcc.html`, the versioned file, and all publishable `index.html` copies.
- At minimum, sync `public_upload/index.html` and `public_upload_clean/index.html` from the newest approved `lcc.html` before saying the version is saved or published.
- Verify the sync with `cmp` or an equivalent byte-level comparison.
- For every update or adjustment, also use the `vercel-sync` skill at `/Users/martin/.codex/skills/vercel-sync/SKILL.md` before calling the task done: verify locally, inspect changes, commit only relevant files, push, deploy/sync to Vercel production, and confirm the live site. If Git/Vercel auth, remotes, or project linking block the workflow, report the exact blocker instead of silently skipping it.

## Code style
- Keep JavaScript readable and explicit.
- Prefer small helper functions over deeply nested inline logic.
- Reuse existing naming conventions where possible.
- Do not introduce frameworks, bundlers, or package managers without a clear reason.
- Keep external dependencies minimal.

## UI and UX guardrails
- Preserve the current Aura Light visual identity unless asked to redesign.
- Keep forms fast to use for sales / proposal workflows.
- Prefer clarity over visual novelty.
- Do not make the calculator harder to print or export.
- Maintain Swedish-first accuracy, while preserving multilingual support.

## When changing calculations
- Mirror the Excel logic as closely as practical.
- Do not approximate financial formulas when the workbook implies a specific method.
- Be especially careful with:
  - present value logic
  - escalation assumptions
  - annualized energy calculations
  - CO₂ calculations
  - reduction/control factors
  - totals vs. per-room vs. per-installation rollups

## Done means
A task is done only when:
- the requested change is implemented
- existing LCC flow still works
- no obvious UI regressions remain
- any changed formulas or labels are explained clearly
- verification steps are documented in the final response

## Migration note
If an old `CLAUDE.md` remains in the repository, treat it as historical only unless it is updated to match this project. The uploaded `CLAUDE.md` currently describes another codebase and should not be used as the operative project guide for this repo.
