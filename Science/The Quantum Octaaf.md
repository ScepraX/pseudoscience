# The Quantum Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of atoms, nuclei, and elementary particles. It does not compete with quantum mechanics. It tests whether the Speelgoed's mechanism, supplied with quantum values, reproduces what quantum mechanics already knows, and it says plainly where it does not.*

---

## 0. Preface

The Speelgoed describes *why* bonds form, hold, and end. The quantum Octaaf describes *how* they do so at the smallest scales, where the **Lichaam (🖕)** is an atom, a nucleus, a proton, or a single particle.

### 0.1 What this document is

Like the thermodynamic and cosmic Octaven, this document is an **Instantie (⚙)**: it supplies the open parameters of §VIII.7 with values taken from physics, then checks whether the shape the Speelgoed fixes survives. Where the two disagree, the disagreement is reported in §4 rather than smoothed over.

Four properties set this Octaaf apart, and each one sharpens or strains a Speelgoed rule:

1. **The Eigen has a phase.** A quantum state is not a point on a spectrum but a vector whose parts can interfere. The Speelgoed's real-valued Eigen is what remains after a state has been observed (§3.1).
2. **No Echo can be a copy.** That an Echo is imperfect is, at this Octaaf, a theorem (§2.3).
3. **A bond can be definite while its members are not.** Two entangled particles can share a definite joint state while neither has a definite state of its own (§3.2).
4. **Vervorming has a floor.** Even at absolute zero, quantum fluctuations remain (§2.4).

**On interpretation.** Quantum mechanics gives the same predictions under every mainstream interpretation, and this entry does not choose among them. The Speelgoed's language resembles one family of readings, in which states are relative to observers and definiteness emerges through interaction with the environment (Rovelli, 1996; Zurek, 2003). §IV's "Observation is a Koppel. No system can read the field from outside it." is close to that family's founding idea. This is noted as a resemblance, not as a result.

### 0.2 Grades

Every mapping carries one of five grades, defined as in the thermodynamic Octaaf.

| Grade | Meaning |
|---|---|
| **Identity** | The Speelgoed equation and the physical equation are the same equation under a stated substitution of symbols. |
| **Constraint** | Physics fixes, bounds, or forbids a choice the Speelgoed leaves open to its Instantie. |
| **Correspondence** | Same structure and same qualitative behaviour, but no shared equation. |
| **Tension** | The Speelgoed as written conflicts with established physics. A repair is proposed. |
| **Open** | Not resolved. |

An **Identity** shows that the Speelgoed uses the same mathematics as the science at this Octaaf. That is a test of consistency, not evidence that the Speelgoed explains more than the science already does. Which quantity a Speelgoed term is mapped to is also a choice, and the same term may map to different quantities at different Octaven.

### 0.3 Conventions

**Notation.** Several Speelgoed symbols collide with standard physics symbols. In this document, inside equations, **|ψ⟩** is a quantum state (not Bevraagbaar), **ρ** is a density matrix (not Leersnelheid), **Ĥ** is a Hamiltonian (not Kop), **S** is entropy (not Leeg), **E** is energy (not Echo), and **ħ** is the reduced Planck constant. As in the other Octaven, **Energie** is written **T_q**, and **Greep** keeps its symbol **J**. MeV is a million electron-volts.

**Quotations.** Quotations from the Speelgoed leave out its bold markup and the symbols it puts in brackets after a term, such as "(J)" after Greep. Otherwise they are verbatim.

**References.** References such as §II or §VIII.6 point to the PseudoScience Speelgoed. References such as §2.1 point to sections of this document. References to the companion entries are written in full, for example *Thermodynamic Octaaf* §2.2.

---

## 1. The Instantie Table

| Speelgoed (section) | Quantum value | Grade | Here |
|---|---|---|---|
| Van Motor rate, L = L₀·exp(−J) (§III, §VIII.1) | Tunnelling through a barrier (Gamow) | Identity | §2.1 |
| Greep J | The tunnelling exponent, which scales as 1/ħ | Identity | §2.1 |
| "The Van Motor is never off" (§VIII.1) | Holds for every metastable bond; for the proton, a prediction | Constraint + Open | §2.2 |
| Echo E (§II) | A record of one system held in another; never a copy (no-cloning) | Constraint | §2.3 |
| Vervorming υ (§VII) | Quantum noise, which has a floor even at T = 0 | Constraint | §2.4 |
| Trouw y (§II, §VIII.1) | Coupling constant of the interaction Hamiltonian; shared, and either sign | Identity | §2.5 |
| Eigen x (§II, §VIII.1) | State vector; the real-valued Eigen is the observed (pointer) state | Constraint (scope) | §3.1 |
| Koppel k (§II) | Entanglement: a definite pair with indefinite members | Tension, resolved by §V.2 | §3.2 |
| Gewenning Z, Diepte z (§VIII.1) | Pairwise entanglement and total entanglement entropy; monogamy | Correspondence | §3.3 |
| Drempel θ, Vonk, Marge η (§II, §VIII.3) | Measurement: the apparatus's Drempel, with a Marge | Correspondence | §3.4 |
| Vermenigvuldiging (§IV) | Scattering; unitarity as the Telraam | Correspondence | §3.5 |
| Rouw R (§VI, §VIII.6) | Decoherence: a record copied beyond recall | Correspondence | §3.6 |
| Creatie B (§VI, §VIII.5) | Pair production above 2mc² | Correspondence + Constraint | §3.7 |
| Zelf j (§IV) | Survival amplitude; the quantum Zeno effect needs a watcher | Correspondence (partial) | §3.8 |
| Trinary Root (§III) | Up quark (Vol), down quark (Leeg), gluon field (Medium); the proton | Correspondence | §3.9 |
| Tijd t (Lexicon) | No mapping attempted | Open | §5 |

