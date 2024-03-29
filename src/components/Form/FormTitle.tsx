import { LINKBRARY_LOGO } from "@/src/constants/image";
import Link from "next/link";
import * as S from "./FormStyle";

interface Props {
  path: string;
  linkMessage: string;
  title: string;
}

const FormTitle = ({ path, linkMessage, title }: Props) => {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <S.TitleBox>
        <S.TitleText>{title}</S.TitleText>
        <Link href={path}>
          <S.TitleLink>{linkMessage}</S.TitleLink>
        </Link>
      </S.TitleBox>
    </S.Container>
  );
};

export default FormTitle;
