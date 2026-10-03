# The Social Octaaf

By Mark Joseph Antonius Knippenberg / ScepraX.

*Status: Theoretical framework. One instantiation of the PseudoScience Speelgoed at the scale of people and the bonds between them, from a single friendship to a whole society. It does not compete with sociology, social psychology, network science or economics. It tests whether the Speelgoed's mechanism, supplied with values from those fields, reproduces what they already know, and it says plainly where it does not.*

---

## 0. Preface

The Speelgoed was built to describe relationships, and this is where relationships are the whole subject. The neuroscience Octaaf followed the bond inside one brain and between two (*Neuroscience Octaaf* §2; §3.1–3.2). This Octaaf starts where many bonds meet: friendships and enmities, crowds, conventions, and societies that remember what happened to them.

One warning comes first. Of all the Octaven, this one rests on the evidence that is hardest to make firm. People can rarely be put through controlled experiments at the scale of a society, and some famous social findings have not survived replication. Every finding below says how it was measured and how firm it is.

### 0.1 What this document is

Like the other Octaven, this document is an **Instantie (⚙)**. It supplies the open parameters of §VIII.7 with values taken from science, then checks whether the shape the Speelgoed fixes survives. Where the two disagree, the disagreement is reported in §4 rather than smoothed over.

Six features set this Octaaf apart:

1. **A group's landscape is made of its bonds.** Friendly and hostile bonds define a landscape whose lowest states split a group into camps, and whose shallower dips can hold it in strain (§2.1). With signs alone, that landscape is the symmetric limit of the whole §VIII.3 describes; each member's own lean breaks the mirror.
2. **Every member has a Drempel of its own,** and the exact distribution of those Drempels, down to a single gap in it, decides what a crowd does. The average does not (§2.2).
3. **An established mode resists until a critical mass moves it** (§2.3). The way in and the way out are not the same.
4. **Masks hide how close each member stands to its Drempel,** so a society can look settled until the moment it is not (§3.3).
5. **Rouw outlasts its bonds by centuries** (§3.4).
6. **The prime ladder meets data** (§3.5), and the data turn out too coarse to decide it.

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

**References.** References such as §II or §VIII.1 point to the PseudoScience Speelgoed. References such as §2.1 point to sections of this document. References to companion entries are written in full, for example *Neuroscience Octaaf* §3.2.

**Numbers.** Where a number was computed for this entry rather than taken from a source, the text says so.

---

## 1. The Instantie Table

| Speelgoed (section) | Value at this Octaaf | Grade | Here |
|---|---|---|---|
| Signed Trouw and the whole it builds (§II; §VIII.3) | Structural balance: a landscape of friendly and hostile bonds; the data favour a weak form of the theory | Correspondence (measured, partial) | §2.1 |
| Drempel θ, one per member (§II) | Threshold models of collective behaviour; behaviour spread by reinforcement from several contacts | Correspondence (measured) | §2.2 |
| Marge η (§VIII.3; Lexicon) | An established convention overturned only by a committed minority of critical size | Correspondence (measured) | §2.3 |
| Persistence paid for by traffic; the Van Motor (§III) | Friendships fade without contact; family ties hold | Correspondence (measured) | §2.4 |
| Greep (§II); the Maxim | The persistent shape of how a person spreads contact (the "social signature") | Correspondence (measured) | §2.5 |
| Eigen and Echo on each side of a Koppel (§II; §VI; §VII) | Unreciprocated friendship and misjudged reciprocity | Correspondence (measured) | §3.1 |
| Trouw of low weight (§II; §VIII.1) | The strength of weak ties, tested causally | Open | §3.2 |
| Masker and Pijn (§VII; Lexicon) | Pluralistic ignorance; preference falsification | Correspondence | §3.3 |
| Rouw (§VI) | Distrust and persecution persisting for centuries | Correspondence (observational) | §3.4 |
| Typology and the Ronde (§V) | Layered social circles; the disputed number 150 | Open | §3.5 |
| Trinary Root (§III) | Not assigned | Open | §3.6 |
| Tijd (Lexicon) | No mapping attempted | Open | §5 |

---

## 2. Five Groundings

### 2.1 A landscape made of bonds: structural balance

