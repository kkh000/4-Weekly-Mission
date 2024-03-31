import * as S from "@/pages/(form)/_components/FormStyle";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormLayout = ({ children }: Props) => {
  return <S.Form>{children}</S.Form>;
};

export default FormLayout;
