# Toepassings- en werkingsgebied

## Toepassingsgebied

| Dimensie | Afbakening in versie 0.1 |
|---|---|
| Domein | Vergunningverlening in het kader van de Omgevingswet (VTH) |
| Proces | [GEMMA 015-00 *Behandelen aanvraag*](https://www.gemmaonline.nl/wiki/Omgevingswet/id-ad3cac40-1755-4253-bb7c-68e556d0ea9e) → processtap [015-020 *Inhoudelijk behandelen aanvraag*](https://www.gemmaonline.nl/wiki/Omgevingswet/id-ad8a0931-792a-46c3-b9e9-a9c669fedf59) → processtap [GEMMA 015-020-010 *Toetsen aan regelgeving*](https://www.gemmaonline.nl/wiki/Omgevingswet/id-cc0a44a4-a4bb-420f-9278-128e1250be2c) → processtap [GEMMA 015-020-010-030  *Controleren indieningsvereisten*](https://www.gemmaonline.nl/wiki/Omgevingswet/id-2600d398-3877-40d2-bedc-5158f99c0920) → processtap [015-020-010-035 Advies indieningsvereisten](https://www.gemmaonline.nl/wiki/Omgevingswet/id-e3c42fbb-36e4-4b51-93fe-444829b18b5d) en [GEMMA 015-020-010-080 *Uitvoeren inhoudelijke toetsing*](https://www.gemmaonline.nl/wiki/Omgevingswet/id-fb038899-8a50-402e-9423-1409a3d42a73). Zie de [GEMMA-matrix](#gemma-matrix) voor de overige processen |
| Activiteiten | Omgevingsplanactiviteit bouwen (OPA, ook *buitenplanse OPA*, BOPA) en technische bouwactiviteit (TBA) |
| Fasen | Vooroverleg, aanvraag OPA, aanvraag TBA (zie [Mijlpalen](#mijlpalen)) |
| Type bouwwerk | Gebouw, in principe met **woonfunctie** (nieuwbouw en verbouw) |
| Checks | 17 checks uit de BM13-regelinventarisatie (v0.3) |
| Informatiemodel | IFC 4.3 (ISO 16739-1:2024) |

**Buiten scope** in deze versie: organisatie-informatie-eisen (OIR) en asset-informatie-eisen (AIR) van de gemeente, welstandstoetsing (ID11), bijwerken van de BAG (ID12), duurzaamheidsanalyses anders dan MPG, en andere gebruiksfuncties dan wonen. De aanbeveling is dat elke gemeente een eigen OIR en AIR opstelt; deze ILS kan daar later op aansluiten.

## Werkingsgebied

De ILS geldt voor partijen die een aanvraag met een 3D-informatiemodel indienen bij een gemeente die deze ILS als indieningsvereiste hanteert. De rollen volgen de GEMMA-procesbeschrijving en de rolverdeling uit ISO 19650-2:

| Rol (ISO 19650) | Rol in de vergunningsketen | Verplichting |
|---|---|---|
| Opdrachtgever (*appointing party*) | Gemeente als bevoegd gezag | Stelt de ILS vast als indieningsvereiste en toetst |
| Hoofdopdrachtnemer (*lead appointed party*) | Aanvrager / initiatiefnemer | Is verantwoordelijk voor een complete, correcte aanlevering |
| Opdrachtnemer (*appointed party*) | Architect, modelleur, adviseur | Produceert het informatiemodel volgens deze ILS |
| Derde | Omgevingsloket (DSO), softwareleverancier, adviesdienst | Faciliteert indienen, valideren en toetsen |

Let op: in de vergunningsketen is de gemeente geen opdrachtgever in contractuele zin. We gebruiken de ISO-rollen hier om de informatiestroom te beschrijven, niet om een contractrelatie te suggereren. Zie [Verantwoordelijkheidsmatrix](#verantwoordelijkheden).

## Positionering ten opzichte van aanpalende documenten

| Document | Wat staat erin | Relatie met deze ILS |
|---|---|---|
| **Deze ILS** | Welke informatie, formaat, moment, rol, acceptatiecriteria | — |
| ILS voor Ruimten in de Omgevingswet (digiGO) | Ruimtelijke objecten en attributen | Bron van het machineleesbare deel (IDS), aangevuld en gesplitst per specificatie |
| BIM basis ILS (digiGO) | Generieke afspraken over IFC-uitwisseling | Uitgangspunt; deze ILS verwijst ernaar en herhaalt het niet, zie ## Afspraken over het IFC-model |
| ILS Ontwerp en Engineering (O&E) | Afspraken in de ontwerpfase | Afgestemd over het gebruik van Nationals `ObjectType` |
| Informatieprotocol (nog op te stellen) | Juridische status van het model bij de aanvraag | Aanbevolen aanvulling, zie [Open punten](#open-punten) |
| BIM-uitvoeringsplan / informatieproductieplan van de aanvrager | Projectspecifieke uitwerking | Vult de invulformats in deze ILS in |
| Checks toolkit (17 mappen) | Methode en regels per check | Verwijzen naar deze ILS voor laag 2 |
| Indieningsvereisten Omgevingsregeling | Wettelijke indieningsvereisten | Deze ILS is een digitale invulling, geen vervanging |
