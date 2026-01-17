# なぜdivは縦に並ぶのか

## 結論
`div`は「ブロック要素」なので、横に並ばず縦に積まれます。

## 何が起きているか
ブロック要素は幅いっぱいを占めるルールです。だから次の要素は必ず次の行に行きます。

## 悪い例（デモ）
横に並べたいのに、縦に積まれてしまいます。

デモ: `/demos/why-div-stack.html`

```html
<div class="box">A</div>
<div class="box">B</div>
<div class="box">C</div>
```

## 良い例（デモ）
`display: inline-block;`で横並びになります。

デモ: `/demos/why-div-stack.html`

```html
<div class="box inline">A</div>
<div class="box inline">B</div>
<div class="box inline">C</div>
```

## なぜそうなるか
ブロック要素は「1行まるごと使う」決まり。`inline-block`にすると「文字のように並ぶ」決まりになります。

## よくあるミス
- `div`は横に並ぶと思い込む
- `inline-block`にしたのに隙間ができて焦る（後で解決する）

## 次に読む記事
- [補足：classって何に使う？](/phase1/class-attribute)