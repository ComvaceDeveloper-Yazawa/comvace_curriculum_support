# グループ構造化の考え方
〜HTMLは箱の設計図〜

## 1. この章で身につくこと
- デザインを見て「どこを1つの箱にするか」判断できる
- wrapper を置く理由が分かる
- 余白を1箇所で管理する考え方が分かる
- この教材のホーム画面に合わせた構造が作れる

## 2. まずはデザインを観察しよう
この教材のホーム画面を思い出してください。
左右の間隔がそろっています。

さらに上下の間隔も、同じテンポでそろっています。
つまり「同じ余白のまとまり」が見える画面です。

このとき自然に出る発想は、
「同じ余白の範囲を1つの箱で囲みたい」です。
だから wrapper を作る、という流れになります。

## 3. 箱（グループ）を作らないと何が大変？
同じ余白を、別々の場所に何度も書くことになります。
直す場所が増えて、管理が大変になります。

ここからは「何が起きるか」をデモで確認します。

### デモ：グループがないとCSSが散らばる（悪い例）
いまから「同じ余白を3か所に書く」状態を見ます。

```html
<section class="toolbar">ツールバー</section>
<section class="card-list">
  <div class="card">カードA</div>
  <div class="card">カードB</div>
</section>
<section class="cart-info">カート案内</section>
```

```css
body { background: #1e1e1e; }
.toolbar { padding: 24px; background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.card-list { padding: 24px; background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.cart-info { padding: 24px; background: #ffffff; outline: 2px dashed #999; }
.card { background: #fff; padding: 12px; margin-bottom: 8px; }
```

<DemoPreview html='<section class="toolbar">ツールバー</section><section class="card-list"><div class="card">カードA</div><div class="card">カードB</div></section><section class="cart-info">カート案内</section>' css='body { background: #1e1e1e; } .toolbar { padding: 24px; background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .card-list { padding: 24px; background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .cart-info { padding: 24px; background: #ffffff; outline: 2px dashed #999; } .card { background: #fff; padding: 12px; margin-bottom: 8px; }' />

プレビューを見ると、
「同じ余白を3回書いている」ことが分かります。
ピンクの帯が margin-bottom の範囲です。
これが増えるほど、直す場所が増えます。

## 4. wrapper を作ると何が楽？
余白を1箇所で管理できます。
CSSが減って、修正もラクになります。

### デモ：wrapper で余白を1箇所にまとめる（良い例）
いまから「外側の余白を1行で管理」する状態を見ます。

```html
<div class="wrapper">
  <section class="toolbar">ツールバー</section>
  <section class="card-list">
    <div class="card">カードA</div>
    <div class="card">カードB</div>
  </section>
  <section class="cart-info">カート案内</section>
</div>
```

```css
body { background: #1e1e1e; }
.wrapper { padding: 24px; background: #fff2b8; }
.toolbar { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.card-list { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.cart-info { background: #ffffff; outline: 2px dashed #999; }
.card { background: #fff; padding: 12px; margin-bottom: 8px; }
```

<DemoPreview html='<div class="wrapper"><section class="toolbar">ツールバー</section><section class="card-list"><div class="card">カードA</div><div class="card">カードB</div></section><section class="cart-info">カート案内</section></div>' css='body { background: #1e1e1e; } .wrapper { padding: 24px; background: #fff2b8; } .toolbar { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .card-list { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .cart-info { background: #ffffff; outline: 2px dashed #999; } .card { background: #fff; padding: 12px; margin-bottom: 8px; }' />

プレビューでは、
ツールバー・カード一覧・カート案内が同じ外側の間隔でそろいます。
ピンクの帯が margin-bottom の範囲です。
しかも余白は wrapper だけで管理できます。

## 5. 課題1のホーム画面に当てはめてみる
この教材のホーム画面は、
「上下左右の間隔がそろっている」デザインです。
だから wrapper の中にまとめるのが自然です。

言葉で分解すると、こうなります。

- メインビジュアル（hero）は wrapper の外
- wrapper の中に
  - ツールバー
  - 商品カード一覧
  - カート案内

### HTML構造例（ほぼ答え）
いまから「ホーム画面の構造」をそのまま見ます。

```html
<main>
  <section class="hero">メインビジュアル</section>

  <div class="wrapper">
    <section class="toolbar">ツールバー</section>
    <section class="card-list">
      <div class="card">商品カード</div>
      <div class="card">商品カード</div>
    </section>
    <section class="cart-info">カート案内</section>
  </div>
</main>
```

```css
body { background: #1e1e1e; }
.hero { background: #e9f7ff; padding: 24px; margin-bottom: 24px; outline: 2px dashed #99c; box-shadow: 0 24px 0 0 #ffd6e7; }
.wrapper { padding: 24px; background: #fff2b8; }
.toolbar { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.card-list { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; }
.card { background: #fff; padding: 12px; margin-bottom: 8px; }
.cart-info { background: #ffffff; outline: 2px dashed #999; }
```

<DemoPreview html='<main><section class="hero">メインビジュアル</section><div class="wrapper"><section class="toolbar">ツールバー</section><section class="card-list"><div class="card">商品カード</div><div class="card">商品カード</div></section><section class="cart-info">カート案内</section></div></main>' css='body { background: #1e1e1e; } .hero { background: #e9f7ff; padding: 24px; margin-bottom: 24px; outline: 2px dashed #99c; box-shadow: 0 24px 0 0 #ffd6e7; } .wrapper { padding: 24px; background: #fff2b8; } .toolbar { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .card-list { background: #ffffff; margin-bottom: 24px; outline: 2px dashed #999; box-shadow: 0 24px 0 0 #ffd6e7; } .card { background: #fff; padding: 12px; margin-bottom: 8px; } .cart-info { background: #ffffff; outline: 2px dashed #999; }' />

プレビューでは、
wrapper の中が同じ外側の間隔でそろって見えます。
ピンクの帯が margin-bottom の範囲です。
この「そろって見える」が、箱を作る理由です。

## 6. よくあるミス
- div を意味なく増やす
- 全部 wrapper に入れてしまう
- 余白を子要素にばら撒く

## 7. 注意：一般論では上下まで揃っていないこともある
一般のサイトでは、上下の間隔まで wrapper で管理しないこともあります。
ただ、この教材のホーム画面は
上下左右の間隔がそろっているので wrapper が自然です。

## 8. まとめ
- HTML は箱の設計
- グループを作ると CSS が楽
- wrapper は余白管理の要
