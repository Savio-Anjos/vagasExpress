import { PrismaCandidatesRepository } from "@/repositories/prisma/prisma-candidates-repository";
import { AuthenticateCandidateUseCase } from "../candidates/authenticate-candidate";
import { ApplyForJobUseCase } from "../jobApplications/create-jobApplication";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { PrismaJobApplicationRepository } from "@/repositories/prisma/prisma-jobApplications-repository";

export function makeApplyForJobUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const candidatesRepository = new PrismaCandidatesRepository();
  const jobApplicationsRepository = new PrismaJobApplicationRepository();
  const useCase = new ApplyForJobUseCase(
    jobsRepository,
    candidatesRepository,
    jobApplicationsRepository
  );

  return useCase;
}
