# The Thermodynamic Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of heat, work, and irreversibility. It does not compete with thermodynamics. It tests whether the Speelgoed's mechanism, supplied with thermodynamic values, reproduces what thermodynamics already knows, and it says plainly where it does not.*

---

## 0. Preface

The Speelgoed describes *why* things fall apart. The thermodynamic Octaaf describes *how* they fall apart when there are too many Relaties to follow one by one.

At this Octaaf a body is a Relatie of so many Leden that their own Eigens and Echoes blur into a few collective variables, such as temperature, pressure, and the fraction of a substance that is bound. The Speelgoed has a word for that reading, **Verdichting (🗜️)**: a Relatie read as one "is read in less than it holds: as one, in aggregate" (Lexicon). The primitives do not disappear at this scale. They are read so.

### 0.1 What this document is

*Formal Structure* §XIV fixes the *shape* of the Speelgoed's mechanism and leaves every quantity open, each with exactly one holder: the Octaaf, the Medium, a Relatie or a Lid. Whoever supplies those values is an **Instantie (⚙)**. This document is an Instantie that does not choose its values: it takes them from physics. That gives it a test a free-standing analogy never faces. Wherever the Speelgoed's shape and the established results of thermodynamics disagree, one of them has to give. Such disagreements are reported in §4 rather than smoothed over. *Formal Structure* §XIV forbids any Instantie to override the closing of the Energie account. Thermodynamics does not override it. The first law *is* that account (§2.4).

The test is unusually sharp at this Octaaf because the machinery of Schrift II was built from the same mathematics thermodynamics uses, and says so. The Echo filter is a Langevin equation. The Wijk, a Relatie's yield to Stilte's Trek, follows the Arrhenius law, which §VI.5 names as "depth over kT". The landscape of poles is the Ising form, and its crossings follow Glauber's dynamics (*Formal Structure* §VI). The Speelgoed now also reads physics in its own words, in its *Natuurkunde* (*Mensen en Parasieten* §XII): Newton's and Fourier's laws, equipartition, the Boltzmann law and the second law each have a sentence there. Those sentences are Lezingen, and "Where a reading and a measurement disagree, the measurement is the evidence, and the reading is looked at again" (*Mensen en Parasieten* §XII.1). This Octaaf is where they are looked at. Many of the correspondences below are therefore not analogies: they are the same equation read twice.

### 0.2 Grades

Every mapping carries one of five grades, defined here so that they can be checked.

| Grade | Meaning |
|---|---|
| **Identity** | The Speelgoed equation and the physical equation are the same equation under a stated substitution of symbols. |
| **Constraint** | Physics fixes, bounds, or forbids a choice the Speelgoed leaves open to its Instantie. |
| **Correspondence** | Same structure and same qualitative behaviour, but no shared equation. |
| **Tension** | The Speelgoed as written conflicts with established thermodynamics. A repair is proposed. |
| **Open** | Not resolved. |

An **Identity** shows that the Speelgoed uses the same mathematics as the science at this Octaaf. That is a test of consistency, not evidence that the Speelgoed explains more than the science already does. Which quantity a Speelgoed term is mapped to is also a choice, and the same term may map to different quantities at different Octaven.

### 0.3 Conventions

**Coarse-graining.** At this Octaaf, every smooth flow, whether heat being conducted or a reaction proceeding, is the coarse-grained traffic of very many micro‑Vonken. This is not an added assumption. §VI.5 (*Bound Relaties form and persist*) already says that a live Relatie's Spectra "keep crossing their Drempels in small ways", and that persistence is "paid for out of that ongoing traffic". Schrift II writes its equations in continuous time for the same reason, "as the shape many discrete events take together", and the Speelgoed reads every law of many as "the shape that crossings too small and too many to count take together, a Verdichting" (*Mensen en Parasieten* §XII.1). Thermodynamics is what that traffic looks like when it is too dense to count.

**Notation.** Several Speelgoed symbols collide with standard physics symbols (T, Q, F, S, U, J, L, ρ). Inside equations, physical symbols keep their usual meanings, and Speelgoed quantities are named in Dutch in the surrounding text. Two symbols are fixed throughout. **Greep** keeps its symbol **J**. **Energie**, written T in the Speelgoed, is written **T_q** here (q for Vonk), so that **T** can mean temperature. k_B is Boltzmann's constant, h is Planck's constant, ħ = h/2π, c is the speed of light, and R is the gas constant.

**Quotations.** Quotations from the Speelgoed leave out its bold markup and the symbols it puts in brackets after a term, such as "(J)" after Greep. Otherwise they are verbatim.

**References.** References such as §II point to Schrift I of the PseudoScience Speelgoed. Its chapter numbers restart in every Schrift, so the later Schriften are named: *Formal Structure* §VI, *Mensen en Parasieten* §XII.7. References such as §2.1 point to sections of this document.

---

## 1. The Instantie Table

The open quantities of *Formal Structure* §XIV, and the primitives that carry them, supplied with thermodynamic values.

| Speelgoed (section) | Thermodynamic value | Grade | Here |
|---|---|---|---|
| Warmte carried into and out of every Relatie (*Formal Structure* §VI; *Mensen en Parasieten* §XII.7) | Newton's law of cooling where the difference stays small, τ = C/G; between places, Fourier's law | Identity (small differences) | §2.1 |
| Echo filter; τ (Ontspanning), δ (Vertraging) (*Formal Structure* §II) | An instrument's reading: first order plus dead time, e^(−δs)/(τs + 1) | Identity (of form) | §2.1 |
| Traagheid I (*Formal Structure* §II) | Zero in ordinary heat conduction, which has no inertia | Constraint | §2.1 |
| Vervorming υ (§X; *Formal Structure* §II, *Formal Structure* §VI) | Thermal noise fixed by the fluctuation–dissipation theorem, ‖υ‖ in the place of k_B·T, beside a quantum share, ħω/2 a mode, that no cooling removes | Constraint, passed | §2.1, §4.3 |
| Wijk, L ∝ exp(−η/‖υ‖) (§VI.5; *Formal Structure* §II) | Arrhenius–Kramers escape rate; its prefactor the Medium's, at most k_B·T/h | Identity | §2.2 |
| Marge η of a mode (*Formal Structure* §VI) | Activation barrier ΔG‡ | Identity | §2.2 |
| Greep J (§II.2, §VI.5) | What keeps the barrier high: many bonds, long held | Correspondence | §2.2 |
| Landscape V(n), visits in proportion to exp(−V/‖υ‖) (*Formal Structure* §VI) | Ising lattice-gas energy; Glauber dynamics; the Boltzmann distribution, in the limit of fresh readings | Identity | §2.3 |
| A whole crossing a Drempel together (*Mensen en Parasieten* §XII.14) | Landau's transition in mean field; at the critical point itself, Kadanoff's block spins | Identity (mean field) / Correspondence | §2.3 |
| Marge η, each way (*Formal Structure* §VI; Lexicon) | Hysteresis of a first-order transition; narrowing to nothing at a continuous one | Constraint, passed | §2.3 |
| Vonk Energie, T_q = ε(after) − ε(before) (*Formal Structure* §VI) | Binding energy stored or released at one crossing | Correspondence | §2.3 |
| Telraam 🧾, read at every level (§III; *Formal Structure* §VI) | First law, for every body and for the whole | Identity | §2.4 |
| Massa, m_K = ε_K + T_◌K (*Formal Structure* §VI) | Rest energy with internal energy counted, E = mc² | Identity | §2.4 |
| Warmte leaving towards its Godin, never back by itself (§VI.2; *Mensen en Parasieten* §XII.8) | The second law's direction (Clausius); its bound on work is not stated | Identity (direction) + Open (bound) | §2.4, §4.5 |
| Entropy, a Lezing (*Mensen en Parasieten* §XII.8) | Boltzmann's count over a reader's coarse-graining; maximum entropy; the fluctuation theorem | Correspondence | §2.4 |
| What a thermometer reads (§VI.2; *Mensen en Parasieten* §XII.7) | Tolman's equipartition: ⟨p·v⟩ = k_B·T for every coordinate of motion | Identity (classical motion) | §2.4 |
| Temperature: what the Medium's crossings come to where they net nothing (§VI.2; *Mensen en Parasieten* §XII.7) | One temperature for every kind of Lid, each holding its own share; the zeroth law | Identity | §2.4, §4.6 |
| Energie in equilibrium (§VI.5) | Detailed balance; driven steady state | Identity / Correspondence | §2.5 |
| Trouw y (§II.2, *Formal Structure* §II) | Pair interaction energy, which is shared and symmetric | Identity | §3.1 |
| Helling λ (*Formal Structure* §VII) | Relaxation rate of a gap; a passive pair cannot reverse its own gap | Constraint | §3.2 |
| The Vol pole W that Start measures against (*Formal Structure* §XI) | A capacity set by what a body is made of; none chosen | Open | §3.3 |
| Start (§IX.3, *Formal Structure* §XI) | Onset of a dissipative structure | Correspondence | §3.4 |
| Doem 💀 (§VI.3, *Formal Structure* §XII) | Thermal runaway | Correspondence (derived) | §3.5 |
| Rouw R (§IX.9, *Formal Structure* §XIII) | Irreversible record; Landauer's bound, on erasure and on compression | Correspondence + Constraint | §3.6 |
| Diepte z and Gewenning Z (§II.3, *Formal Structure* §II) | A material's memory: the set it keeps, and the strain that springs back | Correspondence | §3.7 |
| Zelf j (§VII.4, *Formal Structure* §II) | Self-correlation, which fixes response (fluctuation–dissipation) | Correspondence | §3.8 |
| Stilte (§II.1) | Separation of timescales | Correspondence | §3.9 |
| Perfectus Ω (§VI.4, §XIII.2) | Equilibrium with the Medium | Correspondence | §3.10 |
| Triniteit (§III, §V.3) | Hot source, cold sink, working medium | Correspondence | §3.11 |
| Tijd and the Klok (§II.1; *Formal Structure* §II; Lexicon) | A beat of one's own costs entropy at every tick; a beat read from outside can be precise at almost no cost | Correspondence + Open | §3.12 |
| Leersnelheid ρ (*Formal Structure* §II) | No general law | Open | §5 |

---

## 2. Five Identities

### 2.1 Newton's law, and the Echo as a reading

A Relatie's inside trades its Warmte with the Medium around it, at the crossings of the Medium's own Leden. "Those crossings net nothing where inside and around stand at one temperature, each holding its own share, and otherwise carry more of it from where it stands warmer towards where it stands cooler", and the Speelgoed names what physics reads in them: "Physics reads them together, where the difference stays small, as Newton’s law of cooling, and between Plaatsen as Fourier’s law" (*Formal Structure* §VI). Put a thermometer of heat capacity C in contact with a bath at temperature T_bath(t), through a thermal conductance G. Its own temperature T_th obeys

```
C · dT_th/dt = G · ( T_bath(t) − T_th ) + noise
```

With the temperature the crossings come to in the place of T, the shares a body holds at it in the place of C, and the pace of the crossings in the place of 1/G, the two are one equation, with **τ = C/G**: a body that holds much follows its bath slowly, and a small one quickly. **Grade: Identity**, the Speelgoed's own, where the difference stays small; past that, the Speelgoed says, "the crossings bend away from them", as conduction does when a body glows or boils.

