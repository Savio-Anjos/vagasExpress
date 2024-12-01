import { CandidatesRepository } from "@/repositories/candidates-repository";
import { Candidate } from "@prisma/client";
import { hash } from "bcryptjs";
import { CandidateAlreadyExistsError } from "../errors/candidate-already-exists-error";

interface CreateCandidateUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateCandidateUseCaseResponse {
  Candidate: Candidate;
}

export class CreateCandidateUseCase {
  constructor(private candidatesRepository: CandidatesRepository) {}

  public async execute({
    name,
    email,
    password,
  }: CreateCandidateUseCaseRequest): Promise<CreateCandidateUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const verifyCandidateExists = await this.candidatesRepository.findByEmail(
      email
    );

    if (verifyCandidateExists) {
      throw new CandidateAlreadyExistsError();
    }

    const Candidate = await this.candidatesRepository.create({
      name,
      email,
      password_hash,
    });

    if (!Candidate) {
      throw new CandidateAlreadyExistsError();
    }

    return { Candidate };
  }
}
