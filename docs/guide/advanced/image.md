# 画像の表示方法と最適化

## 1. この章で身につくこと
- 画像がはみ出す理由が分かる
- 画像を枠に合わせる方法が分かる
- 縦横比を崩さずに見せられる

## 2. 画像は「そのままだとはみ出す」
画像は元のサイズで表示されます。
枠より大きいと、はみ出します。

### デモ：サイズ指定なしの画像
いまから「はみ出す」状態を見ます。

```html
<div class="frame">
  <img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" />
</div>
```

```css
.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; }
.photo { }
```

<DemoPreview html='<div class="frame"><img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" /></div>' css='.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; } .photo { }' />

プレビューでは、
画像が枠より大きくて詰まっています。

## 3. 枠に合わせる基本
「枠に合わせる」だけなら、これで十分です。

### デモ：width: 100% で合わせる
いまから「枠に合わせる」状態を見ます。

```css
.photo { width: 100%; height: auto; display: block; }
```

```html
<div class="frame">
  <img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" />
</div>
```

```css
.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; }
.photo { width: 100%; height: auto; display: block; }
```

<DemoPreview html='<div class="frame"><img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" /></div>' css='.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; } .photo { width: 100%; height: auto; display: block; }' />

プレビューでは、
横幅に合わせて自然に縮小されます。

## 4. 画像を「切り抜いて」埋める
カードの画像枠を崩したくないときは、
`object-fit: cover` が便利です。

### デモ：object-fit で枠いっぱいにする
いまから「枠いっぱいに埋める」状態を見ます。

```css
.photo { width: 100%; height: 100%; object-fit: cover; display: block; }
```

```html
<div class="frame">
  <img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" />
</div>
```

```css
.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; }
.photo { width: 100%; height: 100%; object-fit: cover; display: block; }
```

<DemoPreview html='<div class="frame"><img class="photo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZDlmMmZmJy8+PGNpcmNsZSBjeD0nMTgwJyBjeT0nMjAwJyByPScxMjAnIGZpbGw9JyMyYjdkZTknLz48dGV4dCB4PSc2MCUnIHk9JzU1JScgZm9udC1zaXplPSc0MCcgZmlsbD0nI2ZmZmZmZic+SU1HPC90ZXh0Pjwvc3ZnPg==" alt="demo" /></div>' css='.frame { width: 240px; height: 160px; border: 2px dashed #999; overflow: hidden; } .photo { width: 100%; height: 100%; object-fit: cover; display: block; }' />

プレビューでは、
枠いっぱいに切り抜かれて表示されます。

## 5. まとめ
- 画像はそのままだとはみ出す
- width: 100% で枠に合わせる
- 枠を守るなら object-fit: cover が便利
