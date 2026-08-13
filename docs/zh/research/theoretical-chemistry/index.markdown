---
layout: default
title: 理论化学
lang: zh-CN
permalink: /zh/research/theoretical-chemistry/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<div class="simple-page">
  <a class="back-link" href="{{ '/zh/' | relative_url }}">← 返回首页</a>
  <h1>理论化学</h1>
  <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="理论化学">
  <p>我的博士研究主要是开发一种高效的量子化学方法，用来描述大分子体系中的电荷转移。我使用紧凑的电子态表示来控制计算成本，同时保留电子定域在哪里、又如何在不同分子单元之间移动这一清晰的物理图像。</p>
  <h2>研究动机</h2>
  <p>CASSCF 等高精度多组态方法可以比较可靠地描述电子在不同局域位置之间的转移，但计算成本很高，难以应用于大分子。另一方面，DFT 或 DFTB 等更快的单参考方法可能让电子过度离域，而单一电子构型也不适合表示多个电荷局域态之间的转换。我的研究试图在这两个极端之间找到实用的平衡。</p>
  <h2>RCI-LC-DFTB</h2>
  <p>我开发了 RCI-LC-DFTB，一种建立在 LC-DFTB 上的限制型组态相互作用方法。首先利用电荷限制构造一组电子局域在不同分子片段上的透热态，然后把这些非正交状态作为紧凑的基底，通过组态相互作用求解它们之间的耦合。这样既保留了 LC-DFTB 较低的计算成本，又能描述不同电荷局域态之间的转移。</p>
  <h2>外加电场</h2>
  <p>我首先把这一框架用于外加电场诱导的单电子转移。与 CASSCF 基准结果比较时，RCI-LC-DFTB 修复了普通 LC-DFTB 无法正确描述的离散单电子转移行为。随后，该方法被应用到更大的共轭分子体系，用来分析分子构象、外加电场与电子最终定域位置之间的关系。</p>
  <h2>态特异性溶剂化</h2>
  <p>在此基础上，我自洽地引入了 Generalized Born 模型，使溶剂极化能够随所研究的电子态变化。对两个给体－受体分子的计算说明了极性环境如何稳定电荷分离态，也说明了桥的长度和电子耦合如何帮助解释两种分子截然不同的复合行为。该模型在加入重要环境效应的同时，仍保留了透热态清晰的物理解释。</p>
  <h2>透热基底的自动构建</h2>
  <p>对大分子而言，另一个实际问题是应该选择哪些电荷局域态。我的最新工作利用分子键连接形成的图，自动构造透热基底。在测试体系中，聚类图划分可以识别具有化学意义的分子单元；与系统性的图傅里叶展开相比，它用更少、更容易解释的状态得到所需的电荷响应。这减少了人工选择状态的需要，并使我们能够逐单元分析一个含 16 个重复单元的螺旋折叠分子中的长程电荷定域。</p>
  <h2>研究方向</h2>
  <p>这几项工作沿着同一条思路展开：以紧凑、物理上可解释的透热态为基础，再逐步加入溶剂环境和分子结构信息，用于研究尺寸更大、结构更复杂的分子材料。</p>
  <h2>相关论文</h2>
  <p><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">A Restriction-Based Configuration Interaction Approach Based on LC-DFTB: An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.” <em>Journal of Chemical Theory and Computation</em>, <strong>21</strong>, 12592–12600, 2025.</p>
  <p><strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.6c00916" target="_blank">Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for Photoinduced Charge-Separated States</a>.” <em>Journal of Chemical Theory and Computation</em>, 2026.</p>
</div>
<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
