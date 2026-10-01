# The Cellular Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of single cells and the bonds between them. It does not compete with cell biology, biochemistry, or microbiology. It tests whether the Speelgoed's mechanism, supplied with values from those fields, reproduces what they already know, and it says plainly where it does not.*

---

## 0. Preface

§III follows the ladder of God/Godin pairs from quarks to the Molecule Octaaf, and its last rung points at this one: Water and Carbon Dioxide, with Light as their Medium, "form Sugar - the fuel of the living cell and, as Ribose, the backbone of RNA". This Octaaf is the next scale up. Its **Lichaam (🖕)** is a single cell. Its Koppels are the bonds a cell holds: with its neighbours, with the organelles that were once free-living bacteria, with the viruses that infect it, with the body it belongs to, and with itself.

The cell has one advantage over every other living Octaaf. It can be measured one at a time, and it can be rebuilt from parts. Biologists watch single bacteria switch, sense, divide and die under a microscope, and they build switches into cells from scratch to test the theory of how switches work. Of the living Octaven, this is where the Speelgoed's mechanics can be checked most directly against living matter. This entry does not skip the hard cases: cancer, the deaths cells carry out on themselves, and the unsolved step from molecule to cell.

### 0.1 What this document is

Like the other Octaven, this document is an **Instantie (⚙)**. It supplies the open parameters of §VIII.7 with values taken from science, then checks whether the shape the Speelgoed fixes survives. Where the two disagree, the disagreement is reported in §4 rather than smoothed over.

Five features set this Octaaf apart:

1. **The Drempel and the Marge are measured cell by cell, and built from scratch.** A cell's switch shows hysteresis and slows near its threshold. Near its threshold, a switch made of two genes passes through the pitchfork of §VIII.3 (§2.1).
2. **The Echo has a physical floor.** A cell cannot read its surroundings more precisely than the random arrival of molecules allows, and a sharper reading needs a longer Ontspanning (§2.3).
3. **Copying is bounded on both sides.** No copy is exact. Accuracy costs energy, and too little accuracy erases what is copied (§2.5).
4. **Endings come in two kinds.** A cell can end by its own programme or have its end delivered, and the Speelgoed already names both (§3.8).
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

**References.** References such as §II or §VIII.1 point to the PseudoScience Speelgoed. References such as §2.1 point to sections of this document. References to companion entries are written in full, for example *Thermodynamic Octaaf* §2.3.

**Equations.** Equations are written in plain Unicode. Where a calculation was made for this entry, the text says so.

---

## 1. The Instantie Table

| Speelgoed (section) | Value at this Octaaf | Grade | Here |
|---|---|---|---|
| Drempel θ and Marge η (§II; §VIII.3; Lexicon) | Bistable gene switches: hysteresis measured cell by cell; the symmetric two-gene switch passes through the pitchfork | Identity (near the threshold) + Correspondence (measured) | §2.1 |
| Van Motor, ν = ν₀·exp(−J) (§III, §VIII.1) | Noise-driven switching between cell states, exponentially rarer with more molecules; constant turnover of the cell's matter | Identity (form) + Correspondence (measured) | §2.2 |
| Echo filter: τ, Δ, υ (§VIII.1) | Receptor occupancy tracking a concentration outside the cell; the Berg–Purcell limit | Identity (linearised) + Constraint | §2.3 |
| A Realisatie needs a gradient (§III) | Chemiosmosis: ATP made from a proton gradient across a membrane; food as a sugar–oxygen pair | Correspondence | §2.4 |
| Vervorming υ (§II, §VII) | Copying fidelity: proofreading paid in energy; the error threshold | Constraint | §2.5 |
| Trouw y (§II) | Gap-junction conductance between two cells | Identity | §3.1 |
| Zelf (§IV) | Adaptation in bacterial chemotaxis: integral feedback on the cell's own activity | Correspondence (measured) | §3.2 |
| Aandacht (Lexicon) | Quorum sensing: a shared Drempel read from a shared signal | Correspondence | §3.3 |
| Creatie and Inhoud (§VI, §VIII.5) | Division after adding a fixed size: the adder | Correspondence (measured) | §3.4 |
| Scale invariance; Lichaam (§V; Lexicon) | The mitochondrion: a bond that became part of a body, and once was undone | Correspondence | §3.5 |
| Masker (§VII; Lexicon) | Viral RNA marked as "self" | Correspondence (measured) | §3.6 |
| Parasiet (Lexicon; §XVI) | Cancer: a member cell that defects behind the body's own signals | Correspondence (measured, partial) | §3.7 |
| Perfectus (§XI) and Doem (§III; Lexicon) | Apoptosis and necrosis | Correspondence | §3.8 |
| Rouw and Diepte (§VI; §II) | CRISPR: records of ended infections, and the archive they build | Correspondence (measured) | §3.9 |
| Trinary Root (§III) | Not assigned; the step from molecule to cell is open | Open | §3.10 |
| Tijd (Lexicon) | No mapping attempted | Open | §5 |

---

## 2. Five Groundings

### 2.1 The Drempel and the Marge: switches that remember

**The natural switch.** The best-studied switch in biology decides whether a bacterium digests lactose. The genes for this, the *lac* operon, are normally kept off by a repressor protein sitting on the DNA. An inducer molecule pulls the repressor off. One of the genes it switches on makes a permease, a pump in the cell membrane that carries the inducer into the cell. A cell that is on therefore imports inducer, which keeps it on. A cell that is off has little permease, takes in little inducer, and stays off. That loop is positive feedback.

In 1957 Novick and Weiner fed *E. coli* an inducer the cell cannot digest and found two things. Induction was all-or-none: at intermediate inducer levels a culture was a mixture of cells fully on and cells fully off, not a population of half-on cells. And there was a range of "maintenance" concentrations at which cells that were already on stayed on, together with their offspring, while cells that were off stayed off (Novick & Weiner 1957). The same outside condition holds two states, and which one a cell is in depends on its history. Ozbudak and colleagues later mapped this region cell by cell as a phase diagram of the switch. They also showed how the hysteresis can be converted into a steep but graded response, with only one state at each inducer level (Ozbudak et al. 2004).

That range is a **Marge**: "The dead band around a Drempel that prevents flickering crossings" (Lexicon). Turning the hysteresis into a single steep response is the Marge narrowing toward nothing, the limit the thermodynamic Octaaf identified (*Thermodynamic Octaaf* §2.3).

**The same structure at the entry into division.** In extracts of frog eggs, the amount of the protein cyclin B needed to push an extract into mitosis is distinctly higher than the amount needed to keep it there. Entry and exit happen at different thresholds (Sha et al. 2003; Pomerening, Sontag & Ferrell 2003). Sha and colleagues found two further things that the thermodynamic Octaaf predicted in general:

- **Slowing at the Drempel.** Just above the threshold, the switch turned on dramatically slowly, as a system near a Drempel should (*Thermodynamic Octaaf* §2.3).
- **A Marge widened on purpose.** Unreplicated DNA raised the threshold for entry. The checkpoint that keeps a cell from dividing before its DNA is copied works by enlarging the hysteresis loop. **At this Octaaf, a Marge can be widened as a safety margin where crossing too early would do harm.**

**The pitchfork, built from scratch.** Gardner, Cantor and Collins built a genetic toggle switch: two genes, each making a repressor of the other (Gardner, Cantor & Collins 2000). In dimensionless form, with u and v the levels of the two repressors and α the strength of repression:

