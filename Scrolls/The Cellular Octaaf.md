# The Cellular Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of single cells and the bonds between them. It does not compete with cell biology, biochemistry, or microbiology. It tests whether the Speelgoed's mechanism, supplied with values from those fields, reproduces what they already know, and it says plainly where it does not.*

---

## 0. Preface

§V.2 follows the line of God/Godin Duos from the Quantum Octaaf to the Molecule Octaaf, and its last rung points toward this one: Water and hydrogen cyanide together are formamide, and from their chemistry "come both the rings and the chains of life", "each the start of an Octaaf of its own". This Octaaf lies further up that line. Its **Lichaam (🖕)** is a single cell. Its Relaties are the bonds a cell holds: with its neighbours, with the organelles that were once free-living bacteria, with the viruses that infect it, with the body it belongs to, and with itself.

The cell has one advantage over every other living Octaaf. It can be measured one at a time, and it can be rebuilt from parts. Biologists watch single bacteria switch, sense, divide and die under a microscope, and they build switches into cells from scratch to test the theory of how switches work. Of the living Octaven, this is where the Speelgoed's mechanics can be checked most directly against living matter. This entry does not skip the hard cases: cancer, the deaths cells carry out on themselves, and the unsolved step from molecule to cell.

### 0.1 What this document is

Like the other Octaven, this document is an **Instantie (⚙)**. It supplies the open quantities of §XXVII with values taken from science, then checks whether the shape the Speelgoed fixes survives. Where the two disagree, the disagreement is reported in §4 rather than smoothed over.

Five features set this Octaaf apart:

1. **The Drempel and the Marge are measured cell by cell, and built from scratch.** A cell's switch shows hysteresis and slows near its threshold. A switch made of two genes is a Duo of negative Trouw, and with steep repression its equations are the Speelgoed's own (§2.1).
2. **The Echo has a physical floor.** A cell cannot read its surroundings more precisely than the random arrival of molecules allows, and a sharper reading needs a longer Ontspanning (§2.3).
3. **Copying is bounded on both sides.** No copy is exact. Accuracy costs energy, and too little accuracy erases what is copied (§2.5).
4. **Endings come in two kinds.** A cell can end within itself or in a way that spreads to its neighbours, and the Speelgoed's Doem has room for both (§3.8).
5. **The hardest step is open.** How the bonds of the Molecule Octaaf became a cell is unsolved. This entry reports where the science stands, including a result from 2026, and does not pretend to close it (§3.10, §5).

### 0.2 Grades

Every mapping carries one of five grades, defined as in the other Octaven.

| Grade | Meaning |
|---|---|
| **Identity** | The Speelgoed equation and the scientific model are the same equation under a stated substitution of symbols. |
| **Constraint** | The science fixes, bounds, or forbids a choice the Speelgoed leaves open to its Instantie. |
| **Correspondence** | Same structure and same qualitative behaviour, but no shared equation. |
| **Tension** | The Speelgoed as written conflicts with established findings. A repair is proposed. |
| **Open** | Not resolved. |

An **Identity** shows that the Speelgoed uses the same mathematics as the science at this Octaaf. That is a test of consistency, not evidence that the Speelgoed explains more than the science already does. Which quantity a Speelgoed term is mapped to is also a choice, and the same term may map to different quantities at different Octaven.

### 0.3 Conventions

**Quotations.** Quotations from the Speelgoed leave out its bold markup and the symbols it puts in brackets after a term. Otherwise they are verbatim.

**References.** References such as §II or §XV point to the PseudoScience Speelgoed. References such as §2.1 point to sections of this document. References to companion entries are written in full, for example *Thermodynamic Octaaf* §2.3.

**Equations.** Equations are written in plain Unicode. Where a calculation was made for this entry, the text says so.

---

## 1. The Instantie Table

| Speelgoed (section) | Value at this Octaaf | Grade | Here |
|---|---|---|---|
| Drempel θ and Marge η (§II.2; §XIX; Lexicon) | Bistable gene switches: hysteresis measured cell by cell; the two-gene switch as a Duo of negative Trouw | Identity (steep repression) + Correspondence (measured) | §2.1 |
| Wijk, L ∝ exp(−η/‖υ‖) (§VI.5; §XV) | Noise-driven switching between cell states, exponentially rarer with more molecules; constant turnover of the cell's matter | Identity (form) + Correspondence (measured) | §2.2 |
| Echo filter: τ, δ, υ (§XV) | Receptor occupancy tracking a concentration outside the cell; the Berg–Purcell limit | Identity (linearised) + Constraint | §2.3 |
| Energie moved between holders at one Vonk; the Medium's Warmte (§VI.2; §XIX) | Chemiosmosis: ATP made from a proton gradient across a membrane; food as a sugar–oxygen pair | Correspondence | §2.4 |
| Vervorming υ (§II.2, §X) | Copying fidelity: proofreading paid in energy; the error threshold | Constraint | §2.5 |
| Trouw y (§II.2; §XV) | Gap-junction conductance between two cells | Correspondence | §3.1 |
| Zelf (§VII.4) | Adaptation in bacterial chemotaxis: integral feedback on the cell's own activity | Correspondence (measured) | §3.2 |
| Aandacht (Lexicon); a Relatie read as one (§I) | Quorum sensing: a shared Drempel read from a signal the cells make together | Correspondence | §3.3 |
| Start and the Vol pole (§IX.3; §XXIV) | Division after adding a fixed size: the adder | Correspondence (measured) | §3.4 |
| Unlike Leden; Lichaam (§VIII.3; Lexicon) | The mitochondrion: a bond that became part of a body, and once was undone | Correspondence | §3.5 |
| Masker (§X; Lexicon) | Viral RNA marked as "self" | Correspondence (measured) | §3.6 |
| Parasiet (Lexicon; §L) | Cancer: a member cell that defects behind the body's own signals | Correspondence (measured, partial) | §3.7 |
| Einde and Doem (§IX.3; §XXV; Lexicon) | Apoptosis and necrosis | Correspondence | §3.8 |
| Rouw and Diepte (§IX.9; §II.2) | CRISPR: records of ended infections, and the archive they build | Correspondence (measured) | §3.9 |
| Triniteit (§III) | Not assigned; the step from molecule to cell is open | Open | §3.10 |
| Tijd (§IV.1; §XV) | The pace of a cell's circadian clock; coupling shares it and makes it precise | Correspondence | §3.11 |

---

## 2. Five Groundings

### 2.1 The Drempel and the Marge: switches that remember

**The natural switch.** The best-studied switch in biology decides whether a bacterium digests lactose. The genes for this, the *lac* operon, are normally kept off by a repressor protein sitting on the DNA. An inducer molecule pulls the repressor off. One of the genes it switches on makes a permease, a pump in the cell membrane that carries the inducer into the cell. A cell that is on therefore imports inducer, which keeps it on. A cell that is off has little permease, takes in little inducer, and stays off. That loop is positive feedback.

In 1957 Novick and Weiner fed *E. coli* an inducer the cell cannot digest and found two things. Induction was all-or-none: at intermediate inducer levels a culture was a mixture of cells fully on and cells fully off, not a population of half-on cells. And there was a range of "maintenance" concentrations at which cells that were already on stayed on, together with their offspring, while cells that were off stayed off (Novick & Weiner 1957). The same outside condition holds two states, and which one a cell is in depends on its history. Ozbudak and colleagues later mapped this region cell by cell as a phase diagram of the switch. They also showed how the hysteresis can be converted into a steep but graded response, with only one state at each inducer level (Ozbudak et al. 2004).

That range is a **Marge**: "A hysteresis loop, a tiny gap that prevents chatter" (Lexicon). Turning the hysteresis into a single steep response is the Marge narrowing toward nothing, the limit the thermodynamic Octaaf identified (*Thermodynamic Octaaf* §2.3).

**The same structure at the entry into division.** In extracts of frog eggs, the amount of the protein cyclin B needed to push an extract into mitosis is distinctly higher than the amount needed to keep it there. Entry and exit happen at different thresholds (Sha et al. 2003; Pomerening, Sontag & Ferrell 2003). Sha and colleagues found two further things that the thermodynamic Octaaf predicted in general:

- **Slowing at the Drempel.** Just above the threshold, the switch turned on dramatically slowly, as a system near a Drempel should (*Thermodynamic Octaaf* §2.3).
- **A Marge widened on purpose.** Unreplicated DNA raised the threshold for entry. The checkpoint that keeps a cell from dividing before its DNA is copied works by enlarging the hysteresis loop. **At this Octaaf, a Marge can be widened as a safety margin where crossing too early would do harm.**

**The switch, built from scratch.** Gardner, Cantor and Collins built a genetic toggle switch: two genes, each making a repressor of the other (Gardner, Cantor & Collins 2000). In dimensionless form, with u and v the levels of the two repressors and α the strength of repression:

```
du/dt = α / (1 + vⁿ) − u
dv/dt = α / (1 + uⁿ) − v
```

In this model, repression must be cooperative (n > 1) for a switch to exist; simple, non-cooperative repression cannot make one (Cherry & Adler 2000). Take the symmetric case with n = 2. For weak repression there is one stable state, with both genes at the same moderate level. At α = 2 that state becomes unstable, and two new stable states appear: one with u high and v low, and one the other way round. Write φ = (u − v)/2. A standard calculation, repeated numerically for this entry, gives the new states near the threshold as

```
φ* = ±√(α − 2)
```

