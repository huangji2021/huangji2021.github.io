---
layout: default
title: ホーム
lang: ja
permalink: /ja/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<section class="hero" id="home">
  <div class="hero-inner">
    <img class="profile-photo" src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="黄 驥">
    <h1>黄 驥 <span class="name-reading">(ファン　ジ)</span></h1>
    <p>計算化学・理論化学 博士課程<br>東京大学大学院 総合文化研究科</p>
    <p>少ない計算コストでありながら、重要な物理を失わない手法に関心があります。博士研究では、大規模分子系の電荷移動を記述する、コンパクトで解釈しやすい量子化学モデルを開発しています。</p>
    <div class="button-row">
      <a class="button" href="#cv">経歴</a>
      <a class="button" href="#research">研究</a>
      <a class="button" href="#publications">業績</a>
      <a class="button" href="mailto:huangjilulu@gmail.com">メール</a>
    </div>
  </div>
</section>

<nav class="navbar">
  <a href="#home">ホーム</a><a href="#research">研究</a><a href="#publications">業績</a><a href="#cv">経歴</a><a href="#additional">その他</a>
</nav>

<section class="section" id="research">
  <h2>研究</h2>
  <p class="lead">これまで、電気化学、理論化学、量子化学のための機械学習に取り組んできました。特に、化学的洞察、電子構造理論、データ駆動型モデリングを組み合わせ、分子系を効率的に研究することに関心があります。</p>
  <div class="card-grid">
    <a class="card research-card" href="{{ '/ja/research/electrochemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-electrochemistry.jpg' | relative_url }}" alt="電気化学"><div class="research-card-content"><h3>電気化学</h3><p><strong>修士研究</strong></p><p>中性電解液中の Pt 系触媒における D-グルコース酸化機構と、グルコース燃料電池用 Pt-Pd アノードの設計。</p></div>
    </a>
    <a class="card research-card" href="{{ '/ja/research/theoretical-chemistry/' | relative_url }}">
      <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="理論化学"><div class="research-card-content"><h3>理論化学</h3><p><strong>博士研究</strong></p><p>大規模分子系の電荷局在と移動を記述するコンパクトな透熱状態モデル、および環境効果と基底自動構築への拡張。</p></div>
    </a>
    <a class="card research-card" href="{{ '/ja/research/machine-learning/' | relative_url }}">
      <img src="{{ '/assets/img/research-ml.png' | relative_url }}" alt="機械学習"><div class="research-card-content"><h3>機械学習</h3><p><strong>研究関心</strong></p><p>DFTB Mulliken 電荷を DFT レベルの原子集団へ近づける補正など、量子化学量の機械学習補正。</p></div>
    </a>
  </div>
</section>

<section class="section" id="publications">
  <h2>研究業績</h2>
  <div class="publication-list">
    <h3>学術論文</h3>
    <ol>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.6c00916" target="_blank">Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for Photoinduced Charge-Separated States</a>.” <em>Journal of Chemical Theory and Computation</em>, 2026.</li>
      <li><strong>Ji Huang</strong> and Jiali Chen. “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">A minimal machine-learning correction of DFTB Mulliken charges towards DFT-level MBIS populations</a>.” <em>Molecular Physics</em>, Article 2657600, 2026.</li>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">A Restriction-Based Configuration Interaction Approach Based on LC-DFTB: An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.” <em>Journal of Chemical Theory and Computation</em>, <strong>21</strong>, 12592–12600, 2025.</li>
      <li><strong>Ji Huang</strong>, Philipp Simons, Yusuke Sunada, Jennifer L. M. Rupp, and Shunsuke Yagi. “<a href="https://doi.org/10.1149/1945-7111/ac0949" target="_blank">Pt-Catalyzed D-Glucose Oxidation Reactions for Glucose Fuel Cells</a>.” <em>Journal of The Electrochemical Society</em>, <strong>168</strong>, 064511, 2021.</li>
    </ol>
    <h3>学会発表</h3>
    <ol>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “Extending DFTB for Charge Transfer Studies under an Electric Field.” ポスター発表、Molecular Quantum Mechanics Conference (MQM)、京都、2025年5月24日。</li>
      <li><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “Combining Non-orthogonal CI with SCC-DFTB for Field-Induced Charge Transfer Studies.” 口頭発表（<strong>日本語</strong>）、第27回理論化学討論会、福岡、2025年7月24日。</li>
    </ol>
  </div>
</section>

<section class="section" id="cv">
  <h2>経歴</h2>
  <div class="timeline">
    <div class="timeline-item"><h3>学士課程</h3><p>武漢大学 化学系（弘毅学堂化学班）<br>中国・湖北省武漢市<br>2014年9月－2018年6月</p></div>
    <div class="timeline-item"><h3>修士課程</h3><p>東京大学大学院 工学系研究科 マテリアル工学専攻<br>東京、日本<br>2018年9月－2020年9月<br>奨学金：マテリアル工学専攻奨学金</p></div>
    <div class="timeline-item"><h3>企業勤務</h3><p>Process Engineer、AESC Japan<br>神奈川、日本<br>2020年10月－2023年3月</p></div>
    <div class="timeline-item"><h3>博士課程</h3><p>東京大学大学院 総合文化研究科<br>東京、日本<br>2023年4月－現在<br>奨学金：東京大学フェローシップ</p></div>
  </div>
</section>

<section class="section" id="additional">
  <h2>その他</h2>
  <div class="publication-list">
    <h3>言語</h3><ul><li>中国語：母語</li><li>日本語：JLPT N1 満点、ビジネスレベル</li><li>英語：TOEIC 915</li></ul>
    <h3>教育・職務経験</h3>
    <ul>
      <li>東京大学ティーチング・アシスタント、2023－2025年：《情報》《アルゴリズム入門》《初年次ゼミナール》。</li>
      <li>東京大学 Utelecon サポーター、2023年11月－2025年3月、リモート：Utelecon ポータルの更新、新入生向けページ、システム別ガイド、告知ページなどの作成。</li>
      <li>株式会社豊田中央研究所 研究インターン、2024年8月、愛知県長久手市：シミュレーションによる燃料電池電極の最適構造の検討。</li>
    </ul>
    <h3>趣味</h3><ul><li>音楽：ポップ、ロック、ヒップホップ、R&amp;B。特にリズムが強く印象的なメロディーの曲。</li><li>旅行：江の島をはじめとする日本の海沿い。</li><li>電子機器：メカニカルキーボード、旧世代の PC パーツ。</li></ul>
  </div>
</section>

<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
