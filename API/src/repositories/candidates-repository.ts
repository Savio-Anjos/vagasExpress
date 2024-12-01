import { Candidate, Prisma } from "@prisma/client";

export interface CandidatesRepository {
  create(data: Prisma.CandidateCreateInput): Promise<Candidate>;
  findById(id: string): Promise<Candidate | null>;
  findByEmail(email: string): Promise<Candidate | null>;
  update(id: string, data: Prisma.CandidateUpdateInput): Promise<Candidate>;
}
