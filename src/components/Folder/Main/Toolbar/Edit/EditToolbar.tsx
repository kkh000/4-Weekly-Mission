import { useState } from "react";
import InputModal from "@/src/components/common/Modal/InputModal";
import ShareModal from "@/src/components/common/Modal/ShareModal";
import DeleteModal from "@/src/components/common/Modal/DeleteModal";
import { EDIT_SHARE, EDIT_CHANGE, EDIT_DELETE } from "@/src/constants/image";
import * as S from "@/src/components/Folder/Main/Toolbar/Edit/EditToolbarStyle";
import useToggledModal from "@/src/utils/hooks/useToggledModal";

interface Props {
  folderName: string;
  folderId: number | null;
}

const EditToolbar = ({ folderName, folderId }: Props) => {
  const {
    states: { isToggledShareModal, isToggledInputModal, isToggledDeleteModal },
    toggleModal,
  } = useToggledModal({
    isToggledShareModal: false,
    isToggledInputModal: false,
    isToggledDeleteModal: false,
  });

  return (
    <S.Container>
      <S.Box onClick={() => toggleModal("isToggledShareModal")}>
        <S.Image src={EDIT_SHARE} alt="share" />
        <S.Text>공유</S.Text>
        {isToggledShareModal && (
          <ShareModal
            title="공유 하기"
            isOpened={isToggledShareModal}
            folderName={folderName}
            folderId={folderId}
            onClose={() => toggleModal("isToggledShareModal")}
          />
        )}
      </S.Box>
      <S.Box onClick={() => toggleModal("isToggledInputModal")}>
        <S.Image src={EDIT_CHANGE} alt="change" />
        <S.Text>이름 변경</S.Text>
        {isToggledInputModal && (
          <InputModal
            title="폴더 이름 변경"
            isOpened={isToggledInputModal}
            placeholder={folderName}
            onClose={() => toggleModal("isToggledInputModal")}
          >
            변경하기
          </InputModal>
        )}
      </S.Box>
      <S.Box onClick={() => toggleModal("isToggledDeleteModal")}>
        <S.Image src={EDIT_DELETE} alt="delete" />
        <S.Text>삭제</S.Text>
        {isToggledDeleteModal && (
          <DeleteModal
            isOpened={isToggledDeleteModal}
            title="폴더 삭제"
            text={folderName}
            onClose={() => toggleModal("isToggledDeleteModal")}
          >
            삭제하기
          </DeleteModal>
        )}
      </S.Box>
    </S.Container>
  );
};

export default EditToolbar;
