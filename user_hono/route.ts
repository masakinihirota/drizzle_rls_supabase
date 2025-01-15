import { supabase } from "@/lib/supabase";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get('/data', async (c) => {
  // Supabase からデータを取ってくる
  const { data, error } = await supabase
    .from('users')
    .select()
  console.log("🚀 ~ app.get ~ data:", data)

  if (error) {
    return c.json({ error: error.message }, 500)
  }
  return c.json(data)
})

export default async function Users() {
  const { data: users } = await supabase.from('users').select()
  return <pre>{ JSON.stringify(users, null, 2) } </pre>



//   const supabaseClient = await
//   const { data: users } = await supabaseClient.from("users").select()
//   return
// }
