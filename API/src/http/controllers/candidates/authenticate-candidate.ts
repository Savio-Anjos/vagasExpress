import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeAuthenticateCandidateUseCase } from "@/use-cases/factories/make-authenticate-candidate-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function authenticateCandidate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticateCandidateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateCandidateBodySchema.parse(
    request.body
  );

  try {
    const authenticateCandidateUseCase = makeAuthenticateCandidateUseCase();

    const { candidate } = await authenticateCandidateUseCase.execute({
      email,
      password,
    });

    const token = await reply.jwtSign({}, { sign: { sub: candidate.id } });

    return reply.status(200).send({ token });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }

    throw err;
  }
}
