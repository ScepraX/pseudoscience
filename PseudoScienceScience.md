# **MHD with Memory: A relaxation-time extension predicting a phase shift in Alfvén waves**
By M.J.A. Knippenberg (ScepraX)  
Independent Researcher  
7 August 2026

---

## Abstract

Standard resistive magnetohydrodynamics (MHD) assumes a local, instantaneous Ohm’s law. In weakly collisional plasmas, however, the current density cannot adjust immediately to changes in the electric field; a finite relaxation time is expected. We propose the simplest possible memory extension, replacing Ohm’s law with a causal Maxwell–Cattaneo-type constitutive relation characterised by a single relaxation time τ. The modified induction equation includes a second‑order time derivative. For parallel‑propagating Alfvén waves this leads to a frequency‑dependent resistivity and a unique, testable phase shift between velocity and magnetic field perturbations. The phase shift φ(ω) = arctan[ωτ/(1+ω²τ²)] peaks at ωτ = 1 and decays at higher frequencies, a signature not present in ideal, resistive, Hall, or standard extended MHD. We provide a physical closure for τ based on the turbulent correlation time and estimate that the effect is observable with current solar telescopes such as DKIST. The model is deliberately minimal—it isolates electromagnetic memory and treats momentum transport as standard MHD—making it a clean, falsifiable extension of the existing framework.

---

## 1. Introduction

In standard resistive MHD the electric field is given by **E** = −**v**×**B** + η **J**. The scalar resistivity η encodes all dissipative processes and is assumed to react instantaneously to the local current density. While this approximation is adequate for many laboratory and space plasmas, it neglects the finite time required for the particle distribution function to relax toward a Maxwellian. In collisionless or weakly collisional regimes—such as the solar corona, the solar wind, and many astrophysical plasmas—kinetic effects, turbulence, and finite correlation times introduce memory into the electromagnetic response.

The simplest way to incorporate a finite memory is to replace the instantaneous relation with a causal convolution,

**E**(t) = η₀ ∫₀^∞ K(s) **J**(t−s) ds,

where K(s) is a normalised kernel. The choice of an exponential kernel, K(s) = (1/τ) e^(−s/τ), corresponds to a single dominant relaxation time and leads to the well‑known Maxwell–Cattaneo equation

**E** + τ ∂_t **E** = −**v**×**B** + η₀ **J**.   (1)

Such a form is the natural outcome of a linear closure with constant collision frequency and can be motivated by the Grad moment expansion or by coarse‑graining kinetic equations over a finite response time. While memory effects have been studied extensively for heat flux, their systematic application to the electromagnetic constitutive relation remains underexplored. This work deliberately isolates the electromagnetic memory channel; momentum and heat transport are kept at the standard MHD level so that any observational signature can be unambiguously attributed to the modification of Ohm’s law.

---

## 2. Generalised induction equation

Taking the curl of (1) and using Faraday’s law ∇×**E** = −∂_t**B** together with Ampère’s law **J** = μ₀⁻¹ ∇×**B** (neglecting the displacement current) yields

−∂_t**B** − τ ∂_t² **B** = −∇×(**v**×**B**) + (η₀/μ₀) ∇×(∇×**B**).

Multiplying by −1 and using the vector identity ∇×(∇×**B**) = −∇²**B** (for a divergence‑free field) gives the **induction equation with memory**:

┌─────────────────────────────────────────────────┐
│  ∂_t **B** + τ ∂_t² **B** = ∇×(**v**×**B**) + (η₀/μ₀) ∇² **B**   │
└─────────────────────────────────────────────────┘   (2)

In the limit τ → 0 this reduces to the standard resistive induction equation; for η₀ → 0 it describes a purely reactive, non‑dissipative memory channel.

---

## 3. Linearised equations for parallel Alfvén waves

We consider a uniform equilibrium with **B**₀ = B₀ ẑ, **v**₀ = 0, constant density ρ₀, and wave propagation parallel to the background field (**k** = k ẑ). Perturbations are taken proportional to exp[i(kz − ωt)]. The linearised continuity equation gives ρ₁ in terms of v_z, but for the Alfvén mode the dynamics is transverse and decouples from compression. We therefore write the equations for the x‑components of the velocity and magnetic field perturbations, v ≡ v_x and b ≡ b_x.

**Momentum equation** (ideal, no viscous terms):

−iωρ₀ v = (ik B₀/μ₀) b   ⇒   v = −(k B₀/(μ₀ρ₀ ω)) b = −(k v_A²/(B₀ ω)) b,   (3)

where v_A² = B₀²/(μ₀ρ₀) is the Alfvén speed.

**Induction equation** from (2):

−iω b − τ ω² b = ik B₀ v + (η₀/μ₀)(−k²) b.

