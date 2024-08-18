import { Hono } from "hono";
import { eq, or } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";

// ** import db
import { db } from "@/db";
import { register } from "@/db/schema";

// ** import validation
import { userRegistrationSchema } from "@/validation/register";

export const registerApi = new Hono();

registerApi.get("/", (c) => {
  return c.json({
    message: "register api server is running...🚀",
  });
});

registerApi.post("/", zValidator("json", userRegistrationSchema), async (c) => {
  const body = c.req.valid("json");

  const existingUser = await db
    .select()
    .from(register)
    .where(or(eq(register.phone_number, body.phone_number), eq(register.email, body.email)))
    .execute();

  if (existingUser.length > 0) {
    return c.json(
      { success: false, message: "User already registered" },
      { status: 409, statusText: "Conflict" }
    );
  }

  await db.insert(register).values(body).execute();

  return c.json(
    { success: true, message: "User registered successfully" },
    { status: 201, statusText: "Created" }
  );
});
