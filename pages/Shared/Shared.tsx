import useFetch from "@/src/utils/hooks/useFetch";
import SharedHeader from "./header/UserProfile";
import SharedMain from "./main/SharedMain";
import { SHARED_API_URL } from "@/src/constants/url";
import { UserProps, UserInfo, SharedCardProps } from "@/src/constants/types";
import { updatedDate, updatedDuration } from "@/src/utils/createdAt";

const Shared = () => {
  const { data: sharedPageData, error: dataError, loading: dataLoading } = useFetch<UserProps>(SHARED_API_URL);

  if (dataLoading) return <div>Loading...</div>;
  if (dataError || !sharedPageData) return <div>Error</div>;

  const userProfileData: UserInfo = sharedPageData.folder;
  const sharedCardData: SharedCardProps[] = userProfileData.links.map((cardDataList: SharedCardProps) => ({
    ...cardDataList,
    time: updatedDuration(cardDataList.createdAt),
    date: updatedDate(cardDataList.createdAt),
  }));

  return (
    <>
      <SharedHeader userProfile={userProfileData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default Shared;
