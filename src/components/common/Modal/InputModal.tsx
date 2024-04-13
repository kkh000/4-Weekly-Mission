import Modal from "./BaseModal";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "@/src/constants/image";
import { InputModalProps } from "@/src/types/ModalType";
import * as S from "./ModalStyle";

const InputModal = ({ children, title, placeholder, onClose }: InputModalProps) => {
  return (
    <Modal title={title}>
      <S.Input placeholder={placeholder} />
      <AddModalButton>{children}</AddModalButton>
      <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
    </Modal>
  );
};

export default InputModal;
