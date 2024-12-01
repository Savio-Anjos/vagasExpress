import { FastifyInstance } from "fastify";
import { createCandidate } from "./create-candidate";
import { authenticateCandidate } from "./authenticate-candidate";

export async function candidatesRoutes(app: FastifyInstance) {
  app.post("/candidates", createCandidate);
  app.post("/candidates/auth", authenticateCandidate);
}
