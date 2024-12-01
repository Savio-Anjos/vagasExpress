import { JobsRepository } from "@/repositories/jobs-repository";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";

interface GetJobDetailsUseCaseRequest {
  jobId: string;
}

interface GetJobDetailsUseCaseResponse {
  title: string;
  description: string;
  requiredSkills: string[];
  desiredSkills: string[];
  experienceNeeded: number;
  location: string;
  salaryRangeMin: number | null;
  salaryRangeMax: number | null;
  contractType: string;
}

export class GetJobDetailsUseCase {
  constructor(private jobsRepository: JobsRepository) {}

  public async execute({
    jobId,
  }: GetJobDetailsUseCaseRequest): Promise<GetJobDetailsUseCaseResponse> {
    const job = await this.jobsRepository.findById(jobId);

    if (!job) {
      throw new JobNotFoundError();
    }

    return {
      title: job.title,
      description: job.description,
      requiredSkills: job.requiredSkills,
      desiredSkills: job.desiredSkills,
      experienceNeeded: job.experienceNeeded,
      location: job.location,
      salaryRangeMin: job.salaryRangeMin,
      salaryRangeMax: job.salaryRangeMax,
      contractType: job.contractType,
    };
  }
}
