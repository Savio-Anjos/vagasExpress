import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";
import { makeGetJobDetailsUseCase } from "@/use-cases/factories/make-get-job-details-use-case";

export async function getJobDetails(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getJobDetailsParamsSchema = z.object({
    jobId: z.string().uuid(),
  });

  const { jobId } = getJobDetailsParamsSchema.parse(request.params);

  try {
    const getJobDetailsUseCase = makeGetJobDetailsUseCase();

    const jobDetails = await getJobDetailsUseCase.execute({ jobId });

    return reply.status(200).send(jobDetails);
  } catch (error) {
    if (error instanceof JobNotFoundError) {
      return reply.status(404).send({ message: "Job not found" });
    }

    return reply.status(500).send({ message: "Internal Server Error" });
  }
}
