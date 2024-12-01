import { makeListOpenJobsUseCase } from "@/use-cases/factories/make-list-open-jobs";
import { FastifyRequest, FastifyReply } from "fastify";

export async function listOpenJobs(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listOpenJobsUseCase = makeListOpenJobsUseCase();

    const jobs = await listOpenJobsUseCase.execute();

    return reply.status(200).send(jobs);
  } catch (error) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}
