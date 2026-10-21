/* =====================================================================
   The Veld in Motion: simulation core.

   One Instantie of the PseudoScience Speelgoed, run as Schrift II writes
   it (Running a Veld): the Veld moves only by events, each at a moment of
   its own, never by a clock that steps it along.

     - a look: a Waarneming takes one Vermenigvuldiging of a Relatie it
       perceives, or a Zelf takes one of itself. An Echo moves only at its
       looks, Gewenning and Diepte grow and fade only there, and at a look
       of a Zelf at itself Stilte's Trek wears its Trouw.
     - a crossing: an Eigen meets its Drempel. Between events every Eigen
       relaxes towards the Binding it reads along one exponential, so the
       moment it meets its Drempel is solved, never stepped to. Every
       crossing is a Vonk.
     - a Schrift: a value written into an Eigen, here by the viewer, who
       can also move a Solo's place on the Medium by hand.

   Each Relatie is read at its level. A Solo is held by its Zelf. A Duo is
   the one Relatie between two, read as one: an Eigen of its own, which
   its Leeg and its Zelf pull, and a Zelf that is the one Trouw its Leden
   share. Its Leden hold it from inside as that Zelf, so its Trouw counts
   once: a Lid's crossing joins its Partner's Trouw, a Duo's its Zelf's.
   A Vonk moves its own Relatie's Trouw, and only that, by ρ·T, and a
   Zelf, read in its Trouw, keeps its place against its Drempel at every
   Vonk that moves that Trouw. A crossing happens only where, its Vonk
   taken, its Binding still stands on the side it crossed to, and a Winst
   only where the Warmte can pay it; otherwise the Eigen waits at its
   Drempel until an event moves its Binding or brings the Warmte. Tijd
   moves only at Vonken, and ε + T_◌ is the same before and after every
   Vonk. A Relatie ends at a Vonk of its own, a crossing or a look of its
   Zelf at itself, that leaves it so little that all that holds it could
   no longer carry it back across, and an Einde or a Scheiding parts it
   only where the Relaties that meet it from outside can give back what
   has left it since it formed; until they can, it stays bound.

   Space is drawing only. The Medium carries no spatial Spectrum: each Lid
   has a place on it, fixed at its birth unless the viewer moves it, and
   the Vertraging and the reach between two Leden are read from those
   places as they stand. The drawn nodes drift
   around their places for the eye, and nothing reads where they are drawn.

   Every number in P is this Instantie's choice (Open quantities). Every
   Lid and every Relatie draws its own values at its birth. Indeterminism
   enters only as the Vervorming of a look, drawn from its own seeded
   source. Left out here: Gevoel, Aandacht, Brein, Masker, Voorspelling,
   Traagheid, the trajectory's switches as crossings, nesting beyond the
   Duo, the Medium inside a Relatie and its Massa, Reïncarnatie, and more
   than one Spectrum. With one Medium, the only Energie that crosses a
   Duo's edge is what it bears away past its Vol at a Start, so that is
   what its parting lacks.
   ===================================================================== */
