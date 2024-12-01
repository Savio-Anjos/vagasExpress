import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";
import { makeGetCandidateDetailsUseCase } from "@/use-cases/factories/make-get-candidate-details";
import { CandidateNotFoundError } from "@/use-cases/errors/canditate-not-found-error";

export async function getCandidateDetails(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getCandidateDetailsParamsSchema = z.object({
    jobId: z.string().uuid(),
    candidateId: z.string().uuid(),
  });

  const { jobId, candidateId } = getCandidateDetailsParamsSchema.parse(
    request.params
  );

  try {
    const getCandidateDetailsUseCase = makeGetCandidateDetailsUseCase();

    const candidateDetails = await getCandidateDetailsUseCase.execute({
      jobId,
      candidateId,
    });

    return reply.status(200).send(candidateDetails);
  } catch (error) {
    if (
      error instanceof JobNotFoundError ||
      error instanceof CandidateNotFoundError
    ) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
