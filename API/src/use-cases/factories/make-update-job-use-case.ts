import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { UpdateJobUseCase } from "../jobs/update-job";

export function makeUpdateJobUseCase() {
  const recruitersRepository = new PrismaRecruitersRepository();
  const jobsRepository = new PrismaJobsRepository();
  const useCase = new UpdateJobUseCase(jobsRepository, recruitersRepository);

  return useCase;
}
