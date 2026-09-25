Dit is een **testversie** van de ILS omgevingsvergunning. Deze dient voor afstemming met betrokken gemeenten, betrokken leveranciers en ketenpartners (BNA, NEPROM, Digigo, NL ingenieurs, WoningbouwersNL, Bouwend Nederland, Vereniging van BWT, Ministerie van VRO, buildingSMART NL en VNG). Na afstemming en goedkeuring zal de ILS omgevingsvergunning een eerste officiële 1.0 versie krijgen. 

Onderzocht gaat worden om deze specificaties integraal onderdeel van de indieningsvereisten te maken vanuit het omgevingsloket.

Deze Informatieleveringsspecificatie (ILS) Omgevingsvergunning legt vast **welke informatie** een aanvrager in een 3D-informatiemodel (IFC) aanlevert, **in welk formaat**, **op welk moment** en **door wie**, zodat een gemeente de aanvraag voor een omgevingsvergunning voor een deel geautomatiseerd ondersteund kan toetsen.

De ILS is opgesteld binnen het VNG-programma **Beleidsmaatregel 13 - Vergunningverlening met BIM** (3D/openBIM/IFC) en volgt de opbouw van het **digiGO Toetsingskader ILS** en het **ILS-Referentiesjabloon** (Deel A: toelichting, Deel B: machineleesbaar datasjabloon). Het bouwt ook verder op de kennis en ervaring zoals is opgedaan door Gemeente Rotterdam en DSGO "Specifieke afspraken".

**In het kort**

- **Doel:** 17 checks die gemeenten uitvoeren bij het *inhoudelijk behandelen van de aanvraag* (GEMMA bedrijfsproces 015 *Behandelen aanvraag*, deelproces 015-03 *Inhoudelijk behandelen aanvraag*, processtap *Toetsen aan regelgeving*).
- **Activiteiten:** omgevingsplanactiviteit bouwen (checks #1–#6) en technische bouwactiviteit (checks #7–#17).
- **Gebouwtype:** in deze versie in principe **woonfunctie**.
- **Machineleesbaar deel:** 42 IDS 1.0-deelspecificaties, afgeleid van de *ILS voor Ruimten in de Omgevingswet* (bSDD `bsnl/Omgevingswet-Ruimten/0.3.0`).
- **Informatiemodel:** IFC 4.3 (ISO 16739-1:2024); IFC4 ADD2 TC1 toegestaan zolang software IFC 4.3 nog niet ondersteunt.
- **Geometrie:** IDS toetst geen geometrie. Deze ILS stelt daarom aanvullende geometrische eisen en beschrijft een tweeledige controle: de BIM/CAD-software levert hoeveelheden aan, de ontvangende software rekent ze na.

<p class="note">Dit is een <strong>werkversie (0.1.2)</strong>. Onderdelen die per gemeente of project worden ingevuld staan als <em>invulformat</em> in deze ILS. Openstaande keuzes staan in <a href="#open-punten">Open punten en beslisvragen</a>.</p>

**Colofon.** Uitgegeven door de Vereniging van Nederlandse Gemeenten (VNG). Opgesteld door Lex Ransijn (VDCbase) in opdracht van VNG.
