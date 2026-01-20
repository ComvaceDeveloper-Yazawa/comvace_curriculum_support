# 第17章：型の絞り込み（Type Narrowing）

## この章で身につくこと

- ユニオン型の扱い方が分かる
- 型を絞り込む方法が分かる

## 17-1 typeof で絞り込む

```ts
const format = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
};
```

`value` が文字なら大文字にし、
数字なら文字にして返しています。

## 17-2 in で絞り込む

```ts
type User = { name: string; age: number };
type Guest = { name: string; expiresAt: string };

const getLabel = (person: User | Guest): string => {
  if ("age" in person) {
    return `${person.name}（${person.age}）`;
  }
  return `${person.name}（期限: ${person.expiresAt}）`;
};
```

`age` があるなら `User`、なければ `Guest` と判断します。

## 17-3 Array.isArray で絞り込む

```ts
const size = (value: string | string[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  }
  return value.length;
};
```

配列なら「要素数」、文字列なら「文字数」を返します。

## 17-4 まずは3つでOK

- `typeof`: 文字/数字など
- `in`: オブジェクトの項目
- `Array.isArray`: 配列かどうか

この3つが分かれば十分です。

## ❌ よくあるミス

- 絞り込みせずにメソッドを呼んでエラーになる
- `in` で判定できるキーを間違える
- どの分岐でも `return` していない