---

## 2. Identities and Constraints

### 2.1 The Van Motor is tunnelling

The Van Motor's rate is L = L₀·exp(−J) (§III, §VIII.1). At the thermodynamic Octaaf, J was a barrier measured against the Medium's thermal energy (*Thermodynamic Octaaf* §2.2). At this Octaaf a bound particle can escape without ever having the energy to climb the barrier: it tunnels through. The escape rate is

```
L = L₀ · exp( −J )          J = (2/ħ) · ∫ √( 2·m·(V(x) − E) ) dx
```

Here L₀ is how often the particle strikes the barrier, m its mass, E its energy, V(x) the barrier, and the integral runs across the region where V exceeds E (Gamow, 1928; Gurney & Condon, 1928). The substitution is direct: J is the tunnelling exponent. **Grade: Identity.**

The clearest example is alpha decay, where a nucleus holds an alpha particle behind a barrier. The decay energy changes by less than a factor of three across these nuclei. The half-life changes by thirty-three orders of magnitude:

| Nucleus | Decay energy | Half-life | Greep J (approx.) |
|---|---|---|---|
| Polonium-212 | 8.95 MeV | 0.3 microseconds | 34 |
| Radium-226 | 4.87 MeV | 1,600 years | 73 |
| Uranium-238 | 4.27 MeV | 4.5 billion years | 88 |
| Bismuth-209 | 3.14 MeV | 2 × 10¹⁹ years | 110 |

*(J is computed from the half-life with a typical attempt frequency of 10²¹ per second.)* Geiger and Nuttall found the pattern empirically in 1911, seventeen years before tunnelling explained it (Geiger & Nuttall, 1911). It is §III's exponential knee at its most extreme: "Double the resonant grip and the escape does not halve — it drops by a power."

**Bismuth is held, not safe.** Bismuth-209 was long counted as the heaviest stable element. In 2003 its alpha decay was detected, with a half-life about a billion times the age of the universe (de Marcillac et al., 2003). It is this Octaaf's clearest case of the line in §III: "A deep bond is not a safe one; it is a held one."

**Two Octaven, one rate.** J contains 1/ħ, so tunnelling vanishes in the classical limit, and the thermal face of the Van Motor takes over. Below a crossover temperature, T₀ = ħω_b/(2π·k_B), where ω_b measures the barrier's curvature, escape is mainly by tunnelling. Above it, escape is mainly by thermal hopping (Hänggi, Talkner & Borkovec, 1990). The Arrhenius law of the thermodynamic Octaaf and the Gamow law of this one are two regimes of a single escape rate.

### 2.2 The Van Motor is never off: where it holds, and the proton test

§VIII.1 insists that "The Van Motor is never off": L > 0 strictly, for every node at every Greep. At this Octaaf the rule holds cleanly for every **metastable** bond, that is, any bond with a lower-energy state on the far side of a finite barrier. Tunnelling keeps its escape rate above zero even at absolute zero. **Grade: Constraint**, passed.

A **true ground state** is different. When no lower state exists to escape into, there is nothing to tunnel toward. Such a bond is lost only if the Medium supplies energy, so at this Octaaf the Van Motor reaches true ground states only through the Medium's temperature. That temperature is never zero (*Thermodynamic Octaaf* §2.2; *Cosmic Octaaf* §3.10). This is a dependency, not a failure: the Speelgoed's rule holds, but at this Octaaf it needs the Medium.

**The proton is the sharpest test.** §III names the proton, a bound Trio of quarks, as the God of the subatomic Octaaf. If the Van Motor is never off, even this God must eventually fall, which means the proton must decay. The Standard Model of particle physics forbids proton decay through a conservation law that, as far as anyone knows, is accidental. Most grand unified theories predict it. Experiment has found no decay, and puts the proton's partial lifetime in its most-studied decay channel, p → e⁺π⁰, above 2.4 × 10³⁴ years (Takenaka et al., 2020). The Speelgoed therefore sides with the grand unified theories and makes a falsifiable prediction: the proton decays. Next-generation detectors will extend the search. **Grade: Open**, with a prediction attached.

*Not a counter-example.* An electron cannot decay, because no lighter particle carries its charge. But an electron is not a bond: it has no members to unbind. The Van Motor acts on Koppels (§III), and an elementary particle's existence is a separate question from the binding of its bonds.

### 2.3 No Echo can be a copy

