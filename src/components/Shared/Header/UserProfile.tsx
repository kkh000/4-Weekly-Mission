import { UserInfo } from "@/src/types/types";
import * as S from "@/src/components/Shared/Header/UserProfileStyle";

interface Props {
  userProfile: UserInfo | null;
}

const SharedHeader = ({ userProfile }: Props) => {
  return (
    <S.Container>
      <S.Image src={userProfile?.owner?.profileImageSource} />
      <S.Owner>{userProfile?.owner?.name}</S.Owner>
      <S.Folder>{userProfile?.name}</S.Folder>
    </S.Container>
  );
};

export default SharedHeader;
