'use client'

import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../api/users/route'
import { User } from '../../types/user'

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUserData()
        setUsers(data)
      } catch (error) {
        console.log("🚀 ~ getData ~ error:", error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (isLoading) return <p>読み込み中...</p>
  if (hasError) return <p>データの取得に失敗しました。</p>

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
