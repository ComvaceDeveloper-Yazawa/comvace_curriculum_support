# marginとpadding

## 結論
`margin`は外側の余白、`padding`は内側の余白です。

## 何が起きているか
同じ余白でも「箱の外」と「箱の中」で見え方が変わります。間違えると距離感が崩れます。

<!-- image: box-model-margin-padding.png -->
<!-- priority: 必須 -->
<!-- what: 箱の外側がmargin、内側がpaddingだと一目で分かる図 -->
<!-- why: 文字だけだと外側/内側の違いを誤解しやすい -->

## 悪い例（デモ）
外側を空けたいのに`padding`を使ってしまい、箱が大きく見えます。

デモ: `/demos/margin-padding.html`

```css
.card { padding: 20px; background: #0b6bff; }
```

## 良い例（デモ）
外側を空けたいときは`margin`を使います。

デモ: `/demos/margin-padding.html`

```css
.card { margin: 20px; background: #0b6bff; }
```

## なぜそうなるか
`padding`は箱の内側を広げるので、箱自体が大きくなります。`margin`は箱の外側の距離だけを空けます。

## よくあるミス
- 余白が増えないので`margin`と`padding`を両方足す
- どちらが外側か忘れる

## 次に読む記事
- [box-sizing](/phase4/box-sizing)