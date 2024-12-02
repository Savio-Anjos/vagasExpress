import api from "./api";

export const createJob = async (data: {
  title: string;
  description: string;
  requiredSkills: string[];
  desiredSkills?: string[];
  experienceNeeded: number;
  location: string;
  openingDate: string;
  closingDate: string;
  salaryRangeMin?: number;
  salaryRangeMax?: number;
  contractType: string;
}) => {
  return await api.post("/jobs", data);
};

export const listAllJobs = async () => {
  return await api.get("/jobs");
};

export const listRecruiterJobs = async (recruiterId: string) => {
  return await api.get(`/jobs/${recruiterId}`);
};

export const listCandidatesByJob = async (jobId: string) => {
  return await api.get(`/jobs/candidates/${jobId}`);
};

export const listOpenJobs = async () => {
  return await api.get("/jobs/open");
};

export const getJobDetails = async (jobId: string) => {
  return await api.get(`/jobs/details/${jobId}`);
};

export const updateJob = async (data: {
  jobId: string;
  title?: string;
  description?: string;
  requiredSkills?: string[];
  desiredSkills?: string[];
  experienceNeeded?: number;
  location?: string;
  openingDate?: string;
  closingDate?: string;
  salaryRangeMin?: number;
  salaryRangeMax?: number;
  contractType?: string;
}) => {
  return await api.put("/jobs", data);
};

export const deleteJob = async (jobId: string) => {
  return await api.delete("/jobs", { data: { jobId } });
};
