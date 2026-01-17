# 画像サイズ調整（object-fit）

## 結論
`object-fit`で「画像を枠にどう収めるか」を決めます。主に`cover`と`contain`を覚えればOKです。

## 何が起きているか
画像は枠のサイズと比べて大きさが違います。`object-fit`が無いと、引き伸ばされて変になります。

<!-- image: object-fit-cover-contain.png -->
<!-- priority: 必須 -->
<!-- what: 同じ枠に対してcoverとcontainで見え方が違う比較図 -->
<!-- why: 文字だと「はみ出す/余白が残る」が伝わりにくい -->

## 悪い例（デモ）
枠に合わせて引き伸ばされ、画像がゆがみます。

デモ: `/demos/object-fit.html`

```css
img { width: 140px; height: 90px; }
```

## 良い例（デモ）
`object-fit: cover;`で枠にきれいに収まります。

デモ: `/demos/object-fit.html`

```css
img { width: 140px; height: 90px; object-fit: cover; }
```

## なぜそうなるか
画像は「本来の比率」を持っています。`object-fit`は比率を守るかどうかを決めるスイッチです。

## よくあるミス
- 画像がゆがんでいるのに気づかない
- `object-fit`を付け忘れる

## 次に読む記事
- [フォーム全体の見た目調整](/phase8/form-layout)