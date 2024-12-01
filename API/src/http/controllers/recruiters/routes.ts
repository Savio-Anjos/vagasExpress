import { FastifyInstance } from "fastify";
import { createRecruiter } from "./create-recruiter";
import { authenticateRecruiter } from "./authenticate-recruiter";
import { updateRecruiter } from "./update-recruiter";

export async function recruitersRoutes(app: FastifyInstance) {
  app.post("/recruiters", createRecruiter);
  app.post("/recruiters/auth", authenticateRecruiter);
  app.put("/recruiters", updateRecruiter);
}
