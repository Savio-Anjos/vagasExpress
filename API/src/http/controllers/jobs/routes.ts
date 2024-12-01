import { FastifyInstance } from "fastify";
import { createJob } from "./create-job";
import { verifyJWT } from "../middlewares/fastify-jwt";
import { listAllJobs } from "./list-all-jobs";
import { listRecruiterJobs } from "./list-recruiter-jobs";
import { updateJob } from "./update-job";
import { deleteJob } from "./delete-job";
import { listCandidatesByJob } from "./list-candidates-by-job";
import { listOpenJobs } from "./list-open-jobs";

export async function jobsRoutes(app: FastifyInstance) {
  app.post("/jobs", { onRequest: verifyJWT }, createJob);
  app.get("/jobs", { onRequest: verifyJWT }, listAllJobs);
  app.get("/jobs/:recruiterId", { onRequest: verifyJWT }, listRecruiterJobs);
  app.get(
    "/jobs/candidates/:jobId",
    { onRequest: verifyJWT },
    listCandidatesByJob
  );
  app.get("/jobs/open", { onRequest: verifyJWT }, listOpenJobs);
  app.put("/jobs", { onRequest: verifyJWT }, updateJob);
  app.delete("/jobs", { onRequest: verifyJWT }, deleteJob);
}
