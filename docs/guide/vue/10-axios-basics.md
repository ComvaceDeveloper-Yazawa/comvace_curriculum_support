# 第10章：Axios入門（超初学者向け）

## この章で身につくこと

- Axiosが「通信の道具」だと分かる
- なぜAxiosを使うのかが分かる
- GET / POST / PUT / DELETE の役割が分かる
- Vueでの最小サンプルを試せる

## 10-1 Axiosってなに？

Axiosは、
「サーバーにデータを取りに行ったり、送ったりする道具」です。

たとえば、
- 投稿の一覧を取りに行く
- フォームの内容を送る
- 既存のデータを更新する

こういう「通信」を簡単に書けます。

## 10-2 なぜ使う？

JavaScriptには `fetch` という通信の機能がありますが、
Axiosはそれを「もっと書きやすく」した道具です。

- 書き方がシンプル
- JSONの扱いが楽
- エラー処理が分かりやすい
- `async/await` と相性が良い

「まずはこれを使えばOK」という定番の道具です。

## 10-3 どんなときに使う？

- ログイン：IDとパスワードを送る
- 一覧表示：投稿や商品を取りに行く
- 送信：問い合わせフォームを送る
- 更新：編集した内容を保存する
- 削除：データを消す

要するに、
「サーバーと会話する場面」ではよく使います。

## 10-4 GET / POST / PUT / DELETE ざっくり解説

超初学者向けに一言で言うと、こうです。

- GET：ちょうだい（データ取得）
- POST：これ作って（新規作成）
- PUT：これに書き換えて（更新）
- DELETE：これ消して（削除）

同じ「通信」でも、
目的によって使い分けます。

## 10-5 まずは最小サンプル

### 1. インストール

```bash
npm install axios
```

### 2. 最小のVue例

```vue
<template>
  <button @click="loadUsers">ユーザー取得</button>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const users = ref<{ id: number; name: string }[]>([]);

const loadUsers = async () => {
  const res = await axios.get("https://example.com/api/users");
  users.value = res.data;
};
</script>
```

ポイントはこれだけです。
- `axios.get(...)` でデータを取りに行く
- 返ってきたデータを `users.value` に入れる
- 画面に一覧表示される

※ `https://example.com/api/users` はダミーです。
実際は自分のAPIのURLに置き換えます。

## 10-6 ほかのメソッドも雰囲気だけ知る

- POST

```ts
await axios.post("/api/posts", { title: "Hello" });
```

- PUT

```ts
await axios.put("/api/posts/1", { title: "Updated" });
```

- DELETE

```ts
await axios.delete("/api/posts/1");
```

今は「こういう形なんだ」と分かればOKです。

## 10-7 まとめ

- Axiosは「サーバーと通信するための道具」
- よくある通信は GET / POST / PUT / DELETE
- Vueと組み合わせると、データ表示が簡単になる

ここまで理解できれば十分です。
次は「実際のAPIを使ってみる」練習をしてみましょう。
