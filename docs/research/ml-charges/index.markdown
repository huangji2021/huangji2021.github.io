---
layout: default
title: Machine Learning Correction of DFTB Charges
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Machine Learning Correction of DFTB Mulliken Charges</h1>

  <img src="{{ '/assets/img/research-ml.jpg' | relative_url }}" alt="Machine learning correction of DFTB charges">

  <p>
    I developed a minimal machine-learning correction scheme for improving
    DFTB Mulliken charges toward DFT-level MBIS populations. The corrected
    charges are used as post-processing quantities and are not fed back into
    the DFTB Hamiltonian.
  </p>

  <h2>Motivation</h2>

  <p>
    Mulliken charges obtained from DFTB are computationally efficient but may
    show systematic deviations from higher-level population analyses. Machine
    learning provides a practical way to improve electrostatic populations while
    retaining the efficiency of DFTB calculations.
  </p>

  <h2>Main Idea</h2>

  <p>
    The model uses atomic identities, DFTB Mulliken charges, and local geometric
    descriptors to predict corrections toward DFT-level MBIS charges. Charge
    conservation is enforced by a per-molecule shift after prediction.
  </p>

  <h2>Related Publication</h2>

  <p>
    Ji Huang and co-workers.
    “A minimal machine-learning correction of DFTB Mulliken charges towards
    DFT-level MBIS populations.”
    <em>Molecular Physics</em>.
  </p>
</div>
