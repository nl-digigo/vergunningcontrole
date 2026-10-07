# Begrippenkader ruimten voor vergunningcontrole

Deze omgeving bevat het begrippenkader voor **ruimten die worden gebruikt bij de controle van gebouwmodellen in het kader van vergunningverlening**.

Het doel van dit begrippenkader is om een eenduidige, herbruikbare en mens- en machineleesbare beschrijving te geven van de ruimtelijke begrippen die nodig zijn om gebouwmodellen te kunnen toetsen aan regels en voorschriften voor vergunningcontrole.

De begrippen worden beschreven conform de **NL-SBB – Standaard voor het beschrijven van begrippen** van Geonovum.

* [NL-SBB – Standaard voor het beschrijven van begrippen](https://docs.geostandaarden.nl/nl-sbb/nl-sbb/)
* Vastgestelde versie NL-SBB: 10 oktober 2024

## Doel

Het begrippenkader ondersteunt het geautomatiseerd en eenduidig controleren van gebouwmodellen. Daarbij gaat het bijvoorbeeld om het herkennen en beoordelen van ruimten die in regelgeving, beoordelingsregels of vergunningprocedures een bepaalde functie of betekenis hebben.

Het begrippenkader vormt daarmee een semantische laag tussen:

1. wet- en regelgeving;
2. beoordelingsregels voor vergunningcontrole;
3. begrippen en definities;
4. het gebouwmodel;
5. geautomatiseerde controles.

De begrippen in dit repository beschrijven **wat met een ruimtebegrip wordt bedoeld**. De technische representatie van een gebouwmodel en de daadwerkelijke controlelogica vallen buiten dit begrippenkader.

## Toepassingsgebied

Het begrippenkader richt zich op ruimtelijke begrippen die relevant zijn voor de controle van gebouwmodellen.

Een begrip kan bijvoorbeeld betrekking hebben op:

* een functioneel type ruimte;
* een ruimte die vanuit regelgeving relevant is;
* een verzameling of categorie van ruimten;
* een ruimte met een specifieke gebruiksfunctie;
* een ruimte die onderdeel is van een beoordelingsregel;
* een ruimtelijke eigenschap die nodig is om een controle uit te voeren.

De begrippen worden zo beschreven dat ze onafhankelijk zijn van een specifieke softwareleverancier, BIM-platform of bestandsformaat.

## NL-SBB

De begrippen worden beschreven volgens de uitgangspunten van de **NL-SBB – Standaard voor het beschrijven van begrippen**.

NL-SBB beschrijft onder andere de volgende kenmerken van een begrip:

| Kenmerk             | Beschrijving                                            |
| ------------------- | ------------------------------------------------------- |
| Voorkeursterm       | De term waarmee het begrip bij voorkeur wordt aangeduid |
| Alternatieve term   | Een andere term waaronder het begrip bekend is          |
| Definitie           | De formele beschrijving van de betekenis van het begrip |
| Toelichting         | Nadere uitleg over de betekenis en toepassing           |
| Bron                | De bron die de betekenis van het begrip onderbouwt      |
| Voorbeeld           | Een voorbeeld van de toepassing van het begrip          |
| Bovenliggend begrip | Het meer algemene begrip waaronder het begrip valt      |
| Gerelateerd begrip  | Een begrip dat inhoudelijk samenhangt met het begrip    |

De standaard adviseert onder meer om voorkeurstermen als zelfstandige naamwoorden te formuleren en definities duidelijk en eenduidig vast te leggen.


De exacte lijst met begrippen wordt in dit repository vastgesteld en onderhouden.

## Bestand voor een begrip

Ieder begrip wordt volgens een vast sjabloon beschreven.

Bijvoorbeeld:

```markdown
# <Voorkeursterm>

## Identificatie

- **ID:** `<unieke identifier>`
- **Voorkeursterm:** `<term>`
- **Taal:** nl
- **Status:** concept

## Definitie

<Definitie van het begrip.>

## Toelichting

<Nadere toelichting op de betekenis en het gebruik van het begrip.>

## Alternatieve termen

- <alternatieve term>
- <alternatieve term>

## Bovenliggend begrip

- <bovenliggend begrip>

## Gerelateerde begrippen

- <gerelateerd begrip>
- <gerelateerd begrip>

## Bron

- <bron>
- <URL naar bron indien beschikbaar>

## Voorbeeld

<Voorbeeld van een toepassing van het begrip in een gebouwmodel of vergunningcontrole.>

## Opmerking

<Eventuele aanvullende informatie.>
```

## Eisen aan definities

Een definitie beschrijft de betekenis van het begrip binnen het domein van vergunningcontrole.

Bij het opstellen van definities gelden de volgende uitgangspunten:

* de definitie beschrijft de betekenis van het begrip;
* de definitie is zo veel mogelijk zelfstandig leesbaar;
* de definitie gebruikt geen onnodig technische implementatietermen;
* de definitie bevat geen voorbeelden;
* een voorbeeld wordt afzonderlijk opgenomen;
* waar mogelijk wordt de definitie gebaseerd op een gezaghebbende bron;
* de bron van een juridische definitie wordt expliciet vastgelegd;
* verschillen tussen een juridische betekenis en een technische betekenis worden expliciet gemaakt;
* begrippen worden niet gedefinieerd door uitsluitend naar zichzelf te verwijzen.

Waar regelgeving een begrip definieert, heeft de juridische bron voorrang boven een zelf geformuleerde definitie.

## Relatie met gebouwmodellen

Een begrip in dit repository beschrijft **de betekenis van een ruimte**, niet de manier waarop die ruimte technisch wordt gemodelleerd.

Bijvoorbeeld:

```text
Begrip
  ↓
"verblijfsruimte"
  ↓
betekenis
  ↓
object(en) in een gebouwmodel
  ↓
controle
```

De koppeling tussen een begrip en een specifiek BIM-/gebouwmodelconcept kan daarom in een afzonderlijk informatiemodel of mapping worden vastgelegd.

Hiermee wordt voorkomen dat de begrippenlijst afhankelijk wordt van één technische modellering.

## Relatie met vergunningcontroles

De begrippen zijn bedoeld als bouwstenen voor vergunningcontroles.

Een controle kan bijvoorbeeld conceptueel worden beschreven als:

```text
Controle
│
├── gebruikt begrip: <ruimtebegrip>
├── eigenschap: <ruimtelijke eigenschap>
├── waarde: <vereiste waarde>
├── bron: <regelgevende bron>
└── resultaat: voldoet / voldoet niet / onbekend
```

De controle zelf maakt geen onderdeel uit van de definitie van het begrip.

Het begrip beschrijft **wat iets betekent**; een controle beschrijft **wat ermee gecontroleerd moet worden**.

## Versiebeheer

Wijzigingen in begrippen worden via Git beheerd.

Een wijziging kan bijvoorbeeld betrekking hebben op:

* toevoeging van een nieuw begrip;
* wijziging van een definitie;
* toevoeging of wijziging van een bron;
* toevoeging van een alternatieve term;
* wijziging van een relatie tussen begrippen;
* vervallen van een begrip.

Bij inhoudelijke wijzigingen wordt in de commit of pull request beschreven:

1. wat er is gewijzigd;
2. waarom de wijziging nodig is;
3. welke bron de wijziging ondersteunt;
4. welke andere begrippen mogelijk door de wijziging worden geraakt.

## Status van begrippen

Een begrip kan één van de volgende statussen hebben:

| Status        | Betekenis                            |
| ------------- | ------------------------------------ |
| `concept`     | Het begrip is in ontwikkeling        |
| `ter-review`  | Het begrip ligt ter beoordeling voor |
| `vastgesteld` | Het begrip is vastgesteld            |
| `vervallen`   | Het begrip wordt niet meer gebruikt  |

## Bronnen

Voor ieder begrip wordt vastgelegd op welke bron(nen) de definitie of betekenis is gebaseerd.

Mogelijke bronnen zijn onder andere:

* wet- en regelgeving;
* officiële normen;
* standaarden;
* beleidsdocumenten;
* beoordelingsrichtlijnen;
* vergunningvoorschriften;
* afspraken binnen het toepassingsgebied.

De bron moet voldoende specifiek zijn om de betekenis van het begrip te kunnen herleiden.

## Relatie met andere standaarden

Dit begrippenkader bevindt zich op het niveau van het **model van begrippen**.

Het kan daardoor worden gebruikt naast informatiemodellen en technische gegevensmodellen.

De NL-SBB-standaard beschrijft dit als MIM-niveau 1. Informatiemodellen bevinden zich op de daarop aansluitende niveaus.

De architectuur kan daarmee als volgt worden weergegeven:

```text
┌─────────────────────────────────────┐
│ Wet- en regelgeving                 │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│ Begrippenkader                      │
│ NL-SBB                              │
│                                     │
│ Ruimte                              │
│ Verblijfsruimte                     │
│ Verkeersruimte                      │
│ ...                                 │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│ Informatiemodel / gebouwmodel       │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│ Geautomatiseerde vergunningcontrole │
└─────────────────────────────────────┘
```

## Bijdragen

Nieuwe begrippen en wijzigingen worden bij voorkeur via een pull request toegevoegd.

Een pull request bevat minimaal:

* de voorgestelde wijziging;
* de reden voor de wijziging;
* de definitie;
* de bron;
* de relevante relaties met andere begrippen;
* eventuele gevolgen voor bestaande begrippen of controles.

## Openstaande werkzaamheden

* [ ] Vaststellen van de scope van het begrippenkader
* [ ] Inventariseren van bestaande ruimtebegrippen
* [ ] Vaststellen van voorkeurstermen
* [ ] Vaststellen van definities
* [ ] Vastleggen van juridische en normatieve bronnen
* [ ] Vastleggen van alternatieve termen
* [ ] Vastleggen van hiërarchische relaties
* [ ] Vastleggen van gerelateerde begrippen
* [ ] Vaststellen van unieke identifiers
* [ ] Afstemmen van begrippen met bestaande begrippenkaders
* [ ] Uitwerken van de relatie met het gebouw-/BIM-model
* [ ] Uitwerken van de relatie met vergunningcontroles
* [ ] Publiceren van het begrippenkader als machineleesbare gegevens, bijvoorbeeld SKOS

## Licentie

De licentie van dit begrippenkader wordt hier vastgelegd.

## Referentie

Dit repository gebruikt de **NL-SBB – Standaard voor het beschrijven van begrippen** als uitgangspunt voor het beschrijven en beheren van de begrippen.

De actuele standaard is beschikbaar via Geonovum:

[NL-SBB – Standaard voor het beschrijven van begrippen](https://docs.geostandaarden.nl/nl-sbb/nl-sbb/)

```
```
