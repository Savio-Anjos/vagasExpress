import { Recruiter, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { RecruitersRepository } from "../recruiters-repository";

export class PrismaRecruitersRepository implements RecruitersRepository {
  public async create(data: Prisma.RecruiterCreateInput): Promise<Recruiter> {
    const recruiter = await prisma.recruiter.create({ data });

    return recruiter;
  }
  public async findByEmail(email: string): Promise<Recruiter | null> {
    const recruiter = await prisma.recruiter.findUnique({
      where: { email },
    });

    return recruiter;
  }
}
