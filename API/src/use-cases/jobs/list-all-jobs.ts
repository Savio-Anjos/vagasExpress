import { JobsRepository } from "@/repositories/jobs-repository";
import { Job } from "@prisma/client";
import { NoJobsFoundError } from "../errors/no-jobs-found-error";

interface ListAllJobsUseCaseRequest {}

interface ListAllJobsUseCaseResponse {
  jobs: Job[];
}

export class ListAllJobsUseCase {
  constructor(private jobsRepository: JobsRepository) {}

  public async execute({}: ListAllJobsUseCaseRequest): Promise<ListAllJobsUseCaseResponse> {
    const jobs = await this.jobsRepository.findAll();

    if (jobs.length === 0) {
      throw new NoJobsFoundError();
    }

    return {
      jobs,
    };
  }
}
