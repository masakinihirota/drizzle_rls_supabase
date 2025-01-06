import { pgTable, text, uuid, foreignKey } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

export const roots = pgTable(
  "roots",
  {
    id: uuid('id').primaryKey().notNull(),
    firstName: text('first_name'),
    lastName: text('last_name'),
  },
  (table) => [
    foreignKey({
      columns: [table.id],
      foreignColumns: [authUsers.id],
    }).onDelete("cascade"),
  ]
);
