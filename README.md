# My Portfolio

自分用のポートフォリオサイトです。HTML、CSS、JavaScriptを使用して作成されています。

## 特徴

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **モダンなUI**: グラデーションとアニメーションを使用した美しいデザイン
- **スムーススクロール**: セクション間のスムーズなナビゲーション
- **ハンバーガーメニュー**: モバイルデバイス用のナビゲーションメニュー

## ファイル構成

```
my-portfolio/
├── index.html      # メインのHTMLファイル
├── styles.css      # スタイルシート
├── script.js       # JavaScriptファイル
└── README.md       # このファイル
```

## セクション

1. **Hero**: 自己紹介とメインビジュアル
2. **About**: 自己紹介の詳細
3. **Skills**: スキルセクション
4. **Projects**: プロジェクトの紹介
5. **Contact**: 連絡先情報

## カスタマイズ方法

### 1. 個人情報の更新

`index.html`を開いて、以下の部分を編集してください：

- **名前**: `<span class="highlight">[あなたの名前]</span>` の部分
- **職業**: `Web開発者 / デザイナー` の部分
- **自己紹介文**: Aboutセクションのテキスト
- **スキル**: Skillsセクションの内容
- **プロジェクト**: Projectsセクションのプロジェクト情報
- **連絡先**: Contactセクションのリンク（Email、GitHub、Twitter、LinkedIn）

### 2. 色の変更

`styles.css`の`:root`セクションで色を変更できます：

```css
:root {
    --primary-color: #6366f1;    /* メインカラー */
    --secondary-color: #8b5cf6;  /* サブカラー */
    /* その他の色... */
}
```

### 3. プロジェクト画像の追加

プロジェクトカードに画像を追加する場合：

1. `images`フォルダを作成
2. 画像を配置
3. `index.html`の`.project-image`部分を以下のように変更：

```html
<div class="project-image">
    <img src="images/project1.jpg" alt="プロジェクト1">
</div>
```

## 使い方

1. ファイルをダウンロードまたはクローン
2. `index.html`をブラウザで開く
3. 個人情報を編集してカスタマイズ

## ブラウザサポート

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

このプロジェクトは個人利用のために作成されています。

