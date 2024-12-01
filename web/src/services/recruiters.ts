import api from "./api";

export const createRecruiter = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await api.post("/recruiters", data);
};

export const authenticateRecruiter = async (data: {
  email: string;
  password: string;
}) => {
  return await api.post("/recruiters/auth", data);
};

export const updateRecruiter = async (data: {
  phone?: string;
  jobTitle?: string;
  company?: string;
}) => {
  return await api.put("/recruiters", data);
};
