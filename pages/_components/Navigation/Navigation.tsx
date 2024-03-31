import Link from "next/link";
import { useRouter } from "next/router";
import { LINKBRARY_LOGO } from "@/src/constants/image";
import { NavigationButton } from "@/src/components/Button/ButtonStyle";
import * as S from "@/src/styles/NavigationStyle";

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
