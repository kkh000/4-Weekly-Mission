import axios from "axios";
import { AXIOS_BASE_URL } from "../constants/url";

const CreateAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
  });
};

export default CreateAxiosInstance;
