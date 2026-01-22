# 第4章：コンポーネントとProps

## この章で身につくこと

- コンポーネントが「部品」だと分かる
- Propsが「渡すデータ」だと分かる

## 4-1 コンポーネントは部品

Vueでは「部品」を組み合わせて画面を作ります。

```vue
<!-- App.vue -->
<template>
  <UserCard name="Sora" />
</template>
```

`UserCard` という部品を使っています。

## 4-2 Propsでデータを渡す

```vue
<!-- UserCard.vue -->
<template>
  <p>こんにちは、{{ name }}さん</p>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
```

`name` というデータを受け取って表示しています。
`defineProps` は「受け取る内容」を書く場所です。

## 4-3 まずはこの感覚でOK

- 画面は部品の集まり
- 部品にデータを渡せる

ここまで分かれば入門は十分です。
