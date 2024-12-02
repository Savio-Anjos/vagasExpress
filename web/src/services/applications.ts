import api from "./api";

export const applyForJob = async (candidateId: string, jobId: string) => {
  return await api.post("/applications", { candidateId, jobId });
};

export const listJobApplications = async (jobId: string) => {
  return await api.get(`/applications/jobs/${jobId}`);
};

export const getCandidateDetails = async (
  jobId: string,
  candidateId: string
) => {
  return await api.get(`/applications/${jobId}/${candidateId}`);
};
