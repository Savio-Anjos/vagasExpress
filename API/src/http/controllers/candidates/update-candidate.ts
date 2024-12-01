import { CandidateAlreadyExistsError } from "@/use-cases/errors/candidate-already-exists-error";
import { makeUpdateCandidateUseCase } from "@/use-cases/factories/make-update-candidate-use-case";
import { ExperienceTime } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateCandidate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const updateCandidateBodySchema = z.object({
    id: z.string(),
    experience: z.string(),
    skills: z.array(z.string()),
    experienceTime: z.nativeEnum(ExperienceTime),
    salaryExpectation: z.number().optional(),
    phone: z.string(),
  });

  const { id, experience, skills, experienceTime, salaryExpectation, phone } =
    updateCandidateBodySchema.parse(request.body);

  try {
    const updateCandidateUseCase = makeUpdateCandidateUseCase();

    const candidate = await updateCandidateUseCase.execute({
      id,
      experience,
      skills,
      experienceTime,
      salaryExpectation,
      phone,
    });

    return reply.status(200).send(candidate);
  } catch (err) {
    if (err instanceof CandidateAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}
