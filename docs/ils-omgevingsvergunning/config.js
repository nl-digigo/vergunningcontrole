// ReSpec-configuratie ILS Omgevingsvergunning
var respecConfig = {
  specStatus: "DRAFT",
  license: "cc-by",
  shortName: "vergunningscontrole/ils-omgevingsvergunning",
  imprint: "digigo",
  subtitle: "indieningsvereisten voor een aanvraag omgevingsvergunning met een 3D-informatiemodel",
  publishDate: "2026-09-25",
  // versie: 0.1.2 (concept)
  authors: [
    { name: "Vereniging van Nederlandse Gemeenten", company: "VNG", companyURL: "https://vng.nl" }
  ],
  editors: [
    { name: "Lex Ransijn", company: "VDCbase", companyURL: "https://vdcbase.com", note: "Projectleider en coördinatie" }
  ],
  otherLinks: [
    { key: "Projectleiding", data: [{ value: "Jeroen de Ruig" }] },
    { key: "Co-auteurs", data: [
      { value: "Menno Mekes (Arons en Gelauff) – IDS opzet" },
      { value: "Jan Brouwer (On-Track) – bSDD doorontwikkeling" },
      { value: "Rien van der Scheur (On-Track) – bSDD opzet" },
      { value: "Pepijn van der Vooren (IMPlace) – Test-Cases uitvoeren" },
      { value: "Arjan Toet (BIMt) – Software testen" }
    ] },
    { key: "Reviewers", data: [{ value: "..." },
      { value: "Rolf Jonker" },
      { value: "Willeke Wijnen" },
      { value: "Anne de Ruijtter" },
      { value: "ntb" },
      { value: "ntb" },



    ] },
    { key: "In samenwerking met", data: [
      { value: "Deelnemende pilot Gemeenten, Softwareleveranciers, Stuurgroep, Digigo" }
    ] }
  ],
  latestVersion: null,
  github: null, // bijv. "https://github.com/nl-digigo/ils-omgevingsvergunning"
  lint: { "no-unused-dfns": false },
  noRecTrack: true,
  logos: [],
  maxTocLevel: 2,
  localBiblio: {
    "ISO19650-2": { title: "NEN-EN ISO 19650-2 Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken", publisher: "ISO" },
    "ISO7817-1": { title: "ISO 7817-1:2024 Level of information need", publisher: "ISO" },
    "IFC43": { title: "ISO 16739-1:2024 Industry Foundation Classes (IFC 4.3)", href: "https://ifc43-docs.standards.buildingsmart.org/", publisher: "buildingSMART International" },
    "IDS": { title: "Information Delivery Specification 1.0", href: "https://github.com/buildingSMART/IDS", publisher: "buildingSMART International" },
    "ILS-RUIMTEN": { title: "ILS voor Ruimten in de Omgevingswet", publisher: "digiGO" },
    "TOETSINGSKADER-ILS": { title: "Toetsingskader ILS v1.0 en toetsingsinstrument v1.1", publisher: "digiGO" }
  }
};
