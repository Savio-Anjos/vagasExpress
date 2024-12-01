import { JobsRepository } from "@/repositories/jobs-repository";
import { RecruitersRepository } from "@/repositories/recruiters-repository";
import { Job, ContractType, JobStatus } from "@prisma/client";
import { RecruiterNotFoundError } from "../errors/recruiter-not-found-error";

interface CreateJobUseCaseRequest {
  recruiterId: string;
  title: string;
  description: string;
  requiredSkills: string[];
  desiredSkills: string[];
  experienceNeeded: number;
  location: string;
  openingDate: Date;
  closingDate: Date;
  salaryRangeMin?: number;
  salaryRangeMax?: number;
  contractType: ContractType;
}

interface CreateJobUseCaseResponse {
  job: Job;
}

export class CreateJobUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private recruitersRepository: RecruitersRepository
  ) {}

  public async execute({
    recruiterId,
    title,
    description,
    requiredSkills,
    desiredSkills,
    experienceNeeded,
    location,
    openingDate,
    closingDate,
    salaryRangeMin,
    salaryRangeMax,
    contractType,
  }: CreateJobUseCaseRequest): Promise<CreateJobUseCaseResponse> {
    const recruiter = await this.recruitersRepository.findById(recruiterId);
    if (!recruiter) {
      throw new RecruiterNotFoundError();
    }

    const job = await this.jobsRepository.create({
      recruiter: { connect: { id: recruiterId } },
      title,
      description,
      requiredSkills,
      desiredSkills,
      experienceNeeded,
      location,
      openingDate,
      closingDate,
      salaryRangeMin,
      salaryRangeMax,
      contractType,
      status: JobStatus.OPEN,
    });

    return { job };
  }
}
