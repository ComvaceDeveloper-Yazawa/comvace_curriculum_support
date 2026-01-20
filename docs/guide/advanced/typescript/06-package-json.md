# 第6章：package.jsonってなに？

## この章で身につくこと

- package.json が「プロジェクトの説明書」だと分かる
- scripts の意味が分かる
- dependencies の役割が分かる

## 6-1 package.json は「設定ノート」

`package.json` はプロジェクトの情報が入ったファイルです。

- どんな名前のプロジェクトか
- どんな道具を使っているか
- どんなコマンドが使えるか

## 6-2 scripts の意味

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- `dev`: 開発サーバーを起動
- `build`: 公開用にまとめる
- `preview`: buildしたものを確認

`npm run dev` のように実行します。

## 6-3 dependencies の意味

```json
{
  "dependencies": {
    "vite": "^5.0.0"
  }
}
```

このプロジェクトが使う道具（ライブラリ）の一覧です。
`npm install` はここを見て必要なものを揃えます。

## 6-4 今日はここまで

- `package.json` は説明書
- `scripts` は使えるコマンド
- `dependencies` は使う道具

これだけ覚えておけば OK です。

## ❌ よくあるミス

- `scripts` の名前を間違えて `npm run dev` が動かない
- `package.json` を消してしまい、プロジェクトが壊れる
- `dependencies` を手で消してしまい、再インストールで困る
