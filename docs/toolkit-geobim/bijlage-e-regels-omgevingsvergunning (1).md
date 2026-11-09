# Machineleesbare regels omgevingsvergunning — specificaties {#regels-omgevingsvergunning}

Uitvoerbare regelcodering (laag 4) voor de BM13-checks, uitgedrukt als [SPARQL 1.1](https://www.w3.org/TR/sparql11-overview/) (afleiden) en [SHACL](https://www.w3.org/TR/shacl/) (toetsen).

| | |
|---|---|
| **Bron** | `regels-omgevingsvergunning` v0.1 — 23 bestanden |
| **Talen** | SPARQL 1.1 (query en update), SHACL (Turtle) |
| **Uitvoering** | VNG Portaal (RDF Ltd), met eigen functies `vng:*` |
| **URI** | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{map}/{bestand}.ttl` |
| **Vooraf** | IDS-controles uit [[[#ils-omgevingsvergunning]]] |
| **Checks** | 17 regels uit de BM13-regelinventarisatie v0.3, 3-7-2026 |

Elk bestand is ook afzonderlijk beschikbaar onder de URI hierboven, genummerd in dezelfde volgorde. De codeblokken hieronder tonen de volledige inhoud van elk bestand. Nummers 16 en verder zijn concepten uit de BM13-tracker; die draaien nog niet in het portaal.

## Overzicht per check

De 17 checks komen uit de BM13-regelinventarisatie v0.3, 3-7-2026. Regels #1–#6 betreffen het omgevingsplan (OPA), regels #7–#17 het Besluit bouwwerken leefomgeving (Bbl).

| Check | Onderwerp | Bestanden |
|-------|-----------|-----------|
| **#1** | Gebruiksfunctie komt overeen met bestemming | 01, 02, 03, 04, 05, 08, 10, 11, 16, 17, 18, 19 |
| **#2** | Maximale bouwhoogte | 01, 02, 03, 04, 05, 08, 09, 20, 21, 22, 23 |
| **#3** | Maximaal bebouwingspercentage | te doen |
| **#4** | Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen | te doen |
| **#5** | Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor | te doen |
| **#6** | Maximum aantal bouwlagen | te doen |
| **#7** | Brandcompartimenten | te doen |
| **#8** | Brandwerendheid | te doen |
| **#9** | Vrije breedte | te doen |
| **#10** | Hoogteverschil | te doen |
| **#11** | Rc-waarde | te doen |
| **#12** | U-waarde | te doen |
| **#13** | MPG | te doen |
| **#14** | Vluchtwegen | te doen |
| **#15** | Loopafstand | te doen |
| **#16** | Vluchtbreedte | te doen |
| **#17** | Daglicht | te doen |

---

## Overzicht per bestand

| Nr | Bestand | Soort | Status | BM13-checks |
|----|---------|-------|--------|-------------|
| 01 | [insert-ifc4-add2-ontology.ttl](#01-insert-ifc4-add2-ontology-ttl) | SPARQL-update | in gebruik (VNG Portaal) | #1, #2 |
| 02 | [insert-areas.ttl](#02-insert-areas-ttl) | SPARQL-update | in gebruik (VNG Portaal) | #1, #2 |
| 03 | [insert-bboxes.ttl](#03-insert-bboxes-ttl) | SPARQL-update | in gebruik (VNG Portaal) | #1, #2 |
| 04 | [insert-projections.ttl](#04-insert-projections-ttl) | SPARQL-update | in gebruik (VNG Portaal) | #1, #2 |
| 05 | [insert-topological-relations.ttl](#05-insert-topological-relations-ttl) | SPARQL-update | in gebruik (VNG Portaal) | #1, #2 |
| 06 | [insert-topological-relations-ifcwall-ifcroof.ttl](#06-insert-topological-relations-ifcwall-ifcroof-ttl) | SPARQL-update | beschikbaar, niet in workflow | — |
| 07 | [retrieve-building-elements.ttl](#07-retrieve-building-elements-ttl) | SPARQL-query | beschikbaar, niet in workflow | — |
| 08 | [validate-topological-relations.ttl](#08-validate-topological-relations-ttl) | SHACL | in gebruik (VNG Portaal) | #1, #2 |
| 09 | [validate-height.ttl](#09-validate-height-ttl) | SHACL | in gebruik (VNG Portaal) | #2 |
| 10 | [validate-bboxes-ifcwall.ttl](#10-validate-bboxes-ifcwall-ttl) | SHACL | in gebruik (VNG Portaal) | #1 |
| 11 | [validate-model-bboxes.ttl](#11-validate-model-bboxes-ttl) | SHACL | in gebruik (VNG Portaal) | #1 |
| 12 | [validate-bboxes.ttl](#12-validate-bboxes-ttl) | SHACL | beschikbaar, niet in workflow | — |
| 13 | [retrieve-topological-relation-violations.ttl](#13-retrieve-topological-relation-violations-ttl) | SPARQL-query (3D-weergave) | in gebruik bij ValidateTopologicalRelations | — |
| 14 | [retrieve-living-areas.ttl](#14-retrieve-living-areas-ttl) | SPARQL-query (3D-weergave) | in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall, ValidateTopologicalRelations | — |
| 15 | [retrieve-geometry-by-global-id-template.ttl](#15-retrieve-geometry-by-global-id-template-ttl) | SPARQL-query (3D-weergave) | in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall | — |
| 16 | [BM13-R01 4a-parameters.ttl](#16-bm13-r01-4a-parameters-ttl) | regelparameters (RDF) | concept (tracker Layer 4) | #1 |
| 17 | [BM13-R01 4b-afleiden.ttl](#17-bm13-r01-4b-afleiden-ttl) | SPARQL-update (afleiden) | concept (tracker Layer 4) | #1 |
| 18 | [BM13-R01 4c-valideren.ttl](#18-bm13-r01-4c-valideren-ttl) | SHACL (valideren) | concept (tracker Layer 4) | #1 |
| 19 | [BM13-R01 4d-verwacht-rapport.ttl](#19-bm13-r01-4d-verwacht-rapport-ttl) | voorbeeld/resultaat | concept (tracker Layer 4) | #1 |
| 20 | [BM13-R02 4a-parameters.ttl](#20-bm13-r02-4a-parameters-ttl) | regelparameters (RDF) | concept (tracker Layer 4) | #2 |
| 21 | [BM13-R02 4b-afleiden.ttl](#21-bm13-r02-4b-afleiden-ttl) | SPARQL-update (afleiden) | concept (tracker Layer 4) | #2 |
| 22 | [BM13-R02 4c-valideren.ttl](#22-bm13-r02-4c-valideren-ttl) | SHACL (valideren) | concept (tracker Layer 4) | #2 |
| 23 | [BM13-R02 4d-resultaatobject.ttl](#23-bm13-r02-4d-resultaatobject-ttl) | voorbeeld/resultaat | concept (tracker Layer 4) | #2 |

## 01 — insert-ifc4-add2-ontology.ttl {#01-insert-ifc4-add2-ontology-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertIFC4ADD2Ontology` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-ifc4-add2-ontology.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-ifc4-add2-ontology.ttl) |

