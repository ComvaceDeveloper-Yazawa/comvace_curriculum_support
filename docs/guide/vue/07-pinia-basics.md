# 第7章：Pinia入門（何か・いつ使うか・環境構築）

## この章で身につくこと

- Piniaの導入手順を順番どおりに理解できる
- storeファイルの作り方と命名規則が分かる
- テンプレートでの呼び出し方が分かる

## 7-1 npm i pinia でインストールする

```bash
npm i pinia
```

## 7-2 main.ts で登録する

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
```

これで「どのコンポーネントからでもstoreが使える状態」になります。

## 7-3 storesフォルダを作る（命名規則）

基本の配置は `src/stores` です。
ファイル名は **`use◯◯Store.ts`** の形が分かりやすいです。

例

- `src/stores/useCounterStore.ts`
- `src/stores/useUserStore.ts`

## 7-4 storeファイルの中身はこう

Piniaはsetup storeで使うのが基本です。

```ts
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const double = computed(() => count.value * 2);

  const increment = () => {
    count.value += 1;
  };

  return { count, double, increment };
});
```

## 7-5 テンプレートで呼び出すにはこう

```vue
<template>
  <p>count: {{ count }}</p>
  <button @click="increment">+1</button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/useCounterStore";

const store = useCounterStore();
const { count } = storeToRefs(store);
const increment = () => {
  store.increment();
};
</script>
```

## 7-6 検証ツールで見れる場所

Piniaの状態は **Vue Devtools の「Pinia」タブ**で確認できます。
ローカルストレージに自動で保存されるわけではないので注意してください。
永続化したい場合は、別途プラグインを使って `localStorage` に保存します。
