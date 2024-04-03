import { useState, useEffect } from "react";
import RootLayout from "./_layout";
import FolderHeader from "@/src/components/Folder/Header/AddLink";
import FolderMain from "@/src/components/Folder/Main/FolderMain";
import { FOLDER_LIST_API_URL } from "@/src/constants/url";
import CreateAxiosInstance from "@/src/utils/axios";
import { FolderItemInfo } from "@/src/types/types";

const FolderPage = () => {
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
        console.error("Error!");
      }
    };
    folderData();
  }, []);
  return (
    <RootLayout>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} />
    </RootLayout>
  );
};

export default FolderPage;
