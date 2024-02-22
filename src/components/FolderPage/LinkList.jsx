import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getUserLinks } from '../../util/api';
import FolderList from '../SharedPage/FolderList';
import UpdateBtnList from './UpdateBtnList';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
`;

const NoLinks = styled.p`
  padding: 4.1rem 0 3.5rem;
  width: 100%;
  line-height: 2.4rem;
  font-size: 1.6rem;
  text-align: center;
`;

const LinkList = ({ folderId, selectedFolder }) => {
  const [links, setLinks] = useState([]);

  const fetchLinks = async id => {
    try {
      const { data } = await getUserLinks(id);
      setLinks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLinks(folderId);
  }, [folderId]);

  return (
    <>
      <Header>
        <Title>{selectedFolder}</Title>
        {selectedFolder !== '전체' && <UpdateBtnList />}
      </Header>
      {links.length ? <FolderList folderList={links} /> : <NoLinks>저장된 링크가 없습니다</NoLinks>}
    </>
  );
};
export default LinkList;
