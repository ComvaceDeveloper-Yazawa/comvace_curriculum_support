# 幅と高さ

## 結論
`width`と`height`は「箱の大きさ」を決めます。文字そのものではなく、箱のサイズです。

## 何が起きているか
要素は「箱」として扱われます。箱の大きさを変えると、背景や枠線も一緒に変わります。

## 悪い例（デモ）
幅が足りず、文字が窮屈になります。

デモ: `/demos/width-height.html`

```css
.card { width: 120px; height: 60px; }
```

## 良い例（デモ）
目的に合わせて幅と高さを確保します。

デモ: `/demos/width-height.html`

```css
.card { width: 240px; height: 100px; }
```

## なぜそうなるか
`width`と`height`は箱のサイズなので、文字が入る余裕が無いと詰まって見えます。

## よくあるミス
- 高さを固定しすぎて文字がはみ出る
- スマホで幅が足りなくなるのに固定する

## 次に読む記事
- [marginとpadding](/phase4/margin-padding)