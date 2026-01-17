# HTMLって何？Webページの正体

## 結論
HTMLは「文章の骨組み」を作る言語です。見た目よりも「意味のある部品」に分けるのが最初の仕事です。

## 何が起きているか
ブラウザはHTMLを読んで「ここは見出し」「ここは本文」「ここはリスト」と判断します。だから同じ文字でも、タグで囲うだけで表示が整理されます。

## 悪い例（デモ）
全部が1つの文章として扱われ、読みづらい並びになります。

デモ: `/demos/html-structure.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>悪い例</title>
  <style>
    .card { border: 2px solid #ddd; padding: 12px; width: 45%; }
  </style>
</head>
<body>
  <div class="card">
    HTMLの勉強を始めます。今日の目標は3つ。HTMLの意味、CSSの意味、並び方です。よろしくお願いします。
  </div>
</body>
</html>
```

## 良い例（デモ）
見出し・本文・箇条書きが分かれて、パッと読めます。

デモ: `/demos/html-structure.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>良い例</title>
  <style>
    .card { border: 2px solid #ddd; padding: 12px; width: 45%; }
  </style>
</head>
<body>
  <div class="card">
    <h1>HTMLの勉強を始めます</h1>
    <p>今日の目標は3つです。</p>
    <ul>
      <li>HTMLの意味</li>
      <li>CSSの意味</li>
      <li>並び方</li>
    </ul>
  </div>
</body>
</html>
```

## なぜそうなるか
ブラウザはタグの意味を使って、文字の重要度や並び方を決めます。タグがないと、全部「ただの文字」になります。

## よくあるミス
- すべてを`div`に入れてしまい、見出しやリストの意味が消える
- 見た目だけを先に整えようとして、HTMLがぐちゃぐちゃになる

## 次に読む記事
- [HTMLとCSSの役割分担](/phase0/html-css-roles)