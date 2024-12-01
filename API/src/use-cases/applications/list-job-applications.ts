import { JobApplication } from "@prisma/client";
import { JobsRepository } from "@/repositories/jobs-repository";
import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { JobNotFoundError } from "../errors/job-not-found-error";

interface ListJobApplicationsUseCaseRequest {
  jobId: string;
}

interface ListJobApplicationsUseCaseResponse {
  applications: JobApplication[];
}

export class ListJobApplicationsUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private applicationRepository: PrismaApplicationRepository
  ) {}

  public async execute({
    jobId,
  }: ListJobApplicationsUseCaseRequest): Promise<ListJobApplicationsUseCaseResponse> {
    const job = await this.jobsRepository.findById(jobId);

    if (!job) {
      throw new JobNotFoundError();
    }

    const applications = await this.applicationRepository.findByJobId(jobId);

    return { applications };
  }
}
