import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { ContractType } from "@prisma/client";
import { RecruiterNotFoundError } from "@/use-cases/errors/recruiter-not-found-error";
import { makeUpdateJobUseCase } from "@/use-cases/factories/make-update-job-use-case";

export async function updateJob(request: FastifyRequest, reply: FastifyReply) {
  const createJobBodySchema = z.object({
    id: z.string().uuid(),
    recruiterId: z.string().uuid(),
    title: z.string().min(3).max(255),
    description: z.string().min(10),
    requiredSkills: z.array(z.string()),
    desiredSkills: z.array(z.string()),
    experienceNeeded: z.number().min(0),
    location: z.string().min(3).max(255),
    openingDate: z.string().refine((date) => !isNaN(Date.parse(date))),
    closingDate: z.string().refine((date) => !isNaN(Date.parse(date))),
    salaryRangeMin: z.number().optional(),
    salaryRangeMax: z.number().optional(),
    contractType: z.nativeEnum(ContractType),
  });

  const {
    id,
    recruiterId,
    title,
    description,
    requiredSkills,
    desiredSkills,
    experienceNeeded,
    location,
    openingDate,
    closingDate,
    salaryRangeMin,
    salaryRangeMax,
    contractType,
  } = createJobBodySchema.parse(request.body);

  try {
    const updateJobUseCase = makeUpdateJobUseCase();

    const { job } = await updateJobUseCase.execute({
      id,
      recruiterId,
      title,
      description,
      requiredSkills,
      desiredSkills,
      experienceNeeded,
      location,
      openingDate: new Date(openingDate),
      closingDate: new Date(closingDate),
      salaryRangeMin,
      salaryRangeMax,
      contractType,
    });

    return reply.status(200).send(job);
  } catch (error) {
    if (error instanceof RecruiterNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
