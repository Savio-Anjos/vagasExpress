import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeAuthenticateCandidateUseCase } from "@/use-cases/factories/make-authenticate-candidate-use-case";
import { makeAuthenticateRecruiterUseCase } from "@/use-cases/factories/make-authenticate-recruiter-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function authenticateRecruiter(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticateRecruiterBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateRecruiterBodySchema.parse(
    request.body
  );

  try {
    const authenticateRecruiterUseCase = makeAuthenticateRecruiterUseCase();

    const { recruiter } = await authenticateRecruiterUseCase.execute({
      email,
      password,
    });

    const id = recruiter.id;

    const token = await reply.jwtSign({}, { sign: { sub: recruiter.id } });

    return reply.status(200).send({ token, id });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }

    throw err;
  }
}
