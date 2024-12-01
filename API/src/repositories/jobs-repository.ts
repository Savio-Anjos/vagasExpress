import { Prisma, Job } from "@prisma/client";

export interface JobsRepository {
  create(data: Prisma.JobCreateInput): Promise<Job>;
  findAll(): Promise<Job[]>;
}
