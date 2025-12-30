#!/bin/bash

# プライベートリポジトリ作成スクリプト

cd /Users/teradayusaku/Desktop/my-portfolio

echo "プライベートリポジトリを作成しています..."

# プライベートリポジトリを作成してプッシュ
gh repo create my-portfolio --private --source=. --remote=origin --push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ プライベートリポジトリが正常に作成されました！"
    echo ""
    USERNAME=$(gh api user --jq .login 2>/dev/null)
    if [ -n "$USERNAME" ]; then
        echo "リポジトリURL: https://github.com/$USERNAME/my-portfolio"
    fi
else
    echo ""
    echo "❌ エラーが発生しました。"
    echo "GitHub CLIの認証を確認してください: gh auth status"
fi
