import api from "./api";

export const createCandidate = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/candidates", data);
  return response.data;
};

export const authenticateCandidate = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/candidates/auth", data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const updateCandidate = async (data: {
  id: string;
  experience?: string;
  skills?: string[];
  experienceTime?: string;
  salaryMin?: string;
  salaryMax?: string;
  phone?: string;
}) => {
  return await api.put("/candidates", data);
};
