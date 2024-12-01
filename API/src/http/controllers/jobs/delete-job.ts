import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { RecruiterNotFoundError } from "@/use-cases/errors/recruiter-not-found-error";
import { makeDeleteJobUseCase } from "@/use-cases/factories/make-delete-job-use-case";

export async function deleteJob(request: FastifyRequest, reply: FastifyReply) {
  const deleteJobBodySchema = z.object({
    id: z.string().uuid(),
    recruiterId: z.string().uuid(),
  });

  const { id, recruiterId } = deleteJobBodySchema.parse(request.body);

  try {
    const updateJobUseCase = makeDeleteJobUseCase();

    const { job } = await updateJobUseCase.execute({
      id,
      recruiterId,
    });

    return reply.status(200).send(job);
  } catch (error) {
    if (error instanceof RecruiterNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
