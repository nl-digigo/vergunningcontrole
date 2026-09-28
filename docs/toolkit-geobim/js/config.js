// ReSpec-configuratie — Toolkit Vergunningverlening met GeoBIM (Nederlands)
// Huisstijl: digiGO (zelfde als ILS Omgevingsvergunning).
// Handleiding: https://github.com/stichting-crow/respec/wiki

var respecConfig = {
  title: "Toolkit Vergunningverlening met GeoBIM",
  subtitle: "Zeventien checks voor bouwaanvragen, van regeltekst tot machineleesbare regel",

  //-- Huisstijl en logo
  imprint: "digigo",

  //-- Status: DRAFT = werkversie. Later bijvoorbeeld "DEF" voor definitief.
  specStatus: "DRAFT",
  specType: "handreiking",
  shortName: "vergunningcontrole/toolkit-geobim",
  license: "cc-by",
  publishDate: "2026-09-28",

  editors: [
    {
      name: "Siham El Yamani",
      company: "UrbanIQ, VNG",
      companyURL: "https://vng.nl",
      note: "redactie",
    },
    {
      name: "Gerlof de Haan",
      note: "VNG",
    },
  ],

  authors: [
    {
      name: "Jeroen de Ruig",
      company: "VNG",
      companyURL: "https://vng.nl",
      note: "projectleider BM13",
    },
    {
      name: "Lex Ransijn",
      company: "VDCbase, VNG",
      companyURL: "https://vdcbase.com",
      note: "ILS en IDS",
    },
    {
      name: "Peter Bonsma",
      company: "RDF Ltd., VNG",
      note: "technisch beheer",
    },
    {
      name: "Willeke Wijnen",
      note: "VNG",
    },
  ],

  otherLinks: [
    {
      key: "Uitgever",
      data: [{ value: "Vereniging van Nederlandse Gemeenten (VNG)", href: "https://vng.nl" }],
    },
    {
      key: "Projectleiding",
      data: [{ value: "Jeroen de Ruig (VNG)" }],
    },
    {
      key: "In samenwerking met",
      data: [
        { value: "Deelnemende koplopergemeenten" },
        { value: "Softwareleveranciers" },
        { value: "Stuurgroep: BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO, Bouwend Nederland" },
      ],
    },
    {
      key: "Met dank aan",
      data: [
        { value: "Elisabeth de Vries (digiGO)" },
        { value: "Rolf Jonker (digiGO)" },
      ],
    },
    {
      key: "Andere taal",
      data: [{ value: "English version", href: "en/" }],
    },
  ],

  //-- Tweede logo naast digiGO (optioneel): zet het VNG-logo als media/vng-logo.svg en haal // weg.
  //logos: [{ src: "media/vng-logo.svg", alt: "VNG", url: "https://vng.nl", height: 60, width: 120 }],

  github: "https://github.com/nl-digigo/vergunningcontrole",

  lint: { "no-unused-dfns": false },

  //-- Bronnen staan centraal in js/biblio.js (gedeeld met de Engelse versie)
  localBiblio: toolkitBiblio,
};
