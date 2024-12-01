import { ApplicationsRepository } from "@/repositories/applications-repository";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";

interface ListCandidatesByJobUseCaseRequest {
  jobId: string;
}

interface ListCandidatesByJobUseCaseResponse {
  candidates: {
    id: string;
    name: string;
    email: string;
    score: number;
  }[];
}

export class ListCandidatesByJobUseCase {
  constructor(private applicationRepository: ApplicationsRepository) {}

  public async execute({
    jobId,
  }: ListCandidatesByJobUseCaseRequest): Promise<ListCandidatesByJobUseCaseResponse> {
    const jobApplications = await this.applicationRepository.findByJobId(jobId);
    if (!jobApplications.length) {
      throw new JobNotFoundError();
    }

    const candidates = jobApplications.map((application: any) => ({
      id: application.candidateId,
      name: application.candidate.name,
      email: application.candidate.email,
      score: application.score,
    }));

    return { candidates };
  }
}
