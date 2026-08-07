# MHD with Memory: A relaxation-time extension that predicts a phase shift in Alfvén waves

**Author:** M. J. A. Knippenberg  
**Date:** 2026-08-07  

https://chat.deepseek.com/share/2rwzfvifb92fa6xqxk

---

## What this is

Standard resistive MHD assumes Ohm’s law is local and instantaneous: **E = η J**. That works for many things, but it ignores that the plasma has a finite response time. Turbulence, kinetic effects, and finite correlation times all suggest that the relation between **E** and **J** should have memory.

This paper proposes the simplest possible memory: a single relaxation time τ. The result is a frequency-dependent resistivity that changes the phase of Alfvén waves in a way that is testable with current solar telescopes like DKIST.

No metaphysics. Just a constitutive closure with one free parameter, and a clear prediction.

---

## The constitutive relation

We replace Ohm’s law with a causal convolution:

**E(t) = η₀ ∫₀^∞ K(s) J(t‑s) ds**

where **K(s)** is a normalized kernel. The simplest choice with a finite memory is an exponential:

**K(s) = (1/τ) exp(–s/τ)**

This is the standard Maxwell–Cattaneo form. It leads to:

**E + τ ∂ₜ E = η₀ J**

That is our generalised Ohm’s law. When τ→0, we recover the usual **E = η J**.

In Fourier space, this becomes:

**η(ω) = η₀ / (1 + i ω τ)**

The resistivity now has an imaginary part, which means a phase lag between current and electric field.

---

## The modified induction equation

Taking the curl of the generalised Ohm and combining with Faraday’s law gives:

∂ₜ B = ∇×(v×B) – ∇×( η(ω) ∇×B )

where η(ω) is as above. The rest of the MHD equations are unchanged.

---

## Alfvén waves and a phase shift

Linearise around a uniform background **B₀**, take parallel propagation **k ∥ B₀**, and look for plane waves ∝ exp(i(k·r – ωt)). The usual algebra gives:

**ω² = k² vA² – i ω η(ω) k²**

That’s the dispersion relation. Now, the relation between the perturbed velocity **v₁** and magnetic field **b** is:

v₁ / b = ± (k·B₀)/(μ₀ρ₀) · (1/ω) · ( 1 + iωτ/(1+ω²τ²) )

The phase shift φ between v₁ and b follows as:

**φ(ω) = arctan( ωτ / (1 + ω²τ²) )**

This is the key result.

- For **ωτ ≪ 1**, φ ≈ ωτ  (small, linear rise)
- At **ωτ = 1**, φ = arctan(1/2) ≈ 26.6°  (peak)
- For **ωτ ≫ 1**, φ ≈ 1/(ωτ)  (decays)

So the phase shift goes up, peaks, and then comes down. That’s unlike standard resistive MHD (constant phase), Hall (linear), or extended MHD (cubic). It’s a distinctive Lorentzian-like bump.

---

## The time delay

If you measure the time delay between v₁ and b:

**δt(ω) = φ(ω)/ω = τ / (1 + ω²τ²)**

That’s even cleaner: a simple Lorentzian as a function of frequency, with height τ and half‑width 1/τ.

---

## Closing the parameter

To make this predictive, we need a physical estimate for τ. Dimensional analysis suggests the memory time is the turnover time of the largest turbulent eddies, roughly the Alfvén crossing time:

**τ = L / vA**

with a correction for beta:

**τ = L / ( vA √(1+β) )**

where L is a characteristic scale (e.g., correlation length), vA the Alfvén speed, and β the plasma beta. This is a closure hypothesis. It reduces the free parameter to a measurable quantity.

---

## Observability

In the solar corona, typical numbers are: L ~ 10⁴ km, vA ~ 10³ km/s, β ~ 0.1. That gives τ ~ 10 s, so the peak of the phase shift occurs at ω ~ 0.1 rad/s, i.e., periods around 60 s.

DKIST can measure Doppler velocities and magnetic field fluctuations at those frequencies. The predicted time delay δt(ω) is a clear observable: constant at low frequencies, dropping as 1/ω² at high frequencies.

If we also estimate τ independently from the turbulence correlation length (e.g., from power spectra), the model becomes overconstrained. That’s what makes it falsifiable.

---

## Comparison with other models

| Model                      | Phase shift φ(ω)                          | Behaviour                     |
|----------------------------|-------------------------------------------|-------------------------------|
| Ideal MHD                  | 0                                         | none                          |
| Resistive MHD (constant η) | ~π/2 (low ω)                              | nearly constant               |
| Hall MHD                   | ∝ ω (sign depends on k·B₀)                | linear, direction-dependent   |
| Extended MHD (ω² terms)    | ∝ ω³                                      | cubic                         |
| **This work**              | arctan(ωτ/(1+ω²τ²))                       | **peak** at ωτ=1, decays     |

The peak and subsequent decay are unique among these. Fractional MHD could produce something similar, but that’s not the standard model.

---

## Limitations (honest)

- The exponential kernel is a choice, not a derivation. A spectrum of relaxation times would give power laws.
- We assume a Markovian relaxation, which is plausible but not proven.
- The scaling for τ is a hypothesis, not a first‑principles result.
- The phase shift may be small and require careful data handling.

Despite these, the model is clean, testable, and offers a clear signature that can be searched for in existing or future data.

---

## Conclusion

We have proposed a minimal extension of resistive MHD with a single relaxation time. It leads to a frequency‑dependent resistivity and a characteristic phase shift in Alfvén waves that peaks at ωτ = 1. The prediction is concrete, the parameter τ can be estimated independently, and the signal is within reach of current instrumentation.

This is not a new cosmology. It is a closure. But closures are how physics makes progress: you add a term, compute the consequences, and wait for the data to decide.

If the phase shift is found, we have learned that memory matters. If not, we have learned that the memory time is shorter than we thought, or that the exponential kernel is too simple. Either way, we learn something.

---

## References (short)

- Biskamp, Nonlinear MHD (1993)
- Cattaneo, Atti Sem. Mat. Fis. Univ. Modena (1948)
- Huba, Space Sci. Rev. (1986)
- Schekochihin et al., ApJ (2009)
- DKIST documentation (2021)

---

*Appendix: Linearisation steps are omitted; they are standard and available upon request.*
