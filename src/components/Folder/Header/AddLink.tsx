import ListModal from "@/src/components/common/Modal/ListModal";
import { AddLinkButton } from "@/src/components/common/Button/ButtonStyle";
import useToggledModal from "@/src/utils/hooks/useToggledModal";
import { useFolderList } from "@/src/contexts/CardListContext";
import { LINK_ICON } from "@/src/constants/image";
import * as S from "@/src/components/Folder/Header/AddLinkStyle";
import { FolderListItem } from "@/src/types/FolderType";

interface Props {
  cardList: FolderListItem[];
}

const AddLink = ({ cardList }: Props) => {
  const {
    states: { isToggled },
    toggleModal,
  } = useToggledModal({
    isToggled: false,
  });
  const { folderList } = useFolderList();

  return (
    <S.Container>
      <S.Box>
        <S.BoxInput>
          <S.Image src={LINK_ICON} alt="add" />
          <S.Input placeholder="링크를 추가해 보세요" />
        </S.BoxInput>
        <AddLinkButton onClick={() => toggleModal("isToggled")}>추가하기</AddLinkButton>
        {isToggled && (
          <ListModal
            title="폴더에 추가"
            isOpened={isToggled}
            folderList={folderList}
            cardList={cardList}
            onClose={() => toggleModal("isToggled")}
          >
            폴더에 추가하기
          </ListModal>
        )}
      </S.Box>
    </S.Container>
  );
};

export default AddLink;
