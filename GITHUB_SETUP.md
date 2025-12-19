# GitHubリポジトリ作成手順

## 方法1: GitHub CLIを使用する場合（推奨）

### ステップ1: GitHub CLIで認証

ターミナルで以下のコマンドを実行してください：

```bash
gh auth login
```

認証方法を選択：
- **GitHub.com** を選択
- **HTTPS** を選択
- **Login with a web browser** を選択
- 表示されたコードをコピーして、ブラウザで開いたページに入力

### ステップ2: リポジトリを作成

認証が完了したら、以下のコマンドを実行：

**プライベートリポジトリを作成する場合：**
```bash
cd /Users/teradayusaku/Desktop/my-portfolio
gh repo create my-portfolio --private --source=. --remote=origin --push
```

**公開リポジトリを作成する場合：**
```bash
cd /Users/teradayusaku/Desktop/my-portfolio
gh repo create my-portfolio --public --source=. --remote=origin --push
```

または、スクリプトを実行：
```bash
./create-private-repo.sh
```

これで、GitHub上にリポジトリが作成され、コードがプッシュされます。

---

## 方法2: GitHubウェブサイトで手動作成する場合

### ステップ1: GitHubでリポジトリを作成

1. [GitHub](https://github.com) にログイン
2. 右上の「+」ボタンをクリック → 「New repository」を選択
3. リポジトリ名を入力（例: `my-portfolio`）
4. 説明を入力（任意）
5. **Private** を選択（プライベートリポジトリの場合）
6. **「Initialize this repository with a README」はチェックしない**（既にREADMEがあるため）
7. 「Create repository」をクリック

### ステップ2: リモートを追加してプッシュ

GitHubでリポジトリを作成したら、以下のコマンドを実行：

```bash
cd /Users/teradayusaku/Desktop/my-portfolio

# リモートを追加（YOUR_USERNAMEをあなたのGitHubユーザー名に置き換えてください）
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# ブランチ名をmainに設定（既にmainの場合は不要）
git branch -M main

# コードをプッシュ
git push -u origin main
```

---

## 確認

リポジトリが正常に作成されたら、以下のURLで確認できます：

```
https://github.com/YOUR_USERNAME/my-portfolio
```

---

## トラブルシューティング

### 認証エラーが発生する場合

```bash
# GitHub CLIの認証状態を確認
gh auth status

# 再認証
gh auth login
```

### リモートが既に存在する場合

```bash
# 既存のリモートを確認
git remote -v

# リモートを削除して再追加
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
```

### プッシュが拒否される場合

```bash
# 最新の状態を取得
git pull origin main --allow-unrelated-histories

# 再度プッシュ
git push -u origin main
```
