# Rules BM13-R01 to R17

For each BM13 rule the work follows the four parts of the tracker (tab *Machine-readable rule, Layer 4*):

| Part | File in `regels/BM13-Rxx/` | Content |
|---|---|---|
| 4a | `4a-parameters.ttl` | rule parameters in RDF: norm values, tolerances, exemptions |
| 4b | `4b-afleiden.ttl` | SPARQL update that derives the values needed |
| 4c | `4c-valideren.ttl` | SHACL shape that performs the test |
| 4d | `4d-*.ttl` | expected validation report or result object |

The files in `regels/` are **drafts** and still use the working namespace `https://example.org/bm13/`. Once a draft runs in the VNG Portal, the executable version moves to `sparql/` or `shacl/` and the workflow references that URI.

## Status

| Rule | Name (Dutch) | Portal: SPARQL / SHACL | Draft (tracker) |
|---|---|---|---|
| BM13-R01 | Gebruiksfunctie komt overeen met bestemming | 5 / 3 | [draft](../regels/BM13-R01/) |
| BM13-R02 | Maximale bouwhoogte | 5 / 2 | [draft](../regels/BM13-R02/) |
| BM13-R03 | Maximaal bebouwingspercentage | not yet | to do |
| BM13-R04 | Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen | not yet | to do |
| BM13-R05 | Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor | not yet | to do |
| BM13-R06 | Maximum aantal bouwlagen | not yet | to do |
| BM13-R07 | Brandcompartimenten | not yet | to do |
| BM13-R08 | Brandwerendheid | not yet | to do |
| BM13-R09 | Vrije breedte | not yet | to do |
| BM13-R10 | Hoogteverschil | not yet | to do |
| BM13-R11 | Rc-waarde | not yet | to do |
| BM13-R12 | U-waarde | not yet | to do |
| BM13-R13 | MPG | not yet | to do |
| BM13-R14 | Vluchtwegen | not yet | to do |
| BM13-R15 | Loopafstand | not yet | to do |
| BM13-R16 | Vluchtbreedte | not yet | to do |
| BM13-R17 | Daglicht | not yet | to do |

<span id="bm13-r01"></span>

## BM13-R01 Use function matches zoning designation

**Question.** Does the building volume with a residential use lie fully inside a zoning area where residential use is allowed?

**Parameters (4a).** Checked use `woonfunctie`; allowed designation `Wonen` (can be extended with `Gemengd` etc.); element profile `BUILDING_VOLUME`; below-ground parts excluded; boundary tolerance 0.01 m; partial overlap = non-compliant; search radius 50 m.

**Derive (4b).** Merges all allowed zoning areas into one and determines, per relevant element, the topological relation between its footprint and that area, with the boundary tolerance. Result: `bm13:designationRelation` in graph `<urn:bm13:derived>`.

**Validate (4c).** Violation when the relation is not `WITHIN`, `COVERED_BY` or `EQUALS`. Corrected version of the example in the PDF (§2.13).

**Expected report (4d).** Example: a wall that sticks out of the area gives `OVERLAPS` and `sh:conforms false`.

**In the portal.** `insert-topological-relations.ttl` + `validate-topological-relations.ttl` do the same, with the relation value `"CONTAINED BY"` and no parameter file.

<span id="bm13-r02"></span>

## BM13-R02 Maximum building height

**Question.** Is the building height, measured from the reference level (*peil*), no higher than the maximum permitted height in each height area?

**Parameters (4a).** Norm value comes from the area; unit m; tolerance 0.05 m; reference level per zone from average road level or design level; source municipal height data, fallback AHN; exemptions `IfcChimney` and `IfcTransportElement` up to 1.5 m extra; search radius 50 m.

**Derive (4b).** Per application and height area: measured height = highest point − reference level. Writes a `bm13:HeightCheck` with measured value, permitted value, tolerance and the highest element.

**Validate (4c).** Completeness (measured and permitted height must be present) and compliance (`measured > permitted + tolerance` is a violation).

**Result object (4d).** SPARQL `CONSTRUCT` that creates a `bm13:RuleCheckResult` per check with status `Compliant` or `NonCompliant`.

**In the portal.** `validate-height.ttl` is still a simplified check against the highest wall. The draft replaces it once reference level and height areas are in the dataset.
