// ReSpec-configuratie ILS Omgevingsvergunning
var respecConfig = {
  specStatus: "base",
  shortName: "ils-omgevingsvergunning-en",
  subtitle: "Information Delivery Specification for an environmental permit application with a 3D information model (machine-translated; the Dutch version is authoritative)",
  publishDate: "2026-09-17",
  // versie: 0.1.0 (concept)
  editors: [
    { name: "Lex Ransijn", company: "VDCbase (on behalf of VNG)", companyURL: "https://vdcbase.com" }
  ],
  authors: [
    { name: "Association of Netherlands Municipalities (VNG)", company: "VNG", companyURL: "https://vng.nl" }
  ],
  formerEditors: [],
  otherLinks: [
    { key: "Project leader", data: [{ value: "Jeroen de Ruig (VNG, project leader BM13)" }] },
    { key: "In cooperation with", data: [
      { value: "Steering group: BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO, Bouwend Nederland" }
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
