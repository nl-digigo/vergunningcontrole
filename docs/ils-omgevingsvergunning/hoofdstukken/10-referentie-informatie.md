# Referentie-informatie en gedeelde bronnen

## Referentie-informatie

| Bron | Gebruik in deze ILS | Vindplaats |
|---|---|---|
| IFC 4.3 (ISO 16739-1:2024) | Informatiemodel en schema | [ifc43-docs.standards.buildingsmart.org](https://ifc43-docs.standards.buildingsmart.org/) |
| bSDD *Omgevingswet-Ruimten* 0.3.0 | Klassen en `ObjectType`-waarden voor ruimtelijke objecten | [Omgevingswet-Ruimten](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) |
| ILS voor Ruimten in de Omgevingswet (digiGO) | Bron van de IDS-specificaties | digiGO, *ILS'en en richtlijnen* [ILS voor ruimten in de Omgevingswet](https://www.digigo.nu/ils-voor-ruimten/)  |
| IDS 1.0 (buildingSMART) | Formaat van de acceptatieregels | [github.com/buildingSMART/IDS](https://github.com/buildingSMART/IDS) |
| NL-SfB tabel 1 (2021) | Classificatie | [NL-SfB](https://search.bsdd.buildingsmart.org/ext/dict?uri=https:%2F%2Fdata.ketenstandaard.nl%2Fpublications%2Fnlsfb%2F2021)|
| Naa.K.T. 2.4 | Materiaalbenaming | [Naa.k.t](https://search.bsdd.buildingsmart.org/uri/nkt/naakt/2.4) |
| BAG, BRK, BGT (Kadaster/PDOK) | Pand-ID, verblijfsobject-ID, percelen, omgeving | [pdok.nl](https://www.pdok.nl/) |
| Omgevingsplan (Regels op de kaart, DSO) | Normwaarden voor checks #1–#6 | [Omgevingsloket](https://omgevingswet.overheid.nl/regels-op-de-kaart) |
| Besluit bouwwerken leefomgeving | Normwaarden voor checks #7–#17 | [wetten.nl](https://wetten.overheid.nl/BWBR0041297/2026-01-01#Hoofdstuk1)|
| GEMMA processenmodel Omgevingswet (o.a. 013, 015) | Processen, processtappen en rollen; zie de [GEMMA-matrix](#gemma-matrix) | [gemmaonline.nl](https://www.gemmaonline.nl/) |
| CHEK DBP-procesmodel en volwassenheidsmatrix | Volwassenheidsniveau van de gemeente | [CHEK-project (EU Horizon)](https://chekdbp.eu/outcome/)|
| STB 2025 | Fasering en disciplinecodes | [BNA / NL Ingenieurs](https://bna.nl/vernieuwde-stb2026-nu-als-alpha-versie-beschikbaar/)|

## Informatiemodel als grondslag

Deze ILS gebruikt **IFC** als informatiemodel: een internationaal, ISO-vastgesteld conceptueel én logisch model voor bouwwerken. De Nederlandse begrippen komen uit de bSDD-publicatie *Omgevingswet-Ruimten*. Voor de procesmatige inbedding sluiten we aan op GEMMA (en NORA).

<p class="note">Beslisvraag aan digiGO: geldt IFC, eventueel met een bSDD-publicatie, als <em>vastgesteld informatiemodel</em> in de zin van criterium 4.2 van het Toetsingskader? Zie <a href="#open-punten">Open punten</a>.</p>

## Gedeelde bronnen (bijlagen in deze repository)

| Map / bestand | Inhoud |
|---|---|
| `ids/` | 42 IDS 1.0-deelspecificaties, één per specificatie |
| `data/specificaties_checks.csv` | Koppeling tussen specificaties, bSDD-identifiers en checks |
| Checks (repo `vergunningcontrole`) | Laag 0–5 per check |
