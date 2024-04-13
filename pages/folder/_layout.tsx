import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAsync from "@/src/utils/hooks/useAsync";
import RootLayout from "../_layout";
import Loading from "@/src/components/common/Loading/Loading";
import { useFolderList } from "@/src/contexts/CardListContext";
import { getFolderList } from "@/src/utils/apis/folderApi";
import { ChildrenProps } from "@/src/types/commonTypes";

const FolderLayout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const SigninPage = "/signin";

  const { setFolderList } = useFolderList();

  const { isLoading } = useAsync(async () => {
    await getFolderList(setFolderList);
  }, [setFolderList]);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const hasToken = localStorage.getItem("token");
        hasToken ? setIsLoggedIn(true) : router.push(SigninPage);
      } catch (error) {
        router.push(SigninPage);
      }
    };

    checkUserToken();
  }, [router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <RootLayout>
      {isLoading && <Loading />}
      {children}
    </RootLayout>
  );
};

export default FolderLayout;
