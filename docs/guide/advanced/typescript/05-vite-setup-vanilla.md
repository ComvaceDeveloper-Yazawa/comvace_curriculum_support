# 第5章：Viteで環境構築（Vanilla + TypeScript）

## この章で身につくこと

- Viteで新規プロジェクトを作れる
- npmコマンドの意味が分かる
- 開発サーバーを起動できる

## 5-1 まずはプロジェクトを作る

```bash
npm create vite@latest my-app
```

- `npm`: パッケージを扱う道具
- `create vite@latest`: Viteの最新テンプレを使う
- `my-app`: フォルダ名

このコマンドでプロジェクト用のフォルダが作られます。

## 5-2 フォルダに移動する

```bash
cd my-app
```

`my-app` フォルダに移動します。
以降の作業はこの中で行います。

## 5-3 必要なものをインストール

```bash
npm install
```

必要なライブラリを自動で揃えてくれます。
「準備が整うまで待つ」コマンドです。

## 5-4 開発サーバーを起動

```bash
npm run dev
```

開発サーバーを起動します。
表示されたURL（例: `http://localhost:5173`）を開くと、画面が見られます。

## 5-5 TypeScriptのテンプレを選ぶ

`npm create vite@latest` の途中で、
「Vanilla」→「TypeScript」を選びます。

これで最初から TypeScript が使える状態になります。

## ❌ よくあるミス

- `npm install` を忘れて `npm run dev` が失敗する
- `cd my-app` を忘れて別の場所でコマンドを打つ
- テンプレ選択で JavaScript を選んでしまう
