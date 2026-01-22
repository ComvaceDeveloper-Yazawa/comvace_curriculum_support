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

```vue
<p v-if="ok">OK</p>
<p v-else>NG</p>
```

### ループ

- `v-for`：繰り返し表示

```vue
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
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