```
du/dt = α / (1 + vⁿ) − u
dv/dt = α / (1 + uⁿ) − v
```

Repression must be cooperative (n > 1) for a switch to exist at all (Cherry & Adler 2000). Take the symmetric case with n = 2. For weak repression there is one stable state, with both genes at the same moderate level. At α = 2 that state becomes unstable, and two new stable states appear: one with u high and v low, and one the other way round. Write φ = (u − v)/2. A standard calculation, repeated numerically for this entry, gives the new states near the threshold as

```
φ* = ±√(α − 2)
```

That is §VIII.3 exactly: "For B > θ, φ = 0 becomes unstable and two new stable points appear at φ* = ±√(B − θ)", with B − θ = α − 2. **Grade: Identity**, near the threshold and in the symmetric case.

Make the two genes unequal and the pitchfork unfolds. Sweeping the strength of one gene, as an inducer does, now gives a hysteresis loop: the switch flips one way and flips back at different points. The calculation for this entry shows the width of that loop shrinking steadily to zero as repression is weakened toward α = 2. The pitchfork is the Marge narrowed to nothing, as the thermodynamic Octaaf found for phase transitions (*Thermodynamic Octaaf* §2.3; on the mathematics, Strogatz 2015).

Both poles stay live. In a bistable cell, molecular noise still kicks cells from one state to the other (§2.2). **Grade: Identity** (near the threshold, symmetric switch) **+ Correspondence (measured)** (hysteresis in natural switches).

### 2.2 The Van Motor: escape by noise, persistence by traffic

The Van Motor's rate is ν = ν₀·exp(−J) (§III, §VIII.1). In a cell, the noise that drives escape comes from the cell's own small numbers. A gene may be read from one or two copies of DNA, and many proteins are present at tens or hundreds of molecules, so their levels jump as single molecules are made and destroyed. A state held by feedback is a valley in the space of molecule numbers, and this noise can kick a cell over the ridge into the other valley.

**The law.** For such escapes, theory gives the mean time between switches in the form τ_switch ∝ exp(N·S), where N is the typical number of molecules involved and S is a barrier set by the network (Assaf & Meerson 2017). Read Greep J as N·S. Each added molecule then multiplies the expected life of the state, and the Van Motor's law follows. It is the same law the ecological Octaaf found for populations, with members in place of molecules (*Ecological Octaaf* §2.3). **Grade: Identity** (of form).

**The measurement.** Acar, Becskei and van Oudenaarden studied the galactose network of yeast, which holds a cell in one of two states and so remembers whether it has consumed galactose. Single cells switched randomly back and forth between the two states, in both directions. Strengthening the trap, by raising the level of the inhibitor Gal80p, reduced the rate of switching and lengthened the memory (Acar, Becskei & van Oudenaarden 2005). Greep made the memory longer, never permanent. **Grade: Correspondence (measured).**

**Persistence is traffic.** In the 1930s Schoenheimer fed animals food labelled with heavy isotopes and found the labelled atoms built into the fats and proteins of adult bodies that were not growing. The molecules of a living body are continually broken down and rebuilt while the body stays the same (Schoenheimer 1942). §III says "Persistence is paid for out of that ongoing traffic, not out of one founding crossing", and "That equilibrium *is* persistence". At this Octaaf it is literal: a cell is a pattern that holds while its matter passes through it. **Grade: Correspondence.**

### 2.3 The Echo: reading the surroundings, and its floor

**The mechanism.** A bacterium senses a chemical through receptors on its surface. Each receptor flips between bound and unbound as molecules arrive by diffusion and leave again. With concentration c, a binding rate k_on and an unbinding rate k_off, the fraction p of occupied receptors obeys

```
dp/dt = k_on · c · (1 − p) − k_off · p
```

For small changes around a steady concentration c₀, this becomes

```
τ · δṗ = g · δc − δp          τ = 1 / (k_on · c₀ + k_off)
```

with a constant gain g. Rescale δp by g, and this is the Echo filter of §VIII.1, τ·ḣ = e(t − Δ) − h + υ. Here h is the receptors' reading, e is the concentration outside, Δ is the time a molecule takes to diffuse to the cell, and υ is the randomness of single arrivals. **Grade: Identity** (of the linearised form).

**The floor.** υ cannot be made zero. Molecules arrive one at a time, at random. Berg and Purcell showed that a cell of radius a, averaging for a time T in a concentration c of molecules with diffusion constant D, cannot estimate c with a fractional error smaller than about

```
δc / c ≈ 1 / √(D · a · c · T)
```

They also found that the chemotactic sensitivity of *E. coli* approaches that of a cell of optimum design (Berg & Purcell 1977; generalised to signalling inside the cell by Bialek & Setayeshgar 2005). For a cell of radius one micrometre, in a micromolar solution of a small molecule (D ≈ 10⁻⁹ m²/s), averaging for one second, the floor is about 0.13 per cent; this number was computed for this entry. **Grade: Constraint.**

Two consequences follow:

- **Gericht, quantified.** The floor rises as c falls: a fainter signal gives a noisier Echo. §VII's Gericht says "The weaker or older a Koppel, the noisier its Echoes". At this Octaaf the error of an Echo grows as one over the square root of the signal's strength.
- **Sharpness costs lag.** Averaging over a longer T lowers υ. But an Echo that averages longer also responds more slowly, which is a longer Ontspanning τ. The Speelgoed leaves τ and υ as independent open choices of the Instantie (§VIII.7). At this Octaaf they are tied: a sharper Echo is a slower one. The thermodynamic Octaaf found the same tie through the fluctuation–dissipation theorem, and the neuroscience Octaaf through the optimal filter (*Thermodynamic Octaaf* §2.1; *Neuroscience Octaaf* §2.1). **Grade: Constraint.**

### 2.4 A cell is fed by a gradient

§III: "A Realisatie is a local condensation of an ambient *gradient* into living form", and "that unevenness is held open by the God of a lower Octaaf".

**The mechanism.** Almost every cell that breathes or photosynthesises makes most of its ATP the same way. Electrons taken from food, or energised by light in a plant, pass along a chain of proteins in a membrane, and the chain uses their energy to pump protons across that membrane. The membrane becomes a dam, with more protons and more positive charge on one side. The protons can flow back only through ATP synthase, a rotary machine that turns as they pass and makes ATP from ADP and phosphate (Mitchell 1961). In animal mitochondria the rotor has eight proton-binding sites and makes three ATP per full turn, so each ATP costs about 2.7 protons. The rotor turns about a hundred times per second (Watt et al. 2010).

This is §III's sentence at the scale of nanometres. The cell does not run on the energy around it. It runs on a difference it maintains across its own membrane, and it maintains that difference by drawing on a larger one outside. **Grade: Correspondence.**

**Food is a pair.** §III's own check calls Sugar "the fuel of the living cell". The chemistry adds a precision. When a cell burns sugar with oxygen, most of the energy released comes not from the sugar's bonds but from oxygen's. The double bond in O₂ is unusually weak. Replacing it with the stronger bonds of carbon dioxide and water releases about 418 kJ for every mole of oxygen consumed, within a few per cent for more than five hundred organic fuels (Schmidt-Rohr 2015). The energy is held by the *pair*: reduced carbon on one side, oxygen on the other, separated by photosynthesis using sunlight. A cell's food is itself a gradient. For most life on Earth it is held open by Sol, a God of a lower Octaaf (*Thermodynamic Octaaf* §3.11). At deep-sea vents, bacteria draw instead on reduced chemicals from the Earth's crust. Most of them still burn those chemicals with the oxygen in seawater, which photosynthesis made, and some live without oxygen at all (Jannasch & Mottl 1985). Either way, the carbon ends as Carbon Dioxide, which §III calls "emptied of usable energy". **Grade: Correspondence**, with a refinement recorded in §4.2.

