import axios from "axios";
import { AXIOS_BASE_URL } from "../constants/url";

const CreateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default CreateAxiosInstance;
