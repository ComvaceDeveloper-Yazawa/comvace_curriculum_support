# buttonとaの違い

## 結論
`button`は「動作」、`a`は「移動」。役割が違います。

## 何が起きているか
`a`はページ移動、`button`はフォーム送信や操作。見た目が似ても、意味が別です。

## 悪い例（デモ）
「送信」なのに`a`を使うと、本来の役割がズレます。

デモ: `/demos/button-vs-a.html`

```html
<a href="#">送信</a>
```

## 良い例（デモ）
操作は`button`で表します。

デモ: `/demos/button-vs-a.html`

```html
<button type="button">送信</button>
```

## なぜそうなるか
ブラウザはタグの意味で動作を決めます。意味が合うタグを使うと、予想どおりに動きます。

## よくあるミス
- 見た目だけで`a`を使い続ける
- `button`に`href`を付けようとする

## 次に読む記事
- [なぜフォーム系はCSSが効きにくいのか（appearance等）](/phase7/form-css-hard)