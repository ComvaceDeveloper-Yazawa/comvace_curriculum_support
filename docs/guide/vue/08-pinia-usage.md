# 第8章：Pinia実践（storeToRefsと更新方法）

## この章で身につくこと

- storeToRefsの使いどころが分かる
- 値の更新方法を3パターンで整理できる
- setup store以外（options store）の書き方が分かる

## 8-1 storeToRefsでテンプレートに渡す

`store` を分割代入するとリアクティブが失われます。
そのため、状態は `storeToRefs` で取り出すのが基本です。

```vue
<template>
  <p>{{ count }}</p>
  <p>double: {{ double }}</p>
  <button @click="increment">+1</button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
const { count, double } = storeToRefs(store);
const increment = () => {
  store.increment();
};
</script>
```

## 8-2 値を書き換える方法（3パターン）

setup storeでは、値の書き換えがシンプルです。

```ts
const store = useCounterStore();
const { count } = storeToRefs(store);

// 1) storeを直接更新する
store.count += 1;

// 2) actionを呼ぶ（ロジックをまとめたいとき）
store.increment();

// 3) storeToRefsのrefを更新する
count.value += 1;
```

テンプレート側では `v-model="count"` のように使えば、入力と同期できます。

## 8-3 setup store以外（options store）の書き方

setup store以外の書き方もあります。`state / getters / actions` で分ける方法です。

```ts
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    items: [] as string[],
  }),
  getters: {
    itemCount: (state) => state.items.length,
  },
  actions: {
    addItem(item: string) {
      this.items.push(item);
    },
  },
});
```

- setup store: Vueの`ref`や`computed`をそのまま使える
- options store: 書き方が「Vue 2っぽく」分かりやすい
