import Link from "next/link";
import { LINKBRARY_LOGO } from "@/src/constants/image";
import { FormTitleProps } from "@/src/types/FormType";
import * as S from "@/src/components/common/Form/FormStyle";

const FormTitle = ({ path, message, title }: FormTitleProps) => {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <S.TitleBox>
        <S.TitleText>{title}</S.TitleText>
        <Link href={path ?? ""}>
          <S.TitleLink>{message}</S.TitleLink>
        </Link>
      </S.TitleBox>
    </S.Container>
  );
};

export default FormTitle;