Laadt de ifcOWL-ontologie voor IFC4 ADD2 in de triple store, zodat andere queries IFC-klassen en -eigenschappen (zoals `ifc:IfcWall` en `ifc:IfcMapConversion`) en de klassenhiërarchie kunnen gebruiken.

1. Haalt het Turtle-bestand `IFC4_ADD2.ttl` op uit de GitHub-repository openBIMstandards/ifcOWL (`LOAD`).
2. Slaat alle triples op in de graaf `<https://vng.nl/ontologies/ifc4add2>` (`INTO GRAPH`).
3. De triple store heeft hiervoor internettoegang nodig.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```sparql
LOAD <https://raw.githubusercontent.com/openBIMstandards/ifcOWL/master/IFC4_ADD2.ttl>
INTO GRAPH <https://vng.nl/ontologies/ifc4add2>
```

## 02 — insert-areas.ttl {#02-insert-areas-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertAreas` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-areas.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl) |

Haalt de bestemmingsvlakken (DSO, Omgevingsplan) op rond de locatie van het bouwwerk en zet ze in de graaf `<areas.ttl>`.

1. Verwijdert de bestaande graaf `<areas.ttl>` (`DROP SILENT`, dus geen fout als die nog niet bestaat).
2. Leest de kaartconversie (eastings/northings) van de eerste `ifc:IfcMapConversion` in het model (`LIMIT 1`). Dit is de oorsprong van de georeferentie.
3. Roept de eigen functie `vng:dsoArea` aan met `(?e ?n 400 'wonen, gemengd')`: zoekstraal 400 m, groepen *wonen* en *gemengd*. De functie geeft per vlak id, naam, groep, type en geometrie terug.
4. Maakt per vlak een IRI uit de `dso:`-namespace en het id.
5. Schrijft elk vlak als `dso:area` met `dso:id`, `dso:name`, `dso:group`, `dso:type` en `dso:geometry` naar de graaf `<areas.ttl>`.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```sparql
PREFIX ifc:     <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX express: <https://w3id.org/express#>
PREFIX vng:     <http://vng.nl/geometry-ext.ttl#>
PREFIX dso:     <http://vng.nl/areas/>

DROP SILENT GRAPH <areas.ttl>
	;

	INSERT {
	GRAPH <areas.ttl> {
    ?areaUri  a dso:area ;
                dso:id    		?id ;
                dso:name		?name ;
            	dso:group		?group ;
            	dso:type		?type ;
            	dso:geometry 	?geometry .
    }
}
WHERE {
    {
    SELECT ?e ?n WHERE {
        ?mc rdf:type                          ifc:IfcMapConversion ;
            ifc:eastings_IfcMapConversion     ?le ;
            ifc:northings_IfcMapConversion    ?ln .
        ?le express:hasDouble                 ?e .
        ?ln express:hasDouble                 ?n .
    } LIMIT 1
    }
    (?e ?n 400 'wonen, gemengd') vng:dsoArea (?id ?name ?group ?type ?geometry) .
    BIND(IRI(CONCAT(STR(dso:), ?id)) AS ?areaUri)
}
```

## 03 — insert-bboxes.ttl {#03-insert-bboxes-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertBBoxes` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-bboxes.ttl) |

Berekent de 3D-omhullende doos (bounding box) van elke geometrie.

1. Selecteert elke instantie in `<https://vng.nl/geometries/>` met `geom:base64Data` die nog geen `geom:bboxMinX` heeft (`FILTER NOT EXISTS`). Instanties met een bounding box worden overgeslagen.
2. Roept `vng:gmBoundingBox` aan met de base64-geometrie; die geeft zes waarden terug (min/max X, Y, Z).
3. Schrijft `geom:bboxMinX/Y/Z` en `geom:bboxMaxX/Y/Z` op de instantie in dezelfde graaf.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```sparql
PREFIX geom:    <https://vng.nl/geometry/>
PREFIX vng:     <http://vng.nl/geometry-ext.ttl#>

INSERT {
	GRAPH <https://vng.nl/geometries/> {
		?instance   geom:bboxMinX	?minX ;
					geom:bboxMinY	?minY ;
					geom:bboxMinZ	?minZ ;
					geom:bboxMaxX	?maxX ;
					geom:bboxMaxY	?maxY ;
					geom:bboxMaxZ	?maxZ .
	}
}
WHERE {
	GRAPH <https://vng.nl/geometries/> {
		?instance	geom:base64Data	?base64Data .
	FILTER NOT EXISTS { ?instance geom:bboxMinX ?any }
	}
	(?minX ?minY ?minZ ?maxX ?maxY ?maxZ) vng:gmBoundingBox ?base64Data .
}
```

## 04 — insert-projections.ttl {#04-insert-projections-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertProjections` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-projections.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-projections.ttl) |

Maakt van elke 3D-geometrie een 2D-projectie op het XY-vlak (bovenaanzicht, footprint).

1. Selecteert elke instantie in `<https://vng.nl/geometries/>` met `geom:base64Data` zonder `geom:projectionBase64Data`.
2. Bouwt met `vng:gmPlane(0.0, 0.0, 1.0, 0.0)` het XY-vlak door de oorsprong (normaal (0, 0, 1)).
3. Projecteert de geometrie met `vng:gmProjection` op dat vlak.
4. Schrijft het resultaat als `geom:projectionBase64Data` op de instantie.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```sparql
PREFIX geom:    <https://vng.nl/geometry/>
PREFIX vng: <http://vng.nl/geometry-ext.ttl#>

INSERT {
    GRAPH <https://vng.nl/geometries/> {
        ?instance geom:projectionBase64Data ?projection .
    }
}
WHERE {
    GRAPH <https://vng.nl/geometries/> {
        ?instance   geom:base64Data ?base64Data .
        BIND(vng:gmProjection(?base64Data, vng:gmPlane(0.0, 0.0, 1.0, 0.0)) AS ?projection)
        FILTER NOT EXISTS { ?instance geom:projectionBase64Data ?any }
    }
}
```

