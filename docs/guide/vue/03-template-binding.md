# 第3章：テンプレートとデータのつなぎ方

## この章で身につくこと

- `{{ }}` の意味が分かる
- 画面にデータを表示できる
- ボタンを押したときの動作が分かる

## 3-1 文字を表示する

```vue
<template>
  <p>{{ message }}</p>
</template>

<script setup lang="ts">
const message = "こんにちは";
</script>
```

`message` の中身が画面に表示されます。
`{{ }}` は「ここにデータを出す場所」です。

## 3-2 クリックで動かす

```vue
<template>
  <button @click="count = count + 1">+1</button>
  <p>回数: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>
```

- `@click` は「クリックされたら」の意味
- `count` が増えるたびに画面も更新されます

`ref` は「変わる値」を作るときに使います。

## 3-3 まずはこの2つでOK

- `{{ }}` で表示
- `@click` で動き

ここまで分かれば次に進めます。
