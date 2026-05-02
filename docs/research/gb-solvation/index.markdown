---
layout: default
title: Generalized Born Solvation
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Generalized Born Solvation for Charge-Separated States</h1>

  <img src="{{ '/assets/img/research-gb.jpg' | relative_url }}" alt="Generalized Born solvation">

  <p>
    I am developing a state-specific solvation framework by incorporating the
    Generalized Born model into RCI-LC-DFTB. The goal is to describe
    photoinduced charge-separated states in donor--bridge--acceptor molecular
    systems under solvent environments.
  </p>

  <h2>Motivation</h2>

  <p>
    Charge-separated states are strongly stabilized by polar solvents.
    Therefore, a realistic description of photoinduced charge separation requires
    the inclusion of solvation effects. The Generalized Born model provides a
    practical way to include macroscopic solvent effects while keeping the
    calculation efficient.
  </p>

  <h2>Main Idea</h2>

  <p>
    The solvation contribution is mapped into the electronic-structure problem
    and solved self-consistently with the target-state charge distribution.
    This makes it possible to compare locally excited states and charge-separated
    states under different solvent polarization conditions.
  </p>

  <h2>Related Work</h2>

  <p>
    This project extends the RCI-LC-DFTB framework toward photoinduced
    charge-separated states in solution and is currently being prepared for
    journal submission.
  </p>
</div>
