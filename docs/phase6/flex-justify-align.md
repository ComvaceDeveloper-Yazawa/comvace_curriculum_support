# Flexboxで横に並べる（justify/align）

## 結論
Flexboxは「並び方のルール」を一気に決められます。`justify-content`は横、`align-items`は縦です。

## 何が起きているか
親要素に`display: flex;`を付けると、子要素が横に並びます。さらに配置の寄せ方を決められます。

<!-- image: flex-justify-align.png -->
<!-- priority: あると良い -->
<!-- what: justify-contentとalign-itemsの方向が分かる矢印図 -->
<!-- why: 横/縦の方向を勘違いしやすい -->

## 悪い例（デモ）
`justify-content`と`align-items`を逆に考えると、意図と違う位置になります。

デモ: `/demos/flex-justify-align.html`

```css
.container { display: flex; justify-content: center; align-items: flex-start; }
```

## 良い例（デモ）
横は`justify-content`、縦は`align-items`で調整します。

デモ: `/demos/flex-justify-align.html`

```css
.container { display: flex; justify-content: space-between; align-items: center; }
```

## なぜそうなるか
Flexboxは「主方向（横）」と「交差方向（縦）」で考えます。`justify`は主方向、`align`は交差方向です。

## よくあるミス
- `justify`と`align`を逆に覚える
- 親ではなく子に`display: flex;`を書いてしまう

## 次に読む記事
- [中央寄せ（水平/垂直）](/phase6/center-align)