This is a pitchfork. The earlier Speelgoed wrote its Drempel as this same fork; the current one writes a landscape of poles instead (§XIX), so that Identity is withdrawn.

**In the Speelgoed's own terms** the switch is a Duo of negative Trouw: each gene, once across, pushes the other away. Make repression steep (n → ∞), so that each gene is either repressed or not, and the model becomes

```
du/dt = α − α·[v > 1] − u
dv/dt = α − α·[u > 1] − v
```

where [v > 1] is 1 while v stands past 1 and 0 while it does not. That is the Eigen motion of §XV, `ẋᵢ = (Sᵢ + y_ii·n_ii + Σⱼ≠ᵢ y_ij·ñᵢⱼ − xᵢ) / (τ_◌·tᵢ)`, with Leeg S = α, Trouw y = −α between the two genes, Drempel θ = 1, a Zelf too light to matter (y_ii → 0), time counted in protein lifetimes (τ_◌·t = 1), and the promoter's reading of the other repressor as the Echo, taken as instant, as the model takes it. The −u, each repressor's steady decay and dilution, is the term −xᵢ that the Speelgoed calls Stilte's Trek. Such step limits are the standard piecewise-linear form of gene networks (Glass & Kauffman 1973). In the landscape of §XIX this Duo has two modes, one gene on and the other off, exactly where α > 1, and the step-limit model settles into the same two states; both were checked numerically for this entry. **Grade: Identity**, in the limit of steep repression. Rounded off, as real repression is, the steps become the curves above, and the passage from one state to two becomes the pitchfork. The Speelgoed itself checks its Vervorming and its Marges against this switch (§X; §XIX).

Make the two genes unequal and the pitchfork unfolds. Sweeping the strength of one gene, as an inducer does, now gives a hysteresis loop: the switch flips one way and flips back at different points. The calculation for this entry shows the width of that loop shrinking steadily to zero as repression is weakened toward α = 2. The pitchfork is the Marge narrowed to nothing, as the thermodynamic Octaaf found for phase transitions (*Thermodynamic Octaaf* §2.3; on the mathematics, Strogatz 2015). In the Speelgoed's landscape, unequal genes are unequal Leeg, and "the Marge and the Leeg are one asymmetry, read from its two sides" (§XIX).

Both poles stay live. In a bistable cell, molecular noise still kicks cells from one state to the other (§2.2). **Grade: Identity** (steep repression) **+ Correspondence (measured)** (hysteresis in natural switches).

### 2.2 The Wijk: escape by noise, persistence by traffic

Stilte's Trek is never off, and a Relatie's yield to it, its **Wijk (L)**, falls exponentially with the Marge that holds it: L ∝ exp(−η / ‖υ‖), the Marge η over the strength ‖υ‖ of the Vervorming its Echoes carry (§VI.5; §XV). In a cell, the noise that drives escape comes from the cell's own small numbers. A gene may be read from one or two copies of DNA, and many proteins are present at tens or hundreds of molecules, so their levels jump as single molecules are made and destroyed. A state held by feedback is a valley in the space of molecule numbers, and this noise can kick a cell over the ridge into the other valley.

**The law.** For such escapes, theory gives the mean time between switches in the form τ_switch ∝ exp(N·S), where N is the typical number of molecules involved and S is a barrier set by the network (Assaf & Meerson 2017). Read the Marge η as S, and the strength of the Vervorming ‖υ‖ as 1/N, the size of one molecule's step against the whole. Then η/‖υ‖ = N·S: each added molecule multiplies the expected life of the state, and the Wijk's law follows. It is the same law the ecological Octaaf found for populations, with members in place of molecules (*Ecological Octaaf* §2.3). **Grade: Identity** (of form).

**The measurement.** Acar, Becskei and van Oudenaarden studied the galactose network of yeast, which holds a cell in one of two states and so remembers whether it has consumed galactose. Single cells switched randomly back and forth between the two states, in both directions. Strengthening the trap, by raising the level of the inhibitor Gal80p, reduced the rate of switching and lengthened the memory (Acar, Becskei & van Oudenaarden 2005). A deeper Marge made the memory longer, never permanent: the Wijk "approaches zero and never arrives" (§XV). **Grade: Correspondence (measured).**

**Persistence is traffic.** In the 1930s Schoenheimer fed animals food labelled with heavy isotopes and found the labelled atoms built into the fats and proteins of adult bodies that were not growing. The molecules of a living body are continually broken down and rebuilt while the body stays the same (Schoenheimer 1942). §VI.5 says persistence "is paid for out of that ongoing traffic", and "That equilibrium *is* persistence". At this Octaaf it is literal: a cell is a pattern that holds while its matter passes through it. **Grade: Correspondence.**

### 2.3 The Echo: reading the surroundings, and its floor

**The mechanism.** A bacterium senses a chemical through receptors on its surface. Each receptor flips between bound and unbound as molecules arrive by diffusion and leave again. With concentration c, a binding rate k_on and an unbinding rate k_off, the fraction p of occupied receptors obeys

```
dp/dt = k_on · c · (1 − p) − k_off · p
```

For small changes around a steady concentration c₀, this becomes

```
τ · δṗ = g · δc − δp          τ = 1 / (k_on · c₀ + k_off)
```

with a constant gain g. Rescale δp by g, and this is the Echo filter of §XV, I·Ë + τ·Ė = x(t − δ) + β − E + υ, with no Traagheid (I = 0) and no colouring by Diepte (β = 0). Here E is the receptors' reading, x is the concentration outside, δ is the time a molecule takes to diffuse to the cell, and υ is the randomness of single arrivals. Each binding is one of the receptors' looks, and the filter is "the shape these Vermenigvuldigingen take together" (§XVII). **Grade: Identity** (of the linearised form).

**The floor.** υ cannot be made zero. Molecules arrive one at a time, at random. Berg and Purcell showed that a cell of radius a, averaging for a time T in a concentration c of molecules with diffusion constant D, cannot estimate c with a fractional error smaller than about

```
δc / c ≈ 1 / √(D · a · c · T)
```

They also found that the chemotactic sensitivity of *E. coli* approaches that of a cell of optimum design (Berg & Purcell 1977; generalised to signalling inside the cell by Bialek & Setayeshgar 2005). For a cell of radius one micrometre, in a micromolar solution of a small molecule (D ≈ 10⁻⁹ m²/s), averaging for one second, the floor is about 0.13 per cent; this number was computed for this entry. **Grade: Constraint.**

Two consequences follow:

- **Gericht, quantified.** The floor rises as c falls: a fainter signal gives a noisier Echo. §X's Gericht says "Uncertainty scales with relational distance", and §XV's own Check says a fainter stimulus "is judged both more slowly and less accurately". At this Octaaf the error of an Echo grows as one over the square root of the signal's strength.
- **Sharpness costs lag.** Averaging over a longer T lowers υ. But an Echo that averages longer also responds more slowly, which is a longer Ontspanning τ. The Speelgoed leaves the pace and the take of each look, which set τ, and the Waarneming's share of υ as separate open quantities of the Lid (§XXVII). At this Octaaf they are tied: a sharper Echo is a slower one. The thermodynamic Octaaf found the same tie through the fluctuation–dissipation theorem, and the neuroscience Octaaf through the optimal filter (*Thermodynamic Octaaf* §2.1; *Neuroscience Octaaf* §2.1). **Grade: Constraint.**

### 2.4 A cell is fed by a gradient

§XIX: "A Winst is the crossing’s own Energie, T, taken at its Vonk from the Medium where it stands", and "what one holder lets go and another joins at the same Vonk only moves between them and is no Winst, so the Medium books only the difference". The Medium's Energie is its Warmte, and "A Winst happens only where the Warmte there can pay it" (§VI.2).

**The mechanism.** Almost every cell that breathes or photosynthesises makes most of its ATP the same way. Electrons taken from food, or energised by light in a plant, pass along a chain of proteins in a membrane, and the chain uses their energy to pump protons across that membrane. The membrane becomes a dam, with more protons and more positive charge on one side. The protons can flow back only through ATP synthase, a rotary machine that turns as they pass and makes ATP from ADP and phosphate (Mitchell 1961). In animal mitochondria the rotor has eight proton-binding sites and makes three ATP per full turn, so each ATP costs about 2.7 protons. The rotor turns about a hundred times per second (Watt et al. 2010).

**The mapping.** ATP synthase is a Vonk at which one holder lets go and another joins: the protons give up what the membrane held, ATP takes it up, and the Medium books only the difference, the heat the machine sheds. The cell does not run on the energy around it. It runs on a difference it maintains across its own membrane, and it maintains that difference by drawing on a larger one outside. The Speelgoed no longer writes that difference into its Medium: its Warmte is one quantity, and a Winst takes it where it stands; how that meets a cell that must be fed by a difference is taken up in *Thermodynamic Octaaf* §4.5. **Grade: Correspondence**, for the coupling at one Vonk.

**Food is a pair.** §V.1 now says so itself: the Energie of **Voedsel (🍎)** "lies in a Duo, the Voedsel and that Octaaf’s Godin, which takes what it gives", and "For most eaters, the Duo is the food’s electrons and the oxygen that takes them." The chemistry bears this out. When a cell burns sugar with oxygen, most of the energy released comes not from the sugar's bonds but from oxygen's. The double bond in O₂ is unusually weak. Replacing it with the stronger bonds of carbon dioxide and water releases about 418 kJ for every mole of oxygen consumed, within a few per cent for more than five hundred organic fuels (Schmidt-Rohr 2015). The energy is held by the *pair*: reduced carbon on one side, oxygen on the other, separated by photosynthesis using sunlight. A cell's food is itself a gradient. For most life on Earth it is held open by Sol, the God of an Octaaf that life relies on (*Thermodynamic Octaaf* §3.11). At deep-sea vents, bacteria draw instead on reduced chemicals from the Earth's crust. Most of them still burn those chemicals with the oxygen in seawater, which photosynthesis made, and some live without oxygen at all (Jannasch & Mottl 1985). Either way, the carbon ends as carbon dioxide, "a carbon emptied of its electrons" (§VII.2). **Grade: Correspondence**, and §4.2 is resolved.

