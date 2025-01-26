"use client";

import { useEffect, useState } from 'react'
import { User } from '@/types/user'

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hello')
        if (!res.ok) throw new Error('データの取得に失敗しました。')

        const data: User[] = await res.json()
        setUsers(data)
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  // データの読み込み中の表示
  if (isLoading) return <p>読み込み中...</p>

  // エラー発生時の表示
  if (hasError) return <p>データの取得に失敗しました。</p>

  // データの取得が成功した場合、ユーザーリストを表示します。
  return (
    <ul>
      {/* 各ユーザーの名前をリストアイテムとして表示します。 */}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