## 05 — insert-topological-relations.ttl {#05-insert-topological-relations-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertTopologicalRelations` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-topological-relations.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations.ttl) |

Bepaalt per IFC-element de topologische relatie tussen zijn footprint en de bestemmingsvlakken *wonen*. Dit is de afleidingsstap van regel 1.

1. Zoekt elk IFC-element met `ifc:globalId_IfcRoot` en leest de GlobalId-tekst (`express:hasString`).
2. Koppelt die GlobalId aan de geometrie in `<https://vng.nl/geometries/>` (`geom:globalId`) en leest `geom:projectionBase64Data`.
3. Verzamelt in een subquery de geometrie van alle `dso:area` in `<areas.ttl>` met `dso:group "wonen"` en voegt ze samen tot één tekst, gescheiden door `|`.
4. Berekent met `vng:gmTopology` de relatie tussen footprint en vlakken.
5. Verwijdert een eventuele oude `geom:topologicalRelation` en schrijft de nieuwe. Opnieuw draaien geeft dus geen dubbele waarden.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```sparql
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ifc:     <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX express: <https://w3id.org/express#>
PREFIX geom:    <https://vng.nl/geometry/>
PREFIX dso:     <http://vng.nl/areas/>
PREFIX vng:     <http://vng.nl/geometry-ext.ttl#>

DELETE {
    GRAPH <https://vng.nl/geometries/> {
        ?geometry geom:topologicalRelation ?oldRelation .
    }
}
INSERT {
    GRAPH <https://vng.nl/geometries/> {
        ?geometry geom:topologicalRelation ?topologicalRelation .
    }
}
WHERE {
    ?ifcElement     rdf:type                    ?ifcType ;
                    ifc:globalId_IfcRoot        ?globalIdNode .
    ?globalIdNode   rdf:type                    ifc:IfcGloballyUniqueId ;
                    express:hasString           ?globalIdValue .

    GRAPH <https://vng.nl/geometries/> {
        ?geometry   geom:globalId               ?globalIdValue ;
                    geom:projectionBase64Data   ?base64Data1 .
    }

    {
        SELECT (GROUP_CONCAT(?base64Data2; SEPARATOR="|") AS ?allBase64)
        WHERE {
            GRAPH <areas.ttl> {
                [] a             dso:area ;
                    dso:group     "wonen" ;
            		dso:geometry  ?base64Data2 .
            }
        }
    }

    BIND(vng:gmTopology(?base64Data1, ?allBase64) AS ?topologicalRelation)

    OPTIONAL {
        GRAPH <https://vng.nl/geometries/> {
            ?geometry geom:topologicalRelation ?oldRelation .
        }
    }
}
```

## 06 — insert-topological-relations-ifcwall-ifcroof.ttl {#06-insert-topological-relations-ifcwall-ifcroof-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertTopologicalRelations-IfcWall-IfcRoof` |
| **Soort** | SPARQL-update |
| **Status** | beschikbaar, niet in workflow |
| **BM13-checks** | — |
| **Bestand** | [`sparql/insert-topological-relations-ifcwall-ifcroof.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations-ifcwall-ifcroof.ttl) |

Variant van `insert-topological-relations.ttl` die alleen wanden en daken meeneemt.

1. Beperkt `?ifcType` met `VALUES` tot `ifc:IfcWall` en `ifc:IfcRoof`.
2. Verder gelijk aan `insert-topological-relations.ttl` (stap 1 t/m 5).

*Koppeling:* beschikbaar, niet in workflow.

```sparql
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ifc:     <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX express: <https://w3id.org/express#>
PREFIX geom:    <https://vng.nl/geometry/>
PREFIX dso:     <http://vng.nl/areas/>
PREFIX vng:     <http://vng.nl/geometry-ext.ttl#>

DELETE {
    GRAPH <https://vng.nl/geometries/> {
        ?geometry geom:topologicalRelation ?oldRelation .
    }
}
INSERT {
    GRAPH <https://vng.nl/geometries/> {
        ?geometry geom:topologicalRelation ?topologicalRelation .
    }
}
WHERE {
    VALUES ?ifcType { ifc:IfcWall ifc:IfcRoof }

    ?ifcElement     rdf:type                    ?ifcType ;
                    ifc:globalId_IfcRoot        ?globalIdNode .
    ?globalIdNode   rdf:type                    ifc:IfcGloballyUniqueId ;
                    express:hasString           ?globalIdValue .

    GRAPH <https://vng.nl/geometries/> {
        ?geometry   geom:globalId               ?globalIdValue ;
                    geom:projectionBase64Data   ?base64Data1 .
    }

    {
        SELECT (GROUP_CONCAT(?base64Data2; SEPARATOR="|") AS ?allBase64)
        WHERE {
            GRAPH <areas.ttl> {
                [] a             dso:area ;
                    dso:group     "wonen" ;
            		dso:geometry  ?base64Data2 .
            }
        }
    }

    BIND(vng:gmTopology(?base64Data1, ?allBase64) AS ?topologicalRelation)

    OPTIONAL {
        GRAPH <https://vng.nl/geometries/> {
            ?geometry geom:topologicalRelation ?oldRelation .
        }
    }
}
```

## 07 — retrieve-building-elements.ttl {#07-retrieve-building-elements-ttl}

| | |
|---|---|
| **Portaal-id** | `RetrieveBuildingElements` |
| **Soort** | SPARQL-query |
| **Status** | beschikbaar, niet in workflow |
| **BM13-checks** | — |
| **Bestand** | [`sparql/retrieve-building-elements.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/retrieve-building-elements.ttl) |

Geeft alle bouwdelen van het model terug met hun geometrie. Hulpquery voor controle en weergave.

1. Zoekt in `<https://vng.nl/ontologies/ifc4add2>` alle klassen die `IfcBuildingElement` zijn of daarvan afstammen (`rdfs:subClassOf*`).
2. Zet de ifcOWL-klasse-IRI om naar de namespace van de instantiedata: `IRI(CONCAT(STR(ifc:), STRAFTER(STR(?ontType), "#")))`. Nodig omdat de ontologie `ifcowl:` gebruikt en de instanties `ifc:`.
3. Zoekt de IFC-elementen van die klassen met een GlobalId.
4. Haalt de bijbehorende `geom:base64Data` uit `<https://vng.nl/geometries/>`.
5. Geeft `?ifcElement`, `?globalIdValue` en `?base64Data` terug, gesorteerd op element.

