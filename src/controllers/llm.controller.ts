import type { FastifyReply, FastifyRequest } from "fastify";
import { generateCaption } from "../services/llm.service.ts";

export class LLMController {
    async generate(request: FastifyRequest, reply: FastifyReply) {
        const { prompt } = request.body as { prompt: string };

        const result = await generateCaption(prompt);

        reply.send({ result });
    }
}
