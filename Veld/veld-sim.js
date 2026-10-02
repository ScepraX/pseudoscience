/* =====================================================================
   The Veld in Motion: simulation core.

   One Instantie of the PseudoScience Speelgoed (§VIII). The shapes come
   from the Speelgoed: the Echo filter, the Naar pull and the Van Motor
   (§VIII.1), the binding measure (§VIII.2), the pitchfork Drempel and its
   Vonk (§VIII.3), the Echo asymmetry (§VIII.4), Creatie (§VIII.5), Rouw
   and Masker (§VIII.6). Every number in P is this Instantie's choice
   (§VIII.7), and so are the events it writes: a steady traffic of
   exchanges inside living Relaties, a Schrift when the viewer asks for
   one, and a new Solo from Bron when the field runs thin.

   Space is drawing only. Where a node sits on screen is never one of its
   spectra (§VIII.2); the one thing distance decides is whom an unaimed
   Trek finds first.

   Randomness has two seeded sources. The field's own draws set up the
   Instantie: the starting Solos, and each new Koppel's Vertraging,
   Ontspanning and ageing pace.
   The noise draws are the Vervorming (υ) of Echo transport, the only
   variation the rules themselves meet (§VII). With υ = 0 the same field
   runs the same way every time.
   ===================================================================== */
