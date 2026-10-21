/* =====================================================================
   The Veld in Motion: drawing, panel and controls.
   The simulation lives in veld-sim.js and knows nothing of this page.
   Everything here reads the Veld and moves nothing in it, except a
   Schrift the viewer writes.
   Gold leans towards Naar, white towards Van, black is Stilte.
   ===================================================================== */
(function () {
  "use strict";
  var Sim = window.VeldSim;
  if (!Sim) return;
  var Field = Sim.Field, valueAt = Sim.valueAt, duoEps = Sim.duoEps;

  var GOLD = "212,175,55", GOLDB = "241,210,124", WHITE = "255,255,255";
  var SERIF = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif';
  var TRAJ_NAMES = { "'": "Zweven", "!": "Dood", "?": "Leven" };

  function rgba(c, a) { return "rgba(" + c + "," + (a < 0 ? 0 : a > 1 ? 1 : a).toFixed(3) + ")"; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function fmt(v, d) { return (v < 0 ? "−" : "") + Math.abs(v).toFixed(d === undefined ? 2 : d); }
  // a Trouw worn towards nothing never reaches it: show the small number it is
  function fmtT(v, d) {
    if (v === 0 || Math.abs(v) >= 0.001) return fmt(v, d);
    var e = Math.floor(Math.log10(Math.abs(v))), m = Math.abs(v) / Math.pow(10, e), sup = "⁰¹²³⁴⁵⁶⁷⁸⁹";
    if (m >= 9.95) { m = 1; e++; }
    return (v < 0 ? "−" : "") + m.toFixed(1) + "·10⁻" + String(-e).replace(/\d/g, function (c) { return sup.charAt(+c); });
  }
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // canvas text with a dark halo, so lines and dots never strike it through
  function halo(g, text, x, y) {
    g.lineJoin = "round";
    g.lineWidth = 3;
    g.strokeStyle = "rgba(0,0,0,0.85)";
    g.strokeText(text, x, y);
    g.fillText(text, x, y);
  }

  // the names of the counts (Composition, The Names of the Counts)
  var UNITS = ["Vide", "Solo", "Duo", "Trio", "Quatro", "Cinquo", "Sexo", "Septo", "Otto", "Novo"];
  var TENS = ["", "Deco", "Duanto", "Trianto", "Quatranto", "Cinquanto", "Sexanto", "Septanto", "Ottanto", "Novanto"];
  function countName(n) {
    if (n < 10) return UNITS[n];
    if (n >= 100) return String(n);
    var t = TENS[Math.floor(n / 10)], u = n % 10;
    if (!u) return t;
    var tail = u === 1 ? "uno" : UNITS[u].toLowerCase();
    var head = t.slice(0, -1) + ("aeiou".indexOf(tail.charAt(0)) >= 0 ? "" : "a");
    return head + tail;
  }

  var canvas = $("veld");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = {
    running: !reduce, speed: 1, sel: null, selNode: null, follow: true, endedAt: 0,
    seed: 1 + Math.floor(Math.random() * 99999), noiseSeed: 1 + Math.floor(Math.random() * 99999)
  };
  var field = null, cssW = 0, cssH = 0, dpr = 1, L = 400;
  var parts = [], rings = [], labels = [], logLines = [];

  /* ------------------------------ sizing ------------------------------ */
  function resize() {
    var w = Math.max(240, canvas.clientWidth), h = Math.max(240, canvas.clientHeight);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    if (field && (w !== cssW || h !== cssH)) field.setSize(w, h);
    cssW = w; cssH = h; L = Math.min(w, h);
  }

  // the values a new field opens with; a living Veld takes only Schriften
  function sliderParams() {
    var D = Sim.DEFAULTS, f = +$("s-ups").value, nMax = +$("s-max").value;
    return { ups: [D.ups[0] * f, D.ups[1] * f], warmte: +$("s-warmte").value, Lm: +$("s-lm").value,
             nInit: Math.min(+$("s-init").value, nMax), nMax: nMax,
             rho: +$("s-rho").value, y0: +$("s-y0").value, W: +$("s-w").value, reach: +$("s-reach").value };
  }

  var query = new URLSearchParams(location.search), urlSeed = +query.get("seed") || 0;
  function newField(keepSeed) {
    if (!keepSeed) { state.seed = urlSeed || 1 + Math.floor(Math.random() * 99999); urlSeed = 0; }
    state.noiseSeed = +query.get("noise") || 1 + Math.floor(Math.random() * 99999);
    resize();
    field = new Field({ seed: state.seed, noiseSeed: state.noiseSeed, width: cssW, height: cssH, params: sliderParams() });
    parts.length = 0; rings.length = 0; labels.length = 0; logLines.length = 0;
    state.sel = null; state.selNode = null; state.follow = true;
    $("seed").textContent = "field " + state.seed;
    pending.textContent = "";
    // ?warm=60 starts the field 60 seconds in; with reduced motion it starts 30 s in
    var warm = Math.min(+(query.get("warm") || (reduce ? 30 : 0)), 1800);
    for (var w = 0; w < warm * 10; w++) field.advance(0.1);
    field.events = [];
    addLog("A new field: " + field.nodes.length + " Solos, each held by its Zelf, none bound yet.");
    renderLog();
    updatePanel(true);
  }

  /* ------------------------------ effects ----------------------------- */
  function mid(d) { return { x: (d.a.x + d.b.x) / 2, y: (d.a.y + d.b.y) / 2 }; }

  function ring(x, y, r0, r1, life, color, kind) {
    rings.push({ x: x, y: y, r0: r0, r1: r1, life: life, max: life, color: color, kind: kind || "ring" });
    if (rings.length > 80) rings.shift();
  }

  function label(text, x, y, color) {
    for (var i = 0; i < labels.length; i++) {
      var l = labels[i];
      if (Math.abs(l.x - x) < 70 && Math.abs(l.y - y) < 16) y = l.y - 16;
    }
    labels.push({ text: text, x: x, y: y, life: 2.4, max: 2.4, color: color });
    if (labels.length > 7) labels.shift();
  }

  // a Winst leaves gold sparks where it binds; a Verlies gives its Energie
  // to the Medium as Warmte, white motes that drift off and spread
  function spark(o, gain) {
    var x, y, nx, ny;
    if (o.kind === "duo") {
      var u = 0.2 + 0.6 * Math.random(), dx = o.b.x - o.a.x, dy = o.b.y - o.a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
      x = o.a.x + dx * u; y = o.a.y + dy * u;
      var side = Math.random() < 0.5 ? -1 : 1;
      nx = -dy / d * side; ny = dx / d * side;
    } else {
      var a = Math.random() * 6.283;
      nx = Math.cos(a); ny = Math.sin(a);
      x = o.x + nx * o.r; y = o.y + ny * o.r;
    }
    if (gain) parts.push({ x: x, y: y, vx: nx * 22, vy: ny * 22, life: 0.6, max: 0.6, gain: true });
    else {
      var sp = L * (0.04 + 0.06 * Math.random());
      parts.push({ x: x, y: y, vx: nx * sp, vy: ny * sp, life: 2.6, max: 2.6, gain: false });
    }
    if (parts.length > 600) parts.shift();
  }
  var SPARK_Q = 0.002;
  function drainSparks(o, burst) {
    var cap = burst ? 40 : 2, c = 0;
    while (o.sparkW >= SPARK_Q && c < cap) { spark(o, true); o.sparkW -= SPARK_Q; c++; }
    c = 0;
    while (o.sparkV >= SPARK_Q && c < cap) { spark(o, false); o.sparkV -= SPARK_Q; c++; }
    if (o.sparkW > 20 * SPARK_Q) o.sparkW = 20 * SPARK_Q;
    if (o.sparkV > 20 * SPARK_Q) o.sparkV = 20 * SPARK_Q;
  }

  /* ------------------------------- log -------------------------------- */
  var logDirty = true;
  function addLog(text) {
    logLines.unshift(text);
    if (logLines.length > 8) logLines.pop();
    logDirty = true;
  }
  function renderLog() {
    if (!logDirty) return;
    logDirty = false;
    $("log").innerHTML = logLines.map(function (l) { return "<li>" + l + "</li>"; }).join("");
  }
  function nm(n) { return "<b>" + esc(n.name) + "</b>"; }
  function pair(d) { return nm(d.a) + "–" + nm(d.b); }

  function consume() {
    var evs = field.events, i, ev, p, d;
    field.events = [];
    for (i = 0; i < evs.length; i++) {
      ev = evs[i]; d = ev.duo;
      switch (ev.kind) {
        case "vonk":
          var o = ev.owner;
          if (o.state === "gone") break;
          if (ev.which === "zs") break;            // a Zelf's crossing shows as its ring
          p = o.kind === "duo" ? mid(o) : o;
          if (o.kind === "solo") {
            ring(p.x, p.y, o.r, o.r + L * 0.05, 1.0, ev.up ? GOLDB : WHITE, ev.up ? "rays" : "jag");
            label(ev.up ? "Winst" : "Verlies", p.x, p.y - o.R - 8, ev.up ? GOLDB : WHITE);
            addLog(nm(o) + (ev.up ? " crosses its Drempel towards Naar: a Winst of " : " falls back across its Drempel towards Van: a Verlies of ") + fmt(Math.abs(ev.T), 3) + ".");
          } else {
            ring(p.x, p.y, 3, L * 0.035, 0.8, ev.up ? GOLDB : WHITE, ev.up ? "rays" : "jag");
            if (o === state.sel) addLog(pair(o) + (ev.up ? ", read as one, crosses towards Naar." : ", read as one, crosses back towards Van."));
          }
          break;
        case "hunger":
          if (ev.owner.kind === "solo" && ev.which === "e") label("hunger", ev.owner.x, ev.owner.y - ev.owner.R - 8, WHITE);
          break;
        case "rest":
          if (ev.owner.kind === "solo" && ev.which === "e" && ev.owner.state === "live") {
            label("rests", ev.owner.x, ev.owner.y - ev.owner.R - 8, WHITE);
            if (ev.owner === state.selNode || ev.owner.lastSchrift > field.t - 2)
              addLog(nm(ev.owner) + " rests at its Drempel: its Vonk taken, its pull would not hold it " + (ev.up ? "across." : "back.") );
          }
          break;
        case "bound":
          p = mid(d);
          label("bound", p.x, p.y - 12, WHITE);
          addLog(pair(d) + (ev.cause === "scheiding" ? " withdraw their Zin at once" : ": all that holds it could no longer carry it back across") +
            ", but the Relaties that meet it from outside cannot give the " + fmt(ev.lack, 3) +
            " it bore away past its Vol. Nothing parts, and it stays bound.");
          break;
        case "relatie":
          ring(d.a.x, d.a.y, d.a.r, d.a.r + L * 0.03, 0.8, WHITE, "ring");
          ring(d.b.x, d.b.y, d.b.r, d.b.r + L * 0.03, 0.8, WHITE, "ring");
          addLog(pair(d) + ": each reads the other's Zin on it, and a Relatie forms" +
            (ev.T > 0 ? ". Both stand across: Genus joins its first Trouw at once." : ", its first Trouw not yet joined."));
          if (state.follow && (!state.sel || state.sel.state !== "live")) { state.sel = d; if (!state.selNode) updatePanel(true); }
          break;
        case "end":
          drainSparks(d, true);
          p = mid(d);
          if (ev.cause === "scheiding") {
            label("Scheiding", p.x, p.y - 12, WHITE);
            addLog(pair(d) + " withdraw their Zin at once: a Scheiding." + (ev.paid > 0
              ? " The Relaties that meet it from outside give back the " + fmt(ev.paid, 3) + " it bore away past its Vol." : "") +
              " Both keep the other as Rouw.");
          } else if (ev.cause === "partner") {
            var s = ev.departed === d.a ? d.b : d.a;
            addLog(nm(s) + " keeps the last Echo of " + nm(ev.departed) + ", as Rouw.");
          } else {
            label("Einde", p.x, p.y - 12, WHITE);
            addLog(pair(d) + ": nothing that holds it could carry it back across any more." + (ev.paid > 0
              ? " The Relaties that meet it from outside give back the " + fmt(ev.paid, 3) + " it bore away past its Vol, and it ends: an Einde, and both keep Rouw."
              : " An Einde, and both keep Rouw."));
          }
          if (d === state.sel) state.endedAt = field.t;
          break;
        case "start":
          ev.nodes.forEach(function (c) {
            ring(c.x, c.y, 2, L * 0.09, 1.4, GOLDB, "rays");
            label("Start", c.x, c.y - 16, GOLDB);
          });
          if (d) addLog("Start: " + pair(d) + " hold more than their Vol pole, and " + ev.nodes.map(nm).join(", ") +
            (ev.nodes.length > 1 ? " are born, each bound to both." : " is born, bound to both."));
          else addLog("Start: " + nm(ev.parent) + " holds more than its Vol pole, and " + ev.nodes.map(nm).join(", ") +
            (ev.nodes.length > 1 ? " are born, each bound to it alone." : " is born, bound to it alone."));
          break;
        case "perfectus":
          ring(ev.node.x, ev.node.y, L * 0.07, 2, 2.2, WHITE, "ring");
          label("Perfectus", ev.node.x, ev.node.y - 16, WHITE);
          addLog(nm(ev.node) + ": nothing that holds it could carry it across any more. Its Zelf leaves its Zelf-Rouw, resting in Stilte.");
          break;
        case "traj":
          if (ev.traj === "?") {
            p = mid(d);
            label("Leven ?", p.x, p.y - 12, GOLDB);
            if (d === state.sel) addLog(pair(d) + ": the gap between their Echoes runs through parity. Leven.");
          }
          break;
        case "moved":
          ring(ev.node.x, ev.node.y, ev.node.r, ev.node.r + L * 0.05, 0.9, GOLDB, "ring");
          addLog("A hand from outside moves " + nm(ev.node) + " to another place on the Medium. Its Vertraging and its reach to every other are read from there.");
          break;
        case "schrift":
          ev.node.lastSchrift = field.t;
          ring(ev.node.x, ev.node.y, ev.node.r, ev.node.r + L * 0.05, 0.9, GOLDB, "ring");
          addLog("A Schrift writes " + fmt(ev.v) + " into " + nm(ev.node) + "'s Eigen. Its self-Echo stays where it stood.");
          break;
      }
    }
  }

  // convex hull of the members, pushed outward past their rooms
  function outline(members, pad) {
    var pts = [], i;
    for (i = 0; i < members.length; i++) {
      var n = members[i], R = n.R + pad;
      for (var a = 0; a < 8; a++) pts.push([n.x + Math.cos(a * 0.785398) * R, n.y + Math.sin(a * 0.785398) * R]);
    }
    pts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
    function cross(o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); }
    var lower = [], upper = [];
    for (i = 0; i < pts.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pts[i]) <= 0) lower.pop();
      lower.push(pts[i]);
    }
    for (i = pts.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pts[i]) <= 0) upper.pop();
      upper.push(pts[i]);
    }
    upper.pop(); lower.pop();
    return lower.concat(upper);
  }

  /* ------------------------------ drawing ----------------------------- */
  function draw() {
    var t = field.t, i, k, n;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cssW, cssH);
    var g = ctx.createRadialGradient(cssW / 2, cssH * 0.45, 0, cssW / 2, cssH * 0.45, Math.max(cssW, cssH) * 0.7);
    g.addColorStop(0, rgba(GOLD, 0.03 + 0.04 * clamp(field.warmte / Math.max(1, field.live()), 0, 1.5)));
    g.addColorStop(1, rgba(GOLD, 0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, cssW, cssH);

    // Relaties of three or more bound in Naar that stay whole whichever single Lid wavers
    var groups = field.groups();
    ctx.font = "italic 12px " + SERIF;
    ctx.textAlign = "center";
    for (i = 0; i < groups.length; i++) {
      var m = groups[i].members, hull = outline(m, L * 0.03);
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = rgba(GOLD, 0.5);
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (k = 0; k < hull.length; k++) { if (k === 0) ctx.moveTo(hull[k][0], hull[k][1]); else ctx.lineTo(hull[k][0], hull[k][1]); }
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);
      var top = hull[0];
      for (k = 1; k < hull.length; k++) if (hull[k][1] < top[1]) top = hull[k];
      ctx.fillStyle = rgba(GOLD, 0.75);
      halo(ctx, countName(m.length), clamp(top[0], 30, cssW - 30), Math.max(12, top[1] - 5));
    }

    for (k = 0; k < field.duos.length; k++) drawDuo(field.duos[k], t);

    // looks at a Vreemdeling: a Vermenigvuldiging at a Kruispunt, gone as it closes
    for (i = field.looks.length - 1; i >= 0; i--) {
      var lk = field.looks[i], age = t - lk.t;
      if (age > 0.35) break;
      if (lk.from.state !== "live" || lk.to.state !== "live" || field.duoOf(lk.from, lk.to)) continue;
      ctx.setLineDash([1, 5]);
      ctx.strokeStyle = rgba(WHITE, 0.22 * (1 - age / 0.35));
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(lk.from.x, lk.from.y); ctx.lineTo(lk.to.x, lk.to.y); ctx.stroke();
      ctx.setLineDash([]);
    }

    // Zin: Trek aimed at one other
    for (i = 0; i < field.nodes.length; i++) {
      n = field.nodes[i];
      if (!n.aim || n.state !== "live" || n.aim.state !== "live") continue;
      var T = n.aim, dx = T.x - n.x, dy = T.y - n.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / d, uy = dy / d, x1 = T.x - ux * (T.R + 3), y1 = T.y - uy * (T.R + 3);
      if (d < n.R + T.R + 6) continue;
      if (!field.duoOf(n, T)) {
        ctx.setLineDash([1.5, 4]);
        ctx.strokeStyle = rgba(GOLD, 0.6);
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(n.x + ux * n.R, n.y + uy * n.R); ctx.lineTo(x1, y1); ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.fillStyle = rgba(GOLD, 0.8);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 - ux * 6 - uy * 3.5, y1 - uy * 6 + ux * 3.5);
      ctx.lineTo(x1 - ux * 6 + uy * 3.5, y1 - uy * 6 - ux * 3.5);
      ctx.closePath(); ctx.fill();
    }

    for (i = 0; i < field.nodes.length; i++) drawNode(field.nodes[i], t);

    // sparks and motes
    for (i = 0; i < parts.length; i++) {
      var q = parts[i], f = q.life / q.max;
      if (q.gain) {
        var sp = Math.sqrt(q.vx * q.vx + q.vy * q.vy) || 1;
        ctx.strokeStyle = rgba(GOLDB, 0.9 * f);
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(q.x - q.vx / sp * 4, q.y - q.vy / sp * 4); ctx.stroke();
      } else {
        ctx.fillStyle = rgba(WHITE, 0.55 * f * f);
        ctx.fillRect(q.x - 0.8, q.y - 0.8, 1.6, 1.6);
      }
    }

    for (i = 0; i < rings.length; i++) {
      var r = rings[i], u = 1 - r.life / r.max, rr = r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - u, 2)), al = (1 - u) * 0.9;
      ctx.strokeStyle = rgba(r.color, al);
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      if (r.kind === "jag") {
        for (var a = 0; a <= 24; a++) {
          var ang = a / 24 * 6.283, rj = rr * (a % 2 ? 0.78 : 1.08);
          if (a === 0) ctx.moveTo(r.x + Math.cos(ang) * rj, r.y + Math.sin(ang) * rj);
          else ctx.lineTo(r.x + Math.cos(ang) * rj, r.y + Math.sin(ang) * rj);
        }
      } else ctx.arc(r.x, r.y, Math.max(0.5, rr), 0, 6.283);
      ctx.stroke();
      if (r.kind === "rays") {
        ctx.beginPath();
        for (a = 0; a < 12; a++) {
          ang = a / 12 * 6.283 + 0.26;
          ctx.moveTo(r.x + Math.cos(ang) * rr * 0.55, r.y + Math.sin(ang) * rr * 0.55);
          ctx.lineTo(r.x + Math.cos(ang) * rr * 0.85, r.y + Math.sin(ang) * rr * 0.85);
        }
        ctx.stroke();
      }
    }

    ctx.font = "italic 13px " + SERIF;
    ctx.textAlign = "center";
    for (i = 0; i < labels.length; i++) {
      var lb = labels[i], lf = lb.life / lb.max;
      ctx.fillStyle = rgba(lb.color, Math.min(1, lf * 2.2) * 0.95);
      halo(ctx, lb.text, clamp(lb.x, 40, cssW - 40), clamp(lb.y - (1 - lf) * 14, 14, cssH - 6));
    }

    if (!state.running) {
      ctx.font = "12px " + SERIF;
      ctx.textAlign = "left";
      ctx.fillStyle = rgba(WHITE, 0.55);
      halo(ctx, "paused", 12, cssH - 12);
    }
  }

  function drawDuo(d, t) {
    var a = d.a, c = d.b, dx = c.x - a.x, dy = c.y - a.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / dist, uy = dy / dist, nx = -uy, ny = ux;
    var x0 = a.x + ux * a.r, y0 = a.y + uy * a.r, x1 = c.x - ux * c.r, y1 = c.y - uy * c.r;
    var naar = d.e.n === 1, sel = d === state.sel, w = clamp(Math.abs(d.y) / 0.5, 0, 1), neg = d.y < 0;
    if (sel) {
      ctx.strokeStyle = rgba(GOLDB, 0.95);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (var e = 0; e < 2; e++) {
        var sg = e ? -1 : 1, ex = (e ? x1 : x0) + ux * sg * 5, ey = (e ? y1 : y0) + uy * sg * 5;
        ctx.moveTo(ex + nx * 7 + ux * sg * 4, ey + ny * 7 + uy * sg * 4);
        ctx.lineTo(ex + nx * 7, ey + ny * 7);
        ctx.lineTo(ex - nx * 7, ey - ny * 7);
        ctx.lineTo(ex - nx * 7 + ux * sg * 4, ey - ny * 7 + uy * sg * 4);
      }
      ctx.stroke();
    }
    // held bound, its Leden unable to give back what it bore away past its
    // Vol: white and solid, clasped at its middle; read as one in Naar: gold,
    // as wide as its Trouw; its two Leden both across, holding its Trouw
    // between them: a thin gold line; otherwise white and dashed, as faint as
    // its Trouw is worn
    var held = d.a.e.n && d.b.e.n;
    if (d.bound) {
      ctx.strokeStyle = rgba(WHITE, 0.5 + 0.3 * d.flash);
      ctx.lineWidth = 1;
      var mx = 0.5 * (x0 + x1), my = 0.5 * (y0 + y1);
      ctx.beginPath();
      ctx.moveTo(mx - ux * 2 + nx * 5, my - uy * 2 + ny * 5); ctx.lineTo(mx - ux * 2 - nx * 5, my - uy * 2 - ny * 5);
      ctx.moveTo(mx + ux * 2 + nx * 5, my + uy * 2 + ny * 5); ctx.lineTo(mx + ux * 2 - nx * 5, my + uy * 2 - ny * 5);
      ctx.stroke();
    } else if (naar) {
      ctx.strokeStyle = rgba(neg ? WHITE : GOLD, 0.4 + 0.5 * w + 0.3 * d.flash);
      ctx.lineWidth = 1 + 3.2 * w;
    } else if (held && !neg) {
      ctx.strokeStyle = rgba(GOLD, 0.25 + 0.4 * w + 0.3 * d.flash);
      ctx.lineWidth = 1;
    } else {
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = rgba(WHITE, 0.08 + 0.45 * w + 0.3 * d.flash);
      ctx.lineWidth = 1;
    }
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.setLineDash([]);

    // signals crossing the Medium, one lane each way, a Vertraging late: gold
    // where the sender stood past its Drempel when it left, white where it did not
    var every = 0.25, lanes = [[a, c, 1], [c, a, -1]];
    for (var l = 0; l < 2; l++) {
      var from = lanes[l][0], to = lanes[l][1], side = lanes[l][2] * 2.2, del = field.delta(to, from);
      var fx0 = l ? x1 : x0, fy0 = l ? y1 : y0, fx1 = l ? x0 : x1, fy1 = l ? y0 : y1;
      var base = Math.floor(t / every) * every;
      for (var s = 0; s * every <= del + every; s++) {
        var age = t - (base - s * every);
        if (age < 0 || age > del) continue;
        var u = age / del, past = field.past(from, t - age), on = past > from.th;
        var px = fx0 + (fx1 - fx0) * u + nx * side, py = fy0 + (fy1 - fy0) * u + ny * side;
        ctx.fillStyle = rgba(on ? GOLDB : WHITE, (0.15 + 0.5 * Math.max(w, 0.25)) * (naar ? 1 : 0.7));
        ctx.beginPath(); ctx.arc(px, py, on ? 1.7 : 1.2, 0, 6.283); ctx.fill();
      }
    }
    // a look that takes the signal in: a brief mark at the reader's end
    for (var i = field.looks.length - 1; i >= 0; i--) {
      var lk = field.looks[i], lage = t - lk.t;
      if (lage > 0.3) break;
      if (!((lk.from === a && lk.to === c) || (lk.from === c && lk.to === a))) continue;
      var rd = lk.from, ox = rd === a ? x0 + ux * 6 : x1 - ux * 6, oy = rd === a ? y0 + uy * 6 : y1 - uy * 6;
      ctx.strokeStyle = rgba(WHITE, 0.7 * (1 - lage / 0.3));
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(ox, oy, 2.4, 0, 6.283); ctx.stroke();
    }

    // trajectory glyph, its Zelf's hold, and a wait at its Drempel
    var mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    if (w > 0.12 || sel) {
      ctx.font = "italic 14px " + SERIF;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = rgba(naar ? GOLDB : WHITE, naar ? 0.9 : 0.6);
      halo(ctx, d.traj, mx + nx * 11, my + ny * 11);
      ctx.textBaseline = "alphabetic";
    }
    if (d.zs.n || d.zflash > 0) {
      ctx.strokeStyle = rgba(naar ? GOLDB : WHITE, d.zs.n ? 0.75 : 0.4 * d.zflash);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(mx, my, 3 + 6 * (d.zflash || 0), 0, 6.283); ctx.stroke();
    }
    if (d.e.wait) {
      ctx.strokeStyle = rgba(WHITE, 0.8);
      ctx.setLineDash([1, 2]);
      ctx.beginPath(); ctx.arc(mx, my, 7, 0, 6.283); ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  function drawNode(n, t) {
    var fade = n.state === "live" ? 1 : clamp(1 - n.fade / field.P.fadeTime, 0, 1);
    var r = Math.max(1, n.r), sel = n === state.selNode, x = valueAt(n.e, t);
    var past = n.e.n === 1, gap = clamp(Math.abs(x - n.th) / 0.8, 0, 1);

    // its Eigen against its Drempel: a gold glow past it, a faint white one short of it
    var gr = r * (1.6 + 1.8 * gap);
    var gg = ctx.createRadialGradient(n.x, n.y, r * 0.6, n.x, n.y, gr);
    gg.addColorStop(0, rgba(past ? GOLD : WHITE, (past ? 0.12 + 0.4 * gap : 0.05 + 0.08 * (1 - gap)) * fade));
    gg.addColorStop(1, rgba(past ? GOLD : WHITE, 0));
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.arc(n.x, n.y, gr, 0, 6.283); ctx.fill();

    // Rouw: every ended Relatie it keeps, for good
    var shown = Math.min(n.rouw.length, 36);
    for (var k = n.rouw.length - shown; k < n.rouw.length; k++) {
      var ro = n.rouw[k], ix = k - (n.rouw.length - shown), ringIx = Math.floor(ix / 12);
      var orb = r + L * 0.012 + ringIx * L * 0.008, ang = ro.ang + t * 0.05 * (ringIx % 2 ? -1 : 1);
      ctx.strokeStyle = rgba(WHITE, (0.3 + 0.5 * clamp(Math.abs(ro.y) / 0.4, 0, 1)) * fade);
      ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.arc(n.x + Math.cos(ang) * orb, n.y + Math.sin(ang) * orb, 1.7, 0, 6.283); ctx.stroke();
    }

    // body: filled towards Vol, hollow towards Leeg
    ctx.fillStyle = "#000";
    ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.283); ctx.fill();
    ctx.fillStyle = rgba(GOLD, (0.06 + 0.8 * clamp(n.vol / 0.3, 0, 1)) * fade);
    ctx.fill();
    ctx.strokeStyle = rgba(sel ? GOLDB : GOLD, (sel ? 1 : 0.85) * fade);
    ctx.lineWidth = sel ? 2 : 1.2;
    ctx.stroke();

    // its Zelf: an inner ring, whole where it holds the Solo across, broken
    // where it does not, off centre by the self-gap
    var off = clamp((n.eS - x) * r * 0.8, -r * 0.45, r * 0.45), dark = n.vol > 0.18;
    var held = 0.12 + 0.88 * clamp(Math.abs(n.yS) / 0.3, 0, 1);   // fainter as its Trouw wears
    ctx.strokeStyle = rgba(dark ? "0,0,0" : WHITE, (n.zs.n ? 0.75 : 0.4) * held * fade);
    ctx.lineWidth = 1;
    if (!n.zs.n) ctx.setLineDash([1.5, 2]);
    ctx.beginPath(); ctx.arc(n.x, n.y - off, r * 0.42, 0, 6.283); ctx.stroke();
    ctx.setLineDash([]);
    if (n.zflash > 0) {
      ctx.strokeStyle = rgba(n.zs.n ? GOLDB : WHITE, 0.7 * n.zflash * fade);
      ctx.beginPath(); ctx.arc(n.x, n.y, r * (0.45 + 0.7 * (1 - n.zflash)), 0, 6.283); ctx.stroke();
    }
    if (n.flash > 0) {
      ctx.strokeStyle = rgba(past ? GOLDB : WHITE, n.flash * 0.9);
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(n.x, n.y, r + 2 + (1 - n.flash) * 8, 0, 6.283); ctx.stroke();
    }
    // waiting at its Drempel: for Warmte (dotted), or in Balans (a diamond)
    if (n.e.wait === "hunger") {
      ctx.strokeStyle = rgba(WHITE, 0.8);
      ctx.lineWidth = 1;
      ctx.setLineDash([1, 2.5]);
      ctx.beginPath(); ctx.arc(n.x, n.y, r + 4, 0, 6.283); ctx.stroke();
      ctx.setLineDash([]);
    } else if (n.e.wait === "balans") {
      var by = n.y - r - 7;
      ctx.strokeStyle = rgba(WHITE, 0.8);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(n.x, by - 3.5); ctx.lineTo(n.x + 3.5, by); ctx.lineTo(n.x, by + 3.5); ctx.lineTo(n.x - 3.5, by); ctx.closePath(); ctx.stroke();
    }
    if (sel) {
      ctx.strokeStyle = rgba(GOLDB, 0.5);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.R + 4, 0, 6.283); ctx.stroke();
    }
    ctx.font = "11px " + SERIF;
    ctx.textAlign = "center";
    ctx.fillStyle = rgba(WHITE, (sel ? 0.95 : 0.6) * fade);
    var ly = n.y + n.R + 12;
    if (ly > cssH - 4) ly = n.y - n.R - 5;
    halo(ctx, n.name + (n.rouw.length > 36 ? " · " + n.rouw.length : ""), n.x, ly);
  }

  function stepEffects(dt) {
    var i, q;
    for (i = parts.length - 1; i >= 0; i--) {
      q = parts[i];
      q.life -= dt;
      if (q.life <= 0) { parts.splice(i, 1); continue; }
      q.x += q.vx * dt; q.y += q.vy * dt;
      var drag = q.gain ? 3 : 0.7;
      q.vx *= Math.exp(-drag * dt); q.vy *= Math.exp(-drag * dt);
    }
    for (i = rings.length - 1; i >= 0; i--) { rings[i].life -= dt; if (rings[i].life <= 0) rings.splice(i, 1); }
    for (i = labels.length - 1; i >= 0; i--) { labels[i].life -= dt; if (labels[i].life <= 0) labels.splice(i, 1); }
  }

  /* ------------------------------ panel ------------------------------- */
  var mini = {};
  function miniCanvas(id) {
    var c = $(id);
    if (!c) return null;
    var m = mini[id] || (mini[id] = { c: c, ctx: c.getContext("2d"), w: 0, h: 0 });
    var r = c.getBoundingClientRect(), w = Math.max(100, Math.round(r.width)), h = Math.max(60, Math.round(r.height));
    if (m.w !== w || m.h !== h || c.width !== Math.round(w * dpr)) {
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); m.w = w; m.h = h;
    }
    m.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    m.ctx.clearRect(0, 0, w, h);
    return m;
  }

  // each Lid's Eigen against its Drempel, where the other reads it, and
  // the Duo's own Eigen against its own Drempel
  function drawSpectrum(d) {
    var m = miniCanvas("c-spectrum");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, t = field.t, padL = 30, padR = 10;
    var xa = valueAt(d.a.e, t), xb = valueAt(d.b.e, t), xk = valueAt(d.e, t);
    var hi = Math.max(1.6, xa, xb, xk, d.E.ab, d.E.ba, d.a.th, d.b.th) * 1.08, lo = Math.min(0, xa, xb, xk, d.E.ab, d.E.ba);
    var X = function (v) { return padL + (clamp(v, lo, hi) - lo) / (hi - lo) * (w - padL - padR); };
    g.font = "11px " + SERIF;
    g.strokeStyle = rgba(WHITE, 0.25);
    g.lineWidth = 1;
    g.beginPath(); g.moveTo(padL, h - 14); g.lineTo(w - padR, h - 14); g.stroke();
    g.fillStyle = rgba(WHITE, 0.55);
    g.textAlign = "left"; g.fillText("Van <", padL - 2, h - 2);
    g.textAlign = "right"; g.fillText("> Naar", w - padR, h - 2);
    var rows = [[d.a.name, xa, d.a.th, d.E.ba, d.a.e.target], [d.b.name, xb, d.b.th, d.E.ab, d.b.e.target], ["Duo", xk, d.th, null, d.e.target]];
    for (var i = 0; i < 3; i++) {
      var R = rows[i], y = 12 + i * (h - 34) / 2;
      g.textAlign = "left";
      g.fillStyle = rgba(WHITE, 0.8);
      g.fillText(R[0], 2, y + 4);
      // its Drempel
      g.strokeStyle = rgba(WHITE, 0.6);
      g.beginPath(); g.moveTo(X(R[2]), y - 7); g.lineTo(X(R[2]), y + 7); g.stroke();
      // the Binding it reads, where its Eigen is heading
      g.fillStyle = rgba(GOLD, 0.55);
      g.beginPath(); g.moveTo(X(R[4]), y - 9); g.lineTo(X(R[4]) - 3.5, y - 14); g.lineTo(X(R[4]) + 3.5, y - 14); g.closePath(); g.fill();
      if (R[3] !== null) {
        g.strokeStyle = rgba(WHITE, 0.35);
        g.setLineDash([2, 3]);
        g.beginPath(); g.moveTo(X(R[1]), y); g.lineTo(X(R[3]), y); g.stroke();
        g.setLineDash([]);
      }
      g.fillStyle = rgba(R[1] > R[2] ? GOLD : WHITE, 1);
      g.beginPath(); g.arc(X(R[1]), y, 4.5, 0, 6.283); g.fill();
      if (R[3] !== null) {
        g.strokeStyle = rgba(WHITE, 0.95);
        g.lineWidth = 1.4;
        g.beginPath(); g.arc(X(R[3]), y, 4.5, 0, 6.283); g.stroke();
        g.lineWidth = 1;
      }
    }
  }

  // the landscape of its two Leden (Drempel and the Vonk): each pattern's
  // height V̄, everything else held as it stands. Lower runs deeper.
  function landscape(d) {
    function h(n) {
      var v = n.S + 0.5 * n.yS - n.th;
      for (var i = 0; i < n.duos.length; i++) {
        var o = n.duos[i];
        if (o !== d) v += o.y * field.partner(o, n).e.n;
      }
      return v;
    }
    var ha = h(d.a), hb = h(d.b);
    return { "00": 0, "10": -ha, "01": -hb, "11": -ha - hb - d.y };
  }
  function drawLandscape(d) {
    var m = miniCanvas("c-land");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, V = landscape(d), keys = ["00", "10", "01", "11"];
    var vs = keys.map(function (k) { return V[k]; }), lo = Math.min.apply(null, vs), hi = Math.max.apply(null, vs);
    if (hi - lo < 0.2) { var c0 = (hi + lo) / 2; lo = c0 - 0.1; hi = c0 + 0.1; }
    // deeper patterns are drawn lower
    var X = { "00": w * 0.13, "10": w * 0.38, "01": w * 0.62, "11": w * 0.87 };
    var Y = function (v) { return 10 + (hi - v) / (hi - lo) * (h - 34); };
    var pos = function (k) { return [X[k], Y(V[k])]; };
    g.strokeStyle = rgba(WHITE, 0.25);
    g.lineWidth = 1;
    [["00", "10"], ["00", "01"], ["10", "11"], ["01", "11"]].forEach(function (p) {
      var A = pos(p[0]), B = pos(p[1]);
      g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.stroke();
    });
    var cur = String(d.a.e.n) + String(d.b.e.n), names = { "00": "both Van", "10": d.a.name + " across", "01": d.b.name + " across", "11": "both across" };
    g.font = "11px " + SERIF;
    g.textAlign = "center";
    keys.forEach(function (k) {
      var p = pos(k);
      g.strokeStyle = rgba(k === "11" ? GOLD : WHITE, 0.9);
      g.lineWidth = 2;
      g.beginPath(); g.moveTo(p[0] - 16, p[1]); g.lineTo(p[0] + 16, p[1]); g.stroke();
      g.lineWidth = 1;
      g.fillStyle = rgba(WHITE, 0.6);
      g.fillText(names[k], p[0], Math.min(h - 3, p[1] + 14));
    });
    var pc = pos(cur);
    g.fillStyle = rgba(GOLDB, 1);
    g.beginPath(); g.arc(pc[0], pc[1] - 5, 4.5, 0, 6.283); g.fill();
  }

  // the last 30 seconds: the Duo's Eigen against its Drempel, and the gap
  // between its two Echoes against parity
  function drawTrace(d) {
    var m = miniCanvas("c-trace");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, N = 300, cnt = d.xh.length, i;
    var top = { y0: 16, y1: h / 2 - 4 }, bot = { y0: h / 2 + 16, y1: h - 4 };
    var hi = d.th * 1.6, lo = 0;
    for (i = 0; i < cnt; i++) { hi = Math.max(hi, d.xh[i], d.uh[i]); lo = Math.min(lo, d.xh[i], d.uh[i]); }
    var gmax = 0.3;
    for (i = 0; i < d.gap.length; i++) gmax = Math.max(gmax, Math.abs(d.gap[i]));
    var Yx = function (v) { return top.y1 - (v - lo) / (hi - lo || 1) * (top.y1 - top.y0); };
    var Yg = function (v) { return (bot.y0 + bot.y1) / 2 - v / gmax * (bot.y1 - bot.y0) / 2; };
    var X = function (k) { return w - 4 - (cnt - 1 - k) / (N - 1) * (w - 8); };
    g.strokeStyle = rgba(WHITE, 0.35);
    g.setLineDash([3, 4]);
    g.beginPath(); g.moveTo(4, Yx(d.th)); g.lineTo(w - 4, Yx(d.th)); g.stroke();
    g.beginPath(); g.moveTo(4, Yg(0)); g.lineTo(w - 4, Yg(0)); g.stroke();
    g.setLineDash([]);
    function line(arr, Y, color, dash) {
      g.strokeStyle = color;
      g.lineWidth = 1.4;
      if (dash) g.setLineDash([2, 3]);
      g.beginPath();
      for (var k = 0; k < arr.length; k++) { if (k === 0) g.moveTo(X(k), Y(arr[k])); else g.lineTo(X(k), Y(arr[k])); }
      g.stroke();
      g.setLineDash([]);
      g.lineWidth = 1;
    }
    line(d.uh, Yx, rgba(GOLD, 0.5), true);
    line(d.xh, Yx, rgba(GOLD, 1));
    line(d.gap, Yg, rgba(WHITE, 0.85));
    g.font = "11px " + SERIF;
    g.textAlign = "left";
    g.fillStyle = rgba(WHITE, 0.6);
    g.fillText("its Eigen, and the Binding it reads, against θ", 6, 11);
    g.fillText("ΔE, the gap between its Echoes, against parity", 6, h / 2 + 11);
  }

  function row(k, v, cls) { return "<tr" + (cls ? ' class="' + cls + '"' : "") + "><th>" + k + "</th><td>" + v + "</td></tr>"; }

  var panelT = 0, cache = { nodeRs: null, nodeId: null };

  // one button per Relatie: add new ones, drop ended ones, update text in place
  function syncChips(box, items, empty) {
    var have = {}, i, el, keep = {}, id;
    Array.prototype.forEach.call(box.querySelectorAll("[data-duo]"), function (b) { have[b.getAttribute("data-duo")] = b; });
    for (i = 0; i < items.length; i++) {
      id = String(items[i].id);
      keep[id] = 1;
      el = have[id];
      if (!el) {
        el = document.createElement("button");
        el.className = "chip";
        el.setAttribute("data-duo", id);
        box.appendChild(el);
      }
      if (el.textContent !== items[i].text) el.textContent = items[i].text;
    }
    for (id in have) if (!keep[id]) box.removeChild(have[id]);
    var none = box.querySelector(".muted");
    if (!none) { none = document.createElement("span"); none.className = "muted"; box.appendChild(none); }
    none.textContent = empty;
    none.hidden = items.length > 0;
  }

  function updatePanel(force) {
    var now = performance.now();
    if (!force && now - panelT < 150) return;
    panelT = now;
    var P = field.P, i;
    // follow the field: when the watched Relatie is gone, pick a living one
    if (state.follow && (!state.sel || (state.sel.state !== "live" && field.t - state.endedAt > 5))) {
      var best = null, bs = -Infinity;
      for (i = 0; i < field.duos.length; i++) {
        var dd = field.duos[i], sc = 2 * dd.e.n + dd.y - (field.t - dd.born) / 600;
        if (sc > bs) { bs = sc; best = dd; }
      }
      state.sel = best;
    }
    var n = state.selNode;
    if (n && n.state !== "live" && (n.fade >= P.fadeTime || field.nodes.indexOf(n) < 0)) state.selNode = n = null;
    $("node-card").hidden = !n;
    $("duo-card").hidden = !!n;
    if (n) renderNode(n); else renderDuo(state.sel);
    var ae = document.activeElement;
    if (ae && ae !== document.body && ae.closest && ae.closest("[hidden]")) $(n ? "n-title" : "k-title").focus();

    // the Telraam
    var Lg = field.ledger, inSolo = 0, inDuo = 0;
    for (i = 0; i < field.nodes.length; i++) { var s = field.nodes[i]; if (s.state === "live") inSolo += s.yS * s.e.n * s.zs.n; }
    for (i = 0; i < field.duos.length; i++) inDuo += duoEps(field.duos[i]);
    var cl = field.closure(), ok = Math.abs(cl) < 1e-9 * Math.max(1, field.base);
    $("telraam").innerHTML =
      row("Held by the Zelfs of Solos", inSolo.toFixed(4)) +
      row("Held by Duos", inDuo.toFixed(4)) +
      row("Warmte of the Medium", field.warmte.toFixed(4)) +
      row("ε + T◌, as it opened", (inSolo + inDuo + field.warmte).toFixed(4) + " · " + field.base.toFixed(4)) +
      row("Winst (+) · Verlies (−), all told", "+" + Lg.winst.toFixed(3) + " · −" + Lg.verlies.toFixed(3)) +
      row("Account", ok ? "closes at every Vonk" : "off by " + cl.toExponential(2), ok ? "ok" : "bad");

    // the field
    var live = 0, rouw = 0, naar = 0, hungry = 0, bound = 0, worn = 0, counts = {};
    for (i = 0; i < field.nodes.length; i++) {
      var q = field.nodes[i];
      if (q.state !== "live") continue;
      live++; rouw += q.rouw.length;
      if (Math.abs(q.yS) < 0.001) worn++;
      if (q.e.wait === "hunger" || q.zs.wait === "hunger") hungry++;
    }
    for (i = 0; i < field.duos.length; i++) {
      if (field.duos[i].e.n) naar++;
      if (field.duos[i].e.wait === "hunger" || field.duos[i].zs.wait === "hunger") hungry++;
      if (field.duos[i].bound) bound++;
    }
    var gs = field.groups();
    for (i = 0; i < gs.length; i++) { var key = countName(gs[i].members.length); counts[key] = (counts[key] || 0) + 1; }
    var gtxt = Object.keys(counts).map(function (k) { return k + (counts[k] > 1 ? " ×" + counts[k] : ""); }).join(", ") || "none now";
    var st = field.stats;
    $("fieldstats").innerHTML =
      row("Solos", live + " of at most " + P.nMax) +
      row("Their Zelf's Trouw worn below 0.001", worn + " now") +
      row("Relaties", field.duos.length + " (" + naar + " in Naar)") +
      row("Bound in Naar, three or more", gtxt) +
      row("Rouw kept", rouw) +
      row("Vonken", st.vonken + " (Winst " + st.winsten + ", Verlies " + st.verliezen + ")") +
      row("Waiting on Warmte now", hungry) +
      row("Held bound by what a parting lacks", bound + " now") +
      row("Relaties ended", (st.eindes + st.scheidingen + st.partners) + " (Einde " + st.eindes + ", Scheiding " + st.scheidingen + ")") +
      row("Born at a Start", st.born + (st.unborn ? " (" + st.unborn + " held overfull: no room)" : "")) +
      row("Run for", Math.floor(field.t) + " s");
    syncChips($("field-duos"), field.duos.map(function (d) {
      return { id: d.id, text: d.a.name + "–" + d.b.name + " · " + (d.e.n ? "Naar" : "Van") };
    }), "none yet");
    renderLog();
  }

  function setBtn(id, enabled, text) {
    var el = $(id);
    el.disabled = !enabled;
    if (el.textContent !== text) el.textContent = text;
  }

  function renderDuo(d) {
    var card = $("duo-card");
    if (!d) {
      $("k-title").innerHTML = "No Relatie yet";
      $("k-state").textContent = "Each Solo's Trek reaches those it perceives. Watch for a dotted Zin, and for two that answer.";
      card.classList.add("empty");
      return;
    }
    card.classList.remove("empty");
    var t = field.t, ended = d.state !== "live", P = field.P;
    $("k-title").innerHTML = "Duo " + nm(d.a) + " ↔ " + nm(d.b);
    var txt = ended ? (d.ended === "scheiding" ? "Ended in a Scheiding. Each keeps the other as Rouw."
      : d.ended === "partner" ? "Ended with its Partner. The one that stays keeps it as Rouw."
      : "Ended in an Einde. Each keeps the other as Rouw.")
      : "Read as one, " + (d.e.n ? "in Naar" : "at Van") + (d.zs.n ? ", its Zelf holding it" : ", its Zelf not holding it") +
        (d.a.e.n && d.b.e.n ? "; both Leden across" : "") +
        (d.bound ? "; held bound: what meets it from outside cannot give back what it bore away past its Vol"
          : d.e.wait === "hunger" ? "; waiting at its Drempel for Warmte" : d.e.wait === "balans" ? "; resting at its Drempel" : "") +
        " · " + TRAJ_NAMES[d.traj] + " (" + d.traj + ")";
    $("k-state").textContent = txt;
    drawSpectrum(d);
    drawLandscape(d);
    drawTrace(d);
    var eK = duoEps(d);
    $("k-numbers").innerHTML =
      row("Trouw y, one for both", fmtT(d.y, 3)) +
      row("What it holds ε, and its Vol pole W", fmt(eK, 3) + " · " + fmt(P.W)) +
      (d.bore > 0 ? row("Borne away past its Vol: what a parting lacks", fmt(d.bore, 3)) : "") +
      row("Its Eigen · its Drempel", fmt(valueAt(d.e, t)) + " · " + fmt(d.th)) +
      row("Its Leeg · all that holds it", fmt(d.S) + " · " + fmt(field.holdAll(d))) +
      row("Its Tijd", d.tijd.toFixed(2)) +
      row("Wijk its Zelf last read · its Marge", d.Lhat.toFixed(4) + " · " + fmt(d.eta)) +
      row("Vertraging " + esc(d.a.name) + "→" + esc(d.b.name) + " · back", field.delta(d.b, d.a).toFixed(2) + " · " + field.delta(d.a, d.b).toFixed(2) + " s") +
      row("Age", Math.floor(t - d.born) + " s");
    var mem = [d.a, d.b], sides = ["ab", "ba"];
    var hd = "<tr><th></th><th>" + esc(d.a.name) + "</th><th>" + esc(d.b.name) + "</th></tr>";
    var rowsDef = [
      ["Vol/Leeg · Leeg S", function (n) { return fmt(n.vol) + " · " + fmt(n.S); }],
      ["Eigen x · Drempel θ", function (n) { return fmt(valueAt(n.e, t)) + " · " + fmt(n.th); }],
      ["Binding read · as it stands", function (n) { return fmt(field.bindingSolo(n)) + " · " + fmt(field.standing(n)); }],
      ["Its Echo of the other", function (n, i) { return fmt(d.E[sides[i]]); }],
      ["Gewenning · Diepte of it", function (n, i) { return fmt(d.Z[sides[i]]) + " · " + fmt(d.z[sides[i]]); }],
      ["Its Zelf holds it", function (n) { return n.zs.n ? "yes" : "no"; }],
      ["Greep J · Tijd", function (n) { return fmt(field.greep(n)) + " · " + n.tijd.toFixed(2); }],
      ["Rouw kept", function (n) { return n.rouw.length; }]
    ];
    rowsDef.forEach(function (rd) {
      hd += "<tr><th>" + rd[0] + "</th><td>" + rd[1](mem[0], 0) + "</td><td>" + rd[1](mem[1], 1) + "</td></tr>";
    });
    $("k-members").innerHTML = hd;
    setBtn("k-schrift-a", d.a.state === "live", "Schrift on " + d.a.name);
    setBtn("k-schrift-b", d.b.state === "live", "Schrift on " + d.b.name);
    setBtn("k-read-a", d.a.state === "live", "Read " + d.a.name);
    setBtn("k-read-b", d.b.state === "live", "Read " + d.b.name);
    $("k-follow").hidden = state.follow;
  }

  function renderNode(n) {
    var live = n.state === "live", t = field.t, x = valueAt(n.e, t);
    $("n-title").innerHTML = nm(n) + (live ? "" : " · Perfectus");
    var aim = !live ? "none" : n.aim ? "Zin, aimed at " + nm(n.aim) + (field.duoOf(n, n.aim) ? ", a Partner" : ", a Vreemdeling") : "Trek, unaimed";
    var wait = n.e.wait === "hunger" ? "at its Drempel, waiting for Warmte" : n.e.wait === "balans" ? "at its Drempel: its Vonk would carry it back" : "";
    $("n-numbers").innerHTML =
      row("Vol/Leeg", fmt(n.vol) + " (Leeg S " + fmt(n.S) + ", its Zelf's Trouw " + fmtT(n.yS, 3) + ")") +
      row("Eigen x · Drempel θ", fmt(x) + " · " + fmt(n.th) + (n.e.n ? " (Naar)" : " (Van)")) +
      row("Binding read · as it stands", fmt(field.bindingSolo(n)) + " · " + fmt(field.standing(n))) +
      row("Self-Echo · self-gap", fmt(n.eS) + " · " + fmt(x - n.eS)) +
      row("Its Zelf", (n.zs.n ? "holds it across" : "does not hold it") +
        (Math.abs(n.yS) < 0.001 ? ", its Trouw worn almost to nothing; " +
          (n.duos.some(function (d) { return d.y > 0; }) ? "its Leeg and its Relaties hold it" : "its Leeg alone holds it") : "")) +
      row("Marge, read from outside", fmt(field.marge(n))) +
      row("Wijk its Zelf last read", n.Lhat.toFixed(4)) +
      row("Greep J · Tijd", fmt(field.greep(n)) + " · " + n.tijd.toFixed(2)) +
      row("Diepte z", fmt(n.z)) +
      row("Pull", aim) +
      (wait ? row("Now", wait) : "");
    if (cache.nodeId !== n.id) { cache.nodeId = n.id; cache.nodeRs = null; $("n-duos").textContent = ""; }
    syncChips($("n-duos"), n.duos.map(function (d) {
      var o = field.partner(d, n);
      return { id: d.id, text: o.name + " · " + (d.e.n ? "Naar" : "Van") + " · " + TRAJ_NAMES[d.traj] + " (" + d.traj + ")" };
    }), "none");
    var rs = n.rouw.slice(-10).reverse().map(function (r) { return esc(r.name); });
    if (n.rouw.length > 10) rs.push('<span class="muted">and ' + (n.rouw.length - 10) + " more</span>");
    var rj = rs.join(", ");
    if (rj !== cache.nodeRs) { cache.nodeRs = rj; $("n-rouw").innerHTML = rj || '<span class="muted">none yet</span>'; }
    setBtn("n-schrift", live, n.e.n ? "Schrift: write it back towards Van" : "Schrift: write it across, towards Naar");
  }

  /* ---------------------------- interaction --------------------------- */
  // a Schrift from outside: a value that carries the Eigen a little past
  // its Drempel the other way; what follows is the Veld's own
  function schrift(n) {
    if (!n || n.state !== "live") return;
    var x = valueAt(n.e, field.t), v = n.e.n ? (n.th - x) - 0.3 : (n.th - x) + 0.3;
    field.schrift(n, v);
  }
  function selectDuo(d, pin) {
    state.sel = d;
    state.selNode = null;
    if (pin) state.follow = false;
    updatePanel(true);
  }
  function at(ev) {
    var r = canvas.getBoundingClientRect();
    return [ev.clientX - r.left - canvas.clientLeft, ev.clientY - r.top - canvas.clientTop];
  }
  // a Solo can be moved by hand: dragging it writes its place on the
  // Medium; a press that does not move reads it, as a click does
  var drag = null, handled = null;
  canvas.addEventListener("touchstart", function (ev) {
    if (ev.touches.length !== 1 || !field) return;
    var t = ev.touches[0], r = canvas.getBoundingClientRect();
    // a touch that starts on a Solo moves it, and does not scroll the page
    if (field.nodeAt(t.clientX - r.left - canvas.clientLeft, t.clientY - r.top - canvas.clientTop)) ev.preventDefault();
  }, { passive: false });
  canvas.addEventListener("pointerdown", function (ev) {
    if (ev.button !== 0 || !field || drag) return;
    var p = at(ev), n = field.nodeAt(p[0], p[1]);
    if (!n) return;
    drag = { n: n, id: ev.pointerId, x: p[0], y: p[1], moved: false };
    try { canvas.setPointerCapture(ev.pointerId); } catch (e) { /* the press ended first */ }
  });
  canvas.addEventListener("pointermove", function (ev) {
    var p = at(ev);
    if (!drag) {
      if (ev.pointerType === "mouse")
        canvas.style.cursor = !field ? "default" : field.nodeAt(p[0], p[1]) ? "grab" : field.duoAt(p[0], p[1]) ? "pointer" : "default";
      return;
    }
    if (ev.pointerId !== drag.id) return;
    if (!drag.moved && Math.abs(p[0] - drag.x) + Math.abs(p[1] - drag.y) < 6) return;
    var n = drag.n;
    if (n.state !== "live") { drag = null; return; }
    drag.moved = true;
    canvas.style.cursor = "grabbing";
    var f = field.frame();
    field.movePlace(n, (p[0] - f.ox) / f.s - n.dx, (p[1] - f.oy) / f.s - n.dy);
    n.x = f.ox + f.s * (n.hx + n.dx); n.y = f.oy + f.s * (n.hy + n.dy);   // drawn where it now stands, paused or not
  });
  function release(ev) {
    if (!drag || ev.pointerId !== drag.id) return;
    var d = drag;
    drag = null;
    handled = { t: performance.now(), p: at(ev) };
    canvas.style.cursor = "grab";
    if (ev.type === "pointercancel") return;
    if (d.moved) field.movePlace(d.n, d.n.hx, d.n.hy, true);
    if (d.n.state === "live") { state.selNode = d.n; updatePanel(true); }
  }
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);
  canvas.addEventListener("click", function (ev) {
    var p = at(ev), n;
    // the click that ends a press on a Solo: read or moved above
    if (handled && performance.now() - handled.t < 400 && Math.abs(p[0] - handled.p[0]) + Math.abs(p[1] - handled.p[1]) < 12) return;
    n = field.nodeAt(p[0], p[1]);
    if (n) { state.selNode = n; updatePanel(true); return; }
    var d = field.duoAt(p[0], p[1]);
    if (d) { selectDuo(d, true); return; }
    state.selNode = null;
    updatePanel(true);
  });

  // a pointer click leaves no focus behind, so Space keeps meaning pause
  function on(id, fn) {
    var el = $(id);
    if (el) el.addEventListener("click", function (ev) { fn(ev); if (ev.detail) el.blur(); });
  }
  on("k-schrift-a", function () { if (state.sel) schrift(state.sel.a); });
  on("k-schrift-b", function () { if (state.sel) schrift(state.sel.b); });
  on("k-follow", function () { state.follow = true; state.sel = null; updatePanel(true); });
  on("n-schrift", function () { schrift(state.selNode); });
  on("n-back", function () { state.selNode = null; updatePanel(true); });
  on("k-read-a", function () { if (state.sel) { state.selNode = state.sel.a; updatePanel(true); } });
  on("k-read-b", function () { if (state.sel) { state.selNode = state.sel.b; updatePanel(true); } });
  function chipClick(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-duo]") : null;
    if (!el) return;
    var id = el.getAttribute("data-duo");
    for (var i = 0; i < field.duos.length; i++) if (String(field.duos[i].id) === id) selectDuo(field.duos[i], true);
  }
  $("n-duos").addEventListener("click", chipClick);
  $("field-duos").addEventListener("click", chipClick);

  function setRunning(r) {
    state.running = r;
    $("play").textContent = r ? "Pause" : "Play";
    if (!r) { paceShown = ""; $("pace").textContent = ""; }
    if (r) $("reduced").hidden = true;
  }
  on("play", function () { setRunning(!state.running); });
  on("replay", function () {
    newField(true);
    addLog("The same field again, with new Vervorming in its looks: it parts from the last run at its first look.");
  });
  on("newfield", function () { newField(false); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-speed]"), function (btn) {
    btn.addEventListener("click", function (ev) {
      if (ev.detail) btn.blur();
      state.speed = +btn.getAttribute("data-speed");
      Array.prototype.forEach.call(document.querySelectorAll("[data-speed]"), function (o) { o.setAttribute("aria-pressed", o === btn ? "true" : "false"); });
    });
  });
  var pending = $("pending");
  function bindSlider(id, digits) {
    var el = $(id), out = $(id + "-v");
    function upd(ev) {
      out.textContent = (+el.value).toFixed(digits);
      if (ev && field) pending.textContent = "These values open the next field: press Replay or New field.";
    }
    el.addEventListener("input", upd);
    upd();
  }
  // the sliders open at the values this Instantie chose
  var SLIDERS = { "s-ups": [1, 2], "s-warmte": ["warmte", 2], "s-lm": ["Lm", 2], "s-init": ["nInit", 0], "s-max": ["nMax", 0],
                  "s-rho": ["rho", 2], "s-y0": ["y0", 2], "s-w": ["W", 2], "s-reach": ["reach", 2] };
  function setDefaults() {
    Object.keys(SLIDERS).forEach(function (id) {
      var k = SLIDERS[id][0];
      $(id).value = typeof k === "number" ? k : Sim.DEFAULTS[k];
    });
  }
  setDefaults();
  Object.keys(SLIDERS).forEach(function (id) { bindSlider(id, SLIDERS[id][1]); });

  // presets: the same field again under other values. Characters, not Octaven
  var PRESETS = {
    instantie: { v: {}, note: "The values this page opens with." },
    cold: { v: { "s-warmte": 0.6, "s-ups": 0.7, "s-lm": 0.03 },
      note: "Little Warmte, little Vervorming and little wear: few Relaties form, and those that do last." },
    hot: { v: { "s-warmte": 1.8, "s-ups": 1.3, "s-lm": 0.08 },
      note: "Much Warmte, Vervorming and wear: Relaties form and end four or five times as often, and the field fills." },
    deep: { v: { "s-rho": 0.9, "s-y0": 0.9 },
      note: "Each Vonk moves its Trouw far, and every Relatie opens deep: bonds run deeper." },
    light: { v: { "s-rho": 0.25, "s-y0": 0.35 },
      note: "Each Vonk moves its Trouw a little, and Relaties open shallow: light bonds, more of them in Naar." },
    crowd: { v: { "s-init": 24, "s-max": 32, "s-reach": 0.25 },
      note: "Many Solos, each reaching only those near it." }
  };
  Array.prototype.forEach.call(document.querySelectorAll("[data-preset]"), function (btn) {
    btn.addEventListener("click", function (ev) {
      if (ev.detail) btn.blur();
      var p = PRESETS[btn.getAttribute("data-preset")];
      setDefaults();
      Object.keys(p.v).forEach(function (id) { $(id).value = p.v[id]; });
      Object.keys(SLIDERS).forEach(function (id) { $(id + "-v").textContent = (+$(id).value).toFixed(SLIDERS[id][1]); });
      $("preset-note").textContent = btn.textContent + ". " + p.note;
      newField(true);
      addLog("The same field again, as " + btn.textContent + ".");
    });
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key !== " " || ev.repeat || ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey) return;
    if (ev.target !== document.body && ev.target !== canvas) return;
    var r = canvas.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    ev.preventDefault();
    setRunning(!state.running);
  });

  if (window.ResizeObserver) new ResizeObserver(function () { resize(); }).observe(canvas);
  window.addEventListener("resize", resize);

  /* ------------------------------- loop ------------------------------- */
  // each frame runs every event that falls within it, at its own moment;
  // the length of a frame changes no event of the Veld
  var last = performance.now(), pace = 1, paceShown = "";
  function frame(now) {
    var dt = Math.min(0.1, Math.max(0, (now - last) / 1000)), simDt = 0;
    last = now;
    if (state.running && dt > 0) {
      // in steps of a tenth of a second, so every Lezing is read as often as at
      // 1x; when a frame's budget is spent, the Veld runs slower than asked
      var want = dt * state.speed, t0 = performance.now();
      while (simDt < want - 1e-9) {
        var step = Math.min(0.1, want - simDt);
        field.advance(step);
        simDt += step;
        if (performance.now() - t0 > 12) break;
      }
      pace = 0.9 * pace + 0.1 * simDt / dt;
      var shown = state.speed > 1 && pace < 0.85 * state.speed ? "running at " + Math.round(pace) + "×" : "";
      if (shown !== paceShown) { paceShown = shown; $("pace").textContent = shown; }
    }
    consume();
    for (var k = 0; k < field.duos.length; k++) drainSparks(field.duos[k], false);
    for (k = 0; k < field.nodes.length; k++) drainSparks(field.nodes[k], false);
    stepEffects(Math.min(simDt, dt * 4));      // marks fade at a pace the eye can follow
    draw();
    updatePanel(false);
    if (state.selNode === null && state.sel) { drawSpectrum(state.sel); drawLandscape(state.sel); drawTrace(state.sel); }
    requestAnimationFrame(frame);
  }

  setRunning(state.running);
  if (reduce) $("reduced").hidden = false;
  newField(false);
  updatePanel(true);
  requestAnimationFrame(frame);

  // for tests: the running field
  window.VeldPage = { field: function () { return field; }, state: state, countName: countName };
})();