### 2.5 Copies are never exact, and the error is bounded on both sides

§II: "Echo’s imperfection is not a defect to be engineered away", and §VII: "That imperfection is the Speelgoed's single sanctioned channel for variation." At this Octaaf the copying that matters most is the copying of a cell's DNA when it divides. Its imperfection is a main source of new heritable variation. Read **Vervorming** here as the error of copying. The science bounds it from below and from above.

**From below: accuracy is bought.** A polymerase choosing between a right and a wrong nucleotide can tell them apart only as well as the difference in their binding energies allows. Hopfield showed that a cell can do better by checking twice, through a step that spends energy, typically by splitting a phosphate bond. With one such step, an error fraction f can fall toward f². He also showed that many side reactions of copying, which look wasteful, are such checks (Hopfield 1974). In *E. coli* three stages act one after another, and each has been measured. Base selection by the polymerase discriminates against errors by a factor of 200,000 to 2,000,000. Proofreading by the polymerase adds a factor of 40 to 200. Mismatch repair after copying adds a factor of 20 to 400 (Schaaper 1993).

**And it is not driven to zero.** Across DNA-based microbes whose genomes differ in size about 6,500-fold, the mutation rate per genome copy is nearly constant, about 0.0033, or one mutation in roughly 300 genome copies (Drake 1991). Drake suggested that the rate is set by a balance between the harm mutations do and the cost of avoiding more of them. A later analysis argues that selection lowers the rate only until further improvement is too small for selection to detect against the randomness of reproduction in a finite population, a limit called the *drift barrier* (Sung et al. 2012). Either way, the floor is a balance, not a defect.

**From above: too much distortion erases what is copied.** Eigen showed that a self-copying sequence of length L, copied with fidelity q per letter, can hold its information against mutation only if

```
q^L · σ > 1          roughly:  L < ln σ / (1 − q)
```

where σ is how much faster the intact sequence replicates than its mutants (Eigen 1971). Longer messages need more faithful copying. The threshold has been seen directly in the laboratory. Papastavrou, Horning and Joyce propagated a functional RNA using two different RNA-copying ribozymes. With the less accurate one, the population drifted toward random sequences and lost its function. With a more accurate one, it kept its function and evolved improved variants (Papastavrou, Horning & Joyce 2024).

