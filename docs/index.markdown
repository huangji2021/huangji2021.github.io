---
layout: default
title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<section class="hero" id="home">
  <div class="hero-inner">
    <img class="profile-photo" src="{{ '/assets/img/profile2.png' | relative_url }}" alt="Ji Huang">

    <h1>Ji Huang</h1>

    <p>
      Ph.D. student in computational and theoretical chemistry<br>
      Graduate School of Arts and Sciences, The University of Tokyo
    </p>

    <p>
      I develop efficient quantum chemical methods for excited states and
      charge-transfer processes. My recent work includes RCI-LC-DFTB, a
      restriction-based configuration interaction approach built on LC-DFTB.
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
  <a href="#additional">Additional</a>
</nav>

<section class="section" id="research">
  <h2>Research</h2>

  <p class="lead">
    My research background spans electrochemistry, theoretical chemistry,
    and machine learning for quantum chemistry. I am particularly interested
    in connecting chemical insight, electronic-structure theory, and data-driven
    modeling to study molecular systems efficiently.
  </p>

  <div class="card-grid">
    <a class="card research-card" href="{{ '/research/electrochemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-electrochemistry.jpg' | relative_url }}" alt="Electrochemistry">
      <div class="research-card-content">
        <h3>Electrochemistry</h3>
        <p><strong>Master’s Research</strong></p>
        <p>
          Pt-based electrocatalysts and D-glucose oxidation reactions
          for glucose fuel cells.
        </p>
      </div>
    </a>

    <a class="card research-card" href="{{ '/research/theoretical-chemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="Theoretical chemistry">
      <div class="research-card-content">
        <h3>Theoretical Chemistry</h3>
        <p><strong>Ph.D. Research</strong></p>
        <p>
          Development of DFTB-based electronic-structure methods for charge-transfer
          and charge-separated states in large molecular systems.
        </p>
      </div>
    </a>

    <a class="card research-card" href="{{ '/research/machine-learning/' | relative_url }}">
      <img src="{{ '/assets/img/research-ml.png' | relative_url }}" alt="Machine learning">
      <div class="research-card-content">
        <h3>Machine Learning</h3>
        <p><strong>Interest</strong></p>
        <p>
          Machine-learning correction of quantum-chemical quantities,
          including DFTB Mulliken charges toward DFT-level populations.
        </p>
      </div>
    </a>
  </div>
</section>

<section class="section" id="publications">
  <h2>Publications</h2>

  <div class="publication-list">

    <h3>Journal Articles</h3>

    <ol>

      <li>
        <strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa.
        “<a href="https://chemrxiv.org/doi/full/10.26434/chemrxiv.15002660/v1" target="_blank">
        Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for
        Photoinduced Charge-Separated States</a>.”
        <em>ChemRxiv</em>, preprint, 2026.
      </li>

      <li>
        <strong>Ji Huang</strong> and Jiali Chen.
        “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">
        A minimal machine-learning correction of DFTB Mulliken charges towards
        DFT-level MBIS populations</a>.”
        <em>Molecular Physics</em>,
        Article 2657600, 2026.
      </li>

      <li>
        <strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa.
        “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">
        A Restriction-Based Configuration Interaction Approach Based on LC-DFTB:
        An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.”
        <em>Journal of Chemical Theory and Computation</em>,
        <strong>21</strong>, 12592–12600, 2025.
      </li>

      <li>
        <strong>Ji Huang</strong>, Philipp Simons, Yusuke Sunada, Jennifer L. M. Rupp,
        and Shunsuke Yagi.
        “<a href="https://doi.org/10.1149/1945-7111/ac0949" target="_blank">
        Pt-Catalyzed D-Glucose Oxidation Reactions for Glucose Fuel Cells</a>.”
        <em>Journal of The Electrochemical Society</em>,
        <strong>168</strong>, 064511, 2021.
      </li>
    </ol>

    <h3>Conference Presentations</h3>

    <ol>
      <li>
        <strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa.
        “Extending DFTB for Charge Transfer Studies under an Electric Field.”
        Poster presentation, Molecular Quantum Mechanics Conference (MQM),
        Kyoto, Japan, May 24, 2025.
      </li>

      <li>
        <strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa.
        “Combining Non-orthogonal CI with SCC-DFTB for Field-Induced Charge Transfer Studies.”
        Oral presentation (<strong>In Japanese</strong>), The 27th Annual Meeting of Theoretical Chemistry,
        Fukuoka, Japan, July 24, 2025. 
      </li>
    </ol>

  </div>
</section>

<section class="section" id="cv">
  <h2>Background</h2>

  <div class="timeline">
    <div class="timeline-item">
      <h3>Ph.D. Student in Chemistry</h3>
      <p>
        Graduate School of Arts and Sciences<br>
        The University of Tokyo<br>
        Tokyo, Japan<br>
        Apr. 2023 - Present
      </p>
    </div>

    <div class="timeline-item">
      <h3>Industry Experience</h3>
      <p>
        AESC Japan<br>
        Kanagawa, Japan<br>
        Oct. 2020 - Mar. 2023
      </p>
    </div>

    <div class="timeline-item">
      <h3>Master’s Degree</h3>
      <p>
        Department of Materials Engineering<br>
        Graduate School of Engineering<br>
        The University of Tokyo<br>
        Tokyo, Japan<br>
        Sep. 2018 - Sep. 2020
      </p>
    </div>

    <div class="timeline-item">
      <h3>Bachelor’s Degree</h3>
      <p>
        Department of Chemistry<br>
        Wuhan University<br>
        Wuhan, Hubei, China<br>
        Sep. 2014 - Jun. 2018
      </p>
    </div>
  </div>
</section>

<section class="section" id="additional">
  <h2>Additional Information</h2>

  <div class="publication-list">

    <h3>Languages</h3>
    <ul>
      <li>Chinese: Native</li>
      <li>Japanese: JLPT N1, full score; business-level proficiency</li>
      <li>English: TOEIC 915</li>
    </ul>

    <h3>Teaching and Professional Experience</h3>
    <ul>
      <li>
        Teaching Assistant, The University of Tokyo, 2023 - 2025:
        Information, Introduction to Algorithms, and First-Year Seminar.
      </li>

      <li>
        Utelecon Supporter, The University of Tokyo, Nov. 2023 - Mar. 2025,
        Remote: updated the Utelecon portal website and created new pages,
        including pages for incoming students, system-specific guides, and
        announcements.
      </li>

      <li>
        Research Intern, Toyota Central R&amp;D Labs., Inc., Aug. 2024,
        Nagakute, Aichi, Japan: investigated the optimal structure of fuel cell
        electrodes through simulation.
      </li>
    </ul>

    <h3>Interests</h3>
    <ul>
      <li>
        Music: pop, rock, hip-hop, and R&amp;B, especially songs with strong
        rhythms and memorable melodies.
      </li>
      <li>
        Travel: coastal areas in Japan, especially Enoshima.
      </li>
      <li>
        Electronic gadgets: mechanical keyboards, compact computers, and older PC components.
      </li>
    </ul>

  </div>
</section>