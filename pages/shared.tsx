import RootLayout from "./_layout";
import SharedHeader from "@/src/components/Shared/Header/UserProfile";
import SharedMain from "@/src/components/Shared/Main/SharedMain";
import { SHARED_API_URL } from "@/src/constants/url";
import { SharedCardProps } from "@/src/types/types";
import { updatedDate, updatedDuration } from "@/src/utils/createdAt";
import CreateAxiosInstance from "@/src/utils/axios";

interface Props {
  sharedCardData: SharedCardProps[];
}

const SharedPage = ({ sharedCardData }: Props) => {
  return (
    <RootLayout>
      <SharedHeader userProfile={null} />
      <SharedMain cardData={sharedCardData} />
    </RootLayout>
  );
};

export default SharedPage;

export const getServerSideProps = async () => {
  const axios = CreateAxiosInstance();
  try {
    const response = await axios.get(SHARED_API_URL);
    const userProfileData = response.data.folder;
    const sharedCardData = response.data.folder.links.map((link: SharedCardProps) => ({
      ...link,
      time: updatedDuration(link.createdAt),
      date: updatedDate(link.createdAt),
    }));
    return { props: { userProfileData, sharedCardData } };
  } catch (error) {
    console.error(error);
  }
};
