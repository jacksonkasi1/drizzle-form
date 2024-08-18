import { Hono } from "hono";

// ** import rest api
import { registerApi } from "./register";

export const router = new Hono();

// config other rest api routes
router.route("register", registerApi);