*Koppeling:* beschikbaar, niet in workflow.

```sparql
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ifc:     <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX ifcowl:  <http://www.buildingsmart-tech.org/ifcOWL/IFC4_ADD2#>
PREFIX express: <https://w3id.org/express#>
PREFIX geom:    <https://vng.nl/geometry/>

SELECT DISTINCT ?ifcElement ?globalIdValue ?base64Data
WHERE {
  GRAPH <https://vng.nl/ontologies/ifc4add2> {
    ?ontType rdfs:subClassOf* ifcowl:IfcBuildingElement .
  }
  BIND(IRI(CONCAT(STR(ifc:), STRAFTER(STR(?ontType), "#"))) AS ?type)

  ?ifcElement      rdf:type              ?type ;
                   ifc:globalId_IfcRoot  ?globalIdNode .
  ?globalIdNode    express:hasString     ?globalIdValue .

  GRAPH <https://vng.nl/geometries/> {
    ?geometry      geom:globalId         ?globalIdValue ;
                   geom:base64Data       ?base64Data .
  }
}
ORDER BY ?ifcElement
```

## 08 — validate-topological-relations.ttl {#08-validate-topological-relations-ttl}

| | |
|---|---|
| **Portaal-id** | `ValidateTopologicalRelations` |
| **Soort** | SHACL |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`shacl/validate-topological-relations.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl) |

Controleert of elke geometrie volledig binnen de bestemmingsvlakken *wonen* ligt. Validatiestap van regel 1.

1. `geom:GeometryShape` richt zich op elk subject met `geom:globalId` (`sh:targetSubjectsOf`).
2. De SPARQL-constraint leest `geom:globalId` en `geom:topologicalRelation`.
3. Een element geeft een overtreding als de relatie niet `"CONTAINED BY"` is: het ligt dan niet helemaal binnen *wonen*.
4. Melding: `geom:topologicalRelation is NOT 'CONTAINED BY'. GlobalId: …`.

*Koppeling:* stap in de workflow van check #1, #2 in het VNG Portaal.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix geom: <https://vng.nl/geometry/> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

geom:GeometryShape
    a sh:NodeShape ;
	sh:targetSubjectsOf geom:globalId ;

    sh:sparql [
        sh:prefixes [
            sh:declare [
                sh:prefix "geom" ;
                sh:namespace "https://vng.nl/geometry/"^^xsd:anyURI
            ] ;
            sh:declare [
                sh:prefix "rdf" ;
                sh:namespace "http://www.w3.org/1999/02/22-rdf-syntax-ns#"^^xsd:anyURI
            ]
        ] ;
        sh:select """
            SELECT $this ?value ?globalId
            WHERE {
                $this geom:globalId            ?globalId ;
                        geom:topologicalRelation ?value .
                FILTER(?value != "CONTAINED BY")
            }
        """ ;
        sh:message "geom:topologicalRelation is NOT 'CONTAINED BY'. GlobalId: {?globalId}" ;
    ] ;
    sh:severity sh:Violation .
```

## 09 — validate-height.ttl {#09-validate-height-ttl}

