import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Comvace カリキュラムサポート",
  description: "HTML / CSS / Vue / TypeScript の初心者向け解説",
  base: "/comvace-curriculum-support/",
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
        ],
      },

      {
        text: "Vue.js",
        items: [{ text: "入門", link: "/vue/" }],
      },

      {
        text: "TypeScript",
        items: [{ text: "基礎", link: "/typescript/" }],
      },

      {
        text: "よくあるエラー",
        items: [{ text: "トラブルシューティング", link: "/errors/" }],
      },
    ],
  },
});
