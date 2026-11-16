# 3D view

After a SHACL validation the VNG Portal shows the violations in a 3D viewer. The queries that fetch the geometry to show are in `sparql/weergave/`. The link between shape and view stays in the portal metadata and is also recorded in [`data/catalogus.csv`](../data/catalogus.csv).

<span id="retrieve-topological-relation-violations"></span>

## retrieve-topological-relation-violations.ttl

| | |
|---|---|
| Portal id | `RetriveTopologicalRelationVialolations` |
| File | [`sparql/weergave/retrieve-topological-relation-violations.ttl`](../sparql/weergave/retrieve-topological-relation-violations.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-topological-relation-violations.ttl` |
| Used in rule | — |

**Purpose.** 3D view: geometry of the walls whose relation is not `"CONTAINED BY"`.

<span id="retrieve-living-areas"></span>

## retrieve-living-areas.ttl

| | |
|---|---|
| Portal id | `RetriveLivingAreas` |
| File | [`sparql/weergave/retrieve-living-areas.ttl`](../sparql/weergave/retrieve-living-areas.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-living-areas.ttl` |
| Used in rule | — |

**Purpose.** 3D view: the *wonen* and *gemengd* zoning areas as context.

<span id="retrieve-geometry-by-global-id-template"></span>

## retrieve-geometry-by-global-id-template.ttl

| | |
|---|---|
| Portal id | `RetrieveGeometryByGlobalIdTemplate` |
| File | [`sparql/weergave/retrieve-geometry-by-global-id-template.ttl`](../sparql/weergave/retrieve-geometry-by-global-id-template.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-geometry-by-global-id-template.ttl` |
| Used in rule | — |

**Purpose.** 3D view template: the portal replaces `###GLOBAL_IDS_LIST###` with the GlobalIds from the violation messages.

The template query `retrieve-geometry-by-global-id-template.ttl` is not valid SPARQL until the placeholder is replaced. Portal parameters: `templateArgName` = `###GLOBAL_IDS_LIST###`, `templateArgRegExpr` = `GlobalId=\[(?<globalId>[^\]]+)\]`, `templateArgRegExprMatch` = `globalId`.
