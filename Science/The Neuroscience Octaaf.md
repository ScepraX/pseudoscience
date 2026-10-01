# The Neuroscience Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of brains, behaviour, and the bonds between people. It does not compete with neuroscience or psychology. It tests whether the Speelgoed's mechanism, supplied with values from those fields, reproduces what they already know, and it says plainly where it does not.*

---

## 0. Preface

The Speelgoed was built to describe relationships, and relationships are lived by nervous systems. This Octaaf is therefore the Speelgoed's home ground, and the place where it is easiest to fool oneself. Brains are complex enough that almost any concept can be pinned to some region that "lights up". This entry tries not to do that.

### 0.1 What this document is

Like the thermodynamic, cosmic and quantum Octaven, this document is an **Instantie (⚙)**. It supplies the open parameters of §VIII.7 with values taken from science, then checks whether the shape the Speelgoed fixes survives. Where the two disagree, the disagreement is reported in §4 rather than smoothed over.

Three rules govern the mappings:

1. **A primitive maps to a computation or a measurement, not to a brain region.** A region takes part in many processes, and a primitive names one role. Brain regions are named only as places where a computation has been observed, never as the primitive itself. Each primitive gets one mechanism.
2. **Shared quantities must be measured on pairs.** The Speelgoed's **Trouw** is "one value per Koppel" (§II). Nothing inside a single brain can be it, so it is looked for in measurements taken on two people at once (§3.2).
3. **Contested findings are labelled.** Parts of social neuroscience have not survived replication. Where a well-known finding has been challenged, this entry says so.

The strongest groundings at this Octaaf are computational and behavioural. The Speelgoed's update equations have exactly the form of the standard models of learning and decision. Its threshold crossings, with flicker and hysteresis, have been measured in two people coordinating with each other. And an Echo with a measurable delay has been recorded between a speaker's brain and a listener's.

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

