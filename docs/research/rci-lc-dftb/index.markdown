---
layout: default
title: RCI-LC-DFTB
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>RCI-LC-DFTB</h1>

  <img src="{{ '/assets/img/research-rci.jpg' | relative_url }}" alt="RCI-LC-DFTB">

  <p>
    I developed a restriction-based configuration interaction approach based on
    long-range corrected density-functional tight-binding, LC-DFTB. This method
    is designed to describe field-induced charge transfer in molecular systems
    with a computational cost suitable for relatively large molecules.
  </p>

  <h2>Motivation</h2>

  <p>
    Charge-transfer states are important in molecular electronics, photoactive
    materials, and donor--bridge--acceptor systems. However, conventional
    electronic-structure methods can become expensive for large systems.
    My work aims to provide an efficient method that can capture essential
    charge-localized configurations and their interactions.
  </p>

  <h2>Main Idea</h2>

  <p>
    The method constructs charge-restricted electronic configurations and mixes
    them through a configuration-interaction-like generalized eigenvalue problem.
    This allows the description of single-electron transfer and field-induced
    charge redistribution within an efficient DFTB-based framework.
  </p>

  <h2>Related Publication</h2>

  <p>
    Ji Huang, Tim Kowalczyk, and Daisuke Yokogawa.
    “A Restriction-Based Configuration Interaction Approach Based on LC-DFTB:
    An Efficient Method for Field-Induced Charge Transfer in Molecular Systems.”
    <em>Journal of Chemical Theory and Computation</em>, 2025.
  </p>
</div>
