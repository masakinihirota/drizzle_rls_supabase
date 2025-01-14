import { pgTable, serial, text } from 'drizzle-orm/pg-core'

// countriesテーブルの定義
export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull()
});