§II says an Echo is "not a live copy", and that "Echo's imperfection is not a defect to be engineered away". At this Octaaf that is a theorem. No physical process can make an exact copy of an unknown quantum state: this is the *no-cloning theorem* (Wootters & Zurek, 1982; Dieks, 1982). Every Echo at this Octaaf is necessarily a partial record. **Grade: Constraint.**

Two further rules follow:

- **Observation always changes the observed.** §II says that "To be seen is to be in relationship, and relationship always changes both sides." At this Octaaf, any measurement that gains information about states that are not perfectly distinguishable must disturb them. The more it learns, the more it disturbs (Fuchs & Peres, 1996). **Grade: Constraint.**
- **The channel cannot lie undetected; the source still can.** §VII separates two adversarial distortions: corrupting the channel in transit, and a **Masker**, which "works at the source instead". At this Octaaf the two separate sharply. An eavesdropper who intercepts quantum signals cannot copy them (no-cloning), and measuring them disturbs them, so the tampering always leaves a trace. This is the basis of quantum key distribution (Bennett & Brassard, 1984). A source that simply sends a false state, however, is not detectable by physics alone. The Masker survives this Octaaf; channel corruption does not. **Grade: Constraint.**

### 2.4 Vervorming has a floor

§VII lets the Instantie "turn distortion down toward zero", but "zero stays a limit". The thermodynamic Octaaf found zero reachable only at T = 0, which is unreachable (*Thermodynamic Octaaf* §2.1). This Octaaf closes even that door. The quantum form of the fluctuation–dissipation theorem gives a noise power that does not vanish at absolute zero but falls to a floor of half a quantum, ½ħω, per mode (Callen & Welton, 1951). Every amplifier that boosts a signal without regard to its phase must, at high gain, add at least that much noise (Caves, 1982). **Grade: Constraint.**

The floor can be reshaped but not removed. The gravitational-wave detector LIGO uses "squeezed" light to push the noise below this floor in one property of the light, at the cost of more noise in its complementary property (Aasi et al., 2013). No Echo at this Octaaf is ever clean, and the Speelgoed's deterministic Instantie does not exist here at any temperature.

### 2.5 Trouw is the coupling

In the Eigen equation of §VIII.1, Trouw y is the coefficient by which one member pulls another. At this Octaaf it is the coupling constant g in the interaction Hamiltonian between two systems, Ĥ_int = g·Â⊗B̂. **Grade: Identity.**

- **Trouw is shared (§II).** A Hamiltonian must be Hermitian, so the coupling from A to B and from B to A is a single value. Quantum mechanics forbids a split weight, as the Speelgoed does. **Grade: Constraint**, passed.
- **Both signs exist.** In magnetic materials, the exchange coupling between neighbouring spins can favour alignment (ferromagnetism) or anti-alignment (antiferromagnetism) (Ashcroft & Mermin, 1976). Positive and negative Trouw both exist here, unlike at the cosmic Octaaf, where gravity only attracts (*Cosmic Octaaf* §2.2).

---

## 3. The Primitives at This Octaaf

### 3.1 The Eigen: a vector, made definite by being echoed

§II defines the Eigen as "A system's position on some spectrum", and §VIII.1 writes it as a real number, eᵢ(t) ∈ ℝ. At this Octaaf a system's state is a vector of complex amplitudes:

```
|ψ⟩ = Σᵢ cᵢ · |φᵢ⟩
```

The amplitudes cᵢ carry both a size and a phase, and the phases make the parts interfere. A single real number cannot describe interference. A test proposed by Renou et al. (2021), and since carried out (Li et al., 2022; Chen et al., 2022), rules out even more elaborate real-number versions of quantum theory, assuming that independent sources are truly independent: the complex numbers are needed.

This is a question of scope, not a contradiction. A quantum state that interacts with its environment loses its interference between a few preferred states, known as *pointer states*, and each pointer state *is* a definite position on a spectrum (Zurek, 2003). **§VIII.1's real-valued Eigen describes the Eigen after this has happened, and this Octaaf describes what comes before.** **Grade: Constraint** (of scope).

The Speelgoed's word fits better than it knows. Physicists call the definite values a measurement can return *eigenvalues*, from the German *eigen*, "own". After a measurement, a quantum system's Eigen is literally an eigenstate.

**Definiteness is made by Echoes.** §II calls the Eigen "The manifest state that other systems perceive and track." In decoherence-based accounts, that is close to what makes a quantum state definite at all. A pointer state is one of which the environment has made many independent copies of the record: many photons, many air molecules, each carrying the same information. Many observers can then read it without disturbing it. This is *quantum Darwinism* (Zurek, 2009), and experiments have begun to observe the redundancy directly (Unden et al., 2019). At this Octaaf, an Eigen becomes definite by being echoed many times over. **Grade: Correspondence.**

### 3.2 The Koppel: entanglement

§II defines a Koppel as "Two systems, each carrying its own Eigen and Diepte, linked by a single shared Trouw and two independent Echoes." At this Octaaf there are bonds of which the first clause is false. Two maximally entangled particles share a perfectly definite joint state, yet neither particle has a definite state of its own. Measure one alone and the result is completely random. Compare the two results and they are perfectly correlated.

