import { PrismaCandidatesRepository } from "@/repositories/prisma/prisma-candidates-repository";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { ApplyForJobUseCase } from "../applications/apply-for-job";

export function makeApplyForJobUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const candidatesRepository = new PrismaCandidatesRepository();
  const jobApplicationsRepository = new PrismaApplicationRepository();
  const useCase = new ApplyForJobUseCase(
    jobsRepository,
    candidatesRepository,
    jobApplicationsRepository
  );

  return useCase;
}
