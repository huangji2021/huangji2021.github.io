---
layout: default
title: 面向量子化学的机器学习
lang: zh-CN
permalink: /zh/research/machine-learning/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<div class="simple-page">
  <a class="back-link" href="{{ '/zh/' | relative_url }}">← 返回首页</a>
  <h1>面向量子化学的机器学习</h1>
  <img src="{{ '/assets/img/research-ml2.jpg' | relative_url }}" alt="机器学习">
  <p>我开发了一个小型机器学习模型，在 DFTB 计算完成后校正其给出的原子电荷。它作为标准 DFTB 流程中的轻量级后处理步骤使用。</p>
  <h2>研究动机</h2>
  <p>DFTB 足够快，可以处理较大的分子体系，但通常只能从最小轨道基组得到 Mulliken 电荷。这些数值可能与 MBIS 等基于电子密度定义的 DFT 电荷存在偏差；而标准 DFTB 又没有直接计算 MBIS 所需的实空间电子密度。</p>
  <h2>DFTB 电荷的机器学习校正</h2>
  <p>该校正只使用原子种类、原始 DFTB Mulliken 电荷，以及计算成本很低的局部几何描述符，将每个原子映射到 DFT 水平的 MBIS 参考值。最后再对同一分子中的预测值作统一平移，严格保证总电荷守恒。</p>
  <h2>主要特点</h2>
  <p>在 QM9 上的测试表明，仅仅增加模型的非线性，相比逐元素线性校正并没有带来明显改善；真正重要的是局部化学环境信息，尤其对碳和氮如此。校正后的电荷可以用接近普通 DFTB 的成本获得。</p>
  <h2>更广泛的研究兴趣</h2>
  <p>该校正只在 DFTB 收敛后使用，不会改变哈密顿量、能量、力或结构预测，主要面向静电分析和 embedding。它对测试中的中性有机分子表现可靠；对显式带电体系则更困难，因为纯局部模型难以完整表示长程电荷重新分布。</p>
  <h2>相关论文</h2>
  <p><strong>Ji Huang</strong> and Jiali Chen. “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">A minimal machine-learning correction of DFTB Mulliken charges towards DFT-level MBIS populations</a>.” <em>Molecular Physics</em>, Article 2657600, 2026.</p>
</div>
<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
