# CLAUDE.md

Guidance for working in this repository: the PseudoScience Speelgoed by Mark Joseph Antonius Knippenberg / ScepraX, published at pseudoscience.earth (GitHub Pages; Markdown files are served as `.html`).

The Speelgoed is a constructed modelling language for relationships, not a scientific theory. Its "Octaaf" documents ground it in real science and must withstand expert critique. **Truth comes first.** When the science weakens a claim, the document says so.

---

## Repository map

| Path | What it is |
|---|---|
| `PseudoScienceSpeelgoed.md` | The canonical Speelgoed text. |
| `index.html` | The site. It holds the Speelgoed **twice**: as rendered HTML, and as raw Markdown inside `<script id="Speelgoed-source" type="application/json">`, which the Oracle in `scripts.js` reads. The Oracle copy is a **deliberate subset**: it ends after Section XV. Do not add XVI–XVII or other material to it. Within the sections it contains, keep it identical to the `.md`. It also holds `oracle-prompt`, JSON-LD dates, and `article:modified_time`. |
| `scripts.js`, `styles.css` | Site and Oracle code. |
| `Scrolls/` | The Octaaf documents (Thermodynamic, Cosmic, Quantum, Neuroscience, Ecological, Cellular, Social, Chemical, Planetary, Taste, Stilte) and the MHD paper (`.txt`). The Taste Octaaf was formerly the essay *The Echo of Origin*. |
| `PseudoScienceSpeelgoed - Newcomer's Guide.md` | Plain-language introduction. |
| `Diagrams/` | SVG diagrams linked from the site. |
| `feed.xml`, `sitemap.xml` | RSS feed and sitemap. |

---

## Editing the Speelgoed

- **Every change goes into every copy**, and the copies must stay identical:
  - the `.md`;
  - the rendered HTML in `index.html` (wrapped at about 110 columns, with `<strong>`, `<em>` and `<p>`);
  - the embedded Oracle Markdown in `index.html`, but only for sections the subset contains.

  After editing, check with a script that all copies contain the new text.
- **Prefer wording over mechanics.** Change the Speelgoed's claims or mechanics only on the author's explicit decision. Propose the exact wording first.
- **Inclusion rule.** A behaviour enters the Speelgoed only when **at least three Octaven confirm it**. Behaviour that first appears at one Octaaf and persists upward stays in that Octaaf's document. The Speelgoed must not reveal much about the Octaven, and must not become a catalogue of what each Octaaf adds; that way lies the rabbit hole.
- **There is never a single outcome.** Every Drempel separates two named poles, and both stay available (§II). The Van Motor is never off (§VIII.1). Nothing is deterministic, even though it usually looks that way. When translating physics, read single-state or zero-hysteresis cases as **limits** (for example, a Marge narrowing toward nothing), never as a world with one outcome. This is an essential detail; correct it quietly, without drama.
- **Tijd is being worked out (since 4 October 2026).** In the Speelgoed, Tijd is a pace: the rate at which a Zelf crosses its own Stilte, changed only at Vonken, steadied by Greep, and inherited from the Koppels a Zelf belongs to (§II). It is never a reading that only grows, and no single pace rules the whole Veld. Propose Tijd wording to the author before writing it; earlier mappings (the arrow of time, temperature-dependent rates, GPS clock rates, a Zeno rate) were withdrawn and stay withdrawn. Since 5 October 2026 the Chemical, Cellular, Thermodynamic, Neuroscience, Social and Planetary Octaven ground Tijd as a pace or a rhythm (never a clock reading); the others keep "No mapping attempted" until the author decides otherwise. Never frame time as linear or as a symmetric binary (for example, "slow seen from outside, fast seen from inside"); any such framing will contradict where the author is taking Tijd. Physics measures time as one number per clock, so any mapping of Tijd to measured time imports that shape. When fixing facts in a passage that touches time, reread what the passage claims, not only its numbers.
- **Older sections have a house style:** bold key terms with their symbol in brackets on first use, and spaced ` - ` used as a dash.

---

## Octaaf documents

**Structure.** Follow the existing ones (Thermodynamic, Cosmic, Quantum, Neuroscience, Ecological, Cellular, Social):

- `# The X Octaaf`, a byline, and an italic status line.
- `## 0. Preface`:
  - 0.1: what this document is, an **Instantie** that supplies §VIII.7's open parameters from science;
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
- Shared quantities such as Trouw ("one value per Koppel") can only be measured on pairs.
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

- **CRLF:** `index.html`, `PseudoScienceSpeelgoed.md`, `Scrolls/*.md`, `CLAUDE.md`. **LF:** `feed.xml`, `sitemap.xml`, the MHD `.txt`. `core.autocrlf` is false.
- **The Edit tool preserves endings.** Full rewrites with Write, and Python text-mode writes, produce LF. Convert back in binary mode.
- **Always compare `git diff --stat` with the expected size.** A diff touching every line means the line endings changed.

---

## Working with the author

- **Division of strengths.** The author's strength is logic and non-linear thinking: the framework's internal coherence. Claude's is facts and statistics. So:
  - check facts thoroughly;
  - be most careful with logic about the framework itself. Before proposing any change to the Speelgoed's logic, test it against its axioms (two live poles at every Drempel, the Van Motor never off, the inclusion rule). Most errors in past sessions came from importing outside framings that break those axioms.

- **Do the important work yourself:** the reasoning, the Speelgoed mappings, the writing, and verifying every claim an argument rests on. Delegate only mechanical work, such as bulk citation-detail checks, and spot-check what comes back. Never offload everything.
- **Ask before decisions that change the Speelgoed's claims.** Present options with exact wording and a recommendation. Answer conceptual questions directly before proposing edits.
- **Let some mystery exist.** The author wants readers to carry the thoughts further and think about what lies ahead. Keep facts exact, but leave the framework's open edges open: write Open problems as live questions that point ahead, don't close every gap, and don't neutralise an evocative passage merely because it invites speculation.
- **Watch boundaries.** An Octaaf's science stays in its Octaaf: no single domain's proof closes the Speelgoed, and none should harden into its rules. Keep the work in Zweven, still closing, and don't let fixed framings or checking for its own sake lock it into Dood.
- **Keep proportion.** Fix small issues cleanly, without turning them into big productions.
