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
    My Ph.D. research focuses on developing efficient electronic-structure methods
    for charge-transfer and charge-separated states in large molecular systems.
    I mainly work on extensions of density-functional tight binding (DFTB), aiming
    to retain its computational efficiency while improving its ability to describe
    strongly charge-localized electronic states.
  </p>

  <h2>Research Motivation</h2>

  <p>
    Charge transfer is central to molecular wires, donor-bridge-acceptor systems,
    and photoactive molecular materials. However, standard DFT and DFTB often have
    difficulties in describing one-electron transfer because of self-interaction error
    and insufficient treatment of static correlation. This motivated me to develop
    a DFTB-based framework that can explicitly handle charge-localized states and
    their electronic coupling.
  </p>

  <h2>RCI-LC-DFTB</h2>

  <p>
    I developed RCI-LC-DFTB, a restriction-based configuration interaction approach
    built on LC-DFTB. The method generates charge-localized configurations by applying
    fragment charge restrictions, and then mixes these non-orthogonal configurations
    through a CI-like generalized eigenvalue problem. This provides an efficient way
    to describe charge localization, charge resonance, and state mixing in large systems.
  </p>

  <h2>External Electric Field</h2>

  <p>
    External electric fields are introduced at the CI level, enabling direct observation
    of field-induced single-electron transfer between molecular fragments. Importantly,
    this is achieved through charge-localized configuration mixing, without relying on
    spin-symmetry breaking or introducing spin contamination.
  </p>

  <h2>Solvation and Charge-Separated States</h2>

  <p>
    I am extending this framework to photoinduced charge-separated states in solution
    by incorporating a Generalized Born solvation model into RCI-LC-DFTB. Since
    charge-separated states are strongly stabilized by polar solvents, this extension
    aims to describe realistic donor-bridge-acceptor systems while retaining a clear
    electronic-structure picture of charge localization, state mixing, and solvent
    stabilization.
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