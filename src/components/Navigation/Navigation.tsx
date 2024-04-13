import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationButton } from "@/src/components/common/Button/ButtonStyle";
import Loading from "../common/Loading/Loading";
import useAsync from "@/src/utils/hooks/useAsync";
import { getUserData } from "@/src/utils/apis/userApi";
import { LINKBRARY_LOGO } from "@/src/constants/image";
import { UserItem } from "@/src/types/UserType";
import * as S from "@/src/components/Navigation/NavigationStyle";

const Navigation = () => {
  const [userData, setUserData] = useState<UserItem | null>(null);
  const router = useRouter();

  const { isLoading, isError } = useAsync(async () => {
    const data = await getUserData();
    setUserData(data);
  }, []);

  return (
    <S.Container $path={router.pathname}>
      <Link href="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      {isLoading ? (
        <Loading />
      ) : userData && !isError ? (
        <S.UserBox>
          <S.UserImage src={userData.image_source} alt="user-profile" />
          <S.UserName>{userData.name}</S.UserName>
        </S.UserBox>
      ) : (
        <Link href="/signin">
          <NavigationButton>로그인</NavigationButton>
        </Link>
      )}
    </S.Container>
  );
};

export default Navigation;
