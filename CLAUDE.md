# CLAUDE.md

Guidance for working in this repository: the PseudoScience Speelgoed by Mark Joseph Antonius Knippenberg / ScepraX, published at pseudoscience.earth (GitHub Pages; Markdown files are served as `.html`).

The Speelgoed is a constructed modelling language for relationships, not a scientific theory. Its "Octaaf" documents ground it in real science and must withstand expert critique. **Truth comes first.** When the science weakens a claim, the document says so.

---

## Repository map

| Path | What it is |
|---|---|
| `PseudoScienceSpeelgoed.md` | The canonical Speelgoed text, and its **only copy** (see *Single source of truth* below). It comes in four Schriften (`##`): I Relatiegids, II Formal Structure, III Weefsel, IV Mensen, each holding its chapters (`###`), then the Sources in a `<details>` block. |
| `index.html` | The site, as a shell. When GitHub Pages builds the site, Jekyll writes the `.md` into `#speelgoed-text` (the front matter and the `include_relative` line do this), so crawlers and readers without JavaScript get the full text. Never paste text into it. It also holds `oracle-prompt` (the charge; the visible charge is written from it), JSON-LD dates, and `article:modified_time`. |
| `speelgoed.js` | Arranges the text on the page, and reads everything else from the same source: Schriften, chapters, menu, equations, tables, the footer Maxim and the Lexicon words. A ```` ```mermaid ```` flowchart in the text is drawn as an SVG in the site's style (graph/flowchart, nodes with labels, `-->`, `-.->` and `==>` arrows with `|labels|`; anything else stays as source text). The Oracle prompt is the charge followed by the Oracle copy. Kept ids, Schriften and figures are configured at the top of the file. |
| `PseudoScienceSpeelgoed - Oracle.txt` | The **Oracle copy**: the Introduction and Schrift I whole, its Lexicon included, without the Checks; the Formal Structure, the Weefsel, Mensen and the Sources stay out. Readers attach it as a file, so it has no length target, but it carries nothing a chat model doesn't need. It is generated; never edit it by hand. |
| `_tools/oracle.py` | Makes the Oracle copy from the `.md`: `python _tools/oracle.py` (`--report` lists what each part keeps). What it keeps is set by `KEEP` and `DROP` at its top. |
| `scripts.js`, `styles.css` | Site effects and styling. `scripts.js` styles prose at runtime (the Tri-Unity: nouns capitalised, verbs bold, adjectives and adverbs italic), so no copy of the text carries that formatting. |
| `lib/marked.min.js` | marked 12.0.2 (MIT). Used only when the page holds no text, as in a local preview. |
| `_tools/serve.py` | Local preview: `python _tools/serve.py`, then open http://127.0.0.1:8000/. Folders starting with `_` are not published. |
| `_tools/check.py` | The checks of the single source: `python _tools/check.py` (`-v` lists every unfound quote). |
| `Scrolls/` | The Octaaf documents (Thermodynamic, Cosmic, Quantum, Neuroscience, Ecological, Cellular, Social, Chemical, Planetary, Taste, Stilte) and the MHD paper (`.txt`). The Taste Octaaf was formerly the essay *The Echo of Origin*. |
| `PseudoScienceSpeelgoed - Newcomer's Guide.md` | Plain-language introduction. |
| `Diagrams/` | SVG diagrams of §VI.5, §VII.3, §IX.2, §XIX and §XXVI, placed in the text by `FIGURES` in `speelgoed.js`. When the text they draw changes, redraw them; a figure whose anchor paragraph is gone is skipped. |
| `feed.xml`, `sitemap.xml` | RSS feed and sitemap. |

---

## Editing the Speelgoed

- **Single source of truth.** The Speelgoed exists in one file, `PseudoScienceSpeelgoed.md`. Edit only that file; the site follows when GitHub Pages rebuilds. There is no build step and no copy to update:
  - Jekyll inserts the homepage text at deploy time;
  - `speelgoed.js` reads the Schriften, chapters, menu, footer Maxim and Lexicon words from the text;
  - `scripts.js` formats prose at runtime, so the `.md` keeps only its own `**` and `*`;
  - the Oracle copy is the one generated file: remake it with `python _tools/oracle.py` after every edit.

  Keep the `.md` free of Liquid (`{{`, `{%`), kramdown attribute lists (`{:`) and `$$`, which Jekyll would interpret. A bare `|` in prose makes kramdown turn the line into a table; escape it as `\|`. Every chapter appears in the menu under its Schrift; one whose id must stay fixed for links goes in `CHAPTERS` there.

  After editing, run `python _tools/oracle.py`, then `python _tools/check.py`. It reports:
  - kramdown hazards in every published `.md`;
  - an Oracle copy out of date with the `.md`, and the Oracle's size;
  - Octaaf quotes and section references the text no longer has (a Revision Note records the text of its own date, so it is skipped);
  - retired terms anywhere on the site;
  - XML errors in the feed and sitemap.

  Preview locally with `_tools/serve.py`. It renders with marked and the live site with kramdown, so check the live page after pushing.
