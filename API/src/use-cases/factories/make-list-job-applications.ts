import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { ListJobApplicationsUseCase } from "../applications/list-job-applications";
import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";

export function makeListJobApplicationsUseCase() {
  const jobsRepository = new PrismaJobsRepository();
  const applicationRepository = new PrismaApplicationRepository();

  return new ListJobApplicationsUseCase(jobsRepository, applicationRepository);
}
