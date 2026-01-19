# 第2章：HTMLの基本構造（head と body）

## この章で身につくこと
- head と body の役割が分かる
- 画面に表示されるのは body だけだと理解できる
- HTMLの最小テンプレートをコピペで使える

## 結論：画面に表示されるのは body
HTMLには head と body という2つの大きな箱があります。
画面に表示されるのは body の中身だけです。
だから、迷ったら「まず body に書く」でOKです。

## HTMLの最小テンプレート
まずはこの形を丸ごと覚えましょう。
コピペして使って大丈夫です。

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>はじめてのHTML</title>
</head>
<body>
  <h1>こんにちは</h1>
  <p>これは本文です。</p>
</body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>はじめてのHTML</title></head><body><h1>こんにちは</h1><p>これは本文です。</p></body></html>' />

## `<!doctype html>` と `<html lang="ja">` の意味
`<!doctype html>` は「これはHTMLのルールで書いています」という宣言です。
最初に書くことで、ブラウザが正しく表示しやすくなります。

`<html lang="ja">` は「このページは日本語です」という意味です。
読み上げや検索で正しく扱われるため、最初に入れておくと安心です。

## head は何をする場所？
head は「画面に出ないけど必要な設定」を入れる場所です。

- 文字化けを防ぐ（`meta charset`）
- ページの名前を付ける（`title`）

`title` に書いた文字は、ブラウザのタブに表示される名前と連動しています。
「今開いているページの名前」だと思ってください。

今は「画面に出ない設定の場所」だと覚えれば十分です。

## body は何をする場所？
body は「画面に表示される内容」を書く場所です。
見出し、文章、画像、リンクなど、見えるものは全部ここに書きます。

## 迷ったら body に書けばOK
head に書く内容は、慣れるまで迷いやすいです。
今は「表示したいものは body」に書くと覚えてください。

## デモ：bodyを書き換えると画面が変わる
body の中身を変えると、画面の表示も変わります。

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>bodyの中身を変更</title>
</head>
<body>
  <h1>タイトルが変わる</h1>
  <p>本文も変わります。</p>
  <p>bodyがそのまま画面に出ます。</p>
</body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>bodyの中身を変更</title></head><body><h1>タイトルが変わる</h1><p>本文も変わります。</p><p>bodyがそのまま画面に出ます。</p></body></html>' />

## ❌ 初学者がよくやるミス
- 現象: 画面に何も出ない → 原因: head に書いている → 直し方: 表示したい内容は body に移す
- 現象: 文字が四角（□）になる → 原因: `meta charset` がない → 直し方: `<meta charset="UTF-8" />` を head に入れる
- 現象: HTMLが動かない → 原因: 1行目の `<!doctype html>` を忘れている → 直し方: 最小テンプレートを丸ごと使う
