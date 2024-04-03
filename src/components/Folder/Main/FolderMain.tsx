import { useState, useEffect } from "react";
import SearchInput from "./Input/FolderSearchInput";
import AddFolder from "./ActionButton/ActionButton";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import FolderCard from "./Card/FolderCard";
import { updatedDate, updatedDuration } from "@/src/utils/createdAt";
import { FOLDER_CARD_DATA_API_URL } from "@/src/constants/url";
import { FolderItemInfo, FolderCardInfo } from "@/src/types/types";
import CreateAxiosInstance from "@/src/utils/axios";
import * as S from "@/src/styles/FolderMainStyle";

interface Props {
  folderList: FolderItemInfo[];
}

const FolderMain = ({ folderList }: Props) => {
  const [folder, setFolder] = useState<FolderItemInfo>({ id: null, name: "전체" });
  const [cardData, setCardData] = useState<FolderCardInfo[]>([]);
  const [searchFilter, setSearchFilter] = useState<FolderCardInfo[]>(cardData);

  useEffect(() => {
    const folderCardData = async () => {
      const axios = CreateAxiosInstance();
      try {
        let url = folder.id === null ? FOLDER_CARD_DATA_API_URL : `${FOLDER_CARD_DATA_API_URL}?folderId=${folder.id}`;
        const response = await axios.get(url);
        const responseData = response.data;
        const folderCard = responseData.data.map((cardDataList: FolderCardInfo) => ({
          ...cardDataList,
          time: updatedDuration(cardDataList.created_at),
          date: updatedDate(cardDataList.created_at),
        }));
        setCardData(folderCard);
      } catch (error) {
        console.error("Error");
      }
    };
    folderCardData();
  }, [folder]);

  const handleFolderChange = (folder: FolderItemInfo) => {
    setFolder(folder);
  };

  return (
    <S.Container>
      <SearchInput cardList={cardData} setSearchFilter={setSearchFilter} />
      <S.Box>
        <SortToolbar folderList={folderList} onChange={handleFolderChange} />
        <AddFolder />
      </S.Box>
      <S.Box>
        <S.Title>{folder.name}</S.Title>
        {folder.name !== "전체" && <EditToolbar folderName={folder.name ?? ""} folderId={folder.id} />}
      </S.Box>
      {folder.link?.count === 0 ? (
        <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
      ) : (
        <S.Grid>
          <FolderCard cardList={searchFilter} folderList={folderList} />
        </S.Grid>
      )}
    </S.Container>
  );
};

export default FolderMain;
