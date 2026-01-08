import Fastify from "fastify";
import { llmRoutes } from "./routes/llm.routes.ts";
import fastifyMultipart from "@fastify/multipart";

export const app = Fastify({
  logger: true,
});

app.register(fastifyMultipart, {
    limits: {
        fileSize: 1048576 * 5,
        files: 1
    }
})

app.register(llmRoutes);