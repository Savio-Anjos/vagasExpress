import { Recruiter, Prisma } from "@prisma/client";

export interface RecruitersRepository {
  create(data: Prisma.RecruiterCreateInput): Promise<Recruiter>;
  findByEmail(email: string): Promise<Recruiter | null>;
}