| | |
|---|---|
| **Portaal-id** | `ValidateHeight` |
| **Soort** | SHACL |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#2** Maximale bouwhoogte |
| **Bestand** | [`shacl/validate-height.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-height.ttl) |

Eerste, vereenvoudigde hoogtecontrole: geen element mag meer dan 1 eenheid boven de hoogste wand uitsteken. Dit is nog niet de toets aan de maximale bouwhoogte uit het omgevingsplan (zie concept BM13-R02).

1. `geom:IfcElementHeightShape` richt zich op elk subject met `geom:globalId`.
2. Leest `geom:bboxMaxZ` (bovenkant van de bounding box).
3. Een subquery berekent `?globalMaxZ`: de hoogste `geom:bboxMaxZ` van alle `ifc:IfcWall` (de `VALUES`-lijst is uit te breiden).
4. Overtreding als `?bboxMaxZ - ?globalMaxZ > 1`.
5. Melding: `Height violation for GlobalId=[…]: bboxMaxZ=… minus globalMaxZ=… exceeds 1.`

*Koppeling:* stap in de workflow van check #2 in het VNG Portaal.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix geom: <https://vng.nl/geometry/> .
@prefix ifc:  <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

geom:IfcElementHeightShape
    a sh:NodeShape ;
	sh:targetSubjectsOf geom:globalId ;

    sh:sparql [
        sh:prefixes [
            sh:declare [ sh:prefix "geom" ; sh:namespace "https://vng.nl/geometry/"^^xsd:anyURI ] ;
            sh:declare [ sh:prefix "ifc"  ; sh:namespace "https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#"^^xsd:anyURI ] ;
            sh:declare [ sh:prefix "rdf"  ; sh:namespace "http://www.w3.org/1999/02/22-rdf-syntax-ns#"^^xsd:anyURI ]
        ] ;
        sh:select """
            SELECT $this ?globalId ?bboxMaxZ ?globalMaxZ
            WHERE {
				$this geom:globalId ?globalId .
                $this geom:bboxMaxZ ?bboxMaxZ .
                                        										
                {
                    SELECT (MAX(?z) AS ?globalMaxZ)
                    WHERE {
                        ?elem rdf:type ?ifcType .
                        VALUES ?ifcType {
                            ifc:IfcWall
                        }
                        ?elem geom:bboxMaxZ ?z .
                    }
                }

                FILTER(?bboxMaxZ - ?globalMaxZ > 1)
            }
        """ ;
        sh:message "Height violation for GlobalId=[{?globalId}]: bboxMaxZ={?bboxMaxZ} minus globalMaxZ={?globalMaxZ} exceeds 1." ;
    ] ;

    sh:severity sh:Violation .
```

## 10 — validate-bboxes-ifcwall.ttl {#10-validate-bboxes-ifcwall-ttl}

| | |
|---|---|
| **Portaal-id** | `ValidateBBoxes-IfcWall` |
| **Soort** | SHACL |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`shacl/validate-bboxes-ifcwall.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes-ifcwall.ttl) |

Plausibiliteitscontrole: elke wand heeft een realistische maat, niet te klein en niet te groot.

1. `geom:GeometryShape` richt zich op elke instantie van `ifc:IfcWall` (`sh:targetClass`).
2. Berekent per as de maat: deltaX = maxX − minX, enzovoort.
3. Overtreding als een delta kleiner is dan 1 of groter dan 100.
4. Melding: `BBox violation for GlobalId=[…]: deltaX=…, deltaY=…, deltaZ=…`.

*Koppeling:* stap in de workflow van check #1 in het VNG Portaal.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix geom: <https://vng.nl/geometry/> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix ifc:  <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#> .

geom:GeometryShape
    a sh:NodeShape ;
	sh:targetClass ifc:IfcWall ;

    sh:sparql [
        sh:prefixes [
            sh:declare [
                sh:prefix "geom" ;
                sh:namespace "https://vng.nl/geometry/"^^xsd:anyURI
            ]
        ] ;
        sh:select """
            SELECT $this ?globalId ?deltaX ?deltaY ?deltaZ
            WHERE {
                $this   geom:globalId   ?globalId ;
                        geom:bboxMinX   ?minX ;
                        geom:bboxMaxX   ?maxX ;
                        geom:bboxMinY   ?minY ;
                        geom:bboxMaxY   ?maxY ;
                        geom:bboxMinZ   ?minZ ;
                        geom:bboxMaxZ   ?maxZ .
                BIND((?maxX - ?minX) AS ?deltaX)
                BIND((?maxY - ?minY) AS ?deltaY)
                BIND((?maxZ - ?minZ) AS ?deltaZ)

                FILTER(
                    ?deltaX < 1 || ?deltaX > 100 ||
                    ?deltaY < 1 || ?deltaY > 100 ||
                    ?deltaZ < 1 || ?deltaZ > 100
                )
            }
        """ ;
        sh:message "BBox violation for GlobalId=[{?globalId}]: deltaX={?deltaX}, deltaY={?deltaY}, deltaZ={?deltaZ}. All axis deltas must be in [1, 100]." ;
    ] ;
    sh:severity sh:Violation .
```

## 11 — validate-model-bboxes.ttl {#11-validate-model-bboxes-ttl}

| | |
|---|---|
| **Portaal-id** | `ValidateModelBBoxes` |
| **Soort** | SHACL |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`shacl/validate-model-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-model-bboxes.ttl) |

Plausibiliteitscontrole op het hele model: de totale omvang moet realistisch zijn. Vangt onder meer verkeerde eenheden (mm in plaats van m) en een verkeerde georeferentie af.

1. `geom:DatasetBBoxShape` richt zich op één knoop: de graaf-IRI `<https://vng.nl/geometries/>` (`sh:targetNode`).
2. Een subquery berekent over alle geometrieën de totale omvang. X en Y worden relatief genomen ten opzichte van de modeloorsprong (bbox X − `geom:eastings`, bbox Y − `geom:northings`); Z absoluut.
3. Overtreding als de omvang op een as kleiner is dan 1 of groter dan 100.
4. Melding: `Dataset BBox violation: globalMinX=…, globalMaxX=…, …`.

*Koppeling:* stap in de workflow van check #1 in het VNG Portaal.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix geom: <https://vng.nl/geometry/> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

geom:DatasetBBoxShape
    a sh:NodeShape ;
    sh:targetNode <https://vng.nl/geometries/> ;

    sh:sparql [
        sh:prefixes [
            sh:declare [ sh:prefix "geom" ; sh:namespace "https://vng.nl/geometry/"^^xsd:anyURI ]
        ] ;
        sh:select """
            SELECT ?this ?globalMinX ?globalMaxX ?globalMinY ?globalMaxY ?globalMinZ ?globalMaxZ
            WHERE {

                {
                    SELECT
                        (MIN(?bboxMinX - ?eastings)  AS ?globalMinX)
                        (MAX(?bboxMaxX - ?eastings)  AS ?globalMaxX)
                        (MIN(?bboxMinY - ?northings) AS ?globalMinY)
                        (MAX(?bboxMaxY - ?northings) AS ?globalMaxY)
                        (MIN(?bboxMinZ)              AS ?globalMinZ)
                        (MAX(?bboxMaxZ)              AS ?globalMaxZ)
                    WHERE {
                        ?geom geom:eastings  ?eastings ;
                                geom:northings ?northings ;
                                geom:bboxMinX  ?bboxMinX ;
                                geom:bboxMaxX  ?bboxMaxX ;
                                geom:bboxMinY  ?bboxMinY ;
                                geom:bboxMaxY  ?bboxMaxY ;
                                geom:bboxMinZ  ?bboxMinZ ;
                                geom:bboxMaxZ  ?bboxMaxZ .
                    }
                }

                FILTER(
                    ?globalMaxX - ?globalMinX < 1 || ?globalMaxX - ?globalMinX > 100 ||
                    ?globalMaxY - ?globalMinY < 1 || ?globalMaxY - ?globalMinY > 100 ||
                    ?globalMaxZ - ?globalMinZ < 1 || ?globalMaxZ - ?globalMinZ > 100
                )
            }
        """ ;
        sh:message "Dataset BBox violation: globalMinX={?globalMinX}, globalMaxX={?globalMaxX}, globalMinY={?globalMinY}, globalMaxY={?globalMaxY}, globalMinZ={?globalMinZ}, globalMaxZ={?globalMaxZ}. All values must be in [1, 100]." ;
    ] ;
    sh:severity sh:Violation .
```

## 12 — validate-bboxes.ttl {#12-validate-bboxes-ttl}

| | |
|---|---|
| **Portaal-id** | `ValidateBBoxes` |
| **Soort** | SHACL |
| **Status** | beschikbaar, niet in workflow |
| **BM13-checks** | — |
| **Bestand** | [`shacl/validate-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes.ttl) |

Dezelfde maatcontrole als hierboven, maar voor elke geometrie in plaats van alleen wanden.

1. Richt zich op elk subject met `geom:globalId`.
2. Verder gelijk aan `validate-bboxes-ifcwall.ttl`.

*Koppeling:* beschikbaar, niet in workflow.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix geom: <https://vng.nl/geometry/> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

