import { forwardRef } from "react";
import DeleteModal from "@/src/components/common/Modal/DeleteModal";
import ListModal from "@/src/components/common/Modal/ListModal";
import useToggledModal from "@/src/utils/hooks/useToggledModal";
import { FolderItemInfo } from "@/src/types/types";
import * as S from "@/src/components/Folder/Main/Popover/SelectMenuStyle";
import { FolderListItem } from "@/src/types/FolderType";

interface Props {
  url: string;
  folderList: FolderItemInfo[];
  cardList: FolderListItem[];
}

const SelectMenu = forwardRef<HTMLDivElement, Props>(({ url, folderList, cardList }, ref) => {
  const {
    states: { isToggledDeleteModal, isToggledListModal },
    toggleModal,
  } = useToggledModal({
    isToggledDeleteModal: false,
    isToggledListModal: false,
  });

  SelectMenu.displayName = "SelectMenu";

  return (
    <S.Container ref={ref} onClick={(e) => e.preventDefault()}>
      <S.Delete onClick={() => toggleModal("isToggledDeleteModal")}>삭제하기</S.Delete>
      <S.Add onClick={() => toggleModal("isToggledListModal")}>폴더에 추가</S.Add>
      {isToggledDeleteModal && (
        <DeleteModal
          title="링크 삭제"
          text={url}
          isOpened={isToggledDeleteModal}
          onClose={() => toggleModal("isToggledDeleteModal")}
        >
          삭제하기
        </DeleteModal>
      )}
      {isToggledListModal && (
        <ListModal
          title="폴더에 추가"
          folderList={folderList}
          cardList={cardList}
          isOpened={isToggledListModal}
          onClose={() => toggleModal("isToggledListModal")}
        >
          추가하기
        </ListModal>
      )}
    </S.Container>
  );
});

export default SelectMenu;
