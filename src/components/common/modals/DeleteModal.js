import React from "react";
import { styled } from "styled-components";
import { COLORS } from "constants/colors";
import closeIcon from "assets/icons/closeModal.png";
import { RedButton } from "components/common/RedButton";

export const DeleteModal = ({ $isModalVisible, setIsModalVisible }) => {
  const handleCloseBtn = () => {
    setIsModalVisible(null);
  };

  return (
    <Background $isVisible={$isModalVisible}>
      <Modal>
        <Close
          onClick={(e) => {
            e.preventDefault();
            handleCloseBtn();
          }}
        >
          <img src={closeIcon} alt={closeIcon} />
        </Close>
        <Title>
          <h3>폴더 삭제</h3>
          <p>폴더명</p>
        </Title>
        <RedButton
          text="삭제하기"
          width="280px"
          padding="16px 20px"
          fontSize="16px"
          radius="8px"
        ></RedButton>
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  display: ${({ $isVisible }) => ($isVisible === "삭제" ? "block" : "none")};
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.4
  transition: visibility 0.3s ease;
`;

const Modal = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 32px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background: ${COLORS.White};
  transition: visibility 0.3s ease;
`;

const Close = styled.button`
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  & > h3 {
    color: #373740;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }

  & > p {
    color: ${COLORS.Grey_400};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;