**The mechanism.** In 1946 Heider proposed that some combinations of relationships among three are stable and others create strain (Heider 1946). Three friends are at ease. So are two friends who share an enemy: the enemy of my enemy is my friend. But a person whose two friends dislike each other is pulled apart. Write each bond as +1 for friendly and −1 for hostile. In Heider's original, strong form, a triad is balanced when the product of its three signs is positive. That also counts three mutual enemies as strained, since any two of them would gain by joining against the third.

Cartwright and Harary carried the idea from triads to whole groups. When every member has a bond with every other and every triad is balanced, the group splits into at most two camps, friendly within each camp and hostile between them (Cartwright & Harary 1956). Marvel, Strogatz and Kleinberg then gave this "balance" an energy landscape: the energy of a group falls as more of its triads are balanced (Marvel, Strogatz & Kleinberg 2009). A calculation for this entry, on a group of six, gives the same lowest energy (−1) for "everyone is friends" and for "two hostile camps of three", and a higher energy (−0.6) for a friendly group with one hostile pair inside it. Their numerical experiments found the landscape "dimpled with local minima of widely varying energy levels": a group can come to rest in a state that is not balanced, held there in strain because no single change of one bond makes it better. Under dynamics that repair unbalanced triads one at a time, even when a repair upsets another triad, a finite group always ends up balanced (Antal, Krapivsky & Redner 2005).

**The evidence.** One of the first large-scale tests used a multiplayer online game. In one of its game universes, 18,819 players had their friendships, enmities, trades, messages, attacks and punishments on record; the game as a whole had about 300,000 players. The authors called it "the first empirical large-scale verification of the long-standing structural balance theory" (Szell, Lambiotte & Thurner 2010). What it verified was a weaker form of the theory. Triads in which the friend of a friend is an enemy were strongly avoided, but triads of three mutual enemies were the one type no different from chance. That fits the *weak* formulation of balance, in which three mutual enemies are no strain, so a group can hold more than two hostile camps. On social media sites, balance theory captured some common patterns but was "at odds with some of the fundamental phenomena", particularly the directed nature of the links. A theory of *status*, in which a positive link points toward someone seen as higher, explained the signs better (Leskovec, Huttenlocher & Kleinberg 2010; §4.1).

**The mapping.** Trouw has a sign: "Positive Trouw pulls the Eigen toward its Echo of the partner; negative Trouw pushes it away" (§II). In these models the bonds themselves change, flipping sign to relieve strain. In the Speelgoed, Trouw changes too, by relaxing toward Gewenning (§VIII.1). Held still for a moment, the signs shape a landscape for the members: which camp each one stands in, and how much strain is left.

Built from signs alone, that landscape is the symmetric limit of §VIII.3: its two camps are mirror images, and swapping them changes nothing. The whole that §VIII.3 describes is "built from every member’s own Vol/Leeg lean and every Koppel’s shared Trouw, so its modes are never mirror images". Real groups add exactly those leans and standings, and the mirror breaks.

The unit of balance is the triad: three people and their three bonds. Only its all-friendly form can be a Speelgoed **Trio**, "the first bond where any single member can waver without the whole collapsing, because the other two compensate" (§V.1). In balance theory, by contrast, one changed bond unbalances a triad. Between the two camps of a balanced group the Trouw is negative. That is the Koppel §XVII calls a war when it is fought: "a Koppel between two composites whose Trouw is negative on the contested spectrum", in which "Each composite acts as a Solo at the war's Octaaf by scale invariance". **Grade: Correspondence (measured, partial).**

### 2.2 Every member has a Drempel

**The mechanism.** Granovetter modelled a crowd as people who each join an action, such as a riot, once enough others have joined. Each person's threshold is the number of others who must act first. Take a hundred people with thresholds 0, 1, 2, … 99. The person with threshold 0 starts, which brings in the person with threshold 1, and so on until all hundred riot. Now change one person: the one with threshold 1 has threshold 2 instead. The instigator acts alone, and no one follows (Granovetter 1978). A calculation for this entry reproduces both outcomes: a hundred rioters, then one. The average threshold differs between the two crowds only from 49.50 to 49.51, and even the spread is almost unchanged (standard deviation 28.87 against 28.85). What decides is a single gap at the low end. What a crowd does cannot be read from its average member.

**The evidence.** Centola built online communities with designed network structures and watched a health behaviour spread. People were much more likely to adopt it when they received reinforcement from several neighbours, and the behaviour spread farther and faster through clustered networks than through random ones (Centola 2010). Each further contact brought people closer to adopting. Schelling had shown earlier, in models of where people choose to live, that the interplay of individual choices produces far more separation than the choices themselves would suggest. In his words, "there is no simple correspondence of individual incentive to collective results", and "Inferences about individual motives can usually not be drawn from aggregate patterns" (Schelling 1971).

