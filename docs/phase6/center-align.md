# 中央寄せ（水平/垂直）

## 結論
Flexboxなら`justify-content: center;`と`align-items: center;`で一発です。

## 何が起きているか
親要素にFlexboxを付けると、子要素の位置をコントロールできます。中央寄せは親に指示します。

## 悪い例（デモ）
子要素に`margin: auto;`だけを書いても、縦方向は中央になりません。

デモ: `/demos/center-align.html`

```css
.card { margin: auto; }
```

## 良い例（デモ）
親にFlexboxを付けると、水平も垂直も中央にできます。

デモ: `/demos/center-align.html`

```css
.container { display: flex; justify-content: center; align-items: center; }
```

## なぜそうなるか
`margin: auto;`は横方向の空きを分けるだけです。縦方向は親の設定が必要です。

## よくあるミス
- 子に`align-items`を書いてしまう
- 親の高さが無いので縦中央に見えない

## 次に読む記事
- [画像の中心に文字（position/transform）](/phase6/text-on-image)