---
layout: default
title: Machine Learning
lang: en
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Machine Learning for Quantum Chemistry</h1>

  <img src="{{ '/assets/img/research-ml2.jpg' | relative_url }}" alt="Machine learning">

  <p>
    I developed a small machine-learning model that corrects the atomic charges reported by
    DFTB after the quantum chemical calculation has finished. It adds a lightweight
    post-processing step to a standard DFTB workflow.
  </p>

  <h2>Research Motivation</h2>

  <p>
    DFTB is fast enough for large systems, but it normally provides Mulliken charges from
    a minimal orbital basis. These can differ from density-based DFT charges such as MBIS.
    Standard DFTB does not have the real-space electron density needed to calculate MBIS
    charges directly.
  </p>

  <h2>ML Correction of DFTB Charges</h2>

  <p>
    The correction maps each DFTB Mulliken charge toward a DFT-level MBIS reference using
    only the element, the original charge, and inexpensive descriptors of the local molecular
    geometry. A final molecule-wise shift enforces exact conservation of the total charge.
  </p>

  <h2>Key Feature</h2>

  <p>
    Tests on QM9 showed that adding nonlinearity alone offered little improvement over an
    element-wise linear correction; information about the local chemical environment was
    the important ingredient, especially for carbon and nitrogen. The corrected values are
    produced at near-DFTB cost.
  </p>

  <h2>Broader Interest</h2>

  <p>
    The correction is applied only after DFTB convergence and does not change the Hamiltonian,
    energy, forces, or predicted structure. It is intended for electrostatic analysis and
    embedding. It works reliably for the tested neutral organic molecules; explicitly charged
    species remain more difficult because a purely local model cannot fully capture long-range
    charge redistribution.
  </p>

  <h2>Related Publication</h2>

  <p>
    <strong>Ji Huang</strong> and Jiali Chen.
    “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">
    A minimal machine-learning correction of DFTB Mulliken charges towards
    DFT-level MBIS populations</a>.”
    <em>Molecular Physics</em>,
    Article 2657600, 2026.
  </p>
</div>

<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
