import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";

import dotenv from "dotenv"
import { users } from "@/db/schema/users";
import { countries } from "@/db/schema/countries";

// 環境変数を読み込む
dotenv.config()

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  console.log("Seeding database...");
  console.log("Database URL: ", process.env.DATABASE_URL);

  // データを挿入
  // スキーマの定義を渡します。
  // sqlでテーブルを削除してからデータを挿入します。
  // TRUNCATE TABLE users;
  // TRUNCATE TABLE countries;

  await seed(db, { users });
  await seed(db, { countries });
}

main();

