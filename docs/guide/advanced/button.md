# ボタンの作り方

## 1. この章で身につくこと
- ボタンの基本構造が分かる
- button と a の使い分けが分かる
- 最低限の見た目を整えられる

## 2. まずはボタンの役割を確認する
ボタンは「その場で何かを実行する」部品です。
ページ移動は a を使います。

この違いを覚えるだけで、迷いが減ります。

## 3. button の基本形
### デモ：基本のボタン
いまから「最低限整えたボタン」を見ます。

```html
<button class="btn">保存する</button>
```

```css
.btn { background: #2b7de9; color: #fff; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; }
```

<DemoPreview html='<button class="btn">保存する</button>' css='.btn { background: #2b7de9; color: #fff; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; }' />

プレビューでは、
押せそうな形ができています。

## 4. a で作るボタン
「ページ移動」なら a を使います。
見た目はボタンに寄せられます。

### デモ：リンク型ボタン
いまから「リンクのボタン化」を見ます。

```html
<a class="btn" href="#">商品を見る</a>
```

```css
.btn { display: inline-block; background: #2b7de9; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; }
```

<DemoPreview html='<a class="btn" href="#">商品を見る</a>' css='.btn { display: inline-block; background: #2b7de9; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; }' />

プレビューでは、
a でもボタンに見えます。

## 5. よくあるミス
- a と button を逆に使う
- 文字色を変え忘れて読みにくくなる
- padding を入れずに押しづらくなる

## 6. まとめ
- 実行は button、移動は a
- まずは「押せそう」に見せればOK
- 余白と角丸が効きます
