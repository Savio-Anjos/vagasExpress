import { JobsRepository } from "@/repositories/jobs-repository";
import { RecruitersRepository } from "@/repositories/recruiters-repository";
import { Job, ContractType, JobStatus } from "@prisma/client";
import { RecruiterNotFoundError } from "../errors/recruiter-not-found-error";

interface UpdateJobUseCaseRequest {
  id: string;
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

interface UpdateJobUseCaseResponse {
  job: Job;
}

export class UpdateJobUseCase {
  constructor(
    private jobsRepository: JobsRepository,
    private recruitersRepository: RecruitersRepository
  ) {}

  public async execute({
    id,
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
  }: UpdateJobUseCaseRequest): Promise<UpdateJobUseCaseResponse> {
    const recruiter = await this.recruitersRepository.findById(recruiterId);
    if (!recruiter) {
      throw new RecruiterNotFoundError();
    }

    const job = await this.jobsRepository.update(id, {
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
