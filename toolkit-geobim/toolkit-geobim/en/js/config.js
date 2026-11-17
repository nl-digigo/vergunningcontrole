// ReSpec-configuration — GeoBIM Permitting Toolkit (English)
// House style: digiGO (same as ILS Omgevingsvergunning).
// Manual: https://github.com/stichting-crow/respec/wiki
// The Dutch version (../js/config.js) is the leading version; keep both in step.
var respecConfig = {
  title: "GeoBIM Permitting Toolkit",
  subtitle: "Seventeen checks for building applications, from rule text to machine-readable rule",

  //-- House style and logo
  imprint: "digigo",

  //-- Status: DRAFT = working draft. Later e.g. "DEF" for final.
  specStatus: "DRAFT",
  specType: "guidance",
  shortName: "vergunningcontrole/toolkit-geobim/en",
  license: "cc-by",
  publishDate: "2026-09-28",

  editors: [
    {
      name: "Siham El Yamani",
      company: "VNG",
      companyURL: "https://vng.nl",
      note: "editor",
    },
    {
      name: "Gerlof de Haan",
      note: "the 17 checks",
    },
  ],

  authors: [
    {
      name: "Jeroen de Ruig",
      company: "VNG",
      companyURL: "https://vng.nl",
      note: "project lead BM13",
    },
    {
      name: "Lex Ransijn",
      company: "VDCbase",
      companyURL: "https://vdcbase.com",
      note: "ILS and IDS",
    },
    {
      name: "Peter Bonsma",
      company: "RDF Ltd.",
      note: "technical management",
    },
    {
      name: "Willeke Wijnen",
      note: "municipalities and community",
    },
  ],

  otherLinks: [
    {
      key: "Publisher",
      data: [{ value: "Association of Netherlands Municipalities (VNG)", href: "https://vng.nl" }],
    },
    {
      key: "Project lead",
      data: [{ value: "Jeroen de Ruig (VNG)" }],
    },
    {
      key: "In cooperation with",
      data: [
        { value: "Participating front-runner municipalities" },
        { value: "Software vendors" },
        { value: "Steering group: BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO, Bouwend Nederland" },
      ],
    },
    {
      key: "With thanks to",
      data: [
        { value: "Elisabeth de Vries (digiGO)" },
        { value: "Rolf Jonker (digiGO)" },
      ],
    },
    {
      key: "Other language",
      data: [{ value: "Nederlandse versie", href: "../" }],
    },
  ],

  //-- Second logo next to digiGO (optional): put the VNG logo at media/vng-logo.svg and remove //.
  //logos: [{ src: "../media/vng-logo.svg", alt: "VNG", url: "https://vng.nl", height: 60, width: 120 }],

  github: "https://github.com/nl-digigo/vergunningcontrole",

  lint: { "no-unused-dfns": false },

  //-- Sources are kept centrally in ../js/biblio.js (shared with the Dutch version)
  localBiblio: toolkitBiblio,
};
