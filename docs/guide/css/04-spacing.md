# CSSで余白をつけてみよう
〜padding と margin の基本〜

## 1. この章で身につくこと
- CSSで余白をつけられるようになる
- padding と margin の役割の違いが分かる
- 余白はHTMLではなくCSSで作るものだと理解できる

## 2. 余白がないと、画面はどう見える？
文字や要素がぎゅうぎゅうに詰まって見えます。
読めるけれど、見づらい状態になります。
余白があるだけで、印象は大きく変わります。

## 3. 余白はCSSで作る
HTMLにスペースを入れても、見た目の余白にはなりません。
見た目の調整はCSSの仕事です。
余白も「見た目」の一部だと覚えてください。

## 4. CSSで余白をつける方法は2つある
- padding：中の余白
- margin：外の余白

ここではこの2つだけ覚えれば十分です。

## 5. padding とは？
paddingは要素の「内側」にスペースを作ります。
背景色が一緒に広がるのが特徴です。
ボタンやカードでよく使います。

```css
.box {
  padding: 16px;
}
```

```html
<div class="box">中の余白を足す</div>
```

<DemoPreview html='<div class="box">中の余白を足す</div>' css='.box { padding: 16px; background-color: #eef4ff; }' />

「中身が窮屈なときに使う」という感覚でOKです。

## 6. margin とは？
marginは要素の「外側」にスペースを作ります。
他の要素との距離を空けるために使います。
背景色は広がりません。

```css
.box {
  margin: 16px;
}
```

```html
<div class="box">外の余白を足す</div>
<div class="box">次の要素</div>
```

<DemoPreview html='<div class="box">外の余白を足す</div><div class="box">次の要素</div>' css='.box { margin: 16px 0; background-color: #ffe9e9; }' />

「要素同士が近すぎるときに使う」という感覚でOKです。

## 7. padding と margin の違いを並べて理解する
- padding は「中」
- margin は「外」

図がなくても、
「内側に余白を足すのがpadding、外側に距離を作るのがmargin」
と覚えれば大丈夫です。

## 8. よくある使い分け（入門レベル）
- ボタンの中の余白 → padding
- カードの中の余白 → padding
- 要素と要素の間の距離 → margin

## 9. よくある間違い
- HTMLで余白を作ろうとする
- 全部marginで調整しようとする
- その場しのぎで数値を増やす

## 10. ここでは深掘りしないこと（重要）
以下は後の章で解説します。

- padding と margin の厳密な仕様
- どちらを使うべきかの設計判断
- レイアウト全体の余白設計

## 11. まとめ
- 余白はCSSで作る
- paddingは中、marginは外
- 次からは「どう設計するか」の話になる
