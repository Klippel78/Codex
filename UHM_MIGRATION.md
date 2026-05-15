# UHM 3.2 Migration

## Goal

Migrate the LCC calculator's calculation and field logic over time toward:

`uhm_lcc_kalkyl_inomhusbelysning_ver 3.2.xlsx`

The migration should preserve the current Aura Light user interface, import flow, multilingual support, report views, saved file compatibility and publication model.

## Status

Current migration status: **started, not 100% complete**.

## Completed

- Energy present value factor migrated to the UHM 3.2 formula from sheet `2. LCC A1`, cell `I201`.
- Maintenance cost handling migrated to UHM 3.2 row-cost semantics from sheet `2. LCC A1`, cells `I205:I218`.
- Calculation view text now states that the energy present value follows UHM LCC tool Inomhusbelysning v3.2.
- Release harness now includes a regression test for the UHM energy present value factor:
  - input: 20 years, 5% calculation rate, 2% annual energy price change
  - expected factor: `14.6654018118`
- Release harness now includes a regression test that annual maintenance is treated as row cost, not multiplied by number of rooms.

## Remaining Migration Areas

- Full field mapping from UHM `2. LCC A1-A4` to the Aura Light two-installation model.
- Review of investment, energy, LENI and climate formulas against UHM 3.2.
- Decision on how to represent UHM's four alternatives in the current existing/new retrofit interface.
- Review of UHM input validation rules and dropdown source ranges.
- Review of UHM result sheet semantics against current Resultat, Sammanfattning, Win/win and Berakning views.
- Test cases that compare representative LCC rows directly against workbook-derived expected values.

## Verification

- Browser formula test: passed.
- Release harness: `PASS 27/27`.
