import { FastifyInstance } from "fastify";
import { createCandidate } from "./create-candidate";

export async function candidatesRoutes(app: FastifyInstance) {
  app.post("/candidates", createCandidate);
}
