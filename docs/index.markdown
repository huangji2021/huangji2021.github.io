---
layout: default
title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<section class="hero" id="home">
  <div class="hero-inner">
    <img class="profile-photo" src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Ji Huang">

    <h1>Ji Huang</h1>

    <p>
      Ph.D. student in computational and theoretical chemistry<br>
      Graduate School of Arts and Sciences, The University of Tokyo
    </p>

    <p>
      My research focuses on efficient electronic-structure methods for charge-transfer
      and charge-separated states in large molecular systems, especially LC-DFTB,
      RCI-LC-DFTB, solvation effects, and machine-learning-assisted quantum chemistry.
    </p>

    <div class="button-row">
      <a class="button" href="#cv">CV</a>
      <a class="button" href="#research">Research</a>
      <a class="button" href="#publications">Publications</a>
      <a class="button" href="mailto:huangjilulu@gmail.com">Email</a>
    </div>
  </div>
</section>

<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#research">Research</a>
  <a href="#publications">Publications</a>
  <a href="#cv">CV</a>
  <a href="#hobbies">Hobbies</a>
</nav>

<section class="section" id="research">
  <h2>Research</h2>

  <p class="lead">
    I develop and apply computational methods for describing charge transfer,
    charge separation, and environmental effects in molecular systems.
    My work aims to make electronic-structure calculations more efficient
    and applicable to larger molecular systems.
  </p>

  <div class="card-grid">
    <a class="card research-card" href="{{ '/research/rci-lc-dftb/' | relative_url }}">
      <img src="{{ '/assets/img/research-rci.jpg' | relative_url }}" alt="RCI-LC-DFTB">
      <div class="research-card-content">
        <h3>RCI-LC-DFTB</h3>
        <p>
          A restriction-based configuration interaction approach based on LC-DFTB
          for describing field-induced charge transfer in molecular systems.
        </p>
      </div>
    </a>

    <a class="card research-card" href="{{ '/research/gb-solvation/' | relative_url }}">
      <img src="{{ '/assets/img/research-gb.jpg' | relative_url }}" alt="Generalized Born solvation">
      <div class="research-card-content">
        <h3>Solvation Effects</h3>
        <p>
          Incorporation of the Generalized Born model into RCI-LC-DFTB to describe
          photoinduced charge-separated states in solution.
        </p>
      </div>
    </a>

    <a class="card research-card" href="{{ '/research/ml-charges/' | relative_url }}">
      <img src="{{ '/assets/img/research-ml.jpg' | relative_url }}" alt="Machine learning for quantum chemistry">
      <div class="research-card-content">
        <h3>Machine Learning</h3>
        <p>
          Machine-learning correction of DFTB Mulliken charges toward DFT-level
          MBIS populations and electrostatic properties.
        </p>
      </div>
    </a>
  </div>
</section>

<section class="section" id="publications">
  <h2>Publications</h2>

  <ol class="publication-list">
    <li>
      <strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa.
      “A Restriction-Based Configuration Interaction Approach Based on LC-DFTB:
      An Efficient Method for Field-Induced Charge Transfer in Molecular Systems.”
      <em>Journal of Chemical Theory and Computation</em>, 2025.
    </li>

    <li>
      <strong>Ji Huang</strong> and co-workers.
      “A minimal machine-learning correction of DFTB Mulliken charges towards
      DFT-level MBIS populations.”
      <em>Molecular Physics</em>.
    </li>

    <li>
      <strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa.
      “Self-Consistent Incorporation of the Generalized Born Model into
      RCI-LC-DFTB for Photoinduced Charge-Separated States.”
      Preprint, ChemRxiv.
    </li>
  </ol>
</section>

<section class="section" id="cv">
  <h2>Background</h2>

  <div class="timeline">
    <div class="timeline-item">
      <h3>Ph.D. Student</h3>
      <p>
        The University of Tokyo<br>
        Graduate School of Arts and Sciences<br>
        2023 - Present
      </p>
    </div>

    <div class="timeline-item">
      <h3>Computational Chemistry</h3>
      <p>
        Development of DFTB-based electronic-structure methods,
        CI-like approaches, solvation models, and machine-learning corrections.
      </p>
    </div>

    <div class="timeline-item">
      <h3>Programming</h3>
      <p>
        Fortran, Python, Bash, LaTeX, Git, Linux, and high-performance computing.
      </p>
    </div>
  </div>
</section>

<section class="section" id="hobbies">
  <h2>Hobbies</h2>

  <div class="card-grid">
    <div class="card">
      <h3>Music</h3>
      <p>
        I enjoy energetic and uplifting music, especially songs that give motivation
        during research and daily life.
      </p>
    </div>

    <div class="card">
      <h3>Travel</h3>
      <p>
        I enjoy traveling in Japan, visiting coastal areas, historical cities,
        and quiet places with beautiful scenery.
      </p>
    </div>

    <div class="card">
      <h3>Reading and Study</h3>
      <p>
        I enjoy reading books related to quantum chemistry, density functional theory,
        programming, and scientific thinking.
      </p>
    </div>
  </div>
</section>
