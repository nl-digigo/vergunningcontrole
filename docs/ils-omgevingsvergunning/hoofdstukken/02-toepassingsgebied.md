# Toepassings- en werkingsgebied

## Toepassingsgebied

| Dimensie | Afbakening in versie 0.1 |
|---|---|
| Domein | Vergunningverlening in het kader van de Omgevingswet (VTH) |
| Proces | GEMMA 015 *Behandelen aanvraag* → 015-03 *Inhoudelijk behandelen aanvraag* → processtap *Toetsen aan regelgeving* (activiteiten *Controleren indieningsvereisten* en *Uitvoeren inhoudelijke toetsing*). Zie de [GEMMA-matrix](#gemma-matrix) voor de overige processen |
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
