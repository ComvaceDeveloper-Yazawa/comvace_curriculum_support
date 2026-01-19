# 第 4 章：主要な HTML タグを覚えよう

## この章で身につくこと

- どのタグを、いつ使うかの判断ができる
- `div`と`p`の役割の違いが分かる
- 主要タグの最小例をコピペで使える
- 公式の一覧を見ながら学べる

## 1. div タグ：なんでも入れて OK な「まとめる箱」

`div`は意味を持たない箱です。
見出し・文章・リンク・入力欄など、何でも入れて OK です。
「まとめたいとき」に使うと覚えれば十分です。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>divの例</title>
  </head>
  <body>
    <div>
      <h1>見出し</h1>
      <p>本文の文章です。</p>
      <a href="#">リンク</a>
      <ul>
        <li>項目A</li>
      </ul>
      <input type="text" placeholder="入力" />
    </div>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>divの例</title></head><body><div><h1>見出し</h1><p>本文の文章です。</p><a href="#">リンク</a><ul><li>項目A</li></ul><input type="text" placeholder="入力" /></div></body></html>' />

## 2. p タグ：文章専用のタグ（ここ超重要）

`p`は「文章を書くためのタグ」です。
文章以外の構造用タグ（例：`div`、見出しなど）を入れるのは NG です。
たとえば `p` の中に `div` を入れるのは避けましょう。

`p`のように、中に構造用タグを入れてはいけないタグは複数存在します。
CSS でレイアウトを学ぶときに解説を行います。
今は「p は文章専用」と覚えておけば OK です。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>pの例</title>
  </head>
  <body>
    <p>これは文章だけの段落です。</p>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>pの例</title></head><body><p>これは文章だけの段落です。</p></body></html>' />

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>pのNG例</title>
</head>
<body>
    <p>
      <div>これはNG例です</div>
      <p>これはNG例です</p>
      <h1>これはNG例です</h1>
    </p>
</body>
</html>
```

## 3. a タグ：リンクを作る

`a`はリンクを作るタグです。
押すと別ページに移動します。
青く見えるのはブラウザのデフォルトです。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>aの例</title>
  </head>
  <body>
    <a href="https://comvace.co.jp/">リンクはこちら</a>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>aの例</title></head><body><a href="https://comvace.co.jp/">リンクはこちら</a></body></html>' />

## 4. ul / li：リスト（箇条書き）

`ul`は「順番のないリスト」、`li`は「その中の項目」です。
一覧やメニューでよく使います。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ul/liの例</title>
  </head>
  <body>
    <ul>
      <li>りんご</li>
      <li>みかん</li>
    </ul>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>ul/liの例</title></head><body><ul><li>りんご</li><li>みかん</li></ul></body></html>' />

## 5. input：入力欄

`input`はユーザーが文字を入力する欄です。
単体だと「何を入力する欄か」分かりにくいので、説明文と一緒に使うのが基本です。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>inputの例</title>
  </head>
  <body>
    <input type="text" placeholder="名前を入力" />
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>inputの例</title></head><body><input type="text" placeholder="名前を入力" /></body></html>' />

## 6. select / option：選択肢を選ばせる

`select`は選択ボックス、`option`はその中の選択肢です。
用意された選択肢から選ぶときに使います。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>select/optionの例</title>
  </head>
  <body>
    <select>
      <option>東京</option>
      <option>大阪</option>
    </select>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>select/optionの例</title></head><body><select><option>東京</option><option>大阪</option></select></body></html>' />

## 7. table：表を作るためのタグ

`table`は行と列のあるデータを表すためのタグです。
`table` / `tr` / `th` / `td` を使います。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>tableの例</title>
  </head>
  <body>
    <table>
      <tr>
        <th>名前</th>
        <th>年齢</th>
      </tr>
      <tr>
        <td>佐藤</td>
        <td>20</td>
      </tr>
    </table>
  </body>
</html>
```

<DemoPreview html='<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><title>tableの例</title></head><body><table><tr><th>名前</th><th>年齢</th></tr><tr><td>佐藤</td><td>20</td></tr></table></body></html>' />

table はデータを表として見せたいときに使います。
レイアウトを整える目的で table を使うことは、今はおすすめしません。
レイアウトは CSS 編で学びます。

## 8. タグ一覧は暗記しなくて OK（公式を見る）

全部覚える必要はありません。
困ったら公式を見るのが一番確実です。

- [MDN Web Docs：HTML 要素リファレンス](https://developer.mozilla.org/ja/docs/Web/HTML/Element)

## ❌ 初学者がよくやるミス

- 現象: `p` の中に `div` を入れてしまう → 原因: `p` が文章専用だと知らない → 直し方: 文章は`p`、構造は`div`で分ける
- 現象: なんでも `div` か `p` で囲んでしまう → 原因: タグの役割を知らない → 直し方: リンクは`a`、一覧は`ul/li`など役割で選ぶ
- 現象: `table` をレイアウト目的で使おうとする → 原因: 表の意味を知らない → 直し方: 表はデータ、レイアウトは CSS で行う

これらは誰でも一度は通る道です。気づけた時点で、もう一段レベルアップしています。
