# CSSが効かない理由まとめ（保存/パス/class/上書き）

## 結論
原因はほぼ4つです。「保存してない」「パス違い」「class違い」「上書き」です。

## 何が起きているか
CSSは「正しく読み込めて」「正しい要素に当たって」「他に上書きされていない」時だけ効きます。

## 悪い例（デモ）
`class`名が違うと、CSSが当たりません。

デモ: `/demos/css-not-working.html`

```html
<p class="title">見出し</p>
```

```css
.titel { color: red; }
```

## 良い例（デモ）
HTMLとCSSの`class`名が一致しています。

デモ: `/demos/css-not-working.html`

```html
<p class="title">見出し</p>
```

```css
.title { color: red; }
```

## なぜそうなるか
CSSは「一致したものにだけ」当たります。スペルや大文字小文字が違うと別物です。

## よくあるミス
- ファイルを保存していない
- `link`のパスが違う
- `class`名が1文字違う
- もっと強いCSSに上書きされる

## 次に読む記事
- [補足：classとidの違い](/phase2/class-id)