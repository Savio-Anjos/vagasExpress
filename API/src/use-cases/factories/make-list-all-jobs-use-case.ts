import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { ListAllJobsUseCase } from "../jobs/list-all-jobs";

export function makeListAllJobsUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const useCase = new ListAllJobsUseCase(jobsRepository);

  return useCase;
}