- **Prefer wording over mechanics.** Change the Speelgoed's claims or mechanics only on the author's explicit decision. Propose the exact wording first.
- **Inclusion rule.** A behaviour enters the Speelgoed only when **at least three Octaven confirm it**. Behaviour that first appears at one Octaaf and persists upward stays in that Octaaf's document. The Speelgoed must not reveal much about the Octaven, and must not become a catalogue of what each Octaaf adds; that way lies the rabbit hole.
- **There is never a single outcome.** Every Drempel separates two named poles, and both stay available (§II). Stilte's Trek is never off (§XV). Nothing is deterministic, even though it usually looks that way. When translating physics, read single-state or zero-hysteresis cases as **limits** (for example, a Marge narrowing toward nothing), never as a world with one outcome. This is an essential detail; correct it quietly, without drama.
- **Tijd is being worked out (since 4 October 2026).** In the Speelgoed, Tijd is a pace: the rate at which a Zelf crosses its own Stilte. It changes only at Vonken (a Winst quickens it, a Verlies slows it), Greep quickens it, and a Lid inherits it from the Relaties that hold it (§IV.1; §XV gives `tᵢ = t̄ᵢ · exp(εᵢ / T_t)`). It is never a reading that only grows, no single pace rules the whole Veld, and no Tijd is fast or slow to itself, only against another pace. Propose Tijd wording to the author before writing it.
  - The arrow of time, temperature-dependent rates and a Zeno rate were withdrawn as mappings and stay withdrawn.
  - Clock rates in gravity, GPS included, are now the Speelgoed's own Check of nested Tijd (§IV.1). An Octaaf may cite them in that sense, as one pace read against another, never as Tijd being a clock reading.
  - Since 5 October 2026 the Chemical, Cellular, Thermodynamic, Neuroscience, Social and Planetary Octaven ground Tijd as a pace or a rhythm (never a clock reading); the others keep "No mapping attempted" until the author decides otherwise.
  - Never frame time as linear. §IV.1 reads a deeply held Relatie as running slow from outside while the world's Echoes reach it faster from inside; quote that reading where it applies, but don't generalise it into a symmetric binary of your own. Physics measures time as one number per clock, so any mapping of Tijd to measured time imports that shape. When fixing facts in a passage that touches time, reread what the passage claims, not only its numbers.
- **Older sections have a house style:** bold key terms with their symbol in brackets on first use, and spaced ` - ` used as a dash.

---

## Octaaf documents

**Structure.** Follow the existing ones (Thermodynamic, Cosmic, Quantum, Neuroscience, Ecological, Cellular, Social):

- `# The X Octaaf`, a byline, and an italic status line.
- `## 0. Preface`:
  - 0.1: what this document is, an **Instantie** that supplies §XXVII's open quantities from science;
  - 0.2: the grades table;
  - 0.3: conventions (notation, quotations, references).
- `## 1. The Instantie Table` (Speelgoed term, value at this Octaaf, grade, section).
- Groundings, then primitives.
- `## 4. Where the Speelgoed Meets Resistance`, then `## 5. Open Problems`.
- `## 6. Closing`, ending "That is the *how*. The *why* is for the Speelgoed to say."
- A `## Revision Note` when replacing an earlier version, then `## References`.

**Grades,** with these exact definitions:

- **Identity:** same equation under a stated substitution.
- **Constraint:** the science fixes, bounds, or forbids an open choice.
- **Correspondence:** same structure, no shared equation.
- **Tension:** conflicts with established findings; a repair is proposed.
- **Open:** not resolved.

**Mapping rules.**

- One primitive maps to one mechanism or measurement. Never map one structure (such as a brain region) to many primitives.
- Shared quantities such as Trouw ("one value for both", §XV) can only be measured on pairs.
- Octaaf-specific behaviour is graded at the Octaaf level, never as a Tension that asks for a Speelgoed change.

**Octaaf documents are not mirrors.** Don't copy Speelgoed additions into them. Touch them only when asked, or when a Speelgoed edit leaves them quoting or paraphrasing text that no longer exists; then fix that minimally.