geom:GeometryShape
    a sh:NodeShape ;
    sh:targetSubjectsOf geom:globalId ;
						
    sh:sparql [
        sh:prefixes [
            sh:declare [
                sh:prefix "geom" ;
                sh:namespace "https://vng.nl/geometry/"^^xsd:anyURI
            ]
        ] ;
        sh:select """
            SELECT $this ?globalId ?deltaX ?deltaY ?deltaZ
            WHERE {
                $this   geom:globalId   ?globalId ;
                        geom:bboxMinX   ?minX ;
                        geom:bboxMaxX   ?maxX ;
                        geom:bboxMinY   ?minY ;
                        geom:bboxMaxY   ?maxY ;
                        geom:bboxMinZ   ?minZ ;
                        geom:bboxMaxZ   ?maxZ .
                BIND((?maxX - ?minX) AS ?deltaX)
                BIND((?maxY - ?minY) AS ?deltaY)
                BIND((?maxZ - ?minZ) AS ?deltaZ)

                FILTER(
                    ?deltaX < 1 || ?deltaX > 100 ||
                    ?deltaY < 1 || ?deltaY > 100 ||
                    ?deltaZ < 1 || ?deltaZ > 100
                )
            }
        """ ;
        sh:message "BBox violation for GlobalId=[{?globalId}]: deltaX={?deltaX}, deltaY={?deltaY}, deltaZ={?deltaZ}. All axis deltas must be in [1, 100]." ;
    ] ;
    sh:severity sh:Violation .
```

## 13 — retrieve-topological-relation-violations.ttl {#13-retrieve-topological-relation-violations-ttl}

| | |
|---|---|
| **Portaal-id** | `RetriveTopologicalRelationVialolations` |
| **Soort** | SPARQL-query (3D-weergave) |
| **Status** | in gebruik bij ValidateTopologicalRelations |
| **BM13-checks** | — |
| **Bestand** | [`sparql/weergave/retrieve-topological-relation-violations.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-topological-relation-violations.ttl) |

Haalt de geometrie op van de **wanden** waarvan `geom:topologicalRelation` niet `"CONTAINED BY"` is. Let op: de shape controleert alle elementen, de weergave toont alleen wanden (`VALUES ?ifcType { ifc:IfcWall }`).

*Koppeling:* in gebruik bij ValidateTopologicalRelations.

```sparql
						
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ifc:     <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#>
PREFIX express: <https://w3id.org/express#>
PREFIX geom:    <https://vng.nl/geometry/>

SELECT ?ifcElement ?globalIdValue ?base64Data ?topologicalRelation
WHERE {
        VALUES ?ifcType { ifc:IfcWall }

        ?ifcElement     rdf:type               		?ifcType ;
                        ifc:globalId_IfcRoot   		?globalIdNode .
        ?globalIdNode   rdf:type               		ifc:IfcGloballyUniqueId ;
                        express:hasString      		?globalIdValue .

        GRAPH <https://vng.nl/geometries/> {
        ?geometry       rdf:type               		?ifcType ;
                        geom:globalId          		?globalIdValue ;
            		    geom:base64Data				?base64Data ;
                        geom:topologicalRelation    ?topologicalRelation .
        FILTER(?topologicalRelation != "CONTAINED BY")
    }
}
ORDER BY ?ifcElement
```

## 14 — retrieve-living-areas.ttl {#14-retrieve-living-areas-ttl}

| | |
|---|---|
| **Portaal-id** | `RetriveLivingAreas` |
| **Soort** | SPARQL-query (3D-weergave) |
| **Status** | in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall, ValidateTopologicalRelations |
| **BM13-checks** | — |
| **Bestand** | [`sparql/weergave/retrieve-living-areas.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-living-areas.ttl) |

Haalt de bestemmingsvlakken met groep *wonen* of *gemengd* uit `<areas.ttl>` als context in de 3D-viewer, gesorteerd op id.

*Koppeling:* in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall, ValidateTopologicalRelations.

```sparql
						
PREFIX dso:    <http://vng.nl/areas/>

SELECT ?id ?group ?geometry
WHERE {
  GRAPH <areas.ttl> {
    ?area	a       dso:area ;
                  	dso:id    		?id ;
                  	dso:group  	    ?group ;
                  	dso:geometry  	?geometry .
    FILTER(?group = "wonen" || ?group = "gemengd")
  }
}
ORDER BY ?id
```

## 15 — retrieve-geometry-by-global-id-template.ttl {#15-retrieve-geometry-by-global-id-template-ttl}

| | |
|---|---|
| **Portaal-id** | `RetrieveGeometryByGlobalIdTemplate` |
| **Soort** | SPARQL-query (3D-weergave) |
| **Status** | in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall |
| **BM13-checks** | — |
| **Bestand** | [`sparql/weergave/retrieve-geometry-by-global-id-template.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-geometry-by-global-id-template.ttl) |

Sjabloonquery. Het portaal vervangt de plaatshouder `###GLOBAL_IDS_LIST###` door de GlobalIds uit de foutmeldingen en haalt daarna `geom:base64Data` op.

| Parameter (portaal) | Waarde |
|---|---|
| `templateArgName` | `###GLOBAL_IDS_LIST###` |
| `templateArgRegExpr` | `GlobalId=\[(?<globalId>[^\]]+)\]` |
| `templateArgRegExprMatch` | `globalId` |

Dit bestand is daardoor zonder vervanging geen geldige SPARQL. `tools/controleer-syntax.py` vult voor de controle een voorbeeldwaarde in.

*Koppeling:* in gebruik bij ValidateBBoxes, ValidateBBoxes-IfcWall.

> **Toelichting voor de implementeerder.** De plaatshouder `###GLOBAL_IDS_LIST###` wordt vervangen door de GlobalIds uit de foutmeldingen (reguliere expressie `GlobalId=\[(?<globalId>[^\]]+)\]`). Zonder vervanging is dit geen geldige SPARQL.

```sparql
						
PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX geom: <https://vng.nl/geometry/>

SELECT ?globalIdValue ?base64Data
WHERE {
    VALUES ?globalIdValue { ###GLOBAL_IDS_LIST### }
    GRAPH <https://vng.nl/geometries/> {
    ?geometry   geom:globalId	?globalIdValue ;
                geom:base64Data	?base64Data .
    }
}
```

