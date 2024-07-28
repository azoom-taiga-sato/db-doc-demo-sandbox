import {mysqlTable, bigint, varchar, timestamp, date, index,} from "drizzle-orm/mysql-core"
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { z } from 'zod'
import { relations } from "drizzle-orm"
import { attribute } from "./attribute"
  
export const user = mysqlTable("user",{
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  email: varchar("email", { length: 50 }).unique().notNull(),
  emailVerified: varchar("email_verified", { length: 50 }),
  password: varchar("password", { length: 255 }).notNull(),
  birthday: date("birthday").notNull(),
  plateNumber: varchar("plate_number", { length: 50 }).notNull(),
  attributeId: bigint("attribute_id", { mode: "number" })
    .references(() => attribute.id)
    .notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
},(user) => ({
    nameIdx: index("name_idx").on(user.name),
}))

export const userInsertSchema = createInsertSchema(user)
export const userSchema = createSelectSchema(user)
export type User = z.infer<typeof userSchema>

export const userRelations = relations(user, ({ one}) => ({
  attribute: one(attribute, {
    fields: [user.attributeId],
    references: [attribute.id],
  })
}))