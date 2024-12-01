import { JobsRepository } from "@/repositories/jobs-repository";
import { Job } from "@prisma/client";
import { NoJobsFoundError } from "../errors/no-jobs-found-error";
import { RecruitersRepository } from "@/repositories/recruiters-repository";
import { RecruiterNotFoundError } from "../errors/recruiter-not-found-error";

interface ListRecruiterJobsUseCaseRequest {
  recruiterId: string;
}

interface ListRecruiterJobsUseCaseResponse {
  jobs: Job[];
}

export class ListRecruiterJobsUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private recruitersRepository: RecruitersRepository
  ) {}

  public async execute({
    recruiterId,
  }: ListRecruiterJobsUseCaseRequest): Promise<ListRecruiterJobsUseCaseResponse> {
    const recruiter = await this.recruitersRepository.findById(recruiterId);

    if (!recruiter) {
      throw new RecruiterNotFoundError();
    }

    const jobs = await this.jobsRepository.findRecruiterJobs(recruiterId);

    if (jobs.length === 0) {
      throw new NoJobsFoundError();
    }

    return {
      jobs,
    };
  }
}
