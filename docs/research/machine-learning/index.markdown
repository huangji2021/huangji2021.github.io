---
layout: default
title: Machine Learning
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Machine Learning for Quantum Chemistry</h1>

  <img src="{{ '/assets/img/research-ml.png' | relative_url }}" alt="Machine learning">

  <p>
    I am interested in combining machine learning with quantum chemistry to improve
    the accuracy, transferability, and usability of efficient electronic-structure
    methods. My current interest is not to replace quantum-chemical calculations,
    but to use machine learning as a lightweight correction or analysis layer on top
    of physically motivated methods.
  </p>

  <h2>Research Motivation</h2>

  <p>
    DFTB is attractive because it enables efficient calculations for molecular systems
    that are difficult to treat repeatedly with conventional DFT. However, some
    quantities obtained from standard DFTB workflows, such as Mulliken charges, can
    be sensitive to the basis representation and may deviate from density-based
    charge definitions at the DFT level. This limits their direct use in quantitative
    electrostatic analysis.
  </p>

  <p>
    Machine learning provides a practical way to improve such quantities while
    preserving the computational efficiency of DFTB. Instead of modifying the DFTB
    Hamiltonian or the self-consistent procedure, a trained model can be applied after
    the quantum-chemical calculation to correct selected observables.
  </p>

  <h2>ML Correction of DFTB Mulliken Charges</h2>

  <p>
    In one project, I developed a minimal machine-learning correction that maps
    DFTB Mulliken charges toward DFT-level MBIS populations. The model uses simple
    atom-wise features, including atomic identity, raw DFTB Mulliken charge, and local
    geometric descriptors. This design keeps the model lightweight and easy to combine
    with existing DFTB workflows.
  </p>

  <p>
    A key point of the method is charge conservation. After atom-wise prediction,
    the molecular total charge is enforced by a uniform per-molecule shift. This
    preserves the relative charge distribution predicted by the model while ensuring
    that the final charges satisfy the required total molecular charge exactly.
  </p>

  <h2>Post-processing Philosophy</h2>

  <p>
    The correction is applied strictly as a post-processing step after DFTB
    self-consistent convergence. It does not feed the corrected charges back into the
    DFTB Hamiltonian, and therefore does not change the total energy, gradients, or
    structural predictions. This separation is important because it keeps the physical
    meaning and computational workflow clear: DFTB provides the electronic structure,
    while machine learning improves selected derived quantities.
  </p>

  <h2>Broader Interest</h2>

  <p>
    More broadly, I am interested in using machine learning to assist theoretical
    chemistry in a controlled and interpretable way. Possible directions include
    data-driven corrections for semi-empirical methods, automatic analysis of charge
    transfer, efficient screening of molecular electronic properties, and machine
    learning models that remain closely connected to physical descriptors.
  </p>

  <h2>Related Publication</h2>

  <p>
    Ji Huang and Jiali Chen.
    “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">
    A minimal machine-learning correction of DFTB Mulliken charges towards
    DFT-level MBIS populations</a>.”
    <em>Molecular Physics</em>,
    Article 2657600, 2026.
  </p>
</div>