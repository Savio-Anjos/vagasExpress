import { FastifyInstance } from "fastify";
import { createJob } from "./create-job";
import { verifyJWT } from "../middlewares/fastify-jwt";
import { listAllJobs } from "./list-all-jobs";

export async function jobsRoutes(app: FastifyInstance) {
  app.post("/jobs", { onRequest: verifyJWT }, createJob);
  app.get("/jobs", { onRequest: verifyJWT }, listAllJobs);
}
