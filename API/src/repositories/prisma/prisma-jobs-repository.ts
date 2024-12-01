import { Prisma, Job, JobStatus } from "@prisma/client";
import { JobsRepository } from "../jobs-repository";
import { prisma } from "@/lib/prisma";

export class PrismaJobsRepository implements JobsRepository {
  public async create(data: Prisma.JobCreateInput): Promise<Job> {
    const job = await prisma.job.create({ data });

    return job;
  }

  public async findById(id: string): Promise<Job | null> {
    const job = await prisma.job.findUnique({ where: { id } });

    return job;
  }

  public async findOpenJobs(): Promise<Job[]> {
    const openedJobs = prisma.job.findMany({
      where: {
        status: JobStatus.OPEN,
      },
    });

    return openedJobs;
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

  public async delete(id: string): Promise<Job> {
    const deletedJob = await prisma.job.delete({ where: { id } });

    if (!deletedJob) {
      throw new Error("Job not found");
    }

    return deletedJob;
  }
}
