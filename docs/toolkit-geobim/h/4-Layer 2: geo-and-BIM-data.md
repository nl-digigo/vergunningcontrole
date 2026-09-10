# BM13 — Machine-leesbare regels: inventarisatie

**Project:** VNG Beleidsmaatregel 13 — Vergunningverlening met BIM
**Versie:** 0.3 (3 juli 2026) — *onder bewerking*
**Status:** Resultaat van fysieke sessies met deelnemende gemeenten, 7 april 2026 en 8 juni 2026, Zoetermeer

> Deze inventarisatie beschrijft per regel: de informatiebehoefte (gebouwdata, mapping naar [ILS Ruimte / bsDD](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) en omgevingsdata/geodata) Regels #1–#6 betreffen het omgevingsplan (OPA) (ook: Omgevingsplantoets), regels #7–#17 het Besluit bouwwerken leefomgeving (Bbl) (ook: de Technische toets).

## Inhoud

- [Regel #1: Gebruiksfunctie komt overeen met bestemming](#regel-1-gebruiksfunctie-komt-overeen-met-bestemming)
- [Regel #2: Maximale bouwhoogte](#regel-2-maximale-bouwhoogte)
- [Regel #3: Maximaal bebouwingspercentage](#regel-3-maximaal-bebouwingspercentage)
- [Regel #4: Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen](#regel-4-gebruiksfunctie--bestemming-beperkt-tot-x-aantal-bouwlagen)
- [Regel #5: Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor](#regel-5-beroep-aan-huis-maximaal-50-gebruiksoppervlakte-bedrijfsgebonden-kantoor)
- [Regel #6: Maximum aantal bouwlagen](#regel-6-maximum-aantal-bouwlagen)
- [Regel #7: Brandcompartimenten](#regel-7-brandcompartimenten)
- [Regel #8: Brandwerendheid](#regel-8-brandwerendheid)
- [Regel #9: Vrije breedte](#regel-9-vrije-breedte)
- [Regel #10: Hoogteverschil](#regel-10-hoogteverschil)
- [Regel #11: Rc-waarde](#regel-11-rc-waarde)
- [Regel #12: U-waarde](#regel-12-u-waarde)
- [Regel #13: MPG](#regel-13-mpg)
- [Regel #14: Vluchtwegen](#regel-14-vluchtwegen)
- [Regel #15: Loopafstand](#regel-15-loopafstand)
- [Regel #16: Vluchtbreedte](#regel-16-vluchtbreedte)
- [Regel #17: Daglicht](#regel-17-daglicht)

---

## Regel #1: Gebruiksfunctie komt overeen met bestemming

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond/ bouwtekening

- Gebruiksfunctie per ruimten per bouwlaag

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

#### Omgevingsdata / geodata

- Perceelgrenzen

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

## Regel #2: Maximale bouwhoogte

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond / bouwtekening

- Dakvorm

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- *Hoogte van het gebouw is geen begrip in ILS ruimte*

#### Omgevingsdata / geodata

- Perceelgrenzen

- Referentiepeil (door gemeente bepaald)

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

- Referentiepeil: AHN / ingemeten terreinmodel

  - <https://www.ahn.nl/producten>

Nb. We verwijzen hier naar de jaarlijkse landsdekkende luchtfoto's en het landsdekkende hoogtebestand van respectievelijk Beeldmateriaal Nederland en Algemeen Hoogtebestand Nederland. Sommige gemeenten hebben daarnaast nog eigen luchtfoto's en soms ook nog eigen hoogtebestanden.

## Regel #3: Maximaal bebouwingspercentage

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond / bouwtekening/situatietekening

- Gebouwtype

- Gebruiksfunctie

- Plattegrond op maaiveld / begane grond

- Bruto oppervlakte per begane grond laag

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Gebouwtype: IfcBuilding (MarketCategory en MarketSubCategory)

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

#### Omgevingsdata / geodata

- Bestaande bebouwing

- Luchtfoto

- Perceelgrenzen

- Referentiepeil (door gemeente bepaald)

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- BGT Pand

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>

<!-- -->

- BGT Overig bouwwerk

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Overig%2520bouwwerk>

<!-- -->

- Luchtfoto

  - <https://www.beeldmateriaal.nl/producten>

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

- Referentiepeil: AHN / ingemeten terreinmodel

  - <https://www.ahn.nl/producten>

Nb. We verwijzen hier naar de jaarlijkse landsdekkende luchtfoto's en het landsdekkende hoogtebestand van respectievelijk Beeldmateriaal Nederland en Algemeen Hoogtebestand Nederland. Sommige gemeenten hebben daarnaast nog eigen luchtfoto's en soms ook nog eigen hoogtebestanden.

## Regel #4: Gebruiksfunctie / Bestemming beperkt tot x aantal bouwlagen

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond / bouwtekening

- Gebouwtype

- Gebruiksfunctie per ruimten per bouwlaag

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Gebouwtype: IfcBuilding (MarketCategory en MarketSubCategory)

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

#### Omgevingsdata / geodata

Geen.

## Regel #5: Beroep aan huis: maximaal 50% gebruiksoppervlakte bedrijfsgebonden kantoor

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond / bouwtekening

- Gebruiksfunctie

- Bruto oppervlakte ruimten per gebruiksfunctie

- Situatietekening (bouwwerkperceel + kadastraal perceel + belendende percelen en bouwwerken)

- SBI-codering kantoor Beroep aan huis

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- BVO per Ruimte: Bepalingsmethode BVO (= Netto + Tarra oppervlakte)

#### Omgevingsdata / geodata

Nb. Omgevingsdata is waarschijnlijk alleen in een bepaalde zone / buffer rond het bouwplan gewenst.

- Perceelgrenzen

- Bestaande bebouwing

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

- Bestaande bebouwing + status: BAG Pand

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-pand>

- Bestaande bebouwing: BAG VBO + status + Gebruiksdoel + Gebruiksoppervlakte

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Verblijfsobject>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-verblijfsobject>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_gebruiksdoel-verblijfsobject>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_oppervlakte-verblijfsobject>

## Regel #6: Maximum aantal bouwlagen

### Informatiebehoefte

#### Gebouwdata

- Bouwaanvraag /Plattegrond / bouwtekening

- Aanwezigheid kelder

- Dakvorm

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- BVO per Ruimte: Bepalingsmethode BVO (= Netto + Tarra oppervlakte)

#### Omgevingsdata / geodata

Geen

## Regel #7: Brandcompartimenten

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Bouwaanvraag /Plattegrond / doorsneden

- Gebruiksfunctie

- Situatietekening (bouwwerkperceel + kadastraal perceel + belendende percelen en bouwwerken)

- Brandcompartimenten (aanduiding + contouren)

- BVO per brandcompartiment

- Brandwerende constructieonderdelen met specificatie en certificaat (behalve aantoonbare brandwerende constructieonderdelen zoals beton of steen)

- Gevel nieuw te bouwen gebouw met specificatie en certificaat (behalve aantoonbare brandwerende constructieonderdelen zoals beton of steen)

- Rapportage gelijkwaardigheden

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwwerkperceel: IfcZone (of IfcSpatialzone, IfcSpace)

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- Brandcompartiment: IfcZone (of IfcSpatialzone, IfcSpace)

- BVO per Brandcompartiment: Bepalingsmethode BVO (= Netto + Tarra oppervlakte)

- WBDO (Brandwerendheid constructie): IfcWall of IfcSlab (maar IfcZone of IfcSpatialzone, IfcSpace mag ook worden gebruikt).

- Brandwerende constructieonderdelen: IfcDoor, IfcWall, IfcColumn, IfcCurtainWall, IfcSlab

#### Omgevingsdata / geodata

Nb. Omgevingsdata is waarschijnlijk alleen in een bepaalde zone / buffer rond het bouwplan gewenst. In principe alleen direct aangrenzende percelen. Waarbij de ligging van de grens essentieel is. Waarbij een aangrenzend perceel met dezelfde eigenaar als het te bebouwen perceel als hetzelfde perceel beschouw kan worden. En de situatietekening met perceelsgrenzen die afwijken van de BRK, leidend is, uitgaande van een later te verkavelen perceel.

- Perceelgrenzen

- Belanghebbende / eigenaar

- Bestaande bebouwing

- Typering gebruiksdoel / gebruiksfunctie bestaande bebouwing

- Vitale infrastructuur

- Openbare toegankelijke ruimte (bosgebied, water, groenstrook etc.)

- Openbare toegankelijke wegen (en spoor)

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

- Belanghebbende / eigenaar: BRK – Zakelijke recht + Natuurlijk of Niet natuurlijk Persoon

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_ZakelijkRecht>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_NatuurlijkPersoon>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_NietNatuurlijkPersoon>

- Bestaande bebouwing + status: BAG Pand

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-pand>

- Bestaande bebouwing: BAG VBO + status + Gebruiksdoel

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Verblijfsobject>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-verblijfsobject>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_gebruiksdoel-verblijfsobject>

- Vitale infrastructuur: BGT Kunstwerk (Overbruggingsdeel + Tunnel deel + Kunstwerk deel)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Overbruggingsdeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Tunneldeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Kunstwerkdeel>

- Weg: BGT Wegdeel en BGT Ondersteunen Wegdeel (+ classificatie Functie)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Wegdeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-wegdeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520wegdeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-ondersteunend-wegdeel>

- Spoor: BGT Spoor (+ classificatie Functie)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Spoor>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-spoor>

- Openbaar groen: BGT Begroeid Terreindeel en BGT Onbegroeid Terreindeel (+ classificatie Fysiek voorkomen)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Begroeid%2520terreindeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_plus-fysiek-voorkomen-begroeid-terreindeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Onbegroeid%2520terreindeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_fysiek-voorkomen-onbegroeid-terreindeel>

- Water: BGT Waterdeel en BGT Ondersteunend Waterdeel (+ classificatie Type)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Waterdeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_type-waterdeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520waterdeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_type-ondersteunend-waterdeel>

## Regel #8: Brandwerendheid

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

Alles wat genoemd is onder de Regel Brandcompartimenten

- Constructie onderdelen

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Constructie onderdelen: IfcWall, IfcColumn, IfcCurtainWall, IfcSlab

- Brandcompartiment

#### Omgevingsdata

Alles onder de Regel Brandcompartimenten.

## Regel #9: Vrije breedte

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Gebruiksfunctie

- Type ruimte namelijk verblijfsgebied, functiegebied, badruimte, toiletruimte, bergruimte, buitenruimte, gemeenschappelijke verkeersruimte

- Verkeersroute

- Vrije breedte, vrije hoogte, oppervlakte

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- VerblijfsRuimte of Functieruimte, toiletruimte, badruimte, bergruimte, buitenruimte, gemeenschappelijke verkeersruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Verkeersroute: IfcZone

- Wanden, vloeren, dak (voor berekening breedte, hoogte en oppervlakte): IfcWall, IfcFloor, IfcRoof

#### Omgevingsdata

Geen omgevingsdata nodig

## Regel #10: Hoogteverschil
### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Gebruiksfunctie, woonfunctie

- Type ruimte namelijk verblijfsgebied, functiegebied, badruimte, toiletruimte, bergruimte, buitenruimte, gemeenschappelijke verkeersruimte

- Verkeersroute

- Trap, hellingbaan, trapbordes, hellingbaanbordes

- Vloeren voor berekening hoogteverschillen

- Toegang tot buitengebied

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

1.  Het veilig kunnen overbruggen van hoogteverschillen (in het kader van veiligheid):

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- VerblijfsRuimte of Functieruimte, toiletruimte, badruimte, bergruimte, buitenruimte, gemeenschappelijke verkeersruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Buitenberging:

- Verkeersroute: IfcZone

- Vloeren: IfcFloor

- Onbebouwde ruimte: IfcSite

3.  Het overbruggen van hoogteverschillen (in het kader van bereikbaarheid algemeen)

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- Woonfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte, toiletruimte, badruimte, bergruimte, buitenruimte, gemeenschappelijke verkeersruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Buitenberging:

- Verkeersroute: IfcZone

- Vloeren: IfcFloor

- Onbebouwde ruimte: IfcSite

#### Omgevingsdata

In principe geen. Tenzij het gebouw direct grenst aan de openbare buitenruimte. In dat geval is de toegang tot de openbare weg / openbare ruimte en het referentiepeil / maaiveld van belang:

- Openbare weg

- Openbaar groen

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Referentiepeil: AHN / ingemeten terreinmodel

  - <https://www.ahn.nl/producten>

- Weg: BGT Wegdeel en BGT Ondersteunen Wegdeel (+ classificatie Functie)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Wegdeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-wegdeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520wegdeel>

  - [https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-ondersteunend-wegdeel](https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel)

- Openbaar groen: BGT Begroeid Terreindeel en BGT Onbegroeid Terreindeel (+ classificatie Fysiek voorkomen)

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Begroeid%2520terreindeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_plus-fysiek-voorkomen-begroeid-terreindeel>

  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Onbegroeid%2520terreindeel>

  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_fysiek-voorkomen-onbegroeid-terreindeel>

## Regel #11: Rc-waarde

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Type ruimte namelijk verblijfsgebied, functiegebied, badruimte, toiletruimte

- Verticale scheidingsconstructies: wanden, vloeren en daken

- Oppervlakte verticale scheidingsconstructies

- Gebruiksoppervlakte

- Bepalingsmethode volgens de NTA8800 (beng)

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel>

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- Wand ThermalTransmittance IfcWall,

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand>

- Vloer ThermalTransmittance IfcSlab

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer>

- Dak IfcRoof ThermalTransmittance

- Bsdd ntb

- Vliesgevel ThermalTransmittance IfcCurtainWall

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel>

#### Omgevingsdata

- Aangrenzende gebouwen (rijwoningen hebben bijvoorbeeld in de scheiding geen warmte isolatie)

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Bestaande bebouwing + status: BAG Pand

  - <https://opendata.stelselcatalogus.nl/bag/doc/begrip/pand>

  - <https://opendata.stelselcatalogus.nl/bag/doc/gegevenselement/status-pand>

## Regel #12: U-waarde

### Informatiebehoefte

#### Gebouwdata (als onderdel van de ingediende vergunningaanvraag):

- Type ruimte namelijk verblijfsgebied, badruimte, toiletruimte

- Ramen, deuren en kozijnen

- Oppervlakte ramen, deuren en kozijnen individueel en gesommeerd

- Bepalingsmethode volgens de NTA8800 (beng)

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Kadastraalperceel: IfcZone (of IfcSpatialzone, IfcSpace) Nb.tevens Omgevingsdata

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- Deur ThermalTransmittance IfcDoor,

- Raam ThermalTransmittance IfcWindow

- Vliesgevel ThermalTransmittance IfcCurtainWall

- <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel>

#### Omgevingsdata

Geen omgevingsdata nodig

## Regel #13: MPG

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Ruimten

- Gebruiksfunctie

- Gebruiksoppervlakte

- Buitenmuren, daken en vloeren (die aan de buitenlucht grenzen)

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Muren, daken, vloeren: IfcWall, IfcRoof, IfcFloor

- GO per Ruimte: Bepalingsmethode GO

#### Omgevingsdata

Geen omgevingsdata nodig

## Regel #14: Vluchtwegen

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Ruimten

- Gebruiksgebieden

- Terrein behorende bij gebouw

- Gebruiksfunctie

- Brandcompartimenten

- Vloeren

- Deuren

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Terrein behorende bij gebouw: IfcSite

- Brandcompartimenten: IfcZone (of IfcSpatialzone, IfcSpace)

- Deuren en vloeren: IfcDoor en IfcFloor

#### Omgevingsdata

- Openbare weg

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Weg: BGT Wegdeel en BGT Ondersteunen Wegdeel (+ classificatie Functie)

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel>

## Regel #15: Loopafstand

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Ruimten

- Gebruiksgebieden

- Gebruiksfunctie

- Gebruiksoppervlakte

- Brandcompartimenten

- Vloeren

- Deuren

- Bezettingsgraad (personeel)

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

- VerblijfsRuimte of Functieruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Brandcompartimenten: IfcZone (of IfcSpatialzone, IfcSpace)

- Deuren en vloeren: IfcDoor en IfcFloor

- GO per Ruimte: Bepalingsmethode GO

#### Omgevingsdata

Geen omgevingsdata nodig

## Regel #16: Vluchtbreedte

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Gebruiksfunctie, verblijfsgebieden, bedgebieden

- Vluchtroutes

- Trappen

- Vloeroppervlakte verblijfsgebieden

- Wanden, vloeren en daken (voor berekening vrije breedte en hoogte)

- Deuren

- Bezettingsgraad per verblijfsgebied en vluchtroute

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

1.  Vrije doorgang vluchtroutes

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- Verblijfsgebied, bedruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Buitenberging:

- Vluchtroute: IfcZone

- Trap: IfcStairs

- Wanden, Vloeren, daken: IfcWall, IfcFloor, IfcRoof

2.  Doorstroomcapaciteit

- Bouwlaag: IfcBuildingStorey (conform BIM Basis ILS)

- Gebruiksfunctie: IfcZone (of IfcSpatialzone, IfcSpace)

  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>

- Verblijfsgebied, bedruimte: IfcSpace (of IfcZone, IfcSpatialzone)

- Buitenberging:

- Vluchtroute: IfcZone

- Trap: IfcStairs

- Wanden, Vloeren, daken: IfcWall, IfcFloor, IfcRoof

- Deuren: IfcDoor

#### Omgevingsdata

Geen omgevingsdata nodig

## Regel #17: Daglicht

### Informatiebehoefte

#### Gebouwdata (als onderdeel van de ingediende vergunningaanvraag):

- Type gebouw

- Type ruimte namelijk verblijfsgebied, verblijfsruimten

- Gebruiksoppervlakte

- Gebruiksoppervlakte

- Equivalente daglichtoppervlakte volgens de NEN 2057

- Belemmeringshoek

- Nieuwe perceelsgrenzen (Bouwwerkperceel)

#### In relatie tot ILS Ruimte ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) )

Verblijfsruimten

Verblijfsgebieden

<https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw>

Window, Door, Curtain Wall – netto glas oppervlakte

#### Omgevingsdata

- Afstand gevel gebouw tot de perceelsgrens

- Afstand gevel gebouw tot groen, wegen en water en het hart daarvan

- Huidige en toekomstige veranderingen van de omgeving

- Eigendom belendende percelen

#### In relatie tot begrippen Geo-standaarden en beeldmateriaal

- Perceelgrens: BRK – Digitale Kadastrale Kaart

  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/kadastralegrens>

- Belanghebbende / eigenaar: BRK – Zakelijke recht + Natuurlijk of Niet natuurlijk Persoon

  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/zakelijkrecht>

  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/natuurlijkpersoon>

  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/nietnatuurlijkpersoon>

- Bestaande bebouwing + status: BAG Pand

  - <https://opendata.stelselcatalogus.nl/bag/doc/begrip/pand>

  - <https://opendata.stelselcatalogus.nl/bag/doc/gegevenselement/status-pand>

- Weg: BGT Wegdeel en BGT Ondersteunen Wegdeel (+ classificatie Functie)

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_wegdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel>

- Spoor: BGT Spoor (+ classificatie Functie)

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/spoor>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-spoor>

- Openbaar groen: BGT Begroeid Terreindeel en BGT Onbegroeid Terreindeel (+ classificatie Fysiek voorkomen)

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/begroeid_terreindeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/fysiek_voorkomen-begroeid_terreindeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/onbegroeid_terreindeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/fysiek_voorkomen-onbegroeid_terreindeel>

- Water: BGT Waterdeel en BGT Ondersteunend Waterdeel (+ classificatie Type)

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/waterdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/type-waterdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_waterdeel>

  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/type-ondersteunend_waterdeel>


Niet besproken hoeveel tijd er in deze check gaat zitten, weet iemand dat?

### Opmerkingen

