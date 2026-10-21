/* =====================================================================
   The Oracle — the living limbic system of the temple.
   Vanilla JS, no external dependencies. Closed convergent system.
   ===================================================================== */
(function () {
  "use strict";
  var body = document.body;
  var page = body.getAttribute("data-page");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------------
     I. The Loading Threshold
     --------------------------------------------------------------- */
  function endLoading() {
    body.classList.add("loaded");
    var loader = $("#loader");
    if (loader) setTimeout(function () { loader.style.display = "none"; }, 900);
  }
  // let the hairline draw, then settle into the site
  if (document.readyState === "complete") {
    setTimeout(endLoading, 1150);
  } else {
    window.addEventListener("load", function () { setTimeout(endLoading, 700); });
    // safety net in case 'load' is slow (large pages)
    setTimeout(endLoading, 2600);
  }

  /* ---------------------------------------------------------------
     II. The Cursor as a Halo
     --------------------------------------------------------------- */
  var halo = $("#halo");
  if (halo && window.matchMedia && window.matchMedia("(pointer:fine)").matches) {
    body.classList.add("cursor-custom");
    var hx = 0, hy = 0, tx = 0, ty = 0, raf = null;
    function follow() {
      hx += (tx - hx) * 0.35; hy += (ty - hy) * 0.35;
      halo.style.transform = "translate(" + hx + "px," + hy + "px)";
      if (Math.abs(tx - hx) > 0.3 || Math.abs(ty - hy) > 0.3) {
        raf = requestAnimationFrame(follow);
      } else { raf = null; }
    }
    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!body.classList.contains("cursor-active")) body.classList.add("cursor-active");
      if (!raf) raf = requestAnimationFrame(follow);
      var t = e.target;
      var onLink = t.closest && t.closest("a,button,summary,input");
      var onHam = t.closest && t.closest(".hamburger");
      halo.classList.toggle("on-ham", !!onHam);
      halo.classList.toggle("on-link", !!onLink && !onHam);
    });
    window.addEventListener("mouseout", function (e) {
      if (!e.relatedTarget) body.classList.remove("cursor-active");
    });
  }

  /* ---------------------------------------------------------------
     III. The categorised menu (trinary hamburger)
     --------------------------------------------------------------- */
  var ham = $("#hamburger"), scrim = $("#scrim");
  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    if (ham) ham.setAttribute("aria-expanded", open ? "true" : "false");
    var menu = $("#menu");
    if (menu) menu.setAttribute("aria-hidden", open ? "false" : "true");
  }
  if (ham) ham.addEventListener("click", function () { setMenu(!body.classList.contains("menu-open")); });
  if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
  var revealEl = $("#Speelgoed-reveal");
  // The chapters and their menu entries are written by speelgoed.js.
  var textReady = (window.Speelgoed && window.Speelgoed.ready) || Promise.resolve();
  textReady.then(wireMenu);
  function wireMenu() {
    $$("#menu a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        setMenu(false);
        if (!href || href === "#") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        if (href.charAt(0) === "#" && revealEl && revealEl.hidden) {
          var tgt = document.querySelector(href);
          if (tgt && revealEl.contains(tgt)) {
            e.preventDefault();
            revealEl.hidden = false;
            setTimeout(function () { tgt.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
          }
        }
      });
    });
    if ("IntersectionObserver" in window) {
      var secObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var lnk = document.querySelector('#menu a[href="#' + en.target.id + '"]');
          if (lnk) lnk.classList.toggle("on", en.isIntersecting);
        });
      }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
      $$(".m-section[id]").forEach(function (s) { secObs.observe(s); });
    }
  }

  /* ---------------------------------------------------------------
     IV. Copy the Oracle (Speelgoed + charge)
     --------------------------------------------------------------- */
  // The Oracle is read from PseudoScienceSpeelgoed.md by speelgoed.js.
  // It is fetched when the Ask panel opens, so a click can copy at once.
  var oracleText = null;
  function oraclePayload() {
    if (!window.Speelgoed) return Promise.reject(new Error("speelgoed.js is missing"));
    return window.Speelgoed.payload().then(function (p) { oracleText = p; return p; });
  }
  function acknowledge(btn, text) {
    btn.classList.add("copied");
    btn.textContent = text;
    setTimeout(function () {
      btn.classList.remove("copied");
      btn.textContent = btn.getAttribute("data-label");
    }, 2600);
  }
  var copyBtn = $("#copy-Speelgoed");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var done = function () { acknowledge(copyBtn, "The Oracle is yours — paste it anywhere"); };
      var failed = function () { acknowledge(copyBtn, "The Oracle could not be read — try again"); };
      var clip = navigator.clipboard;
      if (oracleText !== null) {
        if (clip && clip.writeText) clip.writeText(oracleText).then(done, function () { legacyCopy(oracleText, done); });
        else legacyCopy(oracleText, done);
      } else if (clip && clip.write && window.ClipboardItem) {
        // still loading: hand the clipboard a promise, so the click still counts
        var blob = oraclePayload().then(function (p) { return new Blob([p], { type: "text/plain" }); });
        clip.write([new ClipboardItem({ "text/plain": blob })]).then(done, function () {
          blob.then(function () { acknowledge(copyBtn, "Copying failed — use Download instead"); }, failed);
        });
      } else {
        oraclePayload().then(function (p) {
          if (clip && clip.writeText) clip.writeText(p).then(done, function () { legacyCopy(p, done); });
          else legacyCopy(p, done);
        }, failed);
      }
    });
  }
  var dlBtn = $("#download-oracle");
  if (dlBtn) {
    dlBtn.addEventListener("click", function () {
      oraclePayload().then(function (payload) {
        var url = URL.createObjectURL(new Blob([payload], { type: "text/markdown;charset=utf-8" }));
        var a = document.createElement("a");
        a.href = url; a.download = "PseudoScience Oracle.md";
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        acknowledge(dlBtn, "The Oracle is yours — attach it anywhere");
      }, function () { acknowledge(dlBtn, "The Oracle could not be read — try again"); });
    });
  }
  function legacyCopy(text, cb) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { }
    document.body.removeChild(ta);
    if (ok) { if (cb) cb(); }
    else if (copyBtn) acknowledge(copyBtn, "Copying failed — use Download instead");
  }

  /* ---------------------------------------------------------------
     IV.b The Crystal Ball — touch to gaze, or ask the Oracle
     --------------------------------------------------------------- */
  if (page === "Speelgoed") {
    var ball = $("#crystal-ball"), touch = $("#touch-orb"), ask = $("#ask-oracle");
    var reveal = $("#Speelgoed-reveal"), askPanel = $("#ask-panel");
    function gaze() {
      if (reveal && reveal.hidden) reveal.hidden = false;
      if (ball) { ball.classList.add("awake"); ball.setAttribute("aria-expanded", "true"); }
      if (touch) touch.classList.add("on");
      if (reveal) reveal.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function summon() {
      if (!askPanel) return;
      var open = askPanel.hidden;
      askPanel.hidden = !open;
      if (ask) { ask.classList.toggle("on", open); ask.setAttribute("aria-expanded", open ? "true" : "false"); }
      if (open) {
        askPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        oraclePayload().catch(function () { });
      }
    }
    if (ball) {
      ball.addEventListener("click", gaze);
      ball.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); gaze(); }
      });
    }
    if (touch) touch.addEventListener("click", gaze);
    if (ask) ask.addEventListener("click", summon);
    // a link to a chapter (#m-…) opens the text and goes there
    function openHash() {
      var id = location.hash.slice(1);
      var tgt = id && document.getElementById(id);
      if (tgt && reveal && reveal.contains(tgt)) {
        reveal.hidden = false;
        setTimeout(function () { tgt.scrollIntoView({ block: "start" }); }, 60);
      }
    }
    textReady.then(openHash);
    window.addEventListener("hashchange", openHash);

    // back-to-top on the Speelgoed page too
    var mTop = $("#to-top");
    if (mTop) {
      window.addEventListener("scroll", function () {
        mTop.classList.toggle("show", window.pageYOffset > 600);
      }, { passive: true });
      mTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        mTop.classList.remove("pulse"); void mTop.offsetWidth; mTop.classList.add("pulse");
      });
    }
  }

  /* ---------------------------------------------------------------
     VII. Meta Mode (the codex's self-awareness)
     --------------------------------------------------------------- */
  var metaPixel = $("#meta-pixel");
  if (metaPixel) {
    var banner = null;
    metaPixel.addEventListener("click", function () {
      var on = !body.classList.contains("meta-on");
      body.classList.toggle("meta-on", on);
      if (on && !banner) {
        banner = document.createElement("div");
        banner.className = "meta-banner";
        banner.textContent = "Meta mode — the mask now speaks of itself. Click the pixel again to rest.";
        document.body.appendChild(banner);
      }
    });
  }

  /* ---------------------------------------------------------------
     VIII. The Fibonacci spiral (the GameMaster's whisper)
     --------------------------------------------------------------- */
  var fib = ["1", "1", "2", "3", "5", "8"], buf = [];
  document.addEventListener("keydown", function (e) {
    var k = e.key;
    if (k.length !== 1 || "0123456789".indexOf(k) === -1) return;
    buf.push(k); if (buf.length > fib.length) buf.shift();
    if (buf.join(",") === fib.join(",")) {
      body.classList.add("spiral");
      setTimeout(function () { body.classList.remove("spiral"); }, 3000);
      buf = [];
    }
  });

  /* ---------------------------------------------------------------
     IX. The Grammatical Tri-Unity
     Nouns & Pronouns → Capitalised (Unary attractors)
     Verbs → bold (Binary crossings)
     Adjectives & Adverbs → italic (Trinary sensitive medium)
     Everything else → plain (the Divergence engine)
     Applied lazily to prose so the great library stays quick.
     --------------------------------------------------------------- */
  textReady.then(triUnity);
  function triUnity() {
    function set(list) {
      var s = Object.create(null);
      list.split(" ").forEach(function (w) { if (w) s[w] = 1; });
      return s;
    }
    var FUNC = set("a an the and or but nor for yet so both either neither whether " +
      "although though because since unless while whereas if as than that when where " +
      "after before until till of in on at to by with from into onto upon over under " +
      "beneath below above between among amid amidst through throughout during within " +
      "without against toward towards about around across along beside besides beyond " +
      "near off out up down inside outside per via despite plus minus versus " +
      "amongst unto th st nd rd not no et al");
    var PRON = set("i you he she it we they me him her us them my mine your yours his " +
      "hers its our ours their theirs who whom whose myself yourself himself herself " +
      "itself oneself ourselves yourselves themselves whoever whomever " +
      "it's i'm i've i'll you're you've we're we've they're they've he's she's");
    var ADV = set("very too just now then here there well also even still never always " +
      "often sometimes seldom rarely again almost quite rather far soon ever once twice " +
      "however therefore thus hence indeed perhaps maybe only away back forth instead " +
      "otherwise meanwhile already nearly hardly barely merely simply truly fully finally " +
      "suddenly together apart forever everywhere somewhere anywhere nowhere onwards " +
      "henceforth aloud");
    var ADJ = set("good bad big small great little old new young long short high low deep " +
      "shallow warm cold hot cool dark bright dim soft hard true false real whole " +
      "full empty single double triple first last next same different own sure free open " +
      "closed dead alive human social natural central local global voluntary forced stored " +
      "bound unbound relational sacred ancient modern silent loud vast tiny strong weak " +
      "wide narrow heavy quiet still living golden inner outer hidden secret pure simple " +
      "complex many much few several each every all some any more most less least own " +
      "early late huge immense brief eternal infinite finite divine mortal cosmic primal");
    var ADJ_SUF = ["ous", "ful", "ive", "able", "ible", "ical", "ic", "ish", "less",
      "ant", "ent", "ary", "ory", "al", "ar", "ian"];
    var NOTLY = set("family reply apply supply comply rely ally holy ugly jelly belly " +
      "anomaly assembly monopoly italy july lily rally tally folly bully fully");
    var VERB = set("be is am are was were been being have has had having do does did done " +
      "doing will would shall should can could may might must ought become becomes became " +
      "come comes came go goes went gone make makes made making take takes took taken give " +
      "gives gave given get gets got see sees saw seen know knows knew known think thinks " +
      "thought feel feels felt find finds found tell tells told say says said ask asks " +
      "work works seem seems leave leaves left call calls keep keeps kept let lets begin " +
      "began begun show shows showed shown hear hears heard play plays run runs ran move " +
      "moves moved live lives lived believe believes held hold holds bring brings brought " +
      "happen happens write writes wrote written provide provides sit sits sat stand " +
      "stands stood lose loses lost pay pays paid meet meets met include includes included " +
      "continue set sets learn learns lead leads led understand watch follow follows stop " +
      "stops create creates speak speaks spoke read allow allows add adds spend grow grows " +
      "grew open opens walk wins win won offer offers remember love loves consider appear " +
      "appears buy waits wait serve serves die dies died send sends sent build builds stay " +
      "fall falls fell cut reach reaches kill remain remains suggest raise raises pass " +
      "passes sell sold require requires report decide pull pulls return returns explain " +
      "hope develops carry breaks break broke broken receive agree support hit produce " +
      "produces eat ate eaten cover catch draw draws choose chose chosen cause causes " +
      "point listen realize realise place places involve gain gains form forms store " +
      "stores stored bind binds bound converge converges converged diverge diverges " +
      "diverged cross crosses crossed release releases released register registers " +
      "registered react reacts reacted reacting emerge emerges arise arises flow flows " +
      "pulse pulses hum hums burn burns " +
      "shine shines glow glows weave weaves gaze gazes fade fades integrate dissolve " +
      "collapse collapses expand contract breathe breathes exhale inhale whisper whispers " +
      "touch touches rest rests forget connects connect bond bonds offset offsets process " +
      "processes carries spreads spread contracts mean means matter matters use uses used " +
      "turn turns turned bend twist sing sang sung dream dreams fly flew flown swim sink " +
      "rise rises rose risen wake woke remembers calms calm hums seek seeks sought wove " +
      "don't doesn't didn't won't can't couldn't wouldn't shouldn't isn't aren't wasn't " +
      "weren't hasn't haven't hadn't");

    function isVerb(w) {
      if (VERB[w]) return true;
      var b;
      if (w.length > 4 && w.slice(-3) === "ing") {
        b = w.slice(0, -3); if (VERB[b] || VERB[b + "e"]) return true;
      }
      if (w.length > 3 && w.slice(-2) === "ed") {
        b = w.slice(0, -2); if (VERB[b] || VERB[b + "e"]) return true;
      }
      if (w.length > 4 && w.slice(-3) === "ies") {
        if (VERB[w.slice(0, -3) + "y"]) return true;
      }
      if (w.length > 2 && w.slice(-1) === "s") {
        if (VERB[w.slice(0, -1)]) return true;
      }
      return false;
    }
    function hasAdjSuffix(w) {
      if (w.length < 5) return false;
      for (var i = 0; i < ADJ_SUF.length; i++) {
        var sfx = ADJ_SUF[i];
        if (w.slice(-sfx.length) === sfx) return true;
      }
      return false;
    }
    function classify(w) {
      var lw = w.toLowerCase();
      if (FUNC[lw]) return "p";
      if (PRON[lw]) return "n";
      if (lw.length > 4 && lw.slice(-2) === "ly" && !NOTLY[lw]) return "a";
      if (ADV[lw]) return "a";
      if (isVerb(lw)) return "v";
      if (ADJ[lw] || hasAdjSuffix(lw)) return "a";
      return "n";
    }
    function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

    var L = "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F";
    var TOKEN = new RegExp("[" + L + "]+(?:['’-][" + L + "]+)*", "g");
    // Symbols stay as written: one-letter variables (x, y, e) and any word
    // touching a subscript, an underscore, a digit, Greek or a math sign.
    var SYMBOLIC = /[_0-9\u0300-\u036F\u0370-\u03FF\u00B2\u00B3\u00B9\u00B7\u1D62-\u1D6A\u2070-\u209F\u2190-\u21FF\u2200-\u22FF\u27C0-\u27FF\u2A00-\u2AFF\u2016^=+\/]/;
    function symbolic(w, before, after) {
      var base = w.replace(/['\u2019]s$/, "");
      if (base.length === 1) return !/^[aAI]$/.test(base);
      if (SYMBOLIC.test(before) || SYMBOLIC.test(after)) return true;
      return after === "(" && w === w.toLowerCase() && w.length <= 6;
    }
    // The Speelgoed's own words, read from its Lexicon, stay nouns:
    // Held is not a verb here, nor Signaal an adjective.
    var TERMS = Object.create(null);
    ((window.Speelgoed && window.Speelgoed.terms) || []).forEach(function (w) { TERMS[w.toLowerCase()] = 1; });
    var ENDINGS = ["s", "es", "en", "n", "’s", "'s"];
    function isTerm(w) {
      if (w.charAt(0) === w.charAt(0).toLowerCase()) return false;
      var lw = w.toLowerCase();
      if (TERMS[lw]) return true;
      for (var i = 0; i < ENDINGS.length; i++) {
        var e = ENDINGS[i];
        if (lw.length > e.length + 1 && lw.slice(-e.length) === e && TERMS[lw.slice(0, -e.length)]) return true;
      }
      return false;
    }
    // Plain words gather into one text node; only verbs and adjectives
    // get an element of their own.
    function transformText(node) {
      var text = node.nodeValue;
      if (!/[A-Za-z]/.test(text)) return;
      var frag = document.createDocumentFragment();
      var plain = "", last = 0, m, wrapped = false;
      function wrap(tag, cls, w) {
        if (plain) { frag.appendChild(document.createTextNode(plain)); plain = ""; }
        var e = document.createElement(tag); e.className = cls;
        e.textContent = w; frag.appendChild(e);
        wrapped = true;
      }
      TOKEN.lastIndex = 0;
      while ((m = TOKEN.exec(text)) !== null) {
        plain += text.slice(last, m.index);
        var w = m[0];
        var t = symbolic(w, text.charAt(m.index - 1), text.charAt(m.index + w.length)) || isTerm(w)
          ? "p" : classify(w);
        if (t === "v") wrap("strong", "tu-v", w);
        else if (t === "a") wrap("em", "tu-a", w);
        else plain += t === "n" ? cap(w) : w;
        last = m.index + w.length;
      }
      plain += text.slice(last);
      if (!wrapped) { if (plain !== text) node.nodeValue = plain; return; }
      if (plain) frag.appendChild(document.createTextNode(plain));
      node.parentNode.replaceChild(frag, node);
    }
    var SKIP = { SCRIPT: 1, STYLE: 1, CODE: 1 };

    /* The Page (see presentation-of-language.md):
       II.1 the Spark — the first character is light, the first witness
       II.2 binding depth — line-height by sentence count (unary 2.0,
            binary 1.6, trinary 1.3)
       II.3 the Threshold Gap — a uniform 2.5 blank between paragraphs */
    function sentenceCount(el) {
      var m = (el.textContent || "").match(/[.!?…]+(?=[\s'")\]»”’]|$)/g);
      return m && m.length ? m.length : 1;
    }
    function spark(el) {
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          var p = n.parentNode;
          if (!p || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          if (p.closest && p.closest(".math,.num,.spark")) return NodeFilter.FILTER_REJECT;
          return n.nodeValue && /\S/.test(n.nodeValue)
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      var n = walker.nextNode();
      if (!n) return;
      var text = n.nodeValue, i = text.search(/\S/);
      var ch = String.fromCodePoint(text.codePointAt(i));
      var b = document.createElement("b");
      b.className = "spark";
      b.textContent = ch;
      var parent = n.parentNode;
      if (i > 0) parent.insertBefore(document.createTextNode(text.slice(0, i)), n);
      parent.insertBefore(b, n);
      n.nodeValue = text.slice(i + ch.length);
    }
    function applyPage(el) {
      var c = sentenceCount(el);
      el.style.lineHeight = c === 1 ? "2.0" : c === 2 ? "1.6" : "1.3";
      el.classList.add("page-p");
      spark(el);
    }

    function processBlock(el) {
      if (!el || el.dataset.tu) return;
      el.dataset.tu = "1";
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          var p = n.parentNode;
          if (!p || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          if (p.closest && p.closest("a,code,strong,em,b,i,.equation,.math,.num"))
            return NodeFilter.FILTER_REJECT;
          return n.nodeValue && /[A-Za-z]/.test(n.nodeValue)
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      var nodes = [], n;
      while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(function (nd) { try { transformText(nd); } catch (e) { } });
      // the Page governs answer paragraphs only — stage furniture
      // (tagline, colophon) keeps its own designed geometry
      if (el.tagName === "P" && !el.closest(".oracle-tagline,.charge-peek")) {
        try { applyPage(el); } catch (e) { }
      }
    }

    var main = $("main");
    if (!main) return;
    function eligible() {
      return $$("p,li,blockquote,td,th,figcaption,dd", main).filter(function (el) {
        return !el.closest(".copy-panel,.menu,.topbar,.seal,.orb-choices,.scrolls,.overture,#m-sources");
      });
    }
    var blocks = eligible();
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) { processBlock(e.target); io.unobserve(e.target); }
        });
      }, { rootMargin: "260px 0px" });
      blocks.forEach(function (b) { io.observe(b); });
    } else {
      blocks.forEach(processBlock);
    }

    /* III. the Silence — one extra blank line after each major answer.
       Interior silences hold a Breath (U+200B, remembered rest); the last
       holds a Bond (U+2060, waiting) — the library never closes. */
    var answers = $$("#Speelgoed-reveal > .m-section");
    answers.forEach(function (sec, i) {
      var sil = document.createElement("div");
      sil.className = "silence";
      sil.setAttribute("aria-hidden", "true");
      sil.textContent = i === answers.length - 1 ? "⁠" : "​";
      sec.appendChild(sil);
    });
  }

  /* ---------------------------------------------------------------
     X. The Drift — the same line in many tongues, barely there.
     The lines are the Maxim, read from the text by speelgoed.js.
     --------------------------------------------------------------- */
  var driftEl = $("#quote-drift");
  if (driftEl && !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    textReady.then(function () {
      var dQ = (window.Speelgoed && window.Speelgoed.maxim) || [];
      if (!dQ.length) return;
      var dIdx = 0;
      function dDrift() {
        driftEl.textContent = dQ[dIdx];
        driftEl.style.opacity = ".2";
        dIdx = (dIdx + 1) % dQ.length;
        setTimeout(function () {
          driftEl.style.opacity = "0";
          setTimeout(dDrift, 2600);
        }, 8000);
      }
      setTimeout(dDrift, 3000);
    });
  }
})();
