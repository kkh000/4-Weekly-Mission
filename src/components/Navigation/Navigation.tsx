import { useRouter } from "next/router";
import Link from "next/link";
import { LINKBRARY_LOGO } from "@/src/constants/image";
import { NavigationButton } from "../common/Button/ButtonStyle";
import * as S from "./NavigationStyle";

const Navigation = () => {
  const router = useRouter();

  return (
    <S.Container $path={router.pathname}>
      <Link href="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <Link href="/signin">
        <NavigationButton>로그인</NavigationButton>
      </Link>
    </S.Container>
  );
};

export default Navigation;
