# 第9章：Vディレクティブ完全ガイド

## この章で身につくこと

- Vディレクティブの全体像と使い分け
- よく使う順番が分かる

## 9-1 Vディレクティブ全部まとめ

Vueでよく使う `v-` は、全部で以下の通りです。

### 表示・描画

- `v-text`：テキストを表示する（`{{ }}` の代わり）
- `v-html`：HTML文字列を描画する（XSS注意）
- `v-once`：初回だけ描画して固定する
- `v-memo`：条件が変わらない限り再描画しない
- `v-pre`：Vueのコンパイル対象外にする
- `v-cloak`：マウント前のチラつき防止

```vue
<p v-text="message"></p>
<div v-html="rawHtml"></div>
<p v-once>{{ title }}</p>
```

### 条件分岐

- `v-if` / `v-else-if` / `v-else`：表示の切り替え
- `v-show`：`display: none` で切り替え

#### プレビュー（ボタンで表示切り替え）

下のコードを動かすと、ボタンを押すたびにメッセージが表示/非表示になります。

```vue
<template>
  <button @click="isOpen = !isOpen">Toggle</button>
  <p v-if="isOpen">メニューが開いています</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>
```

<DemoPreview
  :html="`
  <div class='demo'>
    <button id='toggle'>Toggle</button>
    <p id='message' class='message'>メニューが開いています</p>
  </div>
  <script>
    const button = document.getElementById('toggle')
    const message = document.getElementById('message')
    let isOpen = true
    button.addEventListener('click', () => {
      isOpen = !isOpen
      message.style.display = isOpen ? 'block' : 'none'
    })
  </script>
  `"
  :css="`
  .demo { font-family: sans-serif; padding: 16px; }
  button { padding: 6px 12px; }
  .message { margin-top: 12px; }
  `"
/>

なぜ表示が切り替わるかというと、`v-if` が `isOpen` の値を見て
`true` なら描画、`false` なら非表示にしているからです。

```vue
<p v-if="ok">OK</p>
<p v-else>NG</p>
```

#### v-if と v-show の使い分け

- `v-if`：条件が`false`だと**DOMごと消える**。初期表示しない画面に向く
- `v-show`：条件が`false`でも**DOMは残る**。頻繁に出し入れするUIに向く

使い分けの目安

- ログイン前後で画面を入れ替える → `v-if`
- 開閉を何度も繰り返すモーダルやメニュー → `v-show`

### ループ

- `v-for`：繰り返し表示

```vue
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
```

#### プレビュー（配列を回すとこう表示される）

次の配列を `v-for` で回すと、画面には 3 つの選択肢が表示されます。

```ts
const menu = [
  { id: 1, label: "Home", value: "home" },
  { id: 2, label: "About", value: "about" },
  { id: 3, label: "Contact", value: "contact" },
];
```

```vue
<template>
  <select>
    <option
      v-for="item in menu"
      :key="item.id"
      :value="item.value"
      :label="item.label"
    >
      {{ item.label }}
    </option>
  </select>
</template>
```

<DemoPreview
  :html="`
  <div class='demo'>
    <label for='menu'>Menu:</label>
    <select id='menu'>
      <option value='home'>Home</option>
      <option value='about'>About</option>
      <option value='contact'>Contact</option>
    </select>
  </div>
  `"
  :css="`
  .demo { font-family: sans-serif; padding: 16px; }
  select { margin-left: 8px; }
  `"
/>

なぜ画面にこの文字が出ているかというと、`item.label` を
テンプレートにバインドしているからです。
`value` も `:value="item.value"` で紐づいています。

#### v-for は「配列（またはオブジェクト）」で使う

`v-for` は基本的に**配列を回すための機能**です。
オブジェクトも回せますが、最初は配列が分かりやすいです。

```ts
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
];
```

使う場面の例

- 商品一覧、記事一覧、コメント一覧などの「リスト表示」
- ボタンやカードをデータから生成したいとき

`v-for` では `:key` が必須です。
`id` のような「一意の値」を渡すと、更新が正しくなります。

```vue
<li v-for="item in items" :key="item.id">
  {{ item.name }}
</li>
```

### イベント

- `v-on`（省略 `@`）：クリックや入力イベント

```vue
<button @click="increment">+1</button>
```

関数を直接呼べるので、`@click` で処理を分けて書けます。

```vue
<template>
  <button @click="sayHello">Click</button>
</template>

<script setup lang="ts">
const sayHello = () => {
  console.log("hello");
};
</script>
```

`@click.prevent` のように修飾子が使えます。

### 属性バインド

- `v-bind`（省略 `:`）：属性とデータをつなぐ

```vue
<img :src="imageUrl" :alt="imageAlt" />
```

### 双方向バインド

- `v-model`：入力とデータを同期する

```vue
<input v-model="name" />
```

`v-model.trim` / `v-model.number` などの修飾子もあります。

### コンポーネント関連

- `v-slot`（省略 `#`）：スロットを受け取る
- `v-is`：動的コンポーネントを切り替える

```vue
<template #header>Title</template>
<component :is="currentComponent" />
```

## 9-2 まず覚える順番

最初はこの順でOKです。

1. `v-bind` / `v-on` / `v-model`
2. `v-if` / `v-for`
3. `v-show` / `v-slot` / `v-html`

それ以外は「必要になったら思い出せばOK」です。
