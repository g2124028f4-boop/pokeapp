# pokeapp
URL:https://github.com/g2124028f4-boop/pokeapp
実装時間：環境構築に3時間、実装に2時間半

# 手順
1. URLのリポジトリをクローンする
2. 必要に応じて依存パッケージ(tailwind,next)などをインストールする
npm install <パッケージ>を実行する
今回の環境構築において、インストールしたものは以下の通りである:
Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss

3. npm run devを実行する。
4. http://localhost:3000　にアクセスする。　何らかの要因ですでに使われている場合、実行時に- Local:http://localhost:xxxx と表示されるので、それにアクセスする。

# 内容
ホーム画面に151匹のポケモン一覧が表示される

上部検索バーで名前を入力するとリアルタイムでフィルタリングされる

ポケモンの画像や名前をクリックすると詳細画面に遷移する。また、詳細画面で戻るボタンでホーム・検索画面に遷移する。