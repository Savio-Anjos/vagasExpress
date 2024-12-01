import { FastifyRequest, FastifyReply } from "fastify";
import { makeListAllJobsUseCase } from "@/use-cases/factories/make-list-all-jobs-use-case";
import { NoJobsFoundError } from "@/use-cases/errors/no-jobs-found-error";

export async function listAllJobs(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listAllJobs = makeListAllJobsUseCase();

    const { jobs } = await listAllJobs.execute({});

    return reply.status(200).send(jobs);
  } catch (error) {
    if (error instanceof NoJobsFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
