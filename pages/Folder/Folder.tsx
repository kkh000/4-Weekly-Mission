import { useState, useEffect } from "react";
import FolderHeader from "./header/AddLink";
import FolderMain from "./main/FolderMain";
import { FOLDER_LIST_API_URL } from "@/src/constants/url";
import CreateAxiosInstance from "@/src/utils/axios";
import { FolderItemInfo } from "@/src/constants/types";

const Folder = () => {
  const [folderList, setFolderList] = useState<FolderItemInfo[]>([]);

  useEffect(() => {
    const folderData = async () => {
      const axios = CreateAxiosInstance();
      try {
        const response = await axios.get(FOLDER_LIST_API_URL);
        const responseData = response.data;
        const folderList = responseData.data;
        setFolderList(folderList);
      } catch (Error) {
        console.error("Error");
      }
    };
    folderData();
  }, []);

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} />
    </>
  );
};

export default Folder;