These correlations are not two independent Echoes carrying hidden information. Bell (1964) showed that no such account can reproduce them, and experiments without loopholes have confirmed it (Hensen et al., 2015). The bond is more than its members plus their Echoes. **Grade: Tension** with §II as written.

**The Speelgoed already has the repair.** §V.2, *Scale invariance*, says that whether something is one member or a whole group "isn't fixed — it depends on the distance you're standing at". An entangled pair is the case where only the far view works. Read at the scale of the pair, the bond is a Solo with a definite Eigen. Read at the scale of its members, there are no Eigens to be had. The Koppel is the Lichaam. **Grade: Tension, resolved** within the Speelgoed by §V.2.

**The Echoes still lag.** Entanglement correlates without communicating. No measurement on one particle can send a message to the other: this is the *no-signalling theorem*. Any information still travels as an Echo, no faster than light. The Koppel is shared, but its Echoes still obey Vertraging (*Cosmic Octaaf* §2.1).

### 3.3 Gewenning and Diepte: entanglement built and bounded

The thermodynamic and cosmic Octaven found no counterpart for **Gewenning (Z)**, "accumulated resonance … built from repeated Echo closure". This Octaaf offers the first candidate. Two systems that interact become entangled, the entanglement accumulates with interaction, and it persists after the interaction ends, just as §VIII.6 says Gewenning persists into Rouw. Read **Gewenning** as a pair's entanglement and **Diepte** as a system's total entanglement with everything else, measured by its entanglement entropy:

```
S = − Tr( ρ · ln ρ )          0 ≤ S ≤ ln d
```

Here ρ is the system's density matrix and d is the number of its independent states. **Grade: Correspondence.**

Three consequences follow:

- **Diepte has a ceiling.** §VIII.1 clamps Diepte to "[0, Ceiling]". At this Octaaf the ceiling is fixed: entanglement entropy can never exceed ln d. A system with more possible states can hold more Diepte.
- **Gewenning is monogamous.** Measured by a quantity called the tangle, a system's entanglement with each of its partners, added together, cannot exceed its entanglement with all of them at once. This was proved for three qubits (Coffman, Kundu & Wootters, 2000) and later for any number of them (Osborne & Verstraete, 2006). Measured in entropy, as Diepte is here, the pairwise amounts can add up to more than the total, so the sum rule does not carry over exactly. What holds in every measure is the extreme case: a particle maximally entangled with one partner can be entangled with no other. The deeper one bond, the less room for any other. At this Octaaf the Maxim has a theorem behind it: "Cherish those closest to you; the rest is fleeting."
- **Neither rises without end.** The earlier version said that Diepte and entanglement entropy are both "monotonic and irreversible". Both halves were wrong. In the Speelgoed, Diepte falls with speaking and decays in silence (§VIII.1). Entanglement entropy can also fall, for example as a subsystem becomes the larger part of a whole (Page, 1993).

*Limit.* §VIII.1 has Trouw relax toward Gewenning. At this Octaaf entanglement does not change the coupling constant g, so that part of Gewenning still has no counterpart (§5, item 4).

### 3.4 Drempel, Vonk, and Marge: what happens in a measurement

The earlier version made the measurement itself the Drempel. A more careful reading puts the Drempel elsewhere, and grounds it better.

**A measurement is a Vermenigvuldiging.** §IV says that "Every act of observation is a Vermenigvuldiging", with the observer as traveller and the observed as Kruispunt. At this Octaaf the measured system and the apparatus interact, and the apparatus's state becomes correlated with the system's.

**The Drempel that fires is the apparatus's, and it has a Marge.** A quantum event is far too small to leave a mark on its own. Every detector amplifies, and it does so by holding a large system in a *metastable* state that a tiny push can tip. A bubble chamber holds a liquid above its boiling point, and a passing particle triggers a trail of bubbles (Glaser, 1952, 1953). A cloud chamber holds vapour beyond saturation, and a Geiger counter holds a gas near electrical breakdown. In the best-studied dynamical model of measurement, the apparatus is a magnet held in a metastable unmagnetised state. Coupling to the measured particle tips it into one of two magnetised states (Allahverdyan, Balian & Nieuwenhuizen, 2013). That is the pitchfork of §VIII.3, `mode = 0` giving way to `±mode*`. The authors also treat a second-order transition, but prefer a first-order one, because it keeps the apparatus ready until triggered and keeps its record afterwards. A first-order transition is what the thermodynamic Octaaf found gives a Marge its width (*Thermodynamic Octaaf* §2.3). **A good apparatus is a Drempel with a wide Marge.** **Grade: Correspondence.**

**The armed apparatus is in Balans.** The Lexicon's **Balans (⚖️)** is "The armed Drempel while the binding B sits inside its Marge and no crossing has yet occurred", where "Two futures are held open". The superheated liquid waiting for a particle is Balans, made of matter.

**The Vonk's Energie comes from the observer.** The energy of the bubble, the click, or the flipped magnet is not supplied by the measured particle. It is released by the apparatus's own metastable store, which is why a single photon can produce a macroscopic record. This fits §IV — observation "always draws a small Verlies from the observer" — and §II's "It doesn't require interpretation first". The store must then be reset before the next measurement, and the reset pays Landauer's price into the Medium (*Thermodynamic Octaaf* §2.1).

