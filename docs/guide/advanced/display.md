# display プロパティとは

## 1. この章で身につくこと
- 要素の「ふるまい」を切り替えられる
- なぜ横に並ばないかが分かる
- レイアウトの崩れを自分で直せる

## 2. まずは違いを目で見る
display は「どう見えるか」を決めるスイッチです。
難しく考えず、「動きが変わる」とだけ覚えてOKです。

### デモ：ブロックとインラインの違い
いまから「積み上がる」と「横に並ぶ」を見ます。

```html
<div class="block">block</div>
<div class="block">block</div>
<span class="inline">inline</span>
<span class="inline">inline</span>
```

```css
.block { background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; }
.inline { background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }
```

<DemoPreview html='<div class="block">block</div><div class="block">block</div><span class="inline">inline</span> <span class="inline">inline</span>' css='.block { background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; } .inline { background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }' />

プレビューでは、
block は縦に積み上がり、inline は横に並びます。

## 3. display を変えるとどうなる？
同じHTMLでも、display を変えるとふるまいが変わります。

### デモ：span を block にする
いまから「span が箱になる」動きを見ます。

```html
<span class="as-block">spanが箱になる</span>
<span class="as-block">spanが箱になる</span>
```

```css
.as-block { display: block; background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; }
```

<DemoPreview html='<span class="as-block">spanが箱になる</span><span class="as-block">spanが箱になる</span>' css='.as-block { display: block; background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; }' />

プレビューでは、
span が縦に積み上がるようになります。

### デモ：div を inline にする
いまから「div が文字みたいになる」動きを見ます。

```html
<div class="as-inline">divが文字になる</div>
<div class="as-inline">divが文字になる</div>
```

```css
.as-inline { display: inline; background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }
```

<DemoPreview html='<div class="as-inline">divが文字になる</div><div class="as-inline">divが文字になる</div>' css='.as-inline { display: inline; background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }' />

プレビューでは、
箱だった div が横並びになります。

## 4. inline-block って何？
「横に並びたいけど、幅も持ちたい」
そんなときに使えるのが inline-block です。

### デモ：inline-block の動き
いまから「横に並ぶ箱」を見ます。

```html
<span class="chip">A</span>
<span class="chip">B</span>
<span class="chip">C</span>
```

```css
.chip { display: inline-block; width: 80px; padding: 8px; background: #e7ffe7; border: 2px solid #2f9e44; text-align: center; margin-right: 6px; }
```

<DemoPreview html='<span class="chip">A</span><span class="chip">B</span><span class="chip">C</span>' css='.chip { display: inline-block; width: 80px; padding: 8px; background: #e7ffe7; border: 2px solid #2f9e44; text-align: center; margin-right: 6px; }' />

プレビューでは、
横に並びながら幅も持てています。

## 5. display: none はどうなる？
「いったん消す」ための指定です。
消えた分だけ詰まります。

### デモ：none で非表示にする
いまから「途中の箱が消える」動きを見ます。

```html
<div class="row">A</div>
<div class="row hide">B</div>
<div class="row">C</div>
```

```css
.row { background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; }
.hide { display: none; }
```

<DemoPreview html='<div class="row">A</div><div class="row hide">B</div><div class="row">C</div>' css='.row { background: #d9f2ff; border: 2px solid #2b7de9; padding: 10px; margin-bottom: 8px; } .hide { display: none; }' />

プレビューでは、
B が消えて詰まっているのが分かります。

## 6. まとめ
- display は「ふるまいの切り替え」
- block は箱、inline は文章の一部
- 迷ったら「箱にしたいか」で判断してOKです
