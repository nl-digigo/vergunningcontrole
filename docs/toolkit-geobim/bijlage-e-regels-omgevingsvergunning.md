# Machineleesbare regels omgevingsvergunning — specificaties {#regels-omgevingsvergunning}

Uitvoerbare regelcodering (laag 4) voor de BM13-checks, uitgedrukt als [SPARQL 1.1](https://www.w3.org/TR/sparql11-overview/) (afleiden) en [SHACL](https://www.w3.org/TR/shacl/) (toetsen).

| | |
|---|---|
| **Bron** | `regels-omgevingsvergunning` v0.1 — 23 bestanden |
| **Talen** | SPARQL 1.1 (query en update), SHACL (Turtle) |
| **Uitvoering** | VNG Portaal (RDF Ltd), met eigen functies `vng:*` |
| **URI** | `https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/{map}/{bestand}.ttl` |
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

## 01 — insert-ifc4-add2-ontology.ttl {#01-insert-ifc4-add2-ontology-ttl}

| | |
|---|---|
| **Portaal-id** | `InsertIFC4ADD2Ontology` |
| **Soort** | SPARQL-update |
| **Status** | in gebruik (VNG Portaal) |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte |
| **Bestand** | [`sparql/insert-ifc4-add2-ontology.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-ifc4-add2-ontology.ttl) |

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
| **Bestand** | [`sparql/insert-areas.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-areas.ttl) |

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
| **Bestand** | [`sparql/insert-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-bboxes.ttl) |

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
| **Bestand** | [`sparql/insert-projections.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-projections.ttl) |

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
| **Bestand** | [`sparql/insert-topological-relations.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-topological-relations.ttl) |

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
                    []  a             dso:area ;
                        dso:group     ?group ;
                        dso:geometry  ?base64Data2 .
                VALUES ?group { "wonen" "gemengd" }
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
| **Bestand** | [`sparql/insert-topological-relations-ifcwall-ifcroof.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-topological-relations-ifcwall-ifcroof.ttl) |

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
                    []  a             dso:area ;
                        dso:group     ?group ;
                        dso:geometry  ?base64Data2 .
                VALUES ?group { "wonen" "gemengd" }
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
| **Bestand** | [`sparql/retrieve-building-elements.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrieve-building-elements.ttl) |

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
| **Bestand** | [`shacl/validate-topological-relations.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl) |

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
@prefix ifc:  <https://standards.buildingsmart.org/IFC/DEV/IFC4/ADD2/OWL#> .

geom:GeometryShape
    a sh:NodeShape ;
	sh:targetClass ifc:IfcWall, ifc:IfcRoof ;
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
| **Bestand** | [`shacl/validate-height.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-height.ttl) |

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
| **Bestand** | [`shacl/validate-bboxes-ifcwall.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-bboxes-ifcwall.ttl) |

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
| **Bestand** | [`shacl/validate-model-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-model-bboxes.ttl) |

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
| **Bestand** | [`shacl/validate-bboxes.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-bboxes.ttl) |

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
| **Bestand** | [`sparql/weergave/retrieve-topological-relation-violations.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/weergave/retrieve-topological-relation-violations.ttl) |

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
| **Bestand** | [`sparql/weergave/retrieve-living-areas.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/weergave/retrieve-living-areas.ttl) |

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
| **Bestand** | [`sparql/weergave/retrieve-geometry-by-global-id-template.ttl`](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/weergave/retrieve-geometry-by-global-id-template.ttl) |

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
