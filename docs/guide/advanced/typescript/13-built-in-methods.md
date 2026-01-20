# 第13章：組み込みメソッド入門（文字列・配列）

## この章で身につくこと

- 組み込みメソッドが「便利な機能」だと分かる
- 文字列と配列のよく使うメソッドが分かる

## 13-1 文字列のよく使うメソッド

```ts
const text = "Hello World";
const upper = text.toUpperCase();
```

`toUpperCase` は大文字に変換します。
`upper` は "HELLO WORLD" になります。

```ts
const hasHello = text.includes("Hello");
```

`includes` は「含まれているか」を調べます。
`hasHello` は `true` になります。

```ts
const words = text.split(" ");
```

`split` は文字列を分割します。
`words` は `["Hello", "World"]` になります。

## 13-2 配列のよく使うメソッド

```ts
const scores = [80, 90, 75];
const plusOne = scores.map((score) => score + 1);
```

`map` は「全員に同じ処理をする」です。
`plusOne` は `[81, 91, 76]` になります。

```ts
const high = scores.filter((score) => score >= 85);
```

`filter` は条件に合うものだけ残します。
`high` は `[90]` になります。

```ts
const firstHigh = scores.find((score) => score >= 85);
```

`find` は最初に見つかった1つだけを返します。
`firstHigh` は `90` になります。

## 13-3 まずはこの6つでOK

- 文字列: `toUpperCase`, `includes`, `split`
- 配列: `map`, `filter`, `find`

最初はこの6つを覚えれば十分です。
