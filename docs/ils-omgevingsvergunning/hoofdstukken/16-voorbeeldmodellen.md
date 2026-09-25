# Voorbeeldmodellen

Bij deze ILS hoort een set **voorbeeldmodellen in IFC**. Ze staan in de map [`voorbeeldmodellen/`](../voorbeeldmodellen/) naast de IDS-bestanden, zodat modelleurs, softwareleveranciers en gemeenten kunnen zien hoe de specificaties er in een echt bestand uitzien.

Bij elke specificatie in [Level of Information Need](#loin) staat een fragment uit deze modellen: de STEP-regels van een object dat aan die specificatie voldoet, met de bijbehorende property sets en de classificatieverwijzing. Zo is per specificatie te zien hoe de eigenschappen in het IFC-bestand terechtkomen.

## Herkomst en status

De modellen komen uit het project **RottaNova / Kievitsweg** (Kuiper Compagnons), een appartementencomplex met woon- en kantoorfuncties. Het zijn **oefenmodellen**, geen ingediende aanvraag:

- De ruimtelijke objecten zijn bijgewerkt naar de namen en bepalingsmethoden van deze ILS, en voorzien van de classificatie *Omgevingswet-Ruimten*.
- Waar gegevens in het bronmodel ontbraken, staat een **placeholder**. Elk object met een placeholder draagt een property set `BM13_Placeholders` met de namen van de betreffende eigenschappen. Het gaat vooral om brandeigenschappen van deuren en ramen (`FireRating` = `ONBEKEND`, `FireExit`/`SelfClosing`/`SmokeStop` = `false`) en om de adresgegevens.
- De investering in `Pset_ProjectCommon.ProjectInvestmentEstimate` (10 miljoen euro) is een fictief bedrag, bedoeld om het datatype en de valuta te laten zien.

<p class="note">Gebruik deze modellen om te leren en te testen, niet als bewijs van een correcte aanvraag. De placeholders moeten in een echte aanvraag door werkelijke waarden zijn vervangen.</p>

## De bestanden

Eén samengesteld model (twee exportversies) en dertien deelmodellen met telkens één soort object, handig om een enkele specificatie te toetsen.

| Bestand | MB | Objecten | Belangrijkste ObjectTypes |
|---|---|---|---|
| `Kievitsweg_R23_ILS_Spaces_update.ifc` | 17,4 | 4.486 | Restruimte (90), Restgebied (70), Verblijfsruimte (43), Gebruiksfunctie (41) |
| `Kievitsweg_R25_ILS_Spaces_20250815_LoGeoRef50.ifc` | 14,4 | 4.205 | Restruimte (91), Restgebied (82), Gebruikseenheid (46), Verblijfsruimte (44) |
| `Kievitsweg_Brandcompartiment.ifc` | 11,1 | 56 | Gebruikseenheid (35), Brandcompartiment (23) |
| `Kievitsweg_Eigendom-_en_gebruikseenheid.ifc` | 11,1 | 33 | Gebruikseenheid (35) |
| `Kievitsweg_Gebruiksfunctie.ifc` | 11,2 | 48 | Gebruiksfunctie (41), Bouwlaaginhoud (9), Gebouwinhoud (1) |
| `Kievitsweg_Gebruiksgebied.ifc` | 11,1 | 37 | Gebruiksgebied (29) |
| `Kievitsweg_Nevengebruiksfunctie.ifc` | 11,1 | 8 | Nevengebruiksfunctie (4) |
| `Kievitsweg_Restgebied.ifc` | 11,2 | 78 | Restgebied (70) |
| `Kievitsweg_Restruimte.ifc` | 11,2 | 98 | Restruimte (90) |
| `Kievitsweg_Verblijfsruimte.ifc` | 11,1 | 51 | Verblijfsruimte (43) |
| `Kievitsweg_Terreinvolume.ifc` | 11,1 | 12 | Bouwwerkperceel, Kadastraal perceel, Bebouwd en Onbebouwd Terrein |
| `Kievitsweg_IsExternalTrue_LoadBearingTrue.ifc` | 11,1 | 25 | fysieke elementen: buitenwanden, dragend |
| `Kievitsweg_IsExternalTrue_LoadBearingFalse.ifc` | 12,3 | 670 | fysieke elementen: buitenwanden, niet-dragend |
| `Kievitsweg_IsExternalFalse_LoadBearingTrue.ifc` | 11,3 | 125 | fysieke elementen: binnenwanden, dragend |
| `Kievitsweg_IsExternalFalse_LoadBearingFalse.ifc` | 11,7 | 476 | fysieke elementen: binnenwanden, niet-dragend |

Alle modellen zijn IFC4, gegeorefereerd in EPSG:28992 met `VerticalDatum` EPSG:5709, en `IfcMapConversion.Scale` staat expliciet op 0,001 (millimeters naar meters).

## Zelf toetsen

De modellen en de IDS-bestanden horen bij elkaar. Met een IDS 1.0-conforme validator (bijvoorbeeld IfcTester uit IfcOpenShell, of de buildingSMART Validation Service) toets je een model tegen de specificaties uit [`ids/`](../ids/):

```bash
pip install ifcopenshell ifctester
python -m ifctester ids/26-9.12b-Verblijfsruimte.ids voorbeeldmodellen/Kievitsweg_Verblijfsruimte.ifc
```

Alle 15 modellen slagen op de specificaties die op ze van toepassing zijn.

## Wat er bewust nog niet goed in zit

Deze punten zijn blijven staan, omdat ze een keuze of modelleerwerk vragen. Ze zijn bruikbaar als oefenmateriaal:

- **Brandcompartimenten zijn `IfcSpace`**, terwijl specificatie 9.16a alleen `IfcZone` en `IfcSpatialZone` toetst. Volgens de [modelleerrichtlijn](#modelleerrichtlijn) hoort een compartiment een zone te zijn.
- **Gebieden zijn `IfcSpace`** in plaats van het aanbevolen `IfcSpatialZone`.
- **Dubbele `Pset_DoorCommon`**: de export levert naast de standaard set een tweede set met dezelfde naam en eigen eigenschappen (`Geluidwering`, `Brandweer_ingang`). Dat is te zien in het fragment bij specificatie 9.18e.
- **Tarraruimte en tarra-inhoud ontbreken**, net als hoeveelheden (inhoud) op de bouwlagen.
- **Het kadastraal perceel is een `IfcSpace`**, terwijl de ILS `IfcSpatialZone` voorschrijft.

Een volledige beschrijving van wat er is aangepast en wat er nog openstaat, staat in `voorbeeldmodellen/LEESMIJ.md`.
