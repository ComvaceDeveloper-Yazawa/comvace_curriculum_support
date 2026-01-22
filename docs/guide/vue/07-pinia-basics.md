# 第7章：Pinia入門（何か・いつ使うか・環境構築）

## この章で身につくこと

- Piniaとは何か、どんなときに使うかが分かる
- Piniaの環境構築ができる
- setup storeの基本形が分かる

## 7-1 Piniaってなに？どんなときに使う？

Piniaは、**アプリ全体で共有したい状態（データ）をまとめる場所**です。
Vueだけだと、データを渡すために `props` や `emit` を何層も繋ぐ必要があります。
Piniaを使うと、どのコンポーネントからでも同じデータを参照・更新できます。

よく使うシーン

- ログイン情報（ユーザー名・トークン）
- カート・お気に入り・通知などの「全体に関わる状態」
- 画面をまたいで引き継ぎたいデータ

小さい画面だけならPiniaは不要です。**「複数画面で共有する状態が出てきたら」導入**が目安です。

## 7-2 Piniaの環境構築（超わかりやすく）

1) インストール

```bash
npm i pinia
```

2) `main.ts` に登録

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
```

これで「どのコンポーネントからでもstoreが使える状態」になります。

## 7-3 setup storeの基本形（Piniaの推奨）

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
