import { Prisma, JobApplication } from "@prisma/client";

export interface JobApplicationsRepository {
  create(data: Prisma.JobApplicationCreateInput): Promise<JobApplication>;
  findByCandidateAndJob(
    candidateId: string,
    jobId: string
  ): Promise<JobApplication | null>;
}
