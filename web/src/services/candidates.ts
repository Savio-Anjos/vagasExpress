import api from "./api";

export const createCandidate = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await api.post("/candidates", data);
};

export const authenticateCandidate = async (data: {
  email: string;
  password: string;
}) => {
  return await api.post("/candidates/auth", data);
};

export const updateCandidate = async (data: {
  name?: string;
  phone?: string;
  experience?: string;
  skills?: string[];
  salaryExpectation?: number;
}) => {
  return await api.put("/candidates", data);
};
