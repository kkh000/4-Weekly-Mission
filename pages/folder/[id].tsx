import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAsync from "@/src/utils/hooks/useAsync";
import FolderLayout from "./_layout";
import AddLink from "@/src/components/Folder/Header/AddLink";
import SearchInput from "@/src/components/Folder/Main/Input/FolderSearchInput";
import AddFolder from "@/src/components/Folder/Main/ActionButton/ActionButton";
import EditToolbar from "@/src/components/Folder/Main/Toolbar/Edit/EditToolbar";
import SortToolbar from "@/src/components/Folder/Main/Toolbar/Sort/SortToolbar";
import FolderCard from "@/src/components/Folder/Main/Card/FolderCard";
import { getFolderCardData } from "@/src/utils/apis/folderApi";
import { useFolderList } from "@/src/contexts/CardListContext";
import { FolderCardItem, FolderListItem } from "@/src/types/FolderType";
import Loading from "@/src/components/common/Loading/Loading";
import * as S from "@/src/components/Folder/Main/FolderMainStyle";

const FolderId = () => {
  const [folder, setFolder] = useState<FolderListItem>({ id: null, name: "전체" });
  const [cardData, setCardData] = useState<FolderCardItem[]>([]);
  const [searchFilter, setSearchFilter] = useState<FolderCardItem[]>(cardData);

  const router = useRouter();
  const { folderList } = useFolderList();

  const { isLoading } = useAsync(() => getFolderCardData(folder.id, setCardData), [folder.id]);

  useEffect(() => {
    const folderId = router.query.folderId;
    const queryData = Number(folderId);
    const selectedFolder = folderList.find((folder) => folder.id === queryData);
    setFolder(selectedFolder || folder);
  }, [router, folder, folderList]);

  useEffect(() => {
    getFolderCardData(folder.id, setCardData);
  }, [folder.id]);

  const handleFolderChange = (folder: FolderListItem) => {
    const folderId = folder.id === null ? "" : folder.id;
    setFolder(folder);
    router.push(`/folder/${folderId}`);
  };

  return (
    <FolderLayout>
      <AddLink cardList={cardData} />
      {isLoading ? (
        <Loading />
      ) : (
        <S.Container>
          <SearchInput cardList={cardData} setSearchFilter={setSearchFilter} />
          <S.Box>
            <SortToolbar folderList={folderList} onChange={handleFolderChange} />
            <AddFolder />
          </S.Box>
          <S.Box>
            <S.Title>{folder.name}</S.Title>
            <EditToolbar folderName={folder.name ?? ""} folderId={folder.id} />
          </S.Box>
          {cardData.length === 0 ? (
            <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
          ) : (
            <S.Grid>
              <FolderCard cardList={searchFilter} folderList={folderList} />
            </S.Grid>
          )}
        </S.Container>
      )}
    </FolderLayout>
  );
};

export default FolderId;
