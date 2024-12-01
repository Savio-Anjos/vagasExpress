import { prisma } from "@/lib/prisma"; // Supondo que Prisma Client esteja configurado
import { JobApplication, Prisma } from "@prisma/client";

export class JobApplicationRepository {
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
    });

    return jobApplication;
  }
}
