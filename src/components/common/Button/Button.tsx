import { ButtonProps } from "@/src/types/commonTypes";
import * as S from "./ButtonStyle";

const Button = ({ type = "button", children, onClick, onKeyDown }: ButtonProps) => {
  return (
    <S.Button type={type} onClick={onClick} onKeyDown={onKeyDown}>
      {children}
    </S.Button>
  );
};

export default Button;
