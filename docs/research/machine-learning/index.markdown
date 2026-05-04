---
layout: default
title: Machine Learning
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Machine Learning for Quantum Chemistry</h1>

  <img src="{{ '/assets/img/research-ml2.jpg' | relative_url }}" alt="Machine learning">

  <p>
    I am interested in using machine learning as a lightweight correction layer
    for quantum-chemical methods. Rather than replacing electronic-structure
    calculations, my goal is to combine physically motivated methods with
    data-driven models to improve selected molecular properties.
  </p>

  <h2>Research Motivation</h2>

  <p>
    DFTB enables efficient calculations for large molecular systems, but some
    derived quantities, such as Mulliken charges, may deviate from density-based
    DFT-level charge definitions. This limits their use in quantitative electrostatic
    analysis and motivates data-driven correction strategies.
  </p>

  <h2>ML Correction of DFTB Charges</h2>

  <p>
    I developed a minimal machine-learning correction that maps DFTB Mulliken
    charges toward DFT-level MBIS populations. The model uses atomic identity,
    raw DFTB Mulliken charge, and local geometric descriptors as atom-wise features,
    while enforcing exact molecular charge conservation after prediction.
  </p>

  <h2>Key Feature</h2>

  <p>
    The correction is applied strictly as a post-processing step after DFTB
    convergence. It does not feed corrected charges back into the DFTB Hamiltonian,
    and therefore does not modify the total energy, gradients, or structural
    predictions.
  </p>

  <h2>Broader Interest</h2>

  <p>
    More broadly, I am interested in interpretable machine-learning models for
    semi-empirical quantum chemistry, automatic analysis of charge transfer, and
    efficient screening of molecular electronic properties.
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