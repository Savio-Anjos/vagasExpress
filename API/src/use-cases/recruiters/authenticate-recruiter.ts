import { Recruiter } from "@prisma/client";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";
import { RecruitersRepository } from "@/repositories/recruiters-repository";

interface AuthenticateRecruiterUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateRecruiterUseCaseResponse {
  recruiter: Recruiter;
}

export class AuthenticateRecruiterUseCase {
  constructor(private RecruitersRepository: RecruitersRepository) {}

  public async execute({
    email,
    password,
  }: AuthenticateRecruiterUseCaseRequest): Promise<AuthenticateRecruiterUseCaseResponse> {
    const recruiter = await this.RecruitersRepository.findByEmail(email);

    if (!recruiter) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatchs = await compare(password, recruiter.password_hash);

    if (!doesPasswordMatchs) {
      throw new InvalidCredentialsError();
    }

    return { recruiter };
  }
}