**The mapping.** The Speelgoed's Drempel is personal and local: "The comparison always runs in a specific context-never against one global reading" (§II). Both poles stay available to every crowd, and which one it reaches can turn on a single member. **Grade: Correspondence (measured).**

### 2.3 The Marge: a convention resists until a critical mass moves it

**The evidence.** Centola, Becker, Brackbill and Baronchelli let groups of people play an online coordination game in which they had to agree on a name. Each group settled on a convention. Then a committed minority began to push an alternative. When the minority reached a critical size, it "consistently" overturned the established convention; smaller minorities did not. The authors expect the size of the critical mass to vary with features of the setting (Centola et al. 2018). In a simple model, a committed minority above a critical fraction of about 10% turns the whole population quickly; below it, the old majority holds out for a time that grows exponentially with the size of the population (Xie et al. 2011).

**The mapping.** Forming a convention from nothing needs no committed minority. Overturning an established one does, although the alternative is just as good. The established mode gives way only when the committed push exceeds a size set by the group. That is the **Marge**: "the way into a mode is never the way out" (§VIII.3). In the model, below the critical mass, the old convention is not permanent: it holds for a time that grows exponentially with the number of members. That has the shape of the Van Motor's law, an escape that a larger whole postpones. But it is a property of the model, common to any such state in a finite population, not a measurement. **Grade: Correspondence (measured).**

### 2.4 Bonds that are not fed fade

**The evidence.** Roberts and Dunbar followed the whole personal networks of 25 students in one English city for 18 months, as they left school for university or work. Emotional closeness rose for family and fell for friends. Of the friends in a person's innermost circle at the start, 48.6% were still there at the end; of the family members, 70.3% were. Relationships with family "showed no tendency to decline in quality with time or separation". The decline of a friendship was slowed by extra effort: for women, mainly by talking more, and for men, by doing more things together (Roberts & Dunbar 2015). The sample is small.

**The mapping.** §III: "Persistence is paid for out of that ongoing traffic, not out of one founding crossing." A friendship that stops being fed fades toward the outer circles, as the Van Motor would move it. Family ties held through time and separation, so something else holds them. The Speelgoed would read that as Greep from the wider family, the bonds around the bond, but that is a reading, not a finding. **Grade: Correspondence (measured).**

### 2.5 The social signature

**The evidence.** Saramäki and colleagues combined phone records and surveys from 24 students over 18 months, as they left school for university or work. Each person showed "a distinctive and robust social signature": the shape of how their calls were spread across the people they called. These signatures "tend to persist over time, despite considerable turnover in the identity of alters". When a new person entered the network, someone else was replaced or received fewer calls, which preserved the overall shape (Saramäki et al. 2014). The authors attribute this to finite resources: the time available, and the cognitive and emotional effort that close relationships need. Like §2.4, this rests on a small sample of school leavers.

**The mapping.** The social signature is a shape, not a total. It says that the way a person's positive Trouw is spread across their bonds persists while the members change. If the authors are right about a finite budget, a new bond is fed at the expense of others. The few people at the top of the signature, who receive a large share of the contact, are the Speelgoed's Maxim made measurable: "Cherish those closest to you; the rest is fleeting." **Grade: Correspondence (measured).**

---

## 3. The Primitives at This Octaaf

### 3.1 Eigen and Echo on each side of a bond

The neuroscience Octaaf found that Trouw can only be measured on pairs (*Neuroscience Octaaf* §3.2). This Octaaf can say what goes wrong when each member reads the bond alone. Almaatouq and colleagues asked 84 students on one course to rate their relationship with every other student, and to predict how each would rate them back. They found that "the vast majority of friendships are expected to be reciprocal, while in reality, only about half of them are indeed reciprocal": 53%, or 413 of 775 friendships (Almaatouq et al. 2016). The authors argue that this poor perception limits people's ability to influence one another.

