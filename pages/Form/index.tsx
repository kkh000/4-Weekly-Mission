import { ChildrenProps } from "@/src/types/commonTypes";
import * as S from "@/src/components/common/Form/FormStyle";

const FormLayout = ({ children }: ChildrenProps) => {
  return <S.Form>{children}</S.Form>;
};

export default FormLayout;
