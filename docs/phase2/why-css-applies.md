# なぜHTMLにCSSが反映されるのか（link）

## 結論
`<link>`でCSSファイルを読み込むから、HTMLにCSSが反映されます。

## 何が起きているか
`head`の中の`link`が「このCSSを使ってね」という指示になります。パスが正しくないと、CSSは読み込まれません。

## 悪い例（デモ）
`href`のパスが間違っていて、CSSが読み込まれません。

デモ: `/demos/why-css-applies.html`

```html
<link rel="stylesheet" href="./style.css" />
```

## 良い例（デモ）
正しい場所を指しているので、CSSが効きます。

デモ: `/demos/why-css-applies.html`

```html
<link rel="stylesheet" href="./styles/main.css" />
```

## なぜそうなるか
ブラウザは`link`を見つけると、そのファイルを探しに行きます。場所が違うと見つからず、何も起きません。

## よくあるミス
- `link`を`body`に書いてしまう
- パスが一文字違っていてCSSが効かない

## 次に読む記事
- [相対パスと絶対パス（./ と ../）](/phase2/path-relative-absolute)