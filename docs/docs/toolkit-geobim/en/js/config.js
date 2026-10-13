// ReSpec configuration — GeoBIM Permitting Toolkit (English)
// The Dutch version (../js/config.js) is the leading version; keep both in step.
// Gebaseerd op het Geonovum NL-ReSpec-template:
// https://github.com/Geonovum/NL-ReSpec-template
// Handleiding: https://geonovum.github.io/handleiding-tooling/ReSpec/

let respecConfig = {
  useLogo: true,
  useLabel: true,

  title: "GeoBIM Permitting Toolkit",
  subtitle: "Seventeen checks for building applications, from rule text to machine-readable rule",

  //-- specStatus (verplicht): wv = Werkversie, cv = Consultatieversie,
  //-- vv = Versie ter vaststelling, def = Vastgestelde versie
  specStatus: "wv",

  //-- specType (verplicht): HR = Handreiking
  specType: "HR",

  //-- pubDomain (verplicht, komt in de URL). "dsgo" = Digitaal Stelsel Gebouwde Omgeving
  pubDomain: "dsgo",

  //-- shortName (verplicht, komt in de URL, geen hoofdletters)
  shortName: "toolkit-geobim",

  license: "cc-by",

  //-- publishDate is verplicht. Bij een werkversie toont ReSpec de datum van de laatste push.
  publishDate: "2026-09-25",

  //-- publishVersion mag leeg zijn [], maar niet de lege string.
  publishVersion: [],

  //-- Alleen invullen als er eerdere versies zijn, en altijd beide:
  //previousPublishDate: "2026-10-01",
  //previousMaturity: "wv",

  editors: [
    {
      name: "Siham El Yamani",
      company: "VNG",
      companyURL: "https://vng.nl",
    },
  ],

  authors: [
    {
      name: "Policy Measure 13 project team",
      company: "VNG",
      companyURL: "https://vng.nl",
    },
  ],

  otherLinks: [
    {
      key: "Project lead",
      data: [{ value: "Jeroen de Ruig (VNG)" }],
    },
    {
      key: "Other language",
      data: [{ value: "Nederlandse versie", href: "../" }],
    },
  ],

  github: "https://github.com/nl-digigo/vergunningcontrole",

  //-- Begrippen die niet in de tekst terugkomen geven geen waarschuwing
  lint: { "no-unused-dfns": false },

  postProcess: [
    ...(organisationConfig.postProcess ?? []),
    localizeGitHubHeaderLinks,
  ],

  //-- Sources are kept centrally in ../js/biblio.js (shared with the Dutch version)
  localBiblio: toolkitBiblio,
};

// Zet in het voorblad "Alle issues" in plaats van de Engelse linktekst.
function localizeGitHubHeaderLinks(_config, document) {
  if (document.documentElement.lang !== "nl") {
    return;
  }
  const issueLink = document.querySelector(
    '.head dl a[href$="/issues/"], .head dl a[href$="/issues"]'
  );
  if (issueLink) {
    issueLink.textContent = "Alle issues";
  }
}
