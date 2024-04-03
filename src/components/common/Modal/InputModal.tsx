import Modal from "./BaseModal";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "@/src/constants/image";
import { ModalProps } from "./BaseModal";
import * as S from "./ModalStyle";

interface InputModalProps extends ModalProps {
  placeholder: string;
}

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
