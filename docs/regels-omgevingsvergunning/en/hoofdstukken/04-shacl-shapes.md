# SHACL shapes

This chapter describes the files in `shacl/`. Each file is a SHACL shapes graph in Turtle. All shapes use a SPARQL-based constraint (`sh:sparql`) with severity `sh:Violation`.

Each violation message contains `GlobalId=[...]` or `GlobalId: ...`. The 3D view of the portal reads the GlobalId from that text to show the element (see [3D view](#weergave)). Do not change that text without updating the regular expression in the view.

<span id="validate-topological-relations"></span>

## validate-topological-relations.ttl

| | |
|---|---|
| Portal id | `ValidateTopologicalRelations` |
| File | [`shacl/validate-topological-relations.ttl`](../shacl/validate-topological-relations.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Checks that every geometry lies fully inside the *wonen* zoning areas (validation step of rule 1).

**How it works.**

1. Targets every subject with `geom:globalId`.
2. Reports a violation when `geom:topologicalRelation` is not `"CONTAINED BY"`.

<span id="validate-height"></span>

## validate-height.ttl

| | |
|---|---|
| Portal id | `ValidateHeight` |
| File | [`shacl/validate-height.ttl`](../shacl/validate-height.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-height.ttl` |
| Used in rule | #2 |

**Purpose.** Simplified height check: no element may rise more than 1 unit above the highest wall. Not yet the test against the maximum building height from the plan (see draft BM13-R02).

**How it works.**

1. Targets every subject with `geom:globalId` and reads `geom:bboxMaxZ`.
2. A subquery computes the highest `geom:bboxMaxZ` of all `ifc:IfcWall`.
3. Violation when `?bboxMaxZ - ?globalMaxZ > 1`.

<span id="validate-bboxes-ifcwall"></span>

## validate-bboxes-ifcwall.ttl

| | |
|---|---|
| Portal id | `ValidateBBoxes-IfcWall` |
| File | [`shacl/validate-bboxes-ifcwall.ttl`](../shacl/validate-bboxes-ifcwall.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes-ifcwall.ttl` |
| Used in rule | #1 |

**Purpose.** Plausibility check: every wall has a realistic size.

**How it works.**

1. Targets every `ifc:IfcWall`.
2. Computes deltaX/Y/Z from the bounding box.
3. Violation when any delta is below 1 or above 100.

<span id="validate-bboxes"></span>

## validate-bboxes.ttl

| | |
|---|---|
| Portal id | `ValidateBBoxes` |
| File | [`shacl/validate-bboxes.ttl`](../shacl/validate-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes.ttl` |
| Used in rule | — |

**Purpose.** Same size check as above, for every geometry.

**How it works.**

1. Targets every subject with `geom:globalId`.
2. Otherwise identical to `validate-bboxes-ifcwall.ttl`.

<span id="validate-model-bboxes"></span>

## validate-model-bboxes.ttl

| | |
|---|---|
| Portal id | `ValidateModelBBoxes` |
| File | [`shacl/validate-model-bboxes.ttl`](../shacl/validate-model-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-model-bboxes.ttl` |
| Used in rule | #1 |

**Purpose.** Plausibility check on the whole model; catches wrong units or wrong georeferencing.

**How it works.**

1. Targets the graph IRI `<https://vng.nl/geometries/>` (`sh:targetNode`).
2. Computes the overall extent (X and Y relative to eastings/northings).
3. Violation when the extent on any axis is below 1 or above 100.
