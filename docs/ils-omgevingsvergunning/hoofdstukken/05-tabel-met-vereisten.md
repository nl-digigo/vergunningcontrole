# Tabel met vereisten

De tabel met vereisten koppelt elke check aan de regelgeving, de aanvraagactiviteit en de deelspecificaties (IDS) die de benodigde informatie uitvragen. Zo is per informatie-eis te herleiden **waarom** (check), **wat** (IDS), **wanneer** (mijlpaal, zie [Mijlpalen](#mijlpalen)) en **door wie** (zie [Verantwoordelijkheidsmatrix](#verantwoordelijkheden)) er geleverd wordt.

Afkortingen: **OPA** = omgevingsplanactiviteit (bouwen, gemeentelijk omgevingsplan); **TBA** = technische bouwactiviteit (Besluit bouwwerken leefomgeving, Bbl).

## Overzicht per check

ID01 = omgevingsplanactiviteit bouwen, ID02 = technische bouwactiviteit. Bij een aanvraag voor ID02 gelden ook alle specificaties van ID01; die informatie wordt opnieuw en bijgewerkt meegeleverd.

| Check | Omschrijving | Activiteit | Bron | Informatiedoel | Geometrie nodig | Aantal IDS | Deelspecificaties |
|---|---|---|---|---|---|---|---|
| #1 | Gebruiksfunctie komt overeen met bestemming | OPA | Omgevingsplan | ID01 | nee | 13 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.02](ids/07-9.02-Project.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.07](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.09](ids/17-9.09-Nevengebruiksfunctie.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids) |
| #2 | Maximale bouwhoogte | OPA | Omgevingsplan | ID01 | ja (hoogte, bounding box) | 10 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.01f](ids/44-9.01f-Verticaal-datum.ids), [9.02](ids/07-9.02-Project.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids)|
| #3 | Maximaal bebouwingspercentage | OPA | Omgevingsplan | ID01 | ja (geprojecteerd oppervlak) | 15 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.02](ids/07-9.02-Project.ids), [9.03a](ids/08-9.03a-Perceel.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.05a](ids/11-9.05a-Gebouw.ids), [9.05b](ids/12-9.05b-Gebouwinhoud.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.06b](ids/14-9.06b-Bouwlaaginhoud%20object.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids) |
| #4 | Gebruiksfunctie/bestemming beperkt tot x bouwlagen | OPA | Omgevingsplan | ID01 | ja (bouwlagen) | 10 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.01f](ids/44-9.01f-Verticaal-datum.ids), [9.02](ids/07-9.02-Project.ids), [9.05a](ids/11-9.05a-Gebouw.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.09](ids/17-9.09-Nevengebruiksfunctie.ids) |
| #5 | Beroep aan huis: max. 50% gebruiksoppervlakte | OPA | Omgevingsplan | ID01 | ja (oppervlak) | 15 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.02](ids/07-9.02-Project.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.07](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.09](ids/17-9.09-Nevengebruiksfunctie.ids), [9.10f](ids/23-9.10f-Restgebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.12d](ids/28-9.12d-Restruimte.ids), [9.17](ids/33-9.17-Tarra-Ruimte.ids) |
| #6 | Maximum aantal bouwlagen | OPA | Omgevingsplan | ID01 | ja (bouwlagen) | 17 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01c](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids), [9.01f](ids/44-9.01f-Verticaal-datum.ids), [9.02](ids/07-9.02-Project.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.06b](ids/14-9.06b-Bouwlaaginhoud%20object.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10f](ids/23-9.10f-Restgebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.12d](ids/28-9.12d-Restruimte.ids), [9.17](ids/33-9.17-Tarra-Ruimte.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids)|
| #7 | Brandcompartimenten | TBA | Bbl | ID02 | ja (oppervlak compartiment) | 14 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.02](ids/07-9.02-Project.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.16a](ids/30-9.16a-Brandcompartiment.ids), [9.18a](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids), [9.18b](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids), [9.18d](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) |
| #8 | Brandwerendheid | TBA | Bbl | ID02 | beperkt | 9 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.16a](ids/30-9.16a-Brandcompartiment.ids), [9.18a](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids), [9.18b](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids), [9.18d](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) |
| #9 | Vrije breedte | TBA | Bbl | ID02 | ja (breedte) | 15 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10a](ids/18-9.10a-Functiegebied.ids), [9.10b](ids/19-9.10b-Verblijfsgebied.ids), [9.10d](ids/21-9.10d-Gebruiksgebied.ids), [9.11](ids/24-9.11-Buitengebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.13](ids/29-9.13-Buitenruimte.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids), [9.18m](ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids)|
| #10 | Hoogteverschil | TBA | Bbl | ID02 | ja (hoogte) | 20 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.01f](ids/44-9.01f-Verticaal-datum.ids), [9.02](ids/07-9.02-Project.ids), [9.03a](ids/08-9.03a-Perceel.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10a](ids/18-9.10a-Functiegebied.ids), [9.10b](ids/19-9.10b-Verblijfsgebied.ids), [9.10d](ids/21-9.10d-Gebruiksgebied.ids), [9.11](ids/24-9.11-Buitengebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.13](ids/29-9.13-Buitenruimte.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18k](ids/46-9.18k-Fysieke-elementen-IfcStair.ids), [9.18l](ids/47-9.18l-Fysieke-elementen-IfcRamp.ids), [9.18m](ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids), [9.18n](ids/49-9.18n-Fysieke-elementen-IfcRailing.ids)|
| #11 | Rc-waarde | TBA | Bbl | ID02 | nee (eigenschap) | 11 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10a](ids/18-9.10a-Functiegebied.ids), [9.10b](ids/19-9.10b-Verblijfsgebied.ids), [9.18c](ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids), [9.18d](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids)|
| #12 | U-waarde | TBA | Bbl | ID02 | nee (eigenschap) | 7 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.18d](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18i](ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) |
| #13 | MPG | TBA | Bbl | ID02 | nee (hoeveelheden) | 8 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids)|
| #14 | Vluchtwegen | TBA | Bbl | ID02 | ja (route) | 11 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.03a](ids/08-9.03a-Perceel.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10d](ids/21-9.10d-Gebruiksgebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.16a](ids/30-9.16a-Brandcompartiment.ids), [9.16c](ids/32-9.16c-Vluchtroute.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) |
| #15 | Loopafstand | TBA | Bbl | ID02 | ja (afstand) | 14 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10c](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids), [9.10d](ids/21-9.10d-Gebruiksgebied.ids), [9.12a](ids/25-9.12a-Functieruimte.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.16a](ids/30-9.16a-Brandcompartiment.ids), [9.16b](ids/31-9.16b-Subbrandcompartiment.ids), [9.16c](ids/32-9.16c-Vluchtroute.ids), [9.16d](ids/43-9.16d-Beschermd-subbrandcompartiment.ids), [9.17](ids/33-9.17-Tarra-Ruimte.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) |
| #16 | Vluchtbreedte | TBA | Bbl | ID02 | ja (breedte) | 14 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.02](ids/07-9.02-Project.ids), [9.06a](ids/13-9.06a%20Bouwlaag%20kenmerk.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10b](ids/19-9.10b-Verblijfsgebied.ids), [9.10c](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids), [9.10e](ids/22-9.10e-Bedgebied.ids), [9.12c](ids/27-9.12c-Bedruimte.ids), [9.16c](ids/32-9.16c-Vluchtroute.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18g](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids), [9.18j](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids), [9.18k](ids/46-9.18k-Fysieke-elementen-IfcStair.ids)|
| #17 | Daglicht | TBA | Bbl | ID02 | ja (oppervlak) | 15 | [9](ids/01-9.00-ILS-Omgevingsvergunning.ids), [9.01a](ids/02-9.01a-Georeferentie.ids), [9.01b](ids/03-9.01b-Coordinatenstelsel.ids), [9.02](ids/07-9.02-Project.ids), [9.03a](ids/08-9.03a-Perceel.ids), [9.03b](ids/09-9.03b-Bouwwerkperceel.ids), [9.04](ids/10-9.04-Kadastraal-Perceel.ids), [9.05a](ids/11-9.05a-Gebouw.ids), [9.08](ids/16-9.08-Gebruiksfunctie.ids), [9.10b](ids/19-9.10b-Verblijfsgebied.ids), [9.12b](ids/26-9.12b-Verblijfsruimte.ids), [9.18d](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids), [9.18e](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids), [9.18h](ids/41-9.18h-Fysieke-elementen-IfcWall.ids), [9.18i](ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) |

> De kolom *Geometrie nodig* geeft aan of de check naast attributen ook afgeleide geometrie (oppervlak, hoogte, afstand) nodig heeft. IDS toetst alleen attributen en eigenschappen; voor de geometrie geldt de aanpak in [Geometrische controle](#geometrie).

## Overzicht per specificatie

| Nr | Specificatie | IFC-versie | bSDD-klasse | Checks |
|---|---|---|---|---|
| 01 | [9 ILS Omgevingsvergunning](ids/01-9.00-ILS-Omgevingsvergunning.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) | #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17 |
| 02 | [9.01a Georeferentie](ids/02-9.01a-Georeferentie.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie) | #1 #2 #3 #4 #5 #6 #7 #10 #17 |
| 03 | [9.01b Coördinatenstelsel](ids/03-9.01b-Coordinatenstelsel.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel) | #1 #2 #3 #4 #5 #6 #7 #10 #17 |
| 04 | [9.01c Projectadres (IFC4X3_ADD2)](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) | IFC4X3_ADD2 | — | #1 #2 #3 #4 #5 #6 |
| 07 | [9.02 Project](ids/07-9.02-Project.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Project) | #1 #2 #3 #4 #5 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17 |
| 08 | [9.03a Perceel](ids/08-9.03a-Perceel.ids) | IFC4X3_ADD2 IFC4 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel) | #3 #10 #14 #17 |
| 09 | [9.03b Bouwwerkperceel](ids/09-9.03b-Bouwwerkperceel.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel) | #1 #2 #3 #5 #6 #7 #17 |
| 10 | [9.04 Kadastraal Perceel](ids/10-9.04-Kadastraal-Perceel.ids) | IFC4X3_ADD2 IFC4 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel) | #1 #2 #3 #5 #6 #7 #11 #12 #17 |
| 11 | [9.05a Gebouw](ids/11-9.05a-Gebouw.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw) | #3 #4 #17 |
| 12 | [9.05b Gebouwinhoud](ids/12-9.05b-Gebouwinhoud.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud) | #3 |
| 13 | [9.06a Bouwlaag (voorheen verdieping)](ids/13-9.06a%20Bouwlaag%20kenmerk.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag) | #1 #2 #3 #4 #6 #9 #10 #16 |
| 14 | [9.06b Bouwlaaginhoud (voorheen bouwlaagobject)](ids/14-9.06b-Bouwlaaginhoud%20object.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud) | #3 #6 |
| 15 | [9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid) | #1 #5 |
| 16 | [9.08 Gebruiksfunctie](ids/16-9.08-Gebruiksfunctie.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie) | #1 #3 #4 #5 #6 #7 #9 #10 #11 #12 #13 #14 #15 #16 #17 |
| 17 | [9.09 Nevengebruiksfunctie](ids/17-9.09-Nevengebruiksfunctie.ids) | IFC4X3_ADD2 IFC4 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie) | #1 #4 #5 |
| 18 | [9.10a Functiegebied](ids/18-9.10a-Functiegebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied) | #9 #10 #11 |
| 19 | [9.10b Verblijfsgebied](ids/19-9.10b-Verblijfsgebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied) | #9 #10 #11 #16 #17 |
| 20 | [9.10c Verblijfsgebied met bezettingsgraad](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad) | #15 #16 |
| 21 | [9.10d Gebruiksgebied](ids/21-9.10d-Gebruiksgebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied) | #9 #10 #14 #15 |
| 22 | [9.10e Bedgebied](ids/22-9.10e-Bedgebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied) | #16 |
| 23 | [9.10f Restgebied](ids/23-9.10f-Restgebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied) | #5 #6 |
| 24 | [9.11 Buitengebied](ids/24-9.11-Buitengebied.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied) | #9 #10 |
| 25 | [9.12a Functieruimte](ids/25-9.12a-Functieruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte) | #1 #3 #5 #6 #9 #10 #13 #14 #15 |
| 26 | [9.12b Verblijfsruimte](ids/26-9.12b-Verblijfsruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte) | #1 #3 #5 #6 #9 #10 #13 #14 #15 #17 |
| 27 | [9.12c Bedruimte](ids/27-9.12c-Bedruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte) | #16 |
| 28 | [9.12d Restruimte](ids/28-9.12d-Restruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte) | #5 #6 |
| 29 | [9.13 Buitenruimte](ids/29-9.13-Buitenruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte) | #9 #10 |
| 30 | [9.16a Brandcompartiment](ids/30-9.16a-Brandcompartiment.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment) | #7 #8 #14 #15 |
| 31 | [9.16b Subbrandcompartiment](ids/31-9.16b-Subbrandcompartiment.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment) | #15 |
| 32 | [9.16c Vluchtroute](ids/32-9.16c-Vluchtroute.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute) | #14 #15 #16 |
| 33 | [9.17 Tarra Ruimte](ids/33-9.17-Tarra-Ruimte.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte) | #5 #6 #15 |
| 34 | [9.18a Fysieke elementen IfcBeam](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk) | #7 #8 |
| 35 | [9.18b Fysieke elementen IfcColumn](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom) | #7 #8 |
| 36 | [9.18c Fysieke elementen IfcCovering.INSULATION](ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie) | #11 |
| 37 | [9.18d Fysieke elementen IfcCurtainWall](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel) | #7 #8 #11 #12 #17 |
| 38 | [9.18e Fysieke elementen IfcDoor](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur) | #7 #8 #12 #14 #15 #16 #17 |
| 40 | [9.18g Fysieke elementen IfcSlab](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer) | #7 #8 #9 #10 #11 #13 #14 #15 #16 |
| 41 | [9.18h Fysieke elementen IfcWall](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand) | #7 #8 #9 #11 #13 #16 #17 |
| 42 | [9.18i Fysieke elementen Ifcwindow](ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) | IFC4 IFC4X3_ADD2 | [bSDD](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam) | #12 #17 |
| 43 | [9.16d Beschermd subbrandcompartiment](ids/43-9.16d-Beschermd-subbrandcompartiment.ids) | IFC4 IFC4X3_ADD2 | — | #15 |
| 44 | [9.01f Verticaal datum (NAP)](ids/44-9.01f-Verticaal-datum.ids) | IFC4 IFC4X3_ADD2 | — | #2 #4 #6 #10 |
| 45 | [9.18j Fysieke elementen IfcRoof](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids) | IFC4 IFC4X3_ADD2 | — | #2 #6 #9 #11 #13 #16 |
| 46 | [9.18k Fysieke elementen IfcStair](ids/46-9.18k-Fysieke-elementen-IfcStair.ids) | IFC4 IFC4X3_ADD2 | — | #10 #16 |
| 47 | [9.18l Fysieke elementen IfcRamp](ids/47-9.18l-Fysieke-elementen-IfcRamp.ids) | IFC4 IFC4X3_ADD2 | — | #10 |
| 48 | [9.18m Fysieke elementen IfcTransportElement.ELEVATOR](ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids) | IFC4 IFC4X3_ADD2 | — | #9 #10 |
| 49 | [9.18n Fysieke elementen IfcRailing](ids/49-9.18n-Fysieke-elementen-IfcRailing.ids) | IFC4 IFC4X3_ADD2 | — | #10 |

