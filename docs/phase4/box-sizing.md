# box-sizing

## 結論
`box-sizing: border-box;`にすると、指定した幅の中に`padding`と`border`が収まります。

## 何が起きているか
デフォルトでは`padding`を足すと箱が大きくなります。`border-box`にすると、箱のサイズが崩れません。

<!-- image: box-sizing-compare.png -->
<!-- priority: あると良い -->
<!-- what: 同じwidthでもpaddingで箱が膨らむ/膨らまない比較図 -->
<!-- why: 口頭だけだとサイズの計算イメージが掴みにくい -->

## 悪い例（デモ）
`padding`を足したら箱が予定より大きくなります。

デモ: `/demos/box-sizing.html`

```css
.card { width: 200px; padding: 20px; }
```

## 良い例（デモ）
`border-box`なら箱の幅が変わりません。

デモ: `/demos/box-sizing.html`

```css
.card { width: 200px; padding: 20px; box-sizing: border-box; }
```

## なぜそうなるか
`content-box`（初期値）は「中身の幅」だけを`width`と考えます。`border-box`は「箱全体の幅」と考えます。

## よくあるミス
- `width`を決めたのに要素がはみ出る
- `box-sizing`をどこかで忘れて混乱する

## 次に読む記事
- [ブロック要素とインライン要素](/phase5/block-inline)