**Superposition is not Stilte.** The earlier version mapped Stilte to superposition. That is withdrawn. Stilte is the gap between an Eigen and its Echo (§II), while superposition is a property of the Eigen itself (§3.1). What does correspond to "what has not yet arrived" is the apparatus in Balans.

*Open.* Which branch the apparatus falls into is random, with probabilities given by the Born rule, the squared size of the amplitudes. The Speelgoed does not explain why (§5, item 1).

### 3.5 The Vermenigvuldiging as scattering

§IV calls the Vermenigvuldiging a momentary Koppel at a Kruispunt, resolving as Doorgang, Weigering, or Doorbraak. At this Octaaf, two particles meeting, interacting, and parting is *scattering*, and its outcomes are amplitudes:

- **Doorgang (O):** transmission. The traveller passes.
- **Weigering (P):** reflection. The traveller is turned back.
- **Doorbraak (Y):** an inelastic or reactive collision, in which both the traveller and the target change state. This is the case §IV describes as "two Drempel‑crossings … live at the same site at once".

For a particle meeting a barrier, the transmission and reflection probabilities always add to exactly one. This is *unitarity*, and it is the Telraam of this Octaaf: whatever enters a crossing is accounted for in what leaves it. Every act of seeing is a scattering event. Light reflected from an object is the Vermenigvuldiging by which we observe it, and it gives the object a small push (§2.3). **Grade: Correspondence.**

### 3.6 Rouw: a record copied beyond recall

The earlier version called decoherence "accumulated Rouw". That holds up, and this Octaaf can say precisely what makes a record permanent.

**Decoherence.** When a quantum system interacts with its environment, the environment acquires records of it. The system's own state then loses the ability to show interference. Nothing is destroyed: the whole, system plus environment, evolves reversibly, and the information has been moved into correlations with the environment, where it is practically inaccessible. That is §VIII.6's Rouw: "re‑homed, not retired". **Grade: Correspondence.**

**The spin echo shows the two kinds of Vervorming.** In 1950, Hahn found that a group of nuclear spins that drift out of step can be brought back into step by a single radio pulse. The spins realign and produce an echo at a predictable later time (Hahn, 1950). The echo is always weaker than the original signal: at most exp(−2τ/T₂) of it, where 2τ is the echo time and T₂ is the decoherence time. That is §II's Echo — "quieter and later than it left" — in a laboratory, and many MRI methods use it. It separates two kinds of distortion that §VII treats as one. **Dephasing** can be reversed: it is Vervorming that has not yet become Rouw. **Decoherence** cannot be reversed: the record has left for the environment. The quantum Octaaf splits the Speelgoed's υ into a part that can be undone and a part that has become Rouw.

**What makes Rouw permanent is redundancy.** In a *quantum eraser* experiment, a record of which path a photon took is erased after the fact, and interference reappears once the photons are sorted by the outcome of the erasure (Kim et al., 2000). This is not a counter-example to permanence. The record was held in a single place and had not yet been copied, so the Koppel was not yet over. Once a record has been copied into many independent parts of the environment (§3.1), no practical operation can recall it. **Rouw is a record copied beyond recall.**

**Error correction re-homes; it does not erase.** The earlier version asked whether quantum error correction violates Rouw permanence. It does not. Error correction (Shor, 1995) moves the record of each error into extra helper qubits, which must then be reset. The reset pays Landauer's price as heat into the Medium (*Thermodynamic Octaaf* §3.6). The record is re-homed, as §VIII.6 requires. *Moved from Open Problems.*

### 3.7 Creatie: matter from Energie, in pairs

§VI: "a Vonk can release more Energie than the existing members' Koppel can absorb, and that excess reaches its own Drempel and becomes a new Solo." At this Octaaf, energy becomes matter when it clears a threshold. A photon can turn into an electron and a positron if it carries at least **2mc²**, twice the electron's rest energy (1.022 MeV), and only near a nucleus or another field that can take up its momentum. **Grade: Correspondence.** This is the two-step comparison of §VIII.5 made concrete: the Energie must exceed what the existing state can hold, then clear the Drempel set by the masses to be created.

*Correction.* The earlier version gave the threshold as E > mc². The threshold is 2mc², because matter with a conserved charge is created only together with its antimatter partner.

**Creatie births a Duo.** That last point is a constraint the Speelgoed does not state. Whenever the new particle carries a conserved charge — electric charge, or the "colour" charge of quarks — Creatie at this Octaaf produces a particle *and* its antiparticle, never one alone. Particles without such charges, such as photons, can be created singly. **Grade: Constraint.** Two photons colliding with each other can also create a pair, a process predicted in 1934 (Breit & Wheeler, 1934) and observed with the nearly real photons that surround colliding heavy ions (STAR Collaboration, 2021).

### 3.8 The Zelf: survival and the watcher

