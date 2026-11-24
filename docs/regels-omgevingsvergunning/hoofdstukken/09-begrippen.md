# Begrippen

| Begrip | Betekenis |
|---|---|
| Afleiden | Een waarde berekenen uit het model en in de dataset zetten, zodat een shape die kan toetsen. Gebeurt met een SPARQL-update. |
| Bestemmingsvlak | Vlak uit het omgevingsplan (DSO) met een bestemming, bijv. *wonen* of *gemengd*. In de dataset een `dso:area` in de graaf `<areas.ttl>`. |
| Bounding box | Kleinste rechthoekige doos om een geometrie, vastgelegd als `geom:bboxMinX` … `geom:bboxMaxZ`. |
| Footprint | Bovenaanzicht van een element: de projectie op het XY-vlak (`geom:projectionBase64Data`). |
| Graaf (named graph) | Deel van de dataset met een eigen naam (IRI). Gebruikt om IFC-model, geometrie, ontologie en bestemmingsvlakken gescheiden te houden. |
| ifcOWL | Weergave van het IFC-schema als OWL-ontologie, zodat een IFC-model als RDF te bevragen is. |
| Peil | Hoogte waarvandaan de bouwhoogte wordt gemeten. Per zone: gemiddeld wegpeil of ontwerppeil. |
| Portaal-id | Naam van een query of shape in het VNG Portaal, bijv. `InsertAreas`. Kolom `id` in `data/catalogus.csv`. |
| SHACL | W3C-taal om eisen aan RDF-gegevens vast te leggen en te toetsen. Uitkomst is een validatierapport. |
| Shape | Eén SHACL-eis: waarop hij van toepassing is (target) en waaraan dat moet voldoen (constraint). |
| SPARQL | W3C-taal om RDF-gegevens te bevragen (query) en te wijzigen (update). |
| Topologische relatie | Ruimtelijke verhouding tussen twee vlakken, bijv. *ligt binnen*, *overlapt*, *raakt*. |
| URI | Vast webadres van een bestand. Workflows verwijzen hiermee naar een query of shape. |
| Validatierapport | Uitkomst van SHACL: `sh:conforms` (true/false) en per overtreding een `sh:ValidationResult` met melding. |
| Workflow | Volgorde van stappen in het VNG Portaal per regel: dataset opbouwen, SPARQL, SHACL. |
