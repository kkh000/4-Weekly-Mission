import axios from "axios";
import { AXIOS_BASE_URL } from "../constants/url";

const axiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
  });
};

export default axiosInstance;
