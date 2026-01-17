# inputの正体（type）

## 結論
`input`は`type`で姿が変わります。文字・パスワード・チェックなど、別物です。

## 何が起きているか
`type`が違うと、ブラウザが出す部品が変わります。だから見た目も機能も変わります。

## 悪い例（デモ）
全部`type="text"`だと、パスワードも丸見えになります。

デモ: `/demos/input-type.html`

```html
<input type="text" placeholder="パスワード" />
```

## 良い例（デモ）
パスワードは`type="password"`にします。

デモ: `/demos/input-type.html`

```html
<input type="password" placeholder="パスワード" />
```

## なぜそうなるか
ブラウザは`type`の値を見て「どんな入力か」を判断し、表示と挙動を変えます。

## よくあるミス
- `type`を書き忘れて全部`text`になる
- `email`や`tel`を使わず入力補助が効かない

## 次に読む記事
- [selectの正体（OS/ブラウザの影響）](/phase7/select-native)