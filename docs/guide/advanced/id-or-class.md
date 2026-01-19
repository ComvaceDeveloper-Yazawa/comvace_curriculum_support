# id と class

〜名前の付け方で CSS が書きやすさが決まる〜

## 1. この章で身につくこと

- id と class の違いが分かる
- どっちを使うべきか判断できる
- class を使った CSS の書き方が分かる
- 課題 1 の構造で「こう付ける」が分かる

## 2. まず結論（初心者向けに断言）

基本は class を使います。
id は「ページ内で 1 個だけ」にしたい特別な場面で使います。
迷ったら class で OK です。

## 3. id とは？

id は同じページ内で基本 1 回だけ使います。
「特定の 1 点」を指すための名前です。
CSS でも使えますが、多用はおすすめしません。

**HTML 例**

```html
<section id="hero">メインビジュアル</section>
```

**CSS 例**

```css
#hero {
  background-color: #eee;
}
```

id は「この 1 箇所だけ」を指したいときに使う、という感覚で OK です。

## 4. class とは？

class は何度でも使えます。
同じ役割・同じ見た目をまとめるための名前です。
実務では class が基本です。

**HTML 例**

```html
<div class="card">カードA</div>
<div class="card">カードB</div>
<div class="card">カードC</div>
```

**CSS 例**

```css
.card {
  background-color: #fff;
  padding: 16px;
}
```

## 5. なぜ実務では class が多いのか（具体例）

繰り返す要素は class が最適です。
id だと再利用できず破綻します。

**HTML 例**

```html
<ul class="product-list">
  <li class="product-card">商品1</li>
  <li class="product-card">商品2</li>
  <li class="product-card">商品3</li>
</ul>
```

**CSS 例**

```css
.product-card {
  padding: 16px;
  border: 1px solid #ddd;
}
```

## 6. よくある悪い例

**悪い例：全部 id**

```html
<div id="card1"></div>
<div id="card2"></div>
<div id="card3"></div>
```

なぜダメか：

- CSS が増え続ける
- 同じ見た目なのに名前がバラバラ

## 7. 全体の具体例

main 直下に wrapper がある前提で説明します。

**HTML 例**

```html
<main>
  <div class="wrapper">
    <section class="products">
      <div class="products-toolbar">
        <h2 class="products-title">商品一覧</h2>

        <div class="products-sort">
          <label for="sort">並び替え</label>
          <select id="sort" class="select">
            <option>おすすめ順</option>
          </select>
        </div>
      </div>

      <ul class="product-list">
        <li class="product-card">
          <img class="product-image" src="" alt="" />
          <p class="product-name">アロマブレンド珈琲豆</p>
          <p class="product-price">¥3,350</p>
        </li>
      </ul>
    </section>
    」
  </div>
</main>
```

ここで必ず覚えること：

- 繰り返す要素は class
- グループ構造も class
- label と select の紐づけで id を使う

## 8. id を使うのが自然な場面

**HTML 例**

```html
<label for="email">メール</label>
<input id="email" class="input" type="email" />
```

- label と input を結びつける
- ページ内リンク
- JS で一意に取得したい場合

## 9. CSS セレクタの基本

id は `#`、class は `.` で指定します。

**CSS 例**

```css
.products-toolbar {
  display: flex;
}

.products-toolbar .select {
  margin-left: auto;
}
```

## 10. 命名のコツ

- 見た目ではなく役割で名前を付ける
- 接頭辞をそろえる
- 日本語で考えてから英語にする

NG：red-box / big-card  
OK：product-card / primary-button

## 11. よくあるミス

- 同じ id を複数使う
- class 名がバラバラ
- 親と子の責任が曖昧

## 12. 面接での説明例

「繰り返し使う要素は class で共通化し、
label と input の紐づけなど一意な用途では id を使っています。」

## 13. まとめ

- 迷ったら class
- id は一意・紐づけ用途
- 命名は設計
