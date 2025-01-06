import { drizzle } from "drizzle-orm/node-postgres";
import { reset } from "drizzle-seed";

import dotenv from "dotenv"
import { users } from "@/db/schema/users";

// 環境変数を読み込む
dotenv.config()

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  console.log("Rest database...");
  console.log("Database URL: ", process.env.DATABASE_URL);
  await reset(db, { users });
}

main();
