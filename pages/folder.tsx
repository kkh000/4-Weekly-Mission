import RootLayout from "./_layout";
import FolderHeader from "@/src/components/Folder/Header/AddLink";
import FolderMain from "@/src/components/Folder/Main/FolderMain";
import { FOLDER_LIST_API_URL } from "@/src/constants/url";
import CreateAxiosInstance from "@/src/utils/axios";
import { FolderItemInfo } from "@/src/types/types";

interface Props {
  folderList: FolderItemInfo[];
}

const FolderPage = ({ folderList }: Props) => {
  return (
    <RootLayout>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} />
    </RootLayout>
  );
};

export default FolderPage;

export const getServerSideProps = async () => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.get(FOLDER_LIST_API_URL);
    const folderList = response.data.data;
    return { props: { folderList } };
  } catch (error) {
    console.error(error);
    return { props: { folderList: [] } };
  }
};
