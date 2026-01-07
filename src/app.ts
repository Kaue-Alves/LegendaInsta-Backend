import Fastify from "fastify";
import { geminiRoutes } from "./routes/gemini.routes.ts";

export const app = Fastify({
  logger: true,
});

app.register(geminiRoutes);