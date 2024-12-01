import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { GetCandidateDetailsUseCase } from "../applications/get-candidate-details";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { GetJobDetailsUseCase } from "../jobs/get-job-details";

export function makeGetJobDetailsUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const useCase = new GetJobDetailsUseCase(jobsRepository);

  return useCase;
}
