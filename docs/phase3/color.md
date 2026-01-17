# 色

## 結論
色は`color`（文字）と`background-color`（背景）で分けて指定します。

## 何が起きているか
`color`は文字だけ、`background-color`は箱の背景だけに効きます。間違えると「色が変わらない」と感じます。

## 悪い例（デモ）
背景を変えたいのに`color`だけ変えてしまうと、文字だけが変わります。

デモ: `/demos/color.html`

```html
<div class="card">背景を変えたい</div>
```

```css
.card { color: #0b6bff; }
```

## 良い例（デモ）
背景を変えるには`background-color`を使います。

デモ: `/demos/color.html`

```html
<div class="card">背景を変えたい</div>
```

```css
.card { background-color: #0b6bff; color: white; }
```

## なぜそうなるか
CSSは「どこを塗るか」をプロパティで分けています。文字と背景は別物です。

## よくあるミス
- `color`で背景が変わると思う
- `background`と`background-color`を混ぜて混乱する

## 次に読む記事
- [文字（サイズ/太さ/行間）](/phase3/text-basics)