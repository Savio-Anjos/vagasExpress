import { JobsRepository } from "@/repositories/jobs-repository";
import { Job } from "@prisma/client";
import { NoJobsFoundError } from "../errors/no-jobs-found-error";
import { RecruitersRepository } from "@/repositories/recruiters-repository";
import { RecruiterNotFoundError } from "../errors/recruiter-not-found-error";

interface DeleteJobUseCaseRequest {
  id: string;
  recruiterId: string;
}

interface DeleteJobUseCaseResponse {
  job: Job;
}

export class DeleteJobUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private recruitersRepository: RecruitersRepository
  ) {}

  public async execute({
    id,
    recruiterId,
  }: DeleteJobUseCaseRequest): Promise<DeleteJobUseCaseResponse> {
    const verifyRecruiterExists = await this.recruitersRepository.findById(
      recruiterId
    );

    if (!verifyRecruiterExists) {
      throw new RecruiterNotFoundError();
    }

    const job = await this.jobsRepository.delete(id);

    if (!job) {
      throw new NoJobsFoundError();
    }

    return { job };
  }
}
