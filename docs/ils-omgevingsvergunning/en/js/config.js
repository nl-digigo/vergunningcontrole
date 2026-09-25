// ReSpec configuration ILS Omgevingsvergunning (English, machine-translated)
var respecConfig = {
  specStatus: "DRAFT",
  license: "cc-by",
  shortName: "vergunningscontrole/ils-omgevingsvergunning-en",
  imprint: "digigo",
  subtitle: "submission requirements for an environmental permit application with a 3D information model (machine-translated; the Dutch version is authoritative)",
  publishDate: "2026-09-25",
  // version: 0.1.2 (draft) — translation of the Dutch 0.1.2
  authors: [
    { name: "Vereniging van Nederlandse Gemeenten", company: "VNG", companyURL: "https://vng.nl" }
  ],
  editors: [
    { name: "Lex Ransijn", company: "VDCbase", companyURL: "https://vdcbase.com", note: "Project lead and coordination" }
  ],
  otherLinks: [
    { key: "Project management", data: [{ value: "Jeroen de Ruig" }] },
    { key: "Co-authors", data: [
      { value: "Menno Mekes (Arons en Gelauff) – IDS set-up" },
      { value: "Jan Brouwer (On-Track) – bSDD further development" },
      { value: "Rien van der Scheur (On-Track) – bSDD set-up" },
      { value: "Pepijn van der Vooren (IMPlace) – running test cases" },
      { value: "Arjan Toet (BIMt) – software testing" }
    ] },
    { key: "Reviewers", data: [
      { value: "Rolf Jonker" },
      { value: "Willeke Wijnen" },
      { value: "Anne de Ruijtter" }
    ] },
    { key: "In cooperation with", data: [
      { value: "Participating pilot municipalities, software vendors, steering group, digiGO" }
    ] },
    { key: "Dutch original", data: [{ value: "../index.html" }] }
  ],
  latestVersion: null,
  github: null,
  lint: { "no-unused-dfns": false },
  noRecTrack: true,
  logos: [],
  maxTocLevel: 2,
  localBiblio: {
    "ISO19650-2": { title: "NEN-EN ISO 19650-2 Organization and digitization of information about buildings and civil engineering works", publisher: "ISO" },
    "ISO7817-1": { title: "ISO 7817-1:2024 Level of information need", publisher: "ISO" },
    "IFC43": { title: "ISO 16739-1:2024 Industry Foundation Classes (IFC 4.3)", href: "https://ifc43-docs.standards.buildingsmart.org/", publisher: "buildingSMART International" },
    "IDS": { title: "Information Delivery Specification 1.0", href: "https://github.com/buildingSMART/IDS", publisher: "buildingSMART International" },
    "ILS-RUIMTEN": { title: "ILS voor Ruimten in de Omgevingswet", publisher: "digiGO" },
    "TOETSINGSKADER-ILS": { title: "Toetsingskader ILS v1.0 and assessment instrument v1.1", publisher: "digiGO" }
  }
};
