# CSSで色・文字を変えてみよう
〜見た目が変わる楽しさを体験する〜

## 1. この章で身につくこと
- CSSで見た目を変えられる
- 基本的なプロパティが分かる

## 2. 文字の色を変える
文字の色は `color` で変えます。
まずは1行だけ変えて、成功体験を作りましょう。

```css
color
```

例：

```html
<p class="message">こんにちは</p>
```

```css
.message { color: #e60033; }
```

<DemoPreview html='<p class="message">こんにちは</p>' css='.message { color: #e60033; }' />

文字の色が変わればOKです。

## 3. 背景色を変える
背景の色は `background-color` です。
文字の色とは別なので、ここを混ぜないようにしましょう。

```css
background-color
```

例：

```html
<p class="note">背景に色をつける</p>
```

```css
.note { background-color: #eef4ff; }
```

<DemoPreview html='<p class="note">背景に色をつける</p>' css='.note { background-color: #eef4ff; }' />

背景がほんのり色づけば成功です。

## 4. 文字の大きさ・太さを変える
文字の大きさは `font-size`、太さは `font-weight` です。

```css
font-size
font-weight
```

例：

```html
<p class="big">大きくして強調する</p>
```

```css
.big { font-size: 20px; font-weight: 700; }
```

<DemoPreview html='<p class="big">大きくして強調する</p>' css='.big { font-size: 20px; font-weight: 700; }' />

数字を少し変えるだけで印象が変わります。

## 5. 文字の位置を揃える
文字の位置は `text-align` で揃えます。

```css
text-align
```

例：

```html
<p class="center">中央にそろえる</p>
```

```css
.center { text-align: center; }
```

<DemoPreview html='<p class="center">中央にそろえる</p>' css='.center { text-align: center; }' />

位置が動けば成功です。

## 6. よくある間違い
- CSSが反映されない
- HTMLに書こうとする

## 7. まとめ
CSSで見た目が変えられます。
次は「余白」を扱って、読みやすさを上げていきます。
