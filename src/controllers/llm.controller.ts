import type { FastifyReply, FastifyRequest } from "fastify";
import { generateCaption } from "../services/llm.service.ts";

export class LLMController {
  async generate(request: FastifyRequest, reply: FastifyReply) {
      let imageFile: any;
      
    let prompt = `analise a imagem e gere 5 opções de legenda de imagem para o instagram, caso tenha descrição se baseia nela também. Retorne sempre um JSON com o seguinte formato de exemplo: {legendas: ["teste", "teste"]}`; // prompt padrão

    for await (const part of request.parts()) {
      if (part.type === "file") {
        if (!part.mimetype.startsWith("image/")) {
          return reply
            .status(400)
            .send({ error: "Arquivo não é uma imagem." });
        }

        imageFile = part;
      }

      if (part.type === "field" && part.fieldname === "prompt" && part.value !== "") {
        prompt += part.value;
      }
    }

    if (!imageFile) {
      return reply
        .status(400)
        .send({ error: "Imagem é obrigatória." });
    }

    const result = await generateCaption(imageFile, prompt);

    reply.send({ result });
  }
}
