import { useState, useEffect } from "react";
import SharedHeader from "./header/UserProfile";
import SharedMain from "./main/SharedMain";
import { SHARED_API_URL } from "@/src/constants/url";
import { UserInfo, SharedCardProps } from "@/src/constants/types";
import { updatedDate, updatedDuration } from "@/src/utils/createdAt";
import CreateAxiosInstance from "@/src/utils/axios";

const Shared = () => {
  const [sharedCardData, setSharedCardData] = useState([]);
  const [userProfileData, setUserProfileData] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const axios = CreateAxiosInstance();
      try {
        const response = await axios.get(SHARED_API_URL);
        const responseData = response.data;
        const userProfileData = responseData.folder;
        const sharedCardData = responseData.folder.links.map((link: SharedCardProps) => ({
          ...link,
          time: updatedDuration(link.createdAt),
          date: updatedDate(link.createdAt),
        }));

        setUserProfileData(userProfileData);
        setSharedCardData(sharedCardData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SharedHeader userProfile={userProfileData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default Shared;
