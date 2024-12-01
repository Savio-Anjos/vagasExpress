import { FastifyInstance } from "fastify";
import { verifyJWT } from "../middlewares/fastify-jwt";
import { applyForJob } from "./apply-for-job";

export async function applicationRoutes(app: FastifyInstance) {
  app.post("/applications", { onRequest: verifyJWT }, applyForJob);
}