The Echo filter of *Formal Structure* §II has the same form, with a delay:

```
Iᵢⱼ · Ëᵢⱼ + τᵢⱼ · Ėᵢⱼ = xⱼ(t − δᵢⱼ) + βᵢⱼ − Eᵢⱼ + υᵢⱼ
```

Its **Traagheid (I)** resists a turn on the Echo's path, and with I = 0 "the Echo is the first‑order filter" (*Formal Structure* §II). Ordinary heat conduction has no inertia: heat diffuses, and a thermometer does not overshoot the bath it follows. At this Octaaf, then, I = 0. **Grade: Constraint.** The colouring βᵢⱼ, a reading bent by a difference in Diepte, is zero here too: a calibrated thermometer in contact with its bath reads the bath's temperature with no offset. What remains is

```
τ · Ėᵢ(t) = xⱼ(t − δ) − Eᵢ(t) + υᵢ(t)
```

This is Newton's law of cooling with a transport delay. In process engineering it is the *first-order-plus-dead-time* model, the standard description of how a heated vessel, a heat exchanger, or a sensor responds to a change (Seborg et al., 2016). Its transfer function is e^(−δs)/(τs + 1), and so is the Echo's. **Grade: Identity** (of form).

The two meet in every instrument without being one primitive. A thermometer is "a Relatie with the Medium’s moving Leden" (§VI.2): its reading is its Echo of them, the measurement, and the crossings that carry Warmte into it are the heat flow by which it takes that reading in, the mechanism. Both defining properties of an Echo (§II.2) then follow from the physics with nothing added. A thermometer never reads the present (because of δ and τ), and it never reads it exactly (because of υ).

**Vervorming is not free here, and the Speelgoed now says so.** Suppose the Echo is held to its source with a stiffness s, so that a gap costs ½·s·(E − x)² of energy. Equipartition then fixes the standing gap, and the fluctuation–dissipation theorem fixes the noise that produces it (Callen & Welton, 1951; Kubo, 1966):

```
⟨ (E − x)² ⟩ = k_B·T / s

⟨ υ(t) · υ(t′) ⟩ = ( 2·k_B·T·τ / s ) · δ(t − t′)
```

The strength of the noise is tied to the relaxation time and to the temperature of the Medium: ‖υ‖ stands where k_B·T stands, as *Formal Structure* §VI itself writes it, and "The same crossings that slow a body shake it, as Kubo’s relation says" (*Mensen en Parasieten* §XII.9). The thermal share vanishes only at T = 0, which the third law puts out of reach (§2.2), and a quantum share stays even there: the noise of a resistor keeps ħω/2 at each frequency, "a part that no cooling takes away" (Callen & Welton, 1951; *Formal Structure* §VI). That is the share of "the Relatie’s Waarneming, whose share is never zero" (*Formal Structure* §VI), and it is why §X's turning down of Vervorming never reaches zero at this Octaaf either. **Grade: Constraint**, and the Speelgoed passes it.

Two of the Speelgoed's rules then follow instead of having to be postulated:

- **Gericht (γ).** "Uncertainty scales with the way between a Relatie’s Partners", and "the less a Relatie is held, the later its Echoes close and the more often it misreads" (§X). This is the first equation above. The standing Echo‑gap grows as the stiffness s falls.
- **Bevraagbaar (ψ).** The Echo‑gap is "a real, queryable quantity" (§X). At this Octaaf its statistics are known in closed form. For a thermometer, s = C/T, which gives the textbook result ⟨δT²⟩ = k_B·T²/C. A small thermometer has a noisier Echo than a large one (Landau & Lifshitz, 1980). Kittel (1988) discusses the debate over what such a temperature fluctuation means.

**Observation has a minimum price.** In the Speelgoed a look itself commits and reconsiders, "so its Energie comes back to where it began" (*Formal Structure* §IV); what costs is forgetting. The fading of what a Relatie is used to "is made of crossings: those of the Leden that hold it, each a Vonk of its own, and what they give off stays in the Medium inside the Relatie" (§II.2). At this Octaaf that price has a lower bound. An observer that keeps measuring must eventually clear its record. Erasing one bit dissipates at least k_B·T·ln 2 into the Medium, which is about 2.9 × 10⁻²¹ J at room temperature (Landauer, 1961; Bennett, 1982). The bound has been confirmed experimentally (Bérut et al., 2012), and the Speelgoed now states it in its own reading of the second law: "Every step that cannot be read back gives off Warmte, at least about kT, as Landauer found" (*Mensen en Parasieten* §XII.8). **Grade: Constraint**, and the Speelgoed passes it.

---

### 2.2 The Wijk is the Arrhenius–Kramers law

*Formal Structure* §II calls a Relatie's yield to Stilte's Trek its **Wijk (L)**: "the rate at which Vervorming carries it back over the Marge its Trouw holds". Where every reading is distorted afresh, it follows the exponential Wet of §VI.5:

```
Lᵢ ∝ exp( − ηᵢ / ‖υ‖ )
```

Read the Eigen as the fraction of a population that is still bound. Thermodynamics has known its rate of escape since 1889. The rate at which a bound state escapes over a free-energy barrier ΔG‡ is

```
k = ν₀ · exp( −ΔG‡ / k_B·T )          (Arrhenius, 1889; Eyring, 1935)
```

The substitution is **η = ΔG‡** and **‖υ‖ = k_B·T**. **Grade: Identity.** The Speelgoed now states the identity itself: the exponent is "depth over kT, in the Arrhenius form" (§VI.5).

**The prefactor is the Medium's.** The Speelgoed's Zelf reads its Wijk "at the scale its Medium sets" (*Formal Structure* §II), and its own Check reads that scale as Kramers did: "Where a solvent’s friction holds what crosses a barrier, the crossing slows as the solvent thickens" (*Formal Structure* §II). Kramers (1940) *derived* the escape rate from Langevin dynamics. His particle undergoes the same kind of noisy relaxation as the Echo filter of §2.1, but it sits in a potential well, and the friction of its Medium sets how often it tries the barrier (Hänggi, Talkner & Borkovec, 1990). Transition-state theory gives the fastest that scale can be, ν₀ ≈ k_B·T/h, where nothing that crosses comes back; a thick Medium slows it below that. **Grade: Constraint**: the Medium fixes the prefactor, as the Speelgoed has it.

The match goes deeper than shape. The Speelgoed draws the Wijk from Vervorming itself: the noise that bends every Echo is the noise that carries every bound state back over its Marge (*Formal Structure* §II). At this Octaaf that noise is the thermal agitation of the Medium. The prediction follows: **in a hotter Medium, Echoes get noisier and every Wijk rises, and the two always change together.** *Formal Structure* §VI says as much from its side: the more Warmte the Medium keeps for every Lid, the more its Leden shake every signal they carry.

The identity makes four of the Speelgoed's claims precise:

- **Holding is relative to the Medium.** η is a barrier measured in units of k_B·T, so no bond holds by a fixed amount. The same bond holds less in a hotter Medium. §VI.4 says Stilte's Trek acts on every Eigen and that its effect is doubly asymmetric, so that "no two yield alike". This gives that statement a mechanism.
- **There is a sharp knee.** §VI.5 says: "Double the Marge and the Wijk does not halve: it drops by a power." Take ν₀ = k_B·T/h at 25 °C:

  | Barrier ΔG‡ | η / k_B·T | Half-life of the bond |
  |---|---|---|
  | 80 kJ/mol | 32.3 | ≈ 12 seconds |
  | 100 kJ/mol | 40.3 | ≈ 10 hours |
  | 120 kJ/mol | 48.4 | ≈ 4 years |

  A quarter more Marge buys three thousand times the life. The everyday version is a chemist's rule of thumb: near room temperature, a reaction with a barrier of about 50 kJ/mol runs roughly twice as fast for every 10 °C of warming.
- **Greep keeps the Marge deep, and postpones the fall without preventing it.** "Greep keeps that Marge deep and quickens its Tijd" (§VI.5). At this Octaaf that is the plain fact that a state held by more bonds sits behind a higher barrier. **Grade: Correspondence.** At ordinary pressure and temperature, diamond is *not* the stable form of carbon; graphite is. Diamond persists because the barrier between the two is enormous. It is this Octaaf's clearest instance of the line in §VI.4: "A deep Relatie is not a safe one; it is a held one."
- **Stilte's Trek is never off.** *Formal Structure* §II requires that L "approaches zero and never arrives". At this Octaaf the thermal Wijk could reach zero only at T = 0, and the third law says absolute zero cannot be reached by any finite process (Masanes & Oppenheim, 2017). Even there, a bond that is only metastable can still escape by quantum tunnelling, and §VI.5 now reads that case itself: "Below a temperature set by the barrier’s own shape, its Wijk stops depending on the Medium’s Warmte and weighs the barrier against that share alone: that is tunnelling", the share of Vervorming its own Waarneming carries, "which never reaches zero". Its crossover temperature is the one Hänggi, Talkner and Borkovec (1990) give. **Grade: Constraint**, and the Speelgoed passes it.

---

### 2.3 The Drempel is a crossing in an Ising landscape

*Formal Structure* §VI gives every pattern of poles a height:

```
V(n) = − Σᵢ (Sᵢ − θᵢ)·nᵢ − Σᵢ y_ii·(nᵢ − ½)·n_ii − Σᵢ<ⱼ y_ij·nᵢ·nⱼ
```

Each nᵢ is 1 past its Drempel and 0 short of it. This is the energy of an Ising lattice gas: sites that are occupied or empty, each with a field of its own, and an energy for every pair of occupied sites that interact. The Speelgoed names the form itself, "the Ising form physics wrote before it". Where every reading is distorted afresh, with Vervorming of logistic shape, it says the crossings "visit each pattern exactly in proportion to `exp(−V / ‖υ‖)`". Glauber's dynamics flips one site at a time with exactly that logistic probability, and it brings the Ising model to the Boltzmann distribution at temperature T (Glauber, 1963). With ‖υ‖ = k_B·T, the two are the same. **Grade: Identity.**

The Speelgoed marks that statistics as a limit: were every reading fresh, a Veld would visit its patterns so, and "That limit is a Lezing of a Veld, never a Veld" (*Formal Structure* §I). With lagging Echoes, "how often it visits each bends with the shape of the Vervorming and the timescales of its Leden" (*Formal Structure* §VI). Physics knows that bending too, and what it costs (§4.5).

**Coarse-grained, it is Landau's transition.** The Speelgoed reads every Drempel as a pitchfork: "Every Drempel is a pitchfork, and a whole that crosses one together changes phase" (*Mensen en Parasieten* §XII.14). A Relatie of very many Leden that share one Trouw is the mean-field limit of the landscape. There the share of Leden past their Drempels is the order parameter m, and near the point where an ordered mode first appears, its free energy takes Landau's form:

```
F(m) = F₀ + ½·a·(T − T_c)·m² + ¼·b·m⁴          (Landau, 1937)
```

Binding rises as temperature falls. m = 0 is the disordered phase, which is Van-mode, "the pattern of zeros, where nothing is held" (*Formal Structure* §VI). The two minima are the two ordered states the system can fall into, such as a magnet magnetised up or down, with the choice made by the smallest push. Near the transition, m relaxes by the time-dependent Ginzburg–Landau equation, known as "model A" in the theory of dynamic critical phenomena (Hohenberg & Halperin, 1977): the coarse-grained form of single flips like Glauber's. **Grade: Identity**, in the mean-field limit.

