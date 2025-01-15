import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  // createdAt: text('created_at').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
});
// }).enableRLS();  // Enable Row Level Security


