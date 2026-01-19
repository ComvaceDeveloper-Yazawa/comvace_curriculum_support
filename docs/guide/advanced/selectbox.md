# セレクトボックスを自由にスタイルする

## 1. この章で身につくこと
- select がスタイルしにくい理由が分かる
- 最低限きれいに整える方法が分かる
- appearance を none にしてオリジナル風に作れる
- 矢印を画像で置き換えるやり方が分かる

## 2. select はOSの部品
select はブラウザやOSが描画します。
だから、思い通りになりにくいです。

ここでは2段階でやります。
- まずは「最低限きれい」
- その後に「オリジナル風」

## 3. 最低限きれいにする方法
まずは、見た目を整えるだけに絞ります。
矢印は「画像」を使って置き換えます。

### デモ：最低限きれいにする
いまから「最低限の整え方」を見ます。

```html
<div class="select-wrap">
  <select class="select">
    <option>おすすめ順</option>
    <option>価格が安い順</option>
    <option>価格が高い順</option>
  </select>
</div>
```

```css
.select-wrap { position: relative; width: 220px; }
.select { width: 100%; padding: 10px 36px 10px 12px; border: 1px solid #bbb; border-radius: 6px; background: #fff; }
.select { appearance: none; -webkit-appearance: none; -moz-appearance: none; }
.select { background-image: url("/images/selector.png"); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px auto; }
```

<DemoPreview html="<div class='select-wrap'><select class='select'><option>おすすめ順</option><option>価格が安い順</option><option>価格が高い順</option></select></div>" css=".select-wrap { position: relative; width: 220px; } .select { width: 100%; padding: 10px 36px 10px 12px; border: 1px solid #bbb; border-radius: 6px; background: #fff; } .select { appearance: none; -webkit-appearance: none; -moz-appearance: none; } .select { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEaADAAQAAAABAAAADgAAAACfGf5RAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAAnUlEQVQoFZ2R2Q2DMBBELdFASthSKMUlpASXQAeU4t/8oVRgUQElwFsOKSLZ+BhpbIsdP42Mc85FvDY6cW+XsLZC/E44l6EBNH4C9PzAC65pJOS/9ORLKUSbm5qY5ECJjJgEBj3OQTyZrCIJC6QtiiSkrEfuiwhnKLDf24w1AM3++uVSC9G8x1ebwLlZkZsJazNTnTk5BjPbG7/+5TbUCXKweyB1zQAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px auto; }" />

プレビューでは、
矢印が画像になり、見た目が整います。

## 4. appearance を none にしてオリジナル風にする
ここからは「完全に自分で描く」方法です。
OSの見た目を消して、
自分のデザインに寄せます。

### デモ：オリジナル風にする
いまから「OSの見た目を消す」状態を見ます。

```html
<div class="select-wrap">
  <select class="select">
    <option>おすすめ順</option>
    <option>価格が安い順</option>
    <option>価格が高い順</option>
  </select>
</div>
```

```css
.select-wrap { position: relative; width: 240px; }
.select { width: 100%; padding: 12px 40px 12px 14px; border: 2px solid #2b7de9; border-radius: 8px; background-color: #eef6ff; color: #1f3a66; font-weight: bold; }
.select { appearance: none; -webkit-appearance: none; -moz-appearance: none; }
.select { background-image: url("/images/selector.png"); background-repeat: no-repeat; background-position: right 14px center; background-size: 14px auto; }
```

<DemoPreview html="<div class='select-wrap'><select class='select'><option>おすすめ順</option><option>価格が安い順</option><option>価格が高い順</option></select></div>" css=".select-wrap { position: relative; width: 240px; } .select { width: 100%; padding: 12px 40px 12px 14px; border: 2px solid #2b7de9; border-radius: 8px; background-color: #eef6ff; color: #1f3a66; font-weight: bold; } .select { appearance: none; -webkit-appearance: none; -moz-appearance: none; } .select { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEaADAAQAAAABAAAADgAAAACfGf5RAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAAnUlEQVQoFZ2R2Q2DMBBELdFASthSKMUlpASXQAeU4t/8oVRgUQElwFsOKSLZ+BhpbIsdP42Mc85FvDY6cW+XsLZC/E44l6EBNH4C9PzAC65pJOS/9ORLKUSbm5qY5ECJjJgEBj3OQTyZrCIJC6QtiiSkrEfuiwhnKLDf24w1AM3++uVSC9G8x1ebwLlZkZsJazNTnTk5BjPbG7/+5TbUCXKweyB1zQAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position: right 14px center; background-size: 14px auto; }" />

プレビューでは、
OSっぽさが消えて、オリジナル風の見た目になります。

## 5. プレースホルダーっぽい option の作り方
select は本来プレースホルダーがありません。
そこで、最初の option を「案内用」にします。

### デモ：案内用 option を作る
いまから「最初だけ薄い文字」を見ます。

```html
<select class="select" required>
  <option value="" selected disabled hidden>並び替え</option>
  <option value="popular">おすすめ順</option>
  <option value="low">価格が安い順</option>
  <option value="high">価格が高い順</option>
</select>
```

```css
.select { padding: 10px 36px 10px 12px; border: 1px solid #bbb; border-radius: 6px; }
.select:invalid { color: #999; }
.select option { color: #333; }
```

<DemoPreview html="<select class='select' required><option value='' selected disabled hidden>並び替え</option><option value='popular'>おすすめ順</option><option value='low'>価格が安い順</option><option value='high'>価格が高い順</option></select>" css=".select { padding: 10px 36px 10px 12px; border: 1px solid #bbb; border-radius: 6px; } .select:invalid { color: #999; } .select option { color: #333; }" />

プレビューでは、
最初の案内だけ薄い文字になります。

## 6. よくあるミス
- 矢印画像を入れたのに padding が足りず被る
- appearance を消さずに二重表示になる
- 幅を指定せずに崩れる

## 7. まとめ
- まずは最低限きれいに整える
- appearance を none にするとオリジナル風になる
- 矢印は画像で置き換えるのが確実です
