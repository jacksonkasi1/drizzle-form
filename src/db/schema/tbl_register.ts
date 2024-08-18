import { pgTable } from "@/db/utils";
import { text, timestamp } from "drizzle-orm/pg-core";
import { v4 as uuid } from "uuid";

export const register = pgTable("register", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  user_name: text("user_name"),
  email: text("email"),
  phone_number: text("phone_number"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Register = typeof register.$inferSelect;
export type NewRegister = typeof register.$inferInsert;