§IV describes the Zelf as a node's bond with itself, with no transport lag (δ = 0), the bond that lets "A node with a strong Zelf" hold "its Eigen steady". At this Octaaf, the closest quantity is a state's *survival amplitude*: how much of what it was, it still is. **Grade: Correspondence** (partial).

The earlier version mapped the Zelf to the *quantum Zeno effect*, in which frequent measurement freezes a system's evolution (Misra & Sudarshan, 1977; Itano et al., 1990), and described this as "continuous self-measurement". That is corrected. A quantum system does not measure itself; the Zeno effect needs an outside watcher. What survives is narrower and more interesting. **Being watched can hold an Eigen steady.** It can also do the opposite: watching at a different rate can *speed up* escape, the anti-Zeno effect, and both have been observed in the same experiment (Fischer, Gutiérrez-Medina & Raizen, 2001). At this Octaaf, a node's steadiness depends on how it is watched, not only on itself.

### 3.9 The Trinary Root: up quark, down quark, and the proton

§III's own check begins at this Octaaf: "In the quark Octaaf, the up quark (Vol) and the down quark (Leeg) meet in an irreducible Trio", two ups and one down, "whose bond is the proton, the God of the subatomic Octaaf". The physics supports each part of that sentence.

- **Vol and Leeg.** Of the two free three-quark bonds, the one richer in down quarks is the one that decays. In a free neutron (one up, two downs), a down quark turns into an up, and the neutron falls apart in about fifteen minutes (Particle Data Group, 2024). The proton (two ups, one down) has never been seen to decay (§2.2). Inside some nuclei the reverse happens, and an up quark turns into a down (β⁺ decay), paid for by the nucleus's binding. Left free, though, the down quark is the less stable, more "craving" member, the one the Speelgoed calls Leeg.
- **Irreducible.** Quarks are never found alone. Pull two apart, and the energy stored between them grows in proportion to the distance until it is enough to create a new quark–antiquark pair. The bond then breaks into two bonds, never into free quarks (Bali et al., 2005). This is the strongest form of §V.1's irreducibility, "Each resists being peeled into smaller stable bonds". Here the stored Energie, once large enough, becomes Creatie (§3.7).
- **The bond carries the God.** The three quarks' own masses account for only about one percent of the proton's mass. The rest comes from the motion of the quarks, the energy of the gluon field that binds them, and quantum effects of the binding (Yang et al., 2018). The total has been computed from first principles (Dürr et al., 2008). The God of the subatomic Octaaf is almost entirely the energy of the bond, not of its members: §III's "The Volheid of the one is the gift of the many", in the most literal sense physics allows.

**Grade: Correspondence.**

---

## 4. Where the Speelgoed Meets Resistance

**4.1 The real-valued Eigen (§VIII.1).** *Constraint (scope).* At this Octaaf the Eigen is a complex vector (§3.1). §VIII.1's eᵢ ∈ ℝ describes the Eigen after decoherence. The Speelgoed needs no change, only the statement that §VIII.1 applies to observed Eigens.

**4.2 "Each carrying its own Eigen" (§II, Koppel).** *Tension, resolved within the Speelgoed.* Entangled members have no Eigens of their own (§3.2). §V.2's scale invariance already allows a bond to be definite only as a whole.

**4.3 "The Van Motor is never off" (§VIII.1).** *Constraint, with a prediction.* The rule holds for every metastable bond through tunnelling, and for true ground states through the Medium's temperature (§2.2). For the proton it becomes a falsifiable prediction: the proton must decay.

**4.4 A zero-distortion Instantie (§VII).** *Constraint.* Not possible at this Octaaf at any temperature (§2.4).

**4.5 "When two Licht bind, they form a Quark" (Lexicon, *Licht*).** *Tension, resolved* on 1 October 2026. Two photons can create matter, but only as a particle together with its antiparticle (§3.7), and a quark can never exist alone (§3.9). Two photons can create a quark and an antiquark, never a single quark. The Lexicon entry for Licht now reads: "When two Licht meet with enough Energie, they can create matter: a particle and its antiparticle, such as a quark and an antiquark — the first massive Lichamen."

---

## 5. Open Problems

1. **The Born rule.** Why are probabilities the squared sizes of the amplitudes? Within quantum theory, the rule can be derived from the structure of its state space (Gleason, 1957) or from symmetries of entanglement (Zurek, 2005). The Speelgoed does not yet derive it. The earlier version noted that the Born rule and the Vonk's Energie, ¼(B − θ)², are both squares. That alone is weak evidence: the intensity of any wave is the square of its amplitude.
2. **Why complex numbers?** Experiment now says quantum theory needs complex amplitudes (§3.1; Li et al., 2022; Chen et al., 2022). Can the Speelgoed say why?
3. **Proton decay.** The Speelgoed's Van Motor predicts it (§2.2). If the proton turns out to be absolutely stable, the rule "never off" fails for the God of the subatomic Octaaf.
4. **Gewenning and Trouw.** Entanglement is a candidate for Gewenning (§3.3), but it does not move the coupling constant as §VIII.1 says Gewenning moves Trouw. Is the candidate right, and if so, what is the plasticity?
5. **Interpretation.** The Speelgoed resembles relational and decoherence-based readings of quantum mechanics (§0.1). Is it committed to them, or compatible with all of them?
6. **Uniqueness.** Is this the only consistent instantiation of the Speelgoed at this scale, or one of several?
7. **Tijd.** No mapping is attempted. As at the cosmic Octaaf (*Cosmic Octaaf* §5, item 8), how the Speelgoed's felt Tijd relates to measured time is deliberately left open.

