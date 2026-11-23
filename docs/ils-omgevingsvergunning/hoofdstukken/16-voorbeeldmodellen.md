# Voorbeeldmodellen

Bij deze ILS hoort een **voorbeeldmodel in IFC**: [`BM13_SPA_XX_M3D_ZZZ_Qto.ifc`](voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc), in de map `voorbeeldmodellen/` naast de IDS-bestanden. Modelleurs, softwareleveranciers en gemeenten kunnen ermee zien hoe de specificaties er in een echt bestand uitzien.

Bij elke specificatie in [Level of Information Need](#loin) staat een fragment uit dit model: de STEP-regels van een object dat bij die specificatie hoort, met de gevraagde property sets, de hoeveelheden, de classificatieverwijzing en, bij zones, de groepering. Waar het model nog niet aan de specificatie voldoet, staat dat onder het fragment.

## Herkomst en status

Het model is een **tussenwoning** (*Woning fam. B*, Driebergen-Rijsenburg) in de bestaande bouwkundige staat. Het is gemodelleerd in Revit 2026 en op 17 november 2026 geëxporteerd naar IFC.

- **Schema:** IFC4X3_ADD2 (ISO 16739-1:2024).
- **Georeferentie:** `IfcMapConversion` met `IfcProjectedCRS` EPSG:7415 (RD + NAP); `Scale` is 0,001, omdat de lengte-eenheid millimeter is. Oppervlakten staan in m², inhouden in m³.
- **Hoeveelheden:** de ruimten en gebieden hebben `Qto_SpaceBaseQuantities` of `Qto_SpatialZoneBaseQuantities`. De ILS vraagt geen hoeveelheden in het model; ze staan erin als controlemateriaal.
- **Classificatie:** de ruimtelijke objecten verwijzen naar de classificatie *Omgevingswet-Ruimten*.

<p class="note">Dit is een oefenmodel, geen ingediende aanvraag. Gebruik het om te leren en te testen, niet als bewijs van een correcte aanvraag.</p>

## Wat er in het model staat

| Entiteit | ObjectType | Aantal | Specificatie |
|---|---|---|---|
| `IfcProject` | — | 1 | 9.02 |
| `IfcSite` | Perceel | 1 | 9.03a |
| `IfcBuilding` | (leeg) | 1 | 9.05a |
| `IfcBuildingStorey` | Bouwlaag | 5 | 9.06a |
| `IfcBuildingStorey` | NAP | 1 | — (referentieniveau) |
| `IfcSpace` | Functieruimte | 16 | 9.12a |
| `IfcSpace` | Verblijfsruimte | 2 | 9.12b |
| `IfcSpace` | Bedruimte | 4 | 9.12c |
| `IfcSpace` | Restruimte | 4 | 9.12d |
| `IfcSpace`, `IfcExternalSpatialElement` | Buitenruimte | 1 + 3 | 9.13 |
| `IfcSpatialZone` | Bouwwerkperceel | 1 | 9.03b |
| `IfcSpatialZone` | Kadastraal Perceel | 1 | 9.04 |
| `IfcSpatialZone` | Bouwlaaginhoud | 4 | 9.06b |
| `IfcSpatialZone` | Gebruiksfunctie | 5 | 9.08 |
| `IfcSpatialZone` | (leeg) | 2 | — |
| `IfcZone` | Eigendom- en gebruikseenheid | 1 | 9.07 |
| `IfcZone` | Functiegebied, Verblijfgebied, Gebruiksgebied, Bedgebied, Restgebied | 1 per soort | 9.10a–f |
| `IfcZone` | Buitengebied | 1 | 9.11 |
| `IfcZone` | Brandcompartiment, Subbrandcompartiment, Beschermd-subbrandcompartiment, Vluchtroute | 1 per soort | 9.16a–d |
| `IfcZone` | Gebouweenheid (2), Terreineenheid (1) | 3 | — |

Fysieke elementen (wanden, deuren, ramen, vloeren) staan niet in dit model.

## Zelf toetsen

Het model en de IDS-bestanden horen bij elkaar. Met een IDS 1.0-conforme validator (bijvoorbeeld IfcTester uit IfcOpenShell, of de buildingSMART Validation Service) toets je het model tegen de specificaties uit [`ids/`](ids/):

```bash
pip install ifcopenshell ifctester
python -m ifctester ids/26-9.12b-Verblijfsruimte.ids voorbeeldmodellen/BM13_SPA_XX_M3D_ZZZ_Qto.ifc
```

## Wat nog niet klopt

Bij het maken van de fragmenten is het model vergeleken met de IDS. Deze punten wijken af:

- **9.05a Gebouw:** ObjectType is leeg; de IDS vraagt `Gebouw`. In `Pset_BuildingCommon` ontbreken `BuildingID` en `IsPermanentID`.
- **9.05b Gebouwinhoud:** de twee `IfcSpatialZone`-objecten '01' en '02' (Bruto Inhoud) hebben geen ObjectType. Daardoor herkent de IDS geen gebouwinhoud.
- **9.06b Bouwlaaginhoud:** de zone '1 kleder' volgt de naamgeving van bouwlagen niet (`-1 kelder`).
- **9.07 Gebruikseenheid:** ObjectType is `Eigendom- en gebruikseenheid` en `Description` is leeg; de IDS vraagt `Gebruikseenheid` en `Bruto Inhoud`.
- **9.10b en 9.10c Verblijfsgebied:** ObjectType is `Verblijfgebied` (zonder s). `OccupancyType` en de bezettingsgegevens ontbreken.
- **9.11 Buitengebied:** `Description` is `Bruto Inhoud` in plaats van een terreinvolume; `IsExternal`, `PubliclyAccessible` en `HandicapAccessible` ontbreken.
- **9.16a–d brandveiligheid:** `Description` beschrijft het doel van de zone in plaats van een bepalingsmethode (`Bruto Inhoud`, `Gebruiksinhoud` of `Netto Inhoud`). Bij 9.16c ontbreekt `FireExit`; bij 9.16d is het ObjectType `Beschermd-subbrandcompartiment` (met streepje).
- **Niet in het model:** 9.09 Nevengebruiksfunctie en alle fysieke elementen (9.18). Tarra Ruimte (9.17) hoeft niet als object te worden gemodelleerd; als een check tarra nodig heeft, wordt die berekend als bruto inhoud minus netto inhoud.
- **Zones zonder specificatie:** `Gebouweenheid` en `Terreineenheid` komen in deze ILS niet voor.

## Archief

Het vorige standaardmodel `BM13_SPA_XX_M3D_ZZZ.ifc` staat in `archief/`. De vijftien Kievitsweg-modellen zijn uit de repository verwijderd; ze zijn terug te vinden in de git-geschiedenis. Hun beschrijving (leesmij en wijzigingslijsten) staat in `archief/voorbeeldmodellen-kievitsweg/`.
