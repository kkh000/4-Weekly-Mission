import axios from "axios";
import { AXIOS_BASE_URL } from "../constants/url";

const CreateAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "token",
    },
  });
};

export default CreateAxiosInstance;
