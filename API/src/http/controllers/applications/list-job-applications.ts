import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";
import { makeListJobApplicationsUseCase } from "@/use-cases/factories/make-list-job-applications";

export async function listJobApplications(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listJobApplicationsParamsSchema = z.object({
    jobId: z.string().uuid(),
  });

  const { jobId } = listJobApplicationsParamsSchema.parse(request.params);

  try {
    const listJobApplicationsUseCase = makeListJobApplicationsUseCase();

    const { applications } = await listJobApplicationsUseCase.execute({
      jobId,
    });

    return reply.status(200).send(applications);
  } catch (error) {
    if (error instanceof JobNotFoundError) {
      return reply.status(404).send({ message: "Job not found" });
    }
    throw error;
  }
}
