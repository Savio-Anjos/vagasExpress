import { FastifyInstance } from "fastify";
import { createRecruiter } from "./create-recruiter";

export async function recruitersRoutes(app: FastifyInstance) {
  app.post("/recruiters", createRecruiter);
}