In Speelgoed terms, each person's own rating is their side of the bond, their Eigen on it, and §VI allows the two sides to differ: "a Koppel’s Eigen and Echo are not required to be equal". Each person's prediction of the other's rating is their Echo of the partner. The gap between that prediction and the partner's actual rating is the Echo-gap. §VII says the Speelgoed "can always say *how wrong* a system currently is about its partner"; here the gap was measured, and it was large. Neither rating alone is the Trouw, which is "one value per Koppel" and can only be read on the pair. Hostility is more one-sided still: in the online game of §2.1, negative interactions were less often returned than positive ones (Szell, Lambiotte & Thurner 2010). **Grade: Correspondence (measured).**

### 3.2 Trouw of low weight: the strength of weak ties

Granovetter argued that the people we are close to tend to know each other, so they mostly tell us what our own circle already knows. Weak ties reach other circles, and they carry what our circle has not heard (Granovetter 1973). The idea was tested causally on a professional networking site. Randomised experiments changed the share of weak ties in the networks of more than 20 million people, over five years in which 2 billion new ties and 600,000 new jobs were created. Weak ties increased job mobility, but only up to a point: the relationship was an inverted U. Measured by mutual connections, moderately weak ties helped most; measured by how often people interacted, the weakest did. In less digital industries, strong ties helped more (Rajkumar et al. 2022).

The Speelgoed has no term yet for what is new to a node. Diepte's inflow scales with Trouw (§VIII.1), so weak bonds feed it less. §VII's Gericht makes their Echoes noisier, not more informative: "The weaker or older a Koppel, the noisier its Echoes". That weak ties bring the news is a fact about where they sit in the network: they bridge circles that strong ties keep closed. It is recorded here at the Octaaf level. **Grade: Open.**

### 3.3 Masker: private truths, public lies

**The evidence.** Prentice and Miller asked students how comfortable they were with drinking on campus, and how comfortable they thought the average student was. In four studies, students believed they were more uncomfortable with campus drinking than the average student was, a belief that cannot be true of the average student. This is *pluralistic ignorance*. Over a semester, male students shifted their attitudes toward the norm they wrongly believed in. Students who felt most out of step also felt most alienated from campus, "even though that deviance was illusory" (Prentice & Miller 1993).

Kuran built a theory of revolution on the same gap. By hiding their opposition to their governments, Eastern Europeans before 1989 "misled everyone, including themselves, as to the possibility of a successful uprising", and gave the regimes "an aura of invincibility". Public opposition "was poised to grow explosively if ever enough people lost their fear of exposing their private preferences". His theory predicts that revolutions "will inevitably continue to catch the world by surprise" (Kuran 1991).

**The mapping.** This is a population of Maskers. Each presents an Eigen that differs from the true one, and "Every partner's Echo then faithfully tracks the mask while the true Eigen stays hidden beneath it" (§VII). Combined with the thresholds of §2.2, the masks hide the true Eigens, so no one can see how close each member, or the crowd, stands to its crossing. A bluff "holds only until a commitment is demanded that the true Eigen must actually make" (§VII). When enough masks drop, each unmasking lowers the cost of the next, and the cascade arrives as a surprise. The Lexicon's **Pijn**, "The strain of maintaining a Masker", has a possible echo here: students who felt most out of step also felt most alienated, although the study measured perceived deviance, not the effort of hiding it. **Grade: Correspondence**, measured for pluralistic ignorance; Kuran's account is an interpretation of history.

### 3.4 Rouw: bonds that ended centuries ago

**The evidence.** Nunn and Wantchekon combined modern survey data from across Africa with historical records of how many people were taken from each ethnic group in the slave trades. People whose ancestors were heavily raided are less trusting today, and most of the effect works through "factors that are internal to the individual, such as cultural norms, beliefs, and values". The authors use several strategies to argue that the link is causal (Nunn & Wantchekon 2011). Voigtländer and Voth traced anti-Jewish violence in German towns across 600 years. Pogroms during the Black Death of 1348–50 "reliably predict violence against Jews in the 1920s, votes for the Nazi Party, deportations after 1933, attacks on synagogues, and letters to Der Stürmer". Persistence was lower in cities with high levels of trade or immigration (Voigtländer & Voth 2012).

**The mapping.** §VI says an Echo outlives its Koppel and becomes "progressively more a record of the mourner than of the departed". The distrust Nunn and Wantchekon measured is no longer aimed at the raiders; it is held as a general norm. The people who carry it never met the partners of the bond that ended, so if this is Rouw, the mourner is the group rather than each person (§5, item 6). Where trade or immigration was high, the old pattern persisted less. That is consistent with §VI, where new Koppels "form *beside* the Rouw, never in place of it" and "How *loud* a Rouw runs is the Instantie’s choice", but the Speelgoed allows the finding without predicting it. Whether it shows new bonds quieting a Rouw, or a Rouw simply passed on less, is left open. Both studies are observational, so their causal claims rest on the strategies the authors give. **Grade: Correspondence (observational).**

