import { Prisma, Job } from "@prisma/client";

export interface JobsRepository {
  create(data: Prisma.JobCreateInput): Promise<Job>;
  findAll(): Promise<Job[]>;
  findRecruiterJobs(recruiterId: string): Promise<Job[]>;
  update(id: string, data: Prisma.JobUpdateInput): Promise<Job>;
}
