# Open punten

| Nr | Onderwerp | Toelichting | Voorstel |
|---|---|---|---|
| OP-1 | Namespaces | Concepten in `regels/` gebruiken `https://example.org/bm13/` en `https://rdf.bg/…`; het portaal gebruikt `https://vng.nl/…` en `http://vng.nl/…`. | Eén VNG-namespace kiezen (bijv. via w3id.org) en concepten daarop aanpassen. |
| OP-2 | Waarden voor topologische relatie | Portaal: `"CONTAINED BY"`. Concept R01: `WITHIN`, `COVERED_BY`, `EQUALS`. | Eén lijst vastleggen, bij voorkeur DE-9IM/OGC-namen. |
| OP-3 | Bestemmingsgroepen regel 1 | `insert-areas.ttl` haalt *wonen* en *gemengd* op, `insert-topological-relations.ttl` gebruikt alleen *wonen*, de weergave toont beide. | Toegestane groepen als parameter (`bm13:allowedDesignation`) en overal dezelfde gebruiken. |
| OP-4 | Zoekstraal | Portaal 400 m, concept 50 m. | Eén waarde per regel in 4a-parameters. |
| OP-5 | GlobalId in R01-validatie | `4c-valideren.ttl` leest `geom:globalId` op hetzelfde subject als `bm13:designationRelation`, maar die staan in verschillende grafen. Werkt alleen met een samengevoegde standaardgraaf. | In de afleidstap de GlobalId meeschrijven naar `<urn:bm13:derived>`. |
| OP-6 | IRI in R02-afleiding | `STRAFTER(STR(?area), "#")` geeft een lege tekst voor IRI's zonder `#` (DSO-vlakken hebben `/`). Verschillende vlakken krijgen dan dezelfde controle-IRI. | Bijv. `ENCODE_FOR_URI(STR(?area))` of het `dso:id` gebruiken. |
| OP-7 | Hoogtecontrole | `validate-height.ttl` vergelijkt met de hoogste wand (1 eenheid), niet met de maximale bouwhoogte ten opzichte van peil. | Vervangen door concept R02 zodra peil en hoogtevlakken beschikbaar zijn. |
| OP-8 | Eigen functies | `vng:dsoArea`, `vng:gmBoundingBox`, `vng:gmPlane`, `vng:gmProjection`, `vng:gmTopology` (en `ext:union`, `ext:topologicalRelation` in de concepten) bestaan alleen in het VNG Portaal. | Signatuur en gedrag per functie beschrijven, zodat leveranciers dezelfde uitkomst kunnen leveren. |
| OP-9 | Duurzame URI | De GitHub Pages-URI hangt af van de organisatie en repositorynaam. | Een w3id.org-doorverwijzing, bijv. `https://w3id.org/vng/bm13/`, zodat een verhuizing workflows niet breekt. |
| OP-10 | Weergave regel 1 | De shape controleert alle elementen, de weergavequery toont alleen wanden. | Weergave uitbreiden naar alle elementtypen. |
| OP-11 | Meldingstekst R01 | „element … is OVERLAPS the permitted Wonen area” leest slecht. | Bijv. „relation to the permitted area is OVERLAPS”. |
| OP-12 | Licentie | Voorstel: CC BY 4.0. | Bevestigen. |

## Technische aanpassingen bij het overnemen uit de tracker

- `regels/BM13-R01/4d-verwacht-rapport.ttl`: `@prefix`-regels toegevoegd (stond zonder, dus geen geldig Turtle).
- `regels/BM13-R02/4c-valideren.ttl`: declaratie `bm13:prefixes` toegevoegd (werd gebruikt maar niet gedeclareerd).
- Verder is de tekst van de tracker ongewijzigd.
