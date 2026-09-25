# Geometrische controle

## Het probleem

IDS toetst alleen **attributen en eigenschappen**, niet de geometrie. Toch hebben de meeste checks geometrie nodig: oppervlakten, hoogten, breedten en afstanden. In de praktijk gaat het vaak mis:

- Verschillende programma's berekenen uit hetzelfde IFC-model verschillende oppervlakten.
- Bij export wordt één vloer soms in meerdere IFC-objecten opgeknipt. Wie de oppervlakten simpelweg optelt, krijgt dan een verkeerde uitkomst.
- Schuine daken en dakkapellen zijn lastig te interpreteren volgens NEN 2580.
- Regels zoals de maximale goothoogte zijn nog niet softwareonafhankelijk vastgelegd.

## Aanpak: tweeledige controle

| Stap | Wie | Wat | Waarom |
|---|---|---|---|
| **1. Aanleveren** | CAD-software van de aanvrager | Berekent hoeveelheden en exporteert ze in IFC Quantity Sets (`Qto_…`) | De bronsoftware kent het model het best |
| **2. Narekenen** | Ontvangende software van de gemeente | Berekent de hoeveelheden opnieuw uit de solide geometrie en vergelijkt ze met stap 1 | Exportfouten komen zo aan het licht en het resultaat wordt betrouwbaar |

Voorwaarde: het model bevat **solide geometrie** (eis G1 in het [LOIN](#loin-geometrie)). Blijft het verschil tussen stap 1 en stap 2 onder de drempel (AC6), dan gebruikt de check de aangeleverde waarde. Ligt het verschil erboven, dan krijgt de beoordelaar een signaal.

## Technische opzet (laag 4)

De checks zijn in twee lagen opgebouwd, zodat ze niet van één softwarepakket afhangen:

```
IFC-bestand
   │  omzetten
   ▼
RDF-grafe (ifcOWL, RDF-vertaling van het IFC EXPRESS-schema)
   │  filteren
   ▼
SPARQL-regel per check  ──aanroep──▶  generieke geometriefuncties
                                        (calculate_projected_area,
                                         get_bounding_box, …)
   │
   ▼
Resultaat per check (voldoet / voldoet niet / handmatig beoordelen)
```

**Voorbeeld: goothoogte (verwant aan check #2)**

1. Een SPARQL-regel selecteert alle dakgeometrie.
2. Voor elk dakobject roept de regel `get_bounding_box` aan.
3. Uit de bounding boxes volgen de minimale en maximale hoogte ten opzichte van NAP, en daarmee goothoogte en bouwhoogte.
4. De uitkomst wordt vergeleken met de norm uit het omgevingsplan.

**Voorbeeld: bebouwingspercentage (check #3)**

`calculate_projected_area` op de bruto inhoud (9.05b) levert het bebouwde oppervlak. Dat wordt gedeeld door het oppervlak van het bouwwerkperceel (9.03b).

De SPARQL-regels en generieke functies komen in de gedeelde GitHub-repository (laag 4).

## Knelpunt: status van de RDF-vertaling van IFC

De aanpak steunt op een RDF-vertaling van IFC. Die vertaling is een open specificatie, maar **geen formeel vastgestelde buildingSMART-standaard** (in tegenstelling tot EXPRESS, het ISO-schema, en XSD, de XML-vertaling). Daardoor ontstaan risico's:

- **Vendor lock-in en versnippering:** commerciële tools ontwikkelen hun eigen ontologieën, waardoor regels niet uitwisselbaar zijn.
- **Extra mappinglagen:** domeinontologieën (bijv. uit FireBIM) voegen complexiteit toe.

**Standpunt BM13:** buildingSMART International moet deze ontologie formaliseren. Daarnaast is aansluiting gewenst op de Nederlandse informatiemodellen die basisregistraties en domeinmodellen semantisch verbinden. Dit wordt ingebracht via een strategische notitie aan de digiGO-stuurgroep en via de vragen aan buildingSMART.
