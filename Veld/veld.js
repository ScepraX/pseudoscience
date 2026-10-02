/* =====================================================================
   The Veld in Motion: drawing, panel and controls.
   The simulation itself lives in veld-sim.js and knows nothing of this.
   Gold leans toward Naar, white toward Van, black is Stilte.
   ===================================================================== */
(function () {
  "use strict";
  var Sim = window.VeldSim;
  if (!Sim) return;
  var Field = Sim.Field, H = Sim.H;

  var GOLD = "212,175,55", GOLDB = "241,210,124", WHITE = "255,255,255";
  var SERIF = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif';
  var PRIME_NAMES = { 2: "Duo", 3: "Trio", 5: "Cinquo", 7: "Septo", 11: "Onzo", 13: "Trezo", 17: "Dixsepto" };
  var TRAJ_NAMES = { "'": "Zweven", "!": "Dood", "?": "Leven" };

  function rgba(c, a) { return "rgba(" + c + "," + (a < 0 ? 0 : a > 1 ? 1 : a).toFixed(3) + ")"; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function fmt(v, d) { return (v < 0 ? "−" : "") + Math.abs(v).toFixed(d === undefined ? 2 : d); }
  function signed(v, d) { return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(d === undefined ? 2 : d); }
  function $(id) { return document.getElementById(id); }
  // canvas text with a dark halo, so lines and dots never strike it through
  function halo(g, text, x, y) {
    g.lineJoin = "round";
    g.lineWidth = 3;
    g.strokeStyle = "rgba(0,0,0,0.85)";
    g.strokeText(text, x, y);
    g.fillText(text, x, y);
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var canvas = $("veld");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = {
    running: !reduce, speed: 1, sel: null, selNode: null, follow: true, endedAt: 0,
    seed: 1 + Math.floor(Math.random() * 99999), noiseSeed: 1 + Math.floor(Math.random() * 99999)
  };
  var field = null, cssW = 0, cssH = 0, dpr = 1;
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
    cssW = w; cssH = h;
  }

  function sliderParams() {
    return { upsilon: +$("s-upsilon").value, nu0: +$("s-nu0").value, theta: +$("s-theta").value };
  }

  var query = new URLSearchParams(location.search), urlSeed = +query.get("seed") || 0;
  function newField(keepSeed) {
    if (!keepSeed) { state.seed = urlSeed || 1 + Math.floor(Math.random() * 99999); urlSeed = 0; }
    state.noiseSeed = 1 + Math.floor(Math.random() * 99999);
    resize();
    field = new Field({ seed: state.seed, noiseSeed: state.noiseSeed, width: cssW, height: cssH, params: sliderParams() });
    parts.length = 0; rings.length = 0; labels.length = 0; logLines.length = 0;
    state.sel = null; state.selNode = null; state.follow = true;
    $("seed").textContent = "field " + state.seed;
    // ?warm=60 starts the field 60 seconds in; with reduced motion it starts 30 s in, so
    // the still frame already shows Koppels
    var warm = +(query.get("warm") || (reduce ? 30 : 0));
    for (var w = 0; w < Math.min(warm, 1800) / H; w++) field.step();
    field.events = [];
    addLog("A new field: " + field.nodes.length + " Solos, each with its Zelf" + (field.bonds.length ? "." : ", none bound yet."));
    renderLog();
    updatePanel(true);
  }

  /* ------------------------------ effects ----------------------------- */
  function mid(b) { return { x: (b.a.x + b.b.x) / 2, y: (b.a.y + b.b.y) / 2 }; }

  function ring(x, y, r0, r1, life, color, kind) {
    rings.push({ x: x, y: y, r0: r0, r1: r1, life: life, max: life, color: color, kind: kind || "ring" });
    if (rings.length > 60) rings.shift();
  }

  function label(text, x, y, color) {
    for (var i = 0; i < labels.length; i++) {
      var l = labels[i];
      if (Math.abs(l.x - x) < 70 && Math.abs(l.y - y) < 16) y = l.y - 16;
    }
    labels.push({ text: text, x: x, y: y, life: 2.4, max: 2.4, color: color });
    if (labels.length > 6) labels.shift();
  }

  function spark(b, gain) {
    var u = 0.2 + 0.6 * Math.random();
    var x = b.a.x + (b.b.x - b.a.x) * u, y = b.a.y + (b.b.y - b.a.y) * u;
    var dx = b.b.x - b.a.x, dy = b.b.y - b.a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / d, ny = dx / d, side = Math.random() < 0.5 ? -1 : 1, L = field.L;
    if (gain) {
      parts.push({ x: x, y: y, vx: nx * side * 22, vy: ny * side * 22, life: 0.6, max: 0.6, gain: true });
    } else {
      // Verlies leaves as exhaust into the Medium, and spreads
      var sp = L * (0.05 + 0.06 * Math.random());
      parts.push({ x: x, y: y, vx: nx * side * sp, vy: ny * side * sp, life: 2.6, max: 2.6, gain: false });
    }
    if (parts.length > 500) parts.shift();
  }

  function exhaustAt(x, y, n) {
    for (var i = 0; i < n; i++) {
      var a = Math.random() * 6.283, sp = field.L * (0.04 + 0.06 * Math.random());
      parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 2.6, max: 2.6, gain: false });
    }
  }

  var SPARK_Q = 0.004;
  function drainSparks(b, burst) {
    var cap = burst ? 30 : 2, c = 0;
    while (b.sparkW >= SPARK_Q && c < cap) { spark(b, true); b.sparkW -= SPARK_Q; c++; }
    c = 0;
    while (b.sparkV >= SPARK_Q && c < cap) { spark(b, false); b.sparkV -= SPARK_Q; c++; }
    if (b.sparkW > 20 * SPARK_Q) b.sparkW = 20 * SPARK_Q;
    if (b.sparkV > 20 * SPARK_Q) b.sparkV = 20 * SPARK_Q;
  }

  /* ------------------------------- log -------------------------------- */
  function addLog(text) {
    logLines.unshift(text);
    if (logLines.length > 7) logLines.pop();
    logDirty = true;
  }
  var logDirty = true;
  function renderLog() {
    if (!logDirty) return;
    logDirty = false;
    $("log").innerHTML = logLines.map(function (l) { return "<li>" + l + "</li>"; }).join("");
  }
  function nm(n) { return "<b>" + esc(n.name) + "</b>"; }
  function pair(b) { return nm(b.a) + "–" + nm(b.b); }

  function consume() {
    var evs = field.events;
    field.events = [];
    for (var i = 0; i < evs.length; i++) {
      var ev = evs[i], p, b = ev.bond, L = field.L;
      switch (ev.kind) {
        case "realisatie":
          p = mid(b);
          ring(p.x, p.y, 4, L * 0.07, 1.1, GOLDB, "rays");
          label("Realisatie", p.x, p.y - 12, GOLDB);
          addLog(pair(b) + " cross the Drempel toward Naar: a Realisatie.");
          break;
        case "schok":
          p = mid(b);
          ring(p.x, p.y, 4, L * 0.06, 1.0, WHITE, "jag");
          label("Schok", p.x, p.y - 12, WHITE);
          addLog(pair(b) + " fall back across the Drempel toward Van: a Schok.");
          break;
        case "creatie":
          ring(ev.node.x, ev.node.y, 2, L * 0.09, 1.4, GOLDB, "rays");
          label("Creatie", ev.node.x, ev.node.y - 16, GOLDB);
          addLog("Creatie: " + pair(b) + " overflow their Inhoud, and " + nm(ev.node) + " is born, bound to both.");
          break;
        case "perfectus":
          ring(ev.node.x, ev.node.y, L * 0.07, 2, 2.2, WHITE, "ring");
          exhaustAt(ev.node.x, ev.node.y, 8);
          label("Perfectus", ev.node.x, ev.node.y - 16, WHITE);
          addLog(nm(ev.node) + " has settled to Van: Perfectus. Its field returns to Bron.");
          break;
        case "relatie":
          ring(b.a.x, b.a.y, b.a.r, b.a.r + L * 0.03, 0.8, WHITE, "ring");
          ring(b.b.x, b.b.y, b.b.r, b.b.r + L * 0.03, 0.8, WHITE, "ring");
          if (!ev.birth) addLog(pair(b) + ": both pulls answer. Echoes switch on, a Relatie begins.");
          if (state.follow && (!state.sel || state.sel.ended)) { state.sel = b; if (!state.selNode) updatePanel(true); }
          break;
        case "end":
          drainSparks(b, true);
          if (ev.cause === "dissolved") {
            label("Rouw", b.a.x, b.a.y - b.a.R - 8, WHITE);
            label("Rouw", b.b.x, b.b.y - b.b.R - 8, WHITE);
            addLog(pair(b) + " dissolve. Both keep the other's Echo, as Rouw.");
          } else if (ev.departed) {
            var s = ev.departed === b.a ? b.b : b.a;
            addLog(nm(s) + " keeps the last Echo of " + nm(ev.departed) + ", as Rouw.");
          }
          if (b === state.sel) state.endedAt = field.t;
          break;
        case "traj":
          if (ev.traj === "?") {
            p = mid(b);
            label("Leven ?", p.x, p.y - 12, GOLDB);
            addLog(pair(b) + ": the Echo asymmetry runs through parity. Leven: the roles swap, and a small Realisatie fires.");
          } else if (ev.how === "verstijving") {
            addLog(pair(b) + ": the Echo-gap stops closing. Dood.");
          }
          break;
        case "masker":
          label(ev.on ? "Masker" : "Bloot", ev.node.x, ev.node.y - ev.node.R - 8, WHITE);
          addLog(nm(ev.node) + (ev.on ? " puts on a Masker." : " sets the Masker down."));
          break;
        case "masker-falls":
          ring(ev.node.x, ev.node.y, ev.node.r, ev.node.r + L * 0.05, 1.0, WHITE, "ring");
          label("Masker falls", ev.node.x, ev.node.y - ev.node.R - 8, WHITE);
          addLog(nm(ev.node) + "'s Masker falls under its Pijn; its partners now hear the true Eigen.");
          break;
        case "bron":
          ring(ev.node.x, ev.node.y, L * 0.06, 2, 1.4, GOLDB, "ring");
          addLog(nm(ev.node) + " arrives from Bron, a Solo with Trek and no Koppel.");
          break;
        case "schrift":
          ring(ev.node.x, ev.node.y, ev.node.r, ev.node.r + L * 0.05, 0.9, GOLDB, "ring");
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
  function draw(dtv) {
    var L = field.L, t = field.t, i, k, n, b;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cssW, cssH);
    var g = ctx.createRadialGradient(cssW / 2, cssH * 0.45, 0, cssW / 2, cssH * 0.45, Math.max(cssW, cssH) * 0.7);
    g.addColorStop(0, rgba(GOLD, 0.05));
    g.addColorStop(1, rgba(GOLD, 0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, cssW, cssH);

    // irreducibly bound groups (§V): a loose outline around each block of three or more
    var groups = field.groups();
    ctx.font = "italic 12px " + SERIF;
    ctx.textAlign = "center";
    for (i = 0; i < groups.length; i++) {
      var m = groups[i].members;
      if (m.length < 3) continue;
      var hull = outline(m, L * 0.03);
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = rgba(GOLD, 0.5);
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (k = 0; k < hull.length; k++) {
        if (k === 0) ctx.moveTo(hull[k][0], hull[k][1]); else ctx.lineTo(hull[k][0], hull[k][1]);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);
      var top = hull[0];
      for (k = 1; k < hull.length; k++) if (hull[k][1] < top[1]) top = hull[k];
      ctx.fillStyle = rgba(GOLD, 0.75);
      halo(ctx, PRIME_NAMES[m.length] || String(m.length), clamp(top[0], 30, cssW - 30), Math.max(12, top[1] - 5));
    }

    // Koppels
    for (k = 0; k < field.bonds.length; k++) drawBond(field.bonds[k], t, L);

    // Zin: Trek aimed at one other, not yet answered
    for (i = 0; i < field.nodes.length; i++) {
      n = field.nodes[i];
      if (!n.zin || n.state !== "live") continue;
      var T = n.zin.target, dx = T.x - n.x, dy = T.y - n.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / d, uy = dy / d, x0 = n.x + ux * n.R, y0 = n.y + uy * n.R, x1 = T.x - ux * (T.R + 3), y1 = T.y - uy * (T.R + 3);
      if (d < n.R + T.R + 6) continue;
      ctx.setLineDash([1.5, 4]);
      ctx.strokeStyle = rgba(GOLD, 0.6);
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = rgba(GOLD, 0.7);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 - ux * 6 - uy * 3.5, y1 - uy * 6 + ux * 3.5);
      ctx.lineTo(x1 - ux * 6 + uy * 3.5, y1 - uy * 6 - ux * 3.5);
      ctx.closePath(); ctx.fill();
    }

    // nodes
    for (i = 0; i < field.nodes.length; i++) drawNode(field.nodes[i], t, L, dtv);

    // sparks and exhaust
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

    // rings
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
      } else {
        ctx.arc(r.x, r.y, Math.max(0.5, rr), 0, 6.283);
      }
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

    // floating names of events
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

  function drawBond(b, t, L) {
    var a = b.a, c = b.b, dx = c.x - a.x, dy = c.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / d, uy = dy / d, nx = -uy, ny = ux;
    var x0 = a.x + ux * a.r, y0 = a.y + uy * a.r, x1 = c.x - ux * c.r, y1 = c.y - uy * c.r;
    var naar = b.mode === "naar", sel = b === state.sel;
    if (sel) {
      // the Koppel in the panel is bracketed at both ends
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
    if (naar) {
      ctx.strokeStyle = rgba(GOLD, 0.35 + 0.5 * clamp(Math.abs(b.phi) / 0.9, 0, 1));
      ctx.lineWidth = 1 + 3 * b.y;
    } else {
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = rgba(WHITE, 0.45);
      ctx.lineWidth = 1;
    }
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.setLineDash([]);

    // Echo signals crossing the Medium, one lane each way, Δ late
    var every = 0.22, lanes = [[a, c, 0, 1], [c, a, 1, -1]];
    for (var l = 0; l < 2; l++) {
      var from = lanes[l][0], who = lanes[l][2], side = lanes[l][3] * 2.2;
      var fx0 = l ? x1 : x0, fy0 = l ? y1 : y0, fx1 = l ? x0 : x1, fy1 = l ? y0 : y1;
      var base = Math.floor(t / every) * every;
      for (var s = 0; s * every <= b.delta + every; s++) {
        var age = t - (base - s * every);
        if (age < 0 || age > b.delta) continue;
        var u = age / b.delta, v = clamp(field.heard(b, who, age) / 1.4, 0, 1);
        var px = fx0 + (fx1 - fx0) * u + nx * side, py = fy0 + (fy1 - fy0) * u + ny * side;
        if (from.mask) {
          ctx.strokeStyle = rgba(WHITE, 0.45 + 0.5 * v);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, py - 2.6); ctx.lineTo(px + 2.6, py); ctx.lineTo(px, py + 2.6); ctx.lineTo(px - 2.6, py); ctx.closePath();
          ctx.stroke();
        } else {
          ctx.fillStyle = rgba(naar ? GOLDB : WHITE, 0.2 + 0.65 * v);
          ctx.beginPath(); ctx.arc(px, py, 1 + 1.1 * v, 0, 6.283); ctx.fill();
        }
      }
    }

    // trajectory glyph, and Balans when the binding sits inside its Marge
    var mx = (x0 + x1) / 2 + nx * 11, my = (y0 + y1) / 2 + ny * 11;
    ctx.font = "italic 14px " + SERIF;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = rgba(naar ? GOLDB : WHITE, naar ? 0.9 : 0.65);
    halo(ctx, b.traj, mx, my);
    if (b.balans) {
      var bx = (x0 + x1) / 2, by = (y0 + y1) / 2;
      ctx.strokeStyle = rgba(WHITE, 0.75);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bx, by - 4); ctx.lineTo(bx + 4, by); ctx.lineTo(bx, by + 4); ctx.lineTo(bx - 4, by); ctx.closePath();
      ctx.stroke();
    }
    ctx.textBaseline = "alphabetic";
  }

  function drawNode(n, t, L, dtv) {
    var fade = n.state === "live" ? 1 : clamp(1 - n.fade / field.P.fadeTime, 0, 1);
    var r = Math.max(1, n.r), sel = n === state.selNode;
    var ge = clamp(n.e / 1.4, 0, 1);

    // Eigen: how far from Van the node now sits
    var gg = ctx.createRadialGradient(n.x, n.y, r * 0.6, n.x, n.y, r * (1.6 + 1.8 * ge));
    gg.addColorStop(0, rgba(GOLD, (0.06 + 0.42 * ge) * fade));
    gg.addColorStop(1, rgba(GOLD, 0));
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.arc(n.x, n.y, r * (1.6 + 1.8 * ge), 0, 6.283); ctx.fill();

    // the Van Motor: a draw outward on every node, slower the stronger the Greep, never still
    if (n.state === "live") {
      n._vp = (n._vp || 0) + dtv * (0.2 + 2.4 * n.nu);
      var ph = n._vp % 1, vr = r + (n.R - r + L * 0.03) * ph;
      ctx.strokeStyle = rgba(WHITE, (0.06 + 0.32 * clamp(n.nu / field.P.nu0, 0, 1)) * (1 - ph));
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(n.x, n.y, vr, 0, 6.283); ctx.stroke();
    }

    // Rouw: every Echo of an ended Koppel, kept for good
    var shown = Math.min(n.rouw.length, Sim.ROUW_SHOWN);
    for (var k = n.rouw.length - shown; k < n.rouw.length; k++) {
      var ro = n.rouw[k], ix = k - (n.rouw.length - shown), ringIx = Math.floor(ix / 12);
      var orb = r + L * 0.012 + ringIx * L * 0.008;
      var ang = ro.ang + t * 0.05 * (ringIx % 2 ? -1 : 1);
      var loud = clamp(Math.abs(ro.h) / 1.2, 0, 1);
      ctx.strokeStyle = rgba(WHITE, (0.25 + 0.55 * loud) * fade);
      ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.arc(n.x + Math.cos(ang) * orb, n.y + Math.sin(ang) * orb, 1.7, 0, 6.283); ctx.stroke();
    }

    // body: filled toward Vol, hollow toward Leeg
    ctx.fillStyle = "#000";
    ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.283); ctx.fill();
    ctx.fillStyle = rgba(GOLD, (0.08 + 0.78 * n.vol) * fade);
    ctx.fill();
    ctx.strokeStyle = rgba(sel ? GOLDB : GOLD, (sel ? 1 : 0.85) * fade);
    ctx.lineWidth = sel ? 2 : 1.2;
    ctx.stroke();

    // the Zelf: the node's Echo of itself, off-centre by the self-gap
    var off = clamp((n.hs - n.e) * r * 20, -r * 0.45, r * 0.45);
    ctx.strokeStyle = rgba(n.vol > 0.55 ? "0,0,0" : WHITE, 0.65 * fade);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(n.x, n.y - off, r * 0.4, 0, 6.283); ctx.stroke();

    if (n.mask) {
      ctx.setLineDash([2, 3]);
      ctx.strokeStyle = rgba(WHITE, 0.8);
      ctx.beginPath(); ctx.arc(n.x, n.y, r + 3.5, 0, 6.283); ctx.stroke();
      ctx.setLineDash([]);
    }
    if (n.flash > 0) {
      ctx.strokeStyle = rgba(GOLDB, n.flash * 0.9);
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(n.x, n.y, r + 2 + (1 - n.flash) * 8, 0, 6.283); ctx.stroke();
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
    halo(ctx, n.name + (n.rouw.length > Sim.ROUW_SHOWN ? " · " + n.rouw.length : ""), n.x, ly);
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

  // Eigen and Echo on the spectrum: each member's true place, and where its partner hears it
  function drawSpectrum(b) {
    var m = miniCanvas("c-spectrum");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, padL = 22, padR = 10, X = function (v) { return padL + clamp(v / 2, -0.02, 1.02) * (w - padL - padR); };
    g.font = "11px " + SERIF;
    g.strokeStyle = rgba(WHITE, 0.25);
    g.lineWidth = 1;
    g.beginPath(); g.moveTo(padL, h - 16); g.lineTo(w - padR, h - 16); g.stroke();
    g.fillStyle = rgba(WHITE, 0.55);
    g.textAlign = "left"; g.fillText("Van <", padL - 2, h - 3);
    g.textAlign = "right"; g.fillText("> Naar", w - padR, h - 3);
    var rows = [[b.a, b.hB, 0], [b.b, b.hA, 1]];
    for (var i = 0; i < 2; i++) {
      var n = rows[i][0], heard = rows[i][1], y = 18 + i * (h - 48);
      g.textAlign = "left";
      g.fillStyle = rgba(WHITE, 0.8);
      g.fillText(n.name, 2, y + 4);
      var xe = X(n.e), xh = X(heard);
      g.strokeStyle = rgba(WHITE, 0.35);
      g.setLineDash([2, 3]);
      g.beginPath(); g.moveTo(xe, y); g.lineTo(xh, y); g.stroke();
      g.setLineDash([]);
      if (n.mask) {
        var xm = X(n.m);
        g.strokeStyle = rgba(WHITE, 0.85);
        g.beginPath(); g.moveTo(xm, y - 6); g.lineTo(xm + 6, y); g.lineTo(xm, y + 6); g.lineTo(xm - 6, y); g.closePath(); g.stroke();
      }
      g.fillStyle = rgba(GOLD, 1);
      g.beginPath(); g.arc(xe, y, 5, 0, 6.283); g.fill();
      g.strokeStyle = rgba(WHITE, 0.95);
      g.lineWidth = 1.4;
      g.beginPath(); g.arc(xh, y, 5, 0, 6.283); g.stroke();
      g.lineWidth = 1;
    }
  }

  // the pitchfork V(φ; B) = ¼φ⁴ − ½(B − θ)φ², with the pair's φ resting in it.
  // The frame follows the depth of the well, so its shape stays readable.
  var wellScale = { p: 1, lo: -0.1, hi: 0.4 };
  function drawWell(b) {
    var m = miniCanvas("c-well");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, P = field.P, d = b.B - P.theta;
    var V = function (p) { return 0.25 * p * p * p * p - 0.5 * d * p * p; };
    var dp = Math.max(d, 0), pT = Math.max(0.9, 1.6 * Math.sqrt(dp)), pTarget = Math.max(pT, Math.abs(b.phi) * 1.15);
    var loT = -0.25 * dp * dp * 1.3 - 0.02, hiT = Math.max(V(pTarget), 0.05);
    wellScale.p += (pTarget - wellScale.p) * 0.15;
    wellScale.lo += (loT - wellScale.lo) * 0.15;
    wellScale.hi += (hiT - wellScale.hi) * 0.15;
    var pmax = wellScale.p, vlo = wellScale.lo, vhi = wellScale.hi;
    var X = function (p) { return 8 + (p + pmax) / (2 * pmax) * (w - 16); };
    var Y = function (v) { return 10 + (vhi - clamp(v, vlo, vhi)) / (vhi - vlo) * (h - 28); };
    g.strokeStyle = rgba(WHITE, 0.15);
    g.beginPath(); g.moveTo(8, Y(0)); g.lineTo(w - 8, Y(0)); g.stroke();
    g.strokeStyle = rgba(b.mode === "naar" ? GOLD : WHITE, 0.9);
    g.lineWidth = 1.6;
    g.beginPath();
    for (var i = 0; i <= 120; i++) {
      var p = -pmax + i / 120 * 2 * pmax;
      if (i === 0) g.moveTo(X(p), Y(V(p))); else g.lineTo(X(p), Y(V(p)));
    }
    g.stroke();
    g.lineWidth = 1;
    var ph = clamp(b.phi, -pmax, pmax);
    g.fillStyle = rgba(GOLDB, 1);
    g.beginPath(); g.arc(X(ph), Y(V(ph)) - 5, 5, 0, 6.283); g.fill();
    g.font = "11px " + SERIF;
    g.textAlign = "center";
    g.fillStyle = rgba(WHITE, 0.55);
    if (d > 0) {
      var ps = Math.sqrt(d), yl = Math.min(h - 3, Y(-0.25 * d * d) + 16);
      g.fillText("Naar", X(-ps), yl);
      g.fillText("Naar", X(ps), yl);
    } else {
      g.fillText("Van", X(0), Math.min(h - 3, Y(0) + 16));
    }
  }

  // the binding against its Drempel, and the Echo asymmetry, over the last 30 seconds
  function drawTrace(b) {
    var m = miniCanvas("c-trace");
    if (!m) return;
    var g = m.ctx, w = m.w, h = m.h, P = field.P, N = b.Ahist.length, cnt = Math.min(b.hcount, N), i, v;
    var top = { y0: 16, y1: h / 2 - 4 }, bot = { y0: h / 2 + 16, y1: h - 4 };
    var bmin = P.theta - 0.9, bmax = P.theta + 0.9;   // values beyond are drawn at the edge
    var Yb = function (v) { return top.y1 - (clamp(v, bmin, bmax) - bmin) / (bmax - bmin) * (top.y1 - top.y0); };
    var Ya = function (v) { return (bot.y0 + bot.y1) / 2 - clamp(v, -0.5, 0.5) / 0.5 * (bot.y1 - bot.y0) / 2; };
    var X = function (k) { return w - 4 - (cnt - 1 - k) / (N - 1) * (w - 8); };
    var bandT = Yb(P.theta + P.eta), bandB = Yb(P.theta - P.eta);
    if (bandB - bandT < 5) { var mid0 = (bandT + bandB) / 2; bandT = mid0 - 2.5; bandB = mid0 + 2.5; }
    g.fillStyle = rgba(WHITE, 0.18);
    g.fillRect(4, bandT, w - 8, bandB - bandT);
    g.strokeStyle = rgba(WHITE, 0.3);
    g.beginPath(); g.moveTo(4, bandT); g.lineTo(w - 4, bandT); g.moveTo(4, bandB); g.lineTo(w - 4, bandB); g.stroke();
    g.setLineDash([3, 4]);
    g.beginPath(); g.moveTo(4, Yb(P.theta)); g.lineTo(w - 4, Yb(P.theta)); g.stroke();
    g.beginPath(); g.moveTo(4, Ya(0)); g.lineTo(w - 4, Ya(0)); g.stroke();
    g.setLineDash([]);
    function line(arr, Y, color) {
      g.strokeStyle = color;
      g.lineWidth = 1.4;
      g.beginPath();
      for (var k = 0; k < cnt; k++) {
        v = arr[(b.hix - cnt + k + N) % N];
        if (k === 0) g.moveTo(X(k), Y(v)); else g.lineTo(X(k), Y(v));
      }
      g.stroke();
      g.lineWidth = 1;
    }
    line(b.Bhist, Yb, rgba(GOLD, 1));
    line(b.Ahist, Ya, rgba(WHITE, 0.85));
    g.font = "11px " + SERIF;
    g.textAlign = "left";
    g.fillStyle = rgba(WHITE, 0.6);
    g.fillText("B against θ ± η", 6, 11);
    g.fillText("A = hᵢ − hⱼ against parity", 6, h / 2 + 11);
  }

  function row(k, v, cls) { return "<tr" + (cls ? ' class="' + cls + '"' : "") + "><th>" + k + "</th><td>" + v + "</td></tr>"; }

  var panelT = 0, cache = { nodeRs: null, nodeId: null };

  // keep one button per Koppel: add new ones, drop ended ones, update text in place
  function syncChips(box, items, empty) {
    var have = {}, i, el, keep = {};
    Array.prototype.forEach.call(box.querySelectorAll("[data-bond]"), function (b) { have[b.getAttribute("data-bond")] = b; });
    for (i = 0; i < items.length; i++) {
      var id = String(items[i].id);
      keep[id] = 1;
      el = have[id];
      if (!el) {
        el = document.createElement("button");
        el.className = "chip";
        el.setAttribute("data-bond", id);
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
    if (!force && now - panelT < 120) return;
    panelT = now;
    var P = field.P;
    // follow the field: when the watched Koppel is gone, pick a living one
    if (state.follow && (!state.sel || (state.sel.ended && field.t - state.endedAt > 5))) {
      var best = null, bs = -Infinity;
      for (var i = 0; i < field.bonds.length; i++) {
        var bb = field.bonds[i], sc = (bb.mode === "naar" ? 2 : 0) + bb.y - bb.age / 600;
        if (sc > bs) { bs = sc; best = bb; }
      }
      if (best) state.sel = best;
    }

    var n = state.selNode;
    if (n && n.state !== "live" && (n.fade >= P.fadeTime || field.nodes.indexOf(n) < 0)) state.selNode = n = null;
    $("node-card").hidden = !n;
    $("koppel-card").hidden = !!n;
    if (n) renderNode(n); else renderKoppel(state.sel);
    var ae = document.activeElement;
    if (ae && ae !== document.body && ae.closest && ae.closest("[hidden]")) $(n ? "n-title" : "k-title").focus();

    // the Telraam
    var Lg = field.ledger, held = field.held(), transit = field.inTransit(), cl = field.closure();
    var ok = Math.abs(cl) < 1e-10 * Math.max(1, Lg.winst);
    $("telraam").innerHTML =
      row("Winst (+)", "+" + Lg.winst.toFixed(4)) +
      row("Verlies (−)", "−" + Lg.verlies.toFixed(4)) +
      row("Held in Koppels and Solos", (held - transit).toFixed(4)) +
      row("Overflow, unheld", transit.toFixed(4)) +
      row("Overflow spread, unheld", Lg.dissipated.toFixed(4)) +
      row("Account", ok ? "closes" : "off by " + cl.toExponential(2), ok ? "ok" : "bad");

    // the field
    var live = 0, rouw = 0, naar = 0, counts = {};
    for (i = 0; i < field.nodes.length; i++) if (field.nodes[i].state === "live") { live++; rouw += field.nodes[i].rouw.length; }
    for (i = 0; i < field.bonds.length; i++) if (field.bonds[i].mode === "naar") naar++;
    var gs = field.groups();
    for (i = 0; i < gs.length; i++) if (gs[i].irreducible) {
      var s = gs[i].members.length, key = PRIME_NAMES[s] || ("group of " + s);
      counts[key] = (counts[key] || 0) + 1;
    }
    var gtxt = Object.keys(counts).map(function (k) { return k + (counts[k] > 1 ? " ×" + counts[k] : ""); }).join(", ") || "none yet";
    $("fieldstats").innerHTML =
      row("Solos", live + " of " + P.nMax) +
      row("Relaties", field.bonds.length + " (" + naar + " in Naar)") +
      row("Bound groups", gtxt) +
      row("Rouw carried", rouw);
    // a keyboard path to every Koppel; rebuilt only when the set changes, so focus holds
    syncChips($("field-koppels"), field.bonds.map(function (b) {
      return { id: b.id, text: b.a.name + "–" + b.b.name + " · " + (b.mode === "naar" ? "Naar" : "Van") };
    }), "none yet");
    renderLog();
  }

  function renderKoppel(b) {
    var card = $("koppel-card");
    if (!b) {
      $("k-title").innerHTML = "No Koppel yet";
      $("k-state").textContent = "Solos are building Trek. Watch for a dotted Zin.";
      card.classList.add("empty");
      return;
    }
    card.classList.remove("empty");
    var P = field.P, d = b.B - P.theta, ended = !!b.ended;
    $("k-title").innerHTML = "Koppel " + nm(b.a) + " ↔ " + nm(b.b);
    var mode = ended ? (b.ended === "dissolved" ? "Ended: dissolved. Both Echoes are Rouw now." : "Ended: a member reached Perfectus. The survivor's Echo is Rouw now.")
      : (b.balans ? "Balans: B sits in the Marge, both futures open" : (b.mode === "naar" ? "Naar mode" : "Van mode")) +
        " · " + TRAJ_NAMES[b.traj] + " (" + b.traj + ")";
    $("k-state").textContent = mode;
    drawSpectrum(b);
    drawWell(b);
    drawTrace(b);
    var Bline = "B = " + fmt(b.B) + ",  θ = " + fmt(P.theta) + ",  B − θ = " + signed(d);
    if (b.Bhat !== null) Bline += "<br>read through the Masker, B looks like " + fmt(b.Bhat) + (b.Bhat > P.theta && b.B < P.theta ? " (looks bound, is not)" : "");
    $("k-binding").innerHTML = Bline;
    $("k-numbers").innerHTML =
      row("Trouw y (shared)", fmt(b.y)) +
      row("Gewenning Z", fmt(b.Z)) +
      row("Stored ¼(B − θ)²", (d > 0 ? (0.25 * d * d).toFixed(4) : "0") + (d > 0 && 0.25 * d * d > b.Q ? " (Inhoud full)" : "")) +
      row("Held, of Inhoud Q", b.S.toFixed(4) + " / " + b.Q.toFixed(2)) +
      row("Overflow toward Creatie", b.X.toFixed(4) + " / " + P.thetaNew.toFixed(3)) +
      row("Vertraging Δ · Ontspanning τ", b.delta.toFixed(2) + " · " + b.tau.toFixed(2));
    var mem = [b.a, b.b], echo = [b.hA, b.hB];
    var h = "<tr><th></th><th>" + esc(b.a.name) + "</th><th>" + esc(b.b.name) + "</th></tr>";
    var rowsDef = [
      ["Vol/Leeg", function (n) { return fmt(n.vol); }],
      ["Eigen x", function (n) { return fmt(n.e); }],
      ["Echo of the other", function (n, i) { return fmt(echo[i]); }],
      ["Diepte z", function (n) { return fmt(n.z); }],
      ["Greep J", function (n) { return fmt(n.J); }],
      ["Van Motor L", function (n) { return n.nu.toFixed(3); }],
      ["Rouw", function (n) { return n.rouw.length; }]
    ];
    rowsDef.forEach(function (rd) {
      h += "<tr><th>" + rd[0] + "</th><td>" + rd[1](mem[0], 0) + "</td><td>" + rd[1](mem[1], 1) + "</td></tr>";
    });
    $("k-members").innerHTML = h;
    var live = !ended && b.a.state === "live" && b.b.state === "live";
    setBtn("k-schrift-a", live, "Schrift on " + b.a.name);
    setBtn("k-schrift-b", live, "Schrift on " + b.b.name);
    setBtn("k-mask-a", live, (b.a.mask ? "Set down " : "Masker on ") + b.a.name);
    setBtn("k-mask-b", live, (b.b.mask ? "Set down " : "Masker on ") + b.b.name);
    setBtn("k-read-a", b.a.state === "live", "Read " + b.a.name);
    setBtn("k-read-b", b.b.state === "live", "Read " + b.b.name);
    $("k-follow").hidden = state.follow;
  }

  function setBtn(id, enabled, text) {
    var el = $(id);
    el.disabled = !enabled;
    if (el.textContent !== text) el.textContent = text;
  }

  function renderNode(n) {
    var live = n.state === "live";
    $("n-title").innerHTML = nm(n) + (live ? "" : " · Perfectus");
    var held = n.bonds.length ? "Zin, held in " + n.bonds.length + (n.bonds.length > 1 ? " Koppels" : " Koppel") : "";
    var aim = !live ? "none: returned to Bron" : n.zin ? "Zin, aimed at " + nm(n.zin.target) : (n.bonds.length < n.cap ? (held ? held + "; Trek, unaimed" : "Trek, unaimed") : held);
    $("n-numbers").innerHTML =
      row("Vol/Leeg", fmt(n.vol) + (n.vol > 0.6 ? " (toward Vol)" : n.vol < 0.4 ? " (toward Leeg)" : "")) +
      row("Eigen x", fmt(n.e)) +
      row("Self-gap (Zelf)", fmt(Math.abs(n.e - n.hs), 3)) +
      row("Diepte z", fmt(n.z)) +
      row("Greep J", fmt(n.J)) +
      row("Van Motor L = L₀·exp(−J)", n.nu.toFixed(3)) +
      row("Pull", aim) +
      (n.mask || n.pijn > 0 ? row("Pijn of the Masker", n.pijn.toFixed(2) + " / " + field.P.pijnMax) : "");
    if (cache.nodeId !== n.id) { cache.nodeId = n.id; cache.nodeRs = null; $("n-koppels").textContent = ""; }
    syncChips($("n-koppels"), n.bonds.map(function (b) {
      var o = b.a === n ? b.b : b.a;
      return { id: b.id, text: o.name + " · " + (b.mode === "naar" ? "Naar" : "Van") + " · " + TRAJ_NAMES[b.traj] + " (" + b.traj + ")" };
    }), "none");
    var rs = n.rouw.slice(-10).reverse().map(function (r) {
      return esc(r.name) + ' <span class="muted">(' + (r.cause === "departed" ? "Perfectus" : "dissolved") + ")</span>";
    });
    if (n.rouw.length > 10) rs.push('<span class="muted">and ' + (n.rouw.length - 10) + " more</span>");
    var rj = rs.join(", ");
    if (rj !== cache.nodeRs) { cache.nodeRs = rj; $("n-rouw").innerHTML = rj || '<span class="muted">none yet</span>'; }
    setBtn("n-schrift", live, "Schrift on " + n.name);
    setBtn("n-mask", live, (n.mask ? "Set the Masker down" : "Put on a Masker"));
  }

  /* ---------------------------- interaction --------------------------- */
  function selectBond(b, pin) {
    state.sel = b;
    state.selNode = null;
    if (pin) state.follow = false;
    updatePanel(true);
  }

  function pointer(ev) {
    var r = canvas.getBoundingClientRect(), x = ev.clientX - r.left - canvas.clientLeft, y = ev.clientY - r.top - canvas.clientTop;
    var n = field.nodeAt(x, y);
    if (n) { state.selNode = n; updatePanel(true); return; }
    var b = field.bondAt(x, y);
    if (b) { selectBond(b, true); return; }
    state.selNode = null;
    updatePanel(true);
  }
  canvas.addEventListener("click", pointer);
  canvas.addEventListener("mousemove", function (ev) {
    var r = canvas.getBoundingClientRect(), x = ev.clientX - r.left - canvas.clientLeft, y = ev.clientY - r.top - canvas.clientTop;
    canvas.style.cursor = field && (field.nodeAt(x, y) || field.bondAt(x, y)) ? "pointer" : "default";
  });

  // a pointer click leaves no focus behind, so Space keeps meaning pause
  function on(id, fn) {
    var el = $(id);
    if (el) el.addEventListener("click", function (ev) { fn(ev); if (ev.detail) el.blur(); });
  }
  on("k-schrift-a", function () { if (state.sel) field.schrift(state.sel.a); });
  on("k-schrift-b", function () { if (state.sel) field.schrift(state.sel.b); });
  on("k-mask-a", function () { if (state.sel) field.setMask(state.sel.a, !state.sel.a.mask); });
  on("k-mask-b", function () { if (state.sel) field.setMask(state.sel.b, !state.sel.b.mask); });
  on("k-follow", function () { state.follow = true; state.sel = null; updatePanel(true); });
  on("n-schrift", function () { if (state.selNode) field.schrift(state.selNode); });
  on("n-mask", function () { if (state.selNode) field.setMask(state.selNode, !state.selNode.mask); });
  on("n-back", function () { state.selNode = null; updatePanel(true); });
  on("k-read-a", function () { if (state.sel) { state.selNode = state.sel.a; updatePanel(true); } });
  on("k-read-b", function () { if (state.sel) { state.selNode = state.sel.b; updatePanel(true); } });
  function chipClick(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-bond]") : null;
    if (!el) return;
    var id = el.getAttribute("data-bond");
    for (var i = 0; i < field.bonds.length; i++) if (String(field.bonds[i].id) === id) selectBond(field.bonds[i], true);
  }
  $("n-koppels").addEventListener("click", chipClick);
  $("field-koppels").addEventListener("click", chipClick);
  on("bron", function () { if (!field.fromBron()) addLog("The field is full: " + field.P.nMax + " Solos."); });

  function setRunning(r) {
    state.running = r;
    var b = $("play");
    b.textContent = r ? "Pause" : "Play";
    if (r) $("reduced").hidden = true;
  }
  on("play", function () { setRunning(!state.running); });
  on("replay", function () {
    newField(true);
    addLog(field.P.upsilon > 0 ? "The same field again, with new distortions in its Echoes."
      : "The same field again. With Vervorming at 0 its Echoes are faithful, and it runs the same way.");
  });
  on("newfield", function () { newField(false); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-speed]"), function (btn) {
    btn.addEventListener("click", function (ev) {
      if (ev.detail) btn.blur();
      state.speed = +btn.getAttribute("data-speed");
      Array.prototype.forEach.call(document.querySelectorAll("[data-speed]"), function (o) { o.setAttribute("aria-pressed", o === btn ? "true" : "false"); });
    });
  });
  function bindSlider(id, key, digits) {
    var el = $(id), out = $(id + "-v");
    function upd() {
      out.textContent = (+el.value).toFixed(digits);
      if (field) field.P[key] = +el.value;
    }
    el.addEventListener("input", upd);
    upd();
  }
  bindSlider("s-upsilon", "upsilon", 3);
  bindSlider("s-nu0", "nu0", 2);
  bindSlider("s-theta", "theta", 2);

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
  var last = performance.now(), acc = 0;
  function frame(now) {
    var dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
    last = now;
    var simDt = 0;
    if (state.running) {
      acc += dt * state.speed;
      var steps = 0;
      while (acc >= H && steps < 60) { field.step(); acc -= H; steps++; }
      if (steps === 60) acc = 0;
      simDt = steps * H;
    }
    consume();
    for (var k = 0; k < field.bonds.length; k++) drainSparks(field.bonds[k], false);
    stepEffects(simDt);
    draw(simDt);
    updatePanel(false);
    if (state.selNode === null && state.sel) {
      drawSpectrum(state.sel); drawWell(state.sel); drawTrace(state.sel);
    }
    requestAnimationFrame(frame);
  }

  setRunning(state.running);
  if (reduce) $("reduced").hidden = false;
  newField(false);
  updatePanel(true);
  requestAnimationFrame(frame);
})();
