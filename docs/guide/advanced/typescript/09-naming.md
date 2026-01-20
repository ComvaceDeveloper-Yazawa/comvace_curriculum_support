# 第9章：変数名・関数名・引数名の付け方

## この章で身につくこと

- 名前が「説明」になると分かる
- 良い名前のコツが分かる

## 9-1 名前は「説明書き」

コードは人が読むものです。
だから名前は「中身が分かる言葉」にします。

```ts
const price = 1200;
const calcTax = (value: number): number => value * 1.1;
```

- `price`: 価格だとすぐ分かる
- `calcTax`: 税を計算する関数だと分かる

## 9-2 変数名のコツ

- 意味が分かる単語を使う
- 省略しすぎない
- 数字だけは避ける

NG例:
```ts
const a = 1200;
```

OK例:
```ts
const totalPrice = 1200;
```

`a` だと意味が分かりません。
`totalPrice` なら「合計金額」だと分かります。

## 9-3 関数名のコツ

関数は「動き」なので動詞を入れます。

```ts
const getUserName = (): string => "Sora";
const updateTotal = (value: number): number => value + 100;
```

- `get`: 取得する
- `update`: 更新する

## 9-4 引数名のコツ

引数は「材料」なので、
材料が分かる名前にします。

```ts
const calcDiscount = (price: number, rate: number): number => {
  return price * (1 - rate);
};
```

`price` と `rate` が何かが分かる名前です。
