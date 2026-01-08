import type { FastifyReply, FastifyRequest } from "fastify";
import { generateCaption } from "../services/llm.service.ts";

export class LLMController {
    async generate(request: FastifyRequest, reply: FastifyReply) {
        const file = await request.file();


        if (!file?.mimetype.startsWith("image/")) {
            return reply
                .status(400)
                .send({ error: "Arquivo não é uma imagem." });
        }

        const result = await generateCaption(file);

        reply.send({ result });
    }
}
