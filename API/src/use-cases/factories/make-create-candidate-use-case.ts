import { PrismaCandidatesRepository } from "@/repositories/prisma/prisma-candidates-repository";
import { CreateCandidateUseCase } from "../candidates/create-candidate";

export function makeCreateCandidateUseCase() {
  const candidateRepository = new PrismaCandidatesRepository();
  const useCase = new CreateCandidateUseCase(candidateRepository);

  return useCase;
}
