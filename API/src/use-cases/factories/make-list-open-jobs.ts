import { PrismaJobsRepository } from "@/repositories/prisma/prisma-jobs-repository";
import { ListOpenJobsUseCase } from "../jobs/list-open-jobs";

export function makeListOpenJobsUseCase() {
  const jobsRepository = new PrismaJobsRepository();

  return new ListOpenJobsUseCase(jobsRepository);
}
