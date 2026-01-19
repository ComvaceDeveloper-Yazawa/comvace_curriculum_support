# カードレイアウトの作り方（よくあるUIパターン）

## 1. この章で身につくこと
- カードの基本構造が分かる
- 余白と情報の順番を整理できる
- 実務でよく見る形を再現できる

## 2. カードは「小さな画面」
カードは、
1つの情報をまとめる小さな画面です。

「画像 → タイトル → 説明 → 値段 → ボタン」
この順番を作るだけで読みやすくなります。

## 3. まずは最低限の形を作る
### デモ：シンプルなカード
いまから「カードの基本形」を見ます。

```html
<div class="card">
  <div class="thumb">画像</div>
  <h3 class="title">商品名</h3>
  <p class="text">短い説明文が入ります。</p>
  <p class="price">¥3,350</p>
  <button class="btn">カートに入れる</button>
</div>
```

```css
.card { background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 16px; width: 260px; }
.thumb { background: #d9f2ff; color: #2b7de9; height: 120px; display: flex; align-items: center; justify-content: center; border-radius: 6px; margin-bottom: 12px; }
.title { font-size: 16px; margin: 0 0 6px; }
.text { font-size: 13px; margin: 0 0 8px; color: #555; }
.price { font-weight: bold; margin: 0 0 12px; }
.btn { background: #2b7de9; color: #fff; border: none; padding: 8px 12px; border-radius: 6px; }
```

<DemoPreview html='<div class="card"><div class="thumb">画像</div><h3 class="title">商品名</h3><p class="text">短い説明文が入ります。</p><p class="price">¥3,350</p><button class="btn">カートに入れる</button></div>' css='.card { background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 16px; width: 260px; } .thumb { background: #d9f2ff; color: #2b7de9; height: 120px; display: flex; align-items: center; justify-content: center; border-radius: 6px; margin-bottom: 12px; } .title { font-size: 16px; margin: 0 0 6px; } .text { font-size: 13px; margin: 0 0 8px; color: #555; } .price { font-weight: bold; margin: 0 0 12px; } .btn { background: #2b7de9; color: #fff; border: none; padding: 8px 12px; border-radius: 6px; }' />

プレビューでは、
「情報の順番」が自然に読めます。

## 4. 複数並べるときの考え方
カードを並べるときは、
高さのズレを減らすと見やすいです。

### デモ：カードを並べる
いまから「カード一覧」を見ます。

```html
<div class="list">
  <div class="card">カードA</div>
  <div class="card">カードB</div>
  <div class="card">カードC</div>
</div>
```

```css
.list { display: flex; gap: 12px; }
.card { background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 16px; width: 180px; text-align: center; }
```

<DemoPreview html='<div class="list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></div>' css='.list { display: flex; gap: 12px; } .card { background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 16px; width: 180px; text-align: center; }' />

プレビューでは、
同じ幅・同じ余白で並びます。

## 5. よくあるミス
- カード内の余白がバラバラ
- 見出しの大きさが安定しない
- ボタンがはみ出す

## 6. まとめ
- カードは「情報をまとめる箱」
- 順番と余白が大事
- 実務で最もよく使う形です
