# Regels BM13-R01 t/m R17

Per BM13-regel volgt de uitwerking de vier delen van de tracker (tabblad *Machine-readable rule, Layer 4*):

| Deel | Bestand in `regels/BM13-Rxx/` | Inhoud |
|---|---|---|
| 4a | `4a-parameters.ttl` | regelparameters in RDF: normwaarden, toleranties, uitzonderingen |
| 4b | `4b-afleiden.ttl` | SPARQL-update die de benodigde waarden afleidt |
| 4c | `4c-valideren.ttl` | SHACL-shape die toetst |
| 4d | `4d-*.ttl` | verwacht validatierapport of resultaatobject |

De bestanden in `regels/` zijn **concepten**. Ze gebruiken nog de werk-namespace `https://example.org/bm13/`. Zodra een concept in het VNG Portaal draait, komt de uitvoerbare versie in `sparql/` of `shacl/` en verwijst de workflow naar die URI.

## Status

| Regel | Naam | Portaal: SPARQL / SHACL | Concept (tracker) |
|---|---|---|---|
| BM13-R01 | Gebruiksfunctie komt overeen met bestemming | 5 / 3 | [concept](regels/BM13-R01/) |
| BM13-R02 | Maximale bouwhoogte | 5 / 2 | [concept](regels/BM13-R02/) |
| BM13-R03 | Maximaal bebouwingspercentage | nog niet | te doen |
| BM13-R04 | Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen | nog niet | te doen |
| BM13-R05 | Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor | nog niet | te doen |
| BM13-R06 | Maximum aantal bouwlagen | nog niet | te doen |
| BM13-R07 | Brandcompartimenten | nog niet | te doen |
| BM13-R08 | Brandwerendheid | nog niet | te doen |
| BM13-R09 | Vrije breedte | nog niet | te doen |
| BM13-R10 | Hoogteverschil | nog niet | te doen |
| BM13-R11 | Rc-waarde | nog niet | te doen |
| BM13-R12 | U-waarde | nog niet | te doen |
| BM13-R13 | MPG | nog niet | te doen |
| BM13-R14 | Vluchtwegen | nog niet | te doen |
| BM13-R15 | Loopafstand | nog niet | te doen |
| BM13-R16 | Vluchtbreedte | nog niet | te doen |
| BM13-R17 | Daglicht | nog niet | te doen |

<span id="bm13-r01"></span>

## BM13-R01 Gebruiksfunctie komt overeen met bestemming

**Vraag.** Ligt het bouwvolume met een woonfunctie volledig binnen een bestemmingsvlak waar wonen is toegestaan?

**Parameters (4a).** Gecontroleerd gebruik `woonfunctie`; toegestane bestemming `Wonen` (uitbreidbaar met `Gemengd` e.d.); elementprofiel `BUILDING_VOLUME`; ondergrondse delen niet meegenomen; randtolerantie 0,01 m; gedeeltelijke overlap = niet conform; zoekstraal 50 m.

**Afleiden (4b).** Voegt alle toegestane bestemmingsvlakken samen tot één vlak en bepaalt per relevant element de topologische relatie tussen footprint en dat vlak, met de randtolerantie. Resultaat: `bm13:designationRelation` in graaf `<urn:bm13:derived>`.

**Valideren (4c).** Overtreding als de relatie niet `WITHIN`, `COVERED_BY` of `EQUALS` is. Gecorrigeerde versie van het voorbeeld in de PDF (§2.13).

**Verwacht rapport (4d).** Voorbeeld: een wand die buiten het vlak uitsteekt geeft `OVERLAPS` en `sh:conforms false`.

**In het portaal.** `insert-topological-relations.ttl` + `validate-topological-relations.ttl` doen hetzelfde, met de relatiewaarde `"CONTAINED BY"` en zonder parameterbestand.

<span id="bm13-r02"></span>

## BM13-R02 Maximale bouwhoogte

**Vraag.** Is de bouwhoogte, gemeten vanaf het peil, per hoogtevlak niet hoger dan de toegestane maximale bouwhoogte?

**Parameters (4a).** Normwaarde komt uit het vlak (`areaType MaximumBuildingHeight`); eenheid m; tolerantie 0,05 m; peil per zone via gemiddelde wegpeil of ontwerppeil; bron gemeentelijke hoogtegegevens, terugval AHN; uitzonderingen `IfcChimney` en `IfcTransportElement` tot 1,5 m extra; zoekstraal 50 m.

**Afleiden (4b).** Per aanvraag en hoogtevlak: gemeten hoogte = hoogste punt − peil. Schrijft een `bm13:HeightCheck` met gemeten waarde, toegestane waarde, tolerantie en het hoogste element.

**Valideren (4c).** Volledigheid (gemeten en toegestane hoogte moeten er zijn) en naleving (`gemeten > toegestaan + tolerantie` is een overtreding).

**Resultaatobject (4d).** SPARQL `CONSTRUCT` die per controle een `bm13:RuleCheckResult` maakt met status `Compliant` of `NonCompliant` (resultaatmodel, sectie 3).

**In het portaal.** `validate-height.ttl` is nog een vereenvoudigde controle ten opzichte van de hoogste wand. Het concept vervangt die zodra peil en hoogtevlakken in de dataset staan.
