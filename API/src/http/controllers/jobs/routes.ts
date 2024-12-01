import { FastifyInstance } from "fastify";
import { createJob } from "./create-job";
import { verifyJWT } from "../middlewares/fastify-jwt";

export async function jobsRoutes(app: FastifyInstance) {
  app.post("/jobs", { onRequest: verifyJWT }, createJob);
}
