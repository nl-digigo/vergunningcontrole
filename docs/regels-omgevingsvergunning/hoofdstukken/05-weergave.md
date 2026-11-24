# 3D-weergave

Na een SHACL-validatie toont het VNG Portaal de overtredingen in een 3D-viewer. Per shape staan in de XML-metadata een of meer SPARQL-queries die de te tonen geometrie ophalen. Die queries staan nu als losse bestanden in `sparql/weergave/`. De koppeling tussen shape en weergave blijft in de portaalmetadata; [`data/catalogus.csv`](data/catalogus.csv) legt hem ook vast.

| Bestand | Portaal-id | Geometrievariabele | Bij shape |
|---|---|---|---|
| [`sparql/weergave/retrieve-geometry-by-global-id-template.ttl`](sparql/weergave/retrieve-geometry-by-global-id-template.ttl) | `RetrieveGeometryByGlobalIdTemplate` | `?base64Data` | `ValidateBBoxes`, `ValidateBBoxes-IfcWall` |
| [`sparql/weergave/retrieve-living-areas.ttl`](sparql/weergave/retrieve-living-areas.ttl) | `RetriveLivingAreas` | `?geometry` | `ValidateBBoxes`, `ValidateBBoxes-IfcWall`, `ValidateTopologicalRelations` |
| [`sparql/weergave/retrieve-topological-relation-violations.ttl`](sparql/weergave/retrieve-topological-relation-violations.ttl) | `RetriveTopologicalRelationVialolations` | `?base64Data` | `ValidateTopologicalRelations` |

<span id="retrieve-topological-relation-violations"></span>

## retrieve-topological-relation-violations.ttl

Haalt de geometrie op van de **wanden** waarvan `geom:topologicalRelation` niet `"CONTAINED BY"` is. Let op: de shape controleert alle elementen, de weergave toont alleen wanden (`VALUES ?ifcType { ifc:IfcWall }`).

<span id="retrieve-living-areas"></span>

## retrieve-living-areas.ttl

Haalt de bestemmingsvlakken met groep *wonen* of *gemengd* uit `<areas.ttl>` als context in de 3D-viewer, gesorteerd op id.

<span id="retrieve-geometry-by-global-id-template"></span>

## retrieve-geometry-by-global-id-template.ttl

Sjabloonquery. Het portaal vervangt de plaatshouder `###GLOBAL_IDS_LIST###` door de GlobalIds uit de foutmeldingen en haalt daarna `geom:base64Data` op.

| Parameter (portaal) | Waarde |
|---|---|
| `templateArgName` | `###GLOBAL_IDS_LIST###` |
| `templateArgRegExpr` | `GlobalId=\[(?<globalId>[^\]]+)\]` |
| `templateArgRegExprMatch` | `globalId` |

Dit bestand is daardoor zonder vervanging geen geldige SPARQL. `tools/controleer-syntax.py` vult voor de controle een voorbeeldwaarde in.
