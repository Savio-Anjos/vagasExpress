import { Prisma, Job } from "@prisma/client";
import { JobsRepository } from "../jobs-repository";
import { prisma } from "@/lib/prisma";

export class PrismaJobsRepository implements JobsRepository {
  public async create(data: Prisma.JobCreateInput): Promise<Job> {
    const job = await prisma.job.create({ data });

    return job;
  }

  public async findAll(): Promise<Job[]> {
    const jobs = await prisma.job.findMany();

    return jobs;
  }

  public async findRecruiterJobs(recruiterId: string): Promise<Job[]> {
    const jobs = await prisma.job.findMany({ where: { recruiterId } });

    return jobs;
  }

  public async update(id: string, data: Prisma.JobUpdateInput): Promise<Job> {
    const job = await prisma.job.update({
      where: { id },
      data,
    });

    return job;
  }
}
