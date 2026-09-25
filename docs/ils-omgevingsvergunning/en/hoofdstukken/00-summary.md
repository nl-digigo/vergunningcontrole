<p class="note"><strong>Machine-translated version.</strong> This English text was translated automatically from the Dutch original and has not been fully reviewed. <strong>The Dutch version is authoritative</strong>; if the two differ, the Dutch text applies. Terms from GEMMA, the STB 2025 phase names and the content of the IDS files are kept in Dutch on purpose, because they refer to Dutch standards and machine-readable values.</p>

This is a **test version** of the ILS Omgevingsvergunning. It is intended for consultation with the municipalities involved, the suppliers involved and chain partners (BNA, NEPROM, Digigo, NL ingenieurs, WoningbouwersNL, Bouwend Nederland, Vereniging van BWT, Ministerie van VRO, buildingSMART NL and VNG). After consultation and approval, the ILS Omgevingsvergunning will receive its first official version 1.0.

It will be investigated whether these specifications can be made an integral part of the submission requirements from the *Omgevingsloket* (Environment and Planning Portal).

This Information Delivery Specification (ILS) Omgevingsvergunning sets out **what information** an applicant delivers in a 3D information model (IFC), **in which format**, **at what moment** and **by whom**, so that a municipality can check the application for an environmental permit (*omgevingsvergunning*) with partially automated support.

The ILS was drafted within the VNG programme **Beleidsmaatregel 13 – Vergunningverlening met BIM** (Policy measure 13 – Permitting with BIM; 3D/openBIM/IFC) and follows the structure of the **digiGO Toetsingskader ILS** (ILS assessment framework) and the **ILS-Referentiesjabloon** (ILS reference template: Part A explanation, Part B machine-readable data template). It also builds further on the knowledge and experience gained by *Gemeente Rotterdam* and DSGO's *"Specifieke afspraken"* (specific agreements).

**In short**

- **Purpose:** 17 checks that municipalities carry out when *substantively assessing the application* (GEMMA bedrijfsproces 015 *Behandelen aanvraag*, deelproces 015-03 *Inhoudelijk behandelen aanvraag*, processtap *Toetsen aan regelgeving*).
- **Activities:** the zoning plan activity for building (*omgevingsplanactiviteit bouwen*, checks #1–#6) and the technical building activity (*technische bouwactiviteit*, checks #7–#17).
- **Building type:** in this version, in principle the **residential function** (*woonfunctie*).
- **Machine-readable part:** 42 IDS 1.0 sub-specifications, derived from the *ILS voor Ruimten in de Omgevingswet* (bSDD `bsnl/Omgevingswet-Ruimten/0.3.0`).
- **Information model:** IFC 4.3 (ISO 16739-1:2024); IFC4 ADD2 TC1 is allowed as long as software does not yet support IFC 4.3.
- **Geometry:** IDS does not check geometry. This ILS therefore sets additional geometric requirements and describes a two-part check: the BIM/CAD software delivers the quantities, and the receiving software recalculates them.

<p class="note">This is a <strong>working version (0.1.2)</strong>. Parts that are filled in per municipality or project are included in this ILS as a <em>fill-in format</em>. Open choices are listed under <a href="#open-punten">Open issues and decisions</a>.</p>

**Colophon.** Published by the Association of Netherlands Municipalities (VNG). Drafted by Lex Ransijn (VDCbase) on behalf of VNG.
