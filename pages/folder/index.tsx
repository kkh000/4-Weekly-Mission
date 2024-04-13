import { useState, useEffect } from "react";
import SearchInput from "@/src/components/Folder/Main/Input/FolderSearchInput";
import AddFolder from "@/src/components/Folder/Main/ActionButton/ActionButton";
import SortToolbar from "@/src/components/Folder/Main/Toolbar/Sort/SortToolbar";
import FolderCard from "@/src/components/Folder/Main/Card/FolderCard";
import { FolderCardItem, FolderListItem } from "@/src/types/FolderType";
import { getAllFolderCardData } from "@/src/utils/apis/folderApi";
import { useRouter } from "next/router";
import FolderLayout from "./_layout";
import AddLink from "@/src/components/Folder/Header/AddLink";
import { useFolderList } from "@/src/contexts/CardListContext";
import * as S from "@/src/components/Folder/Main/FolderMainStyle";
import useAsync from "@/src/utils/hooks/useAsync";
import Loading from "@/src/components/common/Loading/Loading";

const FolderPage = () => {
  const router = useRouter();
  const { folderList } = useFolderList();
  const [folder, setFolder] = useState<FolderListItem>({
    id: null,
    name: "전체",
  });
  const [cardData, setCardData] = useState<FolderCardItem[]>([]);
  const [searchFilter, setSearchFilter] = useState<FolderCardItem[]>([]);
  const { data: getAllCardItem, isLoading } = useAsync(() => getAllFolderCardData(setCardData), [folder]);

  useEffect(() => {
    if (getAllCardItem) {
      setCardData(getAllCardItem);
    }
  }, [getAllCardItem]);

  useEffect(() => {
    const folderId = router.query.folderId;
    const queryData = Number(folderId);
    const selectedFolder = folderList.find((folder) => folder.id === queryData);
    setFolder(selectedFolder || { id: null, name: "전체" });
  }, [router, folderList]);

  const handleFolderChange = (folder: FolderListItem) => {
    const folderId = folder.id === null ? "" : folder.id;
    router.push(`/folder/${folderId}`);
  };

  return (
    <FolderLayout>
      <AddLink cardList={cardData} />
      <S.Container>
        <SearchInput cardList={cardData} setSearchFilter={setSearchFilter} />
        <S.Box>
          <SortToolbar folderList={folderList} onChange={handleFolderChange} />
          <AddFolder />
        </S.Box>
        <S.Box>
          <S.Title>{folder.name}</S.Title>
        </S.Box>
        {isLoading ? (
          <Loading />
        ) : cardData.length === 0 ? (
          <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
        ) : (
          <S.Grid>
            <FolderCard cardList={searchFilter} folderList={folderList} />
          </S.Grid>
        )}
      </S.Container>
    </FolderLayout>
  );
};

export default FolderPage;
