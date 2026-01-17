# Gridでカード

## 結論
Gridは「行と列」をまとめて決められるので、カード一覧に強いです。

## 何が起きているか
Gridは「何列にするか」を一行で決められます。カードの並びがズレにくいです。

<!-- image: grid-cards-layout.png -->
<!-- priority: あると良い -->
<!-- what: 2列/3列にカードが並ぶ比較図 -->
<!-- why: 列数のイメージが直感で掴める -->

## 悪い例（デモ）
`float`や`inline-block`で無理やり並べるとズレやすいです。

デモ: `/demos/grid-cards.html`

```css
.list { }
.card { display: inline-block; width: 120px; }
```

## 良い例（デモ）
Gridなら列数をはっきり指定できます。

デモ: `/demos/grid-cards.html`

```css
.list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
```

## なぜそうなるか
Gridは「行と列」のルールを持つので、カードがそろって並びます。

## よくあるミス
- `inline-block`の隙間で列がズレる
- `gap`を付け忘れて詰まる

## 次に読む記事
- [画像サイズ調整（object-fit）](/phase8/object-fit)