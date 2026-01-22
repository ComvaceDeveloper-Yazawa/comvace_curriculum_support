import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Comvace カリキュラムサポート",
  description: "HTML / CSS / Vue / TypeScript の初心者向け解説",
  base: "/comvace_curriculum_support/",
  themeConfig: {
    nav: [{ text: "ホーム", link: "/" }],

    sidebar: [
      {
        text: "入門編",
        items: [
          { text: "はじめに", link: "/" },

          {
            text: "HTML / CSS",
            items: [
              // HTML
              { text: "HTMLって？", link: "/guide/html/01-what-is-html" },
              {
                text: "HTMLの基本構造（head / body）",
                link: "/guide/html/02-html-structure",
              },
              {
                text: "HTMLのタグってなに？",
                link: "/guide/html/03-what-is-tag",
              },
              {
                text: "HTMLの主要なタグ",
                link: "/guide/html/04-basic-tags",
              },
              {
                text: "HTMLのまとめ",
                link: "/guide/html/05-html-summary",
              },

              // CSS
              {
                text: "CSSとはなにか？",
                link: "/guide/css/01-what-is-css",
              },
              {
                text: "CSSは何を担当する？（構造と見た目の分離）",
                link: "/guide/css/02-css-role",
              },
              {
                text: "CSSで色・文字を変えてみよう",
                link: "/guide/css/03-color-and-text",
              },
              {
                text: "CSSで余白をつけてみよう（padding / margin）",
                link: "/guide/css/04-spacing",
              },
              {
                text: "CSS入門のまとめ（ここから先は設計の話）",
                link: "/guide/css/99-css-summary",
              },
            ],
          },

          {
            text: "TypeScript",
            items: [
              { text: "学習するメリット", link: "/typescript/" },
              {
                text: "TypeScriptとはなにか？",
                link: "/guide/typescript/01-what-is-typescript",
              },
              {
                text: "まず覚える基本の型",
                link: "/guide/typescript/02-basic-types",
              },
              {
                text: "関数とユニオン型の入門",
                link: "/guide/typescript/03-function-and-union",
              },
              {
                text: "TypeScript入門のまとめ",
                link: "/guide/typescript/04-typescript-summary",
              },
            ],
          },
        ],
      },

      {
        text: "徹底解説編",
        items: [
          {
            text: "HTML / CSS",
            items: [
              {
                text: "検証ツールの活用方法",
                link: "/guide/advanced/devtools",
              },

              // 設計
              {
                text: "idとclass",
                link: "/guide/advanced/id-or-class",
              },
              {
                text: "グループ構造化の考え方",
                link: "/guide/advanced/grouping",
              },
              {
                text: "レスポンシブ対応の考え方",
                link: "/guide/advanced/responsive",
              },

              // 要素の性質
              {
                text: "ブロック要素？インライン要素？",
                link: "/guide/advanced/block-inline",
              },
              {
                text: "padding と margin の違い",
                link: "/guide/advanced/padding-margin",
              },

              // 表示制御
              {
                text: "display プロパティとは",
                link: "/guide/advanced/display",
              },
              { text: "display: flex 徹底解説", link: "/guide/advanced/flex" },
              { text: "display: grid 徹底解説", link: "/guide/advanced/grid" },

              // ★追加：カードレイアウト
              {
                text: "カードレイアウトの作り方（よくあるUIパターン）",
                link: "/guide/advanced/card-layout",
              },

              // 実務頻出
              { text: "画像の表示方法と最適化", link: "/guide/advanced/image" },
              {
                text: "セレクトボックスを自由にスタイルする",
                link: "/guide/advanced/selectbox",
              },
              { text: "疑似要素って？", link: "/guide/advanced/pseudo" },
              { text: "ボタンの作り方", link: "/guide/advanced/button" },
            ],
          },
          {
            text: "TypeScript",
            items: [
              {
                text: "コンピュータとプログラムの基本",
                link: "/guide/advanced/typescript/01-program-basics",
              },
              {
                text: "コマンドってなに？（ターミナル入門）",
                link: "/guide/advanced/typescript/02-command-basics",
              },
              {
                text: "ローカルホストってなに？",
                link: "/guide/advanced/typescript/03-localhost",
              },
              {
                text: "Viteってなに？",
                link: "/guide/advanced/typescript/04-what-is-vite",
              },
              {
                text: "Viteで環境構築（Vanilla + TypeScript）",
                link: "/guide/advanced/typescript/05-vite-setup-vanilla",
              },
              {
                text: "package.jsonってなに？",
                link: "/guide/advanced/typescript/06-package-json",
              },
              {
                text: "検証ツールの使い方（DevTools）",
                link: "/guide/advanced/typescript/07-devtools",
              },
              {
                text: "コンソールってなに？",
                link: "/guide/advanced/typescript/08-what-is-console",
              },
              {
                text: "変数名・関数名・引数名の付け方",
                link: "/guide/advanced/typescript/09-naming",
              },
              {
                text: "ブロックスコープとグローバルスコープ",
                link: "/guide/advanced/typescript/10-scope",
              },
              {
                text: "配列ってなに？",
                link: "/guide/advanced/typescript/11-array",
              },
              {
                text: "オブジェクトってなに？",
                link: "/guide/advanced/typescript/12-object",
              },
              {
                text: "組み込みメソッド入門（文字列・配列）",
                link: "/guide/advanced/typescript/13-built-in-methods",
              },
              {
                text: "条件分岐とループの考え方",
                link: "/guide/advanced/typescript/14-condition-loop",
              },
              {
                text: "関数の設計入門（入力→処理→出力）",
                link: "/guide/advanced/typescript/15-function-design",
              },
              {
                text: "type と interface の違い",
                link: "/guide/advanced/typescript/16-type-interface",
              },
              {
                text: "型の絞り込み（Type Narrowing）",
                link: "/guide/advanced/typescript/17-type-narrowing",
              },
              {
                text: "APIデータの型付け（JSON→型）",
                link: "/guide/advanced/typescript/18-api-typing",
              },
              {
                text: "DOM操作の基礎（querySelector）",
                link: "/guide/advanced/typescript/19-dom-basics",
              },
              {
                text: "画面の入力とイベント（click / input）",
                link: "/guide/advanced/typescript/20-events",
              },
              {
                text: "ミスの読み方（TSエラー・実行時エラー）",
                link: "/guide/advanced/typescript/21-error-reading",
              },
              {
                text: "ミニ制作（検索UI）",
                link: "/guide/advanced/typescript/22-mini-project",
              },
            ],
          },
        ],
      },
      {
        text: "Vue.js",
        items: [
          { text: "入門", link: "/vue/" },
          { text: "Vueってなに？", link: "/guide/vue/01-what-is-vue" },
          { text: "ViteでVueを始める", link: "/guide/vue/02-vite-setup" },
          {
            text: "テンプレートとデータのつなぎ方",
            link: "/guide/vue/03-template-binding",
          },
          {
            text: "コンポーネントとProps",
            link: "/guide/vue/04-components-props",
          },
          { text: "Vue入門のまとめ", link: "/guide/vue/05-vue-summary" },
          {
            text: "Vueの基本用語と書き方",
            link: "/guide/vue/06-vue-basics-terms",
          },
          {
            text: "Pinia入門（何か・いつ使うか・環境構築）",
            link: "/guide/vue/07-pinia-basics",
          },
          {
            text: "Pinia実践（storeToRefsと更新方法）",
            link: "/guide/vue/08-pinia-usage",
          },
          {
            text: "Vディレクティブ完全ガイド",
            link: "/guide/vue/09-v-directives",
          },
        ],
      },
    ],
  },
});