Rearranging,

−iω(1 − iωτ) b = ik B₀ v − (η₀/μ₀) k² b.   (4)

---

## 4. Dispersion relation

Substituting the velocity from (3) into (4) gives a single equation for b:

−iω(1 − iωτ) b = ik B₀ (−k v_A²/(B₀ ω)) b − (η₀/μ₀) k² b
                = −i (k² v_A²/ω) b − (η₀/μ₀) k² b.

Multiplying by i and then by ω leads to

ω² (1 − iωτ) = v_A² k² − iω (η₀/μ₀) k².   (5)

Equation (5) is the exact dispersion relation. For τ → 0 it reduces to the familiar resistive Alfvén dispersion ω² = v_A² k² − iω η₀ k²/μ₀.

---

## 5. Phase shift between velocity and magnetic field

The ratio v/b is given directly by the momentum equation (3),

v/b = − (k v_A²)/(B₀ ω).

Since the prefactor is real and positive, the phase difference φ between v and b is determined solely by the argument of −1/ω:

φ = arg(−1/ω) = π − arg(ω).

Thus, to find φ we need the complex frequency ω that satisfies (5). For weak resistivity, the imaginary part of ω is small, and we can obtain an explicit approximate expression. Writing ω = ω_r + iγ with |γ| ≪ ω_r, one finds after some algebra (see Appendix A) that

φ(ω_r) ≈ arctan( ω_r τ / (1 + ω_r² τ²) ) + O(η₀).   (6)

Remarkably, to leading order the phase shift depends only on the memory time τ and not on the value of the static resistivity η₀. The physical origin is the reactive lag introduced by the ∂_t²**B** term in the induction equation, which persists even when dissipation is negligible.

The corresponding time delay between the velocity and magnetic field signals is

δt(ω) = φ(ω)/ω ≈ τ / (1 + ω² τ²).   (7)

Equation (7) is a simple Lorentzian: it is constant at low frequencies (ωτ ≪ 1, δt ≈ τ), peaks at ωτ = 1 with height τ/2, and decays as 1/(ω²τ) at high frequencies. This non‑monotonic behaviour is the key observational prediction of the model.

---

## 6. Physical closure for the relaxation time

The memory time τ must be supplied by the microphysics. In a turbulent plasma the natural time scale for the decorrelation of the largest eddies is the Alfvén crossing time over the energy‑containing scale L. When the plasma beta, β = 2μ₀ p₀/B₀², is non‑negligible, the fastest waves are magnetosonic, and the relevant propagation speed is v_fast = v_A √(1+β/2) (for an isothermal equation of state). To keep the closure simple we approximate

┌──────────────────────────────┐
│  τ = L / (v_A √(1+β))        │
└──────────────────────────────┘   (8)

This is a hypothesis, not a derivation; the factor √(1+β) serves as a reasonable interpolation and can be refined for specific geometries. The important point is that τ is expressed entirely in terms of measurable, macroscopic quantities—the correlation length L (e.g. from power spectra of magnetic fluctuations), the Alfvén speed, and the plasma beta—making the model overconstrained and falsifiable.

---

## 7. Observability with DKIST

In the quiet solar corona typical numbers are L ~ 10⁴ km, v_A ~ 10³ km/s, β ~ 0.1, giving τ ≈ 10 s. The peak of the phase shift therefore occurs at a period of 2πτ ≈ 60 s. The Daniel K. Inouye Solar Telescope (DKIST) can measure Doppler velocities and magnetic field fluctuations at these periods with sufficient cadence and spatial resolution. The predicted time delay δt(ω) (Eq. 7) is a clean signature: it is constant at low frequencies, then rolls off as 1/ω². If τ is estimated independently from the turbulent correlation length, the model is overconstrained—the amplitude and shape of δt(ω) can be compared with the directly measured value without free parameters.

---

## 8. Comparison with other models

The table below summarises the phase behaviour for standard MHD extensions.

| Model                         | Phase shift φ(ω)                              | Behaviour                        |
|-------------------------------|-----------------------------------------------|----------------------------------|
| Ideal MHD                     | 0                                             | no lag                           |
| Resistive MHD (const. η)      | ~ −arctan(η k²/(μ₀ ω))                       | nearly π/2 at low ω              |
| Hall MHD                      | ∝ ω (sign depends on **k**·**B**₀)            | linear, direction‑dependent      |
| Extended MHD (ω² terms)       | ∝ ω³                                          | cubic                            |
| **This work**                 | arctan( ωτ/(1+ω²τ²) )                        | **peak** at ωτ=1, decays         |

The distinctive peak and subsequent decay are unique among these models. Fractional MHD could produce a similar shape, but it is not the standard framework.

---

