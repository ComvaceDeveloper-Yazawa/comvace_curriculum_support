# display（block/inline/inline-block）

## 結論
`display`は「並び方のスイッチ」です。block/inline/inline-blockで性格が変わります。

## 何が起きているか
`display`は要素のルールを変えます。`inline-block`は「横に並ぶけど幅や高さも持てる」便利な形です。

## 悪い例（デモ）
`inline`のままだと幅と高さが効きません。

デモ: `/demos/display-basics.html`

```css
.bad span { display: inline; width: 120px; height: 40px; }
```

## 良い例（デモ）
`inline-block`なら横に並びつつサイズが効きます。

デモ: `/demos/display-basics.html`

```css
.good span { display: inline-block; width: 120px; height: 40px; }
```

## なぜそうなるか
`inline`は文字と同じ扱いなので、サイズが効きません。`inline-block`は箱として扱われます。

## よくあるミス
- `inline`のまま幅や高さを指定してしまう
- `display`を切り替えたのに余白の扱いが変わるのを知らない

## 次に読む記事
- [Flexboxで横に並べる（justify/align）](/phase6/flex-justify-align)