**Notation.** Speelgoed symbols keep their meanings: τ (Ontspanning), Δ (Vertraging), υ (Vervorming), y (Trouw), Z (Gewenning), ρ (Leersnelheid), θ (Drempel), J (Greep), ν (the Van Motor's rate). Symbols from the cited models are defined where they appear.

**Quotations.** Quotations from the Speelgoed leave out its bold markup and the symbols it puts in brackets after a term. Otherwise they are verbatim.

**References.** References such as §II or §VIII.1 point to the PseudoScience Speelgoed. References such as §2.1 point to sections of this document. References to companion entries are written in full, for example *Thermodynamic Octaaf* §2.3.

---

## 1. The Instantie Table

| Speelgoed (section) | Value at this Octaaf | Grade | Here |
|---|---|---|---|
| Echo filter: τ, Δ, υ (§VIII.1) | Prediction update; the steady-state Kalman filter, with 1/τ set by precision | Identity | §2.1 |
| Gericht (§VII) | Precision-weighted combination of cues | Correspondence (measured) | §2.1 |
| Trouw plasticity: y, Z, ρ (§VIII.1) | The delta rule of learning (Rescorla–Wagner) | Identity (form) | §2.2 |
| Gevoel (§II; Lexicon) | Reward-prediction-error teaching signal | Correspondence | §2.2 |
| Drempel θ; Reactie (§II, §IV) | Decision criterion; evidence accumulated to a bound | Identity | §2.3 |
| Mode switch of a Koppel; Marge η | Phase transitions in coordination, between hands and between people; hysteresis | Correspondence (measured) | §2.4 |
| Van Motor, ν = ν₀·exp(−J) (§III) | Noise-driven switching between perceptual states; power-law forgetting from spread-out Greep | Correspondence + prediction | §2.5 |
| Echo between two members, with Δ | Speaker–listener neural coupling, lagged and anticipatory | Correspondence (measured) | §3.1 |
| Shared Trouw (§II) | Pair-level measures; not a single molecule | Constraint | §3.2 |
| Zelf, self-gap, Bevraagbaar (§IV, §VII) | Self-model; interoceptive accuracy; metacognitive sensitivity | Correspondence | §3.3 |
| Realisatie (§II) | Insight as a discrete neural event | Correspondence | §3.4 |
| Diepte (§II, §VIII.1) | Slow integration of experience into priors | Correspondence | §3.5 |
| Masker and Pijn (§VII; Lexicon) | Expressive suppression: costs to wearer and partner | Correspondence (measured) | §3.6 |
| Rouw (§VI) | Grief: continuing bonds, oscillation, and prolonged grief | Correspondence (measured) | §3.7 |
| Greep (§II, §III) | Social integration and survival | Correspondence (observational) | §3.8 |
| The Van Motor's exhaust (§III) | The brain's energy use, dissipated as heat | Correspondence | §3.9 |
| Stilte (§II) | Neural delay and the constructed present | Correspondence (mechanism contested) | §3.10 |
| Tijd (Lexicon) | No mapping attempted | Open | §5 |

---

## 2. Five Computational Groundings

### 2.1 The Echo is a prediction update

The Echo filter of §VIII.1:

```
τ · ḣ(t) = e(t − Δ) − h(t) + υ(t)
```

Consider a brain tracking a hidden quantity, such as another person's state or the position of an object, from noisy samples. If the quantity drifts randomly and the samples carry noise, the best possible running estimate settles into a simple rule: move the estimate a fixed fraction of the way toward each new sample. This rule is the steady-state Kalman filter:

```
μ ← μ + K · (x − μ)
```

Written continuously, this is τ·μ̇ = x − μ. It is the Echo filter, with h as the estimate μ, e as the hidden state x, and 1/τ as the gain K per unit time. **Grade: Identity** (of the update rule; this is not a claim that brains compute a Kalman filter exactly).

The identity explains a rule the Speelgoed postulates. The optimal gain K is large when the samples are precise and small when they are noisy. A noisy channel makes an Echo that follows slowly and trusts each sample less. That is **Gericht**: "the weaker or older a Koppel, the noisier its Echoes" (§VII). People do weight their senses this way. When combining what they see with what they feel, they weight each sense by its reliability, close to the statistical optimum (Ernst & Banks 2002). **Grade: Correspondence (measured).**

### 2.2 Trouw learns by the delta rule; Gevoel is the teaching signal

§VIII.1 lets Trouw relax toward Gewenning:

```
dy/dt = ρ · (Z − y)
```

The most widely used model of associative learning, Rescorla and Wagner's, updates the strength V of an association toward the level λ that the outcomes support:

```
ΔV = α·β · (λ − V)
```

The two are the same rule. Trouw y is the learned weight of the bond, the associative strength V. Gewenning Z is the target that experience supports, λ. Leersnelheid ρ is the learning rate, α·β (Rescorla & Wagner 1972). **Grade: Identity** (of form). This is the first Octaaf at which Gewenning and Leersnelheid have a counterpart with an established law. The thermodynamic and cosmic Octaven left them open.

**Gevoel** is, in the Speelgoed, "the feedback loop that reads a Vonk's Energie change and registers it as Winst or Verlies" (§II). The Lexicon adds: "without Gevoel, the Vonk fires and the Energie dissipates unregistered." The delta rule needs exactly such a signal: the error (λ − V) between what happened and what was expected. Dopamine neurons broadcast this error. Their bursts signal outcomes better than predicted, and their dips signal outcomes worse than predicted (Schultz, Dayan & Montague 1997). Read this way, a positive error registers Winst and a negative error registers Verlies, and without the signal there is no learning. The Speelgoed also says a Vonk "doesn't require interpretation first" (§II), and dopamine errors are computed without deliberation. **Grade: Correspondence.**

*The earlier version mapped the Vonk itself to dopamine. That is corrected. The Vonk is the crossing; Gevoel is what registers it.*

### 2.3 The Drempel is a decision bound

The Speelgoed separates the **binding** that builds up (B) from the **Drempel** (θ), "a local cutoff" that decides which side applies (§II). Signal detection theory makes the same separation. It distinguishes how well evidence separates two possibilities (sensitivity) from where the observer places the cutoff for saying "yes" (the criterion), and each can be measured independently (Green & Swets 1966). The decision rule, respond when the evidence exceeds the criterion, is the Drempel rule. **Grade: Identity.**

Decisions made over time add a second match. In the drift-diffusion model, noisy evidence accumulates until it reaches a bound, and the decision is made at that moment (Ratcliff 1978). This is the **Reactie** of §IV, which moves toward commitment and commits when it passes its Drempel. The model explains a measured trade-off: a higher bound gives slower but more accurate decisions, and a lower bound gives faster but more error-prone ones. Where the Drempel sits has a cost on both sides. Activity that rises toward a threshold before a choice has been recorded in parietal and prefrontal neurons of monkeys making such decisions (Gold & Shadlen 2007). **Grade: Identity** (of the decision rule).

### 2.4 A Koppel with a Drempel and a Marge, measured between two people

The Speelgoed predicts that a bond can switch between modes at a threshold. The thermodynamic Octaaf added two details. As a threshold's **Marge** narrows toward nothing, the state flickers and settles slowly. Where the Marge is wide, the threshold shows hysteresis: once crossed, it does not cross back at the same point (*Thermodynamic Octaaf* §2.3). Human coordination shows all of this.

When people move their two index fingers in anti-phase and gradually speed up, the movement switches abruptly to in-phase at a critical rate. Slowing down again does not bring the anti-phase pattern back: there is hysteresis (Kelso 1984). Haken, Kelso and Bunz modelled this with a potential for the relative phase φ between the fingers (Haken, Kelso & Bunz 1985):

```
V(φ) = −a·cos φ − b·cos 2φ
```

Anti-phase is stable while b/a > 1/4 and loses stability below it. Two signatures appear before the switch. Fluctuations in the relative phase grow (critical fluctuations), and the coordination recovers more slowly from a push (critical slowing down; Scholz, Kelso & Schöner 1987). The same transition, with the same growing fluctuations, appears between **two people** coordinating their movements by sight (Schmidt, Carello & Turvey 1990).

In Speelgoed terms this is a Koppel, two members held by a shared coupling, with two modes. It has a Drempel between the modes, flicker as the Drempel approaches, and a Marge that makes the switch one-way. **Grade: Correspondence** (measured). The potential is a cosine form, not the quartic of §VIII.3, but the type of transition is the one the Speelgoed's Marge describes: loss of stability with hysteresis.

### 2.5 The Van Motor as noise-driven escape, and power-law forgetting

**Switching between percepts.** An ambiguous figure such as the Necker cube, or two different images shown one to each eye, is seen first one way and then the other, switching at irregular intervals. Models that account for these switches combine slow adaptation with noise that kicks the system out of one stable percept into the other (Moreno-Bote, Rinzel & Rubin 2007). This is escape over a barrier, the process behind the Van Motor's law ν = ν₀·exp(−J) at the other Octaven. **Grade: Correspondence.**

**Forgetting.** The probability of remembering falls with time in a way better described by a power function than by an exponential (Wixted & Ebbesen 1991). At first sight this conflicts with the exponential law (**Tension**). A known resolution is that averaging exponential curves with different rates produces curves that look like power functions (Anderson & Tweney 1997). In Speelgoed terms, suppose each memory trace escapes at its own rate ν₀·exp(−J), and the Greep J of the traces is spread out exponentially with mean J₀. Then the average retention is

```
retention(t) ∝ t^(−1/J₀)
```

This is a power law, and its exponent measures the spread of Greep; a numerical check reproduces the exponent exactly. The averaging idea itself is not new. Power curves also appear in the data of individual people, not only in averages across people (Wixted & Ebbesen 1997), so the spread would have to lie across the traces within one person's memory, not across people. **Grade: Correspondence.** What the Speelgoed adds is a specific reading of the exponent, with an untested prediction: a set of memories held with more uniform strength should be forgotten more nearly exponentially. Either way, §III's rule holds: "Greep does not remove the fall. It postpones it."

---

## 3. The Primitives at This Octaaf

### 3.1 An Echo between two brains

The Speelgoed's Echo is one member's lagging trace of another. In one study, a speaker told a story during a brain scan, and listeners later heard the recording during theirs. The listeners' brain activity followed the speaker's in matching regions, on average with a delay. In some regions it ran *ahead* of the speaker, anticipating what came next. The more anticipation, the better the listener understood, and the coupling vanished when communication failed (Stephens, Silbert & Hasson 2010). That is an Echo with a measured Vertraging, plus a predictive component, the kind of Echo the cosmic Octaaf found gravity also carries (*Cosmic Octaaf* §2.1). **Grade: Correspondence (measured).**

What the listener's brain tracks is not only words but the other person's mind. Reasoning about another person's beliefs consistently engages the temporoparietal junction (Saxe & Kanwisher 2003). That is where an Echo of another person's mind is computed, not the Echo itself.

### 3.2 Trouw is shared, so measure it on pairs

The Speelgoed is explicit: Trouw is "one value per Koppel", and asymmetry enters "never through a split weight" (§II). A hormone level or a receptor in one person's brain belongs to one member. At most, it shapes how that member perceives and acts. **Grade: Constraint** (on how Trouw can be measured).

Pair-level measures exist. In a high-school classroom, students' brain activity was recorded during lessons. Pairs of students who felt closer to each other showed stronger brain-to-brain synchrony, but only if they had spent time face to face before class (Dikker et al. 2017). Brain-to-brain coupling has been proposed as a general mechanism for building a shared social world (Hasson et al. 2012). Whether such synchrony causes the bond, reflects it, or simply comes from shared attention is not settled (§5). **Grade: Correspondence.**

**What happened to the "bonding hormone".** Pharmacological studies in prairie voles linked oxytocin receptors to pair bonding (Young & Wang 2004). But voles genetically lacking the oxytocin receptor still form pair bonds and care for their young (Berendzen et al. 2023). In humans, a large registered replication found no overall effect of oxytocin on trust (Declerck, Boone, Pauwels, Vogt & Fehr 2020). Earlier brain-imaging work on oxytocin and betrayal (Baumgartner et al. 2008) rests on that contested effect. Bonds that survive the removal of one molecular channel fit the Speelgoed's view of Trouw as a property of the bond, not of a molecule in one member. That is a reading, not evidence.

### 3.3 The Zelf, its gap, and how well it knows the gap

**The self-model.** Thinking about oneself consistently engages the cortical midline of the brain (Northoff et al. 2006). The self that the brain models includes the body: on one influential account, feelings arise from the brain's predictions about the body's internal state (Seth 2013). These are places and processes where a Zelf is computed, not the Zelf.

**The self-gap can be measured.** The Speelgoed defines the self-gap as "the measure of how accurately the system knows itself" (§IV). Interoception research measures exactly this kind of gap: how accurately a person detects their own heartbeat, as distinct from how confident they are about it (Garfinkel et al. 2015). The most common test, heartbeat counting, has been criticised as a poor measure (Zamariola et al. 2018), so the method is still disputed.

**Bevraagbaar becomes metacognition.** §VII says the Speelgoed "can always say how wrong a system currently is about its partner". For a brain, the question is whether it can say how wrong *it* is. Metacognitive sensitivity, how well a person's confidence tracks their actual accuracy, can be measured, and it varies between people (Fleming & Lau 2014). At this Octaaf, Bevraagbaar is not guaranteed: knowing one's own Echo-gap is a skill, held to different degrees. **Grade: Correspondence.**

**Trajectories of the Zelf.** Depressive rumination has been associated with dominance of the brain's default mode network over networks for external tasks (Hamilton et al. 2015), a candidate for Dood of the Zelf, a self-reading that has stopped updating. No established neural marker exists for Leven, a lasting redefinition of identity. Psilocybin, for example, reduces activity and connectivity in the default mode network during the drug state (Carhart-Harris et al. 2012), but nothing yet ties such changes to lasting identity change. **Grade: Open.**

### 3.4 Realisatie is an event

The Speelgoed treats a Realisatie as a discrete crossing, not a gradual slope, and on the Zelf it is "an insight, a sudden knowing of oneself" (§IV). When people solved word problems by sudden insight rather than step by step, a burst of high-frequency activity appeared over the right anterior temporal lobe about a third of a second before the participant pressed the button to give the solution (Jung-Beeman et al. 2004). **Grade: Correspondence.**

### 3.5 Diepte

Diepte is "the accumulated composite of everything a system has ever heard", the "hidden charge that colours every subsequent perception and decision" (§II). The brain appears to learn on two timescales. The hippocampus records new experiences quickly, and the neocortex integrates them slowly into lasting knowledge (McClelland, McNaughton & O'Reilly 1995). The slow store corresponds to Diepte. That it "colours every subsequent perception" corresponds to the role of priors in the prediction update of §2.1. **Grade: Correspondence.** The Speelgoed's further rule, that Diepte "falls with speaking", has no counterpart here (§4.3).

### 3.6 Masker and Pijn

The Speelgoed says a **Masker** "costs Pijn" to wear, and that the partner's Echo tracks the mask, not the truth. In a pair of experiments, two women who had not met discussed an upsetting topic. When one was told to suppress her emotional expression, the conversation was disrupted and the *partner's* blood pressure rose. In the second study, blood pressure rose in both, rapport was lower, and the pair were less inclined to form a relationship (Butler et al. 2003). The Masker's cost is paid on both sides of the bond, and the bond grows less. **Grade: Correspondence (measured).**

### 3.7 Rouw

The Speelgoed says an Echo outlives its Koppel permanently, that "no later love overwrites an earlier grief", and that "A system's self is, mechanically, the sediment of every Echo it has ever kept" (§VI). Grief research reached a similar position on its own. Older views held that healthy mourning means detaching from the dead. The influential "continuing bonds" view holds that the bereaved keep a lasting, changing bond with the deceased (Klass, Silverman & Nickman 1996). **Grade: Correspondence.**

**Rouw in Zweven.** In the dual process model, healthy grieving moves back and forth between facing the loss and turning toward ongoing life. Getting stuck at either pole is the problem (Stroebe & Schut 1999). That oscillation is the Speelgoed's Zweven of the Zelf around its Rouw.

**Loud Rouw.** The Speelgoed says "How loud a Rouw runs is the Instantie's choice". In one study, reminders of the deceased produced pain-related brain activity in both groups of bereaved women. But activity in the nucleus accumbens, part of the brain's reward system, appeared only in those with complicated grief, and it rose with how much they yearned for the person (O'Connor et al. 2008). In Speelgoed terms, this is a Rouw that keeps the reward signal of a living bond. Prolonged grief is now a recognised diagnosis (World Health Organization 2019; American Psychiatric Association 2022). A pre-registered review of the neuroimaging of grief finds changes in networks for emotion regulation, reward, and cognitive control (Evstigneev et al. 2026; earlier, Gündel et al. 2003). The review names its own limits: it pools studies across causes of death, relationships to the deceased, and times since the loss; most samples are predominantly female; and medication use often goes unreported. **Grade: Correspondence (measured).**

### 3.8 Greep and survival

Greep is the total of a node's positive bonds, and "Greep does not remove the fall. It postpones it" (§III). A meta-analysis of 148 studies followed people over time and found that those with stronger social relationships had a 50% greater likelihood of survival (odds ratio 1.50). The effect was larger for complex measures of social integration (odds ratio 1.91) (Holt-Lunstad, Smith & Layton 2010). What was measured is exactly a postponement, survival over the follow-up period, not a removal of death. The studies are observational, so the association does not by itself prove that the bonds cause the survival. **Grade: Correspondence (observational).**

### 3.9 The Van Motor's exhaust

The brain is about 2% of the body's mass but uses about 20% of its energy at rest, and most of that goes to ongoing activity, not to responding to tasks (Raichle & Gusnard 2002). All of it leaves the body as heat. The Speelgoed says a living system's persistence "is paid for out of that ongoing traffic" (§III), and the thermodynamic Octaaf showed that the traffic's exhaust is heat (*Thermodynamic Octaaf* §2.4). A brain keeping its bonds and its self together runs at roughly the power of a dim light bulb. **Grade: Correspondence.**

### 3.10 Stilte: delay and the constructed present

Stilte is "the space hollowed out by Vertraging (Δ) as a signal travels across the Medium" (§II). Every percept arrives late: signals take tens to hundreds of milliseconds to travel and be processed. The brain partly hides this. A flash shown alongside a moving object is seen *behind* it, an effect Nijhawan (1994) explained as the visual system extrapolating motion to make up for its own delay. A rival account holds that the brain instead revises its percept after the fact (Eagleman & Sejnowski 2000). Either way, the "present" a brain experiences is a reconstruction across its own Stilte. **Grade: Correspondence** (mechanism contested).

---

## 4. Where the Speelgoed Meets Resistance

**4.1 Trouw from one brain.** *Constraint.* Trouw can only be measured on a pair (§3.2). Single-brain neurochemistry describes one member's side of the bond.

**4.2 Exponential escape versus power-law forgetting.** *Tension, resolved by a known mechanism.* The Van Motor's law gives exponential loss for a single bond. Forgetting curves follow power laws. A spread of Greep across memory traces turns one into the other, as averaged exponentials are known to do (§2.5). The Speelgoed's specific reading of the exponent is untested.

**4.3 Diepte "falls with speaking" (§II).** *Open.* No neural or behavioural finding corresponds to this rule. It is neither supported nor refuted here.

**4.4 Gewenning as an accumulator.** *Partial.* In the delta rule, the target λ is set by the outcomes on each occasion. The Speelgoed's Gewenning accumulates over the bond's history. The two match if Gewenning is read as the running level that experience supports (§2.2), but the Speelgoed does not specify how Z itself updates.

---

## 5. Open Problems

1. **Tijd.** No mapping is attempted, as at the other Octaven (*Cosmic Octaaf* §5, item 8).
2. **The strength of a Vonk.** The Speelgoed gives a crossing's Energie as ¼·(B − θ)², which grows with the square of the margin past the Drempel (§VIII.3). Does the felt strength of an insight, a decision, or a pleasure grow with the square of the evidence's margin past the criterion? This could be tested with confidence ratings against measured evidence.
3. **The forgetting exponent.** If §2.5 is right, the exponent of a forgetting curve measures how widely Greep is spread across the memories tested. Sets of memories held with more uniform strength should be forgotten more nearly exponentially.
4. **Synchrony and Trouw.** Does brain-to-brain synchrony build a bond, reflect one, or come from shared attention? Only experiments that manipulate synchrony can tell.
5. **Leven of the Zelf.** Is there any lasting neural marker of a fundamental change in identity?
6. **Creatie.** No mapping is attempted for the birth of something new from overflow: an idea, a skill, a relationship of its own.

---

## 6. Closing

At this Octaaf, the Speelgoed is tested where it was born, and where it is most tempting to cheat. This entry tries not to. It maps each primitive to one mechanism or measurement, never to a region that does many things, and it says where well-known findings have failed to replicate.

What remains is more striking than the first draft's brain map. The Echo is the standard rule for tracking a world through noise. Trouw learns by the delta rule, and Gevoel is its teaching signal. The Drempel is the criterion of every decision. Two people coordinating their movements show a real threshold, with flicker before it and a Marge after. A listener's brain carries a measurably delayed, partly anticipatory Echo of a speaker's. Suppression costs both people in a conversation. Grief keeps its bond, and in its loudest form keeps the bond's reward signal. Social bonds postpone death without removing it.

That is the *how*. The *why* is for the Speelgoed to say.

---

## Revision Note

This version replaces the first draft of 1 October 2026, titled "Mapping the PseudoScience Speelgoed onto Neuroscience". That draft had no references. The following were withdrawn or corrected:

- **One region for many primitives.** The default mode network was mapped to five primitives (Eigen, Diepte, Greep, Stilte, Zelf) and the anterior insula to five roles. Each primitive now maps to one computation or measurement.
- **Trouw as oxytocin and dopamine in one brain.** Replaced: Trouw is shared and must be measured on pairs (§3.2). The claims that oxytocin receptors are "critical for pair bonding" and that oxytocin reliably increases trust are withdrawn (Berendzen et al. 2023; Declerck et al. 2020).
- **The Vonk as a dopamine burst.** Corrected: the Vonk is the crossing, and dopamine prediction errors correspond to Gevoel (§2.2).
- **The Vermenigvuldiging inside one brain**, with one region as observer and another as observed. Withdrawn: the observed is the other system.
- **The mirror neuron system as the Echo.** Withdrawn: its role in understanding others is contested in humans (Hickok 2009).
- **Smaller claims withdrawn:**
  - "Closing the eyes suppresses default-mode connectivity" (studies disagree).
  - The anterior insula as "the integrator" of evidence.
  - A "neural signature of identity transformation".
  - Von Economo neurons as "the cellular substrate of the Drempel".
- **"Structurally identical … not merely metaphorical."** Replaced by graded mappings (§0.2). Identities are claimed only for update and decision rules, where the equations match.
- **Non-Speelgoed terms in the summary table.** Removed. The salience network and Von Economo neurons appeared as if they were primitives.

A check of every reference on 1 October 2026 corrected the timing of the insight signal, which preceded the button press rather than awareness (§3.4), and which of two studies found lower rapport (§3.6). It also described the grief studies more precisely (§3.7), credited the motion-extrapolation account to Nijhawan without calling it the first (§3.10), and completed two citations.

---

## References

American Psychiatric Association (2022). *Diagnostic and Statistical Manual of Mental Disorders* (5th ed., text revision). Washington, DC: APA.

Anderson, R. B., & Tweney, R. D. (1997). Artifactual power curves in forgetting. *Memory & Cognition*, 25, 724-730.

Baumgartner, T., Heinrichs, M., Vonlanthen, A., Fischbacher, U., & Fehr, E. (2008). Oxytocin shapes the neural circuitry of trust and trust adaptation in humans. *Neuron*, 58, 639-650.

Berendzen, K. M., et al. (2023). Oxytocin receptor is not required for social attachment in prairie voles. *Neuron*, 111(6), 787-796.e4. doi:10.1016/j.neuron.2022.12.011

Butler, E. A., Egloff, B., Wilhelm, F. H., Smith, N. C., Erickson, E. A., & Gross, J. J. (2003). The social consequences of expressive suppression. *Emotion*, 3, 48-67.

Carhart-Harris, R. L., et al. (2012). Neural correlates of the psychedelic state as determined by fMRI studies with psilocybin. *Proceedings of the National Academy of Sciences*, 109(6), 2138-2143.

Declerck, C. H., Boone, C., Pauwels, L., Vogt, B., & Fehr, E. (2020). A registered replication study on oxytocin and trust. *Nature Human Behaviour*, 4, 646-655. doi:10.1038/s41562-020-0878-x

Dikker, S., et al. (2017). Brain-to-brain synchrony tracks real-world dynamic group interactions in the classroom. *Current Biology*, 27(9), 1375-1380.

Eagleman, D. M., & Sejnowski, T. J. (2000). Motion integration and postdiction in visual awareness. *Science*, 287, 2036-2038.

Ernst, M. O., & Banks, M. S. (2002). Humans integrate visual and haptic information in a statistically optimal fashion. *Nature*, 415, 429-433.

Evstigneev, S. R., O'Connor, M.-F., Wilhelm, F. H., Blum, D., Slavich, G. M., & Seiler, A. (2026). Grief and bereavement: A pre-registered systematic review of neuroimaging studies. *Neuroscience and Biobehavioral Reviews*, 182, 106535. doi:10.1016/j.neubiorev.2025.106535

Fleming, S. M., & Lau, H. C. (2014). How to measure metacognition. *Frontiers in Human Neuroscience*, 8, 443.

Garfinkel, S. N., Seth, A. K., Barrett, A. B., Suzuki, K., & Critchley, H. D. (2015). Knowing your own heart: Distinguishing interoceptive accuracy from interoceptive awareness. *Biological Psychology*, 104, 65-74.

Gold, J. I., & Shadlen, M. N. (2007). The neural basis of decision making. *Annual Review of Neuroscience*, 30, 535-574.

Green, D. M., & Swets, J. A. (1966). *Signal Detection Theory and Psychophysics*. New York: Wiley.

Gündel, H., O'Connor, M.-F., Littrell, L., Fort, C., & Lane, R. D. (2003). Functional neuroanatomy of grief: An fMRI study. *American Journal of Psychiatry*, 160(11), 1946-1953.

Haken, H., Kelso, J. A. S., & Bunz, H. (1985). A theoretical model of phase transitions in human hand movements. *Biological Cybernetics*, 51, 347-356.

Hamilton, J. P., Farmer, M., Fogelman, P., & Gotlib, I. H. (2015). Depressive rumination, the default-mode network, and the dark matter of clinical neuroscience. *Biological Psychiatry*, 78(4), 224-230.

Hasson, U., Ghazanfar, A. A., Galantucci, B., Garrod, S., & Keysers, C. (2012). Brain-to-brain coupling: A mechanism for creating and sharing a social world. *Trends in Cognitive Sciences*, 16(2), 114-121.

Hickok, G. (2009). Eight problems for the mirror neuron theory of action understanding in monkeys and humans. *Journal of Cognitive Neuroscience*, 21(7), 1229-1243.

Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. *PLoS Medicine*, 7(7), e1000316.

Jung-Beeman, M., et al. (2004). Neural activity when people solve verbal problems with insight. *PLoS Biology*, 2(4), e97.

Kelso, J. A. S. (1984). Phase transitions and critical behavior in human bimanual coordination. *American Journal of Physiology: Regulatory, Integrative and Comparative Physiology*, 246, R1000-R1004.

Klass, D., Silverman, P. R., & Nickman, S. L. (Eds.) (1996). *Continuing Bonds: New Understandings of Grief*. Washington, DC: Taylor & Francis.

McClelland, J. L., McNaughton, B. L., & O'Reilly, R. C. (1995). Why there are complementary learning systems in the hippocampus and neocortex: Insights from the successes and failures of connectionist models of learning and memory. *Psychological Review*, 102(3), 419-457.

Moreno-Bote, R., Rinzel, J., & Rubin, N. (2007). Noise-induced alternations in an attractor network model of perceptual bistability. *Journal of Neurophysiology*, 98, 1125-1139.

Nijhawan, R. (1994). Motion extrapolation in catching. *Nature*, 370, 256-257.

Northoff, G., Heinzel, A., de Greck, M., Bermpohl, F., Dobrowolny, H., & Panksepp, J. (2006). Self-referential processing in our brain: A meta-analysis of imaging studies on the self. *NeuroImage*, 31, 440-457.

O'Connor, M.-F., Wellisch, D. K., Stanton, A. L., Eisenberger, N. I., Irwin, M. R., & Lieberman, M. D. (2008). Craving love? Enduring grief activates brain's reward center. *NeuroImage*, 42(2), 969-972.

Raichle, M. E., & Gusnard, D. A. (2002). Appraising the brain's energy budget. *Proceedings of the National Academy of Sciences*, 99(16), 10237-10239.

Ratcliff, R. (1978). A theory of memory retrieval. *Psychological Review*, 85(2), 59-108.

Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: Variations in the effectiveness of reinforcement and nonreinforcement. In A. H. Black & W. F. Prokasy (Eds.), *Classical Conditioning II: Current Research and Theory* (pp. 64-99). New York: Appleton-Century-Crofts.

Saxe, R., & Kanwisher, N. (2003). People thinking about thinking people: The role of the temporo-parietal junction in "theory of mind". *NeuroImage*, 19(4), 1835-1842.

Schmidt, R. C., Carello, C., & Turvey, M. T. (1990). Phase transitions and critical fluctuations in the visual coordination of rhythmic movements between people. *Journal of Experimental Psychology: Human Perception and Performance*, 16, 227-247.

Scholz, J. P., Kelso, J. A. S., & Schöner, G. (1987). Nonequilibrium phase transitions in coordinated biological motion: Critical slowing down and switching time. *Physics Letters A*, 123, 390-394.

Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, 275, 1593-1599.

Seth, A. K. (2013). Interoceptive inference, emotion, and the embodied self. *Trends in Cognitive Sciences*, 17(11), 565-573.

Stephens, G. J., Silbert, L. J., & Hasson, U. (2010). Speaker-listener neural coupling underlies successful communication. *Proceedings of the National Academy of Sciences*, 107(32), 14425-14430.

Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. *Death Studies*, 23(3), 197-224.

Wixted, J. T., & Ebbesen, E. B. (1991). On the form of forgetting. *Psychological Science*, 2(6), 409-415.

Wixted, J. T., & Ebbesen, E. B. (1997). Genuine power curves in forgetting: A quantitative analysis of individual subject forgetting functions. *Memory & Cognition*, 25, 731-739.

World Health Organization (2019). *International Classification of Diseases, 11th Revision (ICD-11)*. Geneva: WHO.

Young, L. J., & Wang, Z. (2004). The neurobiology of pair bonding. *Nature Neuroscience*, 7(10), 1048-1054.

Zamariola, G., Maurage, P., Luminet, O., & Corneille, O. (2018). Interoceptive accuracy scores from the heartbeat counting task are problematic: Evidence from simple bivariate correlations. *Biological Psychology*, 137, 12-17.

---
