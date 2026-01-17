# なぜフォーム系はCSSが効きにくいのか（appearance等）

## 結論
フォーム部品はブラウザ内蔵のデザインが強く、CSSが上書きされやすいです。

## 何が起きているか
`input`や`select`は「OSやブラウザの見た目」を持っています。だから普通の`div`より変えづらいです。

## 悪い例（デモ）
`border-radius`を付けても、見た目がほとんど変わりません。

デモ: `/demos/form-css-hard.html`

```css
input { border-radius: 999px; }
```

## 良い例（デモ）
`appearance: none;`で一度まっさらにしてから整えます。

デモ: `/demos/form-css-hard.html`

```css
input { appearance: none; border-radius: 999px; border: 1px solid #0b6bff; }
```

## なぜそうなるか
ブラウザが「使いやすさ」を優先して見た目を固定しています。`appearance`で解除すると自由度が上がります。

## よくあるミス
- フォームが`div`と同じだと思う
- `appearance`を知らずにハマる

## 次に読む記事
- [selectの最低限カスタム](/phase7/select-min-custom)