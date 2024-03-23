import FolderInfo from "ui/FolderInfo/FolderInfo";
import SearchBar from "ui/SearchBar/SearchBar";
import { CardList } from "ui/CardList/CardList";
import Layout from "feature/Layout/Layout";
import { Card } from "ui/Card/Card";
import { useGetFolder } from "hooks/useGetFolder";
import "./SharedPage.css";
import { useState } from "react";

export const SharedPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="SharedPage">
        <FolderInfo
          profileImage={profileImage}
          ownerName={ownerName}
          folderName={folderName}
        />
        <div className="SharedPage-items">
          <SearchBar
            handleInputChange={handleInputChange}
            searchTerm={searchTerm}
          />
          <CardList>
            {links?.map((link) => <Card key={link?.id} {...link} />)}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
