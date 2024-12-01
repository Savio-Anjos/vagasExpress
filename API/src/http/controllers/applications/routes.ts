import { FastifyInstance } from "fastify";
import { verifyJWT } from "../middlewares/fastify-jwt";
import { applyForJob } from "./apply-for-job";
import { listJobApplications } from "./list-job-applications";
import { getCandidateDetails } from "./get-candidate-details";

export async function applicationRoutes(app: FastifyInstance) {
  app.post("/applications", { onRequest: verifyJWT }, applyForJob);
  app.get(
    "/applications/jobs/:jobId",
    { onRequest: verifyJWT },
    listJobApplications
  );
  app.get(
    "/applications/:jobId/:candidateId",
    {
      onRequest: verifyJWT,
    },
    getCandidateDetails
  );
}
