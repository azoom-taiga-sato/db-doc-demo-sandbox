import process from 'node:process'
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./drizzle/schema/*",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: Number(process.env.DATABASE_PORT || 3390),
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
  verbose: true,
  strict: true,
  // breakpoints: false,
})