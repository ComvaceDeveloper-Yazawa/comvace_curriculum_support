# 検証ツールの使い方（見る場所を絞る。打ち消し線・適用中ルール）

## 結論
見る場所は「Elements」と「Styles」だけでOK。打ち消し線は「効いていない」印です。

## 何が起きているか
検証ツールは「今どのCSSが効いているか」を教えてくれます。打ち消し線は上書きされている証拠です。

<!-- image: devtools-styles-panel.png -->
<!-- priority: 必須 -->
<!-- what: ElementsとStylesが見える画面、打ち消し線が付いたCSSの例 -->
<!-- why: 文章だけだと見るべき場所が分からず迷う -->

## 悪い例（デモ）
どこを見ればいいか分からず、全部探して時間がかかります。

デモ: `/demos/devtools-basic.html`

```css
.title { color: red; }
.title { color: blue; }
```

## 良い例（デモ）
Elementsで対象を選び、Stylesで「効いているルール」を見ます。

デモ: `/demos/devtools-basic.html`

```css
.title { color: red; }
.title { color: blue; /* これが効いている */ }
```

## なぜそうなるか
同じ要素に複数のCSSが当たると、優先順位が高いものが残ります。検証ツールはそれを見せてくれます。

## よくあるミス
- Consoleだけ見てしまい、Stylesを見ない
- 打ち消し線の意味が分からない

## 次に読む記事
- [CSSが打ち消される理由（優先順位、上書き）](/phase9/css-overwritten)