De volledige koppeltabel staat machineleesbaar in [`data/specificaties_checks.csv`](data/specificaties_checks.csv).

<a id="mijlpalenmatrix"></a>

## Verplichting per mijlpaal

De ILS is één IDS voor alle mijlpalen. De matrix hieronder geeft per specificatie aan of ze bij een mijlpaal verplicht (**V**) of optioneel (**O**) is. De mijlpalen staan in [Mijlpalen](#mijlpalen). De regels:

- **M1 Vooroverleg** (blokkenmodel): een vaste set, niet afgeleid van de checks: 9, 9.01a, 9.01b, 9.02, 9.03a, 9.03b, 9.04, 9.05a, 9.05b, 9.06a, 9.06b en 9.08.
- **M2 Aanvraag OPA:** verplicht als de specificatie aan een van de checks #1–#6 hangt.
- **M3 Aanvraag TBA:** verplicht als de specificatie aan een van de checks #1–#17 hangt.
- 9.01c Projectadres is bij alle mijlpalen optioneel.
- 9.01f Verticaal datum is bij alle mijlpalen verplicht, maar alleen bij EPSG:28992.

**De IDS dwingt de verplichting per mijlpaal niet af.** Een IDS-controle toetst alle specificaties tegelijk. Specificaties waarvan de objecten in het model ontbreken, keuren niet af, behalve 9, 9.01a, 9.01b, 9.02, 9.05a en 9.06a: die objecten moeten in elk model voorkomen. Of een specificatie bij een mijlpaal verplicht is, beoordeelt de gemeente met deze matrix. Gegenereerde IDS-sets per mijlpaal zijn een vervolgstap voor versie 0.3.0.

De matrix staat ook machineleesbaar in de kolommen `M1`, `M2` en `M3` van [`data/specificaties_checks.csv`](data/specificaties_checks.csv).

| Nr | Specificatie | M1 | M2 | M3 |
|---|---|---|---|---|
| 01 | [9 ILS Omgevingsvergunning](ids/01-9.00-ILS-Omgevingsvergunning.ids) | V | V | V |
| 02 | [9.01a Georeferentie](ids/02-9.01a-Georeferentie.ids) | V | V | V |
| 03 | [9.01b Coördinatenstelsel](ids/03-9.01b-Coordinatenstelsel.ids) | V | V | V |
| 04 | [9.01c Projectadres (IFC4X3_ADD2)](ids/04-9.01c-Projectadres-IFC4X3-ADD2.ids) | O | O | O |
| 07 | [9.02 Project](ids/07-9.02-Project.ids) | V | V | V |
| 08 | [9.03a Perceel](ids/08-9.03a-Perceel.ids) | V | V | V |
| 09 | [9.03b Bouwwerkperceel](ids/09-9.03b-Bouwwerkperceel.ids) | V | V | V |
| 10 | [9.04 Kadastraal Perceel](ids/10-9.04-Kadastraal-Perceel.ids) | V | V | V |
| 11 | [9.05a Gebouw](ids/11-9.05a-Gebouw.ids) | V | V | V |
| 12 | [9.05b Gebouwinhoud](ids/12-9.05b-Gebouwinhoud.ids) | V | V | V |
| 13 | [9.06a Bouwlaag (voorheen verdieping)](ids/13-9.06a%20Bouwlaag%20kenmerk.ids) | V | V | V |
| 14 | [9.06b Bouwlaaginhoud (voorheen bouwlaagobject)](ids/14-9.06b-Bouwlaaginhoud%20object.ids) | V | V | V |
| 15 | [9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)](ids/15-9.07-Gebruikseenheid-voorheen-eigendom-en-gebruikseenheid.ids) | O | V | V |
| 16 | [9.08 Gebruiksfunctie](ids/16-9.08-Gebruiksfunctie.ids) | V | V | V |
| 17 | [9.09 Nevengebruiksfunctie](ids/17-9.09-Nevengebruiksfunctie.ids) | O | V | V |
| 18 | [9.10a Functiegebied](ids/18-9.10a-Functiegebied.ids) | O | O | V |
| 19 | [9.10b Verblijfsgebied](ids/19-9.10b-Verblijfsgebied.ids) | O | O | V |
| 20 | [9.10c Verblijfsgebied met bezettingsgraad](ids/20-9.10c-Verblijfsgebied-met-bezettingsgraad.ids) | O | O | V |
| 21 | [9.10d Gebruiksgebied](ids/21-9.10d-Gebruiksgebied.ids) | O | O | V |
| 22 | [9.10e Bedgebied](ids/22-9.10e-Bedgebied.ids) | O | O | V |
| 23 | [9.10f Restgebied](ids/23-9.10f-Restgebied.ids) | O | V | V |
| 24 | [9.11 Buitengebied](ids/24-9.11-Buitengebied.ids) | O | O | V |
| 25 | [9.12a Functieruimte](ids/25-9.12a-Functieruimte.ids) | O | V | V |
| 26 | [9.12b Verblijfsruimte](ids/26-9.12b-Verblijfsruimte.ids) | O | V | V |
| 27 | [9.12c Bedruimte](ids/27-9.12c-Bedruimte.ids) | O | O | V |
| 28 | [9.12d Restruimte](ids/28-9.12d-Restruimte.ids) | O | V | V |
| 29 | [9.13 Buitenruimte](ids/29-9.13-Buitenruimte.ids) | O | O | V |
| 30 | [9.16a Brandcompartiment](ids/30-9.16a-Brandcompartiment.ids) | O | O | V |
| 31 | [9.16b Subbrandcompartiment](ids/31-9.16b-Subbrandcompartiment.ids) | O | O | V |
| 32 | [9.16c Vluchtroute](ids/32-9.16c-Vluchtroute.ids) | O | O | V |
| 33 | [9.17 Tarra Ruimte](ids/33-9.17-Tarra-Ruimte.ids) | O | V | V |
| 34 | [9.18a Fysieke elementen IfcBeam](ids/34-9.18a-Fysieke-elementen-IfcBeam.ids) | O | O | V |
| 35 | [9.18b Fysieke elementen IfcColumn](ids/35-9.18b-Fysieke-elementen-IfcColumn.ids) | O | O | V |
| 36 | [9.18c Fysieke elementen IfcCovering.INSULATION](ids/36-9.18c-Fysieke-elementen-IfcCovering.INSULATION.ids) | O | O | V |
| 37 | [9.18d Fysieke elementen IfcCurtainWall](ids/37-9.18d-Fysieke-elementen-IfcCurtainWall.ids) | O | O | V |
| 38 | [9.18e Fysieke elementen IfcDoor](ids/38-9.18e-Fysieke-elementen-IfcDoor.ids) | O | O | V |
| 40 | [9.18g Fysieke elementen IfcSlab](ids/40-9.18g-Fysieke-elementen-IfcSlab.ids) | O | O | V |
| 41 | [9.18h Fysieke elementen IfcWall](ids/41-9.18h-Fysieke-elementen-IfcWall.ids) | O | O | V |
| 42 | [9.18i Fysieke elementen Ifcwindow](ids/42-9.18i-Fysieke-elementen-IfcWindow.ids) | O | O | V |
| 43 | [9.16d Beschermd subbrandcompartiment](ids/43-9.16d-Beschermd-subbrandcompartiment.ids) | O | O | V |
| 44 | [9.01f Verticaal datum (NAP)](ids/44-9.01f-Verticaal-datum.ids) | V¹ | V¹ | V¹ |
| 45 | [9.18j Fysieke elementen IfcRoof](ids/45-9.18j-Fysieke-elementen-IfcRoof.ids) | O | O | V |
| 46 | [9.18k Fysieke elementen IfcStair](ids/46-9.18k-Fysieke-elementen-IfcStair.ids) | O | O | V |
| 47 | [9.18l Fysieke elementen IfcRamp](ids/47-9.18l-Fysieke-elementen-IfcRamp.ids) | O | O | V |
| 48 | [9.18m Fysieke elementen IfcTransportElement.ELEVATOR](ids/48-9.18m-Fysieke-elementen-IfcTransportElement.ELEVATOR.ids) | O | O | V |
| 49 | [9.18n Fysieke elementen IfcRailing](ids/49-9.18n-Fysieke-elementen-IfcRailing.ids) | O | O | V |

¹ Alleen bij EPSG:28992: de specificatie geldt alleen voor een `IfcProjectedCRS` met `Name` EPSG:28992.

## Nog niet uitgewerkte checks

**Tijdig vaststellen van brand** (brandmeldinstallatie en rookmelders). Grondslag voor bestaande bouw: Bbl § 3.7.5, artikelen 3.114–3.117. De overeenkomstige paragraaf voor nieuwbouw in hoofdstuk 4 van het Bbl moet nog worden opgezocht.

Specificatie 9.18f (`IfcSensor`, PredefinedType `SMOKESENSOR`, ObjectType `Rookmelder`) komt terug zodra deze check is uitgewerkt. De oude specificatie staat bewaard in de map `gereserveerd/`, buiten `ids/`: ze telt niet mee en wordt niet gevalideerd als onderdeel van deze ILS. Het nummer 39 blijft daarvoor vrij.
