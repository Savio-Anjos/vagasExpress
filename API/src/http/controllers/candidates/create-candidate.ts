import { CandidateAlreadyExistsError } from "@/use-cases/errors/candidate-already-exists-error";
import { makeCreateCandidateUseCase } from "@/use-cases/factories/make-create-candidate-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createCandidate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createCandidateBodySchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
  });

  const { name, email, password } = createCandidateBodySchema.parse(
    request.body
  );

  try {
    const createCandidateUseCase = makeCreateCandidateUseCase();

    await createCandidateUseCase.execute({ name, email, password });
  } catch (err) {
    if (err instanceof CandidateAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send();
}
