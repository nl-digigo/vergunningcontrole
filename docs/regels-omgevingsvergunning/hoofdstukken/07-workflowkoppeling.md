# Koppeling met de workflows

De workflows van het VNG Portaal (`SeedData/Workflows/vng_workflow_embedded-*.xml`, één per regel) verwijzen niet meer naar lokale XML-bestanden. Ze verwijzen naar een vaste URI in deze repository. Een verbetering die hier op `main` wordt gepubliceerd, werkt daardoor direct in de online test en in batchverwerking.

## URI-afspraak

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{map}/{bestand}.ttl
```

| Map | Voorbeeld |
|---|---|
| `sparql/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl` |
| `shacl/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl` |
| `sparql/weergave/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-living-areas.ttl` |

Afspraken:

- **Bestandsnaam = sleutel.** Een bestandsnaam verandert niet meer zodra een workflow ernaar verwijst. Een nieuwe versie met andere werking krijgt een nieuwe naam.
- **Bestandsnamen volgen het portaal.** `insert-areas.ttl` heet in het portaal en hier hetzelfde.
- **Eén query of shape per bestand.** Beschrijving en metadata staan niet in het bestand, maar in de hoofdstukken (ReSpec) en in `data/catalogus.csv`.

## Tot de samenvoeging met main

De URI hierboven werkt pas na samenvoeging van de branch `BM13/machineleesbare-regels` met `main` en publicatie via GitHub Pages. Tot die tijd kan het portaal dezelfde bestanden lezen van de branch:

```
https://raw.githubusercontent.com/nl-digigo/vergunningcontrole/refs/heads/BM13/machineleesbare-regels/docs/regels-omgevingsvergunning/{map}/{bestand}.ttl
```

Na de samenvoeging alleen het voorvoegsel vervangen; de rest van het pad blijft gelijk.

## Voorbeeld van een workflowstap

```xml
<step>
  <name><![CDATA[Insert Areas]]></name>
  <type><![CDATA[SPARQL]]></type>
  <parameters>
    <uri><![CDATA[https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl]]></uri>
  </parameters>
</step>
<step>
  <name><![CDATA[Validate Topological Relations]]></name>
  <type><![CDATA[SHACL]]></type>
  <parameters>
    <uri><![CDATA[https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl]]></uri>
  </parameters>
</step>
```

SHACL-stappen gebruiken in het portaal nu nog `shapeRef` (portaal-id). Kolom `id` van [`data/catalogus.csv`](data/catalogus.csv) geeft per portaal-id de URI.

## Overzicht per regel

| Regel | Workflow | SPARQL | SHACL |
|---|---|---|---|
| BM13-R01 | `vng_workflow_embedded-1.xml` | `insert-ifc4-add2-ontology.ttl`, `insert-areas.ttl`, `insert-bboxes.ttl`, `insert-projections.ttl`, `insert-topological-relations.ttl` | `ValidateTopologicalRelations`, `ValidateBBoxes-IfcWall`, `ValidateModelBBoxes` |
| BM13-R02 | `vng_workflow_embedded-2.xml` | `insert-ifc4-add2-ontology.ttl`, `insert-areas.ttl`, `insert-bboxes.ttl`, `insert-projections.ttl`, `insert-topological-relations.ttl` | `ValidateTopologicalRelations`, `ValidateHeight` |
| BM13-R03 | `vng_workflow_embedded-3.xml` | — | — |
| BM13-R04 | `vng_workflow_embedded-4.xml` | — | — |
| BM13-R05 | `vng_workflow_embedded-5.xml` | — | — |
| BM13-R06 | `vng_workflow_embedded-6.xml` | — | — |
| BM13-R07 | `vng_workflow_embedded-7.xml` | — | — |
| BM13-R08 | `vng_workflow_embedded-8.xml` | — | — |
| BM13-R09 | `vng_workflow_embedded-9.xml` | — | — |
| BM13-R10 | `vng_workflow_embedded-10.xml` | — | — |
| BM13-R11 | `vng_workflow_embedded-11.xml` | — | — |
| BM13-R12 | `vng_workflow_embedded-12.xml` | — | — |
| BM13-R13 | `vng_workflow_embedded-13.xml` | — | — |
| BM13-R14 | `vng_workflow_embedded-14.xml` | — | — |
| BM13-R15 | `vng_workflow_embedded-15.xml` | — | — |
| BM13-R16 | `vng_workflow_embedded-16.xml` | — | — |
| BM13-R17 | `vng_workflow_embedded-17.xml` | — | — |
