# ブロック要素？インライン要素？
〜なぜレイアウトが崩れるのかの正体〜

## 1. この章で身につくこと
- ブロック要素とインライン要素の違いを感覚で理解できる
- 「この中に何を入れていいか」を判断できる
- 幅・余白が効かない理由が分かる
- div と p の使い分けに迷わなくなる

## 2. まずは画面で違和感を感じてみよう
まずは見た目の違いに気づくところから始めます。
文字っぽい部分と、箱っぽい部分があります。

「同じHTMLでも、ふるまいが違う」
これが今回のテーマです。

## 3. ブロック要素って何？
ブロック要素は「箱として動く」イメージです。
縦に積み上がって、幅を持てます。

よく使うタグは次のようなものです。
- div / section / article / ul / li

### デモ：ブロック要素は縦に積み上がる
いまから「箱が積み上がる」動きを見ます。

```html
<div class="box">div</div>
<section class="box">section</section>
<article class="box">article</article>
```

```css
.box { background: #d9f2ff; border: 2px solid #2b7de9; padding: 12px; margin-bottom: 8px; }
```

<DemoPreview html='<div class="box">div</div><section class="box">section</section><article class="box">article</article>' css='.box { background: #d9f2ff; border: 2px solid #2b7de9; padding: 12px; margin-bottom: 8px; }' />

プレビューでは、箱が縦に並びます。
これがブロック要素の基本的な動きです。

## 4. インライン要素って何？
インライン要素は「文章の一部」です。
横に並び、幅や高さを意識しません。

よく使うタグは次のようなものです。
- span / a / strong / em

### デモ：インライン要素は横に並ぶ
いまから「文字が横に続く」動きを見ます。

```html
<span class="in">span</span>
<a class="in" href="#">a</a>
<strong class="in">strong</strong>
<em class="in">em</em>
```

```css
.in { background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }
```

<DemoPreview html='<span class="in">span</span> <a class="in" href="#">a</a> <strong class="in">strong</strong> <em class="in">em</em>' css='.in { background: #ffe8cc; border: 2px solid #f08c00; padding: 6px; }' />

プレビューでは、文字が横に続いて見えます。
これがインライン要素の基本的な動きです。

## 5. 実際に比べてみよう（デモ）
ここから「幅・高さ・余白の効き方」を見ます。

### デモ1：width / height の効き方
いまから「幅と高さが効くかどうか」を比べます。

```html
<div class="block">block（div）</div>
<span class="inline">inline（span）</span>
```

```css
.block { background: #d9f2ff; border: 2px solid #2b7de9; width: 220px; height: 60px; padding: 8px; margin-bottom: 12px; }
.inline { background: #ffe8cc; border: 2px solid #f08c00; width: 220px; height: 60px; padding: 8px; }
```

<DemoPreview html='<div class="block">block（div）</div><span class="inline">inline（span）</span>' css='.block { background: #d9f2ff; border: 2px solid #2b7de9; width: 220px; height: 60px; padding: 8px; margin-bottom: 12px; } .inline { background: #ffe8cc; border: 2px solid #f08c00; width: 220px; height: 60px; padding: 8px; }' />

プレビューでは、
ブロックは幅と高さが効きます。
インラインは見た目が大きく変わりません。

### デモ2：margin / padding の効き方
いまから「余白の効き方」を比べます。

```html
<div class="block">block（div）</div>
<span class="inline">inline（span）</span>
```

```css
.block { background: #d9f2ff; border: 2px solid #2b7de9; padding: 12px; margin-bottom: 16px; }
.inline { background: #ffe8cc; border: 2px solid #f08c00; padding: 12px; margin-top: 16px; margin-bottom: 16px; }
```

<DemoPreview html='<div class="block">block（div）</div><span class="inline">inline（span）</span>' css='.block { background: #d9f2ff; border: 2px solid #2b7de9; padding: 12px; margin-bottom: 16px; } .inline { background: #ffe8cc; border: 2px solid #f08c00; padding: 12px; margin-top: 16px; margin-bottom: 16px; }' />

プレビューでは、
ブロックの余白ははっきり効きます。
インラインは上下の余白が効いたように見えにくいです。

## 6. よくある「なんで効かないの？」の正体
「width が効かない」
「上下 margin が効かない」
「中央寄せできない」

多くの場合、原因はインライン要素です。
インラインは「文章の一部」なので、
箱としてのサイズや上下の余白を持ちにくいです。

つまり「性質の違い」が原因です。

## 7. p タグはなぜ特別？
p は文章用のタグです。
中に入れていいのは、文章系の要素だけです。

### デモ：p の中に div を入れると崩れる
いまから「入れてはいけない入れ方」を見ます。

```html
<p class="text">
  文章の途中
  <div class="bad">このdivはNG</div>
  続きの文章
</p>
```

```css
.text { background: #fff4f4; border: 2px solid #e55353; padding: 12px; }
.bad { background: #ffd6e7; padding: 8px; }
```

<DemoPreview html='<p class="text">文章の途中<div class="bad">このdivはNG</div>続きの文章</p>' css='.text { background: #fff4f4; border: 2px solid #e55353; padding: 12px; } .bad { background: #ffd6e7; padding: 8px; }' />

プレビューでは、文章の流れが崩れます。
p の中には「文章系だけ」と覚えてOKです。

## 8. div はなぜ何でも入れていい？
div は意味を持たない箱です。
構造を作るための道具です。
だからグループ化に向いています。

## 9. 課題1の画面で考える
この教材のホーム画面では、
次のように使い分けます。

- wrapper はブロック要素
- toolbar / card / cart-info もブロック要素
- テキストや価格はインライン要素

「箱でレイアウト、文字で中身」
この感覚を持つと迷いません。

## 10. 初心者がやりがちなミス
- p の中に div を入れる
- span を箱として使おうとする
- 全部 div で書いて意味が分からなくなる

## 11. まとめ
- 箱か、文字か
- レイアウトしたいならブロック
- 文章の一部ならインライン

この判断基準でOKです。
