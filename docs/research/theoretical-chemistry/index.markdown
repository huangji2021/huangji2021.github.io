---
layout: default
title: Theoretical Chemistry
lang: en
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="simple-page">
  <a class="back-link" href="{{ '/' | relative_url }}">← Back to Home</a>

  <h1>Theoretical Chemistry</h1>

  <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="Theoretical chemistry">

  <p>
    My doctoral research develops an efficient quantum chemical method for describing
    charge transfer in large molecular systems. Compact electronic-state representations
    keep the calculations affordable while retaining a clear picture of where an electron
    is localized and how it moves between molecular units.
  </p>

  <h2>Research Motivation</h2>

  <p>
    High-level multiconfigurational methods such as CASSCF can describe an electron moving
    between localized regions, but their cost makes large molecules difficult to study.
    Faster single-reference methods such as DFT and DFTB can instead over-delocalize the
    electron, and one electronic configuration cannot naturally represent a transition
    between several localized charge states. My work seeks a practical balance between
    these two limits.
  </p>

  <h2>RCI-LC-DFTB</h2>

  <p>
    I developed RCI-LC-DFTB, a restriction-based configuration interaction method built
    on LC-DFTB. Charge restrictions first generate diabatic states in which the electron
    is localized on different molecular fragments. Rather than selecting only one of them,
    the method uses these non-orthogonal states as a compact basis and solves for their
    coupling through configuration interaction. It therefore keeps much of LC-DFTB's low
    cost while describing transfer between distinct charge-localized states.
  </p>

  <h2>External Electric Field</h2>

  <p>
    I first tested this framework on one-electron transfer driven by an external electric
    field. Against a CASSCF benchmark, RCI-LC-DFTB recovered the discrete transfer behavior
    missed by ordinary restricted LC-DFTB. It was then applied to much larger conjugated
    systems, where it connects the field response to molecular conformation and to the
    location of the transferred electron.
  </p>

  <h2>State-Specific Solvation</h2>

  <p>
    I next incorporated a self-consistent Generalized Born model so that the solvent
    polarization responds to the electronic state being studied. Applications to two
    donor-acceptor molecules showed how a polar environment stabilizes charge-separated
    states and how bridge length and electronic coupling help explain their very different
    recombination behavior. The model keeps the underlying diabatic states interpretable
    while adding an important environmental effect.
  </p>

  <h2>Automatic Diabatic-Basis Construction</h2>

  <p>
    A remaining practical question is which charge-localized states should be included for
    a large molecule. My latest work uses the molecular bond graph to construct this basis
    automatically. Clustered graph partitions identify chemically meaningful molecular units
    and generate a smaller, more interpretable set of diabatic states than a systematic graph
    Fourier expansion in the tested systems. This reduces manual state selection and enabled
    unit-resolved analysis of long-range charge localization in a 16-residue helical foldamer.
  </p>

  <h2>Research Direction</h2>

  <p>
    These developments follow the same working principle: use a compact, physically
    interpretable diabatic-state representation, then add the environmental and structural
    detail needed for progressively larger molecular materials.
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
    “<a href="https://doi.org/10.1021/acs.jctc.6c00916" target="_blank">
    Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for
    Photoinduced Charge-Separated States</a>.”
    <em>Journal of Chemical Theory and Computation</em>, 2026.
  </p>
</div>

<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