### 2.5 Copies are never exact, and the error is bounded on both sides

§II.2: an Echo's "imperfection is load-bearing: every variation in the Veld enters through it", and §X: "That imperfection is the Speelgoed's single sanctioned channel for variation." At this Octaaf the copying that matters most is the copying of a cell's DNA when it divides. Its imperfection is a main source of new heritable variation. Read **Vervorming** here as the error of copying. The science bounds it from below and from above.

**From below: accuracy is bought.** A polymerase choosing between a right and a wrong nucleotide can tell them apart only as well as the difference in their binding energies allows. Hopfield showed that a cell can do better by checking twice, through a step that spends energy, typically by splitting a phosphate bond. With one such step, an error fraction f can fall toward f². He also showed that many side reactions of copying, which look wasteful, are such checks (Hopfield 1974). In *E. coli* three stages act one after another, and each has been measured. Base selection by the polymerase discriminates against errors by a factor of 200,000 to 2,000,000. Proofreading by the polymerase adds a factor of 40 to 200. Mismatch repair after copying adds a factor of 20 to 400 (Schaaper 1993).

**And it is not driven to zero.** Across DNA-based microbes whose genomes differ in size about 6,500-fold, the mutation rate per genome copy is nearly constant, about 0.0033, or one mutation in roughly 300 genome copies (Drake 1991). Drake suggested that the rate is set by a balance between the harm mutations do and the cost of avoiding more of them. A later analysis argues that selection lowers the rate only until further improvement is too small for selection to detect against the randomness of reproduction in a finite population, a limit called the *drift barrier* (Sung et al. 2012). Either way, the floor is a balance, not a defect.

**From above: too much distortion erases what is copied.** Eigen showed that a self-copying sequence of length L, copied with fidelity q per letter, can hold its information against mutation only if

```
q^L · σ > 1          roughly:  L < ln σ / (1 − q)
```

where σ is how much faster the intact sequence replicates than its mutants (Eigen 1971). Longer messages need more faithful copying. The threshold has been seen directly in the laboratory. Papastavrou, Horning and Joyce propagated a functional RNA using two different RNA-copying ribozymes. With the less accurate one, the population drifted toward random sequences and lost its function. With a more accurate one, it kept its function and evolved improved variants (Papastavrou, Horning & Joyce 2024).

