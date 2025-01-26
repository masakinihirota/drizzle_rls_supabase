"use client";

// Honoの基本的な使い方 - HonoのAPIを呼び出す
// HonoのAPIを呼び出すには、fetch関数を使います。
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello')
      const { message } = await res.json()
      setMessage(message)
    }
    fetchData()
  }, [])

  if (!message) return <p>Loading...</p>

  return <p>{message}</p>
}
