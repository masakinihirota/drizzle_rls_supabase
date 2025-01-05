// seed.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { seed } from "drizzle-seed";

export const users = pgTable('users', {
  id: uuid().primaryKey(),
  name: text().notNull(),
});