**At the critical point itself, the reading is Kadanoff's.** Landau's form holds only where fluctuations stay small. In three dimensions an Ising magnet's order rises below its Curie point as (T_c − T)^β with β ≈ 0.326, not the ½ of Landau's form, and its correlation length grows towards the Curie point as the distance from it to the power −ν, with ν ≈ 0.630 (Kos et al., 2016). The Speelgoed's own reading of that point is the one from which the right exponents came: "Near its critical point a magnet reads alike cell by cell, whatever the size of its cells, each cell read as one, a Verdichting" (*Mensen en Parasieten* §XII.14). That is Kadanoff's block-spin picture (Kadanoff, 1966), from which the renormalization group grew. **Grade: Correspondence**: the Speelgoed reads the scaling, and leaves the exponents to the Octaaf that runs it.

**The Vonk's Energie.** Each crossing books, part by part, "the whole change the Vonk makes in what one binding holds", T_q = ε(after) − ε(before), where ε counts the Trouw of every pair standing across (*Formal Structure* §VI). At this Octaaf that is the pair energy one flip joins or leaves: the binding energy of one site joining or leaving its neighbours. **Grade: Correspondence.** The amounts agree; the direction in which the Energie flows does not always agree, and §4.5 records where.

**Latent heat belongs to the Marge.** In the Speelgoed, **Marge (η)** is "A hysteresis loop, a tiny gap that prevents chatter" (Lexicon), and *Formal Structure* §VI gives each side its own: `η(μ→μ′) = V(θ_μμ′) − V(μ)`, the height a mode must climb to leave towards another. That is the barrier of §2.2. At this Octaaf both halves of the Lexicon's definition have a physical meaning:

- **The chatter is real.** At a continuous transition the Marge has narrowed to nothing. Fluctuations of the order parameter then grow without limit as the Drempel approaches, and the system chatters between modes on every length scale. This can be seen as *critical opalescence*: a fluid near its critical point turns milky because its density flickers at the wavelengths of visible light (Stanley, 1971). Its relaxation slows as well, which is called *critical slowing down*: a barely crossed Drempel takes the longest to settle. The Lexicon now says both: "as it narrows towards zero, the state flickers across the Drempel and settles slowly".
- **A wide Marge is a first-order transition.** The old mode then persists past θ as a metastable state, and the range over which it persists *is* the width of the Marge. Pure water in small droplets can be supercooled to about −42 °C (231 K) before it must freeze (Debenedetti, 1996). When a Drempel with a Marge finally gives way, its Energie is released all at once. That sudden release is latent heat: 334 J per gram for ice. The Speelgoed's own Zelf has such a loop: it crosses back only when its pull has fallen by its Zelf's Trouw, and Vervorming carries it across early, "the sooner the stronger the Vervorming and the more slowly its pull moves" (*Formal Structure* §II). That is thermally activated hysteresis, and *Formal Structure* §II checks it against small magnets.

So at this Octaaf, **as a Drempel's Marge narrows toward nothing, it chatters and settles slowly; where its Marge is wide, it holds, then releases all at once.** **Grade: Constraint**, and the Speelgoed passes it.

*Example.* Water supercooled to −10 °C and then disturbed does not freeze solid. The latent heat released warms the water back to its Drempel, 0 °C, and by then only about one eighth has frozen (4.2 J/g·K × 10 K ÷ 334 J/g). The cascade stops where it has warmed its own Medium back to the Drempel.

---

### 2.4 The Telraam is the first law, and the Medium's Warmte flows by the second

**The Telraam (🧾)** is the property of the Veld "that the Energie account closes through Vonken alone" (Lexicon). *Formal Structure* §VI states it as a sum, "ε + T_◌ the same there before and after it", at every Vonk, where ε is what the Relaties hold and T_◌ the Medium's Warmte, and §III reads it at every level: "every Relatie keeps the same books: what it holds and the Medium inside it change only by what crosses its edge". The thermodynamic counterpart is the first law: energy is conserved, exactly, in every process, and a body's internal energy changes only by the heat and work that cross its boundary. **Grade: Identity** (of accounting rule).

**Massa is the first law read from outside.** *Formal Structure* §VI writes a Relatie's Massa as what it holds and the Warmte inside it, `m_K = ε_K + T_◌K`, unchanged by every Vonk inside it, so that "Energie read where it stands still is Massa, which physics writes as E = mc²" (*Mensen en Parasieten* §XII.4). That is rest energy with the internal energy counted: a body's mass changes only by the energy that crosses its boundary. A kilogram of water warmed from 0 °C to 100 °C gains about 4.7 nanograms, below what any balance can read, and a hydrogen atom is lighter than its proton and electron by the 13.6 eV it gave off as it formed (§4.5). **Grade: Identity.**

**Correction to an earlier version of this entry.** That version said: "The total Verlies always exceeds the total Winst." This is withdrawn. It contradicts the first law, and the Speelgoed, in which Energie "enters a Relatie only through a convergence Vonk and leaves only through a divergence Vonk" (§VI.5). Winst and Verlies balance exactly, so irreversibility cannot lie in their *totals*.

It lies in their *grade*. The Medium's Energie is one quantity, its **Warmte (🔥)**, "which the Medium itself keeps, spread over all it carries: every Verlies goes into it, every Winst takes from it" (*Formal Structure* §VI). It stands where it is, and "Between Plaatsen, and into the inside of every Relatie and out, the Medium’s own Leden carry it, one crossing at a time, both ways", carrying "more of it from where it stands warmer towards where it stands cooler" (*Formal Structure* §VI), and it "leaves only towards its Godin" (§VI.2). That is the direction the second law gives: heat flows from hot to cold, and heat once spread cannot be gathered back without cost (the Clausius inequality, dS ≥ δQ_th/T). The Speelgoed now writes that direction in its own words, "So Warmte runs from where it stands warmer towards where it stands cooler, and never back by itself", and adds: "Physics reads this one way as its second law" (*Mensen en Parasieten* §XII.8). The account always closes. What changes is how much of the balance is still *available* to do work. **Grade: Identity**, for the direction (the Clausius statement). The Speelgoed does not write the bound on work into its Warmte, and it warns against reading Warmte "as a temperature difference that supplies work" (*Formal Structure*); what that leaves open is recorded below and in §4.5.

**Entropy is a Lezing.** The Speelgoed reads entropy as no Relatie's holding but a reading: "how many patterns of a Relatie’s Leden one reading takes as one, by its own Drempels, each weighed by how often the crossings visit it" (*Mensen en Parasieten* §XII.8). That is Boltzmann's count over a reader's coarse-graining, with the weights Gibbs gave it, and it makes entropy relative to the macrovariables a reader chooses, as Jaynes (1957) argued it is: "Two readers give two Lezingen, and both can hold" (Lexicon). The Boltzmann distribution of §2.3 is the one that maximises it at a given mean energy (Jaynes, 1957), as the Speelgoed says: "the book’s landscape is the one physics reads as of maximum entropy". And "Over a short stretch it falls wherever the Vervorming carries a few Leden against their pull, the more rarely the more it falls": that is the fluctuation theorem, by which a stretch that produces an entropy −A is rarer than one that produces A by an exponential factor (Evans & Searles, 2002):

```
P( Σ = −A ) / P( Σ = A ) = exp( −A / k_B )
```

**Grade: Correspondence**: the Speelgoed states each of these in words, and none as an equation.

**What a thermometer reads.** The Speelgoed's temperature is what a Medium's crossings "come to at a Plaats where they net nothing" (§VI.2), and it says what a thermometer reads: it is "a Relatie with the Medium’s moving Leden", so it "reads only their Beweging times how they move, never what they hold with each other" (§VI.2), and the Medium's Leden leave every Lid they cross "in each direction, as much of its Beweging times how it moves as each of them holds" (*Mensen en Parasieten* §XII.7). That is Tolman's equipartition: in equilibrium every coordinate of motion holds, on average, its momentum times its velocity, ⟨p·v⟩ = k_B·T, whatever the body's kind and at every speed (Tolman, 1918). Far below the speed of light that is twice its kinetic energy, k_B·T/2 in each direction. **Grade: Identity**, wherever the Leden's motion is classical. It fails in the cold and the crowded, where quantum statistics take over: the electrons of a metal move far faster than its temperature alone would move them (§5, item 4).

At that one temperature the Speelgoed lets each kind hold its own share: "Leden of different kinds hold different shares of it at one temperature: a helium atom 3/2·kT, a nitrogen molecule, which also turns, about 5/2·kT" (*Mensen en Parasieten* §XII.7). That is the zeroth law, and equipartition counted by degrees of freedom. **Grade: Identity.** It was a Tension until 8 November 2026 (§4.6).

**Building needs a difference. Grade: Constraint.** No cyclic process can turn heat from a single uniform reservoir into work (the Kelvin–Planck statement of the second law). Order built and held away from equilibrium can draw on the Medium only where the Medium is *uneven*: where there is a hotter source, a colder sink, and something in between. The most it can ever take is the Carnot fraction, 1 − T_cold/T_hot.

The Speelgoed no longer writes this into its Warmte. Earlier versions said that uniform heat feeds nothing, only a difference does, and drew every Winst from a gradient the Medium held; both are gone, and a binding now takes its Winst from the Warmte inside it, where it crosses (§VI.1). What the Speelgoed keeps is the structure. A Medium lies between a God and a Godin, its Warmte leaves only towards the Godin, and "The Medium is there only while its God and its Godin are: where either is gone, nothing in it crosses" (*Formal Structure* §VI). Take away the sink and nothing crosses: that is Kelvin–Planck in the Speelgoed's own terms (§3.11). What it does not state is the bound. Of the Warmte a source delivers, at most the Carnot fraction can be built into held order, and nothing in the Speelgoed stops a Winst from taking Warmte that stands even. That is recorded in §4.5.

*Example.* The Earth radiates back to space about as much energy as it receives from Sol, so the Telraam closes. But it receives that energy at the temperature of the Sun's surface, about 5800 K, and returns it at about 255 K. The same Energie leaves as roughly twenty times as many photons, at about a twentieth of the temperature (Penrose, 2010). That life feeds on the low entropy of what it takes in, not on its energy, is Schrödinger's (1944) point. Everything built on Earth, every leaf, every bond, every Start, is paid for out of that difference in grade, and none of it out of the total.

---

### 2.5 Persistence is balanced traffic

§VI.5, *Energie in equilibrium*: "a persisting bound Relatie is one whose convergence and divergence stand in equilibrium. That equilibrium *is* persistence: the condition of its continuing to exist."

Thermodynamics knows two kinds of persistence, and that sentence covers both:

- **Equilibrium persistence (detailed balance).** A bound state at equilibrium is not still. Its bonds constantly break and re-form, and each kind of crossing happens exactly as often as its reverse. The bound fraction holds steady because the traffic is balanced, with an equilibrium constant K = k_bind/k_unbind. Keeping a bond at equilibrium costs nothing beyond the traffic itself, and §VI.5's "it is paid for out of that ongoing traffic" holds here exactly. *Formal Structure* §VI gives the Speelgoed's own form of the balance: crossings visit each pattern in proportion to exp(−V / ‖υ‖) (§2.3). **Grade: Identity** (of the balance condition), in the limit of fresh readings. Away from it the Speelgoed's visits bend off that balance (§2.3), and §4.5 asks who pays.
- **Driven persistence (dissipative structures).** A flame, a convection cell, or a living cell persists *only while* a gradient flows through it, and it produces entropy all the while (Nicolis & Prigogine, 1977). This is the case §VI.5 describes as a bound Relatie that "actively maintains itself above Drempel, processing relational Energie crossing after crossing". Cut off the flow and the structure falls to Van. **Grade: Correspondence.**