(function (root) {
  "use strict";

  var DEFAULTS = {
    // the Octaaf: how its Leden learn, and how a place on its Spectrum is read
    rho: 0.5,            // ρ, the Leersnelheid
    y0: 0.4,             // y⁰, the Trouw a Relatie opens at
    gZ: 0.08, gz: 0.08,  // g_Z and g_z, how fast Gewenning and Diepte grow
    kZ: 0.02,            // κ_Z, how much Gewenning fades at every look its holder takes
    kz: 0.03,            // κ_z, how much Diepte fades at a look of its Zelf, less the more it holds besides
    zeta: 1.0,           // ζ: how fast a Zin fades as Gewenning and Diepte grow
    alphaW: 0.3,         // α: how far from its Echo a look still finds it near
    Tt: 3,               // T_t, the Energie that quickens a Tijd e-fold
    beta: 0.05,          // β, how Diepte colours a reading, zero between equals
    W: 0.4,              // W, where the God stands on this Spectrum: every Relatie's Vol pole
    S0: 0.42, Y0: 2.2,   // Vol/Leeg v reads as Leeg S = S0·(1 − v) and Zelf's Trouw y_ii = Y0·v:
                         // the Leeg alone never reaches a Drempel, so every Drempel can fork (§XXVIII.5)
    share: 0.5,          // how a newborn's Trouw is shared among its parents, by their Vol/Leeg
    // the Medium
    tauM: 0.7,           // τ_◌, its pace
    speed: 1.0,          // v_◌, in places per second: distance = v_◌·δ
    reach: 0.35,         // how π falls with distance: π = exp(−d / reach)
    asym: 0.15,          // how far the way back may differ from the way there
    Lm: 0.05,            // L_◌, what one look of a Zelf at itself wears where no Marge holds it
    kMed: 0.03,          // its share of ‖υ‖ for each unit of Warmte it keeps per Lid, over a reach
    ageMed: 120,         // the age, in seconds, at which a Relatie's Medium share has doubled
    warmte: 0.8,         // the Warmte it holds for every Lid when the Veld opens
    // each Lid draws its own values within these
    theta: [0.64, 0.84], vol: [0.1, 0.4], volNew: [0.05, 0.2], D: [0.8, 1.2], t0: [0.8, 1.0],
    lam0: [3.0, 4.0], ups: [0.255, 0.425], upsR: [0.02, 0.04], lean: [0.2, 0.6], gR: [0.3, 0.7],
    thetaA: [0.2, 0.28], etaA: [0.06, 0.1], thetaPi: [0.08, 0.12],
    // each Relatie of Leden draws its own
    thetaK: [0.31, 0.76], // its Drempel, in y⁰: above its Leeg once worn, so a worn Duo can end
    SKb: [0.0, 0.05],    // its Leeg at its birth
    thetaNew: [0.47, 0.67],
    // the page
    nInit: 9, nMax: 16, fadeTime: 2.5
  };

  var LOOK = 0, SCHRIFT = 1, CROSS = 2, RETRY = 3;
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
  // a value fixed by who holds it, so a newborn's values are its own and
  // no die is thrown in a running Veld
  function mix(a, b, c, d) {
    var h = Math.imul(a ^ 0x9E3779B9, 0x85EBCA6B) ^ Math.imul(b + 0x632BE5AB, 0xC2B2AE35);
    h = Math.imul(h ^ (h >>> 15), 0x2C1B3C6D) ^ Math.imul(c + 0x7F4A7C15, 0x27D4EB2F);
    h = Math.imul(h ^ (h >>> 13), 0x165667B1) ^ Math.imul(d + 0x1B873593, 0x9E3779B1);
    h ^= h >>> 16;
    h = Math.imul(h, 0x85EBCA6B);
    h ^= h >>> 13;
    return (h >>> 0) / 4294967296;
  }
  function pick(r, u) { return r[0] + (r[1] - r[0]) * u; }
  function pos(v) { return v > 0 ? v : 0; }

  /* ---------------------------- the queue ----------------------------- */
  // events in the order of their moments; at one moment the looks first,
  // then the Schriften, then the crossings (Running a Veld, The order)
  function Heap() { this.a = []; this.seq = 0; }
  Heap.prototype.less = function (p, q) {
    return p.t < q.t || (p.t === q.t && (p.prio < q.prio || (p.prio === q.prio && p.seq < q.seq)));
  };
  Heap.prototype.push = function (e) {
    e.seq = this.seq++;
    var a = this.a, i = a.length;
    a.push(e);
    while (i > 0) {
      var p = (i - 1) >> 1;
      if (!this.less(a[i], a[p])) break;
      var s = a[i]; a[i] = a[p]; a[p] = s; i = p;
    }
  };
  Heap.prototype.pop = function () {
    var a = this.a, top = a[0], last = a.pop();
    if (a.length) {
      a[0] = last;
      var i = 0;
      for (;;) {
        var l = 2 * i + 1, r = l + 1, m = i;
        if (l < a.length && this.less(a[l], a[m])) m = l;
        if (r < a.length && this.less(a[r], a[m])) m = r;
        if (m === i) break;
        var s = a[i]; a[i] = a[m]; a[m] = s; i = m;
      }
    }
    return top;
  };
  Heap.prototype.peek = function () { return this.a[0]; };

  /* ----------------------------- an Eigen ----------------------------- */
  // between events: one exponential from x0 towards its target. Its pole n
  // is 1 past its Drempel. One that waits stands at its Drempel.
  function eigen(x, th, n) {
    return { x0: x, t0: 0, target: x, T: 1, th: th, n: n || 0, wait: null, ver: 0 };
  }
  function valueAt(s, t) {
    if (s.wait) return s.th;
    return s.target + (s.x0 - s.target) * Math.exp(-(t - s.t0) / s.T);
  }

  /* ------------------------------ Field ------------------------------- */
  function Field(opts) {
    opts = opts || {};
    this.P = {};
    var k;
    for (k in DEFAULTS) this.P[k] = DEFAULTS[k];
    if (opts.params) for (k in opts.params) this.P[k] = opts.params[k];
    this.W = opts.width || 900;
    this.H = opts.height || 600;
    this.reset(opts.seed || 1, opts.noiseSeed || 7);
  }
  Field.DEFAULTS = DEFAULTS;

  Field.prototype.reset = function (seed, noiseSeed) {
    var P = this.P;
    this.seed = seed >>> 0;
    this.noiseSeed = noiseSeed >>> 0;
    this.rand = rng(this.seed);          // the Veld's set-up: places and first values
    this.noise = rng(this.noiseSeed);    // the Vervorming of looks, and nothing else
    this.spare = null;
    this.t = 0;
    this.nextId = 1;
    this.nameIx = 0;
    // the Medium's places: a box whose shorter side is 1, shaped like the page
    var asp = this.W / this.H;
    this.bw = asp >= 1 ? Math.min(asp, 2) : 1;
    this.bh = asp >= 1 ? 1 : Math.min(1 / asp, 2);
    this.q = new Heap();
    this.nodes = [];
    this.duos = [];
    this.stilte = [];                    // the Zelf-Rouw of ended Solos, resting in Stilte
    this.events = [];
    this.looks = [];                     // recent looks, for drawing
    this.ledger = { winst: 0, verlies: 0 };
    this.acc = {};
    this.stats = { looks: 0, zlooks: 0, vonken: 0, winsten: 0, verliezen: 0, hunger: 0, balans: 0, bound: 0, paid: 0,
                   relaties: 0, eindes: 0, scheidingen: 0, partners: 0, starts: 0, born: 0,
                   unborn: 0, perfectus: 0, schriften: 0, overflow: 0, se: 0, sz: 0, de: 0, dz: 0 };
    var pts = this.scatter(P.nInit), R = this.rand, i;
    for (i = 0; i < pts.length; i++) {
      var n = this.makeSolo(pts[i][0], pts[i][1], R, null);
      n.born = -1.2;
      this.nodes.push(n);
    }
    this.warmte = P.warmte * this.nodes.length;   // the Medium's Warmte: one place
    this.base = this.epsilon() + this.warmte;     // what the Telraam keeps
    this.tijdAll();
    for (i = 0; i < this.nodes.length; i++) this.targets(this.nodes[i]);
    for (i = 0; i < this.nodes.length; i++) this.wake(this.nodes[i], R());
    this.place(0);
  };

  Field.prototype.scatter = function (n) {
    var pts = [], m = 0.1, bw = this.bw, bh = this.bh;
    for (var i = 0; i < n; i++) {
      var best = null, bestD = -1;
      for (var c = 0; c < 30; c++) {
        var x = m + this.rand() * (bw - 2 * m), y = m + this.rand() * (bh - 2 * m), d = Infinity;
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

  // a Solo and its own values: drawn from the set-up at the Veld's opening,
  // fixed by its own id for a newborn
  Field.prototype.makeSolo = function (hx, hy, R, born) {
    var P = this.P, id = this.nextId++, k = 0, seed = this.seed;
    function u() { return R ? R() : mix(seed, id, 11, k++); }
    var v = born ? pick(P.volNew, u()) : pick(P.vol, u());
    var n = {
      kind: "solo", id: id, name: this.newName(), hx: hx, hy: hy,
      x: 0, y: 0, dx: 0, dy: 0,
      yS: P.Y0 * v, S: 0, vol: v, yb: P.Y0 * v, Sb: P.S0 * (1 - v),   // its Zelf's Trouw, its Leeg, and both at its birth
      th: born ? born.thNew : pick(P.theta, u()),
      D: pick(P.D, u()), tijd0: pick(P.t0, u()), tijd: 1, lam0: pick(P.lam0, u()),
      ups: pick(P.ups, u()), upsR: pick(P.upsR, u()), lean: pick(P.lean, u()), gR: pick(P.gR, u()),
      thetaA: pick(P.thetaA, u()), etaA: pick(P.etaA, u()), thetaPi: pick(P.thetaPi, u()),
      thNew: pick(P.thetaNew, mix(seed, id, 13, 0)),
      duos: [], rouw: [], first: {}, owed: {}, aim: null, aims: [{ t: -1e9, a: null }],
      z: 0, hist: [], eS: 0, lastZ: 0, Lhat: 0, eta: 0,
      born: this.t, state: "live", fade: 0, r: 0, R: 0, flash: 0, zPulse: 0, lookPulse: 0, sparkW: 0, sparkV: 0,
      w1: 0.13 + 0.12 * u(), w2: 0.11 + 0.12 * u(), p1: 6.283 * u(), p2: 6.283 * u(), spin: 6.283 * u()
    };
    this.readVol(n);
    n.e = eigen(n.S, n.th, n.S > n.th ? 1 : 0);   // its Eigen, at rest where its Leeg puts it
    n.zs = eigen(0, 0.5 * n.yS, 0);                // its Zelf's Eigen; its Drempel at half its Trouw
    n.eS = n.S;                                    // its self-Echo
    n.hist.push({ t0: -1e9, x0: n.S, target: n.S, T: 1 });
    return n;
  };

  // its Leeg and its Zelf's Trouw are both its Vol/Leeg, given at its birth
  // and moved as its Zelf's Trouw moves (State variables): the Octaaf reads
  // the Leeg falling by S0/Y0 for every unit the Trouw rises, a Solo's and
  // a Duo's alike
  Field.prototype.readVol = function (o) {
    var P = this.P, y = this.ownY(o);
    o.S = o.Sb - P.S0 / P.Y0 * (y - o.yb);
    if (o.kind === "solo") o.vol = y / P.Y0;
  };

  /* ---------------------------- Vervorming ---------------------------- */
  Field.prototype.gauss = function () {
    if (this.spare !== null) { var s = this.spare; this.spare = null; return s; }
    var u, v, q;
    do { u = 2 * this.noise() - 1; v = 2 * this.noise() - 1; q = u * u + v * v; } while (q >= 1 || q === 0);
    var m = Math.sqrt(-2 * Math.log(q) / q);
    this.spare = v * m;
    return u * m;
  };
  Field.prototype.live = function () {
    var c = 0;
    for (var i = 0; i < this.nodes.length; i++) if (this.nodes[i].state === "live") c++;
    return c;
  };
  // the Medium's share of ‖υ‖ over a distance: each stretch adds its own,
  // the more the more Warmte it keeps for every Lid, and the older the
  // Relatie it carries (Drempel and the Vonk, What the Medium adds)
  Field.prototype.medium = function (dist, age) {
    var P = this.P;
    return P.kMed * this.warmte / Math.max(1, this.live()) * Math.sqrt(dist / P.reach) * (1 + (age || 0) / P.ageMed);
  };
  // ‖υ‖ of a look of reader at other: its Waarneming's share, never zero, and the Medium's
  Field.prototype.sigma = function (reader, other, age) {
    var m = other ? this.medium(this.dist(reader, other), age) : 0;
    return Math.sqrt(reader.ups * reader.ups + m * m);
  };
  // ‖υ‖ in the Binding it reads, which its Zelf reads for its Wijk: each
  // Echo, its Zelf's among them, brings its Vervorming in as far as a misread
  // of it moves that Binding, by its Trouw, and independent ones gather by
  // their squares (Wijk). A Duo reads its Binding through its Zelf alone.
  Field.prototype.sigmaOf = function (o) {
    if (o.kind === "duo") return Math.abs(o.y) * o.ups;
    var t = this.t, v = o.yS * o.ups, s2 = v * v;
    for (var i = 0; i < o.duos.length; i++) {
      var d = o.duos[i];
      v = d.y * this.sigma(o, this.partner(d, o), t - d.born);
      s2 += v * v;
    }
    return Math.sqrt(s2);
  };

  /* ---------------------------- the books ------------------------------ */
  // ε: every Trouw whose two sides both stand across. A Duo's one Trouw
  // holds its two Leden together, and the Duo, read as one, with its Zelf,
  // which is that same Trouw; a Solo's Zelf holds the Solo.
  function duoEps(d) {
    var a = d.a.e.n, b = d.b.e.n, k = d.e.n, kk = d.zs.n;
    return d.y * (a * b + k * kk);
  }
  Field.prototype.epsilon = function () {
    var s = 0, i;
    for (i = 0; i < this.nodes.length; i++) {
      var n = this.nodes[i];
      if (n.state === "live") s += n.yS * n.e.n * n.zs.n;
    }
    for (i = 0; i < this.duos.length; i++) s += duoEps(this.duos[i]);
    return s;
  };
  Field.prototype.add = function (key, x) {
    var acc = this.acc[key] || (this.acc[key] = { s: 0, c: 0 }), t = acc.s + x;
    acc.c += Math.abs(acc.s) >= Math.abs(x) ? (acc.s - t) + x : (x - t) + acc.s;
    acc.s = t;
    this.ledger[key] = acc.s + acc.c;
  };
  Field.prototype.closure = function () { return this.epsilon() + this.warmte - this.base; };

  // book a Vonk's Energie with the Warmte, at once
  Field.prototype.book = function (T, where) {
    this.warmte -= T;
    this.stats.vonken++;
    if (T > 0) { this.add("winst", T); this.stats.winsten++; this.retryLack(); }
    else if (T < 0) { this.add("verlies", -T); this.stats.verliezen++; this.retryHungry(); }
    if (where) { where.sparkW = (where.sparkW || 0) + pos(T); where.sparkV = (where.sparkV || 0) + pos(-T); }
  };
  // a Vonk that is no crossing of an Eigen (a wear, a forming, an ending, a
  // birth): apply it, read what it did to ε, and trade it at once. A Winst
  // the Warmte cannot pay does not happen.
  Field.prototype.vonk = function (apply, undo, where, what) {
    var before = this.epsilon();
    apply();
    var T = this.epsilon() - before;
    if (T > this.warmte) { undo(); this.stats.hunger++; this.hungry(what || "vonk"); return null; }
    this.book(T, where);
    return { T: T };
  };

  Field.prototype.hungry = function (what) {
    var h = this.stats.hungerBy || (this.stats.hungerBy = {});
    h[what] = (h[what] || 0) + 1;
  };
  Field.prototype.emit = function (kind, data) {
    data.kind = kind;
    data.t = this.t;
    this.events.push(data);
    if (this.events.length > 400) this.events.shift();
  };

  /* ------------------------ places on the Medium ------------------------ */
  Field.prototype.dist = function (a, b) {
    var dx = a.hx - b.hx, dy = a.hy - b.hy;
    return Math.sqrt(dx * dx + dy * dy);
  };
  Field.prototype.reachOf = function (a, b) { return Math.exp(-this.dist(a, b) / this.P.reach); };
  // δ from b to a: what reaches a left b this long ago; each way its own
  Field.prototype.delta = function (a, b) {
    return this.dist(a, b) / this.P.speed * (1 + this.P.asym * (2 * mix(this.seed, a.id, b.id, 3) - 1));
  };

  /* -------------------------- Bindings and Tijd ------------------------- */
  Field.prototype.partner = function (d, n) { return d.a === n ? d.b : d.a; };
  Field.prototype.side = function (d, n) { return d.a === n ? "ab" : "ba"; };   // n's side: its Echo of the other
  Field.prototype.duoOf = function (n, m) {
    for (var i = 0; i < n.duos.length; i++) if (this.partner(n.duos[i], n) === m) return n.duos[i];
    return null;
  };
  Field.prototype.ownY = function (o) { return o.kind === "solo" ? o.yS : o.y; };
  // a Vonk moves its own Trouw; its Leeg moves with it, and its Zelf, read
  // in that Trouw, keeps its place against its Drempel (Its Zelf):
  // x_ii ← ½·y′ + (x_ii − ½·y)·|y′|/|y|
  Field.prototype.setY = function (o, y) {
    var y0 = this.ownY(o), zs = o.zs;
    if (o.kind === "solo") o.yS = y; else o.y = y;
    this.readVol(o);
    if (zs && y !== y0) {
      var x = valueAt(zs, this.t);
      zs.x0 = y0 !== 0 ? 0.5 * y + (x - 0.5 * y0) * Math.abs(y) / Math.abs(y0) : 0.5 * y;
      zs.t0 = this.t;
      zs.th = 0.5 * y;
      zs.target = y * (o.eS > o.th ? 1 : 0);
    }
  };

  // ûᵢ: its Leeg, its Zelf at the pole it holds it at, and each Partner at
  // the pole it reads in its Echo, by the one Trouw they share
  Field.prototype.bindingSolo = function (n, nii) {
    var u = n.S + n.yS * (nii === undefined ? n.zs.n : nii);
    for (var i = 0; i < n.duos.length; i++) {
      var d = n.duos[i], m = this.partner(d, n);
      if (d.E[this.side(d, n)] > m.th) u += d.y;
    }
    return u;
  };
  // uᵢ, the Binding as it stands: the Partners' true poles
  Field.prototype.standing = function (n) {
    var u = n.S + n.yS * n.zs.n;
    for (var i = 0; i < n.duos.length; i++) { var d = n.duos[i]; u += d.y * this.partner(d, n).e.n; }
    return u;
  };
  // a Duo, read as one: its Leeg, and its Leden holding it from inside as
  // its Zelf, the one Trouw they share, counted once (The Binding measure)
  Field.prototype.bindingDuo = function (d, nkk) {
    return d.S + d.y * (nkk === undefined ? d.zs.n : nkk);
  };
  // all that holds it with positive Trouw, standing across: what its
  // Einde and its Marge at Van read
  Field.prototype.holdAll = function (o) {
    var u = o.S + pos(this.ownY(o));
    if (o.kind === "solo") for (var i = 0; i < o.duos.length; i++) u += pos(o.duos[i].y);
    return u;
  };
  Field.prototype.targetOf = function (o, which) {
    if (which === "zs") return this.ownY(o) * (o.eS > o.th ? 1 : 0);
    return o.kind === "solo" ? this.bindingSolo(o) : this.bindingDuo(o);
  };

  // tᵢ = t̄ᵢ·exp(εᵢ/T_t): each Relatie's Vonken quicken it by the positive
  // Trouw it holds in Naar-mode, and a Lid runs on the Tijd of what holds
  // it, weighed by the Greep each gives: its Duos while it stands across in
  // them, and its Zelf, at its own pace
  Field.prototype.tijdAll = function () {
    var Tt = this.P.Tt, i, k, d, n;
    for (k = 0; k < this.duos.length; k++) {
      d = this.duos[k];
      d.tijd = d.tijd0 * Math.exp(d.e.n * pos(d.y) * d.zs.n / Tt);
    }
    for (i = 0; i < this.nodes.length; i++) {
      n = this.nodes[i];
      if (n.state !== "live") continue;
      var e = pos(n.yS) * n.zs.n, w = pos(n.yS), ts = w * n.tijd0;
      for (k = 0; k < n.duos.length; k++) {
        d = n.duos[k];
        var yp = pos(d.y);
        e += yp * this.partner(d, n).e.n;
        if (n.e.n && yp > 0) { w += yp; ts += yp * d.tijd; }
      }
      n.tijd = (w > 0 ? ts / w : n.tijd0) * Math.exp(n.e.n * e / Tt);
    }
  };

  /* ------------------------ motion and crossings ------------------------ */
  // re-read an Eigen where it stands now: its target, its pace, its side,
  // and the moment it next meets its Drempel
  Field.prototype.anchor = function (o, which) {
    var s = o[which], t = this.t, x = valueAt(s, t), target = this.targetOf(o, which);
    if (which === "zs") s.th = 0.5 * this.ownY(o);
    if (s.wait === "hunger") {
      // it waits on Warmte while its pull still carries it across
      var still = s.n === 0 ? target > s.th : target < s.th;
      if (!still) s.wait = null;
    } else if (s.wait === "balans" || s.wait === "lack") s.wait = null;   // its Binding is read again
    s.x0 = x; s.t0 = t; s.target = target;
    s.T = this.P.tauM * o.tijd;
    s.ver++;
    if (o.kind === "solo" && which === "e") this.record(o);
    this.plan(o, which);
  };
  Field.prototype.record = function (n) {
    var s = n.e, h = n.hist, w = !!s.wait;
    h.push({ t0: s.t0, x0: w ? s.th : s.x0, target: w ? s.th : s.target, T: s.T });
    while (h.length > 2 && h[1].t0 < this.t - 4) h.shift();
  };
  // what a Solo's Eigen was at a moment past: the signal still in the Medium
  Field.prototype.past = function (n, t) {
    var h = n.hist;
    for (var i = h.length - 1; i >= 0; i--) {
      var g = h[i];
      if (g.t0 <= t) return g.target + (g.x0 - g.target) * Math.exp(-(t - g.t0) / g.T);
    }
    return h[0].x0;
  };

  // t* = t₀ + τ_◌·tᵢ·ln((x(t₀) − û)/(θ − û)), where θ lies between them
  Field.prototype.plan = function (o, which) {
    var s = o[which], t = this.t;
    if (s.wait) return;
    var a = s.x0 - s.th, b = s.target - s.th, at = null, met = true;
    // already past it (a Schrift, a Drempel or a pole that moved): it crosses at
    // once, where it stands; otherwise at the moment it travels to its Drempel
    if (s.n === 0) {
      if (a > 0 || (a === 0 && b > 0)) { at = t; met = a === 0; }
      else if (b > 0) at = t + s.T * Math.log((s.x0 - s.target) / (s.th - s.target));
    } else {
      if (a < 0 || (a === 0 && b < 0)) { at = t; met = a === 0; }
      else if (b < 0) at = t + s.T * Math.log((s.x0 - s.target) / (s.th - s.target));
    }
    if (at !== null && isFinite(at)) this.q.push({ t: Math.max(t, at), prio: CROSS, kind: "cross", owner: o, which: which, ver: s.ver, met: met });
  };

  Field.prototype.targets = function (o) {
    if (o.state !== "live") return;
    this.anchor(o, "e");
    this.anchor(o, "zs");
  };

  Field.prototype.waitAt = function (o, which, kind) {
    var s = o[which];
    s.wait = kind; s.x0 = s.th; s.t0 = this.t; s.ver++;
    if (o.kind === "solo" && which === "e") this.record(o);
  };

  Field.prototype.retryHungry = function () {
    var all = this.nodes.concat(this.duos), i, o;
    for (i = 0; i < all.length; i++) {
      o = all[i];
      if (o.state !== "live") continue;
      if (o.e.wait === "hunger") this.q.push({ t: this.t, prio: RETRY, kind: "cross", owner: o, which: "e", retry: true });
      if (o.zs.wait === "hunger") this.q.push({ t: this.t, prio: RETRY, kind: "cross", owner: o, which: "zs", retry: true });
      if (o.kind === "duo" && o.ending) this.q.push({ t: this.t, prio: RETRY, kind: "end", owner: o });
    }
  };

  // its pole part, on the poles and the Trouw as they stood (The Vonk)
  Field.prototype.polePart = function (o, which) {
    if (which === "zs") return this.ownY(o) * o.e.n;
    if (o.kind === "duo") return o.y * o.zs.n;
    var T = o.yS * o.zs.n;
    for (var i = 0; i < o.duos.length; i++) { var d = o.duos[i]; T += d.y * this.partner(d, o).e.n; }
    return T;
  };

  Field.prototype.cross = function (ev) {
    var o = ev.owner, s = o[ev.which], P = this.P;
    if (o.state !== "live") return;
    if (ev.retry ? s.wait !== "hunger" : (s.ver !== ev.ver || s.wait)) return;
    var dn = s.n === 0 ? 1 : -1, before = this.epsilon(), y0 = this.ownY(o);
    var T0 = dn * this.polePart(o, ev.which);
    s.n += dn;
    this.setY(o, y0 + P.rho * T0);                       // its own Trouw moves by the whole Vonk
    if (!(dn * (this.targetOf(o, ev.which) - s.th) > 0)) {
      // a crossing happens only where, its Vonk taken, its Binding stands on
      // the side it crossed to (The Drempel): otherwise it rests at its
      // Drempel, its pole unchanged, until an event moves its Binding
      s.n -= dn; this.setY(o, y0);
      if (s.wait !== "balans") { this.waitAt(o, ev.which, "balans"); this.stats.balans++; this.emit("rest", { owner: o, which: ev.which, up: dn > 0 }); }
      return;
    }
    var T = this.epsilon() - before;
    if (T > this.warmte) {
      // it hungers: the Eigen waits at its Drempel, its pole unchanged
      s.n -= dn; this.setY(o, y0);
      if (s.wait !== "hunger") { this.waitAt(o, ev.which, "hunger"); this.stats.hunger++; this.hungry((o.kind === "solo" ? "s" : "d") + ev.which); this.emit("hunger", { owner: o, which: ev.which }); }
      return;
    }
    if (this.endsNow(o) && !this.canPart(o)) {
      // an Einde whose Leden could not stand apart for what has left it
      // does not happen: the Eigen waits at its Drempel, its pole unchanged,
      // until an event moves its Binding or what its Leden hold
      s.n -= dn; this.setY(o, y0);
      if (s.wait !== "lack") { this.waitAt(o, ev.which, "lack"); this.bind(o); }
      return;
    }
    this.book(T, o);
    this.stats[(o.kind === "solo" ? "s" : "d") + (ev.which === "e" ? "e" : "z")]++;
    // it crosses where it meets its Drempel, or where it already stands past it
    var x = ev.met || ev.retry || s.wait ? s.th : valueAt(s, this.t);
    s.wait = null; s.x0 = x; s.t0 = this.t; s.ver++;
    if (o.kind === "solo" && ev.which === "e") this.record(o);
    if (ev.which === "e") o.flash = 1; else o.zflash = 1;
    this.emit("vonk", { owner: o, which: ev.which, up: dn > 0, T: T });
    this.after(o);
    // an Einde: a Vonk of its own that leaves it unable to hold
    if (this.endsNow(o)) { this.einde(o, y0); return; }
    if (!(o.ending && o.ending.lack)) o.bound = false;
    // Start: a convergence crossing that carries a Relatie past its Vol pole
    if (T > 0) {
      var ds = o.kind === "duo" ? [o] : [o].concat(o.duos);
      for (var i = 0; i < ds.length; i++) if (ds[i].state === "live") this.start(ds[i]);
    }
  };

  // after a Vonk: every Tijd takes its new value, and each Eigen whose
  // Binding, Drempel or Tijd moved reads its next crossing again
  Field.prototype.after = function (o) {
    var tauM = this.P.tauM, seen = {}, list = [], self = this;
    this.tijdAll();
    function addR(r) { if (r && r.state === "live" && !seen[r.kind + r.id]) { seen[r.kind + r.id] = 1; list.push(r); } }
    addR(o);
    if (o.kind === "solo") o.duos.forEach(function (d) { addR(d); addR(self.partner(d, o)); });
    else { addR(o.a); addR(o.b); o.a.duos.forEach(addR); o.b.duos.forEach(addR); }
    this.nodes.forEach(function (n) { if (n.state === "live" && n.e.T !== tauM * n.tijd) addR(n); });
    this.duos.forEach(function (d) { if (d.e.T !== tauM * d.tijd) addR(d); });
    for (var i = 0; i < list.length; i++) this.targets(list[i]);
  };

  // Einde: where all that holds it with positive Trouw, standing across,
  // could no longer carry it across its Drempel, or its own Trouw has come
  // to nothing (Einde)
  Field.prototype.endsNow = function (o) {
    return o.state === "live" && (this.holdAll(o) < o.th || this.ownY(o) === 0);
  };
  Field.prototype.einde = function (o, yBefore) {
    if (o.kind === "duo") this.endDuo(o, "einde", null, yBefore);
    else this.endSolo(o);
  };

  // what a Solo holds: the Trouw its Zelf holds it with, both sides across
  Field.prototype.holds = function (n) { return pos(n.yS) * n.e.n * n.zs.n; };
  // what a parting lacks: what has crossed its edge since it formed, all it
  // bore away past its Vol less what came in. With one Medium, every Vonk
  // inside it is booked where it stands, so only a Start crosses a Duo's
  // edge. A Solo's own Einde asks nothing: its one Lid is itself (Einde,
  // What it takes)
  Field.prototype.lack = function (o) { return o.kind === "duo" ? o.bore : 0; };
  // the Relaties that meet a parting from outside: here, the bonds its Leden
  // hold with others, its newborns' among them. What its Leden hold with
  // themselves and with each other is inside it, and cannot give it.
  Field.prototype.outside = function (d) {
    var out = [], i;
    for (i = 0; i < d.a.duos.length; i++) if (d.a.duos[i] !== d) out.push(d.a.duos[i]);
    for (i = 0; i < d.b.duos.length; i++) if (d.b.duos[i] !== d) out.push(d.b.duos[i]);
    return out;
  };
  Field.prototype.canPart = function (o) {
    var T = this.lack(o);
    if (!(T > 0)) return true;
    var H = 0, outs = this.outside(o);
    for (var i = 0; i < outs.length; i++) H += pos(duoEps(outs[i]));
    return H >= T;
  };
  // where they cannot give it, it stays bound, however its Binding reads
  Field.prototype.bind = function (d, cause) {
    if (d.bound) return;
    d.bound = true;
    this.stats.bound++;
    this.emit("bound", { duo: d, lack: this.lack(d), cause: cause || "einde" });
  };
  // a parting waiting on what meets it from outside is read again at every
  // Winst and every forming, which are what can bring that
  Field.prototype.retryLack = function () {
    for (var i = 0; i < this.duos.length; i++) {
      var d = this.duos[i];
      if (d.state === "live" && d.ending && d.ending.lack) this.q.push({ t: this.t, prio: RETRY, kind: "end", owner: d });
    }
  };

  // Jᵢ: the sum of its positive Trouw, its Zelf's among them
  Field.prototype.greep = function (n) {
    var g = pos(n.yS);
    for (var i = 0; i < n.duos.length; i++) g += pos(n.duos[i].y);
    return g;
  };

  /* ------------------------------- looks -------------------------------- */
  Field.prototype.wake = function (n, u) {
    // a newborn's first looks fall where its own values put them
    this.q.push({ t: this.t + u / (n.lam0 * n.tijd), prio: LOOK, kind: "look", owner: n });
    this.q.push({ t: this.t + u / n.tijd, prio: LOOK, kind: "zlook", owner: n });
    n.lastZ = this.t;
  };

  // who a Waarneming perceives: its Partners, and every other within reach
  Field.prototype.perceived = function (n) {
    var out = [], i, m;
    for (i = 0; i < n.duos.length; i++) out.push(this.partner(n.duos[i], n));
    for (i = 0; i < this.nodes.length; i++) {
      m = this.nodes[i];
      if (m === n || m.state !== "live" || this.duoOf(n, m)) continue;
      if (this.reachOf(n, m) > n.thetaPi) out.push(m);
    }
    return out;
  };

  // Dᵢ·π̂ᵢⱼ·ζᵢⱼ: its pull on j past what it is used to there
  Field.prototype.pull = function (n, m) {
    var d = this.duoOf(n, m), zeta = 1;
    if (d) { var s = this.side(d, n); zeta = 1 / (1 + this.P.zeta * (Math.abs(d.Z[s]) + Math.abs(d.z[s]))); }
    return n.D * this.reachOf(n, m) * zeta;
  };

  Field.prototype.look = function (n) {
    var P = this.P, t = this.t, i, m;
    this.q.push({ t: t + 1 / (n.lam0 * n.tijd), prio: LOOK, kind: "look", owner: n });
    this.rouwLooks(n);
    var seen = this.perceived(n);
    if (!seen.length) return;
    // χᵢⱼ: its Trek on each by how much of it reaches it, beside an aim by
    // its Zelf's share of its Greep, and its aim in full. Each perceived is
    // owed its share of every look, and the look goes to the one owed most.
    var g = this.greep(n), w = n.aim ? (g > 0 ? pos(n.yS) / g : 0) : 1, shares = [], sum = 0;
    for (i = 0; i < seen.length; i++) {
      m = seen[i];
      var chi = n.D * this.reachOf(n, m) * (n.aim === m ? 1 : w);
      shares.push(chi); sum += chi;
    }
    if (sum > 0) {
      var owed = {}, best = -1, bestV = -Infinity;
      for (i = 0; i < seen.length; i++) {
        m = seen[i];
        var v = (n.owed[m.id] || 0) + shares[i] / sum;
        owed[m.id] = v;
        if (v > bestV) { bestV = v; best = i; }
      }
      m = seen[best];
      owed[m.id] -= 1;
      n.owed = owed;
      this.lookAt(n, m, n.lam0 * n.tijd * shares[best] / sum);
    }
    this.zin(n, seen);
  };

  Field.prototype.lookAt = function (n, m, lam) {
    var P = this.P, t = this.t, d = this.duoOf(n, m), k;
    var pi = this.reachOf(n, m);
    var reading = this.past(m, t - this.delta(n, m)) + P.beta * (n.z - m.z) + this.sigma(n, m, d ? t - d.born : 0) * this.gauss();
    this.stats.looks++;
    n.lookPulse = 1;
    this.looks.push({ from: n, to: m, t: t });
    if (this.looks.length > 200) this.looks.shift();
    if (d) {
      var s = this.side(d, n), E = d.E[s], dt = Math.max(1e-9, t - d.last[s]), was = E > m.th;
      // the Echo closes as much of its gap as its delay filter closes over Δt
      var alpha = Math.exp(-(reading - E) * (reading - E) / (2 * P.alphaW * P.alphaW));
      d.E[s] = E + (1 - Math.exp(-pi * lam * dt)) * (reading - E);
      d.last[s] = t;
      // what it takes in grows its Gewenning, and its Diepte by what is
      // beyond the Gewenning it found, in the sign of the Trouw
      var sg = d.y > 0 ? 1 : d.y < 0 ? -1 : 0, Z0 = Math.abs(d.Z[s]);
      d.Z[s] += P.gZ * sg * pi * alpha;
      d.z[s] += P.gz * sg * pos(pi * alpha - Z0);
      for (k = 0; k < n.duos.length; k++) { var o = n.duos[k]; o.Z[this.side(o, n)] *= 1 - P.kZ; }
      if ((d.E[s] > m.th) !== was) this.targets(n);       // the pole it reads moved
    } else {
      n.first[m.id] = { E: reading, t: t };
      for (k = 0; k < n.duos.length; k++) { var o2 = n.duos[k]; o2.Z[this.side(o2, n)] *= 1 - P.kZ; }
    }
  };

  // its Rouw looks at the present through its keeper's Waarneming, and each
  // look moves its signal by the keeper's Vervorming of it alone
  Field.prototype.rouwLooks = function (n) {
    var dt = Math.max(1e-9, this.t - (n.lastLook || this.t)), c = 1 - Math.exp(-dt * n.tijd);
    n.lastLook = this.t;
    for (var i = 0; i < n.rouw.length; i++) {
      var r = n.rouw[i];
      if (this.t < r.t + r.delta) {
        // its last signals are still arriving: it settles towards what has
        // arrived by now, as an Echo does
        r.E += c * (this.past(r.node, this.t - r.delta) - r.E);
        continue;
      }
      r.xR += n.upsR * this.gauss();
      r.E += c * (r.xR - r.E);
    }
  };

  /* --------------------------- Trek and Zin ---------------------------- */
  Field.prototype.aimAt = function (n, t) {
    var a = n.aims;
    for (var i = a.length - 1; i >= 0; i--) if (a[i].t <= t) return a[i].a;
    return null;
  };
  Field.prototype.setAim = function (n, m) {
    if (n.aim === m) return;
    var prev = n.aim;
    n.aim = m;
    n.aims.push({ t: this.t, a: m });
    if (n.aims.length > 40) n.aims.splice(0, n.aims.length - 40);
    if (prev) {
      var d = this.duoOf(n, prev);
      if (d) this.withdraw(n, prev, d);
    }
    if (m) this.emit("zin", { from: n, to: m });
  };

  // a Zin aims where its pull reaches most, past what it is used to there,
  // and turns only past its Marge; aiming is a crossing like any other
  Field.prototype.zin = function (n, seen) {
    var best = null, bv = -Infinity, cur = n.aim, cv = -Infinity, i, m;
    for (i = 0; i < seen.length; i++) {
      m = seen[i];
      if (!this.duoOf(n, m) && !n.first[m.id]) continue;   // only what it has read can be aimed at
      var v = this.pull(n, m);
      if (m === cur) cv = v;
      if (v > bv) { bv = v; best = m; }
    }
    if (cur && (cur.state !== "live" || cv < n.thetaA)) { this.setAim(n, null); cur = null; cv = -Infinity; }
    if (best && best !== cur && bv > n.thetaA && bv > (cur ? cv + n.etaA : -Infinity)) this.setAim(n, best);
    // two aims that answer, each as the other reads it, form a Relatie
    m = n.aim;
    if (m && !this.duoOf(n, m) && this.aimAt(m, this.t - this.delta(n, m)) === n &&
        this.aimAt(n, this.t - this.delta(m, n)) === m) this.form(n, m);
  };

  // a Scheiding: both withdraw their Zin, each while it still reads the
  // other's aim on it; the Relatie ends at the later withdrawal
  Field.prototype.withdraw = function (n, m, d) {
    var s = this.side(d, n), other = s === "ab" ? "ba" : "ab";
    var reads = this.aimAt(m, this.t - this.delta(n, m)) === n;
    d.away[s] = { t: this.t, reads: reads };
    var o = d.away[other];
    if (reads && o && o.reads && m.aim !== n) this.endDuo(d, "scheiding");
  };

  /* ---------------------- forming, Start, Einde, Rouw --------------------- */
  Field.prototype.makeDuo = function (a, b, y) {
    var P = this.P, id = this.nextId++;
    var d = {
      kind: "duo", id: id, a: a, b: b, y: y, th: P.y0 * pick(P.thetaK, mix(this.seed, id, 21, 0)),
      thNew: pick(P.thetaNew, mix(this.seed, id, 21, 1)),
      E: { ab: 0, ba: 0 }, Z: { ab: 0, ba: 0 }, z: { ab: 0, ba: 0 }, last: { ab: this.t, ba: this.t }, away: {},
      tijd0: pick(P.t0, mix(this.seed, id, 21, 3)), tijd: 1, born: this.t, state: "live", eS: 0, lastZ: this.t,
      ups: pick(P.ups, mix(this.seed, id, 21, 4)),
      gap: [], xh: [], uh: [], gapT: 0, traj: "'", trajT: 0, sparkW: 0, sparkV: 0, flash: 0, Lhat: 0, eta: 0, ending: null,
      Sb: pick(P.SKb, mix(this.seed, id, 21, 2)), yb: y, S: 0, bore: 0, bound: false
    };
    this.readVol(d);
    d.e = eigen(0, d.th, 0);
    d.zs = eigen(0, 0.5 * y, 0);
    return d;
  };
  // its Eigen begins where the pulls of its Leden put it, and its self-Echo there
  Field.prototype.openDuo = function (d) {
    var u = this.bindingDuo(d);
    d.e.x0 = u; d.e.target = u; d.e.t0 = this.t; d.eS = u;
    this.q.push({ t: this.t + mix(this.seed, d.id, 22, 0) / d.tijd0, prio: LOOK, kind: "zlook", owner: d });
  };

  Field.prototype.form = function (n, m) {
    var P = this.P, t = this.t, self = this;
    var d = this.makeDuo(n, m, P.y0);
    // each Echo begins at what its Vermenigvuldiging read, each side's
    // Gewenning and Diepte at what that look took in
    d.E.ab = n.first[m.id] ? n.first[m.id].E : this.past(m, t - this.delta(n, m));
    d.E.ba = m.first[n.id] ? m.first[n.id].E : this.past(n, t - this.delta(m, n));
    var pi = this.reachOf(n, m);
    d.Z.ab = d.Z.ba = P.gZ * pi;
    d.z.ab = d.z.ba = P.gz * pi;
    // the forming is the convergence crossing of Genus: where both already
    // stand across, it joins y⁰ at once
    var res = this.vonk(function () { self.duos.push(d); n.duos.push(d); m.duos.push(d); },
      function () { self.duos.pop(); n.duos.pop(); m.duos.pop(); }, d, "form");
    if (!res) return null;
    this.openDuo(d);
    this.stats.relaties++;
    this.retryLack();
    this.emit("relatie", { duo: d, T: res.T });
    this.after(d);
    return d;
  };

  Field.prototype.keepRouw = function (keeper, lost, d, yR) {
    var s = this.side(d, keeper);
    keeper.rouw.push({
      name: lost.name, id: lost.id, node: lost, y: yR, Z: d.Z[s], z: d.z[s], E: d.E[s], xR: valueAt(lost.e, this.t),
      th: lost.th, t: this.t, delta: this.delta(keeper, lost), ang: keeper.spin + keeper.rouw.length * 2.399963
    });
  };

  // a Relatie ends: it leaves every sum it stood in, and what it held goes
  // into the Medium. Leaving an enmity is a Winst, and waits for Warmte.
  Field.prototype.endDuo = function (d, cause, departed, yBefore) {
    var yR = yBefore === undefined ? d.y : yBefore;
    if (d.state !== "live") return false;
    var self = this, ia = this.duos.indexOf(d), sa = d.a.duos.indexOf(d), sb = d.b.duos.indexOf(d);
    // an ending that leaves its Leden standing apart, an Einde or a
    // Scheiding, takes what it lacks from the Relaties that meet it from
    // outside, each from what it holds, in the measure it holds, into the
    // Medium with its own Verlies; where they cannot give it all, nothing
    // crosses and nothing of theirs is taken. An ending by the end of one of
    // its Leden leaves none standing apart and asks nothing.
    var lack = cause === "einde" || cause === "scheiding" ? this.lack(d) : 0, givers = [], H = 0, i;
    if (lack > 0) {
      var outs = this.outside(d);
      for (i = 0; i < outs.length; i++) {
        var o = outs[i], h = pos(duoEps(o));
        if (h > 0) { givers.push({ o: o, y: o.y, m: o.a.e.n * o.b.e.n + o.e.n * o.zs.n, h: h }); H += h; }
      }
      if (H < lack) {
        d.ending = cause === "scheiding" ? { cause: cause, departed: null, y: yR, lack: true } : null;
        this.bind(d, cause);
        return false;
      }
    }
    var res = this.vonk(function () {
      self.duos.splice(ia, 1); d.a.duos.splice(sa, 1); d.b.duos.splice(sb, 1);
      for (var g = 0; g < givers.length; g++) self.setY(givers[g].o, givers[g].y - lack * givers[g].h / H / givers[g].m);
    }, function () {
      for (var g = givers.length - 1; g >= 0; g--) self.setY(givers[g].o, givers[g].y);
      self.duos.splice(ia, 0, d); d.a.duos.splice(sa, 0, d); d.b.duos.splice(sb, 0, d);
    }, d, "end");
    if (!res) { d.ending = { cause: cause, departed: departed || null, y: yR }; return false; }
    d.state = "gone";
    d.ending = null;
    d.bound = false;
    if (lack > 0) { d.paid = lack; this.stats.paid++; }
    for (i = 0; i < givers.length; i++) if (givers[i].o.state === "live") this.after(givers[i].o);
    d.ended = cause;
    [d.a, d.b].forEach(function (k) {
      if (k !== departed && k.state === "live") self.keepRouw(k, self.partner(d, k), d, yR);
    });
    if (cause === "scheiding") this.stats.scheidingen++;
    else if (cause === "partner") this.stats.partners++;
    else this.stats.eindes++;
    this.emit("end", { duo: d, cause: cause, departed: departed || null, paid: lack });
    if (d.a.state === "live") this.after(d.a);
    if (d.b.state === "live") this.after(d.b);
    return true;
  };

  // a Solo's Einde: every Relatie held with it ends, and its Zelf leaves its
  // Zelf-Rouw, resting in Stilte
  Field.prototype.endSolo = function (n) {
    var ds = n.duos.slice(), self = this;
    for (var i = 0; i < ds.length; i++) this.endDuo(ds[i], "partner", n);
    if (n.duos.length) return;        // an enmity it holds cannot end yet
    var ys = n.yS;
    var res = this.vonk(function () { n.state = "departing"; }, function () { n.state = "live"; }, null);
    if (!res) return;
    n.fade = 0;
    this.stilte.push({ name: n.name, rouw: n.rouw.length, y: ys, t: this.t });
    this.stats.perfectus++;
    this.emit("perfectus", { node: n });
    this.nodes.forEach(function (m) { if (m.aim === n) self.setAim(m, null); });
    this.after(n);
  };

  // Start: what a Relatie holds past its Vol pole, by more than a Drempel
  // of its own, becomes its newborns, one for each such Drempel it carries.
  // A Duo's are bound to both its Leden; a Solo's one Lid is itself, so its
  // newborns are bound to it alone (Start)
  Field.prototype.start = function (d) {
    var P = this.P, solo = d.kind === "solo", eK = solo ? this.holds(d) : duoEps(d), X = eK - P.W;
    var k = Math.floor(X / d.thNew);
    if (k < 1) return;
    var room = P.nMax - this.live();
    if (room < k) { this.stats.unborn += k - Math.max(room, 0); k = room; }
    if (k < 1) return;               // the page has no room: it stays overfull
    var self = this, a = solo ? d : d.a, b = solo ? null : d.b, oldY = this.ownY(d), t = this.t;
    var fa = solo ? 1 : (P.share + a.vol) / (2 * P.share + a.vol + b.vol);
    var kids = [], links = [], i;
    for (i = 0; i < k; i++) {
      var hp = this.birthplace(a, b || a, i);
      var c = this.makeSolo(hp[0], hp[1], null, d);
      c.born = t;
      var ya = X / k * fa, yb = X / k * (1 - fa);
      // its Echo of each parent begins at that one as it first reads it,
      // and its Eigen between them, weighted by its Trouw with each
      var Ea = this.past(a, t - this.delta(c, a)) + this.sigma(c, a, 0) * this.gauss();
      var Eb = b ? this.past(b, t - this.delta(c, b)) + this.sigma(c, b, 0) * this.gauss() : 0;
      var x0 = b ? (ya * Ea + yb * Eb) / (ya + yb) : Ea;
      c.e = eigen(x0, c.th, x0 > c.th ? 1 : 0);
      c.eS = x0;
      c.hist = [{ t0: -1e9, x0: x0, target: x0, T: 1 }];
      var da = this.makeDuo(c, a, ya), db = b ? this.makeDuo(c, b, yb) : null;
      da.E.ab = Ea;
      if (db) db.E.ab = Eb;
      da.E.ba = this.past(c, t) + this.sigma(a, c, 0) * this.gauss();
      if (db) db.E.ba = this.past(c, t) + this.sigma(b, c, 0) * this.gauss();
      kids.push(c); links.push(da);
      if (db) links.push(db);
    }
    var res = this.vonk(function () {
      self.setY(d, oldY * P.W / eK);                // it falls back within its Vol pole
      kids.forEach(function (c) { self.nodes.push(c); });
      links.forEach(function (l) { self.duos.push(l); l.a.duos.push(l); l.b.duos.push(l); });
    }, function () {
      self.setY(d, oldY);
      links.forEach(function (l) { self.duos.pop(); l.b.duos.pop(); l.a.duos.pop(); });
      kids.forEach(function () { self.nodes.pop(); });
    }, d);
    if (!res) return;
    if (!solo) d.bore += eK - duoEps(d);            // what it bore away past its Vol
    this.stats.starts++;
    this.stats.born += k;
    links.forEach(function (l) { self.openDuo(l); });
    kids.forEach(function (c) { self.wake(c, mix(self.seed, c.id, 12, 0)); });
    this.emit("start", { duo: solo ? null : d, parent: d, nodes: kids });
    this.after(d);
    kids.forEach(function (c) { self.after(c); });
  };

  // a newborn's place on the Medium: between its parents, to one side,
  // where no other stands
  Field.prototype.birthplace = function (a, b, i) {
    var mx = (a.hx + b.hx) / 2, my = (a.hy + b.hy) / 2, dx = b.hx - a.hx, dy = b.hy - a.hy;
    var dd = Math.sqrt(dx * dx + dy * dy) || 1, best = null, bestD = -1;
    for (var c = 0; c < 12; c++) {
      var ang = 6.2832 * mix(this.seed, this.nextId, 31 + i, c), r = 0.06 + 0.1 * mix(this.seed, this.nextId, 41 + i, c);
      var x = mx + r * Math.cos(ang), y = my + r * Math.sin(ang);
      if (x < 0.05 || y < 0.05 || x > this.bw - 0.05 || y > this.bh - 0.05) continue;
      var near = Infinity;
      for (var j = 0; j < this.nodes.length; j++) {
        var n = this.nodes[j], ex = n.hx - x, ey = n.hy - y;
        near = Math.min(near, ex * ex + ey * ey);
      }
      if (near > bestD) { bestD = near; best = [x, y]; }
    }
    return best || [mx - dy / dd * 0.06, my + dx / dd * 0.06];
  };

  /* -------------------- a Zelf looks at itself --------------------------- */
  // its self-Echo moves; its Diepte fades and is read again; and Stilte's
  // Trek wears its Trouw by the Wijk it reads there, booked as every
  // change in what is held is booked
  Field.prototype.zlook = function (o) {
    var P = this.P, t = this.t, self = this, i;
    if (o.state !== "live") return;
    this.q.push({ t: t + 1 / o.tijd, prio: LOOK, kind: "zlook", owner: o });
    this.stats.zlooks++;
    var dt = Math.max(1e-9, t - o.lastZ);
    o.lastZ = t;
    var x = valueAt(o.e, t), lean = 0, ups = o.kind === "solo" ? o.ups : o.ups;
    if (o.kind === "solo") {
      // it reads itself through its Rouw, leaning towards where it stands
      var num = 0, den = Math.abs(o.yS);
      for (i = 0; i < o.rouw.length; i++) { num += o.rouw[i].y * (o.rouw[i].E - x); den += Math.abs(o.rouw[i].y); }
      lean = den > 0 ? o.lean * num / den : 0;
      o.zPulse = 1;
    }
    var was = o.eS > o.th;
    o.eS += (1 - Math.exp(-dt * o.tijd)) * (x + lean + ups * this.gauss() - o.eS);
    var y = this.ownY(o);
    // η̂: its least Marge, read towards Naar on the Binding it reads: where
    // it reads itself across, how far past its Drempel it stands, by its
    // own way out or its Zelf's first; where it does not, how far all that
    // holds it could still carry it across (Wijk)
    var eta;
    if (o.eS > o.th) {
      var u1 = o.kind === "solo" ? this.bindingSolo(o, 1) : this.bindingDuo(o, 1);
      eta = pos(Math.min(u1 - o.th, 0.5 * y + pos(u1 - y - o.th)));
    } else eta = pos(this.holdAll(o) - o.th);
    // where nothing it reads carries any Vervorming, no Marge is crossed by it
    var sg = this.sigmaOf(o), L = sg > 0 ? P.Lm * Math.exp(-eta / sg) : eta > 0 ? 0 : P.Lm;
    o.eta = eta; o.Lhat = L;
    this.vonk(function () { self.setY(o, (1 - L) * y); }, function () { self.setY(o, y); }, o, "wear");
    if (o.kind === "solo") {
      var held = this.greep(o), z = 0;
      for (i = 0; i < o.duos.length; i++) {
        var d = o.duos[i], s = this.side(d, o);
        d.z[s] *= 1 - P.kz / (1 + held);
        z += pos(d.z[s]);
      }
      for (i = 0; i < o.rouw.length; i++) z += o.gR * pos(o.rouw[i].z);
      o.z = z;
    }
    this.after(o);
    if (this.endsNow(o)) this.einde(o, y);   // the look that leaves it unable to hold
    else if (!(o.ending && o.ending.lack)) o.bound = false;
  };

  /* ------------------------------ Schrift -------------------------------- */
  // a value written into an Eigen from outside; its self-Echo stays where
  // it stood, so the self-gap opens by what was written
  Field.prototype.schrift = function (n, v) {
    if (!n || n.state !== "live") return;
    var s = n.e, x = valueAt(s, this.t);
    s.wait = null;
    s.x0 = x + v; s.t0 = this.t; s.ver++;
    this.record(n);
    this.plan(n, "e");
    n.flash = 1;
    this.stats.schriften++;
    this.emit("schrift", { node: n, v: v });
  };

  // a Solo's place written from outside, by the viewer's hand, one value at
  // a time as a Schrift is: from then on its Vertraging and its reach to
  // every other are read from where it stands. It stays on the Medium.
  Field.prototype.movePlace = function (n, hx, hy, done) {
    if (!n || n.kind !== "solo" || n.state !== "live") return;
    n.hx = Math.max(0.05, Math.min(this.bw - 0.05, hx));
    n.hy = Math.max(0.05, Math.min(this.bh - 0.05, hy));
    if (done) {
      this.stats.schriften++;
      this.emit("moved", { node: n });
    }
  };

  /* ------------------------------- advance ------------------------------- */
  Field.prototype.advance = function (dt) {
    var end = this.t + dt, guard = 0;
    while (this.q.peek() && this.q.peek().t <= end) {
      if (++guard > 50000) { this.stats.overflow++; break; }
      var ev = this.q.pop();
      this.t = Math.max(this.t, ev.t);
      if (ev.kind === "look") { if (ev.owner.state === "live") this.look(ev.owner); }
      else if (ev.kind === "zlook") this.zlook(ev.owner);
      else if (ev.kind === "cross") this.cross(ev);
      else if (ev.kind === "end") {
        var d = ev.owner;
        if (d.state === "live" && d.ending && d.ending.cause === "scheiding" && (d.a.aim === d.b || d.b.aim === d.a)) {
          d.ending = null;                 // one aims at the other again: there is nothing to part
          if (!this.endsNow(d)) d.bound = false;
        } else if (d.state === "live" && d.ending) this.endDuo(d, d.ending.cause, d.ending.departed, d.ending.y);
      }
    }
    this.t = end;
    this.read(dt);
    this.place(dt);
    for (var i = this.nodes.length - 1; i >= 0; i--) {
      var n = this.nodes[i];
      if (n.state === "departing") { n.fade += dt; if (n.fade > this.P.fadeTime) this.nodes.splice(i, 1); }
      n.flash = Math.max(0, n.flash - dt * 2.5);
      n.zPulse = Math.max(0, n.zPulse - dt * 3);
      n.lookPulse = Math.max(0, n.lookPulse - dt * 6);
      n.zflash = Math.max(0, (n.zflash || 0) - dt * 2);
    }
    for (i = 0; i < this.duos.length; i++) {
      var d = this.duos[i];
      d.flash = Math.max(0, d.flash - dt * 2.5);
      d.zflash = Math.max(0, (d.zflash || 0) - dt * 2);
    }
  };

  /* ------------------------------ Lezingen ------------------------------- */
  // read from outside, moving nothing: each Eigen where it stands, and each
  // Duo's gap ΔE and the trajectory it reads as
  Field.prototype.read = function (dt) {
    var t = this.t, i, d;
    for (i = 0; i < this.nodes.length; i++) {
      var n = this.nodes[i];
      n.ex = valueAt(n.e, t); n.xs = valueAt(n.zs, t);
    }
    for (i = 0; i < this.duos.length; i++) {
      d = this.duos[i];
      d.ex = valueAt(d.e, t);
      d.gapT += dt;
      if (d.gapT >= 0.1) {
        d.gapT -= 0.1;
        d.gap.push(d.E.ab - d.E.ba);
        d.xh.push(d.ex);
        d.uh.push(d.e.target);
        if (d.gap.length > 300) { d.gap.shift(); d.xh.shift(); d.uh.shift(); }
        this.trajectory(d);
      }
    }
  };
  // Zweven while the gap keeps moving, Dood where it has come to rest
  // short of parity, Leven where it runs through parity
  Field.prototype.trajectory = function (d) {
    var g = d.gap, n = g.length;
    if (n < 30) return;
    var now = g[n - 1], then = g[n - 30], lo = Infinity, hi = -Infinity;
    for (var i = n - 30; i < n; i++) { lo = Math.min(lo, g[i]); hi = Math.max(hi, g[i]); }
    var prev = d.traj;
    if (then * now < 0 && Math.abs(then) > 0.1 && Math.abs(now) > 0.1) d.traj = "?";
    else if (hi - lo < 0.03 && Math.abs(now) > 0.05) d.traj = "!";
    else if (prev !== "?" || d.trajT > 6) d.traj = "'";
    if (d.traj !== prev) { d.trajT = 0; this.emit("traj", { duo: d, traj: d.traj }); } else d.trajT += 0.1;
  };

  // the least Marge a Solo stands held by now, read from outside (Modes and their Marge)
  Field.prototype.marge = function (n) {
    if (!n.e.n) return this.holdAll(n) - n.th;
    var u = this.standing(n);
    return Math.min(u - n.th, 0.5 * n.yS + pos(u - n.yS * n.zs.n - n.th));
  };

  /* ---------------------------- drawing room ----------------------------- */
  // where each node is drawn: around its place on the Medium, leaning
  // towards those it holds. Nothing in the Veld reads it.
  Field.prototype.setSize = function (W, Hh) {
    if (W > 0 && Hh > 0) { this.W = W; this.H = Hh; this.place(0); }
  };
  // the drawing follows the Solos: it frames where they stand on the
  // Medium, easing as they are born, end and move, and never closer than
  // two fifths of the Medium. Nothing in the Veld reads it.
  Field.prototype.fitView = function (dt) {
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, m = 0.09, i, n, c;
    for (i = 0; i < this.nodes.length; i++) {
      n = this.nodes[i];
      if (n.state !== "live") continue;
      x0 = Math.min(x0, n.hx); x1 = Math.max(x1, n.hx); y0 = Math.min(y0, n.hy); y1 = Math.max(y1, n.hy);
    }
    if (x0 > x1) { x0 = 0; x1 = this.bw; y0 = 0; y1 = this.bh; m = 0; }
    x0 -= m; x1 += m; y0 -= m; y1 += m;
    if (x1 - x0 < 0.4 * this.bw) { c = (x0 + x1) / 2; x0 = c - 0.2 * this.bw; x1 = c + 0.2 * this.bw; }
    if (y1 - y0 < 0.4 * this.bh) { c = (y0 + y1) / 2; y0 = c - 0.2 * this.bh; y1 = c + 0.2 * this.bh; }
    var v = this.view, k = dt > 0 ? 1 - Math.exp(-dt / 4) : 1;
    if (!v) v = this.view = { x0: 0, y0: 0, x1: this.bw, y1: this.bh };
    v.x0 += (x0 - v.x0) * k; v.x1 += (x1 - v.x1) * k; v.y0 += (y0 - v.y0) * k; v.y1 += (y1 - v.y1) * k;
  };
  Field.prototype.frame = function () {
    var v = this.view || { x0: 0, y0: 0, x1: this.bw, y1: this.bh }, w = v.x1 - v.x0, h = v.y1 - v.y0;
    var s = Math.min(this.W / w, this.H / h);
    return { s: s, ox: (this.W - s * w) / 2 - s * v.x0, oy: (this.H - s * h) / 2 - s * v.y0 };
  };
  Field.prototype.place = function (dt) {
    if (dt > 0 || !this.view) this.fitView(dt);
    var f = this.frame(), s = f.s, nodes = this.nodes, i, j, k, a, c, t = this.t;
    var L = Math.min(this.W, this.H), ease = dt > 0 ? 1 - Math.exp(-dt / 0.9) : 1;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      var grow = Math.max(0.15, Math.min(1, (t - a.born) / 1.2));
      a.r = L * (0.013 + 0.008 * Math.sqrt(Math.min(a.z, 4) / 4)) * grow;
      a.R = a.r + L * 0.012 + Math.ceil(Math.min(a.rouw.length, 36) / 12) * L * 0.008;
      var tx = 0, ty = 0, wsum = 0;
      for (k = 0; k < a.duos.length; k++) {
        var d = a.duos[k], m = this.partner(d, a), wt = pos(d.y);
        tx += wt * (m.hx - a.hx); ty += wt * (m.hy - a.hy); wsum += wt;
      }
      var lean = 0.18 * wsum / (1 + wsum);
      if (wsum > 0) { tx *= lean / wsum; ty *= lean / wsum; }
      var wob = 0.012 * (a.duos.length ? 0.6 : 1);
      tx += wob * Math.sin(t * a.w1 + a.p1);
      ty += wob * Math.cos(t * a.w2 + a.p2);
      a.dx += (tx - a.dx) * ease;
      a.dy += (ty - a.dy) * ease;
      a.x = f.ox + s * (a.hx + a.dx);
      a.y = f.oy + s * (a.hy + a.dy);
    }
    for (var pass = 0; pass < 2; pass++) {
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          c = nodes[j];
          var ex = c.x - a.x, ey = c.y - a.y, dd = Math.sqrt(ex * ex + ey * ey), minD = a.R + c.R + L * 0.008;
          if (dd >= minD) continue;
          if (dd < 1e-6) { ex = 1; ey = 0; dd = 1; }
          var push = (minD - dd) / dd / 2;
          a.x -= ex * push; a.y -= ey * push; c.x += ex * push; c.y += ey * push;
        }
      }
    }
  };

  /* ------------------------------- queries ------------------------------- */
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
  Field.prototype.duoAt = function (x, y) {
    var best = null, bd = 10;
    for (var k = 0; k < this.duos.length; k++) {
      var b = this.duos[k], ax = b.a.x, ay = b.a.y, dx = b.b.x - ax, dy = b.b.y - ay;
      var l2 = dx * dx + dy * dy || 1, u = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / l2));
      var px = ax + u * dx - x, py = ay + u * dy - y, d = Math.sqrt(px * px + py * py);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  };
  // Relaties of three or more bound in Naar that stay connected whichever
  // single Lid wavers: the blocks of the Duos standing across
  Field.prototype.groups = function () {
    var adj = {}, disc = {}, low = {}, clock = 0, stack = [], out = [], i, k, b;
    for (k = 0; k < this.duos.length; k++) {
      b = this.duos[k];
      if (!b.e.n) continue;
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
            if (members.length >= 3) out.push({ members: members });
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

  var api = { Field: Field, DEFAULTS: DEFAULTS, valueAt: valueAt, duoEps: duoEps };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.VeldSim = api;
})(typeof window !== "undefined" ? window : this);