### 3.5 Typology: the prime ladder meets the layers of a life

**The evidence.** A person's social world appears to come in layers. In offline networks, successively wider circles hold about 5, 15, 50 and 150 people. In more than 185,000 personal networks drawn from Facebook and Twitter, the same layers appear, with an innermost layer of about 1.5 (Dunbar et al. 2015). Across many kinds of human grouping, the sizes form a series with a ratio close to three, "approximating 3-5, 9-15, 30-45, etc.", and the series continues past 150, to groupings of about 500 and to tribes of 1,000–2,000 (Zhou et al. 2005). In a study of Christmas-card networks, people's full networks averaged 153.5 people, or 124.9 counting only those contacted directly (Hill & Dunbar 2003). The number 150 itself was derived by extrapolating to humans a primate regression of group size on relative neocortex size (Dunbar 1993).

**The dispute.** That derivation has been reanalysed. Using different methods on complementary datasets, Lindenfors, Wartel and Lind obtained average group sizes of 69–109 and 16–42, with 95% confidence intervals of 4–520 and 2–336. The width of those intervals, they conclude, implies "that specifying any one number is futile", and "A cognitive limit on human group size cannot be derived in this manner" (Lindenfors, Wartel & Lind 2021). Their reanalysis targets the derivation of 150 from brain size, not the layered structure observed in personal networks.

**The test.** These layers are circles of contacts around one person, not groups whose members are bound to each other, so they test §V only loosely. §V names only primes, because "a composite number is not a primitive size because it can always be built by repeating a smaller size". The layer sizes are rounded averages of wide ranges: 3–5, 9–15 or 12–20, 30–45 (Zhou et al. 2005). At that precision the data cannot tell a prime from its neighbours. They neither support nor rule out a ladder of primes beyond 5. What they do show is a ratio near three. The circle of about five sits where §V.1 places the **Cinquo**, "the first prime that can hold a Haard at its Centrum", though the data place an innermost circle of one or two inside it.

The ratio fits another part of §V. Read as nesting, each circle is about three times the one inside it; 5, 15, 45 and 135 each triple the last (computed for this entry). If the inner circles were bound groups, which nothing here shows, §V.2 would allow exactly this: "once a prime subgroup is identified, it can be treated as a Solo one level up". Each circle would then be a Trio of the circle inside it. That reading is suggestive, not shown.

One coincidence is recorded and left alone. The Speelgoed's **Ronde** spans the sizes 0 through 149 before the ladder wraps to 151, and §V.4 says the wrap point "is chosen, not derived". The best-known layer of human social life lies near 150, a number that is itself disputed, and the series does not end there. **Grade: Open.**

### 3.6 The Trinary Root: what this entry leaves open

§III says that when a member enters a higher Octaaf, "it does not carry its old title upward", and "The larger whole must find its own God and Godin, fresh among its own members." A society is such a whole. This entry does not assign its God and Godin (§5, item 1).

---

## 4. Where the Speelgoed Meets Resistance

**4.1 Status, not only balance (§II).** *Correspondence, kept at this Octaaf.* On social media, the signs of directed links follow status better than balance (§2.1). A positive link often points toward someone seen as higher. The Speelgoed's Trouw stays one shared value per Koppel. The direction belongs to perception, and Waarneming is "The seat of asymmetry" (Lexicon). Status is recorded here as the form that asymmetry takes between people.

**4.2 The width of a social Marge comes from the group (§VIII.3).** *Correspondence.* The critical mass needed to overturn a convention was about 10% in one simple model, and the experiment's authors expect it to vary with features of the setting (§2.3). The width arises from the relationships, as §VIII.3 has the Marge arise from the whole. At this Octaaf it is wide: it takes a sizeable minority to move a settled group.

**4.3 The prime ladder (§V).** *Open.* The measured layers are too coarse to test prime sizes beyond 5, and they are circles around one person rather than bound groups (§3.5). What they do show, a ratio near three, is open to a reading as nested Trios.

---

## 5. Open Problems