**Quotations.**

- Quotes from the Speelgoed are verbatim, except that bold markup and bracketed symbols such as "(J)" are omitted.
- Verify every quote against the `.md` with a script. Normalise `**`, bracketed symbols, curly quotes, and dash variants, then check substring presence.

**References and notation.**

- `§II` and `§VIII.3` refer to the Speelgoed; `§2.1` refers to the document itself; companion documents are cited as `*Thermodynamic Octaaf* §2.2`.
- Write equations in Unicode inside code blocks or backticks. **No LaTeX**: the site has no MathJax.

---

## Truthfulness and sources

- **Verify every reference:** authors, year, title, journal, volume and pages, and that the source actually supports the specific claim. AI-generated references in this repository have previously turned out misattributed or nonexistent (see the revision note of *The Taste Octaaf*). Never cite from memory unchecked.
- **Label contested findings.** Check the replication status of psychology, neuroscience and social findings; for example, oxytocin and trust failed a registered replication.
- **Compute every number with a script** before stating it.
- **Check for prior work** before presenting a derivation or result as new.
- **Say what an Identity shows.** It proves that the Speelgoed uses the same mathematics as the science, which is a test of consistency, not evidence of extra explanatory power. Which scientific quantity a term maps to is a choice, and it can differ between Octaven.
- **Report physics honestly when it shrinks a claim.** The MHD paper is the model: corrected physics, honest magnitudes, and withdrawn claims listed.
- **Cite web sources** used in a session.

---

## Publishing

- **On content changes, update the dates:**
  - `feed.xml`: the item's `<pubDate>` and `<lastBuildDate>`;
  - `sitemap.xml`: the URL's `<lastmod>`;
  - for Speelgoed changes, also `index.html` (`article:modified_time` and both JSON-LD `dateModified`) and the feed items for the homepage and the full text.
- **New documents in `Scrolls/`** get a feed item and a sitemap entry. Feed items are newest first, with category `Scrolls`. Sitemap entries use `changefreq` `monthly` and priority `0.7000`.
- **Date formats:** feed `Thu, 01 Oct 2026 12:00:00 +0200`; sitemap `2026-10-01T12:00:00+00:00`.
- **Validate both XML files** after editing.
- **Don't commit unless asked.**

---

## Line endings

- **CRLF:** `index.html`, `PseudoScienceSpeelgoed.md`, `Scrolls/*.md`, `CLAUDE.md`, `scripts.js`, `speelgoed.js`, `_tools/*.py`. **LF:** `feed.xml`, `sitemap.xml`, `styles.css`, `404.html`, `Veld/*`, `Diagrams/*.svg`, the Oracle copy, the MHD `.txt`. `lib/marked.min.js` stays as published. `core.autocrlf` is false.
- **Check endings with `git ls-files --eol`** or Python. In Git Bash, `grep $'\r$'` miscounts them.
- **The Edit tool preserves endings.** Full rewrites with Write, and Python text-mode writes, produce LF. Convert back in binary mode.
- **Always compare `git diff --stat` with the expected size.** A diff touching every line means the line endings changed.

---

## Working with the author

- **Division of strengths.** The author's strength is logic and non-linear thinking: the framework's internal coherence. Claude's is facts and statistics. So:
  - check facts thoroughly;
  - be most careful with logic about the framework itself. Before proposing any change to the Speelgoed's logic, test it against its axioms (two live poles at every Drempel, Stilte's Trek never off, the inclusion rule). Most errors in past sessions came from importing outside framings that break those axioms.

- **Do all the work yourself; don't be a manager.** Use no subagents, no multi-agent workflows, and no separate sessions to hand work to. Everything happens in the session, by you: the reasoning, the Speelgoed mappings, the writing, the checks and the reviews, including verifying every claim an argument rests on.
- **Ask before decisions that change the Speelgoed's claims.** Present options with exact wording and a recommendation. Answer conceptual questions directly before proposing edits.
- **Let some mystery exist.** The author wants readers to carry the thoughts further and think about what lies ahead. Keep facts exact, but leave the framework's open edges open: write Open problems as live questions that point ahead, don't close every gap, and don't neutralise an evocative passage merely because it invites speculation.
- **Watch boundaries.** An Octaaf's science stays in its Octaaf: no single domain's proof closes the Speelgoed, and none should harden into its rules. Keep the work in Zweven, still closing, and don't let fixed framings or checking for its own sake lock it into Dood.
- **Keep proportion.** Fix small issues cleanly, without turning them into big productions.
