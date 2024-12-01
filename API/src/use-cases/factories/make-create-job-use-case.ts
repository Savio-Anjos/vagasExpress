import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { CreateJobUseCase } from "../jobs/create-job";

export function makeCreateJobUseCase() {
  const recruitersRepository = new PrismaRecruitersRepository();
  const jobsRepository = new PrismaJobsRepository();
  const useCase = new CreateJobUseCase(jobsRepository, recruitersRepository);

  return useCase;
}
