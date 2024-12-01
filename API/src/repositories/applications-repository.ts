import { Prisma, JobApplication } from "@prisma/client";

export interface ApplicationsRepository {
  create(data: Prisma.JobApplicationCreateInput): Promise<JobApplication>;
  findByCandidateAndJob(
    candidateId: string,
    jobId: string
  ): Promise<JobApplication | null>;
  findByJobId(jobId: string): Promise<JobApplication[]>;
}
