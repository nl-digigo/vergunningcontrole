# Modelleerrichtlijn: objecten in IFC

<p class="note">Bron: guidance van Menno Mekes, overgenomen van <a href="https://ucm.buildingsmart.org/">ucm.buildingsmart.org</a> (buildingSMART Use Case Management). Opgenomen met kleine redactionele aanpassingen; de inhoud is ongewijzigd.</p>

## Identificatie

Een geselecteerd object in een model moet voldoen aan een specificatie. Het type object is daarom noodzakelijk. Dit is, net als de naam van het object, een attribuut in IFC.

## Attributen

Van alle gevraagde objecten moeten drie attributen worden ingevuld:

- **Name**: de naam van het object.
- **ObjectType**: het soort object volgens deze ILS. Voor ieder ObjectType is er een aparte specificatie.
- **Description**: de bepalingsmethode van het object, volgens een enumeratie.

## Classificatie

ObjectType is het type object en komt overeen met een van de specificaties. De specificaties zijn gepubliceerd in de bSDD: [identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0).

Iedere class in deze library heeft een eigen URI. Die URI moet als classificatie aan de ruimtelijke objecten worden toegekend, zodat deze ILS vanuit het aspectmodel kan worden gevisualiseerd in IFC-viewers.

## Geometrische objecten

### IfcSpace

Een ruimte, zoals een slaapkamer, is een `IfcSpace`. Dit is een ruimte die wordt omsloten door vloeren, wanden, plafonds en mogelijk ook virtuele begrenzingen. Het is een object dat de netto inhoud weergeeft.

### IfcSpatialZone

Een gebied is een verzameling van ruimten en scheidingen, met mogelijk mutaties zoals schachten en vides. Een `IfcSpatialZone` is daarmee een object dat apart moet worden gemodelleerd om correct te zijn. Bijvoorbeeld de gebruiksinhoud van een woning.

Omdat deze ILS gebruikmaakt van ObjectTypes, is alleen `USERDEFINED` toegestaan als `PredefinedType`.

ObjectType is een verfijning van de entiteit op hetzelfde niveau als het `PredefinedType`. In de Nederlandse bouwpraktijk worden termen gebruikt die niet in de voorgedefinieerde enumeratie van buildingSMART voorkomen. Daarom zijn alle ruimtelijke objecten `USERDEFINED` en voorzien van een ObjectType.

> **Aanbeveling:** hoewel gebieden ook als `IfcSpace` kunnen worden geëxporteerd, is het aanbevolen om hiervoor `IfcSpatialZone` te gebruiken.
>
> - Door in IFC onderscheid te maken tussen ruimte en gebied, zijn ze eenvoudig op entiteitsniveau van elkaar te scheiden.
> - Daarnaast is het eenvoudiger om de gebieden apart te exporteren, los van de fysieke objecten en ruimten.

### IfcExternalSpatialElement

Ruimtelijke elementen buiten het gebouw. Deze entiteit wordt gebruikt om het buitengebied te modelleren.

### IfcGeographicElement

Ruimtelijke elementen buiten het gebouw. Deze entiteit wordt gebruikt om terrein te modelleren.

### IfcWall, IfcSensor en andere fysieke objecten

Deze ILS gaat in principe over ruimtelijke objecten. Toch worden de fysieke objecten genoemd, omdat ze informatie kunnen bevatten voor de omgevingsvergunning. Denk aan de brandwerendheid van een wand of de aanwezigheid van een rookmelder.

## Administratieve objecten

### IfcZone

Een zone is een verzameling van ruimten en gebieden, en geeft aan waar deze objecten toe behoren. De gebruiksinhoud van een woning hoort, samen met de ruimten van die woning, bij een `IfcZone` 'Woning A', maar ook bij een `IfcZone` 'BRC1' die aangeeft dat deze woning in brandcompartiment 1 ligt.

Brandcompartiment, Subbrandcompartiment en Vluchtroute zijn belangrijke zones met een eigen specificatie binnen deze ILS.

Ruimtelijke objecten kunnen onderdeel zijn van meerdere zones. Deze relatie wordt in IFC vastgelegd met `IfcRelAssignsToGroup`. Een zone is niet hiërarchisch.

### IfcProject < IfcSite < IfcBuilding < IfcBuildingStorey

In de hiërarchie van IFC heeft een object een relatie met een bouwlaag, de `IfcBuildingStorey`. Alle bouwlagen samen vallen onder het gebouw, de `IfcBuilding`. Dit gebouw staat op een perceel, de `IfcSite`. En die is weer onderdeel van het project, het `IfcProject`.

Deze structuur ontstaat over het algemeen vanzelf bij het exporteren. Wel worden er diverse attributen en eigenschappen van deze entiteiten gevraagd.

In de specificaties komen Perceel, Bouwwerkperceel en Kadastraal perceel voor, evenals Gebouw en Gebouwinhoud, en Bouwlaag en Bouwlaaginhoud. Het verschil: **Perceel, Gebouw en Bouwlaag zijn de administratieve objecten**; de overige zijn ruimtelijke objecten.

Het is zeer ongebruikelijk om gemodelleerde objecten te exporteren naar `IfcSite`, `IfcBuilding` of `IfcBuildingStorey`.

## Georeferentie met IfcMapConversion en IfcProjectedCRS (LoGeoRef 50)

In Nederland gebruiken we het RD-coördinatenstelsel. De coördinaten van het gebouw en de hoekverdraaiing geven aan waar het project staat.

Coördinaten alleen zijn niet genoeg. Om het model op de juiste plek in de wereld te zetten, bijvoorbeeld in het stadsmodel van Rotterdam, moet in het model staan dat deze coördinaten in Nederland liggen: dat ze in RD zijn uitgedrukt. RD is een EPSG-code die in de `IfcProjectedCRS` moet worden ingevuld.

## Aansluiting op de rest van deze ILS

| Onderwerp in deze richtlijn | Waar uitgewerkt in deze ILS |
|---|---|
| Name, ObjectType, Description per specificatie | [LOIN per deelspecificatie](#loin) en de IDS-bestanden in `ids/` |
| Classificatie met bSDD-URI | [Informatieproductiestandaard](#standaard), [Referentie-informatie](#referentie) |
| IfcSpace / IfcSpatialZone / IfcZone | [Informatieproductiestandaard](#standaard), afspraak *Entiteiten* |
| Georeferentie (EPSG:28992 / EPSG:7415, NAP) | [Acceptatiecriteria](#acceptatie), AC4; [LOIN](#loin-geometrie), eis G2 |
