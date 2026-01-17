# 補足：classって何に使う？

## 結論
`class`は「同じ見た目にしたいもの」に付ける名札です。CSSの入口になります。

## 何が起きているか
CSSは「どの要素に当てるか」を決めます。`class`があると、同じ見た目を一気に指定できます。

## 悪い例（デモ）
バラバラに書いて、あとで修正が地獄になります。

デモ: `/demos/class-attribute.html`

```html
<p style="color: #0b6bff;">お知らせ</p>
<p style="color: #0b6bff;">告知</p>
<p style="color: #0b6bff;">重要</p>
```

## 良い例（デモ）
`class`でまとめると、1か所だけ直せば済みます。

デモ: `/demos/class-attribute.html`

```html
<p class="label">お知らせ</p>
<p class="label">告知</p>
<p class="label">重要</p>
```

## なぜそうなるか
`class`は「このグループに同じCSSを当ててね」という合図です。

## よくあるミス
- `class`のつづりを間違える
- `class`を付けたのにCSS側の指定が無い

## 次に読む記事
- [headタグの中身（title/meta charset/viewport/link）](/phase2/head-contents)