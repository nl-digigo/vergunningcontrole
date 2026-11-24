# SPARQL steps

This chapter describes the files in `sparql/`. Each file holds exactly one SPARQL 1.1 query or update. The descriptions come from the XML metadata of the VNG Portal (`SeedData/SPARQL/*.xml`).

Functions with the prefix `vng:` (`vng:dsoArea`, `vng:gmBoundingBox`, `vng:gmPlane`, `vng:gmProjection`, `vng:gmTopology`) are custom functions of the VNG Portal. Other triple stores do not know them; see [Open issues](#open-punten).

## Graph layout

| Graph | Content | Filled by |
|---|---|---|
| default graph | IFC model as ifcOWL instances | portal step *Create SPARQL dataset* |
| `<https://vng.nl/geometries/>` | geometry per element (`geom:base64Data`) and derived values | portal and the steps below |
| `<https://vng.nl/ontologies/ifc4add2>` | ifcOWL ontology IFC4 ADD2 | `insert-ifc4-add2-ontology.ttl` |
| `<areas.ttl>` | DSO zoning areas around the building | `insert-areas.ttl` |

<span id="insert-ifc4-add2-ontology"></span>

## insert-ifc4-add2-ontology.ttl

| | |
|---|---|
| Portal id | `InsertIFC4ADD2Ontology` |
| File | [`sparql/insert-ifc4-add2-ontology.ttl`](../sparql/insert-ifc4-add2-ontology.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-ifc4-add2-ontology.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Loads the ifcOWL ontology for IFC4 ADD2 so that other queries can use the IFC classes, properties and class hierarchy.

**How it works.**

1. Downloads `IFC4_ADD2.ttl` from the openBIMstandards/ifcOWL GitHub repository (`LOAD`).
2. Stores all triples in the graph `<https://vng.nl/ontologies/ifc4add2>` (`INTO GRAPH`).
3. The triple store needs internet access for this step.

<span id="insert-areas"></span>

## insert-areas.ttl

| | |
|---|---|
| Portal id | `InsertAreas` |
| File | [`sparql/insert-areas.ttl`](../sparql/insert-areas.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Retrieves the zoning areas (DSO, environmental plan) around the building location into the graph `<areas.ttl>`.

**How it works.**

1. Drops the graph `<areas.ttl>` (`DROP SILENT`).
2. Reads eastings/northings of the first `ifc:IfcMapConversion` in the model.
3. Calls `vng:dsoArea` with `(?e ?n 400 'wonen, gemengd')`: 400 m radius, groups *wonen* and *gemengd*.
4. Builds an IRI per area from the `dso:` namespace and its id.
5. Inserts each area as `dso:area` with `dso:id`, `dso:name`, `dso:group`, `dso:type` and `dso:geometry`.

<span id="insert-bboxes"></span>

## insert-bboxes.ttl

| | |
|---|---|
| Portal id | `InsertBBoxes` |
| File | [`sparql/insert-bboxes.ttl`](../sparql/insert-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-bboxes.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Computes the 3D bounding box of every geometry.

**How it works.**

1. Selects every instance in `<https://vng.nl/geometries/>` with `geom:base64Data` and no `geom:bboxMinX` yet.
2. Calls `vng:gmBoundingBox`, which returns min/max X, Y and Z.
3. Inserts `geom:bboxMinX/Y/Z` and `geom:bboxMaxX/Y/Z`.

<span id="insert-projections"></span>

## insert-projections.ttl

| | |
|---|---|
| Portal id | `InsertProjections` |
| File | [`sparql/insert-projections.ttl`](../sparql/insert-projections.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-projections.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Creates a 2D top-down projection (footprint) of every 3D geometry.

**How it works.**

1. Selects every instance with `geom:base64Data` and no `geom:projectionBase64Data`.
2. Builds the XY plane with `vng:gmPlane(0.0, 0.0, 1.0, 0.0)`.
3. Projects the geometry with `vng:gmProjection`.
4. Inserts the result as `geom:projectionBase64Data`.

<span id="insert-topological-relations"></span>

## insert-topological-relations.ttl

| | |
|---|---|
| Portal id | `InsertTopologicalRelations` |
| File | [`sparql/insert-topological-relations.ttl`](../sparql/insert-topological-relations.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations.ttl` |
| Used in rule | #1, #2 |

**Purpose.** Derives, per IFC element, the topological relation between its footprint and the *wonen* zoning areas (derivation step of rule 1).

**How it works.**

1. Finds every IFC element with `ifc:globalId_IfcRoot` and reads the GlobalId string.
2. Matches it to the geometry (`geom:globalId`) and reads `geom:projectionBase64Data`.
3. Concatenates the geometries of all `dso:area` with group "wonen", separated by `|`.
4. Computes the relation with `vng:gmTopology`.
5. Replaces any old `geom:topologicalRelation` with the new one.

<span id="insert-topological-relations-ifcwall-ifcroof"></span>

## insert-topological-relations-ifcwall-ifcroof.ttl

| | |
|---|---|
| Portal id | `InsertTopologicalRelations-IfcWall-IfcRoof` |
| File | [`sparql/insert-topological-relations-ifcwall-ifcroof.ttl`](../sparql/insert-topological-relations-ifcwall-ifcroof.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations-ifcwall-ifcroof.ttl` |
| Used in rule | — |

**Purpose.** Variant of `insert-topological-relations.ttl` restricted to walls and roofs.

**How it works.**

1. Restricts `?ifcType` to `ifc:IfcWall` and `ifc:IfcRoof` (`VALUES`).
2. Otherwise identical to `insert-topological-relations.ttl`.

<span id="retrieve-building-elements"></span>

## retrieve-building-elements.ttl

| | |
|---|---|
| Portal id | `RetrieveBuildingElements` |
| File | [`sparql/retrieve-building-elements.ttl`](../sparql/retrieve-building-elements.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/retrieve-building-elements.ttl` |
| Used in rule | — |

**Purpose.** Returns all building elements of the model with their geometry.

**How it works.**

1. Matches all classes that are `IfcBuildingElement` or a subclass in the ifcOWL graph.
2. Maps the ifcOWL class IRI to the instance namespace with `IRI(CONCAT(STR(ifc:), STRAFTER(STR(?ontType), "#")))`.
3. Finds the elements of those classes with a GlobalId and their `geom:base64Data`.
4. Returns `?ifcElement`, `?globalIdValue`, `?base64Data`, ordered by element.
