import { JobApplication } from "@prisma/client";
import { JobsRepository } from "@/repositories/jobs-repository";
import { CandidatesRepository } from "@/repositories/candidates-repository";
import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { CandidateNotFoundError } from "../errors/canditate-not-found-error";
import { JobNotFoundError } from "../errors/job-not-found-error";
import { JobApplicationAlreadyExistsError } from "../errors/job-already-exists-error";

interface ApplyForJobUseCaseRequest {
  candidateId: string;
  jobId: string;
}

interface ApplyForJobUseCaseResponse {
  application: JobApplication;
}

export class ApplyForJobUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private candidatesRepository: CandidatesRepository,
    private applicationRepository: PrismaApplicationRepository
  ) {}

  public async execute({
    candidateId,
    jobId,
  }: ApplyForJobUseCaseRequest): Promise<ApplyForJobUseCaseResponse> {
    const candidate = await this.candidatesRepository.findById(candidateId);
    if (!candidate) {
      throw new CandidateNotFoundError();
    }

    const job = await this.jobsRepository.findById(jobId);
    if (!job) {
      throw new JobNotFoundError();
    }

    const existingApplication =
      await this.applicationRepository.findByCandidateAndJob(
        candidateId,
        jobId
      );
    if (existingApplication) {
      throw new JobApplicationAlreadyExistsError();
    }

    const application = await this.applicationRepository.create({
      job: { connect: { id: jobId } },
      candidate: { connect: { id: candidateId } },
      score: 0,
    });

    return { application };
  }
}
