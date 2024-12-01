import { CandidatesRepository } from "@/repositories/candidates-repository";
import { Candidate, ExperienceTime } from "@prisma/client";
import { CandidateNotFoundError } from "../errors/canditate-not-found-error";

interface UpdateCandidateUseCaseRequest {
  id: string;
  experience: string;
  skills: string[];
  experienceTime: ExperienceTime;
  salaryExpectation?: number;
  phone: string;
}

interface UpdateCandidateUseCaseResponse {
  candidate: Candidate;
}

export class UpdateCandidateUseCase {
  constructor(private candidatesRepository: CandidatesRepository) {}

  public async execute({
    id,
    experience,
    experienceTime,
    skills,
    salaryExpectation,
    phone,
  }: UpdateCandidateUseCaseRequest): Promise<UpdateCandidateUseCaseResponse> {
    const verifyCandidateExists = await this.candidatesRepository.findById(id);

    if (verifyCandidateExists) {
      throw new CandidateNotFoundError();
    }

    const candidate = await this.candidatesRepository.update(id, {
      experience,
      skills,
      experienceTime,
      salaryExpectation,
      phone,
    });

    return { candidate };
  }
}
