import Link from "next/link";
import { LINKBRARY_LOGO } from "@/src/constants/image";
import * as S from "@/src/styles/FormStyle";

interface Props {
  linkMessage: string;
  title: string;
}

const FormTitle = ({ linkMessage, title }: Props) => {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <S.TitleBox>
        <S.TitleText>{title}</S.TitleText>
        <Link href="/">
          <S.TitleLink>{linkMessage}</S.TitleLink>
        </Link>
      </S.TitleBox>
    </S.Container>
  );
};

export default FormTitle;