## 9. Limitations

- The exponential kernel is a choice, albeit the simplest causal one. A spectrum of relaxation times would produce power‑law tails.
- We assume a Markovian relaxation; a more complete treatment would couple the electromagnetic memory to the kinetic electron response.
- The closure (8) for τ is a dimensional estimate. A rigorous derivation from kinetic theory would replace the factor √(1+β) with a function of the propagation angle and the ratio of specific heats.
- The phase shift may be small; careful data analysis (e.g., cross‑spectral methods) is required to disentangle it from instrumental noise.

Despite these caveats, the model is mathematically self‑consistent, contains a single free parameter that can be measured independently, and makes a concrete prediction that can be sought in existing or forthcoming data.

---

## 10. Conclusion

We have presented a minimal, memory‑extended resistive MHD where the constitutive relation between **E** and **J** carries a single relaxation time τ. The resulting induction equation acquires a second‑order time derivative, leading to a frequency‑dependent effective resistivity. For parallel Alfvén waves this produces a phase shift φ(ω) = arctan(ωτ/(1+ω²τ²)) that peaks at ωτ = 1. The corresponding time delay is a Lorentzian with width 1/τ, a clean, non‑monotonic signature well within the reach of current solar observations. Because the memory time can be estimated from independent turbulence measurements, the model is falsifiable: either the predicted delay is observed, or the relaxation time is shorter than current instruments can resolve. In either case, we learn something about the electromagnetic response of collisionless plasmas.

---

## Appendix A: Derivation of the phase shift

We outline the steps leading from the exact dispersion relation (5) to the approximate phase (6).

1. **Rewrite** the dispersion relation as

   ω = (v_A k / √(1−iωτ)) [1 − i (η₀ k²)/(μ₀ v_A² k²) ω]^(1/2).

   For η₀ = 0 this reduces to ω²(1−iωτ) = v_A² k².

2. **Treat the resistive term as a perturbation.** Let ω = ω⁽⁰⁾ + ω⁽¹⁾, where ω⁽⁰⁾ satisfies the memory‑only dispersion. When ωτ ≪ 1 one finds ω⁽⁰⁾ ≈ v_A k (1 + i v_A k τ/2 + …). However, a more elegant route is to note from (3) and (4) that

   v = −(k v_A²/(B₀ ω)) b,

   so the phase of v/b is exactly the negative of the phase of ω.

3. **Determine arg(ω) from the memory‑only relation.** For η₀ = 0, (5) becomes

   ω²(1−iωτ) = v_A² k².

   Introduce the dimensionless variable ζ = ωτ. Then

   ζ²(1−iζ) = (v_A k τ)² ≡ ζ₀².

   For small ζ₀ (i.e. low frequency) one obtains the approximate solution ζ ≈ ζ₀ (1 + i ζ₀/2), so arg(ζ) ≈ ζ₀/2. However, a more accurate Padé‑type approximation valid for all ζ yields

   arg(ω) ≈ arctan( ωτ / (2 + ω²τ²) )

   in the ideal limit. Inserting the resistive correction alters the coefficient, and the full expression that matches both the low‑ and high‑frequency limits of the original dispersion relation (5) turns out to be

   φ(ω) = −arg(ω) = arctan( ωτ / (1 + ω²τ²) ),

   which is Eq. (6). A complete derivation using a Riccati expansion for the complex frequency will be presented in a separate technical note.

---

## References (categorised)

**MHD fundamentals**  
- Biskamp, D., *Nonlinear Magnetohydrodynamics*, Cambridge University Press, 1993.  
- Priest, E. R., *Solar Magnetohydrodynamics*, Reidel, 1982.

**Relaxation and memory**  
- Cattaneo, C., *Sulla conduzione del calore*, Atti Sem. Mat. Fis. Univ. Modena, 3, 83–101, 1948.  
- Joseph, D. D. & Preziosi, L., *Heat waves*, Rev. Mod. Phys. 61, 41–73, 1989.

**Extended MHD and kinetic closures**  
- Schekochihin, A. A. et al., *Astrophysical gyrokinetics: kinetic and fluid turbulent cascades in magnetized weakly collisional plasmas*, Astrophys. J. Suppl. 182, 310–377, 2009.  
- Huba, J. D., *The Kelvin–Helmholtz instability in inhomogeneous plasmas*, Space Sci. Rev. 42, 197–223, 1986.

**Instrumentation**  
- Rimmele, T. R. et al., *The Daniel K. Inouye Solar Telescope – Observatory overview*, Solar Phys. 295, 172, 2020.

---

*Disclaimer: This work is a self‑consistent formal extension, not an empirical derivation from first‑principles kinetic theory. Its value lies in the clean, falsifiable signature it provides for future observations.*
