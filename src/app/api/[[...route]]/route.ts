import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { User } from '@/types/user'

// Supabaseのクライアントを作ります。
// libフォルダからimportします。
import { supabase } from '@/lib/supabase'

// Vercelに一番近い場所で実行するよう指定します。
export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', async (c) => {
  // Supabaseクライアントを使ってデータを取得します。
  const { data, error } = await supabase
    .from('users') // 'users' テーブルから
    .select('*') // 全てのカラムを選択
  console.log("🚀 ~ app.get ~ data:", data)

  // エラーチェック
  if (error) {
    console.error('データの取得に失敗しました:', error.message)
    throw new Error('データの取得に失敗しました')
  }

  // 取得したデータを返します。
  return c.json<User[]>(data)
})

export const GET = handle(app)