## 16 — BM13-R01 4a-parameters.ttl {#16-bm13-r01-4a-parameters-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R01-4a` |
| **Soort** | regelparameters (RDF) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`regels/BM13-R01/4a-parameters.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R01/4a-parameters.ttl) |

Regelparameters in RDF: normwaarden, toleranties, uitzonderingen.

**Vraag.** Ligt het bouwvolume met een woonfunctie volledig binnen een bestemmingsvlak waar wonen is toegestaan?

**Parameters (4a).** Gecontroleerd gebruik `woonfunctie`; toegestane bestemming `Wonen` (uitbreidbaar met `Gemengd` e.d.); elementprofiel `BUILDING_VOLUME`; ondergrondse delen niet meegenomen; randtolerantie 0,01 m; gedeeltelijke overlap = niet conform; zoekstraal 50 m.

**Afleiden (4b).** Voegt alle toegestane bestemmingsvlakken samen tot één vlak en bepaalt per relevant element de topologische relatie tussen footprint en dat vlak, met de randtolerantie. Resultaat: `bm13:designationRelation` in graaf `<urn:bm13:derived>`.

**Valideren (4c).** Overtreding als de relatie niet `WITHIN`, `COVERED_BY` of `EQUALS` is. Gecorrigeerde versie van het voorbeeld in de PDF (§2.13).

**Verwacht rapport (4d).** Voorbeeld: een wand die buiten het vlak uitsteekt geeft `OVERLAPS` en `sh:conforms false`.

**In het portaal.** `insert-topological-relations.ttl` + `validate-topological-relations.ttl` doen hetzelfde, met de relatiewaarde `"CONTAINED BY"` en zonder parameterbestand.

```turtle
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R01_BestemmingWonen
    a bm13:PermitRule ;
    bm13:ruleId              "BM13-R01" ;
    bm13:ruleVersion         "0.1" ;
    bm13:ruleType            bm13:FunctionalDesignation ;
    bm13:checkedUse          "woonfunctie" ;
    bm13:allowedDesignation  "Wonen" ;          # repeat for "Gemengd" etc. if allowed
    bm13:areaType            bm13:Function ;
    bm13:elementProfile      bm13:BUILDING_VOLUME ;
    bm13:includeBelowGround  false ;
    bm13:boundaryTolerance   "0.01"^^xsd:decimal ;  # metres
    bm13:partialOverlapPolicy bm13:NonCompliant ;
    bm13:searchRadius        "50"^^xsd:decimal .
```

## 17 — BM13-R01 4b-afleiden.ttl {#17-bm13-r01-4b-afleiden-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R01-4b` |
| **Soort** | SPARQL-update (afleiden) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`regels/BM13-R01/4b-afleiden.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R01/4b-afleiden.ttl) |

SPARQL-update die de benodigde waarden afleidt.

```sparql
PREFIX bm13: <https://example.org/bm13/>
PREFIX geom: <https://rdf.bg/geometry/>
PREFIX dso:  <http://rdf.bg/areas/>
PREFIX ext:  <http://rdf.bg/geometry-ext.ttl#>

INSERT { GRAPH <urn:bm13:derived> {
    ?element bm13:designationRelation ?relation ;
             bm13:checkedAgainst      bm13:R01_BestemmingWonen .
} }
WHERE {
  # union of all allowed designation areas (DER-12)
  { SELECT (ext:union(?areaGeom) AS ?allowedArea) WHERE {
      bm13:R01_BestemmingWonen bm13:allowedDesignation ?allowed .
      GRAPH <urn:bm13:areas> { ?area dso:name ?allowed ; dso:geometry ?areaGeom . }
  } }
  bm13:R01_BestemmingWonen bm13:boundaryTolerance ?tol .
  # relevant elements only (F10), already transformed and projected (F09 + F07)
  GRAPH <https://rdf.bg/geometries/> {
    ?element a geom:Geometry ;
             bm13:inProfile bm13:BUILDING_VOLUME ;
             geom:projectionBase64Data ?footprint .
  }
  BIND(ext:topologicalRelation(?footprint, ?allowedArea, ?tol) AS ?relation)
}
```

## 18 — BM13-R01 4c-valideren.ttl {#18-bm13-r01-4c-valideren-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R01-4c` |
| **Soort** | SHACL (valideren) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`regels/BM13-R01/4c-valideren.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R01/4c-valideren.ttl) |

SHACL-shape die toetst.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .
@prefix geom: <https://rdf.bg/geometry/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R01_Shape
    a sh:NodeShape ;
    sh:targetSubjectsOf bm13:designationRelation ;
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:prefixes bm13:prefixes ;
        sh:message "BM13-R01: element {?globalId} is {?relation} the permitted Wonen area." ;
        sh:select """
            SELECT $this ?globalId ?relation
            WHERE {
                $this bm13:designationRelation ?relation ;
                      geom:globalId ?globalId .
                FILTER (?relation NOT IN ("WITHIN", "COVERED_BY", "EQUALS"))
            }
        """ ;
    ] ;
    sh:severity sh:Violation .

bm13:prefixes sh:declare
    [ sh:prefix "bm13" ; sh:namespace "https://example.org/bm13/"^^xsd:anyURI ] ,
    [ sh:prefix "geom" ; sh:namespace "https://rdf.bg/geometry/"^^xsd:anyURI ] .
```

