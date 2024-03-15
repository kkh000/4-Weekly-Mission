import { BASE_URL } from "./BASE_URL";

export const getCategory = async () => {
  const response = await fetch(`${BASE_URL}users/1/folders`);
  const result = await response.json();
  return result;
};