Next.js、Supabase、Drizzle(メイン)で認証とRLSの基礎的なWebアプリ ( App router、Serve Actions、コロケーション、テスト)

目的
Drizzleを中心にBlog記事を書いています。

Next.jsとSupabaseの基本認証して、Drizzleを使ってテーブルを作り、RLSを有効化して、アクセスの確認、Next.jsのアーキテクチャ コロケーション そしてテストのそれぞれの動作とつながりの確認。


# Seed
./sql/
├── auth.users.sql
└── public.users.sql

Seedファイル、auth.users.sqlとpublic.users.sqlを作成して、SupabaseのSQLクエリで実行して、テストデータを作成します。

※Supabase起動時にテーブルがないと読み込みません。

※Supabase起動時にテーブルがあっても読み込まないときは、手動でSupabaseのダッシュボードでSQL Editorを開いて、クエリを実行してください。

クエリを実行した後は、Supabaseのダッシュボードをブラウザ リロードして、テーブルが表示されることを確認してください。


# データの表示

登録されたDBのデータを表示する。


# 表示されたデータを、ユーザーのみが見れるようにRLSの設定をする。

