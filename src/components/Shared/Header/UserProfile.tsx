import { useEffect, useState } from "react";
import CreateAxiosInstance from "@/src/utils/axios";
import { useAuth } from "@/src/contexts/AuthContext";
import { UserItem } from "@/src/types/UserType";
import * as S from "@/src/components/Shared/Header/UserProfileStyle";

const SharedHeader = () => {
  const { isLoggedIn } = useAuth();
  const [ownerInfo, setOwnerInfo] = useState<UserItem | null>(null);
  const axios = CreateAxiosInstance();

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        if (isLoggedIn) {
          const response = await axios.get(`/users/${isLoggedIn.id}`);
          setOwnerInfo(response.data.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOwnerInfo();
  }, [isLoggedIn, axios]);

  console.log(ownerInfo);

  return (
    <S.Container>
      <S.Image src={ownerInfo?.image_source} />
      <S.Owner>{ownerInfo?.name}</S.Owner>
      <S.Folder>폴더네임</S.Folder>
    </S.Container>
  );
};

export default SharedHeader;
