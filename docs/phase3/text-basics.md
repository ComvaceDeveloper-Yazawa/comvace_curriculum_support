# 文字（サイズ/太さ/行間）

## 結論
文字の読みやすさは`font-size`、`font-weight`、`line-height`の3つで決まります。

## 何が起きているか
文字は「大きさ」「太さ」「行の間隔」で印象が変わります。行間が詰まりすぎると読みにくくなります。

## 悪い例（デモ）
行間が詰まりすぎて、文字がぎゅうぎゅうです。

デモ: `/demos/text-basics.html`

```css
.text { font-size: 16px; font-weight: 700; line-height: 1; }
```

## 良い例（デモ）
行間を少し広げると読みやすくなります。

デモ: `/demos/text-basics.html`

```css
.text { font-size: 16px; font-weight: 700; line-height: 1.6; }
```

## なぜそうなるか
行間は「行と行の距離」です。狭すぎると文字が重なったように見えます。

## よくあるミス
- `line-height`を付けず、読みにくいままにする
- `font-weight`を上げすぎてゴツくなる

## 次に読む記事
- [幅と高さ](/phase3/width-height)