---
layout: default
title: 理論化学
lang: ja
permalink: /ja/research/theoretical-chemistry/
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<div class="simple-page">
  <a class="back-link" href="{{ '/ja/' | relative_url }}">← ホームへ戻る</a>
  <h1>理論化学</h1>
  <img src="{{ '/assets/img/research-theory.png' | relative_url }}" alt="理論化学">
  <p>博士研究では、大規模分子系の電荷移動を記述する高効率な量子化学手法を開発しています。コンパクトな電子状態表現によって計算コストを抑えながら、電子がどこに局在し、分子内の異なる単位の間をどのように移動するかという明確な物理描像を保ちます。</p>
  <h2>研究の背景</h2>
  <p>CASSCF のような高精度の多配置法は、異なる局在領域間の電子移動を比較的信頼性高く記述できますが、計算コストが高く、大きな分子への適用は困難です。一方、高速な単一参照法である DFT や DFTB では電子が過度に非局在化する場合があり、一つの電子配置だけでは複数の電荷局在状態の間の移り変わりを自然に表せません。本研究では、この二つの限界の間で実用的なバランスを目指しています。</p>
  <h2>RCI-LC-DFTB</h2>
  <p>LC-DFTB に基づく制限型配置間相互作用法 RCI-LC-DFTB を開発しました。まず、電荷制限によって電子が異なる分子フラグメントに局在した透熱状態を作ります。そのうち一つだけを選ぶのではなく、これらの非直交状態をコンパクトな基底として用い、配置間相互作用によって状態間のカップリングを解きます。これにより、LC-DFTB の低い計算コストを保ちながら、異なる電荷局在状態間の移動を記述できます。</p>
  <h2>外部電場</h2>
  <p>まず、外部電場によって誘起される一電子移動にこの枠組みを適用しました。CASSCF の基準計算と比較した結果、通常の restricted LC-DFTB が捉えられない離散的な一電子移動を RCI-LC-DFTB が再現しました。さらに大きな共役分子系へ適用し、分子配座、外部電場、移動後の電子の局在位置の関係を解析しました。</p>
  <h2>状態特異的な溶媒和</h2>
  <p>次に、自己無撞着な Generalized Born モデルを組み込み、溶媒分極が対象とする電子状態に応答するよう拡張しました。二つのドナー－アクセプター分子への適用から、極性環境が電荷分離状態をどのように安定化するか、また、ブリッジ長と電子カップリングが大きく異なる再結合挙動をどう説明するかを示しました。重要な環境効果を加えながら、透熱状態の解釈しやすさを維持しています。</p>
  <h2>透熱基底の自動構築</h2>
  <p>大きな分子では、どの電荷局在状態を含めるかが実用上の課題になります。最新の研究では、分子の結合グラフから透熱基底を自動構築します。検証した系では、クラスター化グラフ分割により化学的に意味のある分子単位を抽出し、系統的なグラフ Fourier 展開よりも少数で解釈しやすい状態から必要な電荷応答を得ました。これにより手作業での状態選択を減らし、16 残基からなるらせん状フォルダマーの長距離電荷局在を単位ごとに解析できました。</p>
  <h2>研究の方向</h2>
  <p>これらの研究では、コンパクトで物理的に解釈できる透熱状態を基礎とし、溶媒環境や分子構造の情報を段階的に加えることで、より大きく複雑な分子材料を扱えるようにしています。</p>
  <h2>関連論文</h2>
  <p><strong>Ji Huang</strong>, Tim Kowalczyk, Yoshio Nishimoto, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.5c01371" target="_blank">A Restriction-Based Configuration Interaction Approach Based on LC-DFTB: An Efficient Method for Field-Induced Charge Transfer in Molecular Systems</a>.” <em>Journal of Chemical Theory and Computation</em>, <strong>21</strong>, 12592–12600, 2025.</p>
  <p><strong>Ji Huang</strong>, Tim Kowalczyk, and Daisuke Yokogawa. “<a href="https://doi.org/10.1021/acs.jctc.6c00916" target="_blank">Self-Consistent Incorporation of Generalized Born Model into RCI-LC-DFTB for Photoinduced Charge-Separated States</a>.” <em>Journal of Chemical Theory and Computation</em>, 2026.</p>
</div>
<script src="{{ '/assets/js/animations.js' | relative_url }}" defer></script>
