import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { CreateRecruiterUseCase } from "../recruiters/create-recruiter";

export function makeCreateRecruiterUseCase() {
  const recruitersRepository = new PrismaRecruitersRepository();
  const useCase = new CreateRecruiterUseCase(recruitersRepository);

  return useCase;
}
