import { PrismaApplicationRepository } from "@/repositories/prisma/prisma-applications-repository";
import { ListCandidatesByJobUseCase } from "../jobs/list-candidate-by-job";

export function makeListCandidatesByJobUseCase() {
  const applicationsRepository = new PrismaApplicationRepository();
  const useCase = new ListCandidatesByJobUseCase(applicationsRepository);

  return useCase;
}
