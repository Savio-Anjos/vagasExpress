import { CandidateAlreadyExistsError } from "@/use-cases/errors/candidate-already-exists-error";
import { makeUpdateRecruiterUseCase } from "@/use-cases/factories/make-update-recruiter-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateRecruiter(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const updateRecruiterBodySchema = z.object({
    id: z.string(),
    phone: z.string(),
    jobTitle: z.string(),
    company: z.string(),
  });

  const { id, phone, jobTitle, company } = updateRecruiterBodySchema.parse(
    request.body
  );

  try {
    const updateRecruiterUseCase = makeUpdateRecruiterUseCase();

    const recruiter = await updateRecruiterUseCase.execute({
      id,
      phone,
      jobTitle,
      company,
    });

    return reply.status(200).send(recruiter);
  } catch (err) {
    if (err instanceof CandidateAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}
