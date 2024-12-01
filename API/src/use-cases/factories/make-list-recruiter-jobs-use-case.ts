import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { ListRecruiterJobsUseCase } from "../jobs/list-recruiter-jobs";
import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";

export function makeListRecruiterJobsUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const recruitersRepository = new PrismaRecruitersRepository();

  const useCase = new ListRecruiterJobsUseCase(
    jobsRepository,
    recruitersRepository
  );

  return useCase;
}
