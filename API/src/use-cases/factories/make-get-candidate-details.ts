import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { GetCandidateDetailsUseCase } from "../applications/get-candidate-details";

export function makeGetCandidateDetailsUseCase() {
  const applicationsRepository = new PrismaApplicationRepository();
  const useCase = new GetCandidateDetailsUseCase(applicationsRepository);

  return useCase;
}
