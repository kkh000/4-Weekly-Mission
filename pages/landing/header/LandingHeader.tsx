import Link from "next/link";
import { MainHeaderButton } from "@/src/components/common/Button/ButtonStyle";
import { LANDING_HEADER } from "@/src/constants/image";
import * as S from "./LandingHeaderStyle";

const LandingHeader = () => {
  return (
    <S.Container>
      <S.Title>
        <S.Gradient>세상의 모든 정보</S.Gradient>를 <S.Br /> 쉽게 저장하고
        <S.TabletBr />
        관리해 보세요
      </S.Title>
      <Link href="/signup">
        <MainHeaderButton>링크 추가하기</MainHeaderButton>
      </Link>
      <S.Image src={LANDING_HEADER} alt="header" />
    </S.Container>
  );
};

export default LandingHeader;