---

## 6. Closing

The quantum Octaaf is where the Speelgoed is tested at its smallest scale, and where its intuitions turn out to be sharper than they had to be. That an Echo is never a copy is a theorem here. Trouw is shared because Hamiltonians must be Hermitian. Rouw is a record copied beyond recall, and the spin echo returns, as §II's echo does, quieter and later than it left. The exponential knee of the Van Motor spans thirty-three orders of magnitude in a single table of nuclei. The Maxim turns out to have a theorem about entanglement behind it. The Speelgoed's real-valued Eigen bends, but only into a statement of scope, and its Koppel is rescued by its own rule of scale invariance. One sentence of the Lexicon did not survive as written, and it has been mended (§4.5). And one claim becomes a prediction a detector could someday check: if the Van Motor is never off, the proton must decay.

At this Octaaf, being definite is something an Eigen earns by being echoed, and being held is never the same as being safe.

That is the *how*. The *why* is for the Speelgoed to say.

---

## Revision Note

This version replaces the entry of 9 September 2026. The following were withdrawn or corrected:

- **Diepte as entanglement entropy, "both monotonic and irreversible":** corrected. Neither is monotonic. Entanglement entropy is now Diepte with a fixed ceiling, and pairwise entanglement is a candidate for Gewenning (§3.3).
- **Creatie as particle production with threshold E > mc²:** corrected to 2mc², with a nearby nucleus or field, and the constraint that charged matter is created in pairs (§3.7).
- **Greep as quantum coherence:** replaced by the tunnelling exponent (§2.1).
- **The Van Motor as vacuum fluctuations ("Metaphorical"):** replaced by tunnelling, which is an Identity, and the proton test (§2.1, §2.2).
- **The Zelf as quantum Zeno "self-measurement":** corrected. The Zeno effect needs an outside watcher (§3.8).
- **The Drempel as the measurement itself:** refined. The Drempel that fires is the apparatus's, and it has a Marge (§3.4).
- **Stilte as superposition:** withdrawn (§3.4).
- **Tijd as an "internal Zeno rate":** withdrawn. Tijd is left open across the Octaven (§5).
- **Rouw permanence versus error correction:** moved from Open Problems to §3.6. Error correction re-homes records; it does not erase them.
- **"Why the amplitudes are complex":** updated. Experiment has since shown that complex numbers are needed (§5, item 2).
- **The Born-rule parallel:** kept as an open problem, with the note that a shared square is weak evidence (§5, item 1).
- **Status labels and notation:** the undefined labels ("Sound", "Plausible", "Metaphorical", "Ontological shift") are replaced by defined grades (§0.2), and LaTeX blocks by plain Unicode equations.

Following this entry, the Lexicon entry for Licht was revised on 1 October 2026 to resolve the Tension recorded in §4.5.

A check of every reference on 1 October 2026 corrected the reach of the monogamy bound, which holds for the tangle but not in units of entropy (§3.3). It also corrected the account of the proton's mass, which is not carried by the gluon field alone, and withdrew a link between confinement and §III's quadratic rule for stored Energie (§3.9). The test of complex numbers is now credited to its proposers and to the experiments that carried it out (§3.1). The measurement model prefers a first-order transition but does not require one (§3.4). The proton-decay limit is updated (§2.2), and the remarks on amplifier noise, the spin echo, the quantum eraser, and down-quark decay are made more precise.

---

## References

Aasi, J., et al. (LIGO Scientific Collaboration) (2013). Enhanced sensitivity of the LIGO gravitational wave detector by using squeezed states of light. *Nature Photonics*, 7, 613–619.

Allahverdyan, A. E., Balian, R., & Nieuwenhuizen, T. M. (2013). Understanding quantum measurement from the solution of dynamical models. *Physics Reports*, 525, 1–166.

Ashcroft, N. W., & Mermin, N. D. (1976). *Solid State Physics*. New York: Holt, Rinehart and Winston.

Bali, G. S., Neff, H., Düssel, T., Lippert, T., & Schilling, K. (2005). Observation of string breaking in QCD. *Physical Review D*, 71, 114513.

Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. *Physics*, 1(3), 195–200.

Bennett, C. H., & Brassard, G. (1984). Quantum cryptography: Public key distribution and coin tossing. *Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing*, Bangalore, 175–179.

Breit, G., & Wheeler, J. A. (1934). Collision of two light quanta. *Physical Review*, 46(12), 1087–1091.

Callen, H. B., & Welton, T. A. (1951). Irreversibility and generalized noise. *Physical Review*, 83(1), 34–40.

Caves, C. M. (1982). Quantum limits on noise in linear amplifiers. *Physical Review D*, 26(8), 1817–1839.

