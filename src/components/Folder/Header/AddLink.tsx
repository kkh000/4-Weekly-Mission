import { useState } from "react";
import { AddLinkButton } from "@/src/components/common/Button/ButtonStyle";
import ListModal from "@/src/components/common/Modal/ListModal";
import { FolderItemInfo } from "@/src/types/types";
import { LINK_ICON } from "@/src/constants/image";
import * as S from "@/src/components/Folder/Header/AddLinkStyle";

interface Props {
  folderList: FolderItemInfo[];
}

const FolderHeader = ({ folderList }: Props) => {
  const [isToggledModal, setIsToggledModal] = useState(false);

  const handleModal = () => {
    setIsToggledModal(!isToggledModal);
  };

  return (
    <S.Container>
      <S.Box>
        <S.BoxInput>
          <S.Image src={LINK_ICON} alt="add" />
          <S.Input placeholder="링크를 추가해 보세요" />
        </S.BoxInput>
        <AddLinkButton onClick={handleModal}>추가하기</AddLinkButton>
        {isToggledModal && (
          <ListModal title="폴더에 추가" folderList={folderList} onClose={handleModal}>
            폴더에 추가하기
          </ListModal>
        )}
      </S.Box>
    </S.Container>
  );
};

export default FolderHeader;
