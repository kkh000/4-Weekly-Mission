import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import { allowScroll, preventScroll } from "@/src/utils/scroll";
import { ModalProps } from "@/src/types/ModalType";
import * as S from "./ModalStyle";

const Modal = ({ children, title, onClose, isOpened }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal"));
  }, []);

  useEffect(() => {
    if (!modalRoot) return;
    if (isOpened) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [modalRoot, isOpened]);

  if (typeof window === "undefined" || !modalRoot) return null;

  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </S.Background>,
    modalRoot
  );
};

export default Modal;
