# selectの正体（OS/ブラウザの影響）

## 結論
`select`はOSやブラウザの部品を使うので、見た目が環境で変わります。

## 何が起きているか
`select`は「ネイティブ部品」です。だから同じCSSでも、環境ごとに見た目が微妙に違います。

## 悪い例（デモ）
「同じ見た目になるはず」と思い込むとズレます。

デモ: `/demos/select-native.html`

```html
<select>
  <option>りんご</option>
  <option>みかん</option>
</select>
```

## 良い例（デモ）
「完全に同じにはならない」と知って、最低限の調整だけにします。

デモ: `/demos/select-native.html`

```css
select { padding: 6px 10px; }
```

## なぜそうなるか
`select`はブラウザの中の部品そのものです。OSの見た目ルールが入るので、完全一致は難しいです。

## よくあるミス
- `select`を完全に同じ見た目にしようとして沼る
- CSSが効かないと焦る

## 次に読む記事
- [buttonとaの違い](/phase7/button-vs-a)