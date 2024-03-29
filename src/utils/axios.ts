import axios from "axios";
import { AXIOS_BASE_URL } from "../constants/url";

const createAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: { "Content-Type": "application/json" },
  });
};

export default createAxiosInstance;
