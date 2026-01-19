# display: grid 徹底解説

## 1. この章で身につくこと
- 縦と横を同時にそろえられる
- 列数をコントロールできる
- カード一覧をきれいに並べられる

## 2. grid は「マス目」で考える
grid は「表のマス目」を作るイメージです。
横と縦を同時に整えたいときに便利です。

## 3. まずは列を作る
### デモ：3列のグリッド
いまから「3列に並ぶ」状態を見ます。

```html
<div class="grid">
  <div class="card">A</div>
  <div class="card">B</div>
  <div class="card">C</div>
  <div class="card">D</div>
  <div class="card">E</div>
  <div class="card">F</div>
</div>
```

```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #fff2b8; padding: 12px; }
.card { background: #ffffff; border: 1px solid #ddd; padding: 12px; text-align: center; }
```

<DemoPreview html='<div class="grid"><div class="card">A</div><div class="card">B</div><div class="card">C</div><div class="card">D</div><div class="card">E</div><div class="card">F</div></div>' css='.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #fff2b8; padding: 12px; } .card { background: #ffffff; border: 1px solid #ddd; padding: 12px; text-align: center; }' />

プレビューでは、3列で並びます。
行が自動で折り返されます。

## 4. 横幅を変えると列の数が変わる
列数は数値で決められます。
「まずは何列にしたいか」から考えると楽です。

## 5. 一部だけ広げる
### デモ：1つだけ横に広げる
いまから「1枚だけ横幅が広い」状態を見ます。

```html
<div class="grid">
  <div class="card wide">大きめ</div>
  <div class="card">B</div>
  <div class="card">C</div>
  <div class="card">D</div>
</div>
```

```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #fff2b8; padding: 12px; }
.card { background: #ffffff; border: 1px solid #ddd; padding: 12px; text-align: center; }
.wide { grid-column: span 2; }
```

<DemoPreview html='<div class="grid"><div class="card wide">大きめ</div><div class="card">B</div><div class="card">C</div><div class="card">D</div></div>' css='.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #fff2b8; padding: 12px; } .card { background: #ffffff; border: 1px solid #ddd; padding: 12px; text-align: center; } .wide { grid-column: span 2; }' />

プレビューでは、
「大きめ」が2列分の幅を取ります。

## 6. よくあるミス
- 親に grid を書き忘れる
- gap を入れずに詰まる
- まず列数を決めずに迷う

## 7. まとめ
- grid は「マス目で並べる」
- 列数を決めれば一気に整う
- カード一覧にとても強いです
