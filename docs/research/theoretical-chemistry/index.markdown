---
layout: default
title: Theoretical Chemistry
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Theoretical Chemistry</h1>

  <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="Theoretical chemistry">

  <p>
    My Ph.D. research focuses on the development of efficient electronic-structure
    methods for describing charge-transfer and charge-separated states in large
    molecular systems. In particular, I work on extensions of density-functional
    tight binding (DFTB), aiming to retain the efficiency of semi-empirical quantum
    chemistry while improving its ability to describe electronic states with strong
    charge localization or charge transfer.
  </p>

  <h2>Research Motivation</h2>

  <p>
    Charge transfer is a key process in molecular electronics, molecular wires,
    donor--bridge--acceptor systems, and photoactive molecular materials. However,
    accurately describing one-electron transfer remains difficult for standard
    electronic-structure methods. Conventional approximate DFT may suffer from
    self-interaction error and insufficient static correlation, while standard DFTB
    inherits many of these limitations because it is designed as an efficient
    approximation to DFT.
  </p>

  <p>
    Long-range corrected DFTB improves the description of long-range charge-transfer
    phenomena, but it is still not enough when one needs to explicitly describe
    charge-localized configurations and their mixing. This motivated me to develop
    an extended DFTB-based framework that can treat different charge-localized states
    and their interactions in a more physically transparent way.
  </p>

  <h2>RCI-LC-DFTB</h2>

  <p>
    I developed a restriction-based configuration interaction approach based on
    LC-DFTB, abbreviated as RCI-LC-DFTB. The basic idea is to generate several
    charge-localized single-determinant configurations by applying charge restrictions
    to selected molecular fragments. These configurations are then used as a
    non-orthogonal diabatic-like basis and mixed through a CI-like generalized
    eigenvalue problem.
  </p>

  <p>
    Instead of imposing hard charge constraints with Lagrange multipliers, the method
    uses a penalty-function approach. This makes the implementation relatively simple
    and flexible, because the charge distribution can be guided toward a target value
    without introducing another layer of self-consistent optimization. The resulting
    configurations represent physically meaningful charge-localized states, while the
    CI step recovers their electronic coupling and resonance.
  </p>

  <h2>External Electric Field</h2>

  <p>
    One important application of this framework is the study of field-induced charge
    transfer. External electric fields are introduced at the CI level, which allows the
    method to describe how charge localization, electron transfer, and state mixing
    change under an applied bias. This is particularly useful for molecular wires,
    molecular switches, and other systems where charge redistribution is controlled
    by an external field.
  </p>

  <h2>Solvation and Charge-Separated States</h2>

  <p>
    I am currently extending this framework to photoinduced charge-separated states
    in solution. Charge-separated states are often strongly stabilized by polar
    solvents, so solvation effects are essential for realistic modeling. To address this
    issue, I incorporate a Generalized Born solvation model into RCI-LC-DFTB and
    solve the electronic state and solvent response self-consistently for target states.
  </p>

  <p>
    This direction is motivated by the fact that my main scientific target is not
    solvation itself, but charge-separated states. Solvation is introduced because
    charge-separated states in real molecular systems are usually formed and observed
    in solution. The goal is to establish an efficient method that can describe large
    donor--bridge--acceptor systems while retaining an electronic-structure picture
    of charge localization, state mixing, and solvent stabilization.
  </p>

  <h2>Related Publications</h2>

  <p>
    <strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa.
    “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">
    A Restriction-Based Configuration Interaction Approach Based on LC-DFTB:
    An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.”
    <em>Journal of Chemical Theory and Computation</em>,
    <strong>21</strong>, 12592–12600, 2025.
  </p>

  <p>
    <strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa.
    “<a href="https://chemrxiv.org/doi/full/10.26434/chemrxiv.15002660/v1" target="_blank">
    Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for
    Photoinduced Charge-Separated States</a>.”
    <em>ChemRxiv</em>, preprint, 2026.
  </p>
</div>