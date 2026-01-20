# 第19章：DOM操作の基礎（querySelector）

## この章で身につくこと

- DOMが「画面の部品」だと分かる
- `querySelector` の使い方が分かる
- nullチェックの必要性が分かる

## 19-1 DOMは画面の部品

HTMLの要素は、JavaScript/TypeScriptから操作できます。
そのための仕組みをDOMと呼びます。

## 19-2 要素を取り出す

```ts
const titleEl = document.querySelector("h1");
```

`h1` の要素を探して取り出します。
見つからない場合は `null` になります。

## 19-3 nullチェックが必要

```ts
if (titleEl) {
  titleEl.textContent = "こんにちは";
}
```

`titleEl` が見つかったときだけ文字を変更します。
これでエラーを防げます。

## 19-4 まずはここまで

- `querySelector` で探す
- 見つからないときがある

この2つを覚えればOKです。

## ❌ よくあるミス

- `querySelector` の結果が `null` なのに使ってしまう
- セレクタを間違えて要素が見つからない
- 入力要素の型を意識せずに `value` を使う