## 19 — BM13-R01 4d-verwacht-rapport.ttl {#19-bm13-r01-4d-verwacht-rapport-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R01-4d` |
| **Soort** | voorbeeld/resultaat |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming |
| **Bestand** | [`regels/BM13-R01/4d-verwacht-rapport.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R01/4d-verwacht-rapport.ttl) |

Verwacht validatierapport of resultaatobject.

```turtle
# Verwacht SHACL-validatierapport als een wand buiten het bestemmingsvlak Wonen ligt.
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .
@prefix geom: <https://rdf.bg/geometry/> .

[ a sh:ValidationReport ;
  sh:conforms false ;
  sh:result [
      a sh:ValidationResult ;
      sh:focusNode      geom:IfcWall_63599 ;
      sh:resultMessage  "BM13-R01: element 1rMUAck_9AwBoilNJA$Dtt is OVERLAPS the permitted Wonen area." ;
      sh:resultSeverity sh:Violation ;
      sh:sourceShape    bm13:R01_Shape ;
      sh:value          "OVERLAPS" ] ] .
```

## 20 — BM13-R02 4a-parameters.ttl {#20-bm13-r02-4a-parameters-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R02-4a` |
| **Soort** | regelparameters (RDF) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#2** Maximale bouwhoogte |
| **Bestand** | [`regels/BM13-R02/4a-parameters.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R02/4a-parameters.ttl) |

Regelparameters in RDF: normwaarden, toleranties, uitzonderingen.

**Vraag.** Is de bouwhoogte, gemeten vanaf het peil, per hoogtevlak niet hoger dan de toegestane maximale bouwhoogte?

**Parameters (4a).** Normwaarde komt uit het vlak (`areaType MaximumBuildingHeight`); eenheid m; tolerantie 0,05 m; peil per zone via gemiddelde wegpeil of ontwerppeil; bron gemeentelijke hoogtegegevens, terugval AHN; uitzonderingen `IfcChimney` en `IfcTransportElement` tot 1,5 m extra; zoekstraal 50 m.

**Afleiden (4b).** Per aanvraag en hoogtevlak: gemeten hoogte = hoogste punt − peil. Schrijft een `bm13:HeightCheck` met gemeten waarde, toegestane waarde, tolerantie en het hoogste element.

**Valideren (4c).** Volledigheid (gemeten en toegestane hoogte moeten er zijn) en naleving (`gemeten > toegestaan + tolerantie` is een overtreding).

**Resultaatobject (4d).** SPARQL `CONSTRUCT` die per controle een `bm13:RuleCheckResult` maakt met status `Compliant` of `NonCompliant` (resultaatmodel, sectie 3).

**In het portaal.** `validate-height.ttl` is nog een vereenvoudigde controle ten opzichte van de hoogste wand. Het concept vervangt die zodra peil en hoogtevlakken in de dataset staan.

```turtle
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R02_MaximumBuildingHeight
    a bm13:PermitRule ;
    bm13:ruleId                    "BM13-R02" ;
    bm13:ruleVersion               "0.1" ;
    bm13:ruleType                  bm13:MaximumBuildingHeight ;
    bm13:areaType                  bm13:MaximumBuildingHeight ;   # value comes from the area
    bm13:unit                      "m" ;
    bm13:tolerance                 "0.05"^^xsd:decimal ;
    bm13:referenceLevelMethod      bm13:AverageRoadElevation ;    # or bm13:DesignElevation — set per zone
    bm13:referenceLevelSource      bm13:MunicipalHeightData ;
    bm13:fallbackReferenceSource   bm13:AHN ;
    bm13:elementProfile            bm13:HEIGHT_RELEVANT ;
    bm13:exemptClass               "IfcChimney" , "IfcTransportElement" ;
    bm13:exemptMaxExtraHeight      "1.5"^^xsd:decimal ;
    bm13:searchRadius              "50"^^xsd:decimal ;
    bm13:resultProperty            bm13:buildingHeight .
```

## 21 — BM13-R02 4b-afleiden.ttl {#21-bm13-r02-4b-afleiden-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R02-4b` |
| **Soort** | SPARQL-update (afleiden) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#2** Maximale bouwhoogte |
| **Bestand** | [`regels/BM13-R02/4b-afleiden.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R02/4b-afleiden.ttl) |

SPARQL-update die de benodigde waarden afleidt.

```sparql
PREFIX bm13: <https://example.org/bm13/>

INSERT { GRAPH <urn:bm13:derived> {
    ?check a bm13:HeightCheck ;
           bm13:case                   ?case ;
           bm13:heightArea             ?area ;
           bm13:buildingHeight         ?measured ;
           bm13:maximumPermittedHeight ?allowed ;
           bm13:heightTolerance        ?tol ;
           bm13:highestElement         ?element .
} }
WHERE {
  ?case a bm13:BuildingPermitCase ;
        bm13:referenceLevel ?peil ;
        bm13:partInHeightArea [ bm13:heightArea   ?area ;
                                bm13:highestPoint ?top ;
                                bm13:highestElement ?element ] .
  ?area bm13:normValue ?allowed .
  bm13:R02_MaximumBuildingHeight bm13:tolerance ?tol .
  BIND (?top - ?peil AS ?measured)
  BIND (IRI(CONCAT(STR(?case), "/R02/", STRAFTER(STR(?area), "#"))) AS ?check)
}
```

## 22 — BM13-R02 4c-valideren.ttl {#22-bm13-r02-4c-valideren-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R02-4c` |
| **Soort** | SHACL (valideren) |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#2** Maximale bouwhoogte |
| **Bestand** | [`regels/BM13-R02/4c-valideren.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R02/4c-valideren.ttl) |

SHACL-shape die toetst.

```turtle
@prefix sh:   <http://www.w3.org/ns/shacl#> .
@prefix bm13: <https://example.org/bm13/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

bm13:R02_Shape
    a sh:NodeShape ;
    sh:targetClass bm13:HeightCheck ;
    # completeness: every check must carry the numbers
    sh:property [ sh:path bm13:buildingHeight ;         sh:minCount 1 ; sh:severity sh:Violation ;
                  sh:message "BM13-R02: building height could not be derived." ] ;
    sh:property [ sh:path bm13:maximumPermittedHeight ; sh:minCount 1 ; sh:severity sh:Violation ;
                  sh:message "BM13-R02: no permitted height for this area." ] ;
    # compliance
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:prefixes bm13:prefixes ;
        sh:message "BM13-R02: height {?measured} m exceeds permitted {?allowed} m (+{?tol} m tolerance) in area {?area}." ;
        sh:select """
            SELECT $this ?measured ?allowed ?tol ?area
            WHERE {
                $this bm13:buildingHeight         ?measured ;
                      bm13:maximumPermittedHeight ?allowed ;
                      bm13:heightTolerance        ?tol ;
                      bm13:heightArea             ?area .
                FILTER (?measured > (?allowed + ?tol))
            }
        """ ;
    ] ;
    sh:severity sh:Violation .

bm13:prefixes sh:declare
    [ sh:prefix "bm13" ; sh:namespace "https://example.org/bm13/"^^xsd:anyURI ] .
```

## 23 — BM13-R02 4d-resultaatobject.ttl {#23-bm13-r02-4d-resultaatobject-ttl}

| | |
|---|---|
| **Portaal-id** | `BM13-R02-4d` |
| **Soort** | voorbeeld/resultaat |
| **Status** | concept (tracker Layer 4) |
| **BM13-checks** | **#2** Maximale bouwhoogte |
| **Bestand** | [`regels/BM13-R02/4d-resultaatobject.ttl`](https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/regels/BM13-R02/4d-resultaatobject.ttl) |

Verwacht validatierapport of resultaatobject.

```sparql
PREFIX bm13: <https://example.org/bm13/>

CONSTRUCT {
    ?check bm13:checkResult ?result .
    ?result a bm13:RuleCheckResult ;
            bm13:rule          bm13:R02_MaximumBuildingHeight ;
            bm13:status        ?status ;
            bm13:measuredValue ?measured ;
            bm13:allowedValue  ?allowed ;
            bm13:tolerance     ?tol ;
            bm13:evidence      ?element .
}
WHERE {
    ?check a bm13:HeightCheck ;
           bm13:buildingHeight ?measured ;
           bm13:maximumPermittedHeight ?allowed ;
           bm13:heightTolerance ?tol ;
           bm13:highestElement ?element .
    BIND (IF(?measured <= ?allowed + ?tol, bm13:Compliant, bm13:NonCompliant) AS ?status)
    BIND (IRI(CONCAT(STR(?check), "/result")) AS ?result)
}
```
