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
      var onLink = t.closest && t.closest("a,button,.chip,.tile,summary,input,.wildcard");
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
  $$("#menu a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  /* ---------------------------------------------------------------
     IV. Copy the Oracle (model + charge)
     --------------------------------------------------------------- */
  var copyBtn = $("#copy-model");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var srcEl = $("#model-source"), prEl = $("#oracle-prompt");
      if (!srcEl) return;
      var model = JSON.parse(srcEl.textContent);
      var prompt = prEl ? JSON.parse(prEl.textContent) : "";
      var payload = (prompt ? prompt + "\n\n" : "") + model;
      var done = function () {
        copyBtn.classList.add("copied");
        copyBtn.textContent = "The Oracle is yours — paste it anywhere";
        setTimeout(function () {
          copyBtn.classList.remove("copied");
          copyBtn.textContent = copyBtn.getAttribute("data-label") || "Copy the Oracle";
        }, 2600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(payload).then(done, function () { legacyCopy(payload, done); });
      } else { legacyCopy(payload, done); }
    });
  }
  function legacyCopy(text, cb) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { }
    document.body.removeChild(ta); if (cb) cb();
  }

  /* ---------------------------------------------------------------
     IV.b The Crystal Ball — touch to gaze, or ask the Oracle
     --------------------------------------------------------------- */
  if (page === "model") {
    var ball = $("#crystal-ball"), touch = $("#touch-orb"), ask = $("#ask-oracle");
    var reveal = $("#model-reveal"), askPanel = $("#ask-panel");
    function gaze() {
      if (reveal && reveal.hidden) reveal.hidden = false;
      if (ball) { ball.classList.add("awake"); ball.setAttribute("aria-expanded", "true"); }
      if (touch) touch.classList.add("on");
      if (reveal) reveal.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function summon() {
      if (askPanel) { askPanel.hidden = false; askPanel.scrollIntoView({ behavior: "smooth", block: "center" }); }
      if (ask) ask.classList.add("on");
    }
    if (ball) {
      ball.addEventListener("click", gaze);
      ball.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); gaze(); }
      });
    }
    if (touch) touch.addEventListener("click", gaze);
    if (ask) ask.addEventListener("click", summon);

    // topology — collapsible number blocks (the deeper ball)
    $$(".topo-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var block = btn.closest(".topo-block");
        var open = block.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    // constellation stars surface a veiled number, then the anchor scrolls to it
    $$(".star").forEach(function (s) {
      s.addEventListener("click", function () {
        var sel = s.getAttribute("href");
        var block = sel && document.querySelector(sel);
        if (block) {
          block.classList.add("open");
          var tb = block.querySelector(".topo-toggle");
          if (tb) tb.setAttribute("aria-expanded", "true");
          s.classList.add("lit");
        }
      });
    });
    // back-to-top on the model page too
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
     V. Codex — binding measure, convergence meter, rings, to-top
     --------------------------------------------------------------- */
  if (page === "codex") {
    var bindingFill = $("#binding-fill");
    var convMeter = $("#conv-meter"), convFill = $("#conv-fill");
    var toTop = $("#to-top");
    var lastY = window.pageYOffset, lastT = Date.now();
    var franticTimer = null, restTimer = null;

    function scrollProgress() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      return max > 0 ? Math.min(1, window.pageYOffset / max) : 0;
    }
    function onScroll() {
      var p = scrollProgress();
      if (bindingFill) bindingFill.style.height = (p * 100).toFixed(2) + "%";
      if (convFill) convFill.style.width = (p * 100).toFixed(2) + "%";
      if (toTop) toTop.classList.toggle("show", window.pageYOffset > 600);

      // mood ring: frantic if scrolling fast
      var now = Date.now(), dy = Math.abs(window.pageYOffset - lastY), dt = now - lastT || 1;
      var speed = dy / dt; // px per ms
      lastY = window.pageYOffset; lastT = now;
      if (convMeter) {
        convMeter.classList.remove("resting");
        if (speed > 2.4) {
          convMeter.classList.add("frantic");
          clearTimeout(franticTimer);
          franticTimer = setTimeout(function () { convMeter.classList.remove("frantic"); }, 700);
        }
        clearTimeout(restTimer);
        restTimer = setTimeout(function () {
          convMeter.classList.remove("frantic");
          if (window.pageYOffset > 300) convMeter.classList.add("resting");
        }, 6000);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        toTop.classList.remove("pulse"); void toTop.offsetWidth; toTop.classList.add("pulse");
      });
    }

    // current ring glows (warm 37-degree core)
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          en.target.classList.toggle("glow", en.isIntersecting);
          en.target.classList.toggle("active", en.isIntersecting);
        });
      }, { rootMargin: "-30% 0px -55% 0px" });
      $$(".category").forEach(function (c) { io.observe(c); });
    }

    // search — a word whispered to the library
    var search = $("#codex-search"), count = $("#search-count");
    if (search) {
      var entries = $$(".entry");
      var cats = $$(".category");
      search.addEventListener("input", function () {
        var q = search.value.trim().toLowerCase();
        if (!q) {
          entries.forEach(function (e) { e.style.display = ""; });
          cats.forEach(function (c) { c.style.display = ""; });
          if (count) count.textContent = "";
          return;
        }
        var found = 0;
        cats.forEach(function (c) {
          var any = false;
          $$(".entry", c).forEach(function (e) {
            var hit = e.textContent.toLowerCase().indexOf(q) !== -1;
            e.style.display = hit ? "" : "none";
            if (hit) { any = true; found++; }
          });
          // also match category title
          var ct = $(".cat-head h2", c);
          if (ct && ct.textContent.toLowerCase().indexOf(q) !== -1) any = true;
          c.style.display = any ? "" : "none";
        });
        if (count) count.textContent = found + (found === 1 ? " crossing" : " crossings");
      });
    }
  }

  /* ---------------------------------------------------------------
     VI. The Poem — lines spoken as you scroll
     --------------------------------------------------------------- */
  if (page === "poem") {
    var lines = $$(".poem-line");
    if ("IntersectionObserver" in window) {
      var po = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); po.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });
      lines.forEach(function (l) { po.observe(l); });
    } else {
      lines.forEach(function (l) { l.classList.add("in"); });
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
     VIII. The Fibonacci spiral (the converger's whisper)
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
  (function triUnity() {
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
      "amongst unto th st nd rd not no");
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

    var TOKEN = /[A-Za-z]+(?:['’-][A-Za-z]+)*/g;
    function transformText(node) {
      var text = node.nodeValue;
      if (!/[A-Za-z]/.test(text)) return;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      TOKEN.lastIndex = 0;
      while ((m = TOKEN.exec(text)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var w = m[0], t = classify(w);
        if (t === "v") {
          var st = document.createElement("strong"); st.className = "tu-v";
          st.textContent = w; frag.appendChild(st);
        } else if (t === "a") {
          var em = document.createElement("em"); em.className = "tu-a";
          em.textContent = w; frag.appendChild(em);
        } else if (t === "n") {
          frag.appendChild(document.createTextNode(cap(w)));
        } else {
          frag.appendChild(document.createTextNode(w));
        }
        last = m.index + w.length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
    var SKIP = { SCRIPT: 1, STYLE: 1, CODE: 1 };
    function processBlock(el) {
      if (!el || el.dataset.tu) return;
      el.dataset.tu = "1";
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          var p = n.parentNode;
          if (!p || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          if (p.closest && p.closest(".math,.tu-v,.tu-a,.cat-num,.num,.topo-mark,.tile-num,.star-n"))
            return NodeFilter.FILTER_REJECT;
          return n.nodeValue && /[A-Za-z]/.test(n.nodeValue)
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      var nodes = [], n;
      while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(function (nd) { try { transformText(nd); } catch (e) { } });
    }
    window.__triProcess = function (scope) {
      $$("p,li,blockquote,td,th,figcaption,dd,.poem-line", scope).forEach(processBlock);
    };

    var main = $("main");
    if (!main) return;
    function eligible() {
      return $$("p,li,blockquote,td,th,figcaption,dd,.poem-line", main).filter(function (el) {
        return !el.closest(".copy-panel,.menu,.topbar,.seal,.ring-index,.honeycomb,.search-wrap,.cat-head,.orb-choices,.constellation");
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

    // style freshly-revealed regions at once (model reveal, opened topology)
    ["#crystal-ball", "#touch-orb", "#ask-oracle"].forEach(function (s) {
      var el = $(s);
      if (el) el.addEventListener("click", function () {
        setTimeout(function () { window.__triProcess($("#model-reveal") || main); }, 30);
      });
    });
    $$(".topo-toggle").forEach(function (b) {
      b.addEventListener("click", function () {
        var blk = b.closest(".topo-block");
        setTimeout(function () { window.__triProcess(blk); }, 30);
      });
    });
  })();
})();
