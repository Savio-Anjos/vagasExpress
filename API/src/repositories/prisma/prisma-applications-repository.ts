import { prisma } from "@/lib/prisma"; // Supondo que Prisma Client esteja configurado
import { JobApplication, Prisma } from "@prisma/client";
import { ApplicationsRepository } from "../applications-repository";

export class PrismaApplicationRepository implements ApplicationsRepository {
  public async create(
    data: Prisma.JobApplicationCreateInput
  ): Promise<JobApplication> {
    const jobApplication = await prisma.jobApplication.create({ data });

    return jobApplication;
  }

  public async findByCandidateAndJob(
    candidateId: string,
    jobId: string
  ): Promise<JobApplication | null> {
    const jobApplication = prisma.jobApplication.findFirst({
      where: {
        candidateId,
        jobId,
      },
      include: {
        candidate: true,
      },
    });

    return jobApplication;
  }

  public async findByJobId(jobId: string): Promise<JobApplication[]> {
    const applications = prisma.jobApplication.findMany({
      where: { jobId },
      include: { candidate: true },
    });

    return applications;
  }
}
