# 第3章：関数とユニオン型の入門

## この章で身につくこと

- 関数が「ひとまとまりの処理」だと分かる
- 関数の引数と戻り値の型が書ける
- ユニオン型（A または B）が分かる

## 3-1 関数ってなに？

関数は「こういうときに、この動きをしてほしい」を
ひとまとめにしたものです。
同じ処理を何度も書かなくて済みます。

例えば、ショッピングサイトで「カートに追加」を押したら
「合計金額を更新して画面に表示する」動きをしたいとき、
その一連の処理を関数としてまとめます。
「これを押されたらこの動きをする」を作るのが関数です。

```ts
const sayHello = (): string => {
  return "Hello!";
};
```

`=>` の形がアロー関数です。最後に `return` で結果を返します。
`sayHello` は「Hello!」という文字を返す関数です。

### 引数と戻り値ってなに？

- 引数: 関数に渡す材料（入力）
- 戻り値: 関数が返す結果（出力）

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

`a` と `b` が引数、`return` で返す値が戻り値です。

### 関数を実行する方法

関数は「名前()」の形で実行します。

```ts
const total = add(2, 3);
```

`add(2, 3)` のカッコの中は「引数を渡す場所」です。
ここでは `a` に `2`、`b` に `3` を渡しています。
考え方は「2 と 3 を足した結果を `total` に入れたい」です。
`add(2, 3)` が実行で、戻り値の `5` が `total` に入ります。

## 3-2 関数の書き方は2通りある

```ts
// 1) function を使う書き方
function sayHello(): string {
  return "Hello!";
}

// 2) アロー関数を使う書き方（こちらが今の主流）
const sayHelloArrow = (): string => {
  return "Hello!";
};
```

どちらも同じ動きですが、実務ではアロー関数をよく使います。
まずは「アロー関数を基本」と覚えておけば OK です。

## 3-3 関数の型の書き方

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

引数の型と、戻り値の型をセットで書きます。
`a` と `b` は数字、結果も数字で返す約束です。
引数は数だけに限りません。文字列やはい・いいえも渡せます。

```ts
const greetUser = (name: string): string => {
  return `こんにちは、${name}さん`;
};

const isShort = (text: string, max: number): boolean => {
  return text.length <= max;
};

const formatPrice = (price: number, unit: string): string => {
  return `${price}${unit}`;
};
```

`name` には文字列、`max` には数字、`unit` には単位の文字列を渡しています。

## 3-4 任意の引数とデフォルト値

```ts
const greet = (name: string, title?: string): string => {
  return title ? `${title} ${name}` : name;
};

const calcTax = (price: number, rate: number = 0.1): number => {
  return price * (1 + rate);
};
```

`?` を付けると「入っても入らなくても OK」になります。
`greet` は肩書きがなくても動き、`calcTax` は税率がないときに 0.1 を使います。

## 3-5 ユニオン型（A または B）

```ts
let input: string | number;
input = "10";
input = 10;
```

「どちらかが入る」ことを許可できます。
`input` には文字か数字のどちらかが入ります。

## 3-6 条件で絞り込む（型の絞り込み）

```ts
const toUpper = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
};
```

条件分岐で型が絞られるので、
安全にメソッドが使えるようになります。
文字のときだけ `toUpperCase` を使い、数字は文字に変換しています。
