import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { DeleteJobUseCase } from "../jobs/delete-job";

export function makeDeleteJobUseCase() {
  const recruitersRepository = new PrismaRecruitersRepository();
  const jobsRepository = new PrismaJobsRepository();
  const useCase = new DeleteJobUseCase(jobsRepository, recruitersRepository);

  return useCase;
}
