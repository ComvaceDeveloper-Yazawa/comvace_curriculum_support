# 第18章：APIデータの型付け（JSON→型）

## この章で身につくこと

- APIの返り値に型を付ける理由が分かる
- JSONから型を作る流れが分かる

## 18-1 APIのデータは形が決まっている

例えば次のようなJSONが返ってくるとします。

```json
{
  "id": 1,
  "title": "Hello",
  "published": true
}
```

この形をTypeScriptで表すと、次のようになります。

```ts
type Article = {
  id: number;
  title: string;
  published: boolean;
};
```

`id` は数字、`title` は文字、`published` は true/false です。

## 18-2 使う側で安心できる

```ts
const article: Article = {
  id: 1,
  title: "Hello",
  published: true,
};
```

`Article` の形に合わないと、エラーで教えてくれます。

## 18-3 まずは型を作る習慣

- JSON を見る
- 同じ形の型を作る
- その型で受け取る

この流れを覚えるだけで十分です。

## ❌ よくあるミス

- APIの形と型がズレていてエラーが出る
- 取得できない項目を必須にしてしまう
- `string` と `number` の取り違えに気づけない
