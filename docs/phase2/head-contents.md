# headタグの中身（title/meta charset/viewport/link）

## 結論
`head`は「ページの設定室」。見た目は変わらなくても、ページの動きや読みやすさが決まります。

## 何が起きているか
`head`の中には、ブラウザへの指示が入ります。たとえば`title`はタブの名前、`meta charset`は文字化け対策、`viewport`はスマホ表示の調整です。

## 悪い例（デモ）
`title`が無いとタブ名が空のままになります。

デモ: `/demos/head-contents.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
</head>
<body>
  <h1>タイトルが空のページ</h1>
</body>
</html>
```

## 良い例（デモ）
`title`があるだけで、タブ名が分かりやすくなります。

デモ: `/demos/head-contents.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HTML/CSSの学習</title>
</head>
<body>
  <h1>タブ名が分かるページ</h1>
</body>
</html>
```

## なぜそうなるか
`head`はブラウザが最初に読む場所です。ここに指示があると、表示や動作が安定します。

## よくあるミス
- `meta charset`を書き忘れて文字化けする
- `viewport`が無くてスマホで文字が小さすぎる

## 次に読む記事
- [なぜHTMLにCSSが反映されるのか（link）](/phase2/why-css-applies)