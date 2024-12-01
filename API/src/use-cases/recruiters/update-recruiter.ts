import { CandidatesRepository } from "@/repositories/candidates-repository";
import { Candidate, ExperienceTime, Recruiter } from "@prisma/client";
import { CandidateNotFoundError } from "../errors/canditate-not-found-error";
import { RecruiterNotFoundError } from "../errors/recruiter-not-found-error";
import { RecruitersRepository } from "@/repositories/recruiters-repository";

interface UpdateRecruiterUseCaseRequest {
  id: string;
  phone: string;
  jobTitle: string;
  company: string;
}

interface UpdateRecruiterUseCaseResponse {
  recruiter: Recruiter;
}

export class UpdateRecruiterUseCase {
  constructor(private recruitersRepository: RecruitersRepository) {}

  public async execute({
    id,
    phone,
    jobTitle,
    company,
  }: UpdateRecruiterUseCaseRequest): Promise<UpdateRecruiterUseCaseResponse> {
    const verifyRecruiterExists = await this.recruitersRepository.findById(id);

    if (!verifyRecruiterExists) {
      throw new RecruiterNotFoundError();
    }

    const recruiter = await this.recruitersRepository.update(id, {
      phone,
      jobTitle,
      company,
    });

    return { recruiter };
  }
}
