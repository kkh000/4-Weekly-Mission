import useFetch from "@/src/utils/hooks/useFetch";
import FolderHeader from "./header/AddLink";
import FolderMain from "./main/FolderMain";
import { FOLDER_LIST_API_URL } from "@/src/constants/url";
import { FolderItemProps } from "@/src/constants/types";

const Folder = () => {
  const {
    data: folderListData,
    error: dataError,
    loading: dataLoading,
  } = useFetch<FolderItemProps>(FOLDER_LIST_API_URL);

  if (dataLoading) return <div>Loading...</div>;
  if (dataError || !folderListData) return <div>Error</div>;

  const folderList = folderListData.data;

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} />
    </>
  );
};

export default Folder;
