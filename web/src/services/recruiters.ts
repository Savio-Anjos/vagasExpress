import api from "./api";

export const createRecruiter = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/recruiters", data);
  return response.data;
};

export const authenticateRecruiter = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/recruiters/auth", data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const updateRecruiter = async (data: {
  phone?: string;
  jobTitle?: string;
  company?: string;
}) => {
  const response = await api.put("/recruiters", data);
  return response.data;
};