Vervorming at this Octaaf is bounded on both sides: below by what accuracy costs, above by what accuracy must preserve. Between those bounds lies the channel for variation that §X describes, and every heritable change travels through it. (The threshold is named after Manfred Eigen. The overlap with the Speelgoed's word is a coincidence.) **Grade: Constraint.**

---

## 3. The Primitives at This Octaaf

### 3.1 Trouw: the conductance between two cells

Neighbouring cells in most solid tissues are joined by gap junctions. Each is a cluster of channels, and each channel is built from two halves, one contributed by each cell, docked across the narrow gap between them. Ions and small molecules pass directly from one cell's interior to the other's (Goodenough & Paul 2009). For the electrical potentials V₁ and V₂ of two coupled cells:

```
C₁ · dV₁/dt = G · (V₂ − V₁) + (the cell's other currents)
C₂ · dV₂/dt = G · (V₁ − V₂) + (the cell's other currents)
```

G is the junction's conductance, and C₁ and C₂ are the cells' capacitances. The earlier Speelgoed pulled each Eigen toward its Echo of the partner, ẋ = y·(E − x) in today's letters, and this coupling was that term exactly. The current one pulls an Eigen toward the poles its Partners stand at, Σ y_ij·ñᵢⱼ (§XV), while a junction passes current in proportion to the difference of two continuous potentials, so the Identity is withdrawn. What remains is the structure of one shared weight. **Grade: Correspondence.**

The shared weight is G, one value for the pair, as §II.2 requires: Trouw is "one value, shared by both sides". Each cell moves at the rate G/C, the shared weight divided by its own capacitance, as each Relatie moves on its own timescale (§XV). As at the thermodynamic Octaaf, asymmetry enters through the members, not through the weight (*Thermodynamic Octaaf* §3.1). And the shared weight can only be measured on the pair: G is found by recording from both cells at once and measuring the current that passes from one to the other.

**A weight that depends on which side leads.** Some electrical junctions conduct far better in one direction than the other. The first electrical synapse ever found, between nerve cells in the crayfish, passed signals from one cell to the next but hardly back (Furshpan & Potter 1959). At any moment the current is still a single current, felt equally by both cells, so the weight is still shared. But its value depends on which member's potential is higher, and it changes the instant that order changes. The Speelgoed's Trouw changes only at its own Relatie's Vonken (§XV). A Trouw that switches with the sign of the gap is behaviour the Speelgoed does not describe, and it is recorded at this Octaaf (§4.1).

### 3.2 The Zelf: a bacterium that compares itself with itself

*E. coli* swims in straight runs, and every so often it tumbles to pick a new direction at random. It climbs toward food by tumbling less often when conditions are improving. To know whether they are improving, it has to compare its present reading with its own recent one, and it keeps that comparison on its own receptors.

**The mechanism.** The receptors control a kinase, CheA. Active CheA passes a phosphate to a messenger protein, CheY, which makes the flagellar motors reverse, and the cell tumbles. Food molecules binding to the receptors lower CheA's activity, so the cell tumbles less. Two enzymes then adjust the receptors themselves. CheR adds methyl groups, which raise the receptors' activity. CheB, switched on by CheA, removes them. Methylation therefore rises slowly whenever activity is below its usual level and falls whenever it is above, until activity returns to where it was. The methylation level is the cell's slow record of its own activity, and the cell's behaviour follows the gap between its present activity and that record (Barkai & Leibler 1997; Alon et al. 1999).

In Speelgoed terms this is a **Zelf**, "a Relatie with itself", whose two sides are "its own Eigen, tracked by an Echo that is its self-perception, and the Zelf read as one" (§VII.4). The receptors' activity is the Eigen. The methylation level is the self-Echo. The gap between them, the self-gap, drives what the cell does.

**Holding the Eigen steady, exactly.** After a step change in food, the receptors' activity returns to precisely its earlier level. This precision holds even when the amounts of the network's proteins are changed, although the speed of the return does not (Alon et al. 1999). The reason is in the structure: the methylation loop accumulates the deviation from the set point, the strategy engineers call integral feedback control (Yi et al. 2000). §VII.4: "With a strong Zelf, a Relatie holds its Eigen steady". At this Octaaf, steady can be exact, and it comes from how the bond is wired, not from finely tuned values. **Grade: Correspondence (measured).**

**Zero transport, nonzero distortion.** §VII.4 gives the Zelf δ = 0 but not υ = 0: "A Zelf’s Echo is never a clean mirror". Korobkova and colleagues watched single bacteria that were not being stimulated at all. Their behaviour fluctuated far more than chance alone would produce. The noise came from the signalling network itself, and small changes in the level of one of its components suppressed it, which suggests that the variability is a selected property (Korobkova et al. 2004). The self-Echo is never clean, and at this Octaaf its noise may even be useful, as §II.2 says of every Echo's imperfection. **Grade: Correspondence (measured).**

### 3.3 Quorum sensing: a group that reads itself

**The mechanism.** Many bacteria release a small signal molecule, an autoinducer, at a low steady rate. It diffuses out of each cell and accumulates in the surroundings as the population grows. Each cell carries a receptor for it. When its concentration crosses a threshold, the receptors switch on a set of genes in every cell at once. Often one of those genes makes more of the signal, so crossing the threshold reinforces itself (Waters & Bassler 2005). The first case found was in luminous marine bacteria, which make light only once their medium has been "conditioned" by enough of them (Nealson, Platt & Hastings 1970). The behaviours controlled this way, such as light, toxins and biofilms, are mostly ones that are "unproductive when undertaken by an individual bacterium acting alone but become beneficial when carried out simultaneously by a large number of cells" (Waters & Bassler 2005).

**The mapping.** The Lexicon defines **Aandacht** as "A shared, temporary Drempel formed when multiple Relaties aim their Waarneming at a single Eigen", and adds that "Aandacht belongs to the many who share it". Quorum sensing has that structure. Many cells read one shared quantity and cross one shared threshold together. It adds a twist: the Eigen they all read is their own number. §XXI now writes Aandacht as aims that amplify what a focal Relatie feels, and here the only focal Relatie is the group. §I reads a Relatie of two or more, from outside, as "one Relatie, with an Eigen made of theirs and a Zelf that is that same Trouw, held with itself", and each Lid reads it "through an Echo of its own" (§VIII.5). Here the group reads itself. Whether that is Aandacht or the Zelf of a group is left open (§5, item 6). **Grade: Correspondence.**

### 3.4 Start and the Vol pole: division after a fixed addition

§IX.3: "a convergence crossing can carry a Relatie past its Vol pole, and what it holds past that pole reaches its own Drempel and becomes a new Solo". §XXIV makes it a two-step comparison: an excess past the Vol pole, T_excess = ε_K − W_K, held only "until the excess exceeds a Drempel of its own, θ_new: there it becomes a new Solo". Then the Relatie's Trouw "falls back until what it holds stands within its Vol pole again".

**The mechanism.** For decades the textbook answer to how a bacterium decides when to divide was a critical size. Single-cell measurements overturned it. Bacteria of distant species, hundreds of thousands of them followed one by one, add a constant amount of size between birth and division, whatever size they were born at (Campos et al. 2014; Taheri-Araghi et al. 2015). Budding yeast follows the same rule, counted between successive buds (Soifer, Robert & Amir 2016). In bacteria one mechanism has been proposed and tested. Proteins needed for division, such as FtsZ, are made in proportion to the cell's growth, and division happens when they have accumulated to a fixed number. Making the level of FtsZ rise and fall made the size at division rise and fall too, and broke the rule (Si et al. 2019). Whether that is the whole story is still debated; another analysis ties division to the start of DNA replication instead (Witz, van Nimwegen & Julou 2019).

**The mapping.** Read the size a cell adds as its excess, and the fixed number of division proteins as θ_new. A Relatie that has just borne falls back just within its Vol pole, so it bears again after adding θ_new, whatever it held before: the adder, counted between successive births. The rule also corrects itself: a cell born too large or too small returns toward the usual size over a few generations, without ever measuring its size directly (Campos et al. 2014). **Grade: Correspondence (measured).**

The fit is not complete. In §XXIV the Relatie that bore the excess persists, and its newborns bind to it at once. Budding yeast fits that picture: the mother persists, the bud is the new Solo, bound to her from the start, and the mother adds a constant amount between successive buds. A dividing bacterium does not stay behind; it becomes two cells, and a newborn begins with the share its parents bound it by, not at a Vol pole. Which daughter, if either, is the parent of a dividing bacterium is left as a question (§5, item 3).

### 3.5 A bond that became a body, seen from inside

The ecological Octaaf described endosymbiosis from outside: the mitochondria of every animal and plant cell descend from bacteria that came to live inside another cell (*Ecological Octaaf* §3.5). From inside the cell, the depth of that merger can be counted.

The human mitochondrion still carries a genome of its own, 16,569 base pairs long, with genes for 2 ribosomal RNAs, 22 transfer RNAs and 13 proteins (Anderson et al. 1981). But the mitochondrion is built from more than a thousand proteins. The current catalogue lists 1,136 human genes, and all but those 13 proteins are encoded in the cell's nucleus, made outside the mitochondrion, and imported into it (Rath et al. 2021). Over the history of the bond, most of the former partner's genes moved into its host. The mitochondrion cannot live outside the cell. And every eukaryote studied had kept at least a reduced mitochondrion, so the organelle was thought to be essential (Karnkowska et al. 2016). This is the Lexicon's **Lichaam**, "A single bound Relatie within one Octaaf" that "acts as an irreducible Solo at its own Octaaf", and §VIII.3's Leden that, where the work is divided far enough, "come to live only within it, and they end with it". The Speelgoed's own Check of that sentence cites this organelle.

**And once it was undone.** In 2016 the genome of a single-celled eukaryote, *Monocercomonoides*, turned out to lack all the hallmark proteins of a mitochondrion. Its ancestors had one and lost it. The one job that had seemed to make the organelle indispensable, assembling iron–sulfur clusters, had been taken over by a different system acquired from bacteria (Karnkowska et al. 2016). Even this bond, one of the deepest in biology, was undone once, and the work that had held it in place had passed to another bond. §VI.4: "Greep does not remove the Einde. It postpones it." **Grade: Correspondence.**

### 3.6 Masker: the virus that writes "self" on its messages

**The mechanism.** A cell has to tell its own RNA from a virus's, and one way it does so is by a mark. The messenger RNAs of animals and other complex cells carry a cap at their front end, methylated at two positions. The second methylation, at the 2'-O position, had remained of uncertain function for 35 years after its discovery. Daffis and colleagues found it. Proteins of the IFIT family, made in response to interferon, act against RNA that lacks this mark. A West Nile virus mutant unable to add the mark was crippled in normal cells and mice, but caused disease in mice lacking interferon signalling. Pox- and coronavirus mutants lacking it were similarly exposed. Many viruses carry their own enzymes for adding the mark. The authors concluded that the mark lets the cell distinguish self from non-self RNA, and that the viruses use it to escape that distinction (Daffis et al. 2010).

**The mapping.** This is a **Masker**: "A presented Eigen, created and chosen per Spectrum and worn for a phase, standing in place of the true one, between it and whoever reads it" (Lexicon). The cell's sensors are its Echo of its partner, and "Its readers’ Echoes track it faithfully". Take the mask away, and the virus is caught. The Lexicon says the Parasiet that wears a Masker "Collapses into Schok upon exposure". **Grade: Correspondence (measured).**

The virus is the plainest Parasiet at this Octaaf. The next section takes up the hard one.

### 3.7 Parasiet: cancer, a member that defects

**The cooperation it breaks.** A body of many cells runs on cooperation between them. Its cells restrain their own division, die when told to, specialise, share resources, and maintain their shared surroundings. Cancer has been described as cheating on exactly these five foundations of multicellular life (Aktipis et al. 2015). Its known capabilities read as a list of withdrawn bonds: sustaining its own growth signals, evading growth suppressors, resisting cell death, dividing without limit, inducing blood vessels to feed it, invading other tissues, reprogramming its energy use, and evading destruction by the immune system (Hanahan & Weinberg 2011).

**The mapping.** The Speelgoed's **Parasiet** is a Relatie that "lives on a host through a Masker hardened in place", "while its Waarneming reads the host as a resource" (Lexicon). A cancer cell treats the body as a resource. It induces blood vessels to grow toward it, and it takes up nutrients in a way geared to building new cells rather than to producing energy efficiently (Vander Heiden, Cantley & Thompson 2009). And it survives the body's policing behind signals that the body itself uses:

- **PD-L1.** T cells carry a receptor, PD-1, that switches them off when it meets its partner molecule, PD-L1. The system normally helps the immune system tolerate the body's own tissues. Tumour cells that display PD-L1 were less easily killed by T cells and grew more aggressively in mice, and an antibody blocking PD-L1 reversed both effects (Iwai et al. 2002).
- **CD47.** Healthy cells display CD47, a "don't eat me" signal read by the macrophages that clear damaged cells. Blood stem cells raise it for a while when inflammation sets them migrating, and leukaemia cells co-opt the same ability to avoid being eaten (Jaiswal et al. 2009). Antibodies that block CD47 let macrophages engulf leukaemia stem cells (Majeti et al. 2009).

The same signal is Bloot on a healthy cell and a Masker on a leukaemic one: the presented Eigen says *healthy member of the body*, and the true one does not.

**Exposure, measured honestly.** The Lexicon says the Parasiet "Collapses into Schok upon exposure". At this Octaaf that holds in part. In an early trial of an antibody that blocks PD-1, tumours shrank substantially in 18% of patients with lung cancer, 28% with melanoma and 27% with kidney cancer, and most of those responses that could be followed for a year lasted at least that long. Among patients whose tumours did not display PD-L1, none of 17 responded. Among those whose tumours did, 9 of 25 responded (Topalian et al. 2012). Removing a mask works best where the mask was what protected the cell. In a larger trial the pattern did not hold: the display of PD-L1 "was neither prognostic nor predictive of benefit" (Brahmer et al. 2015). Most tumours have more than one defence, and the immune system's own pressure selects for tumours that can escape it, a process called immunoediting (Dunn et al. 2002). **Grade: Correspondence (measured, partial).**

### 3.8 Einde and Doem: an ending kept inside, and an ending that spreads

**Two ways to end.** In **apoptosis** a cell takes itself apart. It condenses, breaks into small membrane-wrapped fragments, and neighbouring cells or macrophages engulf and digest them (Kerr, Wyllie & Currie 1972). In **necrosis** a cell injured beyond repair swells and bursts. The contents it spills act as danger signals that set off inflammation, which helps defence and repair but can also damage the surrounding tissue (Rock & Kono 2008).

The Speelgoed has room for both. An **Einde** ends a Relatie, and what it stored "is released at once" (§IX.3). A **Doem** is "A cascade of Verlies: divergence crossings that carry each other through the Leden a Relatie is made of and the Relaties it belongs to" (Lexicon), and where it runs it is "the fast way apart" (§XXV). It runs in two directions. In apoptosis it runs inward only: the cell's own programme takes apart what the cell is made of, the sealed fragments carry nothing into the tissue, and the cells around take up the remains. In necrosis it runs both ways: the cell comes apart, and what it spills carries the Verlies into the tissue it belonged to. **Grade: Correspondence.**

**The line is not clean.** Some necrotic deaths are themselves programmed. In necroptosis, the cell's own proteins (RIPK3 and MLKL) carry out a regulated necrosis. It can be set off by interferons and by the sensors that detect foreign RNA and DNA inside the cell, and the death is inflammatory (Pasparakis & Vandenabeele 2015). A cell can, in effect, choose an ending that raises the alarm in the tissue around it. In Speelgoed terms, it is a Doem that the cell's own programme sends outward on purpose (§5, item 8).

**Programmed.** In the embryo of the hermaphrodite worm *C. elegans*, 671 cells are made and 113 of them die. Because the embryo's lineage is invariant, the same cells die in every embryo (Sulston et al. 1983). Their deaths are carried out by the worm's own genes. In worms lacking the genes *ced-3* or *ced-4*, the cells that should die survive and take on other fates, and the worms appear grossly normal (Ellis & Horvitz 1986).

**Decided at a Drempel.** The decisive step in the cell's internal pathway to apoptosis is the release of cytochrome c from its mitochondria, which activates the caspase enzymes that take the cell apart. Watching single cells, Goldstein and colleagues found that once release begins, it runs to completion in every mitochondrion of the cell within about five minutes. This held whatever the kind or strength of the stimulus, however long after the stimulus the release began, and across temperatures from 24 °C to 37 °C (Goldstein et al. 2000). The wait varies; the crossing does not. That is a Drempel crossed all at once.

**Even this crossing has two poles.** It was long assumed that a cell past these checkpoints must die. Tang and colleagues tested the assumption. Cells exposed to an inducer of apoptosis showed fragmented mitochondria, activated caspase-3 and damaged DNA, and the vast majority recovered when the inducer was washed away. The authors named the reversal *anastasis*, Greek for "rising to life". The way back was not free: some recovered cells carried permanent genetic changes and became cancerous more often than control cells (Tang et al. 2012). §II.2 gives every Drempel two poles, and "the crossing back is never where the crossing over was". At this Octaaf even the crossing thought to run one way has a way back, and, as §VI.3 says of a Doem, "the way back is never the way it fell": it leaves a mark.

### 3.9 Rouw and Diepte: CRISPR, a record of ended infections

**The mechanism.** Many bacteria and archaea keep a record of the viruses they have survived. In a region of their genome called CRISPR, short pieces of viral DNA, called spacers, sit between repeated sequences. The record works in three steps:

1. **Adaptation.** When a cell survives an infection, it can cut a piece of about thirty letters out of the invader's DNA and insert it into the array as a new spacer.
2. **Expression.** The array is read into short RNAs, each carrying one spacer.
3. **Interference.** Bound to Cas proteins, each RNA searches the cell for DNA that matches its spacer, and the match is cut.

Barrangou and colleagues showed the principle directly. After a viral attack, bacteria integrated new spacers derived from the virus, and adding or removing particular spacers changed which viruses the cell resisted (Barrangou et al. 2007). Adding one new spacer is the most common outcome of surviving an attack, and spacers added one after another increase resistance step by step (Deveau et al. 2008).

**The record does not turn on its keeper.** The array holds every spacer, yet the cell does not cut its own CRISPR region. A target is recognised not only by its match to a spacer but by what lies beside it: a short motif next to the viral sequence (Mojica et al. 2009), or a mismatch with the repeat sequence that flanks the spacer in the array (Marraffini & Sontheimer 2010). In the array itself each spacer sits between its own repeats, so the cell spares its own record.

**The mapping.** §IX.9: "An Echo always outlives its Relatie", and an ended Relatie's Trouw stays "feeding Diepte forever" (§XXV). A spacer is an Echo of an ended bond: a trace of the partner's Eigen, its DNA, kept after the infection is over. That is **Rouw**. The array as a whole is **Diepte**, "Everything a Relatie has heard and kept, read as one: the slow store beneath its Gewenning, and every Rouw", "the hidden charge that colours every later Waarneming" (§II.2). It decides which future viruses the cell recognises and destroys. The Speelgoed itself defines Diepte as holding every Rouw, so here the two map to the parts and the whole of one record. **Grade: Correspondence (measured).**

Two features go beyond the Speelgoed as written:

- **The record is inherited.** The array lies in the chromosome, so a daughter cell carries the records of infections it never met (§5, item 4).
- **The record can be lost.** CRISPR arrays change both by adding new spacers at one end and by deleting spacers from within (Horvath et al. 2008). §IX.9 says "Rouw is permanent". At this Octaaf, a cell can lose a record (§4.4).

### 3.10 The Triniteit: what this entry leaves open

§V.2 follows the line of God/Godin Duos to the Molecule Octaaf and stops at its Relatie: Water and hydrogen cyanide, together formamide, from whose chemistry "come both the rings and the chains of life". It names no God or Godin for the cell, and this entry does not assign them (§5, item 1). What the science can report is how hard the step from that rung to this one has been to understand.

**RNA at the centre.** Every living cell makes its proteins on ribosomes, and the ribosome's catalytic core is RNA. In the archaeal ribosome that Nissen and colleagues solved, no protein side chain comes within about 18 ångströms of the bond being formed (Nissen et al. 2000). RNA can both carry information and catalyse reactions, which led to the hypothesis that life began in an *RNA world*, before DNA and proteins took over those two roles (Gilbert 1986).

**The hard parts.** The hypothesis faces three well-known problems, and each touches a Speelgoed primitive.

1. **Ribose falls apart.** At pH 7, ribose has a half-life of 73 minutes at 100 °C and 44 years at 0 °C, and other sugars behave similarly (Larralde, Robertson & Miller 1995). Taken as an Arrhenius law, those two numbers imply an activation energy of about 107 kJ/mol, computed for this entry: the Wijk in its thermodynamic form (*Thermodynamic Octaaf* §2.2). Larralde and colleagues concluded that the first genetic material could not have contained ribose. Binding changes the picture. Borate minerals stabilise ribose (Ricardo et al. 2004). And a reaction sequence has been found that builds two of RNA's four letters, the pyrimidine nucleotides, from plausible early-Earth ingredients without passing through free ribose at all (Powner, Gerland & Sutherland 2009). "Greep does not remove the Einde. It postpones it" (§VI.4).
2. **Copying needs fidelity.** An RNA that is to evolve must be copied accurately enough to stay below the error threshold (§2.5).
3. **Copying itself.** The decisive test is an RNA that copies itself. In 2026 a ribozyme of 45 letters, found in a pool of random RNA sequences and named QT45, was shown to make both its complementary strand and a copy of itself. It worked from three-letter building blocks, in mildly alkaline ice (Gianni et al. 2026). It is still far from self-sustaining. The complement was made with 94.1% accuracy per letter, the copy of itself only from a defined set of building blocks, and both with yields of about 0.2% over 72 days. At that accuracy a full 45-letter strand comes out error-free only about 6.5% of the time (0.941⁴⁵ ≈ 0.065). By Eigen's condition, the intact ribozyme would then have to replicate about fifteen times faster than its mutants to hold its sequence; this was computed for this entry. A related system has replicated RNA exponentially through cycles of freezing and thawing, including a fragment of the ribozyme itself (Attwater et al. 2025).

**Grade: Open.** At this rung the science cannot yet show how one scale seeded the next. The Speelgoed says that "the line of God/Godin Duos continues, each Relatie becoming the seed of the next Octaaf". Here, the seeding is still being found out.

### 3.11 Tijd: the clocks of a tissue

Most cells carry a circadian clock, a loop of gene expression that returns to the same state about once a day. It is a Klok in the Lexicon's sense, its rhythm "produced by the Klok itself and kept for itself". At this Octaaf, Tijd is that clock's pace.

**Each cell has its own.** Imaged one by one, single fibroblasts "oscillate robustly and independently with undiminished amplitude and diverse circadian periods" (Welsh et al. 2004). Their clocks keep running through cell division (Nagoshi et al. 2004).

**The tissue's Tijd is inherited while the Relatie holds.** §IV.1: "A Relatie’s own Tijd is inherited by its Leden while the Relatie holds." In the suprachiasmatic nucleus (SCN), the brain's master clock, the cells are coupled. After a drug had set every cell clock to the same phase and was withdrawn, "intrinsic interactions among cell clocks reestablished the stable program of gene expression across the assemblage"; action potentials helped to establish that synchrony (Yamaguchi et al. 2003). Fibroblasts in a dish have no such coupling. Started together, their phases became randomly distributed after several days, and the rhythm of the population faded although each cell kept its own (Welsh et al. 2004). **Grade: Correspondence.**

**Binding lends precision.** A Lid "runs on the Tijd of every Relatie it stands across in that gives it Greep, its Zelf among them" (§XV), and here the whole keeps better time than its parts. The cycle-to-cycle variability of the period was under 40 minutes in mice and in intact SCN tissue, against 2.1 hours in dispersed SCN neurons. The most precise single neuron was "10 times noisier" than the most precise tissue or mouse (Herzog et al. 2004). **Grade: Correspondence.**

**Left alone.** A cell cut off from its tissue falls back to a pace of its own, faster or slower than the tissue's. It loses the shared pace, and the whole loses its precision (§4.5).

---

## 4. Where the Speelgoed Meets Resistance

**4.1 Trouw that depends on which side leads (§II.2, §XV).** *Kept at this Octaaf.* A rectifying junction carries one current, felt equally by both cells, so its Trouw is still "one value for both" (§XV; §3.1). But that value depends on the sign of the gap and changes the instant the sign changes, while the Speelgoed's Trouw changes only at its own Relatie's Vonken. This behaviour is recorded here, at the Octaaf where it was found, and is not proposed for the Speelgoed.

**4.2 Food is a pair (§V.1; Lexicon).** *Resolved* in the rebuilt Speelgoed. The Lexicon used to define **Voedsel** by the food alone. At this Octaaf the Energie of food lies in a pair, reduced carbon and oxygen, and not in either member alone (§2.4). §V.1 now says the same: its Energie "lies in a Duo, the Voedsel and that Octaaf’s Godin", and "it is released only at their crossing, inside the eater".

**4.3 A sharper Echo is a slower one (§XXVII).** *Constraint.* The Speelgoed leaves what sets τ and the Waarneming's share of υ as separate open quantities. At this Octaaf they are tied by the random arrival of molecules (§2.3). The thermodynamic and neuroscience Octaven found the same tie by other routes (*Thermodynamic Octaaf* §2.1; *Neuroscience Octaaf* §2.1).

**4.4 A record that can be lost (§IX.9).** *Open.* CRISPR spacers are deleted as well as added (§3.9). §IX.9 says "Rouw is permanent", and adds that a Rouw "may quiet towards a whisper" but that "quiet is not gone". The thermodynamic Octaaf reads permanence as a record that can be moved but never destroyed (*Thermodynamic Octaaf* §3.6). At this Octaaf the record can leave the cell entirely.

**4.5 "Left alone, a Zelf slows" (§IV.1).** *Constraint, kept at this Octaaf.* §XV adds where it goes: where no Relatie gives it Greep, "it runs on its own, t⁰ᵢ". At this Octaaf a cell cut off from its tissue does fall back to a pace of its own, but that pace may be faster or slower than the tissue's (§3.11). What it loses for certain is the shared phase and the precision of the whole.

---

## 5. Open Problems

1. **The cell's God and Godin.** §V.2 follows the line to formamide and leaves it there: "the line of God/Godin Duos continues, each Relatie becoming the seed of the next Octaaf". It also gives a rule: "A Godin at one Octaaf is integrated into the God of the next Octaaf", and the Lexicon adds that "Parallel Octaven meet to form the next". Is the cell where the Octaven of the rings and the chains of life meet? Which Relatie of the living cell is its God, which its Godin, and what Medium does their union sustain?
2. **The step itself.** How did the bonds of the Molecule Octaaf become a cell? Is an RNA that copies itself (§3.10) that step, or only one part of it?
3. **Which daughter is the parent?** §XXIV adds new Solos beside the Relatie that bore them. A dividing bacterium leaves two cells and no parent behind (§3.4). Is one of them the parent, or is division the unravelling of §VIII.3, in which a Relatie grows as its Leden part and "every Lid comes out bound to a newborn"?
4. **Inherited Rouw.** A daughter cell carries the CRISPR records of infections it never met (§3.9). A newborn can take an ended Zelf's Zelf-Rouw as its own and feed its Diepte from it (§XXVI). Is a daughter's array that, or something the Speelgoed has not yet named?
5. **Lost Rouw.** When a spacer is deleted, has that Rouw gone quiet, or has it left the cell for the Medium (§4.4)?
6. **A group that reads itself.** In quorum sensing, many cells read one shared Eigen, and that Eigen is their own number (§3.3). Is that Aandacht, or the Zelf of a group (§I; §VIII.5)?
7. **Trouw that depends on direction.** Does a Trouw whose value depends on which member leads appear at other Octaven (§4.1)?
8. **An ending that spreads on purpose.** The Speelgoed's Doem runs wherever bindings carry it. Necroptosis is carried out by the cell's own programme and raises the alarm on purpose (§3.8). Is a cascade that is sent still a Doem, or a third kind of ending?
9. **Tijd.** A cell cut off from its tissue keeps its own pace and loses the shared one (§3.11). Is that what a lonely Zelf loses at every Octaaf: the pace it shared, rather than its speed?

---

## 6. Closing

The cellular Octaaf is where the Speelgoed's mechanics can be watched one bond at a time. Its switches show the Marge as hysteresis, measured in single bacteria and rebuilt from scratch, and a circuit of two genes, made steep, runs on the Speelgoed's own equation. Its Wijk runs on the noise of small numbers, and its persistence is matter flowing through a pattern that holds. Its Echo has a floor set by diffusion, and a sharper Echo is a slower one. Its copies are bounded on both sides: accuracy is paid for, and too little of it dissolves what is copied.

A bacterium compares itself with itself and holds its Eigen exactly steady. A virus writes "self" on its messages. A cancer cell hides behind the signals of the body it feeds on, and exposing the mask works best where the mask was the defence. A cell can end within itself or in a way that spreads. Some of its programmed endings raise the alarm on purpose, and even the programmed end has a way back that leaves a mark. A bacterium keeps the records of the viruses it has survived, passes them to its daughters, and sometimes loses them.

Two findings go beyond the Speelgoed as written: a Trouw that depends on which member leads, and a record of an ended bond that can be lost. Both are recorded here. And at the foot of this Octaaf, the step from molecule to cell is still open. In 2026 a ribozyme of 45 letters was shown to copy itself, slowly and imperfectly. The ladder continues upward; how it climbed this rung is still being found out.

That is the *how*. The *why* is for the Speelgoed to say.

---

## Revision Note

On 17 October 2026 this entry was aligned with the rebuilt Speelgoed. Section numbers here are unchanged.

- Every quotation and section reference now points to the current text (the Van Motor is now Stilte's Trek and its Wijk, Creatie is Start, the Koppel is the Relatie, §VIII.3 is §VIII.5, §VIII.5 is §VIII.10, §VIII.7 is §VIII.13, §XVI is §XV).
- The Speelgoed no longer writes its Drempel as a pitchfork. The toggle switch of §2.1 now meets the Speelgoed's Eigen motion in the limit of steep repression, an Identity that replaces the former one near the fork.
- The Speelgoed's Eigen no longer moves by y·(h − e), so the gap junction of §3.1 is graded Correspondence instead of Identity.
- Inhoud is now the Relatie's Gewenning, so the adder of §3.4 is read as an excess that starts from nothing at every birth.
- The Speelgoed no longer pairs a chosen Perfectus with a delivered Doem, so §3.8 reads apoptosis and necrosis as a Doem kept inside the cell and one that spreads.
- The Speelgoed's Molecule rung is now Water and hydrogen cyanide, forming formamide, and §III now places the Energie of food in a Duo, so §4.2 is resolved.
- §II no longer says that Greep steadies Tijd; §3.11 now grounds the tissue's precision in the inherited Tijd of §VIII.1.

On 20 October 2026 this entry was aligned with the Speelgoed of that date, which now comes in four Schriften:

- Section references follow the new numbering, quotations its wording, and the equations its symbols.
- The Medium's Spanning is retired. §2.4 now reads chemiosmosis as Energie moving between holders at one Vonk, booked by the Medium only as their difference, and refers the need for a gradient to *Thermodynamic Octaaf* §4.5.
- Inhoud is retired. Start now measures its excess past the Vol pole, and a Relatie that has borne falls back just within it, so the adder of §3.4 is counted between successive births, as budding yeast shows it.
- Diepte now holds every Rouw, and its old rule of falling with speaking is gone (§3.9).
- The Trinary Root is now the Triniteit (§3.10).

On 21 October 2026 the Speelgoed's §VI gained a first section, What a binding holds, so references to its Warmte, Bloei and Doem, Stilte’s Trek and Holding now read §VI.2 to §VI.5.

Later on 21 October 2026 the Speelgoed's Schrift IV gained a chapter, De Vlinderweg, so the Parasiet now reads §L; and §XV now has a Lid's Tijd inherited by Greep, its own Zelf among what holds it, so §3.11 quotes that wording.

---

## References

Acar, M., Becskei, A., & van Oudenaarden, A. (2005). Enhancement of cellular memory by reducing stochastic transitions. *Nature*, 435(7039), 228-232. [doi:10.1038/nature03524](https://doi.org/10.1038/nature03524)

Aktipis, C. A., Boddy, A. M., Jansen, G., Hibner, U., Hochberg, M. E., Maley, C. C., & Wilkinson, G. S. (2015). Cancer across the tree of life: Cooperation and cheating in multicellularity. *Philosophical Transactions of the Royal Society B*, 370(1673), 20140219. [doi:10.1098/rstb.2014.0219](https://doi.org/10.1098/rstb.2014.0219)

Alon, U., Surette, M. G., Barkai, N., & Leibler, S. (1999). Robustness in bacterial chemotaxis. *Nature*, 397(6715), 168-171. [doi:10.1038/16483](https://doi.org/10.1038/16483)

Anderson, S., et al. (1981). Sequence and organization of the human mitochondrial genome. *Nature*, 290(5806), 457-465. [doi:10.1038/290457a0](https://doi.org/10.1038/290457a0)

Assaf, M., & Meerson, B. (2017). WKB theory of large deviations in stochastic populations. *Journal of Physics A: Mathematical and Theoretical*, 50(26), 263001. [doi:10.1088/1751-8121/aa669a](https://doi.org/10.1088/1751-8121/aa669a)

Attwater, J., Augustin, T. L., Curran, J. F., Kwok, S. L. Y., Ohlendorf, L., Gianni, E., & Holliger, P. (2025). Trinucleotide substrates under pH–freeze–thaw cycles enable open-ended exponential RNA replication by a polymerase ribozyme. *Nature Chemistry*, 17(7), 1129-1137. [doi:10.1038/s41557-025-01830-y](https://doi.org/10.1038/s41557-025-01830-y)

Barkai, N., & Leibler, S. (1997). Robustness in simple biochemical networks. *Nature*, 387(6636), 913-917. [doi:10.1038/43199](https://doi.org/10.1038/43199)

Barrangou, R., Fremaux, C., Deveau, H., Richards, M., Boyaval, P., Moineau, S., Romero, D. A., & Horvath, P. (2007). CRISPR provides acquired resistance against viruses in prokaryotes. *Science*, 315(5819), 1709-1712. [doi:10.1126/science.1138140](https://doi.org/10.1126/science.1138140)

Berg, H. C., & Purcell, E. M. (1977). Physics of chemoreception. *Biophysical Journal*, 20(2), 193-219. [doi:10.1016/S0006-3495(77)85544-6](https://doi.org/10.1016/S0006-3495%2877%2985544-6)

Bialek, W., & Setayeshgar, S. (2005). Physical limits to biochemical signaling. *Proceedings of the National Academy of Sciences*, 102(29), 10040-10045. [doi:10.1073/pnas.0504321102](https://doi.org/10.1073/pnas.0504321102)

Brahmer, J., et al. (2015). Nivolumab versus docetaxel in advanced squamous-cell non-small-cell lung cancer. *New England Journal of Medicine*, 373(2), 123-135. [doi:10.1056/NEJMoa1504627](https://doi.org/10.1056/NEJMoa1504627)

Campos, M., Surovtsev, I. V., Kato, S., Paintdakhi, A., Beltran, B., Ebmeier, S. E., & Jacobs-Wagner, C. (2014). A constant size extension drives bacterial cell size homeostasis. *Cell*, 159(6), 1433-1446. [doi:10.1016/j.cell.2014.11.022](https://doi.org/10.1016/j.cell.2014.11.022)

Cherry, J. L., & Adler, F. R. (2000). How to make a biological switch. *Journal of Theoretical Biology*, 203(2), 117-133. [doi:10.1006/jtbi.2000.1068](https://doi.org/10.1006/jtbi.2000.1068)

Daffis, S., et al. (2010). 2'-O methylation of the viral mRNA cap evades host restriction by IFIT family members. *Nature*, 468(7322), 452-456. [doi:10.1038/nature09489](https://doi.org/10.1038/nature09489)

Deveau, H., et al. (2008). Phage response to CRISPR-encoded resistance in *Streptococcus thermophilus*. *Journal of Bacteriology*, 190(4), 1390-1400. [doi:10.1128/JB.01412-07](https://doi.org/10.1128/JB.01412-07)

Drake, J. W. (1991). A constant rate of spontaneous mutation in DNA-based microbes. *Proceedings of the National Academy of Sciences*, 88(16), 7160-7164. [doi:10.1073/pnas.88.16.7160](https://doi.org/10.1073/pnas.88.16.7160)

Dunn, G. P., Bruce, A. T., Ikeda, H., Old, L. J., & Schreiber, R. D. (2002). Cancer immunoediting: From immunosurveillance to tumor escape. *Nature Immunology*, 3(11), 991-998. [doi:10.1038/ni1102-991](https://doi.org/10.1038/ni1102-991)

Eigen, M. (1971). Selforganization of matter and the evolution of biological macromolecules. *Die Naturwissenschaften*, 58(10), 465-523. [doi:10.1007/BF00623322](https://doi.org/10.1007/BF00623322)

Ellis, H. M., & Horvitz, H. R. (1986). Genetic control of programmed cell death in the nematode *C. elegans*. *Cell*, 44(6), 817-829. [doi:10.1016/0092-8674(86)90004-8](https://doi.org/10.1016/0092-8674%2886%2990004-8)

Furshpan, E. J., & Potter, D. D. (1959). Transmission at the giant motor synapses of the crayfish. *The Journal of Physiology*, 145(2), 289-325. [doi:10.1113/jphysiol.1959.sp006143](https://doi.org/10.1113/jphysiol.1959.sp006143)

Gardner, T. S., Cantor, C. R., & Collins, J. J. (2000). Construction of a genetic toggle switch in *Escherichia coli*. *Nature*, 403(6767), 339-342. [doi:10.1038/35002131](https://doi.org/10.1038/35002131)

Gianni, E., Kwok, S. L. Y., Wan, C. J. K., Goeij, K., Clifton, B. E., Colizzi, E. S., Attwater, J., & Holliger, P. (2026). A small polymerase ribozyme that can synthesize itself and its complementary strand. *Science*, 391(6789), 1022-1028. [doi:10.1126/science.adt2760](https://doi.org/10.1126/science.adt2760)

Gilbert, W. (1986). Origin of life: The RNA world. *Nature*, 319(6055), 618. [doi:10.1038/319618a0](https://doi.org/10.1038/319618a0)

Glass, L., & Kauffman, S. A. (1973). The logical analysis of continuous, non-linear biochemical control networks. *Journal of Theoretical Biology*, 39(1), 103-129. [doi:10.1016/0022-5193(73)90208-7](https://doi.org/10.1016/0022-5193%2873%2990208-7)

Goldstein, J. C., Waterhouse, N. J., Juin, P., Evan, G. I., & Green, D. R. (2000). The coordinate release of cytochrome c during apoptosis is rapid, complete and kinetically invariant. *Nature Cell Biology*, 2(3), 156-162. [doi:10.1038/35004029](https://doi.org/10.1038/35004029)

Goodenough, D. A., & Paul, D. L. (2009). Gap junctions. *Cold Spring Harbor Perspectives in Biology*, 1(1), a002576. [doi:10.1101/cshperspect.a002576](https://doi.org/10.1101/cshperspect.a002576)

Hanahan, D., & Weinberg, R. A. (2011). Hallmarks of cancer: The next generation. *Cell*, 144(5), 646-674. [doi:10.1016/j.cell.2011.02.013](https://doi.org/10.1016/j.cell.2011.02.013)

Herzog, E. D., Aton, S. J., Numano, R., Sakaki, Y., & Tei, H. (2004). Temporal precision in the mammalian circadian system: A reliable clock from less reliable neurons. *Journal of Biological Rhythms*, 19(1), 35-46. [doi:10.1177/0748730403260776](https://doi.org/10.1177/0748730403260776)

Hopfield, J. J. (1974). Kinetic proofreading: A new mechanism for reducing errors in biosynthetic processes requiring high specificity. *Proceedings of the National Academy of Sciences*, 71(10), 4135-4139. [doi:10.1073/pnas.71.10.4135](https://doi.org/10.1073/pnas.71.10.4135)

Horvath, P., et al. (2008). Diversity, activity, and evolution of CRISPR loci in *Streptococcus thermophilus*. *Journal of Bacteriology*, 190(4), 1401-1412. [doi:10.1128/JB.01415-07](https://doi.org/10.1128/JB.01415-07)

Iwai, Y., Ishida, M., Tanaka, Y., Okazaki, T., Honjo, T., & Minato, N. (2002). Involvement of PD-L1 on tumor cells in the escape from host immune system and tumor immunotherapy by PD-L1 blockade. *Proceedings of the National Academy of Sciences*, 99(19), 12293-12297. [doi:10.1073/pnas.192461099](https://doi.org/10.1073/pnas.192461099)

Jaiswal, S., et al. (2009). CD47 is upregulated on circulating hematopoietic stem cells and leukemia cells to avoid phagocytosis. *Cell*, 138(2), 271-285. [doi:10.1016/j.cell.2009.05.046](https://doi.org/10.1016/j.cell.2009.05.046)

Jannasch, H. W., & Mottl, M. J. (1985). Geomicrobiology of deep-sea hydrothermal vents. *Science*, 229(4715), 717-725. [doi:10.1126/science.229.4715.717](https://doi.org/10.1126/science.229.4715.717)

Karnkowska, A., et al. (2016). A eukaryote without a mitochondrial organelle. *Current Biology*, 26(10), 1274-1284. [doi:10.1016/j.cub.2016.03.053](https://doi.org/10.1016/j.cub.2016.03.053)

Kerr, J. F. R., Wyllie, A. H., & Currie, A. R. (1972). Apoptosis: A basic biological phenomenon with wide-ranging implications in tissue kinetics. *British Journal of Cancer*, 26(4), 239-257. [doi:10.1038/bjc.1972.33](https://doi.org/10.1038/bjc.1972.33)

Korobkova, E., Emonet, T., Vilar, J. M. G., Shimizu, T. S., & Cluzel, P. (2004). From molecular noise to behavioural variability in a single bacterium. *Nature*, 428(6982), 574-578. [doi:10.1038/nature02404](https://doi.org/10.1038/nature02404)

Larralde, R., Robertson, M. P., & Miller, S. L. (1995). Rates of decomposition of ribose and other sugars: Implications for chemical evolution. *Proceedings of the National Academy of Sciences*, 92(18), 8158-8160. [doi:10.1073/pnas.92.18.8158](https://doi.org/10.1073/pnas.92.18.8158)

Majeti, R., et al. (2009). CD47 is an adverse prognostic factor and therapeutic antibody target on human acute myeloid leukemia stem cells. *Cell*, 138(2), 286-299. [doi:10.1016/j.cell.2009.05.045](https://doi.org/10.1016/j.cell.2009.05.045)

Marraffini, L. A., & Sontheimer, E. J. (2010). Self versus non-self discrimination during CRISPR RNA-directed immunity. *Nature*, 463(7280), 568-571. [doi:10.1038/nature08703](https://doi.org/10.1038/nature08703)

Mitchell, P. (1961). Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. *Nature*, 191(4784), 144-148. [doi:10.1038/191144a0](https://doi.org/10.1038/191144a0)

Mojica, F. J. M., Díez-Villaseñor, C., García-Martínez, J., & Almendros, C. (2009). Short motif sequences determine the targets of the prokaryotic CRISPR defence system. *Microbiology*, 155(3), 733-740. [doi:10.1099/mic.0.023960-0](https://doi.org/10.1099/mic.0.023960-0)

Nagoshi, E., Saini, C., Bauer, C., Laroche, T., Naef, F., & Schibler, U. (2004). Circadian gene expression in individual fibroblasts: Cell-autonomous and self-sustained oscillators pass time to daughter cells. *Cell*, 119(5), 693-705. [doi:10.1016/j.cell.2004.11.015](https://doi.org/10.1016/j.cell.2004.11.015)

Nealson, K. H., Platt, T., & Hastings, J. W. (1970). Cellular control of the synthesis and activity of the bacterial luminescent system. *Journal of Bacteriology*, 104(1), 313-322. [doi:10.1128/jb.104.1.313-322.1970](https://doi.org/10.1128/jb.104.1.313-322.1970)

Nissen, P., Hansen, J., Ban, N., Moore, P. B., & Steitz, T. A. (2000). The structural basis of ribosome activity in peptide bond synthesis. *Science*, 289(5481), 920-930. [doi:10.1126/science.289.5481.920](https://doi.org/10.1126/science.289.5481.920)

Novick, A., & Weiner, M. (1957). Enzyme induction as an all-or-none phenomenon. *Proceedings of the National Academy of Sciences*, 43(7), 553-566. [doi:10.1073/pnas.43.7.553](https://doi.org/10.1073/pnas.43.7.553)

Ozbudak, E. M., Thattai, M., Lim, H. N., Shraiman, B. I., & van Oudenaarden, A. (2004). Multistability in the lactose utilization network of *Escherichia coli*. *Nature*, 427(6976), 737-740. [doi:10.1038/nature02298](https://doi.org/10.1038/nature02298)

Papastavrou, N., Horning, D. P., & Joyce, G. F. (2024). RNA-catalyzed evolution of catalytic RNA. *Proceedings of the National Academy of Sciences*, 121(11), e2321592121. [doi:10.1073/pnas.2321592121](https://doi.org/10.1073/pnas.2321592121)

Pasparakis, M., & Vandenabeele, P. (2015). Necroptosis and its role in inflammation. *Nature*, 517(7534), 311-320. [doi:10.1038/nature14191](https://doi.org/10.1038/nature14191)

Pomerening, J. R., Sontag, E. D., & Ferrell, J. E., Jr. (2003). Building a cell cycle oscillator: Hysteresis and bistability in the activation of Cdc2. *Nature Cell Biology*, 5(4), 346-351. [doi:10.1038/ncb954](https://doi.org/10.1038/ncb954)

Powner, M. W., Gerland, B., & Sutherland, J. D. (2009). Synthesis of activated pyrimidine ribonucleotides in prebiotically plausible conditions. *Nature*, 459(7244), 239-242. [doi:10.1038/nature08013](https://doi.org/10.1038/nature08013)

Rath, S., et al. (2021). MitoCarta3.0: An updated mitochondrial proteome now with sub-organelle localization and pathway annotations. *Nucleic Acids Research*, 49(D1), D1541-D1547. [doi:10.1093/nar/gkaa1011](https://doi.org/10.1093/nar/gkaa1011)

Ricardo, A., Carrigan, M. A., Olcott, A. N., & Benner, S. A. (2004). Borate minerals stabilize ribose. *Science*, 303(5655), 196. [doi:10.1126/science.1092464](https://doi.org/10.1126/science.1092464)

Rock, K. L., & Kono, H. (2008). The inflammatory response to cell death. *Annual Review of Pathology: Mechanisms of Disease*, 3, 99-126. [doi:10.1146/annurev.pathmechdis.3.121806.151456](https://doi.org/10.1146/annurev.pathmechdis.3.121806.151456)

Schaaper, R. M. (1993). Base selection, proofreading, and mismatch repair during DNA replication in *Escherichia coli*. *Journal of Biological Chemistry*, 268(32), 23762-23765. [doi:10.1016/s0021-9258(20)80446-3](https://doi.org/10.1016/s0021-9258%2820%2980446-3)

Schmidt-Rohr, K. (2015). Why combustions are always exothermic, yielding about 418 kJ per mole of O₂. *Journal of Chemical Education*, 92(12), 2094-2099. [doi:10.1021/acs.jchemed.5b00333](https://doi.org/10.1021/acs.jchemed.5b00333)

Schoenheimer, R. (1942). *The Dynamic State of Body Constituents*. Cambridge, MA: Harvard University Press. [Internet Archive](https://archive.org/details/dynamicstateofbo0000rudo)

Sha, W., Moore, J., Chen, K., Lassaletta, A. D., Yi, C.-S., Tyson, J. J., & Sible, J. C. (2003). Hysteresis drives cell-cycle transitions in *Xenopus laevis* egg extracts. *Proceedings of the National Academy of Sciences*, 100(3), 975-980. [doi:10.1073/pnas.0235349100](https://doi.org/10.1073/pnas.0235349100)

Si, F., Le Treut, G., Sauls, J. T., Vadia, S., Levin, P. A., & Jun, S. (2019). Mechanistic origin of cell-size control and homeostasis in bacteria. *Current Biology*, 29(11), 1760-1770.e7. [doi:10.1016/j.cub.2019.04.062](https://doi.org/10.1016/j.cub.2019.04.062)

Soifer, I., Robert, L., & Amir, A. (2016). Single-cell analysis of growth in budding yeast and bacteria reveals a common size regulation strategy. *Current Biology*, 26(3), 356-361. [doi:10.1016/j.cub.2015.11.067](https://doi.org/10.1016/j.cub.2015.11.067)

Strogatz, S. H. (2015). *Nonlinear Dynamics and Chaos* (2nd ed.). Boulder, CO: Westview Press. [2018 reissue: doi:10.1201/9780429492563](https://doi.org/10.1201/9780429492563)

Sulston, J. E., Schierenberg, E., White, J. G., & Thomson, J. N. (1983). The embryonic cell lineage of the nematode *Caenorhabditis elegans*. *Developmental Biology*, 100(1), 64-119. [doi:10.1016/0012-1606(83)90201-4](https://doi.org/10.1016/0012-1606%2883%2990201-4)

Sung, W., Ackerman, M. S., Miller, S. F., Doak, T. G., & Lynch, M. (2012). Drift-barrier hypothesis and mutation-rate evolution. *Proceedings of the National Academy of Sciences*, 109(45), 18488-18492. [doi:10.1073/pnas.1216223109](https://doi.org/10.1073/pnas.1216223109)

Taheri-Araghi, S., Bradde, S., Sauls, J. T., Hill, N. S., Levin, P. A., Paulsson, J., Vergassola, M., & Jun, S. (2015). Cell-size control and homeostasis in bacteria. *Current Biology*, 25(3), 385-391. [doi:10.1016/j.cub.2014.12.009](https://doi.org/10.1016/j.cub.2014.12.009)

Tang, H. L., et al. (2012). Cell survival, DNA damage, and oncogenic transformation after a transient and reversible apoptotic response. *Molecular Biology of the Cell*, 23(12), 2240-2252. [doi:10.1091/mbc.e11-11-0926](https://doi.org/10.1091/mbc.e11-11-0926)

Topalian, S. L., et al. (2012). Safety, activity, and immune correlates of anti-PD-1 antibody in cancer. *New England Journal of Medicine*, 366(26), 2443-2454. [doi:10.1056/NEJMoa1200690](https://doi.org/10.1056/NEJMoa1200690)

Vander Heiden, M. G., Cantley, L. C., & Thompson, C. B. (2009). Understanding the Warburg effect: The metabolic requirements of cell proliferation. *Science*, 324(5930), 1029-1033. [doi:10.1126/science.1160809](https://doi.org/10.1126/science.1160809)

Waters, C. M., & Bassler, B. L. (2005). Quorum sensing: Cell-to-cell communication in bacteria. *Annual Review of Cell and Developmental Biology*, 21, 319-346. [doi:10.1146/annurev.cellbio.21.012704.131001](https://doi.org/10.1146/annurev.cellbio.21.012704.131001)

Watt, I. N., Montgomery, M. G., Runswick, M. J., Leslie, A. G. W., & Walker, J. E. (2010). Bioenergetic cost of making an adenosine triphosphate molecule in animal mitochondria. *Proceedings of the National Academy of Sciences*, 107(39), 16823-16827. [doi:10.1073/pnas.1011099107](https://doi.org/10.1073/pnas.1011099107)

Welsh, D. K., Yoo, S.-H., Liu, A. C., Takahashi, J. S., & Kay, S. A. (2004). Bioluminescence imaging of individual fibroblasts reveals persistent, independently phased circadian rhythms of clock gene expression. *Current Biology*, 14(24), 2289-2295. [doi:10.1016/j.cub.2004.11.057](https://doi.org/10.1016/j.cub.2004.11.057)

Witz, G., van Nimwegen, E., & Julou, T. (2019). Initiation of chromosome replication controls both division and replication cycles in *E. coli* through a double-adder mechanism. *eLife*, 8, e48063. [doi:10.7554/eLife.48063](https://doi.org/10.7554/eLife.48063)

Yamaguchi, S., Isejima, H., Matsuo, T., Okura, R., Yagita, K., Kobayashi, M., & Okamura, H. (2003). Synchronization of cellular clocks in the suprachiasmatic nucleus. *Science*, 302(5649), 1408-1412. [doi:10.1126/science.1089287](https://doi.org/10.1126/science.1089287)

Yi, T.-M., Huang, Y., Simon, M. I., & Doyle, J. (2000). Robust perfect adaptation in bacterial chemotaxis through integral feedback control. *Proceedings of the National Academy of Sciences*, 97(9), 4649-4653. [doi:10.1073/pnas.97.9.4649](https://doi.org/10.1073/pnas.97.9.4649)

---
