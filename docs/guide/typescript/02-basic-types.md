# 第2章：まず覚える基本の型

## この章で身につくこと

- よく使う基本の型が分かる
- 「箱に入れるものを決める」感覚が分かる
- 配列とオブジェクトの型の書き方が分かる

## 2-0 まずは変数（const / let）

プログラムは「箱に名前をつけて、あとで使う」ことから始まります。
この箱が「変数」です。

```ts
const name = "Hanako";
let score = 80;
```

- `const`: その後、入れ直さない箱
- `let`: 後で入れ直すかもしれない箱

`name` は文字が入る箱、`score` は数字が入る箱です。
`const` は「一度入れたら変えない」ときに使います。

まずは `const` を基本にして、必要なときだけ `let` を使いましょう。

## 2-1 基本の 3 種類（string / number / boolean）

```ts
const name: string = "Hanako";
const age: number = 20;
const isStudent: boolean = true;
```

`name` は文字、`age` は数字、`isStudent` は「はい・いいえ」の箱です。
文字は `""`（ダブルクォート）で囲むと文字列になります。
`true` は「はい」、`false` は「いいえ」だと思ってください。
`number` は記号を付けずに数字を書きます。

まずはこの 3 つが基本です。
「文字」「数」「はい・いいえ」と覚えれば OK です。

### number の範囲（ざっくり）

JavaScript/TypeScript の `number` は「大きすぎる数字が苦手」です。
安全に扱えるのは、だいたい次の範囲です。

- -9,007,199,254,740,991 から 9,007,199,254,740,991 まで

普段の計算や金額、画面の値なら問題ありません。
超巨大な数字を扱うときは別の方法を使います。

## 2-2 配列とオブジェクトの型

```ts
const scores: number[] = [80, 90, 75];

const user: { name: string; age: number } = {
  name: "Taro",
  age: 22,
};
```

配列は `型[]`、オブジェクトは中身の形をそのまま書きます。
「箱の中身の説明書」だと思うと分かりやすいです。
`scores` は数字だけの配列、`user` は `name` と `age` を持つ箱です。

## 2-3 null と undefined

```ts
let memo: string | null = null;
let cache: string | undefined;
```

`null` は「空だと決めた箱」、`undefined` は「まだ決めていない箱」です。
どちらも「今は中身がない」ことを表します。

`memo` は「文字か空」を許可します。
`cache` は「まだ何も入れていない」状態です。

よく使うのは `string | null` のように「入る可能性」を書く形です。
ここは今は「空の扱い方があるんだな」くらいで大丈夫です。

## 2-4 型推論と明示

TypeScript は、値から型を推測できます。

```ts
const title = "Hello"; // string と推測される
const count = 1; // number と推測される
```

不安なときや、意図を伝えたいときに明示します。
`title` は文字、`count` は数字だと自動で判断されます。

```ts
const role: "admin" | "user" = "admin";
```

`role` には `"admin"` か `"user"` のどちらかしか入れられません。

## 2-5 any は最終手段

`any` は「何でも入る」型です。
便利ですが、間違いに気づけなくなるので使いすぎ注意です。

```ts
let data: any = "text";
data = 123;
```

まずは基本の型で書く練習をしましょう。
`any` は何でも入るので、ミスに気づきにくくなります。
