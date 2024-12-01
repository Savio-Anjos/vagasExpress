import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";
import { makeApplyForJobUseCase } from "@/use-cases/factories/make-apply-for-job-use-case";
import { CandidateNotFoundError } from "@/use-cases/errors/canditate-not-found-error";
import { JobApplicationAlreadyExistsError } from "@/use-cases/errors/job-already-exists-error";

export async function applyForJob(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const applyForJobBodySchema = z.object({
    candidateId: z.string().uuid(),
    jobId: z.string().uuid(),
  });

  const { candidateId, jobId } = applyForJobBodySchema.parse(request.body);

  try {
    const applyForJobUseCase = makeApplyForJobUseCase();

    const { application } = await applyForJobUseCase.execute({
      candidateId,
      jobId,
    });

    return reply.status(201).send(application);
  } catch (error) {
    if (error instanceof CandidateNotFoundError) {
      return reply.status(404).send({ message: "Candidate not found" });
    }

    if (error instanceof JobNotFoundError) {
      return reply.status(404).send({ message: "Job not found" });
    }

    if (error instanceof JobApplicationAlreadyExistsError) {
      return reply
        .status(409)
        .send({ message: "Candidate has already applied for this job" });
    }

    throw error;
  }
}