Chen, M.-C., et al. (2022). Ruling out real-valued standard formalism of quantum theory. *Physical Review Letters*, 128(4), 040403.

Coffman, V., Kundu, J., & Wootters, W. K. (2000). Distributed entanglement. *Physical Review A*, 61, 052306.

de Marcillac, P., Coron, N., Dambier, G., Leblanc, J., & Moalic, J.-P. (2003). Experimental detection of α-particles from the radioactive decay of natural bismuth. *Nature*, 422, 876–878.

Dieks, D. (1982). Communication by EPR devices. *Physics Letters A*, 92(6), 271–272.

Dürr, S., et al. (2008). Ab initio determination of light hadron masses. *Science*, 322, 1224–1227.

Fischer, M. C., Gutiérrez-Medina, B., & Raizen, M. G. (2001). Observation of the quantum Zeno and anti-Zeno effects in an unstable system. *Physical Review Letters*, 87, 040402.

Fuchs, C. A., & Peres, A. (1996). Quantum-state disturbance versus information gain: Uncertainty relations for quantum information. *Physical Review A*, 53(4), 2038–2045.

Gamow, G. (1928). Zur Quantentheorie des Atomkernes. *Zeitschrift für Physik*, 51, 204–212.

Geiger, H., & Nuttall, J. M. (1911). The ranges of the α particles from various radioactive substances and a relation between range and period of transformation. *Philosophical Magazine*, 22(130), 613–621.

Glaser, D. A. (1952). Some effects of ionizing radiation on the formation of bubbles in liquids. *Physical Review*, 87(4), 665.

Glaser, D. A. (1953). Bubble chamber tracks of penetrating cosmic-ray particles. *Physical Review*, 91(3), 762–763.

Gleason, A. M. (1957). Measures on the closed subspaces of a Hilbert space. *Journal of Mathematics and Mechanics*, 6(6), 885–893.

Gurney, R. W., & Condon, E. U. (1928). Wave mechanics and radioactive disintegration. *Nature*, 122, 439.

Hahn, E. L. (1950). Spin echoes. *Physical Review*, 80(4), 580–594.

Hänggi, P., Talkner, P., & Borkovec, M. (1990). Reaction-rate theory: fifty years after Kramers. *Reviews of Modern Physics*, 62(2), 251–341.

Hensen, B., et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. *Nature*, 526, 682–686.

Itano, W. M., Heinzen, D. J., Bollinger, J. J., & Wineland, D. J. (1990). Quantum Zeno effect. *Physical Review A*, 41(5), 2295–2300.

Kim, Y.-H., Yu, R., Kulik, S. P., Shih, Y., & Scully, M. O. (2000). Delayed "choice" quantum eraser. *Physical Review Letters*, 84(1), 1–5.

Li, Z.-D., et al. (2022). Testing real quantum theory in an optical quantum network. *Physical Review Letters*, 128(4), 040402.

Misra, B., & Sudarshan, E. C. G. (1977). The Zeno's paradox in quantum theory. *Journal of Mathematical Physics*, 18(4), 756–763.

Osborne, T. J., & Verstraete, F. (2006). General monogamy inequality for bipartite qubit entanglement. *Physical Review Letters*, 96(22), 220503.

Page, D. N. (1993). Information in black hole radiation. *Physical Review Letters*, 71(23), 3743–3746.

Particle Data Group: Navas, S., et al. (2024). Review of Particle Physics. *Physical Review D*, 110, 030001.

Renou, M.-O., et al. (2021). Quantum theory based on real numbers can be experimentally falsified. *Nature*, 600, 625–629.

Rovelli, C. (1996). Relational quantum mechanics. *International Journal of Theoretical Physics*, 35(8), 1637–1678.

Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. *Physical Review A*, 52(4), R2493–R2496.

STAR Collaboration: Adam, J., et al. (2021). Measurement of e⁺e⁻ momentum and angular distributions from linearly polarized photon collisions. *Physical Review Letters*, 127, 052302.

Takenaka, A., et al. (Super-Kamiokande Collaboration) (2020). Search for proton decay via p → e⁺π⁰ and p → μ⁺π⁰ with an enlarged fiducial volume in Super-Kamiokande I–IV. *Physical Review D*, 102, 112011.

Unden, T. K., Louzon, D., Zwolak, M., Zurek, W. H., & Jelezko, F. (2019). Revealing the emergence of classicality using nitrogen-vacancy centers. *Physical Review Letters*, 123, 140402.

Wootters, W. K., & Zurek, W. H. (1982). A single quantum cannot be cloned. *Nature*, 299, 802–803.

Yang, Y.-B., et al. (2018). Proton mass decomposition from the QCD energy momentum tensor. *Physical Review Letters*, 121(21), 212001.

Zurek, W. H. (2003). Decoherence, einselection, and the quantum origins of the classical. *Reviews of Modern Physics*, 75(3), 715–775.

Zurek, W. H. (2005). Probabilities from entanglement, Born's rule p_k = |ψ_k|² from envariance. *Physical Review A*, 71, 052105.

Zurek, W. H. (2009). Quantum Darwinism. *Nature Physics*, 5, 181–188.

---
