import { Candidate, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { CandidatesRepository } from "../candidates-repository";

export class PrismaCandidatesRepository implements CandidatesRepository {
  public async create(data: Prisma.CandidateCreateInput): Promise<Candidate> {
    const candidate = await prisma.candidate.create({ data });

    return candidate;
  }

  public async findById(id: string): Promise<Candidate | null> {
    const candidate = await prisma.candidate.findUnique({
      where: { id },
    });

    return candidate;
  }

  public async findByEmail(email: string): Promise<Candidate | null> {
    const candidate = await prisma.candidate.findUnique({
      where: { email },
    });

    return candidate;
  }

  public async update(
    id: string,
    data: Prisma.CandidateUpdateInput
  ): Promise<Candidate> {
    const candidate = await prisma.candidate.update({
      where: { id: id },
      data,
    });

    return candidate;
  }
}
