import Modal from "./BaseModal";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON, CHECK } from "@/src/constants/image";
import { ListModalProps } from "@/src/types/ModalType";
import * as S from "./ModalStyle";

const ListModal = ({ children, title, folderList, cardList, onClose }: ListModalProps) => {
  console.log(cardList);
  return (
    <Modal title={title}>
      <S.Text>링크주소</S.Text>
      <S.List>
        {folderList &&
          folderList.map((folder) => (
            <S.ListBox key={folder.id}>
              <S.ListText>
                <S.FolderName>{folder.name}</S.FolderName>
                <S.FolderCount>{`${cardList.length}개 링크`}</S.FolderCount>
              </S.ListText>
              <S.CheckImage src={CHECK} alt="check" />
            </S.ListBox>
          ))}
      </S.List>
      <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      <AddModalButton>{children}</AddModalButton>
    </Modal>
  );
};

export default ListModal;
