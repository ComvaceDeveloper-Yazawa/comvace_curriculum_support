import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Comvace Curriculum Support",
  description: "Beginner-friendly explanations for HTML/CSS/Vue/TypeScript",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: 'HTML/CSSロードマップ',
        items: [
          { text: 'トップ', link: '/' },
          { text: 'フェーズ0: HTMLって何？', link: '/phase0/html-what' },
          { text: 'フェーズ0: HTMLとCSSの役割分担', link: '/phase0/html-css-roles' },
          { text: 'フェーズ1: タグ・要素・属性', link: '/phase1/tag-element-attr' },
          { text: 'フェーズ1: HTMLの主要タグ', link: '/phase1/main-tags' },
          { text: 'フェーズ1: なぜdivは縦に並ぶのか', link: '/phase1/why-div-stack' },
          { text: 'フェーズ1: 補足 classって何に使う？', link: '/phase1/class-attribute' },
          { text: 'フェーズ2: headタグの中身', link: '/phase2/head-contents' },
          { text: 'フェーズ2: CSSが反映される理由', link: '/phase2/why-css-applies' },
          { text: 'フェーズ2: 相対パスと絶対パス', link: '/phase2/path-relative-absolute' },
          { text: 'フェーズ2: CSSが効かない理由まとめ', link: '/phase2/css-not-working' },
          { text: 'フェーズ2: 補足 classとidの違い', link: '/phase2/class-id' },
          { text: 'フェーズ3: 色', link: '/phase3/color' },
          { text: 'フェーズ3: 文字の基本', link: '/phase3/text-basics' },
          { text: 'フェーズ3: 幅と高さ', link: '/phase3/width-height' },
          { text: 'フェーズ4: marginとpadding', link: '/phase4/margin-padding' },
          { text: 'フェーズ4: box-sizing', link: '/phase4/box-sizing' },
          { text: 'フェーズ5: ブロックとインライン', link: '/phase5/block-inline' },
          { text: 'フェーズ5: displayの基本', link: '/phase5/display-basics' },
          { text: 'フェーズ6: Flexboxで横に並べる', link: '/phase6/flex-justify-align' },
          { text: 'フェーズ6: 中央寄せ', link: '/phase6/center-align' },
          { text: 'フェーズ6: 画像の中心に文字', link: '/phase6/text-on-image' },
          { text: 'フェーズ7: inputの正体', link: '/phase7/input-type' },
          { text: 'フェーズ7: selectの正体', link: '/phase7/select-native' },
          { text: 'フェーズ7: buttonとaの違い', link: '/phase7/button-vs-a' },
          { text: 'フェーズ7: フォーム系はCSSが効きにくい', link: '/phase7/form-css-hard' },
          { text: 'フェーズ7: selectの最低限カスタム', link: '/phase7/select-min-custom' },
          { text: 'フェーズ7: リセットCSS', link: '/phase7/reset-css' },
          { text: 'フェーズ8: Gridでカード', link: '/phase8/grid-cards' },
          { text: 'フェーズ8: object-fit', link: '/phase8/object-fit' },
          { text: 'フェーズ8: フォーム全体の見た目', link: '/phase8/form-layout' },
          { text: 'フェーズ9: 検証ツールの使い方', link: '/phase9/devtools-basic' },
          { text: 'フェーズ9: CSSが打ち消される理由', link: '/phase9/css-overwritten' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Getting Started', link: '/vue/' }
        ]
      },
      {
        text: 'TypeScript',
        items: [
          { text: 'TypeScript Basics', link: '/typescript/' }
        ]
      },
      {
        text: 'Common Errors',
        items: [
          { text: 'Troubleshooting', link: '/errors/' }
        ]
      }
    ]
  }
})
