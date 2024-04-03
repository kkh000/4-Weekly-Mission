import * as S from "@/src/components/common/Form/FormStyle";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FormLayout = ({ children }: Props) => {
  return <S.Form>{children}</S.Form>;
};

export default FormLayout;
