# padding と margin の違い

## 1. この章で身につくこと
- padding と margin の使い分けができる
- 余白が「中」か「外」かを判断できる
- 余白設計が楽になる

## 2. まずは「中」と「外」を見分ける
余白は2種類あります。
- 中の余白 = padding
- 外の余白 = margin

## 3. padding の動き
### デモ：中の余白が広がる
いまから「箱の中が広がる」状態を見ます。

```html
<div class="box padding">中の余白</div>
```

```css
.box { background: #d9f2ff; border: 2px solid #2b7de9; }
.padding { padding: 24px; }
```

<DemoPreview html='<div class="box padding">中の余白</div>' css='.box { background: #d9f2ff; border: 2px solid #2b7de9; } .padding { padding: 24px; }' />

プレビューでは、
箱の「中」が広がっているのが分かります。

## 4. margin の動き
### デモ：外の余白が空く
いまから「箱の外に空きができる」状態を見ます。

```html
<div class="box margin">外の余白</div>
<div class="box">次の箱</div>
```

```css
.box { background: #ffe8cc; border: 2px solid #f08c00; padding: 12px; }
.margin { margin-bottom: 24px; box-shadow: 0 24px 0 0 #ffd6e7; }
```

<DemoPreview html='<div class="box margin">外の余白</div><div class="box">次の箱</div>' css='.box { background: #ffe8cc; border: 2px solid #f08c00; padding: 12px; } .margin { margin-bottom: 24px; box-shadow: 0 24px 0 0 #ffd6e7; }' />

プレビューでは、
ピンクの帯が「外の余白」です。
背景色は広がっていないのがポイントです。

## 5. どっちを使うかの判断
- 中身が窮屈なら padding
- 要素同士が近いなら margin

迷ったら「中か外か」だけで判断してOKです。

## 6. よくあるミス
- padding と margin を同時にいじって混乱する
- 余白が効いていないのに数値を増やす
- 余白をHTMLの空白で作ろうとする

## 7. まとめ
- padding は内側
- margin は外側
- まずは「中か外か」で決めれば十分です
