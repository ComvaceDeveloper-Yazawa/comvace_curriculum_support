# HTMLとCSSの役割分担

## 結論
HTMLは骨組み、CSSは見た目担当。混ぜないほど理解が早くなります。

## 何が起きているか
ブラウザはHTMLで「何があるか」を把握し、CSSで「どう見せるか」を決めます。CSSが無いと、HTMLは素の表示になります。

## 悪い例（デモ）
HTMLだけだと、要素は並ぶけど見た目は素のままです。

デモ: `/demos/html-vs-css.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>悪い例</title>
</head>
<body>
  <h1>学習カード</h1>
  <p>CSSが無いので、見た目が整っていません。</p>
  <button>開始</button>
</body>
</html>
```

## 良い例（デモ）
CSSで余白や色を付けると、同じHTMLでも見やすくなります。

デモ: `/demos/html-vs-css.html`

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>良い例</title>
  <style>
    body { font-family: sans-serif; background: #f6f6f6; }
    .card { background: white; padding: 16px; border-radius: 12px; width: 260px; }
    .card button { background: #0b6bff; color: white; border: 0; padding: 8px 12px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>学習カード</h1>
    <p>CSSで見た目が整いました。</p>
    <button>開始</button>
  </div>
</body>
</html>
```

## なぜそうなるか
HTMLは「何があるか」を伝えるだけなので、飾りは付きません。CSSがはじめて見た目を作ります。

## よくあるミス
- HTMLに見た目のことを詰め込みすぎる
- CSSを書いたのにHTMLの構造が雑で整えにくい

## 次に読む記事
- [タグ・要素・属性とは](/phase1/tag-element-attr)