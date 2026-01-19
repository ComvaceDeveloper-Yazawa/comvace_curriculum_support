# display: flex 徹底解説

## 1. この章で身につくこと
- 横並びができる理由が分かる
- 縦・横のそろえ方を理解できる
- どこに書けば効くか迷わなくなる

## 2. まずは「横に並ばない」を体験する
HTMLは基本的に縦に積み上がります。
「横に並べたいのに並ばない」
ここから始まる人が多いです。

### デモ：flex なしは縦に並ぶ
いまから「縦に積み上がる」状態を見ます。

```html
<div class="list">
  <div class="card">カードA</div>
  <div class="card">カードB</div>
  <div class="card">カードC</div>
</div>
```

```css
.list { background: #fff2b8; padding: 12px; }
.card { background: #ffffff; border: 1px solid #ddd; padding: 12px; margin-bottom: 8px; }
```

<DemoPreview html='<div class="list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></div>' css='.list { background: #fff2b8; padding: 12px; } .card { background: #ffffff; border: 1px solid #ddd; padding: 12px; margin-bottom: 8px; }' />

プレビューでは、カードが縦に並びます。

## 3. flex は親に書く
横並びは「親」に書きます。
子どもに書いても効きません。

### デモ：親に display: flex を書く
いまから「横に並ぶ」状態を見ます。

```css
.list { display: flex; gap: 12px; }
```

```html
<div class="list">
  <div class="card">カードA</div>
  <div class="card">カードB</div>
  <div class="card">カードC</div>
</div>
```

```css
.list { background: #fff2b8; padding: 12px; display: flex; gap: 12px; }
.card { background: #ffffff; border: 1px solid #ddd; padding: 12px; flex: 1; }
```

<DemoPreview html='<div class="list"><div class="card">カードA</div><div class="card">カードB</div><div class="card">カードC</div></div>' css='.list { background: #fff2b8; padding: 12px; display: flex; gap: 12px; } .card { background: #ffffff; border: 1px solid #ddd; padding: 12px; flex: 1; }' />

プレビューでは、カードが横に並びます。

## 4. 横方向のそろえ方（justify-content）
「横の空き方」を変えるスイッチです。

### デモ：center と space-between
いまから「横方向のそろえ方」を比べます。

```css
.list { display: flex; justify-content: center; gap: 12px; }
```

```html
<div class="list center">
  <div class="pill">A</div>
  <div class="pill">B</div>
  <div class="pill">C</div>
</div>

<div class="list between">
  <div class="pill">A</div>
  <div class="pill">B</div>
  <div class="pill">C</div>
</div>
```

```css
.list { background: #fff2b8; padding: 12px; margin-bottom: 12px; display: flex; }
.pill { background: #ffffff; border: 1px solid #ddd; padding: 8px 12px; }
.center { justify-content: center; gap: 12px; }
.between { justify-content: space-between; }
```

<DemoPreview html='<div class="list center"><div class="pill">A</div><div class="pill">B</div><div class="pill">C</div></div><div class="list between"><div class="pill">A</div><div class="pill">B</div><div class="pill">C</div></div>' css='.list { background: #fff2b8; padding: 12px; margin-bottom: 12px; display: flex; } .pill { background: #ffffff; border: 1px solid #ddd; padding: 8px 12px; } .center { justify-content: center; gap: 12px; } .between { justify-content: space-between; }' />

プレビューでは、
上は中央寄せ、下は端に広がっています。

## 5. 縦方向のそろえ方（align-items）
「高さが違う要素をどう揃えるか」です。

### デモ：中央でそろえる
いまから「縦方向のそろえ方」を見ます。

```html
<div class="list align">
  <div class="item tall">高い</div>
  <div class="item">低い</div>
  <div class="item">低い</div>
</div>
```

```css
.list { background: #fff2b8; padding: 12px; display: flex; align-items: center; gap: 12px; }
.item { background: #ffffff; border: 1px solid #ddd; padding: 8px 12px; }
.tall { padding-top: 24px; padding-bottom: 24px; }
```

<DemoPreview html='<div class="list align"><div class="item tall">高い</div><div class="item">低い</div><div class="item">低い</div></div>' css='.list { background: #fff2b8; padding: 12px; display: flex; align-items: center; gap: 12px; } .item { background: #ffffff; border: 1px solid #ddd; padding: 8px 12px; } .tall { padding-top: 24px; padding-bottom: 24px; }' />

プレビューでは、
高さが違っても中央でそろっています。

## 6. よくあるミス
- 子要素に flex を書いてしまう
- justify と align を逆に考える
- 一度に全部のプロパティを足して混乱する

## 7. まとめ
- flex は親に書く
- 横は justify、縦は align
- まずは「並べる」「そろえる」だけで十分です
