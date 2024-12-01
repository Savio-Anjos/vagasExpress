import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { UpdateRecruiterUseCase } from "../recruiters/update-recruiter";

export function makeUpdateRecruiterUseCase() {
  const recruiterRepository = new PrismaRecruitersRepository();
  const useCase = new UpdateRecruiterUseCase(recruiterRepository);

  return useCase;
}
