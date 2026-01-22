# 第6章：Vueの基本用語と書き方

## この章で身につくこと

- Vueの関数をアロー関数で書く理由と形
- `ref` の意味と使い方
- SPAの意味が分かる

## 6-1 Vueは基本的にアロー関数で書く

Vue 3（`<script setup>`）では、関数はアロー関数で統一すると読みやすくなります。
`this` に依存せず、どの値を使っているかが見えやすいのがメリットです。

```vue
<template>
  <button @click="increment">+1</button>
  <p>count: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const increment = () => {
  count.value += 1;
};
</script>
```

## 6-2 refってなに？

Vueの `ref` は、**「変わる値」を作るための箱**です。
中身を変えると画面が自動で更新されます。

```ts
import { ref } from "vue";

const count = ref(0);
count.value += 1;
```

`ref` で作った値は `.value` で中身にアクセスします。
テンプレートでは `.value` を書かずに使えます。

## 6-3 SPAってなに？

SPA（Single Page Application）は、**画面遷移してもページ全体を再読み込みしない仕組み**です。
必要な部分だけ描画し直すので、アプリの動きがスムーズになります。
VueはSPAを作るためのフレームワークです。
