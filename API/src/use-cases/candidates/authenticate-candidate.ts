import { CandidatesRepository } from "@/repositories/candidates-repository";
import { Candidate } from "@prisma/client";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";

interface AuthenticateCandidateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateCandidateUseCaseResponse {
  candidate: Candidate;
}

export class AuthenticateCandidateUseCase {
  constructor(private CandidatesRepository: CandidatesRepository) {}

  public async execute({
    email,
    password,
  }: AuthenticateCandidateUseCaseRequest): Promise<AuthenticateCandidateUseCaseResponse> {
    const candidate = await this.CandidatesRepository.findByEmail(email);

    if (!candidate) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatchs = await compare(password, candidate.password_hash);

    if (!doesPasswordMatchs) {
      throw new InvalidCredentialsError();
    }

    return { candidate };
  }
}