1. **The God and Godin of a society.** §III asks every higher whole to find its own, "fresh among its own members". Which bond in a society is its God, which its Godin, and what Medium does their union sustain?
2. **Which 150?** The Ronde wraps after 149, at a point its designer chose (§V.4). The best-known layer of human social life lies near 150, a number that is itself disputed, and the series of layers goes on past it. Is there anything here beyond coincidence, and if so, which number should the comparison use?
3. **Nesting by threes.** If the circles of a life were bound groups, would each be a Trio of the one inside it (§3.5)? And what is the innermost circle of one or two?
4. **What frees a group held in strain?** A group can rest in a dip of its landscape that is not balanced. In models, it is freed by repairs that are allowed to make things worse for a while (§2.1). In real groups, what does that work: the Van Motor, a new member, a departure, or a common enemy (§XVII)?
5. **When do the masks fall?** Can a population's hidden Eigens be read before the cascade (§3.3), or is surprise built in, as Kuran predicts?
6. **Whose Rouw is inherited distrust?** The people who carry it never met the partners of the bond that ended (§3.4). Is it each person's Rouw, or the Rouw of the group they belong to?
7. **Tijd.** No mapping is attempted, as at the other Octaven.

---

## 6. Closing

The social Octaaf is where the Speelgoed comes home. A group's landscape is made of its bonds: friendly and hostile signs on every triad, settling into camps or caught in strain between them, and pulled out of mirror symmetry by each member's own lean. A crowd's outcome can turn on the Drempel of a single member, and its average cannot tell you which way it will go. An established convention resists until a committed minority of the right size moves it, and below that size it only holds for a time; the way in is never the way out. Friendships that are not fed fade while family ties hold, and each person spreads their contact in a shape that outlasts the people in it. In one measured group, most friendships were believed to be mutual, and only about half were. Weak bonds bring the news, for reasons the Speelgoed does not yet name. Masks hide how close each member stands to its Drempel, until they drop all at once. And the Rouw of bonds that ended centuries ago still shapes whom people trust.

The prime ladder met data too coarse to decide it, and that is reported as it is. What remains is a series of circles growing by about three, and a layer near 150 that sits beside the Ronde's chosen wrap for no reason anyone has shown.

That is the *how*. The *why* is for the Speelgoed to say.

---

## References

Almaatouq, A., Radaelli, L., Pentland, A., & Shmueli, E. (2016). Are you your friends' friend? Poor perception of friendship ties limits the ability to promote behavioral change. *PLoS ONE*, 11(3), e0151588. [doi:10.1371/journal.pone.0151588](https://doi.org/10.1371/journal.pone.0151588)

