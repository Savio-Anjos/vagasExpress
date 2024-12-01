import { Recruiter } from "@prisma/client";
import { hash } from "bcryptjs";
import { RecruitersRepository } from "@/repositories/recruiters-repository";
import { RecruiterAlreadyExistsError } from "../errors/recruiter-already-exists-error";

interface CreateRecruiterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateRecruiterUseCaseResponse {
  recruiter: Recruiter;
}

export class CreateRecruiterUseCase {
  constructor(private recruitersRepository: RecruitersRepository) {}

  public async execute({
    name,
    email,
    password,
  }: CreateRecruiterUseCaseRequest): Promise<CreateRecruiterUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const verifyRecruiterExists = await this.recruitersRepository.findByEmail(
      email
    );

    if (verifyRecruiterExists) {
      throw new RecruiterAlreadyExistsError();
    }

    const recruiter = await this.recruitersRepository.create({
      name,
      email,
      password_hash,
    });

    if (!recruiter) {
      throw new RecruiterAlreadyExistsError();
    }

    return { recruiter };
  }
}
