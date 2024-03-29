import { useState, useEffect } from "react";
import SearchInput from "./Input/FolderSearchInput";
import AddFolder from "./ActionButton/ActionButton";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import FolderCard from "./Card/FolderCard";
import { updatedDate, updatedDuration } from "@/src/utils/createdAt";
import { FOLDER_CARD_DATA_API_URL } from "@/src/constants/url";
import { FolderItemInfo, FolderCardInfo } from "@/src/constants/types";
import * as S from "./FolderMainStyle";

interface Props {
  folderList: FolderItemInfo[];
}

const FolderMain = ({ folderList }: Props) => {
  const [folder, setFolder] = useState<FolderItemInfo>({ id: null, name: "전체" });
  const [cardData, setCardData] = useState<FolderCardInfo[]>([]);
  const [searchFilter, setSearchFilter] = useState<FolderCardInfo[]>(cardData);

  const handleFolderChange = (folder: FolderItemInfo) => {
    setFolder(folder);
  };

  useEffect(() => {
    const folderCardData = async () => {
      try {
        let url = folder.id === null ? FOLDER_CARD_DATA_API_URL : `${FOLDER_CARD_DATA_API_URL}?folderId=${folder.id}`;
        const response = await fetch(url);
        const responseData = await response.json();
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

  return (
    <S.Container>
      <SearchInput cardData={cardData} setSearchFilter={setSearchFilter} />
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
          <FolderCard cardData={searchFilter} folderList={folderList} />
        </S.Grid>
      )}
    </S.Container>
  );
};

export default FolderMain;
