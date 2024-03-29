import Modal from "./BaseModal";
import { DeleteModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "@/src/constants/image";
import { ModalProps } from "./BaseModal";
import * as S from "./ModalStyle";

interface DeleteModalProps extends ModalProps {
  text: string;
}

const DeleteModal = ({ children, title, text, onClose }: DeleteModalProps) => {
  return (
    <Modal title={title}>
      <S.Text>{text}</S.Text>
      <DeleteModalButton>{children}</DeleteModalButton>
      <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
    </Modal>
  );
};

export default DeleteModal;
