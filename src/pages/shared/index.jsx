import Footer from "../../components/footer/Footer";
import GNB from "../../components/gnb/GNB";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Shared = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("https://bootcamp-api.codeit.kr/api/sample/folder"),
      fetch("https://bootcamp-api.codeit.kr/api/sample/user"),
    ])
      .then(([folderRes, userRes]) =>
        Promise.all([folderRes.json(), userRes.json()])
      )
      .then(([folderData, userData]) => {
        setFolder(folderData.folder);
        setUser(userData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      {user && folder && (
        <>
          <GNB user={user} />
          <Header user={user} folderName={folder.name} />
          <Content folderLinks={folder.links} />
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Shared;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;