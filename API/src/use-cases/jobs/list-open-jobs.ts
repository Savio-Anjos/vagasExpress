import { JobsRepository } from "@/repositories/jobs-repository";
import { Job } from "@prisma/client";

interface ListOpenJobsUseCaseResponse {
  jobs: Job[];
}

export class ListOpenJobsUseCase {
  constructor(private jobsRepository: JobsRepository) {}

  public async execute(): Promise<ListOpenJobsUseCaseResponse> {
    const jobs = await this.jobsRepository.findOpenJobs();

    return { jobs: jobs || [] };
  }
}
