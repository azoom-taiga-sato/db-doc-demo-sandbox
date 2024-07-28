import {mysqlTable, bigint, varchar, timestamp, date, index,} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { z } from 'zod'
import { relations } from "drizzle-orm"
import { user } from "./user"

export const attribute = mysqlTable("attribute",{
      id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
      name: varchar("name", { length: 50 }).notNull(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
},(attribute) => ({
      nameIdx: index("name_idx").on(attribute.name),
}))

export const attributeInsertSchema = createInsertSchema(attribute)
export const attributeSchema = createSelectSchema(attribute)
export type Attribute = z.infer<typeof attributeSchema>

export const attributeRelations = relations(attribute, ({ many }) => ({
    user: many(user),
  }))