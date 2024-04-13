import CreateAxiosInstance from "@/src/utils/axios";

export const getUserData = async () => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.get("/users");
    return response.data.data[0];
  } catch (error) {
    console.error(error);
  }
};
