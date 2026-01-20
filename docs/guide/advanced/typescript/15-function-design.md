# 第15章：関数の設計入門（入力→処理→出力）

## この章で身につくこと

- 関数を「小さく分ける」理由が分かる
- 入力→処理→出力の考え方が分かる

## 15-1 関数は小さく作る

大きな処理は、役割ごとに分けた方が分かりやすくなります。

```ts
const calcTotal = (price: number, taxRate: number): number => {
  return price * (1 + taxRate);
};
```

`calcTotal` は「計算だけ」を担当しています。
小さな関数だと読みやすく、直しやすいです。

## 15-2 入力→処理→出力

```ts
const formatYen = (value: number): string => {
  return `${value}円`;
};
```

- 入力: `value`
- 処理: 文字列にする
- 出力: `"100円"` のような文字列

## 15-3 使う側はスッキリする

```ts
const total = calcTotal(1200, 0.1);
const label = formatYen(total);
```

「計算」と「表示用の形」を分けると、
コードが読みやすくなります。

## 15-4 最初は1つのことだけさせる

- 1つの関数に1つの役割
- 名前で中身が想像できる

これだけ意識できれば十分です。
