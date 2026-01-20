# 第20章：画面の入力とイベント（click / input）

## この章で身につくこと

- イベントが「きっかけ」だと分かる
- click と input の基本が分かる

## 20-1 イベントは「きっかけ」

クリックされた、入力された、などの動きを
「イベント」と呼びます。

## 20-2 click の例

```ts
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    alert("押されました");
  });
}
```

`button` が押されたときに、
「押されました」と表示します。

## 20-3 input の例

```ts
const input = document.querySelector("input");

if (input) {
  input.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  });
}
```

入力欄に文字が入るたびに、
その文字をコンソールに出します。

## 20-4 まずは「きっかけ」と覚える

- クリックされたら動く
- 入力されたら動く

これがイベントの基本です。

## ❌ よくあるミス

- 要素が `null` のまま `addEventListener` を呼ぶ
- どのイベントが必要か分からず動かない
- `event.target` の型を意識せずに使ってしまう
