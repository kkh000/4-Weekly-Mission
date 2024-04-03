import { ReactNode } from "react";
import * as S from "./ButtonStyle";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  onkeyDown?: () => void;
  type?: "button" | "submit";
}

const Button = ({ type = "button", children, onClick, onkeyDown }: Props) => {
  return (
    <S.Button type={type} onClick={onClick} onKeyDown={onkeyDown}>
      {children}
    </S.Button>
  );
};

export default Button;
