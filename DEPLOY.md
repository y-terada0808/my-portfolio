# デプロイ手順 - GitHub Pages

## 手動デプロイ（推奨）

### 1. GitHubリポジトリの設定

1. GitHubでリポジトリ `https://github.com/y-terada0808/my-portfolio` を開く
2. **Settings** タブをクリック
3. 左メニューから **Pages** を選択
4. **Source** セクションで以下を設定：
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. **Save** をクリック

### 2. デプロイ完了

数分後、以下のURLでサイトにアクセスできます：
```
https://y-terada0808.github.io/my-portfolio/
```

## 自動デプロイ（GitHub Actions）

`main`ブランチにプッシュするたびに自動でデプロイされます。

## 確認方法

1. GitHubリポジトリの **Actions** タブでデプロイ状況を確認
2. デプロイが完了すると、緑色のチェックマークが表示されます
3. 上記のURLでサイトを確認

## 注意事項

- デプロイには数分かかる場合があります
- 初回デプロイは最大10分程度かかる場合があります
- カスタムドメインを設定する場合は、Settings > Pages で設定できます
