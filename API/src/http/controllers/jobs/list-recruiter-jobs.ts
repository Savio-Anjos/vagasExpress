import { FastifyRequest, FastifyReply } from "fastify";
import { NoJobsFoundError } from "@/use-cases/errors/no-jobs-found-error";
import { z } from "zod";
import { makeListRecruiterJobsUseCase } from "@/use-cases/factories/make-list-recruiter-jobs-use-case";

export async function listRecruiterJobs(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listRecrruiterJobsBodySchema = z.object({
    recruiterId: z.string().uuid(),
  });

  const { recruiterId } = listRecrruiterJobsBodySchema.parse(request.params);

  try {
    const listRecruiterJobs = makeListRecruiterJobsUseCase();

    const { jobs } = await listRecruiterJobs.execute({ recruiterId });

    return reply.status(200).send(jobs);
  } catch (error) {
    if (error instanceof NoJobsFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
