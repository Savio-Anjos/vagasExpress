import { PrismaRecruitersRepository } from "@/repositories/prisma/prisma-recruiters-repository";
import { AuthenticateRecruiterUseCase } from "../recruiters/authenticate-recruiter";

export function makeAuthenticateRecruiterUseCase() {
  const recruitersRepository = new PrismaRecruitersRepository();
  const useCase = new AuthenticateRecruiterUseCase(recruitersRepository);

  return useCase;
}