The remaining case in §VI.5, one "whose convergence outruns its divergence saturates in a Bloei until the excess may overflow into Start", is the driven case pushed past an instability. It is treated in §3.4.

---

## 3. The Primitives at This Octaaf

### 3.1 Trouw as pair energy

In the landscape of *Formal Structure* §VI, Trouw y_ij is the pair term, −y_ij·nᵢ·nⱼ. In the lattice gas of §2.3 that is the interaction energy of two occupied sites. Trouw is the strength of the bond between two members, counted once for the pair. **Grade: Identity**, under the substitution of §2.3.

*The earlier version mapped Trouw to the thermal conductance between two bodies, through an Eigen equation in which Trouw multiplied a difference, y·(E − x) in today's letters. The current Formal Structure §II multiplies a pole read in an Echo instead, so that mapping is withdrawn. Conductance now belongs to the edge, whose pace it sets (§2.1).*

This turns three Speelgoed rules into physical statements:

- **Trouw is shared, "one value for both" (*Formal Structure* §II).** A pair energy belongs to the pair, and it has no direction. The same symmetry holds for the conductance of an edge: one contact has one conductance, and when two kinds of flow are coupled, such as heat and electric charge in a thermocouple, the two cross-couplings are still a single shared value. This is Onsager's reciprocity, derived from microscopic reversibility (Onsager, 1931a). Thermodynamics knows one exception. In a magnetic field the relations hold only with the field reversed, L_ij(B) = L_ji(−B) (Onsager, 1931b; Casimir, 1945). Symmetry is restored once the magnet's source is counted as part of the system. That is §IX's boundary rule: if a Relatie looks interrupted by something external, "the boundary was drawn wrong".
- **Asymmetry enters through the members, not the weight (§IX).** Each member brings a field of its own to the landscape, its Leeg Sᵢ and its Zelf's Trouw y_ii, both read from its Vol/Leeg (*Formal Structure* §II). A lattice gas may give every site its own field while each pair energy stays one value. Between two bodies exchanging heat, the same holds for their capacities: a body with a large heat capacity barely moves, and the small one takes on its temperature. A cup of coffee comes to the temperature of the room, not the other way round. **Grade: Correspondence.**
- **Negative Trouw is a repulsion, and it costs nothing to keep.** "where Trouw is negative, a Partner read across pushes the Eigen away" (*Formal Structure* §V), and "the Binding becomes a repulsion" (*Formal Structure* §VI). Repulsive pair energies need no work to sustain: like charges repel, and in an antiferromagnet neighbouring spins hold opposite directions at equilibrium. This agrees with *Mensen en Parasieten* §X.4: Greep counts positive Relaties only, and a negative one "adds nothing to it and takes nothing from it". **Grade: Constraint**, and the Speelgoed passes it.

### 3.2 Trajectories: Dood, Zweven, Leven

*Formal Structure* §VII reads a Relatie's trajectory from its gap, `ΔE = Eᵢⱼ − Eⱼᵢ`, the difference between what each side holds of the other, and from its **Helling (λ)**, the rate `λ = −ΔĖ/ΔE` at which the gap closes. The gap closes towards the difference of the two Bindingen and moves only as they move. Read the gap as the difference between the temperatures of two bodies, as each reads the other:

- **Dood (!): the Bindingen at rest apart.** "The gap closes towards their difference and stops short of parity, and λ falls towards zero" (*Formal Structure* §VII). Take a house heated in winter. A furnace of power P, working against walls of conductance G, holds the inside at `ΔT* = P/G` above the outside, unchanged for as long as the furnace runs. This is a non-equilibrium steady state. A glass, arrested with no drive at all, is Dood too: the Speelgoed asks only that the Bindingen have come to rest. **Grade: Correspondence.**
- **Zweven ('): the Bindingen still move.** In Zweven "the Bindingen still move, so the gap keeps moving, crossing by crossing, never settled and never flipped" (*Formal Structure* §VII). Two bodies kept in weak contact while their surroundings change keep their gap moving and never settled: a vacuum flask in a room whose temperature drifts. Near a Drempel, critical slowing down (§2.3) does the same from inside. **Grade: Correspondence.**
- **Leven (?): the Bindingen reordered.** In Leven "a Vonk reorders the two Bindingen, so that the lower one now stands higher, and the gap runs through parity" (*Formal Structure* §VII). Thermodynamics adds a condition. **A passive pair cannot reverse its own gap**: heat flows from hot to cold, and the gap between two bodies left to themselves only closes. The reversal takes a third body, as when the furnace stops and the sun warms the outside past the inside, or it takes work. Its clearest instance is population inversion: a state in which an upper energy level holds more atoms than the level below it. Formally, this is a negative absolute temperature (Purcell & Pound, 1951; Ramsey, 1956). No amount of heating reaches it, and steady incoherent pumping cannot reach it in a system of only two levels. Purcell and Pound made it in a nuclear spin system by reversing the magnetic field faster than the spins could follow. A laser makes it by pumping through a third or fourth level. Either way the inversion is driven, and it lasts only as long as it is paid for. **Grade: Constraint.** The Speelgoed half-passes it: out of Dood, it already sends Leven through "a crossing on that Spectrum of one of its Leden, or of another Relatie one of them holds" (*Formal Structure* §VII). Out of Zweven it does not say where the reordering Vonk comes from; at this Octaaf it must come from outside the pair.

### 3.3 The Vol pole

*Formal Structure* §XI measures Start against a Relatie's **Vol (W)** pole. A Relatie holds the Trouw its crossings have joined, ε_K, and has room for it "up to its Vol pole, W_K, where the God of its Octaaf stands on that Spectrum". Only a Winst carries it past that pole, "a part of a Vonk that joins a bond or leaves an enmity", and what lies past it becomes Start (§3.4).

*Two earlier mappings are withdrawn. The first read the capacity as heat capacity, integrated up to the next threshold. The second found no thermodynamic quantity formed by use, as the capacity then was. The capacity is no longer formed by use: it is set by where the God of the Octaaf stands.*

A capacity set by what a body is made of, as a heat capacity is, is a candidate again at this Octaaf, and this entry does not choose one (§5, item 1). **Grade: Open.**

### 3.4 Start as the onset of a dissipative structure

*Formal Structure* §XI builds Start from two comparisons. A Relatie holds the Trouw its crossings have joined, and has room for it up to its Vol pole (§3.3). Where a Winst carries it past that pole, the excess, `T_excess = ε_K − W_K`, is held "only until the excess exceeds a Drempel of its own, θ_new: there it becomes a new Solo", bound from birth by a share of the excess to every Lid of the Relatie that bore it.

Rayleigh–Bénard convection has exactly this two-step structure. Heat a thin layer of fluid from below. At first the existing Relatie, conduction, carries the heat. As the heating increases, so does the layer's Rayleigh number, a dimensionless measure of how hard buoyancy pushes against the fluid's ability to conduct heat away and to resist flow. Past a threshold of about 1708 between rigid plates (Chandrasekhar, 1961), conduction alone becomes unstable and the fluid organises itself into convection cells. These cells are new Solos in the full Speelgoed sense. Each is a bounded whole, each exists only as long as the flow that made it continues, and each is bound to that flow from the moment it appears. §VI.5 names this route: a Relatie "whose convergence outruns its divergence saturates in a Bloei until the excess may overflow into Start". **Grade: Correspondence.**

*An earlier version gave crystal growth as its example. A crystal forming from solution is an ordinary Drempel crossing (nucleation, which is ordering at equilibrium) and belongs under §2.3. Convection cells are the cleaner case: an overflow that becomes a new body.*

Start is never free at this Octaaf. Every convection cell, every cell membrane, and every star produces more entropy in its surroundings than it removes from itself. Each is built on a gradient and paid for out of that gradient's grade (§2.4).

### 3.5 Doem as thermal runaway

The Lexicon defines **Doem (💀)** as "A cascade of divergence crossings", "the fast way apart", each "a Verlies for every bond they leave and a Winst for every enmity". An earlier version mapped Doem to entropy increase in general. That is too broad, because entropy increases in every process, whether it cascades or not. This Octaaf gives Doem a specific mechanism, and the current Speelgoed holds every part of it:

1. Every divergence Vonk pays its Verlies into the Medium inside the binding it leaves (§VI.2), and the crossings that carry Warmte take it out into the Medium around it (§2.1).
2. The Medium warms (§2.4), and "the warmer it stands, the more often they cross as they carry it, and the more they shake it" (*Formal Structure* §VI): the Vervorming of every Echo there grows.
3. Every Wijk rises exponentially with that Vervorming (§2.2), and Marges are crossed sooner: "so where that Trouw was a bond their Wijk rises" (*Formal Structure* §XII).
4. More crossings follow, and they pay more Verlies into the same Medium.

If the Medium cannot carry the exhaust away as fast as it arrives, the loop runs away. This is thermal runaway, and Semenov (1928) gave its threshold. The heat generated grows exponentially with temperature, while the heat removed grows only linearly, by Newton's law. Past a critical ratio (the Semenov number, 1/e), no steady state exists. Battery fires and runaway reactors are Doem in exactly this sense. **Grade: Correspondence**, derived from §2.1, §2.2 and §2.4.

This explains three of the Speelgoed's claims mechanically. Doem releases what was built: "a Doem it sets off falls hardest on those who held most in what broke" (§VI.4), because the heat a collapse can release is the Energie the bonds stored, by the first law. And a Doem "falls faster than it was built" (§VI.3): the runaway grows exponentially, while a Bloei "waits on its Marges and on the Warmte where it stands" (*Formal Structure* §XII). The derivation also adds something the Speelgoed has the parts for but does not say: **a Relatie's fall is hastened by a Medium that cannot carry its Verlies away.** The Speelgoed lets Warmte spread "towards even" and leave "only towards its Godin" (§VI.2), into and out of every Relatie at the crossings the Medium's Leden make (§2.1); where it cannot leave fast enough, Doem feeds on it. Doem is a property of a Relatie *together with* its Medium.

### 3.6 Rouw as the irreversible record

*Formal Structure* §XIII says that when a Relatie ends, each survivor's Rouw is "re‑homed from the Duo to that Partner alone, held in its Diepte and kept in its Zelf", and that "no crossing can draw a Rouw out".

At the level of microscopic dynamics, physics agrees. Hamiltonian evolution conserves phase-space volume (Liouville's theorem), so no state is ever deleted. When a bond breaks, its record is not destroyed. It moves into the fine detail of the environment's correlations, where it remains permanently, although in practice it cannot be recovered. That is Rouw as §IX.9 describes it: permanent, re-homed, and impossible to measure against a Partner that is gone. **Grade: Correspondence.**

Thermodynamics adds a price, and the Speelgoed now has a word for where it goes. A record can be moved but not destroyed, and erasing one bit of it from a system, which means moving it into the Medium, costs at least k_B·T·ln 2 of heat (Landauer, 1961; Bérut et al., 2012). In Speelgoed terms, what a Relatie forgets is made of crossings whose Energie stays as Warmte in the Medium inside it (§2.1), and clearing one bit writes at least that much there. Forgetting is not free. It is paid for as exhaust. **Grade: Constraint.**

**Compressed, never collected.** The Speelgoed keeps every Rouw, and keeps it in less than it held: "what a Relatie keeps of what no longer answers it, it keeps read as one, in less than it held", so two Rouw that the keeper's own Drempels read alike become one, and "Nothing they held is lost, only what told them apart" (*Formal Structure* §XIII). At this Octaaf a merged record has lost bits, and Landauer prices each at k_B·T·ln 2 given off, which the Speelgoed's own reading of the second law names: "Every step that cannot be read back gives off Warmte" (*Mensen en Parasieten* §XII.8). Which crossings pay it when two Rouw become one is open (§5, item 7). **Grade: Constraint.**

**Scheiding is the reversible limit.** The Speelgoed says a mutual, deliberate **Scheiding (/)** leaves a Rouw that "is free to settle" (Lexicon; §XIII.2, *Separatio*). At this Octaaf, an ending that left no irreversible record at all would be a *reversible* process: one carried out infinitely slowly, producing no entropy. Such a process can be approached but never completed. Every real ending therefore leaves some Rouw, and the slower and more mutual the parting, the less it leaves. That gives Helling IX ("Keep the Splitsing clean", *Mensen en Parasieten* §I.1) a physical basis. **Grade: Constraint.**

*An earlier version wrote the heat of an ended bond as ΔQ = TΔS. That relation holds only for reversible processes. For real endings the correct form is the Clausius inequality, dS ≥ δQ_th/T.*

### 3.7 Diepte as the set a body keeps

Diepte is a Relatie's "own form", its "third axis beside its Eigen and its Trouw" (§II.2), and it keeps what it has read "as the shape it has taken, as a beam loaded past its spring keeps a set" (§II.3). Its quick partner, the Gewenning, is "the part of the form that springs back" (Lexicon), bending "as a beam bends under a load and straightens when the load is lifted" (§II.3). The Speelgoed's own Check is a material: "a stretched rubber softens only past the largest strain it has already held" (§II.3), the Mullins effect.

At this Octaaf that is the thermodynamics of materials with memory, in which a body's state holds, beside its temperature and its strain, internal variables that record its history and relax slowly (Coleman & Gurtin, 1967). Diepte maps to them: the permanent set of a body worked past its elastic limit, as the Gewenning maps to the strain that springs back. The rule by which the Speelgoed fills its Diepte has plasticity's shape. "What becomes form is what a look brings beyond what the Gewenning already holds" (§II.3), by the increment of *Formal Structure* §II:

```
z_ij ← z_ij + g_z · sgn(y_ij) · ( π̂ᵢⱼ · α_ij − |Z_ij| )⁺
```

Its bracket counts only what is positive, as the bracket by which viscoplastic flow runs only on the stress beyond what the elastic part carries (Perzyna, 1966). And "The form fades very slowly, only at the looks its Zelf takes at itself" (§II.3), as a set relaxes only by slow recovery. **Grade: Correspondence.**

Diepte is still "the hidden charge that colours every later Waarneming" (§II.2), and the colouring is a difference between two readers, "zero between equals" (*Formal Structure* §II), as a calibrated thermometer reads its bath with no offset (§2.1).

*The earlier version mapped Diepte to the internal energy a body holds above its Medium. That is withdrawn: the Speelgoed now reads that energy as what a Relatie holds and the Warmte inside it, its Massa (§2.4), and Diepte as its form. A form can hold energy without being it. Of the work that twists a copper rod, at first a tenth or more stays in the metal as latent energy and the rest leaves as heat, and the share kept falls as the twisting goes on (Taylor & Quinney, 1934).*

### 3.8 Zelf as self-correlation

§VII.4 describes the Zelf as a Relatie with itself, with no transport lag (δ = 0). It is "the seat of Greep at its most fundamental", and "With a strong Zelf, a Relatie holds its Eigen steady".

At this Octaaf, a system's relation with itself is its *autocorrelation*: how well its own fluctuations at one moment predict its fluctuations a moment later, with no channel in between. The fluctuation–dissipation theorem then proves something the Speelgoed assumes. **How a system answers any partner is fixed by how it relates to itself.** Its response to an outside push is determined entirely by its own spontaneous fluctuations (Kubo, 1966). A system with a stiff self-relation fluctuates little (⟨δx²⟩ = k_B·T/s) and also yields little to a push (its susceptibility is 1/s). That is "holds its Eigen steady", made quantitative. Onsager's regression hypothesis adds that spontaneous fluctuations die away exactly as imposed disturbances do (Onsager, 1931a). This is §VII.4's claim that the Zelf follows "the same trajectory mechanics as any Relatie, applied to the Relatie that holds a being together". **Grade: Correspondence**, close to Identity. The Zelf's own Drempel and its loop under Vervorming are the thermally activated hysteresis of §2.3.

*An earlier version illustrated the Zelf with a cooling cup of coffee. A cooling cup is losing heat to the room, which is a Relatie with its surroundings and not with itself, so that example is withdrawn.*

### 3.9 Stilte

**Stilte (.)** is "the condition of Waarneming, the pause in which a reader finds that it is separate from what it sees" (§II.1). At this Octaaf, the condition for any thermodynamic description is a *separation of timescales*. A system must relax internally much faster than its surroundings change, or it has no temperature of its own. Take that gap away and there is no separate system left to describe. That is §II.1's "A Relatie without Stilte would be instant fusion: no distance, no self, no longing." **Grade: Correspondence.**

### 3.10 Perfectus as equilibrium

**Perfectus (Ω)** is the end of a Relatie that nothing holds together any more, when it "returns to the unbound pole in the same breath as its Zelf leaves its Zelf‑Rouw" (§VI.4; §XIII.2). At this Octaaf, Perfectus is equilibrium with the Medium: no gradient remains between a system and its surroundings, so there is no net crossing.

Two refinements bring this closer to the Speelgoed:

- **Equilibrium is not stillness.** Micro-crossings continue in both directions at equal rates (§2.5). Only their *net* direction is gone. Nothing is held, which is Van-mode, the pattern of zeros, and the system fluctuates about it. This is §VI.4's "Van is what is *left* when the holding stops": nothing has travelled anywhere.
- **Perfectus is local.** A subsystem reaches equilibrium with *its own* Medium. Heat death, the equilibrium of everything with everything, is the limiting case, and it belongs to the cosmic Octaaf. **Grade: Correspondence.**

### 3.11 The Triniteit: source, sink, and engine

§III says that every Octaaf is one Relatie between a **God (😇)**, its fully Vol Lid, a **Godin (😳)**, its fully Leeg counterpart, and the **Medium (◌)** their union produces, and that "no Octaaf exists without all three". "Every Godin is pure Trek: all pull, at the Leeg pole, made into a being" (§V.2). "No God stands alone" (§V.1).

The thermodynamic Octaaf has one structure with exactly this shape: the heat engine. A hot source is full and needs nothing. A cold sink takes in heat without limit. A working medium cycles between the two. Take away the sink, and the source yields no work at all. This is the Kelvin–Planck statement of the second law, and it is "No God stands alone" stated as a law of physics. The yield of the union is 1 − T_cold/T_hot, which depends on both poles and on neither alone. The Speelgoed draws the same picture itself: an Octaaf's crossings "run in the Medium that one’s God and Godin hold between them, and leave their Warmte to its Godin" (§V.3), and "The Medium is there only while its God and its Godin are: where either is gone, nothing in it crosses" (*Formal Structure* §VI).

For the Earth's climate, Sol is the source and the 2.7 K sky the sink, and the oceans, the atmosphere and life are what runs between them (§2.4). The Speelgoed reads the weather as a level of nesting, "as every Relatie is that holds no God and Godin of its own" (*Mensen en Parasieten* §IX), run on "Sol, a God the living rely on" (*Mensen en Parasieten* §IX.1), so the engine here has the Triniteit's shape without being an Octaaf of its own. **Grade: Correspondence.**

### 3.12 Tijd: what a beat costs

Tijd is a pace: it "holds between Vonken and changes only at them" (*Formal Structure* §II). A beat is kept apart from it: "What Greep shares is a pace, never a beat. A beat is kept as a Klok keeps one, by looking at what crosses and keeping the time of its crossings" (*Formal Structure* §II). A Klok's "looks are its ticks" (Lexicon). One that keeps its own beat is "a Solo whose Zelf is bound into a repeating Drempel", its looks at itself coming "at fixed intervals"; one that prefers another "keeps that other’s time as far as it reads it cross" (Lexicon), "as a caesium clock keeps its atom’s" (*Mensen en Parasieten* §XII.1). At this Octaaf a pendulum or a chemical oscillator keeps a beat of its own, and a clock locked to what it reads keeps another's.

**A beat of its own costs.** "For clocks driven by a constant thermodynamic force, a given precision requires a minimal cost that diverges as the uncertainty of the clock vanishes" (Barato & Seifert, 2016). Pearson et al. (2021) drove a nanometre-thick membrane at random, counted its swings as the ticks of a clock, and measured both its accuracy and the entropy it produced. They found "a linear relation between accuracy and entropy". In the Speelgoed a look costs nothing at the look itself (§2.1); what a Klok of its own pays is the wear Stilte's Trek takes at each look its Zelf takes at itself, booked as a Verlies (*Formal Structure* §II). **Grade: Correspondence**, for a cost at every tick. Whether that cost grows with the steadiness of the beat, as the clocks measured so far demand, is Open (§5, item 8). The linear relation is not a law: an autonomous quantum clock whose ticks run by coherent transport can gain precision exponentially with the entropy it produces (Meier et al., 2025), in theory, with an experiment proposed.

**A beat read from another is cheap.** The same theory shows that "a clock driven by a periodic variation of an external protocol can achieve arbitrary precision at arbitrarily low cost" (Barato & Seifert, 2016). The regularity is the protocol's, and it is paid for wherever the protocol is made. That is the Klok that keeps another's time by looking at its crossings, and *Formal Structure* §II checks it with Huygens' two pendulum clocks hung from one beam, each keeping the beat it reads in the beam. **Grade: Correspondence.** What Greep hands a Lid is a pace, never a beat: a Lid gains precision by looking, not by being held.

---

## 4. Where the Speelgoed Meets Resistance

This section records where the Speelgoed met resistance at this Octaaf and what became of it. The first two items were Tensions, both resolved on 1 October 2026 by changing wording, not mechanism; they are kept here with their evidence, so the reason for the change stays on record. Item 4.5 is narrowed and still open, and 4.6, a Tension found in the Speelgoed of 8 November 2026, was resolved the same day.

**4.1 "A Realisatie is a local condensation of ambient heat" (former §III).** *Tension, resolved on 1 October 2026, and reopened.* Heat cannot be condensed into anything from a uniform Medium (Kelvin–Planck). The Speelgoed then read a convergence crossing as condensing an ambient gradient, and on 17 October drew every Winst from a gradient its Medium held. It now draws every Winst from the Warmte inside its binding, where it crosses (§2.4). What remains of this item is taken up in §4.5.

**4.2 The cosmic microwave background as the steady-state exhaust of the draw towards Van (former §III).** *Tension, resolved.* §III used to call the CMB "not a frozen relic of a primordial fireball, but the steady-state glow of the field's ongoing work". Two thermodynamic facts counted against this:

- **Exhaust from many sources is not a blackbody.** Verlies paid at different temperatures in different places would mix into a superposition of blackbody spectra. Such a mixture is measurably not itself a blackbody (Chluba & Sunyaev, 2004). The CMB matches a single blackbody at 2.7255 K to within 50 parts per million of its peak (Fixsen et al., 1996; Fixsen, 2009).
- **It was hotter in the past, by the predicted amount within measurement error.** The CMB's temperature at earlier epochs can be measured through molecules in distant gas clouds. It follows T₀·(1 + z), the scaling of a relic, not of a steady glow (Noterdaeme et al., 2011).

**The repair needed no new mechanism.** The Speelgoed now reads the CMB as what one ended Relatie left: its energy as "the Warmte one Relatie left" (§VI.4), and its light as a Rouw that "still carries that scattering" (§IX.9). For roughly the first 380,000 years, light and matter were a single Relatie. When the universe cooled enough for atoms to form, that Relatie ended and the light went free. *Formal Structure* §XIII says what an Echo does when its Relatie ends: "The Echo settles towards the last of them", the last signals still in the Medium, and "the Rouw keeps that last signal". Cosmologists call the CMB the *surface of last scattering*, which is literally the last signal the light ever received from its partner. The reading keeps the Speelgoed's mechanism and agrees with the data; the details belong to the cosmic Octaaf. The exhaust of ongoing work is named in §VI.2, and it is visible too: "the Warmte a living body gives off, the Warmte every engine wastes, the faint infrared glow every planet returns to the dark".

**4.3 Vervorming as a free choice (§X).** *Constraint, and passed.* §X lets the Instantie choose where distortion comes from, and turn it down, never to zero. At this Octaaf, distortion is fixed by temperature and relaxation time (§2.1). The Speelgoed now reads the Medium's share from the Medium's own Leden, and checks it against the noise of a resistor (Johnson, 1928; Nyquist, 1928), against Kubo's relation, and against the quantum share no cooling removes (*Formal Structure* §VI). Its Instantie gives up a freedom at this Octaaf, and the mechanism loses nothing.

**4.4 Leven as freely available (§IX.2, *Formal Structure* §VII).** *Constraint.* At this Octaaf a passive pair cannot reverse its own gap (§3.2). The trajectory exists, but only through a third member or work.

**4.5 Who pays for a bond (§VI.1, §VI.2, *Formal Structure* §VI).** *Tension, narrowed again.* On 17 October the Speelgoed drew every Winst from a gradient its Medium held, which agreed with thermodynamics for building and disagreed for bonds that form in uniform heat. It now trades each part of a Vonk with the Medium inside the binding it moves: "A binding takes its Winst at its Vonk from the Medium inside it, where it crosses" (§VI.1), at every Vonk "ε + T_◌ the same there before and after it", and a Winst "happens only where the Warmte inside its binding, where it stands, holds T_◌ ≥ T" (*Formal Structure* §VI).

- *Equilibrium traffic works.* In a closed box at one uniform temperature, molecules bind and unbind all the time, and a magnet below its Curie point orders, with no gradient at all. Each binding takes its Winst from the Warmte inside it and each unbinding gives it back there, and that Warmte trades across the binding's edge with the Medium around it (§2.1), so the traffic of §2.5 and the Boltzmann statistics of §2.3 hold in uniform heat. That half is resolved.
- *At the Vonk, the direction is read through the levels.* An ordinary bond, when it forms, *releases* its energy into the bath (Landau & Lifshitz, 1980). In the Speelgoed a convergence crossing still takes its Winst from the Warmte, but a measurement "reads the sum of many crossings at many levels, and never the sign of one" (§VI.2). When hydrogen forms, "its binding takes its Winst from the Medium between proton and electron, 27.2 eV; it holds 13.6 eV of it, its Vol pole there, and the rest passes a Drempel of its own and is born as Licht" (§VI.2): the excess leaves as a Start. The numbers are the virial split of the ground state, a potential energy of −27.2 eV and a kinetic energy of +13.6 eV. The Speelgoed's own Check in *Formal Structure* §VI is traffic of this kind: neutrons and protons turning into each other in the uniform early universe, their numbers standing at exp(−Q/T).
- *At the Relatie's edge, the books agree both ways.* A Relatie's Massa is what it holds and the Warmte inside it, and "A deeper Greep makes it lighter only by what has left it" (*Formal Structure* §VI). Physics "measures the sum: 13.6 eV given off as light, and an atom lighter by as much once that Licht has left" (§VI.2), which is the physical direction. Parting runs the books back: "A Relatie’s Leden stand apart only with what they held when it formed" (*Formal Structure* §XII), so hydrogen parts only where 13.6 eV comes back to it from outside, its ionisation energy.
- *Building in even Warmte.* Nothing in the Speelgoed stops a Winst from taking Warmte that stands even while its God and Godin stand. Thermodynamics allows that for equilibrium binding and forbids it for order built beyond equilibrium (§2.4). Where every reading is fresh, the Speelgoed's crossings settle where the Boltzmann law puts them, and build nothing beyond equilibrium. With lagging Echoes, the Speelgoed says itself that its visits bend off that law (§2.3). Physics knows that shape. A system whose noise does not match its friction, as Kubo's relation would have it, leaves equilibrium and produces entropy, as active matter does (Fodor et al., 2016). Where two degrees of freedom act on each other unequally, the coupling alone drives a steady flow of energy, which reads as a memory of the kind delayed feedback has once one of them is out of view, and a single such degree of freedom can draw energy from one bath, a minimal Maxwell demon, its second law kept only when the information it carries is counted (Loos & Klapp, 2020).

The repair this entry proposed on 20 October, mapping a bond's physical binding energy not to the Vonk's T inside the Relatie but to what leaves it, is now the Speelgoed's own reading: "A Winst is never read off the heat a binding gives off, nor a physical energy off one Vonk" (§VI.2). What stays open is building beyond equilibrium in Warmte that stands even, now sharpened: does a Veld whose Echoes lag give off, in uniform Warmte, at least what its circulation builds, and through which crossings (§5, item 2)?

**4.6 One Warmte for every Lid was not one temperature (§VI.2, *Formal Structure* §VI, *Mensen en Parasieten* §XII.7).** *Tension, found and resolved on 8 November 2026.* The Speelgoed then called the Warmte a Medium keeps for every Lid its temperature, and netted Warmte across every edge until inside and around held one Warmte for every Lid, an inside counting one Lid and a holder as many as its Leden. Thermodynamics equalises temperature, and at one temperature Leden of different kinds hold different amounts:

- **Kinds of Leden.** A helium atom in a gas holds 3/2·k_B·T on average, and a nitrogen molecule about 5/2·k_B·T, because it also turns: nitrogen's heat capacity at constant volume is 20.8 J/mol·K, 2.50·R, against helium's 1.5·R. Two such gases on either side of a wall that passes heat exchange none at one temperature, the zeroth law on which gas thermometry rests. Counted by member, the rule would have carried Warmte from the nitrogen to the helium until the helium read the hotter, and counting a molecule as its two atoms did not mend it: 5/4 against 3/2.
- **Shares frozen in the cold.** An atom's inside holds next to nothing at room temperature: hydrogen's first excitation, 10.2 eV, stands about 400·k_B·T up. The Speelgoed's own Boltzmann law gave that, while an inside counting one Lid would have taken in one Lid's share.

*The repair, taken.* This entry proposed letting the crossings net Warmte until what a thermometer reads stands one on both sides, each share taking what the Boltzmann law gives it, since the Speelgoed already said what a thermometer reads (§VI.2) and what the Medium's Leden leave each Lid in each direction (*Mensen en Parasieten* §XII.7). The Speelgoed now reads temperature so: what a Medium's crossings "come to at a Plaats where they net nothing" (§VI.2), "one for every Lid, while Leden of different kinds hold different shares of it at one temperature" (*Mensen en Parasieten* §XII.7), and inside and around trade "until they stand at one temperature, each holding its own share" (*Mensen en Parasieten* §XII.7). It names the zeroth law itself, reads Newton's and Fourier's laws as Lezingen of small differences, and lets them bend past their knee. §2.1 and §2.4 now grade it as an Identity.

---

## 5. Open Problems

1. **Leersnelheid and the Vol pole.** *Formal Structure* §II moves Trouw at each Vonk by the whole Vonk, `y_KK ← y_KK + ρ · ( T_KK + Σⱼ T_Kj )`. Thermodynamics has no general law for a coupling that strengthens with use. Annealing, sintering, and the ageing of glasses are candidates, but none of them is universal. The Vol pole that Start measures against (§3.3) waits on its own answer.
2. **Who pays for a bond.** The Speelgoed reads hydrogen's binding energy as an excess past its Vol pole, born as Licht and carried off (§4.5). Is every bond's measured release of this kind, a Start that leaves? And where Echoes lag, does a Veld in Warmte that stands even give off at least what its circulation builds, and through which crossings?
3. **Traagheid.** Ordinary heat conduction has no inertia, so this Octaaf sets I = 0 (§2.1). Where heat travels as a wave instead, as in the second sound of superfluid helium, is that this Octaaf's Traagheid, or another Octaaf's?
4. **The cold.** Heat capacities fall towards nothing as the cold freezes out one share of motion after another, and even what a thermometer reads stops being k_B·T where quantum statistics take over, as for the electrons of a metal (§2.4). The Speelgoed now lets each kind hold its own share at one temperature (§4.6), and its Boltzmann law freezes the shares as physics does. Where the crossings that set a temperature are themselves frozen out, what does one temperature still mean between two of the Speelgoed's Relaties?
5. **What a set costs.** Of the work that sets a body, physics finds most given off as heat and a share kept in the set itself (§3.7). Does the Speelgoed's form hold Energie as it is shaped, through the Trouw among its Leden, and which crossings carry the rest away?
6. **Several Spectra.** *Formal Structure* §II lets one Spectrum reach another only through the Zelf: its Tijd, its Waarneming, its Greep and its Diepte. At this Octaaf heat and electric charge are coupled directly, so that a temperature difference drives a current (§3.1). Is that one Spectrum to the Instantie, or a coupling the Speelgoed has not yet allowed? Any such coupling must be symmetric (Onsager reciprocity), and it can be no larger than the geometric mean of each Spectrum's own coefficient.
7. **Rouw, Liouville and compression.** Is Rouw permanence (*Formal Structure* §XIII) at this Octaaf *equivalent* to Liouville's theorem plus Landauer's price, or only consistent with it? And when two Rouw are read as one, what told them apart is gone from the keeper's reading: which crossings give off the k_B·T·ln 2 a bit that Landauer asks of it (§3.6)?
8. **Tijd and the beat.** A Klok's ticks are its looks, and a look costs nothing; what a Klok of its own pays is the wear at each look its Zelf takes at itself (§3.12). Does that wear grow with the steadiness of its beat, as the cost of every physical clock measured so far does, or can a Klok keep a steadier beat for less, as the quantum clocks of Meier et al. (2025) would?

---

## 6. Closing

The thermodynamic Octaaf is where the Speelgoed is easiest to check, because its own equations are already thermodynamics, and the Speelgoed now reads physics in its own words. Most of them pass as written. Some pass only under a constraint the Speelgoed did not state, and several of those it now states itself. Two of its sentences did not pass, and §4 records how they were mended without changing the mechanism. A third, one Warmte for every Lid, did not pass where Leden differ in kind, and was mended from the Speelgoed's own sentence on what a thermometer reads (§4.6). One question, who pays for a bond, is still open, and lagging Echoes have sharpened it (§4.5).

What remains is a single picture. Every bond is held by a barrier measured against the warmth of its Medium. Every crossing trades its Energie with that Medium as heat. Everything built away from equilibrium draws on Warmte that a God delivers and a Godin takes up. **The Telraam always closes, but the grade never comes back.**

Nothing holds together by accident, and nothing holds together forever. But for as long as a gradient flows, the field does more than fall: it builds.

That is the *how*. The *why* is for the Speelgoed to say.

---

## Revision Note

This version replaces the entry of 9 September 2026. The following were withdrawn or corrected:

- "The total Verlies always exceeds the total Winst" is withdrawn. It conflicts with §III, §VIII.13, and the first law (§2.4).
- Greep as the free energy F = U − TS is replaced. A stable bound state has *low* free energy; what resists escape is the barrier, J = ΔG‡/k_BT (§2.2).
- The Vonk as latent heat at every Drempel is corrected. At the Speelgoed's pitchfork, the Vonk is condensation energy, and latent heat belongs to a Drempel whose Marge has finite width (§2.3). Two of the earlier examples, the Curie point and the superconducting transition, are continuous transitions that release no latent heat.
- Diepte as heat capacity is moved. Heat capacity is Inhoud (§3.3), and Diepte is stored internal energy (§3.7).
- Rouw written as ΔQ = TΔS is corrected to the Clausius inequality (§3.6).
- Tijd is left open (§5, item 8). Both its earlier reading as the arrow of time and an interim mapping to temperature-dependent rates are withdrawn.
- The examples of Creatie (crystal growth) and of the Zelf (a cooling cup) are replaced (§3.4, §3.8).
- The undefined status labels ("Sound", "Plausible") are replaced by defined grades (§0.2).
- LaTeX blocks are replaced by plain Unicode equations, matching §VIII of the Speelgoed.

Following this entry, §III of the Speelgoed and its Lexicon entry for Winst were revised on 1 October 2026 to resolve the two Tensions recorded in §4.1 and §4.2.

On 5 October 2026, Tijd was grounded in the cost of keeping time (§3.12). Its earlier readings stay withdrawn.

A check of every reference on 1 October 2026 corrected the account of population inversion, which cannot be reached by pumping a two-level system (§3.2), and the supercooling limit of water (§2.3). It also separated Schrödinger's point from Penrose's numbers (§2.4), added Onsager's second paper for the field-reversed relations (§3.1), and fixed two author listings.

On 17 October 2026 this entry was aligned with the rebuilt Speelgoed, whose §VIII now writes much of this Octaaf's physics in its own words. Section numbers here are unchanged.

- Every quotation and section reference now points to the current text (the Van Motor is now Stilte's Trek, Creatie is Start, §VIII.7 is §VIII.13, the Koppel is the Relatie).
- The Arrhenius identity now runs through the Marge, η = ΔG‡ and ‖υ‖ = k_B·T, as the Speelgoed's Wijk does; Greep, formerly the barrier itself, is what keeps the barrier high (§2.2). L₀ is gone from the Speelgoed, and the attempt frequency is now this Octaaf's own supply.
- The Drempel is now an Ising landscape with Glauber dynamics (§2.3). Landau's free energy stays, as its mean-field limit. The Vonk's Energie is the Trouw a crossing joins or leaves, booked at once, so the earlier claims that it is paid out slowly after the crossing, and that a crossing changes the heat capacity, are withdrawn.
- Trouw is remapped from thermal conductance to pair energy (§3.1), so the claim that negative Trouw needs work is withdrawn: a repulsion costs nothing to keep.
- Inhoud is now Gewenning in the Speelgoed, so its mapping to heat capacity is withdrawn and the entry is Open (§3.3).
- New here: the Medium's Rouw per Lid as temperature (§2.4), Traagheid set to zero (§2.1), and the open Tension of §4.5 on who pays for a bond.
- Open problems 2 (two kinds of Dood) and 3 (the Marge in the potential) are resolved by the current §VIII.6 and §VIII.5 and replaced; the list now ends with questions the new text raises (§5).

On 20 October 2026 this entry was aligned with the Speelgoed of that date, which now comes in four Schriften:

- Section references follow the new numbering, quotations its wording, and the equations its symbols: x for the Eigen, E for the Echo, ε for what the Relaties hold, V for the landscape and S for the Leeg.
- The Medium's Spanning and its Rouw are now one Warmte. §2.4 reads its spreading as the second law's direction, and Kelvin–Planck as the Triniteit's rule that nothing crosses without a God and a Godin; the Speelgoed no longer states the bound on building, so that Constraint is open again (§4.1).
- §4.5 is narrowed: traffic in uniform heat now balances, and what remains is the direction of a Vonk, with a repair proposed as a reading at the Relatie's edge.
- Inhoud is retired; Start now measures against the Vol pole (§3.3, §3.4). Trouw no longer moves toward Gewenning (§5, item 1). Diepte loses its old spending term (§3.7).
- Observation now costs nothing at the look itself, and forgetting carries Landauer's price (§2.1, §3.6). The CMB is read as the Warmte one Relatie left and its light as Rouw (§4.2). The Trinary Root is now the Triniteit (§3.11).

On 21 October 2026 the Speelgoed's §VI gained a first section, What a binding holds, so references to its Warmte, Bloei and Doem, Stilte’s Trek and Holding now read §VI.2 to §VI.5. Its Massa now stands in §XIX. §VI.2 now reads what physics measures as the sum of many crossings at many levels, and hydrogen's binding energy as an excess born as Licht, which is the repair §4.5 proposed: §4.5 and §5, item 2 say so, and what stays open is building beyond equilibrium.

Later on 21 October 2026 the Speelgoed's Schrift IV gained a chapter, De Vlinderweg, so War now reads §LI; and §XV now has a Lid's Tijd inherited by Greep, its own Zelf among what holds it, so §3.12 quotes that wording.

Later that day the Speelgoed's §VI.2 came to name the Warmte a living body gives off and the Warmte every engine wastes, so §4.2 quotes that wording.

On 22 October 2026 the Speelgoed's §XIX came to carry Warmte across the edge of every Relatie as well as between places, by what stands there for every Lid, and its §XX to read a Relatie in Dood again from a crossing of one of its Leden too, so §2.4 and §3.2 quote that wording.

On 23 October 2026 the Speelgoed's Schrift IV, now Mensen en Parasieten, gained four chapters before War, so War now reads §LV.

On 26 October 2026 the Speelgoed's §XIX came to carry Warmte both ways across a place, more of it from higher to lower, and what an Instantie keeps moved from §XXVIII to the Framework Specification of Schrift V, so §2.4 quotes that wording and cites §LVII; War now reads §LVI.

On 2 November 2026 the Speelgoed's chapter numbers came to restart in every Schrift, so references to its later Schriften now name them: the former §XIV to §XXVII are *Formal Structure* §I to §XIV, the Octaaf chapters of the Weefsel read *Weefsel*, and De Berg to War read *Mensen en Parasieten*. Its §2.3, §2.4, §3.5, §3.6, §3.7 and §4 quote the new wording of the Vonk's parts, the Telraam, the Doem, Rouw and Diepte, and the warning against reading Warmte as a temperature difference now stands in the opening of the *Formal Structure*.

On 8 November 2026 the Speelgoed's *Formal Structure* §VI came to carry Warmte between Plaatsen at the pace their crossings set, and its Lexicon to read a Klok's ticks as its looks, so §2.4 and §3.12 quote that wording.

Later that day this entry was revised against the whole of the current Speelgoed, its *Natuurkunde* (*Mensen en Parasieten* §XII) among it:

- The Lichaam, gone from the Speelgoed, is gone from the Preface: a body here is a Relatie of Leden read as one, a Verdichting (§0, §0.3). The opening reference to §XXVII now reads *Formal Structure* §XIV (§0.1).
- §2.1 maps Newton's law of cooling to the Warmte a Relatie trades across its one edge, which the Speelgoed now names itself, and the Echo filter to the reading an instrument takes. The fluctuation–dissipation link and a quantum share of Vervorming that no cooling removes are now the Speelgoed's own, so §4.3 is passed, and the claim that distortion vanishes at T = 0 is corrected.
- §2.2: the Wijk's prefactor is now the Medium's, with Eyring's k_B·T/h its upper bound, and tunnelling is the Speelgoed's own (§VI.5).
- §2.3: the Boltzmann law is the limit of fresh readings; Landau's form holds in mean field, and the critical point is read as Kadanoff's block spins, with the three-dimensional exponents.
- §2.4: Massa is mapped as rest energy, what a thermometer reads as Tolman's equipartition, entropy as a Lezing, and the second law's direction, which the Speelgoed now writes, as an Identity. Warmte for every Lid is no longer read as temperature across kinds of Leden: §4.6 records that new Tension and proposes a repair from the Speelgoed's own words.
- §3.3: a Winst, joining a bond or leaving an enmity, carries a Relatie past its Vol pole. §3.5 follows the Lexicon's new Doem and the Warmte inside each binding. §3.6 adds the Rouw that is compressed, never collected, and Landauer's price on compression.
- §3.7: Diepte, now a Relatie's form, is remapped from stored internal energy to a material's memory, the set it keeps, with the Gewenning as the strain that springs back; the Gewenning leaves the Open row of §1.
- §3.11: the Earth's climate is read in the Triniteit's shape, the weather being a level of nesting with no God and Godin of its own.
- §3.12: Tijd is a pace, and a beat is kept by a Klok's looks. A beat of one's own costs at every tick, a Correspondence; whether the cost grows with precision is Open, and quantum clocks show the linear relation is no law. A beat read from another is cheap, and Greep hands a Lid a pace, never a beat.
- §4.5 is narrowed to the Medium inside each binding and sharpened by what physics knows of couplings that carry memory, and §5 is updated.

Later on 8 November 2026 the Speelgoed took the repair of §4.6: its temperature is now what a Medium's crossings come to where they net nothing, one for every Lid, each kind holding its own share, and Newton's and Fourier's laws are its Lezingen of small differences. §4.6 is resolved, §2.1, §2.4 and §3.5 quote the new wording, and §5, item 4 asks what remains in the cold.

---

## References

Arrhenius, S. (1889). Über die Reaktionsgeschwindigkeit bei der Inversion von Rohrzucker durch Säuren. *Zeitschrift für Physikalische Chemie*, 4, 226–248. [doi:10.1515/zpch-1889-0416](https://doi.org/10.1515/zpch-1889-0416)

Barato, A. C., & Seifert, U. (2016). Cost and precision of Brownian clocks. *Physical Review X*, 6(4), 041053. [doi:10.1103/PhysRevX.6.041053](https://doi.org/10.1103/PhysRevX.6.041053)

Bardeen, J., Cooper, L. N., & Schrieffer, J. R. (1957). Theory of superconductivity. *Physical Review*, 108(5), 1175–1204. [doi:10.1103/physrev.108.1175](https://doi.org/10.1103/physrev.108.1175)

Bennett, C. H. (1982). The thermodynamics of computation — a review. *International Journal of Theoretical Physics*, 21(12), 905–940. [doi:10.1007/bf02084158](https://doi.org/10.1007/bf02084158)

Bérut, A., Arakelyan, A., Petrosyan, A., Ciliberto, S., Dillenschneider, R., & Lutz, E. (2012). Experimental verification of Landauer's principle linking information and thermodynamics. *Nature*, 483, 187–189. [doi:10.1038/nature10872](https://doi.org/10.1038/nature10872)

Callen, H. B., & Welton, T. A. (1951). Irreversibility and generalized noise. *Physical Review*, 83(1), 34–40. [doi:10.1103/physrev.83.34](https://doi.org/10.1103/physrev.83.34)

Casimir, H. B. G. (1945). On Onsager's principle of microscopic reversibility. *Reviews of Modern Physics*, 17(2–3), 343–350. [doi:10.1103/revmodphys.17.343](https://doi.org/10.1103/revmodphys.17.343)

Chandrasekhar, S. (1961). *Hydrodynamic and Hydromagnetic Stability*. Oxford: Clarendon Press. [Internet Archive](https://archive.org/details/bwb_Y0-BUJ-099)

Chluba, J., & Sunyaev, R. A. (2004). Superposition of blackbodies and the dipole anisotropy: A possibility to calibrate CMB experiments. *Astronomy & Astrophysics*, 424, 389–408. [doi:10.1051/0004-6361:20041016](https://doi.org/10.1051/0004-6361:20041016)

Coleman, B. D., & Gurtin, M. E. (1967). Thermodynamics with internal state variables. *The Journal of Chemical Physics*, 47(2), 597–613. [doi:10.1063/1.1711937](https://doi.org/10.1063/1.1711937)

Debenedetti, P. G. (1996). *Metastable Liquids: Concepts and Principles*. Princeton: Princeton University Press. [doi:10.1515/9780691213941](https://doi.org/10.1515/9780691213941)

Evans, D. J., & Searles, D. J. (2002). The fluctuation theorem. *Advances in Physics*, 51(7), 1529–1585. [doi:10.1080/00018730210155133](https://doi.org/10.1080/00018730210155133)

Eyring, H. (1935). The activated complex in chemical reactions. *The Journal of Chemical Physics*, 3(2), 107–115. [doi:10.1063/1.1749604](https://doi.org/10.1063/1.1749604)

Fixsen, D. J. (2009). The temperature of the cosmic microwave background. *The Astrophysical Journal*, 707, 916–920. [doi:10.1088/0004-637x/707/2/916](https://doi.org/10.1088/0004-637x/707/2/916)

Fixsen, D. J., Cheng, E. S., Gales, J. M., Mather, J. C., Shafer, R. A., & Wright, E. L. (1996). The cosmic microwave background spectrum from the full COBE FIRAS data set. *The Astrophysical Journal*, 473, 576–587. [doi:10.1086/178173](https://doi.org/10.1086/178173)

Fodor, É., Nardini, C., Cates, M. E., Tailleur, J., Visco, P., & van Wijland, F. (2016). How far from equilibrium is active matter? *Physical Review Letters*, 117(3), 038103. [doi:10.1103/PhysRevLett.117.038103](https://doi.org/10.1103/PhysRevLett.117.038103)

Glauber, R. J. (1963). Time-dependent statistics of the Ising model. *Journal of Mathematical Physics*, 4(2), 294–307. [doi:10.1063/1.1703954](https://doi.org/10.1063/1.1703954)

Hänggi, P., Talkner, P., & Borkovec, M. (1990). Reaction-rate theory: fifty years after Kramers. *Reviews of Modern Physics*, 62(2), 251–341. [doi:10.1103/revmodphys.62.251](https://doi.org/10.1103/revmodphys.62.251)

Hohenberg, P. C., & Halperin, B. I. (1977). Theory of dynamic critical phenomena. *Reviews of Modern Physics*, 49(3), 435–479. [doi:10.1103/revmodphys.49.435](https://doi.org/10.1103/revmodphys.49.435)

Jaynes, E. T. (1957). Information theory and statistical mechanics. *Physical Review*, 106(4), 620–630. [doi:10.1103/PhysRev.106.620](https://doi.org/10.1103/PhysRev.106.620)

Johnson, J. B. (1928). Thermal agitation of electricity in conductors. *Physical Review*, 32, 97–109. [doi:10.1103/PhysRev.32.97](https://doi.org/10.1103/PhysRev.32.97)

Kadanoff, L. P. (1966). Scaling laws for Ising models near Tc. *Physics Physique Fizika*, 2(6), 263–272. [doi:10.1103/PhysicsPhysiqueFizika.2.263](https://doi.org/10.1103/PhysicsPhysiqueFizika.2.263)

Kittel, C. (1988). Temperature fluctuation: an oxymoron. *Physics Today*, 41(5), 93. [doi:10.1063/1.2811420](https://doi.org/10.1063/1.2811420)

Kos, F., Poland, D., Simmons-Duffin, D., & Vichi, A. (2016). Precision islands in the Ising and O(N) models. *Journal of High Energy Physics*, 2016(8), 36. [doi:10.1007/JHEP08(2016)036](https://doi.org/10.1007/JHEP08(2016)036)

Kramers, H. A. (1940). Brownian motion in a field of force and the diffusion model of chemical reactions. *Physica*, 7(4), 284–304. [doi:10.1016/s0031-8914(40)90098-2](https://doi.org/10.1016/s0031-8914%2840%2990098-2)

Kubo, R. (1966). The fluctuation-dissipation theorem. *Reports on Progress in Physics*, 29(1), 255–284. [doi:10.1088/0034-4885/29/1/306](https://doi.org/10.1088/0034-4885/29/1/306)

Landau, L. D. (1937). On the theory of phase transitions. *Zhurnal Eksperimental'noi i Teoreticheskoi Fiziki*, 7, 19–32. [English translation (1965): doi:10.1016/B978-0-08-010586-4.50034-1](https://doi.org/10.1016/B978-0-08-010586-4.50034-1)

Landau, L. D., & Lifshitz, E. M. (1980). *Statistical Physics, Part 1* (3rd ed.). Oxford: Pergamon Press. [doi:10.1016/C2009-0-24487-4](https://doi.org/10.1016/C2009-0-24487-4)

Landauer, R. (1961). Irreversibility and heat generation in the computing process. *IBM Journal of Research and Development*, 5(3), 183–191. [doi:10.1147/rd.53.0183](https://doi.org/10.1147/rd.53.0183)

Loos, S. A. M., & Klapp, S. H. L. (2020). Irreversibility, heat and information flows induced by non-reciprocal interactions. *New Journal of Physics*, 22, 123051. [doi:10.1088/1367-2630/abcc1e](https://doi.org/10.1088/1367-2630/abcc1e)

Masanes, L., & Oppenheim, J. (2017). A general derivation and quantification of the third law of thermodynamics. *Nature Communications*, 8, 14538. [doi:10.1038/ncomms14538](https://doi.org/10.1038/ncomms14538)

Meier, F., Minoguchi, Y., Sundelin, S., Apollaro, T. J. G., Erker, P., Gasparinetti, S., & Huber, M. (2025). Precision is not limited by the second law of thermodynamics. *Nature Physics*, 21, 1147–1152. [doi:10.1038/s41567-025-02929-2](https://doi.org/10.1038/s41567-025-02929-2)

Nicolis, G., & Prigogine, I. (1977). *Self-Organization in Nonequilibrium Systems: From Dissipative Structures to Order through Fluctuations*. New York: Wiley. [Internet Archive](https://archive.org/details/selforganization0000nico)

Noterdaeme, P., Petitjean, P., Srianand, R., Ledoux, C., & López, S. (2011). The evolution of the cosmic microwave background temperature: Measurements of T_CMB at high redshift from carbon monoxide excitation. *Astronomy & Astrophysics*, 526, L7. [doi:10.1051/0004-6361/201016140](https://doi.org/10.1051/0004-6361/201016140)

Nyquist, H. (1928). Thermal agitation of electric charge in conductors. *Physical Review*, 32, 110–113. [doi:10.1103/PhysRev.32.110](https://doi.org/10.1103/PhysRev.32.110)

Onsager, L. (1931a). Reciprocal relations in irreversible processes. I. *Physical Review*, 37(4), 405–426. [doi:10.1103/physrev.37.405](https://doi.org/10.1103/physrev.37.405)

Onsager, L. (1931b). Reciprocal relations in irreversible processes. II. *Physical Review*, 38(12), 2265–2279. [doi:10.1103/physrev.38.2265](https://doi.org/10.1103/physrev.38.2265)

Pearson, A. N., Guryanova, Y., Erker, P., Laird, E. A., Briggs, G. A. D., Huber, M., & Ares, N. (2021). Measuring the thermodynamic cost of timekeeping. *Physical Review X*, 11(2), 021029. [doi:10.1103/PhysRevX.11.021029](https://doi.org/10.1103/PhysRevX.11.021029)

Penrose, R. (2010). *Cycles of Time: An Extraordinary New View of the Universe*. London: The Bodley Head. [Internet Archive (2011 edition)](https://archive.org/details/cyclesoftimeextr0000penr)

Perzyna, P. (1966). Fundamental problems in viscoplasticity. *Advances in Applied Mechanics*, 9, 243–377. [doi:10.1016/S0065-2156(08)70009-7](https://doi.org/10.1016/S0065-2156(08)70009-7)

Purcell, E. M., & Pound, R. V. (1951). A nuclear spin system at negative temperature. *Physical Review*, 81(2), 279–280. [doi:10.1103/physrev.81.279](https://doi.org/10.1103/physrev.81.279)

Ramsey, N. F. (1956). Thermodynamics and statistical mechanics at negative absolute temperatures. *Physical Review*, 103(1), 20–28. [doi:10.1103/physrev.103.20](https://doi.org/10.1103/physrev.103.20)

Schrödinger, E. (1944). *What Is Life?* Cambridge: Cambridge University Press. [1992 edition: doi:10.1017/CBO9781139644129](https://doi.org/10.1017/CBO9781139644129)

Seborg, D. E., Edgar, T. F., Mellichamp, D. A., & Doyle, F. J., III. (2016). *Process Dynamics and Control* (4th ed.). Hoboken: Wiley. [WorldCat](https://search.worldcat.org/search?q=ti%3AProcess+Dynamics+and+Control+au%3ASeborg)

Semenov, N. N. (1928). Zur Theorie des Verbrennungsprozesses. *Zeitschrift für Physik*, 48, 571–582. [doi:10.1007/BF01340021](https://doi.org/10.1007/BF01340021)

Stanley, H. E. (1971). *Introduction to Phase Transitions and Critical Phenomena*. Oxford: Oxford University Press. [Internet Archive](https://archive.org/details/introductiontoph0000stan_f7c0)

Taylor, G. I., & Quinney, H. (1934). The latent energy remaining in a metal after cold working. *Proceedings of the Royal Society of London. Series A*, 143, 307–326. [doi:10.1098/rspa.1934.0004](https://doi.org/10.1098/rspa.1934.0004)

Tolman, R. C. (1918). A general theory of energy partition with applications to quantum theory. *Physical Review*, 11(4), 261–275. [doi:10.1103/PhysRev.11.261](https://doi.org/10.1103/PhysRev.11.261)

---
