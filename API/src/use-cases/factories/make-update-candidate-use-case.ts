import { PrismaCandidatesRepository } from "@/repositories/prisma/prisma-candidates-repository";
import { UpdateCandidateUseCase } from "../candidates/update-candidate";

export function makeUpdateCandidateUseCase() {
  const candidateRepository = new PrismaCandidatesRepository();
  const useCase = new UpdateCandidateUseCase(candidateRepository);

  return useCase;
}
