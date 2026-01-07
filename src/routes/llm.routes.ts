import type { FastifyInstance } from "fastify";
import { LLMController } from "../controllers/llm.controller.ts";

const LLMControllerInstance = new LLMController();

export async function llmRoutes(app: FastifyInstance) {
    app.get('/', function (request, reply) {
        reply.send({ hello: 'worlddd' })
    })
    
    app.post('/generate', LLMControllerInstance.generate);
}