import { updatedDuration, updatedDate } from "../createdAt";
import { FolderListItem, FolderCardItem } from "@/src/types/FolderType";
import CreateAxiosInstance from "../axios";

export const getFolderList = async (setFolderList: React.Dispatch<React.SetStateAction<FolderListItem[]>>) => {
  const axios = CreateAxiosInstance();
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/folders");
      setFolderList(response.data.data.folder);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllFolderCardData = async (setCardData: React.Dispatch<React.SetStateAction<FolderCardItem[]>>) => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.get("/links");
    const addCardItem = response.data.data.folder.map((cardItem: FolderCardItem) => ({
      ...cardItem,
      time: updatedDuration(cardItem.created_at),
      date: updatedDate(cardItem.created_at),
    }));
    setCardData(addCardItem);
  } catch (error) {
    console.error("Error");
  }
};

export const getFolderCardData = async (
  folderId: number | null,
  setCardData: React.Dispatch<React.SetStateAction<FolderCardItem[]>>
) => {
  const axios = CreateAxiosInstance();

  try {
    if (folderId) {
      const response = await axios.get(`/links?folderId=${folderId}`);
      const responseData = response.data;
      const folderCard = responseData.data.folder.map((cardDataList: FolderCardItem) => ({
        ...cardDataList,
        time: updatedDuration(cardDataList.created_at),
        date: updatedDate(cardDataList.created_at),
      }));
      setCardData(folderCard);
    }
  } catch (error) {
    console.error("Error");
  }
};
