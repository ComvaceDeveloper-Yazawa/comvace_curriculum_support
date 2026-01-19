# レスポンシブ対応の考え方
〜画面が変わっても、同じ設計で作るために〜

## 1. この章で身につくこと
- レスポンシブ対応の意味が言葉で説明できる
- PC → スマホの順で考える理由が分かる
- CSSは「全部書き直す」のではなく「一部を上書き」だと分かる
- wrapper があると調整が楽になる理由が分かる

## 2. レスポンシブ対応って何？
画面サイズが変わっても、見やすく・使いやすく見えるようにすることです。
難しい技術ではありません。
「CSSを全部書き直す」話でもありません。

「足りないところだけ直す」だけで、十分きれいに見せられます。

## 3. なぜまずPCで作るのか
最初に基準がないと、判断がブレます。
PCは情報量が多く、余白も広く取れます。
だからまずPCで「正解の形」を1つ作ります。

その正解を、スマホでは「必要なところだけ上書き」します。
この順番にすると迷いません。

## 4. デザインを見て違和感に気づく
PCでは問題なく見えます。
でもスマホで見ると、違和感が出ます。

- 余白が広すぎて、内容が小さく見える
- 横幅が足りなくて、行が詰まる

「ここだけ直せばいい」が見えてくるのがポイントです。

## 5. メディアクエリとは何か
メディアクエリは、
「この条件のときだけCSSを当てる仕組み」です。

たとえば、
`@media (max-width: 390px)` は、
「画面の横幅が390px以下のときだけ、この中のCSSを使ってね」
という意味です。

つまり「スマホのときだけ、見た目を変える」ための仕組みです。

## 6. 実際のコードで確認する
ここからは、同じ画面を
「PC → スマホ → 上書き後」で見ていきます。

### デモ1：PC表示の状態
まずはPCの見え方を確認します。
wrapper の左右余白を広めに取り、カードは横並びにします。

```html
<main>
  <div class="wrapper">
    <section class="toolbar">ツールバー</section>
    <section class="card-list">
      <div class="card">カードA</div>
      <div class="card">カードB</div>
      <div class="card">カードC</div>
    </section>
  </div>
</main>
```

```css
body { background: #f4f4f4; }
.wrapper { padding: 40px 80px; background: #fff2b8; }
.toolbar { background: #fff; padding: 16px; margin-bottom: 16px; }
.card-list { background: #fff; padding: 16px; display: flex; gap: 12px; }
.card { background: #ffffff; padding: 12px; border: 1px solid #ddd; flex: 1; }
```

<DemoPreview html='<main><div class="wrapper"><section class="toolbar">ツールバー</section><section class="card-list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></section></div></main>' css='body { background: #f4f4f4; } .wrapper { padding: 40px 80px; background: #fff2b8; } .toolbar { background: #fff; padding: 16px; margin-bottom: 16px; } .card-list { background: #fff; padding: 16px; display: flex; gap: 12px; } .card { background: #ffffff; padding: 12px; border: 1px solid #ddd; flex: 1; }' />

余白がしっかりあり、カードも横並びで見やすいPC表示です。
ここが「基準の形」になります。

### デモ2：スマホ幅にすると違和感が出る
今度は同じCSSのまま、
スマホ幅だと「余白が広すぎる」「カードが横に詰まる」状態を見ます。

```html
<main class="phone">
  <div class="wrapper">
    <section class="toolbar">ツールバー</section>
    <section class="card-list">
      <div class="card">カードA</div>
      <div class="card">カードB</div>
      <div class="card">カードC</div>
    </section>
  </div>
</main>
```

```css
body { background: #f4f4f4; }
.phone { max-width: 390px; margin: 0 auto; background: #e6f3ff; }
.wrapper { padding: 40px 80px; background: #fff2b8; }
.toolbar { background: #fff; padding: 16px; margin-bottom: 16px; }
.card-list { background: #fff; padding: 16px; display: flex; gap: 12px; }
.card { background: #ffffff; padding: 12px; border: 1px solid #ddd; flex: 1; }
```

<DemoPreview html='<main class="phone"><div class="wrapper"><section class="toolbar">ツールバー</section><section class="card-list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></section></div></main>' css='body { background: #f4f4f4; } .phone { max-width: 390px; margin: 0 auto; background: #e6f3ff; } .wrapper { padding: 40px 80px; background: #fff2b8; } .toolbar { background: #fff; padding: 16px; margin-bottom: 16px; } .card-list { background: #fff; padding: 16px; display: flex; gap: 12px; } .card { background: #ffffff; padding: 12px; border: 1px solid #ddd; flex: 1; }' width="390" />

スマホの幅だと、左右の余白が広すぎます。
カードも横並びのままで詰まって見えます。

### デモ3：メディアクエリで上書きする
ここから「必要な部分だけ上書き」します。
wrapper の余白と、カードの並び方だけを変えます。

```css
.wrapper {
  padding: 40px 80px;
}

.card-list {
  display: flex;
  gap: 12px;
}

@media (max-width: 390px) {
  .wrapper {
    padding: 24px 16px;
  }

  .card-list {
    flex-direction: column;
  }
}
```

```html
<main class="phone">
  <div class="wrapper">
    <section class="toolbar">ツールバー</section>
    <section class="card-list">
      <div class="card">カードA</div>
      <div class="card">カードB</div>
      <div class="card">カードC</div>
    </section>
  </div>
</main>
```

```css
body { background: #f4f4f4; }
.phone { max-width: 390px; margin: 0 auto; background: #e6f3ff; }
.wrapper { padding: 40px 80px; background: #fff2b8; }
.card-list { background: #fff; padding: 16px; display: flex; gap: 12px; }
@media (max-width: 390px) { .wrapper { padding: 24px 16px; } .card-list { flex-direction: column; } }
.toolbar { background: #fff; padding: 16px; margin-bottom: 16px; }
.card { background: #ffffff; padding: 12px; border: 1px solid #ddd; }
```

<DemoPreview html='<main class="phone"><div class="wrapper"><section class="toolbar">ツールバー</section><section class="card-list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></section></div></main>' css='body { background: #f4f4f4; } .phone { max-width: 390px; margin: 0 auto; background: #e6f3ff; } .wrapper { padding: 40px 80px; background: #fff2b8; } .card-list { background: #fff; padding: 16px; display: flex; gap: 12px; } @media (max-width: 390px) { .wrapper { padding: 24px 16px; } .card-list { flex-direction: column; } } .toolbar { background: #fff; padding: 16px; margin-bottom: 16px; } .card { background: #ffffff; padding: 12px; border: 1px solid #ddd; }' width="390" />

余白だけが小さくなり、
カードも縦並びになって見やすくなります。
「全部書き直さない」が実感できたはずです。

## 7. wrapper があるとレスポンシブが楽な理由
余白の管理が1か所で済みます。
カードやツールバーには触らなくていいです。

つまり「設計が効いている」状態になります。
調整が軽くなります。

## 8. よくあるミス
- 全部メディアクエリで書こうとする
- HTML構造で無理やり対応しようとする
- スマホ用CSSを別ファイルにしようとする

「必要な部分だけ上書き」で十分です。

## 9. この教材でのレスポンシブ対応まとめ
- PCを基準に作る
- スマホは上書きで直す
- wrapper を信じる
- 2サイズで十分
