/* ==========================================================================
   Tabelverrijking ILS Omgevingsvergunning
   Hoort bij assets/ils-tables.css.    Het script laat de tekstinhoud ongemoeid en voegt presentatiestructuur toe:
     - een omhulsel waarin brede tabellen horizontaal scrollen (met randschaduw)
     - een plakkende kop en, bij brede tabellen, een plakkende eerste kolom
     - kolomtypen: getal, korte waarde, vrije tekst
     - labels voor IDS-verwijzingen, checknummers, kardinaliteit (R/O/X) en ja/nee
     - syntaxkleuren voor IFC STEP-fragmenten
   Draait zowel op de ReSpec-pagina's als op de statische leesversies.
   ========================================================================== */

(function () {
  "use strict";

  var NL = (document.documentElement.lang || "nl").toLowerCase().indexOf("nl") === 0;

  var TXT = {
    more: NL ? "Toon alle %d specificaties" : "Show all %d specifications",
    less: NL ? "Toon minder" : "Show less",
    card: NL
      ? { R: "verplicht", O: "optioneel", X: "verboden" }
      : { R: "required", O: "optional", X: "prohibited" }
  };

  var WIDE_COLS = 5;      // vanaf dit aantal kolommen: compacte, brede tabel
  var TALL_ROWS = 25;     // vanaf dit aantal rijen: eigen scrollvenster met vaste kop
  var MAX_CHIPS = 8;      // meer labels dan dit worden ingeklapt

  var RE_NUM = /^-?\d+([.,]\d+)?\s*%?$/;
  var RE_CHECKS = /^#\d+(\s*[–—-]\s*#?\d+)?([\s,;]+#\d+(\s*[–—-]\s*#?\d+)?)*$/;
  var RE_CARD = /^(card\.?|kardinaliteit|cardinality)$/i;
  var RE_YES = /^(ja|yes)\b/i;
  var RE_NO = /^(nee|nej|no)\b/i;
  var RE_PARTIAL = /^(beperkt|deels|limited|partly|partial)\b/i;
  var RE_EMPTY = /^(—|-|–|n\.v\.t\.|n\/a)$/;
  var RE_STEP_TOKEN = /'(?:''|[^'])*'|#\d+|\bIFC[A-Z0-9_]+\b|\.[A-Z][A-Z0-9_]*\.|[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?|\$|\*/g;

  function text(el) {
    return (el.textContent || "").trim();
  }

  function addClass(el, name) {
    if (el && el.classList) el.classList.add(name);
  }

  /* ---- cellen -------------------------------------------------------- */

  // Leegt een cel en geeft een container terug waarin labels naast elkaar staan.
  function tagBox(cell) {
    cell.textContent = "";
    addClass(cell, "ils-cell-tags");
    var box = document.createElement("span");
    box.className = "ils-tags";
    cell.appendChild(box);
    return box;
  }

  function chipifyLinks(cell) {
    var links = cell.querySelectorAll("a");
    if (links.length < 3) return false;
    // alleen als de cel vrijwel uitsluitend uit verwijzingen bestaat
    var rest = text(cell);
    for (var i = 0; i < links.length; i++) rest = rest.replace(text(links[i]), "");
    if (rest.replace(/[\s,;·|]/g, "").length > 2) return false;

    // de labels komen in een binnencontainer: een <td> mag geen flexbox worden
    var box = tagBox(cell);
    var rests = null;
    for (var j = 0; j < links.length; j++) {
      addClass(links[j], "ils-chip");
      if (j === MAX_CHIPS && links.length > MAX_CHIPS + 1) {
        rests = document.createElement("span");
        rests.className = "ils-rest";
        box.appendChild(rests);
      }
      (rests || box).appendChild(links[j]);
    }

    if (rests) {
      var hidden = links.length - MAX_CHIPS;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ils-more";
      btn.textContent = "+" + hidden;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("title", TXT.more.replace("%d", links.length));
      btn.addEventListener("click", function () {
        var collapsed = box.getAttribute("data-collapsed") !== "false";
        box.setAttribute("data-collapsed", collapsed ? "false" : "true");
        btn.setAttribute("aria-expanded", collapsed ? "true" : "false");
        btn.textContent = collapsed ? "−" : "+" + hidden;
        btn.setAttribute("title", collapsed ? TXT.less : TXT.more.replace("%d", links.length));
      });
      box.setAttribute("data-collapsed", "true");
      box.appendChild(btn);
    }
    return true;
  }

  function chipifyChecks(cell) {
    var value = text(cell);
    if (!RE_CHECKS.test(value) || cell.querySelector("a")) return false;
    var parts = value.split(/[\s,;]+/).filter(Boolean);
    var box = tagBox(cell);
    parts.forEach(function (part) {
      var chip = document.createElement("span");
      chip.className = "ils-chip ils-chip--check";
      chip.textContent = part;
      box.appendChild(chip);
    });
    return true;
  }

  function badgeCardinality(cell) {
    var value = text(cell);
    if (!/^[ROX]$/.test(value)) return false;
    var span = document.createElement("span");
    span.className = "ils-card ils-card--" + value.toLowerCase();
    span.textContent = value;
    if (TXT.card[value]) span.title = TXT.card[value];
    cell.textContent = "";
    cell.appendChild(span);
    return true;
  }

  function flagYesNo(cell) {
    var value = text(cell);
    var kind = RE_YES.test(value) ? "yes" : RE_NO.test(value) ? "no" : RE_PARTIAL.test(value) ? "partial" : null;
    if (!kind || cell.children.length) return false;
    addClass(cell, "ils-flag");
    addClass(cell, "ils-flag--" + kind);
    return true;
  }

  function escapeHtml(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function stepTokenClass(token) {
    if (token.charAt(0) === "'") return "ils-step-string";
    if (token.charAt(0) === "#") return "ils-step-id";
    if (token.charAt(0) === ".") return "ils-step-enum";
    if (token === "$" || token === "*") return "ils-step-null";
    if (/^IFC/.test(token)) return "ils-step-type";
    return "ils-step-number";
  }

  function highlightStep(code) {
    if (code.querySelector(".ils-step-token")) return;
    var source = code.textContent || "";
    var html = "";
    var last = 0;
    var match;

    RE_STEP_TOKEN.lastIndex = 0;
    while ((match = RE_STEP_TOKEN.exec(source))) {
      html += escapeHtml(source.slice(last, match.index));
      html += '<span class="ils-step-token ' + stepTokenClass(match[0]) + '">' + escapeHtml(match[0]) + "</span>";
      last = RE_STEP_TOKEN.lastIndex;
    }
    html += escapeHtml(source.slice(last));
    code.innerHTML = html;
    addClass(code.parentNode, "ils-step-block");
  }

  /* ---- kolommen ------------------------------------------------------ */

  function columnCells(rows, index) {
    var cells = [];
    for (var i = 0; i < rows.length; i++) {
      var cell = rows[i].cells[index];
      if (cell && cell.colSpan === 1) cells.push(cell);
    }
    return cells;
  }

  function classifyColumns(table, headCells, bodyRows) {
    var count = headCells.length || (bodyRows[0] ? bodyRows[0].cells.length : 0);

    for (var c = 0; c < count; c++) {
      var cells = columnCells(bodyRows, c);
      if (!cells.length) continue;

      var header = headCells[c] ? text(headCells[c]) : "";
      var values = cells.map(text).filter(function (v) { return v && !RE_EMPTY.test(v); });
      var isNum = values.length > 0 && values.every(function (v) { return RE_NUM.test(v); });
      var isShort = values.length > 0 && values.every(function (v) { return v.length <= 4; });
      var isCard = RE_CARD.test(header) || (values.length > 0 && values.every(function (v) { return /^[ROX]$/.test(v); }));

      var colClass = isNum ? "ils-col-num" : (isShort || isCard) ? "ils-col-short" : null;
      if (colClass) {
        if (headCells[c]) addClass(headCells[c], colClass);
        cells.forEach(function (cell) { addClass(cell, colClass); });
      }

      cells.forEach(function (cell) {
        if (RE_EMPTY.test(text(cell))) {
          addClass(cell, "ils-empty");
          return;
        }
        if (isCard && badgeCardinality(cell)) return;
        if (chipifyLinks(cell)) return;
        if (chipifyChecks(cell)) return;
        if (c > 0) flagYesNo(cell);
      });
    }
  }

  /* ---- scrollstatus -------------------------------------------------- */

  function watchScroll(wrap, scroller) {
    function update() {
      var slack = scroller.scrollWidth - scroller.clientWidth;
      wrap.classList.toggle("is-scrollable", slack > 2);
      wrap.classList.toggle("is-scrolled-left", scroller.scrollLeft > 2);
      wrap.classList.toggle("is-scrollable-right", slack > 2 && scroller.scrollLeft < slack - 2);
    }
    scroller.addEventListener("scroll", update, { passive: true });
    if (window.ResizeObserver) new ResizeObserver(update).observe(scroller);
    else window.addEventListener("resize", update);
    update();
    // na het laden van webfonts kunnen kolombreedtes nog verschuiven
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
  }

  /* ---- tabel --------------------------------------------------------- */

  function enhance(table) {
    if (table.hasAttribute("data-ils-table")) return;
    table.setAttribute("data-ils-table", "");

    var head = table.tHead;
    var headCells = head && head.rows.length ? Array.prototype.slice.call(head.rows[head.rows.length - 1].cells) : [];
    var bodyRows = Array.prototype.slice.call(table.tBodies.length ? table.tBodies[0].rows : []);
    var cols = headCells.length || (bodyRows[0] ? bodyRows[0].cells.length : 0);

    // omhulsel: hergebruik het bestaande scrollblok van de statische leesversie
    var scroller = table.parentNode;
    if (!scroller || !scroller.classList || !scroller.classList.contains("tw")) {
      scroller = document.createElement("div");
      table.parentNode.insertBefore(scroller, table);
      scroller.appendChild(table);
    }
    addClass(scroller, "ils-table__scroll");

    var wrap = document.createElement("div");
    wrap.className = "ils-table";
    scroller.parentNode.insertBefore(wrap, scroller);
    wrap.appendChild(scroller);

    if (cols >= WIDE_COLS) addClass(wrap, "ils-table--wide");
    if (bodyRows.length > TALL_ROWS) addClass(wrap, "ils-table--tall");
    if (cols === 2) addClass(wrap, "ils-table--pairs");
    if (headCells.length && headCells.every(function (cell) { return !text(cell); })) {
      addClass(wrap, "ils-table--headless");
    }

    if (cols >= WIDE_COLS) {
      if (headCells[0]) addClass(headCells[0], "ils-col-sticky");
      columnCells(bodyRows, 0).forEach(function (cell) { addClass(cell, "ils-col-sticky"); });
    }

    classifyColumns(table, headCells, bodyRows);
    watchScroll(wrap, scroller);
  }

  function isIdsFacetTable(table) {
    var row = table.tHead && table.tHead.rows.length
      ? table.tHead.rows[0]
      : table.rows[0];
    if (!row || row.cells.length < 4) return false;
    return text(row.cells[0]).toLowerCase() === "facet"
      && text(row.cells[1]).toLowerCase() === "naam"
      && text(row.cells[2]).toLowerCase() === "card."
      && text(row.cells[3]).toLowerCase() === "waarde";
  }

  function decorateIdsFacet(table) {
    var rows = table.tBodies.length ? table.tBodies[0].rows : [];
    for (var i = 0; i < rows.length; i++) {
      var facet = rows[i].cells[0];
      if (!facet) continue;
      var kind = text(facet).toLowerCase();
      if (kind === "attribute" || kind === "property" || kind === "classification") {
        facet.setAttribute("data-ids-facet", kind);
      }
    }
  }

  function enhanceIdsBoxes() {
    var tables = document.querySelectorAll("table[data-ils-table]");
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      if (!isIdsFacetTable(table)) continue;
      var section = table.closest("section");
      if (!section || section.hasAttribute("data-ils-ids-box")) continue;

      var children = Array.prototype.slice.call(section.children);
      var meta = null;
      var applicability = null;
      for (var j = 0; j < children.length; j++) {
        if (children[j].tagName !== "P") continue;
        var value = text(children[j]);
        if (!meta && value.indexOf("Bestand:") === 0) meta = children[j];
        if (!applicability && value.indexOf("Van toepassing op:") === 0) applicability = children[j];
      }
      var tableWrap = table.closest(".ils-table");
      var heading = section.querySelector(".header-wrapper h4");
      if (!meta || !applicability || !tableWrap || !heading) continue;

      var sectionNumber = heading.querySelector(".secno");
      var title = text(heading);
      if (sectionNumber) title = title.replace(text(sectionNumber), "").trim();

      var box = document.createElement("div");
      box.className = "ils-ids-box";
      var header = document.createElement("div");
      header.className = "ils-ids-box__header";
      var titleEl = document.createElement("strong");
      titleEl.className = "ils-ids-box__title";
      titleEl.textContent = title;
      var version = document.createElement("span");
      version.className = "ils-ids-box__version";
      version.textContent = "VNG · IDS 0.96 · 2026-11-16";
      header.appendChild(titleEl);
      header.appendChild(version);

      section.insertBefore(box, meta);
      box.appendChild(header);
      meta.classList.add("ils-ids-box__meta");
      applicability.classList.add("ils-ids-box__applicability");
      box.appendChild(meta);
      box.appendChild(applicability);
      box.appendChild(tableWrap);
      table.classList.add("ils-ids-table");
      decorateIdsFacet(table);
      section.setAttribute("data-ils-ids-box", "");
    }
  }

  function run() {
    var tables = document.querySelectorAll("table:not([data-ils-table])");
    for (var i = 0; i < tables.length; i++) enhance(tables[i]);

    var stepBlocks = document.querySelectorAll("pre > code.language-step, pre > code.step");
    for (var j = 0; j < stepBlocks.length; j++) highlightStep(stepBlocks[j]);
    enhanceIdsBoxes();
  }

  function start() {
    run();
    // ReSpec voegt de hoofdstukken asynchroon toe
    if (window.MutationObserver) {
      var pending = null;
      new MutationObserver(function () {
        if (pending) return;
        pending = setTimeout(function () { pending = null; run(); }, 60);
      }).observe(document.body, { childList: true, subtree: true });
    }
    if (document.respec && document.respec.ready) document.respec.ready.then(run);
    document.addEventListener("respec-ready", run);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
