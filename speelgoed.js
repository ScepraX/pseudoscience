/* =====================================================================
   The Speelgoed on the page — one source of truth.

   The text lives in one file only: PseudoScienceSpeelgoed.md.
   GitHub Pages (Jekyll) writes it into #speelgoed-text when the site is
   built (see index.html), so readers without JavaScript and crawlers get
   the full text. This script holds no copy of it. It only arranges what
   is there, and reads everything else from the same source:

     - Schriften, chapters, the menu, equations, tables  (from the page)
     - graphs, drawn from the text's ```mermaid blocks   (from the page)
     - the Maxim for the footer drift                    (from the page)
     - the Lexicon words for the Tri-Unity               (from the page)
     - the Oracle prompt              (from the Oracle copy, made from the .md
                                       by _tools/oracle.py)
     - the visible charge                                (from #oracle-prompt)

   Without Jekyll (a local preview) the page has no text in it; then the
   .md is fetched and rendered here with marked, kept in lib/.
   ===================================================================== */
(function () {
  "use strict";

  var SOURCE = "PseudoScienceSpeelgoed.md";
  var ORACLE = "PseudoScienceSpeelgoed - Oracle.txt";
  var MARKED = "lib/marked.min.js";

  // The text comes in Schriften (## headings), each holding its chapters
  // (### headings). Both are matched by title, so renumbering never breaks
  // them; a Schrift or chapter that matches nothing gets an id made from
  // its title. The ids below are kept because links point at them.
  var PARTS = [
    { match: /^Relatiegids$/i, id: "m-relatiegids" },
    { match: /^Formal Structure$/i, id: "m-formal-structure" },
    { match: /^Weefsel$/i, id: "m-weefsel" },
    { match: /^Mensen$/i, id: "m-mensen" }
  ];
  var CHAPTERS = [
    { match: /^Fundamental/i, id: "m-fundamental", label: "Fundamentals" },
    { match: /^Core$/i, id: "m-core" },
    { match: /^Axioms$/i, id: "m-axioms" },
    { match: /^Coupling$/i, id: "m-coupling" },
    { match: /^Composition$/i, id: "m-composition" },
    { match: /^Reciprocation$/i, id: "m-reciprocation" },
    { match: /^Distortion$/i, id: "m-distortion" },
    { match: /^Lexicon$/i, id: "m-appendix" },
    { match: /^Yggdrasil$/i, id: "m-appendix-yggdrasil" },
    { match: /^Archaismos$/i, id: "m-archaismos" },
    { match: /^De Berg/i, id: "m-berg", label: "De Berg" },
    { match: /Techniques/i, id: "m-techniques", label: "The 7 Techniques" },
    { match: /Parasiet/i, id: "m-parasiet", label: "The Parasiet" },
    { match: /^War$/i, id: "m-war" }
  ];
  // Parts of the page that are not chapters of the text.
  var EXTRA = [
    { href: "#m-sources", num: "", label: "Sources", group: "epilogue", needs: "m-sources" },
    { href: "#m-scrolls", num: "↓", label: "The Scrolls", group: "epilogue" },
    { href: "#m-foreword", num: "◦", label: "Foreword", group: "epilogue" }
  ];
  // Figures placed after the paragraph containing `after`. A figure whose
  // paragraph is gone is skipped with a console warning, so after a rewrite
  // of the text, check that each `after` still matches (and the diagram too).
  var FIGURES = [
    { src: "Diagrams/Suppression%20Greep.svg",
      after: "the Marge η that holds it, over the strength",
      caption: "L ∝ exp(−η / ‖υ‖) — suppressed, never abolished",
      alt: "The Wijk L against the Marge over the strength of the Vervorming, η / ‖υ‖, on a linear and a logarithmic scale: it falls toward zero and never reaches it" },
    { src: "Diagrams/Vermenigvuldiging.svg",
      after: "The chair is taken",
      caption: "Reactie meets Signaal — four readings of one momentary Relatie",
      alt: "Reactie, the Reiziger's Eigen, against Signaal, the Kruispunt's Eigen, each with its own Drempel: nothing resolves, Doorgang, Doorbraak, and the Weigering as a path that crosses twice and resolves nothing" },
    { src: "Diagrams/Reciprocation%20Trajectories.svg",
      after: "every trajectory applies to the Zelf as well",
      caption: "Dood (!) · Leven (?) · Zweven (') — the gap of one Relatie over its life",
      alt: "Three panels of the gap between what each side holds of the other: in Dood it stops short of parity, in Leven it runs through parity, in Zweven it keeps moving, never settled and never flipped" },
    { src: "Diagrams/Duo%20Landscape.svg",
      after: "so it is the landscape of its Zelf, nested in it",
      caption: "A Duo's landscape — two modes, a Drempel between, a Marge on each side",
      alt: "The heights of a Duo's four patterns: Van and Naar are its modes, the Drempel between them is the shallowest pattern on the deepest path, and the Marge out of each differs; beside it, how often each pattern is visited" },
    { src: "Diagrams/Echo%20and%20Rouw.svg",
      after: "So the Rouw drifts as it looks",
      caption: "Relaties end; Echoes do not",
      alt: "A Partner's Eigen and the Echo that tracks it late, gradually and never exactly; after the Relatie ends at t₀, the Rouw keeps the last signal and drifts at its own looks, permanently" }
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var api = window.Speelgoed = {
    maxim: [],
    terms: [],
    parts: [],
    chapters: [],
    source: loadSource,
    payload: payload,
    ready: null
  };

  /* ---------------------------------------------------------------
     The source file, fetched once and only when needed
     --------------------------------------------------------------- */
  var sourcePromise = null;
  function loadSource() {
    if (!sourcePromise) {
      sourcePromise = fetch(SOURCE, { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error(SOURCE + ": " + r.status);
        return r.text();
      }).then(function (t) {
        return t.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
      });
      sourcePromise.catch(function () { sourcePromise = null; });
    }
    return sourcePromise;
  }

  /* ---------------------------------------------------------------
     The Oracle: the charge, then the Oracle copy of Schrift I
     (made from the .md by _tools/oracle.py; never edited by hand)
     --------------------------------------------------------------- */
  var oraclePromise = null;
  function loadOracle() {
    if (!oraclePromise) {
      oraclePromise = fetch(encodeURI(ORACLE), { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error(ORACLE + ": " + r.status);
        return r.text();
      }).then(function (t) {
        return t.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").trim();
      });
      oraclePromise.catch(function () { oraclePromise = null; });
    }
    return oraclePromise;
  }
  function payload() {
    var pr = $("#oracle-prompt");
    var prompt = pr ? pr.textContent.trim() : "";
    return loadOracle().then(function (text) {
      return (prompt ? prompt + "\n\n" : "") + text + "\n";
    });
  }

  /* ---------------------------------------------------------------
     Without Jekyll: render the .md here
     --------------------------------------------------------------- */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error(src)); };
      document.head.appendChild(s);
    });
  }
  function ensureText(mount) {
    if ($("h2", mount)) return Promise.resolve();
    console.info("Speelgoed: no text in the page (no Jekyll); rendering " + SOURCE + " here.");
    return Promise.all([loadScript(MARKED), loadSource()]).then(function (r) {
      mount.innerHTML = window.marked.parse(r[1], { gfm: true });
    });
  }

  /* ---------------------------------------------------------------
     Arranging the text
     --------------------------------------------------------------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function slug(s) {
    return "m-" + s.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function heading(num, title) {
    return el("h2", "", (num ? '<span class="num">' + esc(num) + "</span>" : "") + esc(title));
  }
  function section(id, cls, nodes) {
    var s = el("section", "m-section" + (cls ? " " + cls : ""));
    s.id = id;
    nodes.forEach(function (n) { s.appendChild(n); });
    return s;
  }

  // Equations: kramdown wraps code blocks in div.highlighter-rouge > ... > pre;
  // marked writes a bare pre. Both become div.equation.
  function tidy(scope) {
    $$("pre", scope).forEach(function (pre) {
      var outer = pre.closest(".highlighter-rouge") || pre;
      if (!scope.contains(outer)) outer = pre;
      var eq = el("div", "equation");
      eq.textContent = pre.textContent.replace(/\n+$/, "");
      // a ```mermaid block is a graph, drawn once the text is on the page
      if (/\blanguage-mermaid\b/.test(outer.className) || $("code.language-mermaid", pre)) eq.classList.add("graph-source");
      outer.parentNode.replaceChild(eq, outer);
    });
    $$("hr", scope).forEach(function (hr) { hr.className = "rule"; });
    $$("table", scope).forEach(function (t) {
      if (t.parentNode.classList.contains("table-wrap")) return;
      var w = el("div", "table-wrap");
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
      // Tables of long prose become cards on a phone: each cell carries
      // its column's name, which the stylesheet shows above it.
      var head = t.rows[0], longest = 0;
      $$("td", t).forEach(function (td) { longest = Math.max(longest, td.textContent.length); });
      if (!head || head.cells.length < 3 || longest <= 80) return;
      t.classList.add("wide");
      var names = Array.prototype.map.call(head.cells, function (c) { return c.textContent.trim(); });
      $$("tbody tr", t).forEach(function (tr) {
        Array.prototype.forEach.call(tr.cells, function (td, i) {
          if (names[i]) td.setAttribute("data-label", names[i]);
        });
      });
    });
  }

  function split(nodes, test) {
    var i = 0;
    while (i < nodes.length && !test(nodes[i])) i++;
    return [nodes.slice(0, i), nodes.slice(i)];
  }
  function isH(n, level, re) {
    return n.nodeType === 1 && n.tagName === "H" + level && (!re || re.test(n.textContent.trim()));
  }

  // A heading one level up, keeping its id, attributes and content: a
  // chapter is a ### in the text and a section with an h2 on the page.
  function raise(n) {
    var m = /^H([3-6])$/.exec(n.tagName || "");
    if (!m) return n;
    var up = document.createElement("h" + (m[1] - 1));
    Array.prototype.forEach.call(n.attributes, function (a) { up.setAttribute(a.name, a.value); });
    while (n.firstChild) up.appendChild(n.firstChild);
    if (n.parentNode) n.parentNode.replaceChild(up, n);
    return up;
  }
  function matchCfg(list, title) {
    for (var i = 0; i < list.length; i++) if (list[i].match.test(title)) return list[i];
    return null;
  }
  var used = {};
  function uniqueId(id, key) {
    if (used[id]) id = "m-" + key + "-" + id.replace(/^m-/, "");
    used[id] = true;
    return id;
  }

  function arrange(mount) {
    var kids = Array.prototype.slice.call(mount.childNodes).filter(function (n) {
      return n.nodeType === 1;
    });
    // The title block before the first ## is the page's own title.
    var rest = split(kids, function (n) { return isH(n, 2); })[1];
    var blocks = [];
    while (rest.length) {
      var body = split(rest.slice(1), function (n) { return isH(n, 2); });
      blocks.push({ h: rest[0], nodes: body[0] });
      rest = body[1];
    }

    var out = [], sources = [];
    blocks.forEach(function (b) {
      var text = b.h.textContent.trim();
      if (/^Introduction$/i.test(text)) { introduction(b.nodes, out); return; }
      var sm = /^Schrift\s+([IVXLCDM]+)\s*[:·.\-–]\s*(.+)$/i.exec(text);
      var name = sm ? sm[2] : text, key = slug(name).replace(/^m-/, "");
      var cfg = matchCfg(PARTS, name) || { id: slug(name) };
      var part = { id: uniqueId(cfg.id, key), key: key, num: sm ? "Schrift " + sm[1] : "", name: name };
      if (!sm) console.warn("Speelgoed: “" + text + "” is not a Schrift; shown as one.");
      var inner = split(b.nodes, function (n) { return isH(n, 3); });
      out.push(section(part.id, "schrift", [heading(part.num, name)].concat(inner[0])));
      api.parts.push(part);
      var r = inner[1];
      while (r.length) {
        var c = split(r.slice(1), function (n) { return isH(n, 3); });
        chapter(r[0], c[0], part, out, sources);
        r = c[1];
      }
    });
    // the Sources, a closed list at the end of the text, get a section of their own
    if (sources.length) out.push(section(uniqueId("m-sources", "sources"), "sources", [heading("", "Sources")].concat(sources)));

    var frag = document.createDocumentFragment();
    out.forEach(function (s) { tidy(s); frag.appendChild(s); });
    mount.parentNode.replaceChild(frag, mount);

    $$(".graph-source").forEach(drawGraph);
    FIGURES.forEach(placeFigure);
    readTerms();
  }

  function chapter(h, nodes, part, out, sources) {
    var text = h.textContent.trim();
    var m = /^([IVXLCDM]+)\.\s+(.+)$/.exec(text);
    var num = m ? m[1] + "." : "", title = m ? m[2] : text;
    var cfg = matchCfg(CHAPTERS, title) || { id: slug(title) };
    var id = uniqueId(cfg.id, part.key);
    var keep = [];
    nodes.forEach(function (n) {
      if (n.tagName === "DETAILS" && /^\s*Sources\b/i.test(($("summary", n) || {}).textContent || "")) {
        sources.push(n);
        return;
      }
      keep.push(raise(n));
    });
    // where the Sources stood between two rules, one rule is enough
    keep = keep.filter(function (n, i) { return !(n.tagName === "HR" && i && keep[i - 1].tagName === "HR"); });
    out.push(section(id, "", [heading(num, title)].concat(keep)));
    api.chapters.push({ id: id, num: num, label: cfg.label || title, group: part.id, title: title });
  }

  // Introduction: its opening paragraphs are the fine print; the Maxim
  // goes to the footer drift; the Overture becomes its own section.
  function introduction(nodes, out) {
    var a = split(nodes, function (n) { return isH(n, 3, /^Maxim/i); });
    var b = split(a[1], function (n) { return isH(n, 3, /^Overture/i); });
    out.push(section("m-introduction", "fine-print", a[0]));
    maxim(b[0]);
    if (b[1].length) overture(b[1].slice(1), out);
  }
  function maxim(nodes) {
    nodes.forEach(function (n) {
      if (n.tagName === "UL" || n.tagName === "OL") {
        $$("li", n).forEach(function (li) { api.maxim.push(li.textContent.trim()); });
      }
    });
  }
  function overture(nodes, out) {
    out.push(section("m-overture", "overture", [heading("", "Overture")].concat(nodes)));
    api.chapters.push({ id: "m-overture", num: "", label: "Overture", group: "opening", title: "Overture" });
  }

  /* ---------------------------------------------------------------
     Graphs. A ```mermaid block in the text is drawn here as an SVG in
     the page's own style. Only flowcharts are read: graph or flowchart,
     nodes with labels, --> and -.-> arrows with |labels|. A block this
     cannot read stays as its source, as it is without JavaScript. A
     graph laid out left to right that is wider than the page is drawn
     top to bottom instead. "Name: rest" labels show on two lines.
     --------------------------------------------------------------- */
  var SVGNS = "http://www.w3.org/2000/svg";
  var graphCount = 0;

  function readGraph(src) {
    var lines = src.split("\n").map(function (l) { return l.replace(/%%.*$/, "").trim(); })
      .filter(function (l) { return l; });
    var head = /^(graph|flowchart)\s+(TB|TD|BT|LR|RL)\s*;?$/i.exec(lines.shift() || "");
    if (!head) return null;
    var g = { dir: head[2].toUpperCase().replace("TD", "TB"), nodes: {}, ids: [], edges: [] };
    var CLOSE = { "[": "]", "(": ")", "{": "}" };
    var ARROWS = [[/^-\.+->/, "dashed", true], [/^={2,}>/, "thick", true], [/^-{2,}>/, "solid", true],
                  [/^-\.+-/, "dashed", false], [/^={3,}/, "thick", false], [/^-{3,}/, "solid", false]];
    function node(s) {
      var m = /^[\p{L}\p{N}_]+/u.exec(s);
      if (!m) return null;
      var id = m[0], rest = s.slice(id.length), label = null;
      var open = /^(\(\[|\[\[|\[\(|\(\(|\{\{|\[|\(|\{)/.exec(rest);
      if (open) {
        var close = open[0].split("").reverse().map(function (c) { return CLOSE[c]; }).join(""), end;
        rest = rest.slice(open[0].length);
        if (rest.charAt(0) === '"') {
          end = rest.indexOf('"', 1);
          if (end < 0) return null;
          label = rest.slice(1, end); rest = rest.slice(end + 1);
        } else {
          end = rest.indexOf(close);
          if (end < 0) return null;
          label = rest.slice(0, end); rest = rest.slice(end);
        }
        if (rest.indexOf(close) !== 0) return null;
        rest = rest.slice(close.length);
      }
      if (!g.nodes[id]) { g.nodes[id] = { id: id, label: id }; g.ids.push(id); }
      if (label !== null) g.nodes[id].label = label.trim();
      return { id: id, rest: rest.trim() };
    }
    function arrow(s) {
      for (var i = 0; i < ARROWS.length; i++) {
        var m = ARROWS[i][0].exec(s);
        if (!m) continue;
        var rest = s.slice(m[0].length), label = "";
        var l = /^\s*\|([^|]*)\|/.exec(rest);
        if (l) { label = l[1].trim(); rest = rest.slice(l[0].length); }
        return { kind: ARROWS[i][1], head: ARROWS[i][2], label: label, rest: rest.trim() };
      }
      return null;
    }
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].replace(/;$/, "");
      if (/^(classDef|class|style|linkStyle|click)\b/.test(line)) continue;
      var n = node(line);
      if (!n) return null;
      while (n.rest) {
        var from = n.id, a = arrow(n.rest);
        if (!a) return null;
        n = node(a.rest);
        if (!n) return null;
        g.edges.push({ from: from, to: n.id, kind: a.kind, head: a.head, label: a.label });
      }
    }
    return g.ids.length ? g : null;
  }

  function labelLines(s) {
    var parts = s.split(/<br\s*\/?>/i), i = s.indexOf(": ");
    if (parts.length === 1 && i > 0) parts = [s.slice(0, i), s.slice(i + 2)];
    return parts.map(function (p) { return p.trim(); }).filter(Boolean);
  }

  function textMeasure() {
    var ctx = document.createElement("canvas").getContext("2d");
    var root = getComputedStyle(document.documentElement);
    var fam = { t: root.getPropertyValue("--display"), s: root.getPropertyValue("--serif") };
    var font = { t: "15px " + (fam.t || "serif"), s: "12.5px " + (fam.s || "serif"), l: "italic 12px " + (fam.s || "serif") };
    return function (kind, text) {
      if (!ctx) return text.length * 7.5;
      ctx.font = font[kind];
      return ctx.measureText(text).width;
    };
  }

  // A layered drawing: layers along the arrows (longest path), an order
  // in each layer that crosses few edges (barycentres), and positions that
  // keep each node near its neighbours without overlap (isotonic fit).
  function layoutGraph(g, across, measure) {
    var V = {}, layers = [], MARGIN = 14;
    g.ids.forEach(function (id, k) {
      var parts = labelLines(g.nodes[id].label), w = 0;
      parts.forEach(function (p, j) { w = Math.max(w, measure(j ? "s" : "t", p)); });
      V[id] = { id: id, parts: parts, w: Math.max(56, Math.ceil(w) + 28), h: 32 + 16 * (parts.length - 1),
                up: [], down: [], ins: [], outs: [], layer: 0, rank: k };
    });
    var indeg = {}, outs = {}, queue, seen = 0;
    g.ids.forEach(function (id) { indeg[id] = 0; outs[id] = []; });
    g.edges.forEach(function (e) { outs[e.from].push(e); indeg[e.to]++; });
    queue = g.ids.filter(function (id) { return !indeg[id]; });
    while (queue.length) {
      var u = queue.shift();
      seen++;
      outs[u].forEach(function (e) {
        V[e.to].layer = Math.max(V[e.to].layer, V[u].layer + 1);
        if (!--indeg[e.to]) queue.push(e.to);
      });
    }
    if (seen < g.ids.length) return null;           // a cycle: leave the source as it is
    g.ids.forEach(function (id) { var v = V[id]; (layers[v.layer] = layers[v.layer] || []).push(v); });

    var chains = g.edges.map(function (e) {
      var a = V[e.from], b = V[e.to], pts = [a];
      for (var l = a.layer + 1; l < b.layer; l++) {
        var d = { dummy: true, w: 8, h: 8, up: [], down: [], layer: l, rank: (a.rank + b.rank) / 2 };
        (layers[l] = layers[l] || []).push(d);
        pts.push(d);
      }
      pts.push(b);
      for (var i = 1; i < pts.length; i++) { pts[i - 1].down.push(pts[i]); pts[i].up.push(pts[i - 1]); }
      var c = { e: e, pts: pts };
      a.outs.push(c); b.ins.push(c);
      return c;
    });

    function mean(list, f) { var t = 0; list.forEach(function (x) { t += f(x); }); return t / list.length; }
    function number() { layers.forEach(function (L) { L.forEach(function (v, i) { v.pos = i; }); }); }
    function crossings() {
      var n = 0;
      for (var l = 0; l + 1 < layers.length; l++) {
        var s = [];
        layers[l].forEach(function (v) { v.down.forEach(function (w) { s.push([v.pos, w.pos]); }); });
        for (var i = 0; i < s.length; i++)
          for (var j = i + 1; j < s.length; j++)
            if ((s[i][0] - s[j][0]) * (s[i][1] - s[j][1]) < 0) n++;
      }
      return n;
    }
    layers.forEach(function (L) { L.sort(function (p, q) { return p.rank - q.rank; }); });
    number();
    var best = crossings(), keep = layers.map(function (L) { return L.slice(); });
    for (var it = 0; it < 16 && best; it++) {
      var down = it % 2 === 0;
      for (var k = 1; k < layers.length; k++) {
        var L = layers[down ? k : layers.length - 1 - k];
        L.forEach(function (v) {
          var nb = down ? v.up : v.down;
          v.bc = nb.length ? mean(nb, function (w) { return w.pos; }) : v.pos;
        });
        L.sort(function (p, q) { return p.bc - q.bc || p.pos - q.pos; });
        L.forEach(function (v, i) { v.pos = i; });
      }
      var c = crossings();
      if (c < best) { best = c; keep = layers.map(function (L) { return L.slice(); }); }
    }
    layers = keep;
    number();

    function cs(v) { return across ? v.h : v.w; }     // size across the layers
    function ms(v) { return across ? v.w : v.h; }     // size along them
    function sep(a, b) { return (cs(a) + cs(b)) / 2 + (a.dummy || b.dummy ? 14 : 26); }
    function place(L, f) {
      var off = [0], t = [], blocks = [], i;
      for (i = 1; i < L.length; i++) off[i] = off[i - 1] + sep(L[i - 1], L[i]);
      L.forEach(function (v, j) {
        var nb = f(v);
        t.push((nb.length ? mean(nb, function (w) { return w.c; }) : v.c) - off[j]);
      });
      t.forEach(function (x) {
        blocks.push({ s: x, n: 1 });
        while (blocks.length > 1) {
          var b = blocks[blocks.length - 1], a = blocks[blocks.length - 2];
          if (a.s / a.n <= b.s / b.n) break;
          a.s += b.s; a.n += b.n; blocks.pop();
        }
      });
      i = 0;
      blocks.forEach(function (b) { for (var j = 0; j < b.n; j++, i++) L[i].c = b.s / b.n + off[i]; });
    }
    layers.forEach(function (L) { L.forEach(function (v, i) { v.c = i ? L[i - 1].c + sep(L[i - 1], v) : 0; }); });
    for (var r = 0; r < 10; r++) {
      var both = r > 1;
      for (k = 1; k < layers.length; k++) place(layers[k], function (v) { return both ? v.up.concat(v.down) : v.up; });
      for (k = layers.length - 2; k >= 0; k--) place(layers[k], function (v) { return both ? v.up.concat(v.down) : v.down; });
    }
    var all = [].concat.apply([], layers), lo = Infinity, hi = -Infinity, along = MARGIN;
    all.forEach(function (v) { lo = Math.min(lo, v.c - cs(v) / 2); hi = Math.max(hi, v.c + cs(v) / 2); });
    layers.forEach(function (L) {
      var size = Math.max.apply(null, L.map(function (v) { return v.dummy ? 0 : ms(v); }));
      L.forEach(function (v) {
        v.band = size;
        v.c += MARGIN - lo;
        v.x = across ? along + size / 2 : v.c;
        v.y = across ? v.c : along + size / 2;
      });
      along += size + (across ? 64 : 46);
    });
    var width = across ? along - 64 + MARGIN : hi - lo + 2 * MARGIN;
    var height = across ? hi - lo + 2 * MARGIN : along - 46 + MARGIN;

    // Where each edge leaves and enters a node: spread side by side,
    // in the order of where the edge comes from or goes to.
    function spread(v, list, key, slot) {
      list.sort(function (p, q) { return key(p) - key(q); });
      var step = Math.min(14, cs(v) * 0.6 / Math.max(list.length, 1));
      list.forEach(function (ch, j) { ch[slot] = (j - (list.length - 1) / 2) * step; });
    }
    g.ids.forEach(function (id) {
      spread(V[id], V[id].outs, function (ch) { return ch.pts[1].c; }, "o0");
      spread(V[id], V[id].ins, function (ch) { return ch.pts[ch.pts.length - 2].c; }, "o1");
    });
    var edges = chains.map(function (ch) {
      var p = ch.pts, a = p[0], b = p[p.length - 1];
      var pts = [across ? { x: a.x + a.w / 2, y: a.y + ch.o0 } : { x: a.x + ch.o0, y: a.y + a.h / 2 }];
      for (var i = 1; i + 1 < p.length; i++) {        // straight past the layer it crosses
        var half = p[i].band / 2;
        pts.push(across ? { x: p[i].x - half, y: p[i].y } : { x: p[i].x, y: p[i].y - half });
        pts.push(across ? { x: p[i].x + half, y: p[i].y } : { x: p[i].x, y: p[i].y + half });
      }
      pts.push(across ? { x: b.x - b.w / 2, y: b.y + ch.o1 } : { x: b.x + ch.o1, y: b.y - b.h / 2 });
      return { e: ch.e, pts: pts };
    });
    return { width: Math.ceil(width), height: Math.ceil(height), across: across,
             nodes: g.ids.map(function (id) { return V[id]; }), edges: edges };
  }

  function drawGraph(src) {
    var fig = null;
    try { fig = graphFigure(src.textContent, room(src)); }
    catch (e) { console.warn("Speelgoed: a graph could not be drawn", e); }
    if (fig) src.parentNode.replaceChild(fig, src);
  }

  // The width the text has where the graph stands, read from the nearest
  // ancestor on view (the text may still be hidden behind the Oracle).
  function room(node) {
    for (var n = node.parentNode; n && n.nodeType === 1; n = n.parentNode) {
      if (n.clientWidth) {
        var s = getComputedStyle(n);
        return n.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - 24;
      }
    }
    return 700;
  }

  function graphFigure(source, space) {
    var g = readGraph(source);
    if (!g) return null;
    var measure = textMeasure(), across = g.dir === "LR" || g.dir === "RL";
    var lay = layoutGraph(g, across, measure);
    if (lay && across && lay.width > space) lay = layoutGraph(g, false, measure);
    if (!lay) return null;
    var W = lay.width, H = lay.height, flipX = lay.across && g.dir === "RL", flipY = !lay.across && g.dir === "BT";
    function X(x) { return +(flipX ? W - x : x).toFixed(1); }
    function Y(y) { return +(flipY ? H - y : y).toFixed(1); }
    function svg(tag, attrs, parent) {
      var e = document.createElementNS(SVGNS, tag);
      Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
      if (parent) parent.appendChild(e);
      return e;
    }
    var name = function (id) { return g.nodes[id].label; };
    var root = svg("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, class: "graph", role: "img",
      "font-family": "'Iowan Old Style','Palatino Linotype',Palatino,Georgia,'Times New Roman',serif",
      "aria-label": "Graph: " + g.edges.map(function (e) {
        return name(e.from) + " to " + name(e.to) + (e.label ? " (" + e.label + ")" : "") + (e.kind === "dashed" ? ", dashed" : "");
      }).join("; ") });
    root.style.width = "100%";
    root.style.maxWidth = W + "px";
    root.style.minWidth = Math.round(W * 0.7) + "px";
    root.style.height = "auto";
    var marker = "graph-arrow-" + (++graphCount);
    var mk = svg("marker", { id: marker, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 9, markerHeight: 9,
      markerUnits: "userSpaceOnUse", orient: "auto" }, svg("defs", {}, root));
    svg("path", { d: "M0,1 L10,5 L0,9 z", class: "graph-arrow", fill: "#d4af37" }, mk);

    var gEdges = svg("g", {}, root), gLabels = svg("g", {}, root), gNodes = svg("g", {}, root);
    lay.edges.forEach(function (ed) {
      var p = ed.pts, d = "M" + X(p[0].x) + "," + Y(p[0].y);
      for (var i = 1; i < p.length; i++) {
        var a = p[i - 1], b = p[i];
        if (lay.across) {
          var mx = (a.x + b.x) / 2;
          d += " C" + X(mx) + "," + Y(a.y) + " " + X(mx) + "," + Y(b.y) + " " + X(b.x) + "," + Y(b.y);
        } else {
          var my = (a.y + b.y) / 2;
          d += " C" + X(a.x) + "," + Y(my) + " " + X(b.x) + "," + Y(my) + " " + X(b.x) + "," + Y(b.y);
        }
      }
      var line = svg("path", { d: d, class: "graph-edge " + ed.e.kind, fill: "none", stroke: "#d4af37",
        "stroke-opacity": 0.55, "stroke-width": ed.e.kind === "thick" ? 2.4 : 1.3 }, gEdges);
      if (ed.e.kind === "dashed") line.setAttribute("stroke-dasharray", "5 4");
      if (ed.e.head) line.setAttribute("marker-end", "url(#" + marker + ")");
      if (ed.e.label) {
        var k = 2 * Math.floor((p.length / 2 - 1) / 2), lx = X((p[k].x + p[k + 1].x) / 2), ly = Y((p[k].y + p[k + 1].y) / 2);
        var lw = Math.ceil(measure("l", ed.e.label)) + 8, lab = svg("g", { class: "graph-label" }, gLabels);
        svg("rect", { x: lx - lw / 2, y: ly - 8, width: lw, height: 16, rx: 3, fill: "#000" }, lab);
        svg("text", { x: lx, y: ly + 4, "text-anchor": "middle", fill: "#fff", "fill-opacity": 0.55,
          "font-style": "italic", "font-size": 12 }, lab).textContent = ed.e.label;
      }
    });
    lay.nodes.forEach(function (v) {
      var x = X(v.x), y = Y(v.y), top = y - v.h / 2, n = svg("g", { class: "graph-node" }, gNodes);
      svg("rect", { x: x - v.w / 2, y: top, width: v.w, height: v.h, rx: 5, fill: "#000", stroke: "#d4af37", "stroke-opacity": 0.55 }, n);
      v.parts.forEach(function (part, j) {
        svg("text", { x: x, y: top + 20 + 16 * j, "text-anchor": "middle", class: j ? "graph-s" : "graph-t",
          fill: j ? "#fff" : "#f1d27c", "fill-opacity": j ? 0.84 : 1, "font-size": j ? 12.5 : 15 }, n).textContent = part;
      });
    });
    var figure = el("figure", "graph-figure");
    figure.appendChild(root);
    return figure;
  }

  function placeFigure(f) {
    var target = $$("#Speelgoed-reveal p").filter(function (p) {
      return p.textContent.indexOf(f.after) !== -1;
    })[0];
    if (!target) { console.warn("Speelgoed: no paragraph for figure " + f.src); return; }
    var fig = el("figure", "diagram-figure",
      '<a class="diagram-link" target="_blank" rel="noopener"></a><figcaption></figcaption>');
    var a = $("a", fig);
    a.href = f.src;
    a.setAttribute("aria-label", "Open " + f.caption);
    var img = el("img");
    img.src = f.src; img.alt = f.alt; img.loading = "lazy"; img.decoding = "async";
    a.appendChild(img);
    $("figcaption", fig).textContent = f.caption;
    target.parentNode.insertBefore(fig, target.nextSibling);
  }

  // The Lexicon's words, read from its table (the column headed "Woord").
  function readTerms() {
    var sec = document.getElementById("m-appendix");
    if (!sec) return;
    $$("table", sec).forEach(function (t) {
      var col = -1;
      $$("thead th, tr:first-child th", t).forEach(function (th, i) {
        if (/^Woord$/i.test(th.textContent.trim())) col = i;
      });
      if (col < 0) return;
      $$("tbody tr", t).forEach(function (tr) {
        var td = tr.children[col];
        var w = td && td.textContent.trim();
        if (w) api.terms.push(w);
      });
    });
  }

  /* ---------------------------------------------------------------
     The menu
     --------------------------------------------------------------- */
  function buildMenu() {
    var box = document.getElementById("menu-chapters");
    if (!box) return;
    var items = api.chapters.map(function (c) {
      return { href: "#" + c.id, num: c.num, label: c.label, group: c.group };
    }).concat(EXTRA.filter(function (x) { return !x.needs || document.getElementById(x.needs); }));
    // one group for the opening, one for each Schrift (its title leads to the
    // Schrift itself), and the epilogue
    var groups = [{ key: "opening", eyebrow: "Opening" }].concat(api.parts.map(function (p) {
      return { key: p.id, eyebrow: (p.num ? p.num + " · " : "") + p.name, href: "#" + p.id };
    })).concat([{ key: "epilogue", eyebrow: "Epilogue" }]);
    var html = "";
    groups.forEach(function (g) {
      var mine = items.filter(function (it) { return it.group === g.key; });
      if (!mine.length) return;
      var eyebrow = g.href ? '<a href="' + esc(g.href) + '">' + esc(g.eyebrow) + "</a>" : esc(g.eyebrow);
      html += '<p class="menu-eyebrow">' + eyebrow + '</p><ul class="menu-chaps">';
      mine.forEach(function (it) {
        html += '<li><a class="menu-cat" href="' + esc(it.href) + '"><span class="mnum">' +
          esc(it.num || "") + "</span>" + esc(it.label) + "</a></li>";
      });
      html += "</ul>";
    });
    box.innerHTML = html;
  }

  /* ---------------------------------------------------------------
     The visible charge, written from #oracle-prompt
     --------------------------------------------------------------- */
  function renderCharge() {
    var pr = $("#oracle-prompt"), box = $(".charge-text");
    if (!pr || !box) return;
    box.innerHTML = pr.textContent.trim().split(/\n\s*\n/).map(function (para) {
      var h = esc(para.trim())
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return "<p>" + h + "</p>";
    }).join("");
  }

  /* ---------------------------------------------------------------
     Start
     --------------------------------------------------------------- */
  function failure(mount, err) {
    console.error(err);
    if (mount && mount.parentNode) {
      mount.innerHTML = '<p>The text could not be loaded here. Read it as ' +
        '<a href="PseudoScienceSpeelgoed.html">the full text</a>.</p>';
    }
  }

  renderCharge();
  var mount = document.getElementById("speelgoed-text");
  api.ready = mount
    ? ensureText(mount).then(function () { arrange(mount); buildMenu(); }, function (e) { failure(mount, e); })
    : Promise.resolve();
})();
