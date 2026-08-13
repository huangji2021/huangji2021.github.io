---
layout: default
title: 量子化学のための機械学習
lang: ja
permalink: /ja/research/machine-learning/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<div class="simple-page">
  <a class="back-link" href="{{ '/ja/' | relative_url }}">← ホームへ戻る</a>
  <h1>量子化学のための機械学習</h1>
  <img src="{{ '/assets/img/research-ml2.jpg' | relative_url }}" alt="機械学習">
  <p>DFTB 計算の終了後に原子電荷を補正する、小規模な機械学習モデルを開発しました。標準的な DFTB 計算に軽量な後処理を追加する形で使用します。</p>
  <h2>研究の背景</h2>
  <p>DFTB は大きな分子を高速に扱えますが、通常得られるのは最小軌道基底から計算した Mulliken 電荷です。この値は MBIS などの電子密度に基づく DFT 電荷と異なる場合があります。また、標準 DFTB には MBIS を直接計算するための実空間電子密度がありません。</p>
  <h2>DFTB 電荷の機械学習補正</h2>
  <p>元素、元の DFTB Mulliken 電荷、低コストな局所幾何記述子だけを使い、各原子の値を DFT レベルの MBIS 参照値へ写像します。最後に分子ごとの一様な補正を加え、全電荷を厳密に保存します。</p>
  <h2>主な特徴</h2>
  <p>QM9 を用いた検証では、非線形性を加えるだけでは元素別の線形補正から大きく改善せず、特に炭素と窒素では局所化学環境の情報が重要でした。補正値は通常の DFTB に近い計算コストで得られます。</p>
  <h2>より広い研究関心</h2>
  <p>補正は DFTB 収束後にのみ適用され、ハミルトニアン、エネルギー、力、構造予測は変更しません。用途は静電解析と embedding です。検証した中性有機分子には良好に機能しますが、純粋に局所的なモデルでは長距離の電荷再分布を十分に表せないため、明示的な荷電分子は今後の課題です。</p>
  <h2>関連論文</h2>
  <p><strong>Ji Huang</strong> and Jiali Chen. “<a href="https://doi.org/10.1080/00268976.2026.2657600" target="_blank">A minimal machine-learning correction of DFTB Mulliken charges towards DFT-level MBIS populations</a>.” <em>Molecular Physics</em>, Article 2657600, 2026.</p>
</div>
<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
