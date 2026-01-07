import type { FastifyInstance } from "fastify";

export async function geminiRoutes(app: FastifyInstance) {
        app.get('/', function (request, reply) {
        reply.send({ hello: 'worlddd' })
    })
}