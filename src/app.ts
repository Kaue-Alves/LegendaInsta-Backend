import Fastify from "fastify";
import { llmRoutes } from "./routes/llm.routes.ts";

export const app = Fastify({
  logger: true,
});

app.register(llmRoutes);