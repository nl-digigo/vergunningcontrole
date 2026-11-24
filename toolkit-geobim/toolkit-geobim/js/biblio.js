// Gedeelde bibliografie voor de Toolkit GeoBIM (Nederlandse en Engelse versie).
// Wordt geladen vóór js/config.js. Voeg nieuwe bronnen hier toe, één keer,
// en verwijs in de tekst met [[SLEUTEL]].

const toolkitBiblio = {
  // — Nederlandse wet- en regelgeving
  OMGEVINGSWET: { title: "Omgevingswet", href: "https://wetten.overheid.nl/BWBR0037885", publisher: "Overheid.nl" },
  BBL: { title: "Besluit bouwwerken leefomgeving", href: "https://wetten.overheid.nl/BWBR0041297", publisher: "Overheid.nl" },
  ARCHIEFWET: { title: "Archiefwet 1995", href: "https://wetten.overheid.nl/BWBR0007376", publisher: "Overheid.nl" },
  WDO: { title: "Wet digitale overheid", href: "https://wetten.overheid.nl/BWBR0048156", publisher: "Overheid.nl" },
  "WET-BAG": { title: "Wet basisregistratie adressen en gebouwen", href: "https://wetten.overheid.nl/BWBR0023466", publisher: "Overheid.nl" },
  "WET-BGT": { title: "Wet basisregistratie grootschalige topografie", href: "https://wetten.overheid.nl/BWBR0034026", publisher: "Overheid.nl" },

  // — Europese wet- en regelgeving en kaders
  AVG: { title: "Verordening (EU) 2016/679 — Algemene verordening gegevensbescherming", href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj", publisher: "Europese Unie" },
  INSPIRE: { title: "Richtlijn 2007/2/EG — INSPIRE", href: "https://eur-lex.europa.eu/eli/dir/2007/2/oj", publisher: "Europese Unie" },
  "AANBESTEDING-EU": { title: "Richtlijn 2014/24/EU betreffende het plaatsen van overheidsopdrachten", href: "https://eur-lex.europa.eu/eli/dir/2014/24/oj", publisher: "Europese Unie" },
  DGA: { title: "Verordening (EU) 2022/868 — Data Governance Act", href: "https://eur-lex.europa.eu/eli/reg/2022/868/oj", publisher: "Europese Unie" },
  "DATA-ACT": { title: "Verordening (EU) 2023/2854 — Data Act", href: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj", publisher: "Europese Unie" },
  EIDAS: { title: "Verordening (EU) 910/2014 — eIDAS", href: "https://eur-lex.europa.eu/eli/reg/2014/910/oj", publisher: "Europese Unie" },
  EIF: { title: "European Interoperability Framework", href: "https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail", publisher: "Europese Commissie" },

  // — Europese onderzoeksprojecten
  CHEK: { title: "CHEK — Change toolkit for digital building permit", href: "https://chekdbp.eu/", publisher: "Horizon Europe" },
  ACCORD: { title: "ACCORD — Automated Compliance Checks for Construction, Renovation or Demolition Works", href: "https://accordproject.eu/", publisher: "Horizon Europe" },

  // — Overheidsstandaarden
  PTOLU: { title: "Lijst open standaarden (pas toe of leg uit)", href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht", publisher: "Forum Standaardisatie" },
  DIGIKOPPELING: { title: "Digikoppeling", href: "https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling", publisher: "Logius" },
  ZGW: { title: "API's voor Zaakgericht Werken", href: "https://vng-realisatie.github.io/gemma-zaken/", publisher: "VNG Realisatie" },
  DSGO: { title: "Digitaal Stelsel Gebouwde Omgeving", href: "https://www.dsgo.nl/", publisher: "DSGO" },
  STTR: { title: "Standaard Toepasbare Regels (STTR)", publisher: "Digitaal Stelsel Omgevingswet" },

  // — Normen
  ISO27001: { title: "NEN-EN-ISO/IEC 27001 — Informatiebeveiliging", href: "https://www.iso.org/standard/27001", publisher: "ISO/IEC" },
  "NEN-ISO16175": { title: "NEN-ISO 16175 — Informatie en documentatie: processen en functionele eisen voor software voor het beheer van records", publisher: "ISO" },
  NEN2660: { title: "NEN 2660-1 — Regels voor informatiemodellering van de gebouwde omgeving", publisher: "NEN" },
  NEN3610: { title: "NEN 3610 — Basismodel geo-informatie", publisher: "NEN" },
  "ISO19650-2": { title: "NEN-EN ISO 19650-2 — Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken", publisher: "ISO" },

  // — Bouw- en geostandaarden
  IFC: { title: "ISO 16739-1:2024 — Industry Foundation Classes (IFC 4.3)", href: "https://ifc43-docs.standards.buildingsmart.org/", publisher: "buildingSMART International" },
  IFC43: { title: "ISO 16739-1:2024 — Industry Foundation Classes (IFC 4.3)", href: "https://ifc43-docs.standards.buildingsmart.org/", publisher: "buildingSMART International" },
  IDS: { title: "Information Delivery Specification 1.0", href: "https://github.com/buildingSMART/IDS", publisher: "buildingSMART International" },
  MVDXML: { title: "mvdXML — Model View Definition XML", publisher: "buildingSMART International" },
  OPENCDE: { title: "OpenCDE APIs", href: "https://github.com/buildingSMART/OpenCDE-API", publisher: "buildingSMART International" },
  BIMBASISILS: { title: "BIM basis ILS", publisher: "digiGO" },
  CITYJSON: { title: "CityJSON", href: "https://www.cityjson.org/specs/", publisher: "OGC" },
  OGCAPI: { title: "OGC API", href: "https://ogcapi.ogc.org/", publisher: "Open Geospatial Consortium" },
  "ILS-OMGEVINGSVERGUNNING": { title: "ILS Omgevingsvergunning", href: "https://github.com/nl-digigo/vergunningcontrole/tree/BM13/machineleesbare-regels/docs/ils-omgevingsvergunning", publisher: "VNG / digiGO" },

  // — Web- en linked-datastandaarden
  RDF: { title: "RDF 1.1 Concepts and Abstract Syntax", href: "https://www.w3.org/TR/rdf11-concepts/", publisher: "W3C" },
  SPARQL: { title: "SPARQL 1.1 Query Language", href: "https://www.w3.org/TR/sparql11-query/", publisher: "W3C" },
  OWL2: { title: "OWL 2 Web Ontology Language Document Overview", href: "https://www.w3.org/TR/owl2-overview/", publisher: "W3C" },
  SHACL: { title: "Shapes Constraint Language (SHACL)", href: "https://www.w3.org/TR/shacl/", publisher: "W3C" },
  SKOS: { title: "SKOS Simple Knowledge Organization System Reference", href: "https://www.w3.org/TR/skos-reference/", publisher: "W3C" },
  "JSON-LD": { title: "JSON-LD 1.1", href: "https://www.w3.org/TR/json-ld11/", publisher: "W3C" },
  WCAG21: { title: "Web Content Accessibility Guidelines (WCAG) 2.1", href: "https://www.w3.org/TR/WCAG21/", publisher: "W3C" },
  TLS13: { title: "RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3", href: "https://www.rfc-editor.org/rfc/rfc8446", publisher: "IETF" },
  OAUTH2: { title: "RFC 6749 — The OAuth 2.0 Authorization Framework", href: "https://www.rfc-editor.org/rfc/rfc6749", publisher: "IETF" },
};
