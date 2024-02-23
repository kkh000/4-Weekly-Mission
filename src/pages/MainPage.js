/*eslint-disable */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../components/mainPageComponents/MainFooter';
import { useAPIData } from '../hooks/useAPIData';
import { userDataAPI } from '../api/BootcampAPI';
import {
  CloseButton,
  ModalBackground,
  ModalContent,
  Wrapper,
} from '../styles/styledComponents/folderStyled';
import ModalCloseButton from '../assets/Images/ModalCloseButton.png';
import { Modal } from '../components/folderPageComponents/modal/Modal';

export default function MainPage() {
  const { data: userProfile } = useAPIData(userDataAPI);
  const [modalStatus, setModalStatus] = useState(true);
  const [modalData, setModalData] = useState({
    ModalContent: 'AddFolderModal',
    folderName: [
      '전체',
      '즐겨찾기',
      '신규폴더',
      '새로운폴더스',
      'test',
      'test2',
      'test3',
    ],
    linkCounts: [3, 0, 0, 0, 0, 0, 0],
    currentLinkCount: 3,
    currentFolderName: '전체',
    currentCardLink: 'https://www.google.com',
  });
  const handleModalStatus = () => {
    setModalStatus((prev) => !prev);
  };
  const handleModalContent = (key, value) => {
    setModalData({ ...modalData, [key]: value });
  };
  return (
    <Wrapper>
      <Outlet
        context={{
          userProfile: userProfile,
          handleModalStatus: handleModalStatus,
          handleModalContent: handleModalContent,
        }}
      ></Outlet>
      <MainFooter></MainFooter>
      <ModalBackground>
        <ModalContent>
          <CloseButton src={ModalCloseButton}></CloseButton>
          <Modal modalData={modalData}></Modal>
        </ModalContent>
      </ModalBackground>
    </Wrapper>
  );
}
