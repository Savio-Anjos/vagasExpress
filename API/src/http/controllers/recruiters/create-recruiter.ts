import { RecruiterAlreadyExistsError } from "@/use-cases/errors/recruiter-already-exists-error";
import { makeCreateRecruiterUseCase } from "@/use-cases/factories/make-create-recruiter-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createRecruiter(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createRecruiterBodySchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
  });

  const { name, email, password } = createRecruiterBodySchema.parse(
    request.body
  );

  try {
    const createRecruiterUseCase = makeCreateRecruiterUseCase();

    await createRecruiterUseCase.execute({ name, email, password });
  } catch (err) {
    if (err instanceof RecruiterAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send();
}
