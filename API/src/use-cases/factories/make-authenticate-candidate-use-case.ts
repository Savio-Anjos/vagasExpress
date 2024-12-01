import { PrismaCandidatesRepository } from "@/repositories/prisma/prisma-candidates-repository";
import { AuthenticateCandidateUseCase } from "../candidates/authenticate-candidate";

export function makeAuthenticateCandidateUseCase() {
  const candidatesRepository = new PrismaCandidatesRepository();
  const useCase = new AuthenticateCandidateUseCase(candidatesRepository);

  return useCase;
}
