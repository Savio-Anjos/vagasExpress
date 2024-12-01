import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";
import { makeListCandidatesByJobUseCase } from "@/use-cases/factories/make-list-candidates-by-job";

export async function listCandidatesByJob(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listCandidatesByJobParamsSchema = z.object({
    jobId: z.string().uuid(),
  });

  const { jobId } = listCandidatesByJobParamsSchema.parse(request.params);

  try {
    const listCandidatesByJobUseCase = makeListCandidatesByJobUseCase();

    const { candidates } = await listCandidatesByJobUseCase.execute({ jobId });

    return reply.status(200).send(candidates);
  } catch (error) {
    if (error instanceof JobNotFoundError) {
      return reply.status(404).send({ message: "Job not found" });
    }

    throw error;
  }
}
