# 検証ツールの活用方法
〜画面が崩れたときの最初の一手〜

## 1. この章で身につくこと
- 検証ツールで何が分かるか
- CSSがどこから当たっているか見られる
- 詰まったときに自分で調べられるようになる

## 2. 検証ツールとは？
検証ツールはブラウザに標準で入っている機能です。
HTMLとCSSをその場で確認できます。
コードを書き換えなくても試せるので、とても便利です。

<video controls muted src="/media/devtools.mov" style="width: 100%; max-width: 900px;"></video>

<!-- image: devtools-overview.png -->
<!-- priority: 必須 -->
<!-- what: ブラウザ右側にDevToolsが開き、Elements/Stylesが見える画面 -->
<!-- why: どこを見ればいいかを一目で理解できる -->

## 3. 使い方（最小手順）
1. 画面を右クリック → 「検証」を押す
2. 左上の矢印アイコン（要素選択）を押す
3. 直したい場所をクリックする
4. 右側のStylesでCSSを確認する
5. margin / padding / display を見る

この手順だけで、原因の8割は見つかります。

## 3. よく使う機能（最低限）
ここだけ覚えれば十分です。

- 要素を選択する
- CSSを見る
- padding / margin を確認する
- display の種類を見る

<!-- image: devtools-styles-panel.png -->
<!-- priority: 必須 -->
<!-- what: StylesパネルでCSSが並び、打ち消し線が見える例 -->
<!-- why: 効いているCSSと効いていないCSSの見分けができる -->

<!-- image: devtools-box-model.png -->
<!-- priority: あると良い -->
<!-- what: Box Model（margin/padding）が表示されているパネル -->
<!-- why: 余白の確認場所を視覚で理解できる -->

## 4. 実務での使いどころ
「なんでずれてる？」と思ったときに使います。
「この余白どこから来てる？」と思ったときにも使います。

## 5. よくある勘違い
- 検証ツールは上級者向けだと思っている
- 見ても意味が分からないと思い込む

最初は分からなくてOKです。
見る回数が増えるだけで、少しずつ読めるようになります。

## 参考リンク
- [Google Chrome DevTools 公式ドキュメント](https://developer.chrome.com/docs/devtools/)
- [MDN Web Docs: DevTools（検証ツール）](https://developer.mozilla.org/ja/docs/Tools)

## 6. まとめ
検証ツールは最強の味方です。
CSSが分からなくても使っていい道具です。
