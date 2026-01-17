# selectの最低限カスタム

## 結論
`appearance: none;`と`padding`だけでも、かなり見た目が整います。

## 何が起きているか
`select`は完全カスタムが難しいので、最低限の調整で「崩れて見えない」状態を作ります。

## 悪い例（デモ）
余白が無くて窮屈に見えます。

デモ: `/demos/select-min-custom.html`

```css
select { padding: 0; }
```

## 良い例（デモ）
余白と枠線だけ整えると、読みやすくなります。

デモ: `/demos/select-min-custom.html`

```css
select { appearance: none; padding: 8px 12px; border: 1px solid #0b6bff; }
```

## なぜそうなるか
`select`は細かく変えると壊れやすいので、最低限の調整が安全です。

## よくあるミス
- 矢印まで消してしまい使いづらくなる
- 余白を付けずに文字が詰まる

## 次に読む記事
- [リセットCSS（なぜ必要か、最低限の方針）](/phase7/reset-css)