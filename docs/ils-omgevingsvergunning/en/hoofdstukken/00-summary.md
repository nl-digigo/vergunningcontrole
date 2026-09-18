<p class="note"><strong>Machine-translated version.</strong> This English text was translated automatically from the Dutch original and has not been fully reviewed. <strong>The Dutch version is authoritative</strong>; if the two differ, the Dutch text applies. Terms from GEMMA (process names and numbers), the STB 2025 phase names and the content of the IDS files are kept in Dutch on purpose, because they refer to Dutch standards and machine-readable values.</p>

This Information Delivery Specification (ILS, *Informatieleveringsspecificatie*) for the environmental permit (*Omgevingsvergunning*) sets out **what information** an applicant delivers in a 3D information model (IFC), **in which format**, **at what moment** and **by whom**. With this information, a municipality can check most of an environmental permit application automatically.

The ILS was drafted within the VNG programme **BM13 – Machine-readable rules / GeoBIM toolkit**. It follows the structure of the **digiGO Toetsingskader ILS** (ILS assessment framework) and the **ILS-Referentiesjabloon** (ILS reference template: Part A explanation, Part B machine-readable data template).

**In short**

- **Purpose:** 17 checks that municipalities carry out when assessing the substance of an application (GEMMA bedrijfsproces 015 *Behandelen aanvraag*, deelproces 015-03 *Inhoudelijk behandelen aanvraag*, processtap *Toetsen aan regelgeving*).
- **Activities:** the zoning plan activity for building (*omgevingsplanactiviteit bouwen*, checks #1–#6) and the technical building activity (*technische bouwactiviteit*, checks #7–#17).
- **Building type:** in this version, in principle the *residential function* (*woonfunctie*).
- **Machine-readable part:** 42 IDS 1.0 sub-specifications, derived from the *ILS voor Ruimten in de Omgevingswet* (bSDD `bsnl/Omgevingswet-Ruimten/0.3.0`).
- **Information model:** IFC 4.3 (ISO 16739-1:2024). IFC4 ADD2 TC1 is allowed as long as software does not yet support IFC 4.3.
- **Geometry:** IDS does not check geometry. This ILS therefore sets additional geometric requirements and describes a two-step check: the CAD software delivers the quantities, and the receiving software recalculates them.

<p class="note">This is a <strong>working version (0.1)</strong>. Parts that each municipality or project fills in are included in this ILS as a <em>fill-in format</em>. Open choices are listed under <a href="#open-punten">Open issues and decisions</a>.</p>

**Colophon.** Published by the Association of Netherlands Municipalities (VNG). Drafted by Lex Ransijn (VDCbase) on behalf of VNG, under the direction of project leader Jeroen de Ruig, in cooperation with the steering group members BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO and Bouwend Nederland.