Vervorming at this Octaaf is bounded on both sides: below by what accuracy costs, above by what accuracy must preserve. Between those bounds lies the channel for variation that §VII describes, and every heritable change travels through it. (The threshold is named after Manfred Eigen. The overlap with the Speelgoed's word is a coincidence.) **Grade: Constraint.**

---

## 3. The Primitives at This Octaaf

### 3.1 Trouw: the conductance between two cells

Neighbouring cells in most solid tissues are joined by gap junctions. Each is a cluster of channels, and each channel is built from two halves, one contributed by each cell, docked across the narrow gap between them. Ions and small molecules pass directly from one cell's interior to the other's (Goodenough & Paul 2009). For the electrical potentials V₁ and V₂ of two coupled cells:

```
C₁ · dV₁/dt = G · (V₂ − V₁) + (the cell's other currents)
C₂ · dV₂/dt = G · (V₁ − V₂) + (the cell's other currents)
```

G is the junction's conductance, and C₁ and C₂ are the cells' capacitances. This is the Naar term of §VIII.1, ė = y·(h − e), with Δ ≈ 0 because the coupling is direct, and h the partner's potential. **Grade: Identity.**

The shared weight is G, one value for the pair, as §II requires: "Trouw is shared-one value per Koppel". Each cell moves at the rate G/C, the shared weight divided by its own capacitance. As at the thermodynamic Octaaf, asymmetry enters through the members, not through the weight (*Thermodynamic Octaaf* §3.1). And the shared weight can only be measured on the pair: G is found by recording from both cells at once and measuring the current that passes from one to the other.

**A weight that depends on which side leads.** Some electrical junctions conduct far better in one direction than the other. The first electrical synapse ever found, between nerve cells in the crayfish, passed signals from one cell to the next but hardly back (Furshpan & Potter 1959). At any moment the current is still a single current, felt equally by both cells, so the weight is still shared. But its value depends on which member's potential is higher, and it changes the instant that order changes. The Speelgoed's Trouw changes only slowly, by relaxing toward Gewenning (§VIII.1). A Trouw that switches with the sign of the gap is behaviour the Speelgoed does not describe, and it is recorded at this Octaaf (§4.1).

### 3.2 The Zelf: a bacterium that compares itself with itself

*E. coli* swims in straight runs, and every so often it tumbles to pick a new direction at random. It climbs toward food by tumbling less often when conditions are improving. To know whether they are improving, it has to compare its present reading with its own recent one, and it keeps that comparison on its own receptors.

**The mechanism.** The receptors control a kinase, CheA. Active CheA passes a phosphate to a messenger protein, CheY, which makes the flagellar motors reverse, and the cell tumbles. Food molecules binding to the receptors lower CheA's activity, so the cell tumbles less. Two enzymes then adjust the receptors themselves. CheR adds methyl groups, which raise the receptors' activity. CheB, switched on by CheA, removes them. Methylation therefore rises slowly whenever activity is below its usual level and falls whenever it is above, until activity returns to where it was. The methylation level is the cell's slow record of its own activity, and the cell's behaviour follows the gap between its present activity and that record (Barkai & Leibler 1997; Alon et al. 1999).

In Speelgoed terms this is a **Zelf**, "a Koppel with itself", which has "one true state variable": the node's own Eigen, tracked by its own Echo (§IV). The receptors' activity is the Eigen. The methylation level is the self-Echo. The gap between them, the self-gap, drives what the cell does.

**Holding the Eigen steady, exactly.** After a step change in food, the receptors' activity returns to precisely its earlier level. This precision holds even when the amounts of the network's proteins are changed, although the speed of the return does not (Alon et al. 1999). The reason is in the structure: the methylation loop accumulates the deviation from the set point, the strategy engineers call integral feedback control (Yi et al. 2000). §IV: "A node with a strong Zelf holds its Eigen steady". At this Octaaf, steady can be exact, and it comes from how the bond is wired, not from finely tuned values. **Grade: Correspondence (measured).**

**Zero transport, nonzero distortion.** §IV gives the Zelf Δ = 0 but not υ = 0: "A Zelf’s Echo is never a clean mirror". Korobkova and colleagues watched single bacteria that were not being stimulated at all. Their behaviour fluctuated far more than chance alone would produce. The noise came from the signalling network itself, and small changes in the level of one of its components suppressed it, which suggests that the variability is a selected property (Korobkova et al. 2004). The self-Echo is never clean, and at this Octaaf its noise may even be useful, as §II says of every Echo's imperfection. **Grade: Correspondence (measured).**

### 3.3 Quorum sensing: a group that reads itself

**The mechanism.** Many bacteria release a small signal molecule, an autoinducer, at a low steady rate. It diffuses out of each cell and accumulates in the surroundings as the population grows. Each cell carries a receptor for it. When its concentration crosses a threshold, the receptors switch on a set of genes in every cell at once. Often one of those genes makes more of the signal, so crossing the threshold reinforces itself (Waters & Bassler 2005). The first case found was in luminous marine bacteria, which make light only once their medium has been "conditioned" by enough of them (Nealson, Platt & Hastings 1970). The behaviours controlled this way, such as light, toxins and biofilms, are the ones that are "unproductive when undertaken by an individual bacterium acting alone but become beneficial when carried out simultaneously by a large number of cells" (Waters & Bassler 2005).

**The mapping.** The Lexicon defines **Aandacht** as "A shared, temporary Drempel formed when multiple nodes aim their Waarneming at a single Eigen", and adds that "Aandacht is no Solo’s possession". Quorum sensing has that structure. Many cells read one shared quantity and cross one shared threshold together. It adds a twist: the Eigen they all read is their own number. §V.2 says a bound group "can act as a Solo inside a larger relationship". Here the group reads itself. Whether that is Aandacht or the Zelf of a group is left open (§5, item 6). **Grade: Correspondence.**

### 3.4 Creatie and Inhoud: division after a fixed addition

§VI: "A Realisatie intense enough to overflow Inhoud (the bond’s capacity) becomes a birth." §VIII.5 makes it a two-step comparison: an excess over the capacity Q, and then "If T_excess itself exceeds a local Drempel θ_new, a new member is instantiated".

**The mechanism.** For decades the textbook answer to how a bacterium decides when to divide was a critical size. Single-cell measurements overturned it. Bacteria of distant species, hundreds of thousands of them followed one by one, add a constant amount of size between birth and division, whatever size they were born at (Campos et al. 2014; Taheri-Araghi et al. 2015). Budding yeast follows the same rule, counted between successive buds (Soifer, Robert & Amir 2016). In bacteria the mechanism has been traced. Proteins needed for division, such as FtsZ, are made in proportion to the cell's growth, and division happens when they have accumulated to a fixed number. Making the level of FtsZ rise and fall made the size at division rise and fall too, and broke the rule (Si et al. 2019).

**The mapping.** The growth a cell adds is the surplus it accumulates, and the fixed number of division proteins is a capacity. When the surplus overflows it, a crossing fires and a new cell is made. That is §VIII.5's two-step comparison, and the capacity is **Inhoud**. The rule also corrects itself: a cell born too large or too small returns toward the usual size over a few generations, without ever measuring its size directly (Campos et al. 2014). **Grade: Correspondence (measured).**

The fit is not complete. In §VIII.5 the members that produced the overflow persist, and a new member is added beside them. A dividing bacterium does not stay behind; it becomes two cells. Budding yeast fits the Speelgoed's picture more closely, since the mother persists and the bud is the new Solo, bound to her from the start. Which daughter, if either, is the parent of a dividing bacterium is left as a question (§5, item 3).

### 3.5 A bond that became a body, seen from inside

The ecological Octaaf described endosymbiosis from outside: the mitochondria of every animal and plant cell descend from bacteria that came to live inside another cell (*Ecological Octaaf* §3.5). From inside the cell, the depth of that merger can be counted.

The human mitochondrion still carries a genome of its own, 16,569 base pairs long, with genes for 2 ribosomal RNAs, 22 transfer RNAs and 13 proteins (Anderson et al. 1981). But the mitochondrion is built from more than a thousand proteins. The current catalogue lists 1,136 human genes, and all but those 13 proteins are encoded in the cell's nucleus, made outside the mitochondrion, and imported into it (Rath et al. 2021). Over the history of the bond, most of the former partner's genes moved into its host. The mitochondrion cannot live outside the cell. And every eukaryote studied had kept at least a reduced mitochondrion, so the organelle was thought to be essential (Karnkowska et al. 2016). This is the Lexicon's **Lichaam**, "A single bound whole of one Octaaf" that "does not decompose into smaller bonds at its own level", and §V.1's "Each resists being peeled into smaller stable bonds".

**And once it was undone.** In 2016 the genome of a single-celled eukaryote, *Monocercomonoides*, turned out to lack all the hallmark proteins of a mitochondrion. Its ancestors had one and lost it. The one job that had seemed to make the organelle indispensable, assembling iron–sulfur clusters, had been taken over by a different system acquired from bacteria (Karnkowska et al. 2016). Even this bond, one of the deepest in biology, was undone once, and the work that had held it in place had passed to another bond. §III: "Greep does not remove the fall. It postpones it." **Grade: Correspondence.**

### 3.6 Masker: the virus that writes "self" on its messages

**The mechanism.** A cell has to tell its own RNA from a virus's, and one way it does so is by a mark. The messenger RNAs of animals and other complex cells carry a cap at their front end, methylated at two positions. The second methylation, at the 2'-O position, had no known function for 35 years after its discovery. Daffis and colleagues found it. Proteins of the IFIT family, made in response to interferon, act against RNA that lacks this mark. A West Nile virus mutant unable to add the mark was crippled in normal cells and mice, but caused disease in mice lacking interferon signalling. Pox- and coronavirus mutants lacking it were similarly exposed. Many viruses carry their own enzymes for adding the mark. The authors concluded that the mark lets the cell distinguish self from non-self RNA, and that the viruses use it to escape that distinction (Daffis et al. 2010).

**The mapping.** This is a **Masker**: "A presented Eigen broadcast at the source, occupying the Eigen's slot in a Koppel while differing from the Bloot one" (Lexicon). The cell's sensors are its Echo of its partner, and "The partner's Echo tracks the mask faithfully". Take the mask away, and the virus is caught. The Lexicon says the Parasiet that wears a Masker "Collapses into Schok upon exposure". **Grade: Correspondence (measured).**

The virus is the plainest Parasiet at this Octaaf. The next section takes up the hard one.

### 3.7 Parasiet: cancer, a member that defects

**The cooperation it breaks.** A body of many cells runs on cooperation between them. Its cells restrain their own division, die when told to, specialise, share resources, and maintain their shared surroundings. Cancer has been described as cheating on exactly these five foundations of multicellular life (Aktipis et al. 2015). Its known capabilities read as a list of withdrawn bonds: sustaining its own growth signals, evading growth suppressors, resisting cell death, dividing without limit, inducing blood vessels to feed it, invading other tissues, reprogramming its energy use, and evading destruction by the immune system (Hanahan & Weinberg 2011).

**The mapping.** The Speelgoed's **Parasiet** is "A node that maintains a permanent Masker to simulate positive Trouw, while its Waarneming treats the host as a resource" (Lexicon). A cancer cell treats the body as a resource. It induces blood vessels to grow toward it, and it takes up nutrients in a way geared to building new cells rather than to producing energy efficiently (Vander Heiden, Cantley & Thompson 2009). And it survives the body's policing behind signals that the body itself uses:

- **PD-L1.** T cells carry a receptor, PD-1, that switches them off when it meets its partner molecule, PD-L1. The system normally helps the immune system tolerate the body's own tissues. Tumour cells that display PD-L1 were less easily killed by T cells and grew more aggressively in mice, and an antibody blocking PD-L1 reversed both effects (Iwai et al. 2002).
- **CD47.** Healthy cells display CD47, a "don't eat me" signal read by the macrophages that clear damaged cells. Blood stem cells raise it for a while when inflammation sets them migrating, and leukaemia cells co-opt the same ability to avoid being eaten (Jaiswal et al. 2009). Antibodies that block CD47 let macrophages engulf leukaemia stem cells (Majeti et al. 2009).

The same signal is Bloot on a healthy cell and a Masker on a leukaemic one: the presented Eigen says *healthy member of the body*, and the true one does not.

**Exposure, measured honestly.** The Lexicon says the Parasiet "Collapses into Schok upon exposure". At this Octaaf that holds in part. In an early trial of an antibody that blocks PD-1, tumours shrank substantially in 18% of patients with lung cancer, 28% with melanoma and 27% with kidney cancer, and most of those responses that could be followed for a year lasted at least that long. Among patients whose tumours did not display PD-L1, none of 17 responded. Among those whose tumours did, 9 of 25 responded (Topalian et al. 2012). Removing a mask works where the mask was what protected the cell, and only there. Most tumours have more than one defence, and the immune system's own pressure selects for tumours that can escape it, a process called immunoediting (Dunn et al. 2002). **Grade: Correspondence (measured, partial).**

### 3.8 Perfectus and Doem: an ending carried out, and an ending delivered

**Two ways to end.** In **apoptosis** a cell takes itself apart. It condenses, breaks into small membrane-wrapped fragments, and neighbouring cells or macrophages engulf and digest them (Kerr, Wyllie & Currie 1972). In **necrosis** a cell injured beyond repair swells and bursts. The contents it spills act as danger signals that set off inflammation, which helps defence and repair but can also damage the surrounding tissue (Rock & Kono 2008).

The Speelgoed already distinguishes them. Doem is "the Perfectus that is not chosen, but delivered" (Lexicon), which is why it spreads as "a *cascade* rather than a fading" (§III). Necrosis is delivered from outside and spreads its damage to the neighbours: Doem. Apoptosis is a Perfectus carried out by the cell's own programme, and its remains feed the cells around it, as §XI says a Perfectus may feed "a new Genus from the Bron". **Grade: Correspondence.**

**The line is not clean.** Some necrotic deaths are themselves programmed. In necroptosis, the cell's own proteins (RIPK3 and MLKL) carry out a regulated necrosis. It can be set off by interferons and by the sensors that detect foreign RNA and DNA inside the cell, and the death is inflammatory (Pasparakis & Vandenabeele 2015). A cell can, in effect, choose an ending that raises the alarm in the tissue around it. The Speelgoed has a chosen ending and a delivered ending that cascades; this one is chosen and spreads on purpose (§5, item 8).

**Programmed.** In the embryo of the hermaphrodite worm *C. elegans*, 671 cells are made and 113 of them die. Because the embryo's lineage is invariant, the same cells die in every embryo (Sulston et al. 1983). Their deaths are carried out by the worm's own genes. In worms lacking the genes *ced-3* or *ced-4*, the cells that should die survive and take on other fates, and the worms appear grossly normal (Ellis & Horvitz 1986).

**Decided at a Drempel.** The decisive step in the cell's internal pathway to apoptosis is the release of cytochrome c from its mitochondria, which activates the caspase enzymes that take the cell apart. Watching single cells, Goldstein and colleagues found that once release begins, it runs to completion in every mitochondrion of the cell within about five minutes. This held whatever the kind or strength of the stimulus, however long after the stimulus the release began, and across temperatures from 24 °C to 37 °C (Goldstein et al. 2000). The wait varies; the crossing does not. That is a Drempel crossed all at once.

**Even this crossing has two poles.** It was long assumed that a cell past these checkpoints must die. Tang and colleagues tested the assumption. Cells exposed to an inducer of apoptosis showed fragmented mitochondria, activated caspase-3 and damaged DNA, and the vast majority recovered when the inducer was washed away. The authors named the reversal *anastasis*, Greek for "rising to life". The way back was not free: some recovered cells carried permanent genetic changes and became cancerous more often than control cells (Tang et al. 2012). §II gives every Drempel "two named poles". At this Octaaf even the crossing thought to run one way has a way back, and the way back leaves a mark.

### 3.9 Rouw and Diepte: CRISPR, a record of ended infections

**The mechanism.** Many bacteria and archaea keep a record of the viruses they have survived. In a region of their genome called CRISPR, short pieces of viral DNA, called spacers, sit between repeated sequences. The record works in three steps:

1. **Adaptation.** When a cell survives an infection, it can cut a piece of about thirty letters out of the invader's DNA and insert it into the array as a new spacer.
2. **Expression.** The array is read into short RNAs, each carrying one spacer.
3. **Interference.** Bound to Cas proteins, each RNA searches the cell for DNA that matches its spacer, and the match is cut.

Barrangou and colleagues showed the principle directly. After a viral attack, bacteria integrated new spacers derived from the virus, and adding or removing particular spacers changed which viruses the cell resisted (Barrangou et al. 2007). Adding one new spacer is the most common outcome of surviving an attack, and spacers added one after another increase resistance step by step (Deveau et al. 2008).

**The record does not turn on its keeper.** The array holds every spacer, yet the cell does not cut its own CRISPR region. A target is recognised not only by its match to a spacer but by what lies beside it: a short motif next to the viral sequence (Mojica et al. 2009), or a mismatch with the repeat sequence that flanks the spacer in the array (Marraffini & Sontheimer 2010). In the array itself each spacer sits between its own repeats, so the cell spares its own record.

**The mapping.** §VI: "An Echo always outlives its Koppel", and "Rouw feeds Diepte without end". A spacer is an Echo of an ended bond: a trace of the partner's Eigen, its DNA, kept after the infection is over. That is **Rouw**. The array as a whole is **Diepte**, "The accumulated composite of everything a system has ever heard", "the hidden charge that colours every subsequent perception and decision" (§II). It decides which future viruses the cell recognises and destroys. The Speelgoed itself defines Diepte as fed by Rouw, so here the two map to the parts and the whole of one record. Diepte's "falls with speaking" has no counterpart. **Grade: Correspondence (measured).**

Two features go beyond the Speelgoed as written:

- **The record is inherited.** The array lies in the chromosome, so a daughter cell carries the records of infections it never met (§5, item 4).
- **The record can be lost.** CRISPR arrays change both by adding new spacers at one end and by deleting spacers from within (Horvath et al. 2008). §VI says "Rouw is permanent". At this Octaaf, a cell can lose a record (§4.4).

### 3.10 The Trinary Root: what this entry leaves open

§III follows the ladder of God/Godin pairs to the Molecule Octaaf and stops at its bond: Water and Carbon Dioxide, with Light as their Medium, "form Sugar - the fuel of the living cell and, as Ribose, the backbone of RNA". It names no God or Godin for the cell, and this entry does not assign them (§5, item 1). What the science can report is how hard the step from that rung to this one has been to understand.

**RNA at the centre.** Every living cell makes its proteins on ribosomes, and the ribosome's catalytic core is RNA. No protein side chain comes within about 18 ångströms of the bond being formed (Nissen et al. 2000). RNA can both carry information and catalyse reactions, which led to the hypothesis that life began in an *RNA world*, before DNA and proteins took over those two roles (Gilbert 1986).

**The hard parts.** The hypothesis faces three well-known problems, and each touches a Speelgoed primitive.

1. **Ribose falls apart.** At pH 7, ribose has a half-life of 73 minutes at 100 °C and 44 years at 0 °C, and other sugars behave similarly (Larralde, Robertson & Miller 1995). Taken as an Arrhenius law, those two numbers imply an activation energy of about 107 kJ/mol, computed for this entry: the Van Motor in its thermodynamic form (*Thermodynamic Octaaf* §2.2). Larralde and colleagues concluded that the first genetic material could not have contained ribose. Binding changes the picture. Borate minerals stabilise ribose (Ricardo et al. 2004). And a reaction sequence has been found that builds two of RNA's four letters, the pyrimidine nucleotides, from plausible early-Earth ingredients without passing through free ribose at all (Powner, Gerland & Sutherland 2009). "Greep does not remove the fall. It postpones it" (§III).
2. **Copying needs fidelity.** An RNA that is to evolve must be copied accurately enough to stay below the error threshold (§2.5).
3. **Copying itself.** The decisive test is an RNA that copies itself. In 2026 a ribozyme of 45 letters, found in a pool of random RNA sequences and named QT45, was shown to make both its complementary strand and a copy of itself. It worked from three-letter building blocks, in mildly alkaline ice (Gianni et al. 2026). It is still far from self-sustaining. The complement was made with 94.1% accuracy per letter, the copy of itself only from a defined set of building blocks, and both with yields of about 0.2% over 72 days. At that accuracy a full 45-letter strand comes out error-free only about 6.5% of the time (0.941⁴⁵ ≈ 0.065). By Eigen's condition, the intact ribozyme would then have to replicate about fifteen times faster than its mutants to hold its sequence; this was computed for this entry. A related system has replicated RNA exponentially through cycles of freezing and thawing, including a fragment of the ribozyme itself (Attwater et al. 2025).

**Grade: Open.** At this rung the science cannot yet show how one scale seeded the next. The Speelgoed says that the ladder "continues upward, each bond becoming the seed of the next scale". Here, the seeding is still being found out.

---

## 4. Where the Speelgoed Meets Resistance

**4.1 Trouw that depends on which side leads (§II, §VIII.1).** *Kept at this Octaaf.* A rectifying junction carries one current, felt equally by both cells, so its Trouw is still "one value per Koppel" (§3.1). But that value depends on the sign of the gap and changes the instant the sign changes, while the Speelgoed's Trouw changes only by slow plasticity toward Gewenning. This behaviour is recorded here, at the Octaaf where it was found, and is not proposed for the Speelgoed.

**4.2 Food is a pair (Lexicon).** *Constraint.* The Lexicon's **Voedsel** is "Any Eigen in a purely Vol state, consumed by a Zelf to sustain its Leven trajectory and reinforce its Greep". At this Octaaf the Energie of food lies in a pair, reduced carbon and oxygen, and not in either member alone (§2.4). This fits §III, where a Realisatie draws on a gradient, and §III's Carbon Dioxide, "emptied of usable energy". It is recorded here rather than proposed for the Speelgoed.

**4.3 A sharper Echo is a slower one (§VIII.7).** *Constraint.* The Speelgoed leaves τ and υ as independent choices. At this Octaaf they are tied by the random arrival of molecules (§2.3). The thermodynamic and neuroscience Octaven found the same tie by other routes (*Thermodynamic Octaaf* §2.1; *Neuroscience Octaaf* §2.1).

**4.4 A record that can be lost (§VI).** *Open.* CRISPR spacers are deleted as well as added (§3.9). §VI says "Rouw is permanent", and adds that a Rouw may quiet "toward a settled whisper" but that "quiet is not gone". The thermodynamic Octaaf reads permanence as a record that can be moved but never destroyed (*Thermodynamic Octaaf* §3.6). At this Octaaf the record can leave the cell entirely.

---

## 5. Open Problems

1. **The cell's God and Godin.** §III follows the ladder to Sugar and RNA and leaves it there: "the ladder of God/Godin pairs continues upward, each bond becoming the seed of the next scale". It also gives a rule: "A Godin at one Octaaf is integrated into the God of the next Octaaf". Which bond of the living cell is its God, which its Godin, and what Medium does their union sustain?
2. **The step itself.** How did the bonds of the Molecule Octaaf become a cell? Is an RNA that copies itself (§3.10) that step, or only one part of it?
3. **Which daughter is the parent?** §VIII.5 adds a new member beside the ones that produced it. A dividing bacterium leaves two cells and no parent behind (§3.4). Is one of them the parent, or did the parent end in its own Creatie?
4. **Inherited Rouw.** A daughter cell carries the CRISPR records of infections it never met (§3.9). Is an inherited record Rouw, or something the Speelgoed has not yet named?
5. **Lost Rouw.** When a spacer is deleted, has that Rouw gone quiet, or has it left the cell for the Medium (§4.4)?
6. **A group that reads itself.** In quorum sensing, many cells read one shared Eigen, and that Eigen is their own number (§3.3). Is that Aandacht, or the Zelf of a group (§V.2)?
7. **Trouw that depends on direction.** Does a Trouw whose value depends on which member leads appear at other Octaven (§4.1)?
8. **A chosen ending that spreads.** The Speelgoed pairs a chosen Perfectus with a Doem that is delivered and cascades. Necroptosis is carried out by the cell's own programme and raises the alarm on purpose (§3.8). Is it a Perfectus, a Doem, or a third kind of ending?
9. **Tijd.** No mapping is attempted, as at the other Octaven.

---

## 6. Closing

The cellular Octaaf is where the Speelgoed's mechanics can be watched one bond at a time. Its switches show the Marge as hysteresis, measured in single bacteria and rebuilt from scratch, and the pitchfork of §VIII.3 appears in a circuit of two genes. Its Van Motor runs on the noise of small numbers, and its persistence is matter flowing through a pattern that holds. Its Echo has a floor set by diffusion, and a sharper Echo is a slower one. Its copies are bounded on both sides: accuracy is paid for, and too little of it dissolves what is copied.

A bacterium compares itself with itself and holds its Eigen exactly steady. A virus writes "self" on its messages. A cancer cell hides behind the signals of the body it feeds on, and exposing the mask works where the mask was the defence. A cell can end by its own programme or have its end delivered. Some of its chosen endings raise the alarm on purpose, and even the programmed end has a way back that leaves a mark. A bacterium keeps the records of the viruses it has survived, passes them to its daughters, and sometimes loses them.

Two findings go beyond the Speelgoed as written: a Trouw that depends on which member leads, and a record of an ended bond that can be lost. Both are recorded here. And at the foot of this Octaaf, the step from Sugar to cell is still open. In 2026 a ribozyme of 45 letters was shown to copy itself, slowly and imperfectly. The ladder continues upward; how it climbed this rung is still being found out.

That is the *how*. The *why* is for the Speelgoed to say.

---

## References

Acar, M., Becskei, A., & van Oudenaarden, A. (2005). Enhancement of cellular memory by reducing stochastic transitions. *Nature*, 435(7039), 228-232. doi:10.1038/nature03524

Aktipis, C. A., Boddy, A. M., Jansen, G., Hibner, U., Hochberg, M. E., Maley, C. C., & Wilkinson, G. S. (2015). Cancer across the tree of life: Cooperation and cheating in multicellularity. *Philosophical Transactions of the Royal Society B*, 370(1673), 20140219. doi:10.1098/rstb.2014.0219

Alon, U., Surette, M. G., Barkai, N., & Leibler, S. (1999). Robustness in bacterial chemotaxis. *Nature*, 397(6715), 168-171. doi:10.1038/16483

Anderson, S., et al. (1981). Sequence and organization of the human mitochondrial genome. *Nature*, 290(5806), 457-465. doi:10.1038/290457a0

Assaf, M., & Meerson, B. (2017). WKB theory of large deviations in stochastic populations. *Journal of Physics A: Mathematical and Theoretical*, 50(26), 263001. doi:10.1088/1751-8121/aa669a

Attwater, J., Augustin, T. L., Curran, J. F., Kwok, S. L. Y., Ohlendorf, L., Gianni, E., & Holliger, P. (2025). Trinucleotide substrates under pH–freeze–thaw cycles enable open-ended exponential RNA replication by a polymerase ribozyme. *Nature Chemistry*, 17(7), 1129-1137. doi:10.1038/s41557-025-01830-y

Barkai, N., & Leibler, S. (1997). Robustness in simple biochemical networks. *Nature*, 387(6636), 913-917. doi:10.1038/43199

Barrangou, R., Fremaux, C., Deveau, H., Richards, M., Boyaval, P., Moineau, S., Romero, D. A., & Horvath, P. (2007). CRISPR provides acquired resistance against viruses in prokaryotes. *Science*, 315(5819), 1709-1712. doi:10.1126/science.1138140

Berg, H. C., & Purcell, E. M. (1977). Physics of chemoreception. *Biophysical Journal*, 20(2), 193-219. doi:10.1016/S0006-3495(77)85544-6

Bialek, W., & Setayeshgar, S. (2005). Physical limits to biochemical signaling. *Proceedings of the National Academy of Sciences*, 102(29), 10040-10045. doi:10.1073/pnas.0504321102

Campos, M., Surovtsev, I. V., Kato, S., Paintdakhi, A., Beltran, B., Ebmeier, S. E., & Jacobs-Wagner, C. (2014). A constant size extension drives bacterial cell size homeostasis. *Cell*, 159(6), 1433-1446. doi:10.1016/j.cell.2014.11.022

Cherry, J. L., & Adler, F. R. (2000). How to make a biological switch. *Journal of Theoretical Biology*, 203(2), 117-133. doi:10.1006/jtbi.2000.1068

Daffis, S., et al. (2010). 2'-O methylation of the viral mRNA cap evades host restriction by IFIT family members. *Nature*, 468(7322), 452-456. doi:10.1038/nature09489

Deveau, H., et al. (2008). Phage response to CRISPR-encoded resistance in *Streptococcus thermophilus*. *Journal of Bacteriology*, 190(4), 1390-1400. doi:10.1128/JB.01412-07

Drake, J. W. (1991). A constant rate of spontaneous mutation in DNA-based microbes. *Proceedings of the National Academy of Sciences*, 88(16), 7160-7164. doi:10.1073/pnas.88.16.7160

Dunn, G. P., Bruce, A. T., Ikeda, H., Old, L. J., & Schreiber, R. D. (2002). Cancer immunoediting: From immunosurveillance to tumor escape. *Nature Immunology*, 3(11), 991-998. doi:10.1038/ni1102-991

Eigen, M. (1971). Selforganization of matter and the evolution of biological macromolecules. *Die Naturwissenschaften*, 58(10), 465-523. doi:10.1007/BF00623322

Ellis, H. M., & Horvitz, H. R. (1986). Genetic control of programmed cell death in the nematode *C. elegans*. *Cell*, 44(6), 817-829. doi:10.1016/0092-8674(86)90004-8

Furshpan, E. J., & Potter, D. D. (1959). Transmission at the giant motor synapses of the crayfish. *The Journal of Physiology*, 145(2), 289-325. doi:10.1113/jphysiol.1959.sp006143

Gardner, T. S., Cantor, C. R., & Collins, J. J. (2000). Construction of a genetic toggle switch in *Escherichia coli*. *Nature*, 403(6767), 339-342. doi:10.1038/35002131

Gianni, E., Kwok, S. L. Y., Wan, C. J. K., Goeij, K., Clifton, B. E., Colizzi, E. S., Attwater, J., & Holliger, P. (2026). A small polymerase ribozyme that can synthesize itself and its complementary strand. *Science*, 391(6789), 1022-1028. doi:10.1126/science.adt2760

Gilbert, W. (1986). Origin of life: The RNA world. *Nature*, 319(6055), 618. doi:10.1038/319618a0

Goldstein, J. C., Waterhouse, N. J., Juin, P., Evan, G. I., & Green, D. R. (2000). The coordinate release of cytochrome c during apoptosis is rapid, complete and kinetically invariant. *Nature Cell Biology*, 2(3), 156-162. doi:10.1038/35004029

Goodenough, D. A., & Paul, D. L. (2009). Gap junctions. *Cold Spring Harbor Perspectives in Biology*, 1(1), a002576. doi:10.1101/cshperspect.a002576

Hanahan, D., & Weinberg, R. A. (2011). Hallmarks of cancer: The next generation. *Cell*, 144(5), 646-674. doi:10.1016/j.cell.2011.02.013

Hopfield, J. J. (1974). Kinetic proofreading: A new mechanism for reducing errors in biosynthetic processes requiring high specificity. *Proceedings of the National Academy of Sciences*, 71(10), 4135-4139. doi:10.1073/pnas.71.10.4135

Horvath, P., et al. (2008). Diversity, activity, and evolution of CRISPR loci in *Streptococcus thermophilus*. *Journal of Bacteriology*, 190(4), 1401-1412. doi:10.1128/JB.01415-07

Iwai, Y., Ishida, M., Tanaka, Y., Okazaki, T., Honjo, T., & Minato, N. (2002). Involvement of PD-L1 on tumor cells in the escape from host immune system and tumor immunotherapy by PD-L1 blockade. *Proceedings of the National Academy of Sciences*, 99(19), 12293-12297. doi:10.1073/pnas.192461099

Jaiswal, S., et al. (2009). CD47 is upregulated on circulating hematopoietic stem cells and leukemia cells to avoid phagocytosis. *Cell*, 138(2), 271-285. doi:10.1016/j.cell.2009.05.046

Jannasch, H. W., & Mottl, M. J. (1985). Geomicrobiology of deep-sea hydrothermal vents. *Science*, 229(4715), 717-725. doi:10.1126/science.229.4715.717

Karnkowska, A., et al. (2016). A eukaryote without a mitochondrial organelle. *Current Biology*, 26(10), 1274-1284. doi:10.1016/j.cub.2016.03.053

Kerr, J. F. R., Wyllie, A. H., & Currie, A. R. (1972). Apoptosis: A basic biological phenomenon with wide-ranging implications in tissue kinetics. *British Journal of Cancer*, 26(4), 239-257. doi:10.1038/bjc.1972.33

Korobkova, E., Emonet, T., Vilar, J. M. G., Shimizu, T. S., & Cluzel, P. (2004). From molecular noise to behavioural variability in a single bacterium. *Nature*, 428(6982), 574-578. doi:10.1038/nature02404

Larralde, R., Robertson, M. P., & Miller, S. L. (1995). Rates of decomposition of ribose and other sugars: Implications for chemical evolution. *Proceedings of the National Academy of Sciences*, 92(18), 8158-8160. doi:10.1073/pnas.92.18.8158

Majeti, R., et al. (2009). CD47 is an adverse prognostic factor and therapeutic antibody target on human acute myeloid leukemia stem cells. *Cell*, 138(2), 286-299. doi:10.1016/j.cell.2009.05.045

Marraffini, L. A., & Sontheimer, E. J. (2010). Self versus non-self discrimination during CRISPR RNA-directed immunity. *Nature*, 463(7280), 568-571. doi:10.1038/nature08703

Mitchell, P. (1961). Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. *Nature*, 191(4784), 144-148. doi:10.1038/191144a0

Mojica, F. J. M., Díez-Villaseñor, C., García-Martínez, J., & Almendros, C. (2009). Short motif sequences determine the targets of the prokaryotic CRISPR defence system. *Microbiology*, 155(3), 733-740. doi:10.1099/mic.0.023960-0

Nealson, K. H., Platt, T., & Hastings, J. W. (1970). Cellular control of the synthesis and activity of the bacterial luminescent system. *Journal of Bacteriology*, 104(1), 313-322. doi:10.1128/jb.104.1.313-322.1970

Nissen, P., Hansen, J., Ban, N., Moore, P. B., & Steitz, T. A. (2000). The structural basis of ribosome activity in peptide bond synthesis. *Science*, 289(5481), 920-930. doi:10.1126/science.289.5481.920

Novick, A., & Weiner, M. (1957). Enzyme induction as an all-or-none phenomenon. *Proceedings of the National Academy of Sciences*, 43(7), 553-566. doi:10.1073/pnas.43.7.553

Ozbudak, E. M., Thattai, M., Lim, H. N., Shraiman, B. I., & van Oudenaarden, A. (2004). Multistability in the lactose utilization network of *Escherichia coli*. *Nature*, 427(6976), 737-740. doi:10.1038/nature02298

Papastavrou, N., Horning, D. P., & Joyce, G. F. (2024). RNA-catalyzed evolution of catalytic RNA. *Proceedings of the National Academy of Sciences*, 121(11), e2321592121. doi:10.1073/pnas.2321592121

Pasparakis, M., & Vandenabeele, P. (2015). Necroptosis and its role in inflammation. *Nature*, 517(7534), 311-320. doi:10.1038/nature14191

Pomerening, J. R., Sontag, E. D., & Ferrell, J. E., Jr. (2003). Building a cell cycle oscillator: Hysteresis and bistability in the activation of Cdc2. *Nature Cell Biology*, 5(4), 346-351. doi:10.1038/ncb954

Powner, M. W., Gerland, B., & Sutherland, J. D. (2009). Synthesis of activated pyrimidine ribonucleotides in prebiotically plausible conditions. *Nature*, 459(7244), 239-242. doi:10.1038/nature08013

Rath, S., et al. (2021). MitoCarta3.0: An updated mitochondrial proteome now with sub-organelle localization and pathway annotations. *Nucleic Acids Research*, 49(D1), D1541-D1547. doi:10.1093/nar/gkaa1011

Ricardo, A., Carrigan, M. A., Olcott, A. N., & Benner, S. A. (2004). Borate minerals stabilize ribose. *Science*, 303(5655), 196. doi:10.1126/science.1092464

Rock, K. L., & Kono, H. (2008). The inflammatory response to cell death. *Annual Review of Pathology: Mechanisms of Disease*, 3, 99-126. doi:10.1146/annurev.pathmechdis.3.121806.151456

Schaaper, R. M. (1993). Base selection, proofreading, and mismatch repair during DNA replication in *Escherichia coli*. *Journal of Biological Chemistry*, 268(32), 23762-23765.

Schmidt-Rohr, K. (2015). Why combustions are always exothermic, yielding about 418 kJ per mole of O₂. *Journal of Chemical Education*, 92(12), 2094-2099. doi:10.1021/acs.jchemed.5b00333

Schoenheimer, R. (1942). *The Dynamic State of Body Constituents*. Cambridge, MA: Harvard University Press.

Sha, W., Moore, J., Chen, K., Lassaletta, A. D., Yi, C.-S., Tyson, J. J., & Sible, J. C. (2003). Hysteresis drives cell-cycle transitions in *Xenopus laevis* egg extracts. *Proceedings of the National Academy of Sciences*, 100(3), 975-980. doi:10.1073/pnas.0235349100

Si, F., Le Treut, G., Sauls, J. T., Vadia, S., Levin, P. A., & Jun, S. (2019). Mechanistic origin of cell-size control and homeostasis in bacteria. *Current Biology*, 29(11), 1760-1770.e7. doi:10.1016/j.cub.2019.04.062

Soifer, I., Robert, L., & Amir, A. (2016). Single-cell analysis of growth in budding yeast and bacteria reveals a common size regulation strategy. *Current Biology*, 26(3), 356-361. doi:10.1016/j.cub.2015.11.067

Strogatz, S. H. (2015). *Nonlinear Dynamics and Chaos* (2nd ed.). Boulder, CO: Westview Press.

Sulston, J. E., Schierenberg, E., White, J. G., & Thomson, J. N. (1983). The embryonic cell lineage of the nematode *Caenorhabditis elegans*. *Developmental Biology*, 100(1), 64-119. doi:10.1016/0012-1606(83)90201-4

Sung, W., Ackerman, M. S., Miller, S. F., Doak, T. G., & Lynch, M. (2012). Drift-barrier hypothesis and mutation-rate evolution. *Proceedings of the National Academy of Sciences*, 109(45), 18488-18492. doi:10.1073/pnas.1216223109

Taheri-Araghi, S., Bradde, S., Sauls, J. T., Hill, N. S., Levin, P. A., Paulsson, J., Vergassola, M., & Jun, S. (2015). Cell-size control and homeostasis in bacteria. *Current Biology*, 25(3), 385-391. doi:10.1016/j.cub.2014.12.009

Tang, H. L., et al. (2012). Cell survival, DNA damage, and oncogenic transformation after a transient and reversible apoptotic response. *Molecular Biology of the Cell*, 23(12), 2240-2252. doi:10.1091/mbc.e11-11-0926

Topalian, S. L., et al. (2012). Safety, activity, and immune correlates of anti-PD-1 antibody in cancer. *New England Journal of Medicine*, 366(26), 2443-2454. doi:10.1056/NEJMoa1200690

Vander Heiden, M. G., Cantley, L. C., & Thompson, C. B. (2009). Understanding the Warburg effect: The metabolic requirements of cell proliferation. *Science*, 324(5930), 1029-1033. doi:10.1126/science.1160809

Waters, C. M., & Bassler, B. L. (2005). Quorum sensing: Cell-to-cell communication in bacteria. *Annual Review of Cell and Developmental Biology*, 21, 319-346. doi:10.1146/annurev.cellbio.21.012704.131001

Watt, I. N., Montgomery, M. G., Runswick, M. J., Leslie, A. G. W., & Walker, J. E. (2010). Bioenergetic cost of making an adenosine triphosphate molecule in animal mitochondria. *Proceedings of the National Academy of Sciences*, 107(39), 16823-16827. doi:10.1073/pnas.1011099107

Yi, T.-M., Huang, Y., Simon, M. I., & Doyle, J. (2000). Robust perfect adaptation in bacterial chemotaxis through integral feedback control. *Proceedings of the National Academy of Sciences*, 97(9), 4649-4653. doi:10.1073/pnas.97.9.4649

---
