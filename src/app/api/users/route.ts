import { supabase } from '@/lib/supabase'
import { User } from '@/types/user' // User型をインポート

/**
 * ユーザーデータを取得する関数
 * @returns {Promise<User[]>} ユーザーデータの配列
 */
export const fetchUserData = async (): Promise<User[]> => {
  // Supabaseクライアントを使ってデータを取得
  const { data, error } = await supabase
    .from('users') // 'users' テーブルから
    .select('*') // 全てのカラムを選択

  // エラーチェック
  if (error) {
    console.error('データの取得に失敗しました:', error.message)
    throw new Error('データの取得に失敗しました')
  }

  // データを返す
  return data as User[]
}
