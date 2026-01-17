# ブロック要素とインライン要素

## 結論
ブロックは「1行まるごと」、インラインは「文字の一部」です。

## 何が起きているか
ブロック要素は改行され、インライン要素は文の流れに混ざります。どちらかを知らないと配置でつまずきます。

<!-- image: block-inline-compare.png -->
<!-- priority: あると良い -->
<!-- what: ブロックが縦に積み上がり、インラインが横に並ぶ図 -->
<!-- why: 文章だけだと“1行まるごと”の意味が伝わりにくい -->

## 悪い例（デモ）
インラインのつもりで`div`を使うと、縦に並びます。

デモ: `/demos/block-inline.html`

```html
<div class="tag">HTML</div>
<div class="tag">CSS</div>
<div class="tag">JS</div>
```

## 良い例（デモ）
インラインの役割なら`span`を使います。

デモ: `/demos/block-inline.html`

```html
<span class="tag">HTML</span>
<span class="tag">CSS</span>
<span class="tag">JS</span>
```

## なぜそうなるか
`div`はブロック、`span`はインラインという決まりがあります。基本のルールを守るだけで配置は安定します。

## よくあるミス
- `div`をインラインだと思い込む
- `span`に幅や高さを付けようとして困る

## 次に読む記事
- [display（block/inline/inline-block）](/phase5/display-basics)