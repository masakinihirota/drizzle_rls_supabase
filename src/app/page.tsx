export default function Home() {
  return (
    <div className="">
      {/* ログインページへのリンク */}
      <a href="/login" className="text-blue-200">ログイン</a>
      <br />
      <br />
      {/* Honoページへのリンク */}
      <a href="/hono">Hono</a>
      <br />
      <br />
      {/* ユーザーページへのリンク */}
      <a href="/users">ユーザーページ</a>
    </div>
  );
}