(function (root) {
  "use strict";

  var H = 1 / 120;             // fixed step, in seconds of the simulation
  var A_SAMPLES = 300;         // Echo asymmetry history kept per Koppel (30 s)
  var A_EVERY = 0.1;

  var DEFAULTS = {
    // Drempel and Vonk (§VIII.3)
    theta: 1.0,                // θ on the binding B
    eta: 0.08,                 // Marge η: the named crossings happen at θ ± η
    tauPhi: 0.25,              // τ_φ
    kappa: 0.05,               // tilt of the pitchfork by the Echo asymmetry A
    // Van Motor (§III, §VIII.1)
    nu0: 0.5,                  // ν₀; ν = ν₀·exp(−J), never zero
    kJ: 0.8,                   // scale of Greep inside the exponent
    // Binding measure (§VIII.2)
    c: 1.0,                    // Echo-gap penalty; s(…) taken as root-sum-square
    // Echo transport (§VIII.1, §VII)
    tauMin: 0.35, tauMax: 1.1, // Ontspanning τ, drawn per Koppel
    dMin: 0.15, dMax: 0.55,    // Vertraging Δ, drawn per Koppel
    upsilon: 0.05,             // Vervorming amplitude
    noiseTau: 0.7,             // correlation time of the distortion
    tOld: 50,                  // Gericht: older Koppels carry noisier Echoes
    // Trouw and Gewenning (§VIII.1)
    rho: 0.35,                 // Leersnelheid ρ
    kZ: 0.25,                  // Gewenning integrates the recent history of Echo closure
    alignW: 0.2,               // Echo-gap width counted as "aligned"
    eRef: 0.5,                 // Eigen level counted as fully engaged
    y0: 0.35, yMin: 0, yMax: 1, // Trouw: start, floor, ceiling
    // Diepte (§VIII.1)
    gIn: 0.25, gSpend: 0.3, gDecay: 0.3, gRouw: 0.04, zCeil: 3, z0: 0.1,
    // Zelf and Rouw (§IV, §VIII.6)
    tauSelf: 0.3, selfNoise: 0.12,
    tauRouw: 1.5, rouwNoise: 0.5,
    // the Instantie's events: exchanges inside living Relaties
    exRate: 0.28, exMod: 0.15, eMax: 1.6, schrift: 0.35,
    // Energie (§III, §VIII.3, §VIII.5)
    quantum: 0.0015,           // smallest Vonk this Instantie books, but for the last of a store emptied at θ
    Q0: 0.04,                  // Inhoud Q of a Koppel
    thetaNew: 0.035,           // Drempel the overflow must clear to become a Solo
    tauX: 3,                   // unheld overflow dissipates on its own (§II)
    tauPeak: 30,
    zinE: 0.004,               // the Vonk of aiming Trek as Zin, and of losing the aim
    // population
    nInit: 10, nMin: 8, nMax: 13,
    // meeting (§IV, Conventus)
    capScale: 1.6, trekBuild: 3, aimPatience: 5, answerDelay: 0.6, cooldown: 14,
    // endings
    eSettle: 0.12,             // Perfectus: Eigen drifted this close to Van, no Koppel in Naar,
    settleWindow: 4,           //   for this long (Υ Expansio, Ω Perfectus)
    yEnd: 0.3,                 // a Relatie in Van whose Trouw stays below this has lost its pull,
    dissolveWindow: 3,         //   and dissolves after this long
    bronDelay: 2.5,
    fadeTime: 2.5,
    // Masker (§VII, §VIII.6)
    maskLead: 0.35, pijnRate: 1, pijnMax: 6,
    // reading the trajectory from A (§VI, §VIII.4)
    etaA: 0.13, signHold: 4, roleHold: 15, etaDood: 0.05, settleBand: 0.06, levenHold: 8
  };

  var ROUW_SHOWN = 36;         // Rouw drawn per node; every entry is still simulated

  var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  /* ------------------------------------------------------------------ */
  function Field(opts) {
    opts = opts || {};
    this.P = {};
    var k;
    for (k in DEFAULTS) this.P[k] = DEFAULTS[k];
    if (opts.params) for (k in opts.params) this.P[k] = opts.params[k];
    this.W = opts.width || 900;
    this.H = opts.height || 600;
    this.L = Math.min(this.W, this.H);
    this.reset(opts.seed || 1, opts.noiseSeed || 7);
  }

  Field.H = H;
  Field.DEFAULTS = DEFAULTS;

  Field.prototype.reset = function (seed, noiseSeed) {
    this.seed = seed >>> 0;
    this.noiseSeed = noiseSeed >>> 0;
    this.rand = rng(this.seed);          // the Instantie's own set-up draws
    this.noise = rng(this.noiseSeed);    // Vervorming, and nothing else
    this.spare = null;
    this.t = 0;
    this.nextId = 1;
    this.nameIx = 0;
    this.births = 0;
    this.spawnIx = 0;
    this.nextBron = 0;
    this.nodes = [];
    this.bonds = [];
    this.ledger = { winst: 0, verlies: 0, dissipated: 0 };
    this.acc = { winst: { s: 0, c: 0 }, verlies: { s: 0, c: 0 }, dissipated: { s: 0, c: 0 } };
    this.events = [];
    this.stats = { realisaties: 0, schokken: 0, creaties: 0, perfectus: 0, dissolved: 0, relaties: 0, leven: 0 };
    var pts = this.scatter(this.P.nInit);
    for (var i = 0; i < pts.length; i++) {
      var n = this.makeNode(pts[i][0], pts[i][1], 0.12 + 0.76 * this.rand());
      n.born = -1.2;                         // the first Solos are there from the start
      this.nodes.push(n);
    }
    this.sizeNodes();
  };

  // best-candidate scattering: every node starts with room around it
  Field.prototype.scatter = function (n) {
    var pts = [], m = this.L * 0.1;
    for (var i = 0; i < n; i++) {
      var best = null, bestD = -1;
      for (var c = 0; c < 30; c++) {
        var x = m + this.rand() * (this.W - 2 * m), y = m + this.rand() * (this.H - 2 * m), d = Infinity;
        for (var j = 0; j < pts.length; j++) {
          var dx = pts[j][0] - x, dy = pts[j][1] - y;
          d = Math.min(d, dx * dx + dy * dy);
        }
        if (d > bestD) { bestD = d; best = [x, y]; }
      }
      pts.push(best);
    }
    return pts;
  };

  Field.prototype.newName = function () {
    var i = this.nameIx++, r = Math.floor(i / 26);
    return LETTERS.charAt(i % 26) + (r ? String(r + 1) : "");
  };

  Field.prototype.makeNode = function (x, y, vol) {
    var p = this.P, R = this.rand;
    return {
      id: this.nextId++, name: this.newName(), x: x, y: y, vx: 0, vy: 0, fx: 0, fy: 0,
      vol: vol,                                  // Vol/Leeg lean: 1 Vol, 0 Leeg; nobody at a pole
      D: 0.6 + 0.8 * (1 - vol),                  // Trek: further toward Leeg runs a higher pull
      cap: 1 + Math.round(p.capScale * (1 - vol)), // how many Koppels the Trek reaches for
      e: 0, de: 0, m: 0,                         // Eigen, its rate, what is broadcast
      hs: 0, ns: 0,                              // the Zelf's Echo of its own Eigen, its distortion
      z: p.z0, J: 0, nu: p.nu0,                  // Diepte, Greep, Van Motor coefficient
      held: 0, zinHeld: 0,                       // Energie held by the node itself
      zin: null, cooldown: {}, trekT: p.trekBuild * (0.4 + 0.6 * R()),
      rouw: [], bonds: [],
      everRel: false, everNaar: false, settleT: 0,
      born: this.t, exW: 0.15 + 0.2 * R(), exP: 6.283 * R(),
      mask: false, pijn: 0,
      state: "live", fade: 0, r: 0, R: 0, flash: 0,
      w1: 0.13 + 0.12 * R(), w2: 0.11 + 0.12 * R(), p1: 6.283 * R(), p2: 6.283 * R(), spin: 6.283 * R()
    };
  };

  Field.prototype.setSize = function (W, Hh) {
    if (W <= 0 || Hh <= 0) return;
    var sx = W / this.W, sy = Hh / this.H;
    for (var i = 0; i < this.nodes.length; i++) { this.nodes[i].x *= sx; this.nodes[i].y *= sy; }
    this.W = W; this.H = Hh; this.L = Math.min(W, Hh);
    this.sizeNodes();
    this.separate();
  };

  /* ---------------------------- noise ------------------------------- */
  Field.prototype.gauss = function () {
    if (this.spare !== null) { var s = this.spare; this.spare = null; return s; }
    var u, v, q;
    do { u = 2 * this.noise() - 1; v = 2 * this.noise() - 1; q = u * u + v * v; } while (q >= 1 || q === 0);
    var m = Math.sqrt(-2 * Math.log(q) / q);
    this.spare = v * m;
    return u * m;
  };

  // Ornstein-Uhlenbeck distortion with standard deviation sigma
  Field.prototype.ou = function (x, sigma) {
    var tau = this.P.noiseTau;
    x -= x * H / tau;
    if (sigma > 0) x += sigma * Math.sqrt(2 * H / tau) * this.gauss();
    return x;
  };

  /* --------------------------- the ledger ---------------------------- */
  // Energie changes only here, and only as a Vonk (or, for overflow nothing
  // can hold, as dissipation). The Telraam closes by construction.
  // Neumaier summation keeps the account exact over hours of running
  Field.prototype.book = function (key, x) {
    var acc = this.acc[key], t = acc.s + x;
    acc.c += Math.abs(acc.s) >= Math.abs(x) ? (acc.s - t) + x : (x - t) + acc.s;
    acc.s = t;
    this.ledger[key] = acc.s + acc.c;
  };
  Field.prototype.winst = function (amount, b) {
    this.book("winst", amount);
    if (b) b.sparkW += amount;
  };
  Field.prototype.verlies = function (amount, b) {
    this.book("verlies", amount);
    if (b) b.sparkV += amount;
  };
  Field.prototype.dissipate = function (amount) { this.book("dissipated", amount); };

  Field.prototype.held = function () {
    var s = 0, i, b, n;
    for (i = 0; i < this.bonds.length; i++) { b = this.bonds[i]; s += b.S + b.X + b.zinA + b.zinB + b.levenE; }
    for (i = 0; i < this.nodes.length; i++) { n = this.nodes[i]; s += n.held + n.zinHeld; }
    return s;
  };

  Field.prototype.inTransit = function () {
    var s = 0;
    for (var i = 0; i < this.bonds.length; i++) s += this.bonds[i].X;
    return s;
  };

  Field.prototype.closure = function () {
    var L = this.ledger;
    return L.winst - L.verlies - L.dissipated - this.held();
  };

  Field.prototype.emit = function (kind, data) {
    data.kind = kind;
    data.t = this.t;
    this.events.push(data);
    if (this.events.length > 400) this.events.shift();
  };

  /* --------------------------- Koppels -------------------------------- */
  Field.prototype.partnered = function (n, m) {
    for (var i = 0; i < n.bonds.length; i++) {
      var b = n.bonds[i];
      if (b.a === m || b.b === m) return b;
    }
    return null;
  };

  Field.prototype.makeBond = function (a, c) {
    var p = this.P, cap = Math.ceil(p.dMax / H) + 4;
    var b = {
      id: this.nextId++, a: a, b: c,
      y: p.y0, Z: p.y0,                      // Trouw, and the first Gewenning (Β Nexus)
      hA: 0, hB: 0, nA: 0, nB: 0,            // a's Echo of b, b's Echo of a, their distortions
      tau: p.tauMin + (p.tauMax - p.tauMin) * this.rand(),
      delta: p.dMin + (p.dMax - p.dMin) * this.rand(), len: 0,
      buf: new Float64Array(2 * cap), cap: cap, head: 0,
      B: 0, Bhat: null, phi: 0, mode: "van", balans: false,
      S: 0, X: 0, pendX: 0, peak: 0, Q: p.Q0, zinA: 0, zinB: 0, levenE: 0,
      old: p.tOld * (0.5 + this.rand()),     // how fast this Koppel's Echoes age
      A: 0, As: 0, sgn: 0, sgnAt: 0, sgnCand: 0, sgnT: 0, traj: "'", trajT: 0,
      Ahist: new Float64Array(A_SAMPLES), Bhist: new Float64Array(A_SAMPLES), hix: 0, hcount: 0, htimer: 0,
      age: 0, lowT: 0, everNaar: false, born: this.t,
      sparkW: 0, sparkV: 0
    };
    for (var i = 0; i < cap; i++) { b.buf[2 * i] = a.m; b.buf[2 * i + 1] = c.m; }
    return b;
  };

  // what member `who` (0 = a, 1 = b) broadcast `delay` seconds ago
  Field.prototype.heard = function (b, who, delay) {
    var k = delay / H, i0 = Math.floor(k), fr = k - i0;
    if (i0 > b.cap - 2) { i0 = b.cap - 2; fr = 1; }
    var j0 = (b.head - i0 + b.cap) % b.cap, j1 = (j0 - 1 + b.cap) % b.cap;
    return b.buf[2 * j0 + who] * (1 - fr) + b.buf[2 * j1 + who] * fr;
  };

  Field.prototype.wants = function (n) {
    return n.state === "live" && n.bonds.length < n.cap;
  };

  Field.prototype.aim = function (n, target) {
    n.zin = { target: target, t0: this.t };
    n.zinHeld += this.P.zinE;
    this.winst(this.P.zinE, null);           // Trek aimed is a step toward the committed pole
    this.emit("zin", { from: n, to: target });
  };

  Field.prototype.revertZin = function (n) {
    if (!n.zin) return;
    n.zinHeld -= this.P.zinE;
    this.verlies(this.P.zinE, null);         // losing a target is never free (§IV)
    this.emit("trek", { node: n, from: n.zin.target });
    n.zin = null;
  };

  Field.prototype.formRelatie = function (n, m, birth) {
    if (this.partnered(n, m)) return null;
    var p = this.P, b = this.makeBond(n, m);
    if (birth) {
      // a new Solo and its originators aim at each other at once (§VIII.5)
      this.winst(2 * p.zinE, null);
      b.zinA = p.zinE; b.zinB = p.zinE;
    } else {
      // both Zins answered: they now live inside the Relatie
      n.zinHeld -= p.zinE; m.zinHeld -= p.zinE;
      b.zinA = p.zinE; b.zinB = p.zinE;
      n.zin = null; m.zin = null;
    }
    n.bonds.push(b); m.bonds.push(b);
    n.everRel = m.everRel = true;
    this.bonds.push(b);
    this.stats.relaties++;
    this.emit("relatie", { bond: b, birth: !!birth });
    return b;
  };

  Field.prototype.endKoppel = function (b, cause, departed) {
    var i = this.bonds.indexOf(b);
    if (i < 0) return;
    // what the Koppel still held leaves as its final Verlies
    if (b.S > 0) { this.verlies(b.S, b); b.S = 0; }
    if (b.X > 0) { this.dissipate(b.X); b.X = 0; }
    if (b.levenE > 0) { this.verlies(b.levenE, b); b.levenE = 0; }
    // each Zin reverts to Trek, which costs its Vonk (§IV)
    this.verlies(b.zinA + b.zinB, b);
    b.zinA = b.zinB = 0;
    // each survivor's Echo freezes at the last signal it received and becomes Rouw (§VI, §VIII.6)
    var members = [[b.a, b.b, b.hA, 1], [b.b, b.a, b.hB, 0]];
    for (var k = 0; k < 2; k++) {
      var m = members[k][0], partner = members[k][1];
      if (m === departed || m.state !== "live") continue;
      m.rouw.push({
        name: partner.name, last: this.heard(b, members[k][3], b.delta), h: members[k][2], n: 0, Z: b.Z,
        cause: cause, ang: m.spin + m.rouw.length * 2.399963, t: this.t
      });
    }
    this.bonds.splice(i, 1);
    b.a.bonds.splice(b.a.bonds.indexOf(b), 1);
    b.b.bonds.splice(b.b.bonds.indexOf(b), 1);
    b.ended = cause;
    if (cause === "dissolved") this.stats.dissolved++;
    this.emit("end", { bond: b, cause: cause, departed: departed || null });
  };

  /* ---------------------------- events -------------------------------- */
  Field.prototype.liveCount = function () {
    var c = 0;
    for (var i = 0; i < this.nodes.length; i++) if (this.nodes[i].state === "live") c++;
    return c;
  };

  Field.prototype.creatie = function (b) {
    var p = this.P, a = b.a, c = b.b, L = this.L;
    this.births++;
    var mx = (a.x + c.x) / 2, my = (a.y + c.y) / 2;
    var dx = c.x - a.x, dy = c.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var side = this.births % 2 ? 1 : -1;
    var frac = (this.births * 0.6180339887) % 1;
    var child = this.makeNode(mx - side * dy / d * L * 0.05, my + side * dx / d * L * 0.05,
      clamp((a.vol + c.vol) / 2 + (frac - 0.5) * 0.5, 0.12, 0.88));
    child.held = b.X;                         // the overflow is the new Solo
    b.X = 0;
    this.nodes.push(child);
    this.formRelatie(child, a, true);
    this.formRelatie(child, c, true);
    this.stats.creaties++;
    this.emit("creatie", { bond: b, node: child });
  };

  Field.prototype.perfectus = function (n) {
    var bs = n.bonds.slice();
    for (var i = 0; i < bs.length; i++) this.endKoppel(bs[i], "departed", n);
    if (n.zin) this.revertZin(n);
    // the node's remaining reservoir is drawn as a final Verlies (Ω)
    var rest = n.held + n.zinHeld;
    if (rest > 0) this.verlies(rest, null);
    n.held = 0; n.zinHeld = 0;
    n.state = "departing";
    n.fade = 0;
    this.stats.perfectus++;
    this.emit("perfectus", { node: n });
  };

  Field.prototype.fromBron = function (x, y) {
    if (this.liveCount() >= this.P.nMax) return null;
    var p = this.P, L = this.L;
    if (x === undefined) {
      // enter where the field is emptiest along its rim
      var best = null, bestD = -1;
      for (var c = 0; c < 24; c++) {
        var ang = (this.spawnIx * 0.6180339887 + c / 24) * 6.283185;
        var cx = this.W / 2 + Math.cos(ang) * (this.W / 2 - L * 0.08);
        var cy = this.H / 2 + Math.sin(ang) * (this.H / 2 - L * 0.08);
        var d = Infinity;
        for (var j = 0; j < this.nodes.length; j++) {
          var dx = this.nodes[j].x - cx, dy = this.nodes[j].y - cy;
          d = Math.min(d, dx * dx + dy * dy);
        }
        if (d > bestD) { bestD = d; best = [cx, cy]; }
      }
      this.spawnIx++;
      x = best[0]; y = best[1];
    }
    var frac = (this.spawnIx * 0.7548776662) % 1;
    var n = this.makeNode(x, y, 0.12 + 0.76 * frac);
    this.nodes.push(n);
    this.emit("bron", { node: n });
    return n;
  };

  // the viewer writes an event into the field: a Schrift (#), a state update
  Field.prototype.schrift = function (n) {
    if (!n || n.state !== "live") return;
    n.e += this.P.schrift * Math.max(0, 1 - n.e / this.P.eMax);
    n.flash = 1;
    this.emit("schrift", { node: n });
  };

  Field.prototype.setMask = function (n, on) {
    if (!n || n.state !== "live") return;
    if (on && !n.mask) { n.mask = true; n.pijn = 0; this.forgetRoles(n); this.emit("masker", { node: n, on: true }); }
    else if (!on && n.mask) { n.mask = false; this.forgetRoles(n); this.emit("masker", { node: n, on: false, pijn: n.pijn }); }
  };

  // a swing of the Echo asymmetry made by a Masker is no reversal of roles
  Field.prototype.forgetRoles = function (n) {
    for (var k = 0; k < n.bonds.length; k++) {
      var b = n.bonds[k];
      b.sgn = 0; b.sgnCand = 0; b.sgnT = 0;
    }
  };

  /* ----------------------------- step --------------------------------- */
  Field.prototype.step = function () {
    var p = this.P, t = (this.t += H), nodes = this.nodes, bonds = this.bonds;
    var i, k, n, b, q;

    // 1. the Instantie's events: a steady traffic of exchanges inside living Relaties
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      if (n.state !== "live") continue;
      n.u = n.bonds.length ? p.exRate * n.D * Math.max(0, 1 - n.e / p.eMax) * (1 + p.exMod * Math.sin(t * n.exW + n.exP)) : 0;
      n.e += n.u * H;
      if (n.flash > 0) n.flash = Math.max(0, n.flash - H * 2.5);
    }

    // 2. what each node broadcasts: its Eigen, or the Masker it wears
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      if (n.mask) {
        var want = n.e, cnt = 0, sum = 0;
        for (k = 0; k < n.bonds.length; k++) {
          b = n.bonds[k];
          sum += b.a === n ? b.hA : b.hB; cnt++;
        }
        if (cnt) want = Math.max(n.e, sum / cnt) + p.maskLead;
        n.m += H / 0.8 * (want - n.m);
        n.pijn += H * p.pijnRate * Math.abs(n.m - n.e);
        if (n.pijn > p.pijnMax) {
          n.mask = false;
          this.forgetRoles(n);
          this.emit("masker-falls", { node: n, pijn: n.pijn });
        }
      } else {
        n.m = n.e;
      }
    }
    for (k = 0; k < bonds.length; k++) {
      b = bonds[k];
      b.head = (b.head + 1) % b.cap;
      b.buf[2 * b.head] = b.a.m;
      b.buf[2 * b.head + 1] = b.b.m;
    }

    // 3. Echo transport: τ·ḣ = (signal from t − Δ) − h + υ   (§VIII.1)
    for (k = 0; k < bonds.length; k++) {
      b = bonds[k];
      var inA = this.heard(b, 1, b.delta), inB = this.heard(b, 0, b.delta);
      // Gericht: the weaker or older the Koppel, the noisier its Echoes (§VII)
      var sig = p.upsilon * (0.5 + (1 - b.y)) * (1 + b.age / b.old);
      b.nA = this.ou(b.nA, sig);
      b.nB = this.ou(b.nB, sig);
      b.hA += H / b.tau * (inA - b.hA + b.nA);
      b.hB += H / b.tau * (inB - b.hB + b.nB);
    }

    // 4. Eigen: the Naar pulls of every Koppel, against the Van Motor (§VIII.1)
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      if (n.state !== "live") continue;
      var pull = 0;
      for (k = 0; k < n.bonds.length; k++) {
        b = n.bonds[k];
        pull += b.y * ((b.a === n ? b.hA : b.hB) - n.e);
      }
      n.de = pull - n.nu * n.e;
      n.e += n.de * H;
    }

    // 5. Zelf, Rouw, Diepte, Greep, and the Van Motor coefficient
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      if (n.state !== "live") continue;
      var rouwSum = 0;
      for (k = 0; k < n.rouw.length; k++) {
        var r = n.rouw[k];
        // settles toward the last signal, then wanders under the survivor's own distortion
        r.n = this.ou(r.n, p.upsilon * p.rouwNoise);
        r.h += H / p.tauRouw * (r.last - r.h + r.n);
        rouwSum += Math.abs(r.h) * (0.5 + r.Z);  // a Koppel's Gewenning persists into its Rouw
      }
      // the Zelf: Δ = 0, distortion fed by the Rouw it carries (§IV, §VIII.1)
      n.ns = this.ou(n.ns, p.upsilon * p.selfNoise * Math.sqrt(n.rouw.length));
      n.hs += H / p.tauSelf * (n.e - n.hs + n.ns);
      var inflow = 0, grip = n.vol;            // the Zelf's Trouw is Vol/Leeg itself, reread
      if (!n.mask) {                           // a Masker earns no Greep and no Diepte (§IX)
        for (k = 0; k < n.bonds.length; k++) {
          b = n.bonds[k];
          inflow += b.y * Math.abs(b.a === n ? b.hA : b.hB);
          grip += Math.max(0, b.y) * b.Z;
        }
      }
      n.z += H * (p.gIn * inflow - p.gSpend * Math.abs(n.de) - p.gDecay * n.z + p.gRouw * rouwSum);
      n.z = clamp(n.z, 0, p.zCeil);
      n.J = p.kJ * grip;
      n.nu = p.nu0 * Math.exp(-n.J);           // suppressed, never abolished
    }

    // 6. each Koppel: binding, Drempel, Vonk, Gewenning, Trouw, trajectory
    for (k = bonds.length - 1; k >= 0; k--) this.koppel(bonds[k]);

    // 7. Trek and Zin: meeting, answering, losing the aim
    for (i = 0; i < nodes.length; i++) if (nodes[i].state === "live") this.seek(nodes[i]);

    // 8. Perfectus: a node that once bound, with no Koppel in Naar and its Eigen drifted
    //    back to Van (Υ, Ω). While it holds any Relatie the exchanges keep its Eigen up, so
    //    in practice this comes once its Koppels have all dissolved.
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      if (n.state !== "live" || !n.everNaar) continue;
      var anyNaar = false;
      for (k = 0; k < n.bonds.length; k++) if (n.bonds[k].mode === "naar") { anyNaar = true; break; }
      n.settleT = anyNaar || n.e > p.eSettle ? 0 : n.settleT + H;
      if (n.settleT > p.settleWindow) this.perfectus(n);
    }

    // 9. departures fade; Bron answers a thinning field
    for (i = nodes.length - 1; i >= 0; i--) {
      n = nodes[i];
      if (n.state === "departing") {
        n.fade += H;
        if (n.fade > p.fadeTime) nodes.splice(i, 1);
      }
    }
    if (this.liveCount() < p.nMin && t >= this.nextBron) {
      this.fromBron();
      this.nextBron = t + p.bronDelay;
    }

    this.layout();
  };

  Field.prototype.koppel = function (b) {
    var p = this.P, a = b.a, c = b.b;
    b.age += H;
    // the binding measure (§VIII.2): the two Echo-gaps are real quantities
    var gA = c.e - b.hA, gB = a.e - b.hB;
    b.B = b.y * (a.e + c.e) - p.c * Math.sqrt(gA * gA + gB * gB);
    // what a partner reads when the other wears a Masker (§VIII.6)
    if (a.mask || c.mask) {
      var ma = a.mask ? a.m : a.e, mc = c.mask ? c.m : c.e;
      var pa = mc - b.hA, pb = ma - b.hB;
      b.Bhat = b.y * (ma + mc) - p.c * Math.sqrt(pa * pa + pb * pb);
    } else {
      b.Bhat = null;
    }
    b.A = b.hA - b.hB;

    // the pitchfork (§VIII.3), tilted by the Echo asymmetry: no Koppel occurs alone
    var d = b.B - p.theta;
    b.phi += H / p.tauPhi * (-b.phi * b.phi * b.phi + d * b.phi + p.kappa * b.A);

    // the named crossings, separated by the Marge
    if (b.mode === "van" && b.B > p.theta + p.eta) {
      b.mode = "naar";
      b.everNaar = a.everNaar = c.everNaar = true;
      this.stats.realisaties++;
      this.emit("realisatie", { bond: b });
    } else if (b.mode === "naar" && b.B < p.theta - p.eta) {
      b.mode = "van";
      this.stats.schokken++;
      this.emit("schok", { bond: b });
    }
    b.balans = Math.abs(d) < p.eta;

    // Energie: what stands between Naar and Van, booked only through Vonken
    var p2 = b.phi * b.phi;
    var Sstar = d > 0 ? Math.max(0, 0.5 * d * p2 - 0.25 * p2 * p2) : 0;
    var hold = Math.min(Sstar, b.Q);
    if (hold - b.S >= p.quantum) { this.winst(hold - b.S, b); b.S = hold; }
    else if (b.S - hold >= p.quantum || (hold === 0 && b.S > 0)) { this.verlies(b.S - hold, b); b.S = hold; }
    // a surge past what the Koppel can absorb overflows its Inhoud (§VIII.5); the
    // mark it must pass relaxes slowly, so only a new height overflows
    var mark = Math.max(b.peak, b.Q);
    if (Sstar > mark) { b.pendX += Sstar - mark; b.peak = Sstar; }
    else b.peak -= (b.peak - Math.max(Sstar, b.Q)) * H / p.tauPeak;
    if (b.pendX >= p.quantum) { this.winst(b.pendX, b); b.X += b.pendX; b.pendX = 0; }
    if (b.X > 0) {
      var dx = b.X * H / p.tauX;
      b.X -= dx;
      this.dissipate(dx);
    }
    if (b.X >= p.thetaNew && this.liveCount() < p.nMax) this.creatie(b);

    // Gewenning integrates Echo-gap closure; Trouw follows it (§VIII.1)
    // A Masker is tracked faithfully, so it does not split or reduce the Trouw (§IX).
    var tA = (c.mask ? c.m : c.e) - b.hA, tB = (a.mask ? a.m : a.e) - b.hB;
    var align = Math.exp(-(tA * tA + tB * tB) / (p.alignW * p.alignW));
    var engage = clamp((a.e + c.e) / (2 * p.eRef), 0, 1), zt = align * engage;
    b.Z += H * p.kZ * (zt - b.Z);
    // while a Masker is worn the shared Trouw holds where it was: not split or reduced,
    // and nothing gained from the bond the wearer only appears to sustain (§IX, Masker)
    if (!a.mask && !c.mask) b.y = clamp(b.y + H * p.rho * (b.Z - b.y), p.yMin, p.yMax);

    // the trajectory, read from the Echo asymmetry A = hᵢ − hⱼ (§VI, §VIII.4)
    b.As += (b.A - b.As) * Math.min(1, H / 1.5);
    b.trajT += H;
    b.htimer += H;
    if (b.htimer >= A_EVERY) {
      b.htimer -= A_EVERY;
      b.Ahist[b.hix] = b.As;
      b.Bhist[b.hix] = b.B;
      b.hix = (b.hix + 1) % A_SAMPLES;
      b.hcount++;
      this.readTrajectory(b);
    }

    // a Relatie in Van whose Trouw has sunk below where it began has lost its pull: it
    // dissolves while both still stand. Above that it persists, crossed or not (§IV).
    b.lowT = b.mode === "van" && b.y < p.yEnd ? b.lowT + H : 0;
    if (b.lowT > p.dissolveWindow) this.endKoppel(b, "dissolved");
  };

  // Dood: A has settled at a fixed offset. Leven: A has gone through parity and
  // holds the other sign. Zweven: neither, the default while waiting (§VI).
  Field.prototype.readTrajectory = function (b) {
    var p = this.P, n = Math.min(b.hcount, 50);
    if (n < 30) return;
    var lo = Infinity, hi = -Infinity;
    for (var i = 1; i <= n; i++) {
      var v = b.Ahist[(b.hix - i + A_SAMPLES) % A_SAMPLES];
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
    var sg = b.As > p.etaA ? 1 : b.As < -p.etaA ? -1 : 0;
    if (sg !== b.sgnCand) { b.sgnCand = sg; b.sgnT = 0; } else b.sgnT += A_EVERY;
    if (sg && b.sgnT >= p.signHold && sg !== b.sgn) {
      // a reversal only counts against a role that was really held
      if (b.sgn && this.t - b.sgnAt >= p.roleHold && !b.a.mask && !b.b.mask) this.setTraj(b, "?", "leven");
      b.sgn = sg;
      b.sgnAt = this.t;
    }
    var settled = hi - lo < p.settleBand && lo * hi > 0 && Math.min(Math.abs(lo), Math.abs(hi)) > p.etaDood;
    var moving = hi - lo > 2 * p.settleBand;
    if (b.traj === "?") {
      if (b.trajT > p.levenHold) this.setTraj(b, settled ? "!" : "'", settled ? "verkwisting" : "bezinking");
    } else if (b.traj === "'" && settled) this.setTraj(b, "!", "verstijving");
    else if (b.traj === "!" && moving) this.setTraj(b, "'", "ontdooiing");
  };

  Field.prototype.setTraj = function (b, traj, how) {
    b.traj = traj;
    b.trajT = 0;
    if (traj === "?") {
      // the swap through parity is a convergence crossing: a small Realisatie, held by the Koppel
      this.winst(this.P.zinE, b);
      b.levenE += this.P.zinE;
      this.stats.leven++;
    }
    this.emit("traj", { bond: b, traj: traj, how: how });
  };

  Field.prototype.seek = function (n) {
    var p = this.P, t = this.t, i, m;
    if (n.zin) {
      var T = n.zin.target;
      if (T.state !== "live" || this.partnered(n, T)) { this.revertZin(n); return; }
      if (T.zin && T.zin.target === n) { this.formRelatie(n, T, false); return; }
      if (t - n.zin.t0 > p.answerDelay && !T.zin && this.wants(T) && !(T.cooldown[n.id] > t)) {
        this.aim(T, n);                      // the target's own pull answers
        return;
      }
      if (t - n.zin.t0 > p.aimPatience) {
        n.cooldown[T.id] = t + p.cooldown;
        this.revertZin(n);
      }
      return;
    }
    if (!this.wants(n)) { n.trekT = 0; return; }
    n.trekT += H * n.D;                      // Trek builds before it aims
    if (n.trekT < p.trekBuild) return;
    var best = null, bd = Infinity;
    for (i = 0; i < this.nodes.length; i++) {
      m = this.nodes[i];
      if (m === n || m.state !== "live" || n.cooldown[m.id] > t || this.partnered(n, m)) continue;
      var dx = m.x - n.x, dy = m.y - n.y, d2 = dx * dx + dy * dy;
      if (d2 < bd) { bd = d2; best = m; }
    }
    if (best) { this.aim(n, best); n.trekT = 0; }
  };

  /* ---------------------------- layout -------------------------------- */
  // each node's drawn radius (Diepte) and the room it keeps (with its drawn Rouw)
  Field.prototype.sizeNodes = function () {
    var L = this.L, p = this.P;
    for (var i = 0; i < this.nodes.length; i++) {
      var a = this.nodes[i], grow = clamp((this.t - a.born) / 1.2, 0.15, 1);
      a.r = L * (0.014 + 0.009 * Math.sqrt(a.z / p.zCeil)) * grow;
      var rings = Math.ceil(Math.min(a.rouw.length, ROUW_SHOWN) / 12);
      a.R = a.r + L * 0.012 + rings * L * 0.008;
    }
  };

  // Drawing only: keeps every node in its own room. Nothing here is a spectrum.
  Field.prototype.layout = function () {
    var p = this.P, L = this.L, W = this.W, Hh = this.H, t = this.t, nodes = this.nodes;
    var i, j, a, c, dx, dy, d, d2, f, k, b;
    this.sizeNodes();
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      a.fx = (W / 2 - a.x) * 0.03;
      a.fy = (Hh / 2 - a.y) * 0.03;
      if (a.state === "live") {
        var w = (a.bonds.length ? 0.3 : 1) * L * 0.045;
        a.fx += w * Math.sin(t * a.w1 + a.p1);
        a.fy += w * Math.cos(t * a.w2 + a.p2);
      }
    }
    var reach = L * 0.36, reach2 = reach * reach;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      for (j = i + 1; j < nodes.length; j++) {
        c = nodes[j];
        dx = c.x - a.x; dy = c.y - a.y; d2 = dx * dx + dy * dy;
        if (d2 >= reach2) continue;
        d2 = Math.max(d2, 1);
        d = Math.sqrt(d2);
        f = 0.004 * L * L * L * (1 / d2 - 1 / reach2) / d;
        f = Math.min(f, 4 * L / d);
        a.fx -= f * dx; a.fy -= f * dy;
        c.fx += f * dx; c.fy += f * dy;
      }
    }
    for (k = 0; k < this.bonds.length; k++) {
      b = this.bonds[k]; a = b.a; c = b.b;
      dx = c.x - a.x; dy = c.y - a.y;
      d = Math.sqrt(dx * dx + dy * dy) || 1;
      b.len = d;
      var rest = a.R + c.R + L * (b.mode === "naar" ? 0.07 : 0.12) * (1.2 - 0.4 * b.y);
      f = (0.8 + 2.4 * b.y) * (d - rest) / d;
      a.fx += f * dx; a.fy += f * dy;
      c.fx -= f * dx; c.fy -= f * dy;
    }
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (a.zin && a.zin.target.state === "live") {
        c = a.zin.target;
        dx = c.x - a.x; dy = c.y - a.y;
        d = Math.sqrt(dx * dx + dy * dy) || 1;
        if (d > a.R + c.R + L * 0.1) { a.fx += 0.35 * L * dx / d; a.fy += 0.35 * L * dy / d; }
      }
    }
    var damp = Math.exp(-H * 3), vmax = L * 0.35;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (a.state !== "live") { a.vx *= 0.9; a.vy *= 0.9; continue; }
      a.vx = (a.vx + a.fx * H) * damp;
      a.vy = (a.vy + a.fy * H) * damp;
      var sp = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
      if (sp > vmax) { a.vx *= vmax / sp; a.vy *= vmax / sp; }
      a.x += a.vx * H;
      a.y += a.vy * H;
    }
    this.separate();
  };

  // no two nodes ever share room
  Field.prototype.separate = function () {
    var L = this.L, W = this.W, Hh = this.H, nodes = this.nodes, i, j, a, c, dx, dy, d, d2;
    var pad = L * 0.008;
    for (var pass = 0; pass < 2; pass++) {
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          c = nodes[j];
          dx = c.x - a.x; dy = c.y - a.y; d2 = dx * dx + dy * dy;
          var minD = a.R + c.R + pad;
          if (d2 >= minD * minD) continue;
          d = Math.sqrt(d2);
          if (d < 1e-6) { dx = 1; dy = 0; d = 1; }
          var push = (minD - d) / d;
          var wa = a.state === "live" ? 0.5 : 0, wc = c.state === "live" ? 0.5 : 0;
          if (wa + wc === 0) continue;
          var s = 1 / (wa + wc);
          a.x -= dx * push * wa * s; a.y -= dy * push * wa * s;
          c.x += dx * push * wc * s; c.y += dy * push * wc * s;
        }
      }
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        var m = a.R + L * 0.02;
        a.x = clamp(a.x, m, W - m);
        a.y = clamp(a.y, m, Hh - m);
      }
    }
  };

  /* ----------------------------- queries ------------------------------ */
  Field.prototype.nodeAt = function (x, y) {
    var best = null, bd = Infinity;
    for (var i = 0; i < this.nodes.length; i++) {
      var n = this.nodes[i];
      if (n.state !== "live") continue;
      var dx = n.x - x, dy = n.y - y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < Math.max(n.R, 14) && d < bd) { bd = d; best = n; }
    }
    return best;
  };

  Field.prototype.bondAt = function (x, y) {
    var best = null, bd = 10;
    for (var k = 0; k < this.bonds.length; k++) {
      var b = this.bonds[k], ax = b.a.x, ay = b.a.y, dx = b.b.x - ax, dy = b.b.y - ay;
      var l2 = dx * dx + dy * dy || 1, u = clamp(((x - ax) * dx + (y - ay) * dy) / l2, 0, 1);
      var px = ax + u * dx - x, py = ay + u * dy - y, d = Math.sqrt(px * px + py * py);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  };

  // irreducibly bound groups in Naar mode (§V): the blocks of the Naar graph.
  // A block of two is a Duo; a block of three or more stays connected whichever
  // single member wavers. A node may sit in several blocks at once (§V.2).
  Field.prototype.groups = function () {
    var adj = {}, disc = {}, low = {}, clock = 0, stack = [], out = [], i, k, b;
    for (k = 0; k < this.bonds.length; k++) {
      b = this.bonds[k];
      if (b.mode !== "naar") continue;
      (adj[b.a.id] = adj[b.a.id] || []).push(b.b);
      (adj[b.b.id] = adj[b.b.id] || []).push(b.a);
    }
    function visit(u, parent) {
      disc[u.id] = low[u.id] = ++clock;
      var nb = adj[u.id];
      for (var q = 0; q < nb.length; q++) {
        var v = nb[q];
        if (!disc[v.id]) {
          stack.push([u, v]);
          visit(v, u);
          low[u.id] = Math.min(low[u.id], low[v.id]);
          if (low[v.id] >= disc[u.id]) {
            var seen = {}, members = [], e;
            do {
              e = stack.pop();
              if (!seen[e[0].id]) { seen[e[0].id] = 1; members.push(e[0]); }
              if (!seen[e[1].id]) { seen[e[1].id] = 1; members.push(e[1]); }
            } while (!(e[0] === u && e[1] === v));
            out.push({ members: members, irreducible: true });
          }
        } else if (v !== parent && disc[v.id] < disc[u.id]) {
          stack.push([u, v]);
          low[u.id] = Math.min(low[u.id], disc[v.id]);
        }
      }
    }
    for (i = 0; i < this.nodes.length; i++) {
      var n = this.nodes[i];
      if (adj[n.id] && !disc[n.id]) visit(n, null);
    }
    return out;
  };

  var api = { Field: Field, DEFAULTS: DEFAULTS, H: H, ROUW_SHOWN: ROUW_SHOWN };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.VeldSim = api;
})(typeof window !== "undefined" ? window : this);
