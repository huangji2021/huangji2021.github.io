---
layout: default
title: 首页
lang: zh-CN
permalink: /zh/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<section class="hero" id="home">
  <div class="hero-inner">
    <img class="profile-photo" src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="黄骥">
    <h1>黄骥 <span class="name-reading">(Huang Ji)</span></h1>
    <p>
      计算化学与理论化学博士研究生<br>
      东京大学 综合文化研究科
    </p>
    <p>
      我喜欢寻找成本更低、但仍然可靠有效的解决方法。我的博士研究从这一想法出发，
      为大分子体系中的电荷转移开发紧凑、物理图像清晰的量子化学模型。
    </p>
    <div class="button-row">
      <a class="button" href="#cv">履历</a>
      <a class="button" href="#research">研究</a>
      <a class="button" href="#publications">论文</a>
      <a class="button" href="mailto:huangjilulu@gmail.com">邮件</a>
    </div>
  </div>
</section>

<nav class="navbar">
  <a href="#home">首页</a>
  <a href="#research">研究</a>
  <a href="#publications">论文</a>
  <a href="#cv">履历</a>
  <a href="#additional">其他信息</a>
</nav>

<section class="section" id="research">
  <h2>研究</h2>
  <p class="lead">
    我的研究经历涵盖电化学、理论化学，以及面向量子化学的机器学习。我尤其关注如何结合化学直觉、
    电子结构理论和数据驱动建模，以高效研究分子体系。
  </p>
  <div class="card-grid">
    <a class="card research-card" href="{{ '/zh/research/electrochemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-electrochemistry.jpg' | relative_url }}" alt="电化学">
      <div class="research-card-content">
        <h3>电化学</h3>
        <p><strong>硕士研究</strong></p>
        <p>中性电解液中铂基催化剂上的 D-葡萄糖氧化机理，以及用于葡萄糖燃料电池的 Pt-Pd 阳极设计。</p>
      </div>
    </a>
    <a class="card research-card" href="{{ '/zh/research/theoretical-chemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="理论化学">
      <div class="research-card-content">
        <h3>理论化学</h3>
        <p><strong>博士研究</strong></p>
        <p>用紧凑的透热态模型描述大分子中的电荷定域与转移，并进一步考虑环境效应和基底的自动构建。</p>
      </div>
    </a>
    <a class="card research-card" href="{{ '/zh/research/machine-learning/' | relative_url }}">
      <img src="{{ '/assets/img/research-ml.png' | relative_url }}" alt="机器学习">
      <div class="research-card-content">
        <h3>机器学习</h3>
        <p><strong>研究兴趣</strong></p>
        <p>利用机器学习校正量子化学量，包括将 DFTB Mulliken 电荷修正到 DFT 水平的原子布居。</p>
      </div>
    </a>
  </div>
</section>

<section class="section" id="publications">
  <h2>论文与报告</h2>
  <div class="publication-list">
    <h3>期刊论文</h3>
    <ol>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.6c00916" target="_blank">Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for Photoinduced Charge-Separated States</a>.” <em>Journal of Chemical Theory and Computation</em>, 2026.</li>
      <li><strong>Ji Huang</strong> and Jiali Chen. “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">A minimal machine-learning correction of DFTB Mulliken charges towards DFT-level MBIS populations</a>.” <em>Molecular Physics</em>, Article 2657600, 2026.</li>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">A Restriction-Based Configuration Interaction Approach Based on LC-DFTB: An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.” <em>Journal of Chemical Theory and Computation</em>, <strong>21</strong>, 12592–12600, 2025.</li>
      <li><strong>Ji Huang</strong>, Philipp Simons, Yusuke Sunada, Jennifer L. M. Rupp, and Shunsuke Yagi. “<a href="https://doi.org/10.1149/1945-7111/ac0949" target="_blank">Pt-Catalyzed D-Glucose Oxidation Reactions for Glucose Fuel Cells</a>.” <em>Journal of The Electrochemical Society</em>, <strong>168</strong>, 064511, 2021.</li>
    </ol>
    <h3>学术会议报告</h3>
    <ol>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “Extending DFTB for Charge Transfer Studies under an Electric Field.” 海报报告，Molecular Quantum Mechanics Conference (MQM)，日本京都，2025年5月24日。</li>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “Combining Non-orthogonal CI with SCC-DFTB for Field-Induced Charge Transfer Studies.” 口头报告（<strong>日语</strong>），第27届理论化学讨论会，日本福冈，2025年7月24日。</li>
    </ol>
  </div>
</section>

<section class="section" id="cv">
  <h2>学习与工作经历</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h3>博士研究生</h3>
      <p>东京大学 综合文化研究科<br>日本东京<br>2023年4月－至今<br>奖学金：东京大学 Fellowship（東京大学フェローシップ）</p>
    </div>
    <div class="timeline-item">
      <h3>企业工作经历</h3>
      <p>Process Engineer，AESC Japan<br>日本神奈川<br>2020年10月－2023年3月</p>
    </div>
    <div class="timeline-item">
      <h3>硕士</h3>
      <p>东京大学 工学系研究科 材料工学专攻<br>日本东京<br>2018年9月－2020年9月<br>奖学金：材料工学专攻奖学金（マテリアル工学専攻奨学金）</p>
    </div>
    <div class="timeline-item">
      <h3>学士</h3>
      <p>武汉大学 化学系（弘毅学堂化学班）<br>中国湖北武汉<br>2014年9月－2018年6月</p>
    </div>
  </div>
</section>

<section class="section" id="additional">
  <h2>其他信息</h2>
  <div class="publication-list">
    <h3>语言能力</h3>
    <ul>
      <li>中文：母语</li>
      <li>日语：JLPT N1 满分，商务水平</li>
      <li>英语：TOEIC 915</li>
    </ul>
    <h3>教学与专业经历</h3>
    <ul>
      <li>东京大学助教，2023－2025年：《计算机基础》《算法入门》《初年次研讨课》。</li>
      <li>东京大学 Utelecon Supporter，2023年11月－2025年3月，远程：更新 Utelecon 门户网站，并制作新生指南、各系统使用指南和通知等页面。</li>
      <li>丰田中央研究所研究实习生，2024年8月，日本爱知县长久手市：通过模拟研究燃料电池电极的最优结构。</li>
    </ul>
    <h3>兴趣</h3>
    <ul>
      <li>音乐：流行、摇滚、嘻哈与 R&amp;B，尤其喜欢节奏鲜明、旋律易记的作品。</li>
      <li>旅行：日本的海滨地区，尤其是江之岛。</li>
      <li>电子产品：机械键盘和老式 PC 配件。</li>
    </ul>
  </div>
</section>

<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
