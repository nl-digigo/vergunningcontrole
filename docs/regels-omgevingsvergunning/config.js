// ReSpec-configuratie Machineleesbare regels Omgevingsvergunning
var respecConfig = {
  specStatus: "DRAFT",
  license: "cc-by",
  shortName: "vergunningscontrole/regels-omgevingsvergunning",
  imprint: "digigo",
  subtitle: "SPARQL en SHACL voor de geautomatiseerde toets van een aanvraag omgevingsvergunning met een 3D-informatiemodel",
  publishDate: "2026-11-09",
  // versie: 0.1.0 (concept)
  authors: [
    { name: "Vereniging van Nederlandse Gemeenten", company: "VNG", companyURL: "https://vng.nl" }
  ],
  editors: [
    { name: "Peter Bonsma", company: "RDF Ltd", note: "SPARQL en SHACL" },
    { name: "Siham El Yamani", company: "VNG", note: "regelinterpretatie en pseudocode" }
  ],
  otherLinks: [
    { key: "Projectleiding", data: [{ value: "Jeroen de Ruig" }] }
  ],
  latestVersion: null,
  github: null,
  lint: { "no-unused-dfns": false },
  noRecTrack: true,
  logos: [],
  maxTocLevel: 2,
  localBiblio: {
    "SPARQL11": { title: "SPARQL 1.1 Query Language / Update", href: "https://www.w3.org/TR/sparql11-overview/", publisher: "W3C" },
    "SHACL": { title: "Shapes Constraint Language (SHACL)", href: "https://www.w3.org/TR/shacl/", publisher: "W3C" },
    "IFCOWL": { title: "ifcOWL IFC4 ADD2", href: "https://github.com/openBIMstandards/ifcOWL", publisher: "buildingSMART / openBIMstandards" }
  }
};
