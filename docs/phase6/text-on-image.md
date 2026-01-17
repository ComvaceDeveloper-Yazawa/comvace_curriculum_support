# 画像の中心に文字（position/transform）

## 結論
親を`position: relative;`、文字を`position: absolute;`で中央に置きます。

## 何が起きているか
`absolute`は「親の中での位置」を指定できます。`transform`で半分戻すと、本当に中央になります。

## 悪い例（デモ）
文字だけに`text-align: center;`を書いても、縦は中央になりません。

デモ: `/demos/text-on-image.html`

```css
.banner { text-align: center; }
```

## 良い例（デモ）
`position`と`transform`で中央を作ります。

デモ: `/demos/text-on-image.html`

```css
.banner { position: relative; }
.banner span { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
```

## なぜそうなるか
`text-align`は横方向だけです。縦中央は「座標」で指定する必要があります。

## よくあるミス
- 親に`position: relative;`を書き忘れる
- `top: 50%`だけで中央だと思う

## 次に読む記事
- [inputの正体（type）](/phase7/input-type)