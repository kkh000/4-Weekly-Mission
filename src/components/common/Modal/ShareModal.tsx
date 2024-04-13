import { useEffect } from "react";
import Modal from "./BaseModal";
import Icon from "../Icon/Icon";
import { shareOnKakao } from "@/src/utils/shares";
import { CLOSE_BUTTON } from "@/src/constants/image";
import { SHARE_ICON_LIST } from "@/src/constants/list";
import { ShareModalProps } from "@/src/types/ModalType";
import * as S from "./ModalStyle";

const ShareModal = ({ title, folderName, onClose }: ShareModalProps) => {
  useEffect(() => {
    shareOnKakao();
  });
  return (
    <Modal title={title}>
      <S.Text>{folderName}</S.Text>
      <S.IconContainer>
        {SHARE_ICON_LIST.map((icon) => (
          <Icon key={icon.alt} id={icon.id} alt={icon.alt} image={icon.image} size="large" onClick={icon.onClick} />
        ))}
      </S.IconContainer>
      <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
    </Modal>
  );
};

export default ShareModal;