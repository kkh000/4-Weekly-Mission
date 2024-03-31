import { useEffect } from "react";
import ReactDom from "react-dom";
import { ReactNode } from "react";
import { allowScroll, preventScroll } from "@/src/utils/scroll";
import * as S from "./ModalStyle";

export interface ModalProps {
  children: ReactNode;
  title: string;
  onClose?: () => void;
}

const Modal = ({ children, title, onClose }: ModalProps) => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

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
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
