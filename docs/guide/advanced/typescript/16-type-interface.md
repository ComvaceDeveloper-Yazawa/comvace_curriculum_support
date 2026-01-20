# 第16章：type と interface の違い

## この章で身につくこと

- type と interface の基本が分かる
- 使い分けの目安が分かる

## 16-1 どちらも「型の名前」

どちらも「形に名前をつける」ための書き方です。

```ts
type User = {
  name: string;
  age: number;
};
```

`User` という名前の型を作っています。

```ts
interface Product {
  id: number;
  title: string;
}
```

`Product` という名前の型を作っています。

## 16-2 使い分けの目安

- オブジェクトの形を表す → `interface`
- それ以外（ユニオンなど） → `type`

```ts
type ID = string | number;
```

`ID` は「文字か数字どちらか」の型です。
こういうときは `type` を使います。

## 16-3 最初はこれでOK

- 迷ったら `type`
- オブジェクト専用なら `interface`

慣れてきたら、チームのルールに合わせればOKです。
