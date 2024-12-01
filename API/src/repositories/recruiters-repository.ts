import { Recruiter, Prisma } from "@prisma/client";

export interface RecruitersRepository {
  create(data: Prisma.RecruiterCreateInput): Promise<Recruiter>;
  findById(id: string): Promise<Recruiter | null>;
  findByEmail(email: string): Promise<Recruiter | null>;
  update(id: string, data: Prisma.RecruiterUpdateInput): Promise<Recruiter>;
}
