import { ApplicationsRepository } from "@/repositories/applications-repository";
import { JobNotFoundError } from "@/use-cases/errors/job-not-found-error";

interface GetCandidateDetailsUseCaseRequest {
  jobId: string;
  candidateId: string;
}

interface GetCandidateDetailsUseCaseResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  experience: string | null;
  skills: string[];
  experienceTime: string | null;
  salaryExpectation: number | null;
  score: number;
}

export class GetCandidateDetailsUseCase {
  constructor(private applicationRepository: ApplicationsRepository) {}

  public async execute({
    jobId,
    candidateId,
  }: GetCandidateDetailsUseCaseRequest): Promise<GetCandidateDetailsUseCaseResponse> {
    const application: any =
      await this.applicationRepository.findByCandidateAndJob(
        candidateId,
        jobId
      );

    if (!application) {
      throw new JobNotFoundError();
    }

    const { candidate, score } = application;

    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      experience: candidate.experience,
      skills: candidate.skills,
      experienceTime: candidate.experienceTime,
      salaryExpectation: candidate.salaryExpectation,
      score,
    };
  }
}
