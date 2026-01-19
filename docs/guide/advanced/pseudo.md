# 疑似要素って？

## 1. この章で身につくこと
- 疑似要素の役割が分かる
- HTMLを増やさず飾りを足せる
- よくあるUI表現を作れる

## 2. 疑似要素は「追加の小さな部品」
疑似要素は、
HTMLに書いていない部品を追加する方法です。

「ちょっとした飾り」を付けたいときに便利です。

## 3. before / after の基本
### デモ：NEWラベルを付ける
いまから「ラベルを足す」動きを見ます。

```html
<div class="card">商品カード</div>
```

```css
.card { position: relative; background: #fff; border: 1px solid #ddd; padding: 16px; width: 200px; }
.card::before { content: "NEW"; position: absolute; top: -10px; left: -10px; background: #ff6b6b; color: #fff; font-size: 12px; padding: 4px 6px; border-radius: 4px; }
```

<DemoPreview html='<div class="card">商品カード</div>' css='.card { position: relative; background: #fff; border: 1px solid #ddd; padding: 16px; width: 200px; } .card::before { content: "NEW"; position: absolute; top: -10px; left: -10px; background: #ff6b6b; color: #fff; font-size: 12px; padding: 4px 6px; border-radius: 4px; }' />

プレビューでは、
HTMLにない「NEW」が追加されています。

## 4. ちょっとした区切り線にも使える
### デモ：タイトルの下に線を引く
いまから「下線を足す」動きを見ます。

```html
<h3 class="title">見出し</h3>
```

```css
.title { position: relative; display: inline-block; padding-bottom: 6px; }
.title::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 3px; background: #2b7de9; }
```

<DemoPreview html='<h3 class="title">見出し</h3>' css='.title { position: relative; display: inline-block; padding-bottom: 6px; } .title::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 3px; background: #2b7de9; }' />

プレビューでは、
HTMLを増やさずに線が引けています。

## 5. よくあるミス
- content を書き忘れる
- position の基準がなくてずれる
- 装飾を増やしすぎる

## 6. まとめ
- 疑似要素は「追加の小さな部品」
- HTMLを増やさずに飾れる
- 使いすぎず、ポイントだけに使うのがコツ