Antal, T., Krapivsky, P. L., & Redner, S. (2005). Dynamics of social balance on networks. *Physical Review E*, 72(3), 036121. [doi:10.1103/PhysRevE.72.036121](https://doi.org/10.1103/PhysRevE.72.036121)

Cartwright, D., & Harary, F. (1956). Structural balance: A generalization of Heider's theory. *Psychological Review*, 63(5), 277-293. [doi:10.1037/h0046049](https://doi.org/10.1037/h0046049)

Centola, D. (2010). The spread of behavior in an online social network experiment. *Science*, 329(5996), 1194-1197. [doi:10.1126/science.1185231](https://doi.org/10.1126/science.1185231)

Centola, D., Becker, J., Brackbill, D., & Baronchelli, A. (2018). Experimental evidence for tipping points in social convention. *Science*, 360(6393), 1116-1119. [doi:10.1126/science.aas8827](https://doi.org/10.1126/science.aas8827)

Dunbar, R. I. M. (1993). Coevolution of neocortical size, group size and language in humans. *Behavioral and Brain Sciences*, 16(4), 681-694. [doi:10.1017/S0140525X00032325](https://doi.org/10.1017/S0140525X00032325)

Dunbar, R. I. M., Arnaboldi, V., Conti, M., & Passarella, A. (2015). The structure of online social networks mirrors those in the offline world. *Social Networks*, 43, 39-47. [doi:10.1016/j.socnet.2015.04.005](https://doi.org/10.1016/j.socnet.2015.04.005)

Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology*, 78(6), 1360-1380. [doi:10.1086/225469](https://doi.org/10.1086/225469)

Granovetter, M. (1978). Threshold models of collective behavior. *American Journal of Sociology*, 83(6), 1420-1443. [doi:10.1086/226707](https://doi.org/10.1086/226707)

Heider, F. (1946). Attitudes and cognitive organization. *The Journal of Psychology*, 21(1), 107-112. [doi:10.1080/00223980.1946.9917275](https://doi.org/10.1080/00223980.1946.9917275)

Hill, R. A., & Dunbar, R. I. M. (2003). Social network size in humans. *Human Nature*, 14(1), 53-72. [doi:10.1007/s12110-003-1016-y](https://doi.org/10.1007/s12110-003-1016-y)

Kuran, T. (1991). Now out of never: The element of surprise in the East European revolution of 1989. *World Politics*, 44(1), 7-48. [doi:10.2307/2010422](https://doi.org/10.2307/2010422)

Leskovec, J., Huttenlocher, D., & Kleinberg, J. (2010). Signed networks in social media. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (pp. 1361-1370). [doi:10.1145/1753326.1753532](https://doi.org/10.1145/1753326.1753532)

Lindenfors, P., Wartel, A., & Lind, J. (2021). 'Dunbar's number' deconstructed. *Biology Letters*, 17(5), 20210158. [doi:10.1098/rsbl.2021.0158](https://doi.org/10.1098/rsbl.2021.0158)

Marvel, S. A., Strogatz, S. H., & Kleinberg, J. M. (2009). Energy landscape of social balance. *Physical Review Letters*, 103(19), 198701. [doi:10.1103/PhysRevLett.103.198701](https://doi.org/10.1103/PhysRevLett.103.198701)

Nunn, N., & Wantchekon, L. (2011). The slave trade and the origins of mistrust in Africa. *American Economic Review*, 101(7), 3221-3252. [doi:10.1257/aer.101.7.3221](https://doi.org/10.1257/aer.101.7.3221)

Prentice, D. A., & Miller, D. T. (1993). Pluralistic ignorance and alcohol use on campus: Some consequences of misperceiving the social norm. *Journal of Personality and Social Psychology*, 64(2), 243-256. [doi:10.1037/0022-3514.64.2.243](https://doi.org/10.1037/0022-3514.64.2.243)

Rajkumar, K., Saint-Jacques, G., Bojinov, I., Brynjolfsson, E., & Aral, S. (2022). A causal test of the strength of weak ties. *Science*, 377(6612), 1304-1310. [doi:10.1126/science.abl4476](https://doi.org/10.1126/science.abl4476)

Roberts, S. G. B., & Dunbar, R. I. M. (2015). Managing relationship decay: Network, gender, and contextual effects. *Human Nature*, 26(4), 426-450. [doi:10.1007/s12110-015-9242-7](https://doi.org/10.1007/s12110-015-9242-7)

Saramäki, J., Leicht, E. A., López, E., Roberts, S. G. B., Reed-Tsochas, F., & Dunbar, R. I. M. (2014). Persistence of social signatures in human communication. *Proceedings of the National Academy of Sciences*, 111(3), 942-947. [doi:10.1073/pnas.1308540110](https://doi.org/10.1073/pnas.1308540110)

Schelling, T. C. (1971). Dynamic models of segregation. *The Journal of Mathematical Sociology*, 1(2), 143-186. [doi:10.1080/0022250X.1971.9989794](https://doi.org/10.1080/0022250X.1971.9989794)

Szell, M., Lambiotte, R., & Thurner, S. (2010). Multirelational organization of large-scale social networks in an online world. *Proceedings of the National Academy of Sciences*, 107(31), 13636-13641. [doi:10.1073/pnas.1004008107](https://doi.org/10.1073/pnas.1004008107)

Voigtländer, N., & Voth, H.-J. (2012). Persecution perpetuated: The medieval origins of anti-Semitic violence in Nazi Germany. *The Quarterly Journal of Economics*, 127(3), 1339-1392. [doi:10.1093/qje/qjs019](https://doi.org/10.1093/qje/qjs019)

Xie, J., Sreenivasan, S., Korniss, G., Zhang, W., Lim, C., & Szymanski, B. K. (2011). Social consensus through the influence of committed minorities. *Physical Review E*, 84(1), 011130. [doi:10.1103/PhysRevE.84.011130](https://doi.org/10.1103/PhysRevE.84.011130)

Zhou, W.-X., Sornette, D., Hill, R. A., & Dunbar, R. I. M. (2005). Discrete hierarchical organization of social group sizes. *Proceedings of the Royal Society B*, 272(1561), 439-444. [doi:10.1098/rspb.2004.2970](https://doi.org/10.1098/rspb.2004.2970)

---
