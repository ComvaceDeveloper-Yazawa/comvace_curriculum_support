# 第22章：ミニ制作（検索UI）

## この章で身につくこと

- 入力と表示をつなげる流れが分かる
- 配列・イベント・DOM操作を一通り使える

## 22-1 目標

「入力した文字でリストを絞り込む」検索UIを作ります。

## 22-2 HTMLの用意

```html
<input id="keyword" placeholder="検索" />
<ul id="list"></ul>
```

入力欄と表示エリアを用意します。

## 22-3 TypeScriptの準備

```ts
const items = ["Apple", "Banana", "Cherry", "Grape", "Orange"];

const inputEl = document.querySelector("#keyword");
const listEl = document.querySelector("#list");
```

- `items` は元のリスト
- `inputEl` と `listEl` は画面の要素

## 22-4 表示する関数

```ts
const renderList = (values: string[]): void => {
  if (!listEl) return;
  listEl.innerHTML = values.map((value) => `<li>${value}</li>`).join("");
};
```

`values` の中身を `li` にして表示します。
`innerHTML` でまとめて書き換えます。

## 22-5 入力に合わせて絞り込む

```ts
if (inputEl) {
  inputEl.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(keyword)
    );

    renderList(filtered);
  });
}
```

- 入力された文字を `keyword` に入れる
- `filter` で一致するものだけ残す
- `renderList` で表示する

## 22-6 最初の表示

```ts
renderList(items);
```

ページを開いたときに全件表示します。

## 22-7 ここまでできればOK

- 入力でリストが絞れる
- 配列・イベント・DOMがつながる

これで小さな画面が作れるようになります。
