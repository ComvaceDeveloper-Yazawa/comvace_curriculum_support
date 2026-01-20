# 第14章：条件分岐とループの考え方

## この章で身につくこと

- 条件分岐の基本が分かる
- ループの基本が分かる
- どれを使うかの目安が分かる

## 14-1 条件分岐（if / else）

```ts
const score = 75;

if (score >= 80) {
  console.log("合格");
} else {
  console.log("再チャレンジ");
}
```

`score` が 80 以上なら合格、
それ以外なら再チャレンジを表示します。

## 14-2 ループ（for）

```ts
for (let i = 0; i < 3; i++) {
  console.log("繰り返し");
}
```

`i` が 0 から 2 まで動き、
「繰り返し」を 3 回表示します。

## 14-3 ループ（for...of）

```ts
const colors = ["red", "blue", "green"];

for (const color of colors) {
  console.log(color);
}
```

配列の中身を1つずつ取り出して表示します。

## 14-4 ループ（forEach）

```ts
const prices = [100, 200, 300];
prices.forEach((price) => {
  console.log(price);
});
```

配列のそれぞれに処理をします。

## 14-5 どれを使えばいい？

- 回数が決まっている → `for`
- 配列の中身を回したい → `for...of` or `forEach`

まずはこの使い分けだけ覚えれば OK です。

## ❌ よくあるミス

- `for (let i = 0; i <= 3; i++)` で回数が1回多くなる
- `else` を書き忘れて想定外の動きになる
- 条件を書き間違えて無限ループになる
