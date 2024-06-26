import { useState, useEffect } from "react";
import InputModal from "@/src/components/Modal/InputModal";
import { ADD_FOLDER_ICON, ACTION_BUTTON_ICON } from "@/src/constants/image";
import * as S from "@/src/styles/ActionButtonStyle";

const ActionButton = () => {
  const [isToggledModal, setIsToggeldModal] = useState(false);
  const [changeIcon, setChangeIcon] = useState(ADD_FOLDER_ICON);

  useEffect(() => {
    const handleChangeIcon = () => {
      const width = window.innerWidth;
      width <= 767 ? setChangeIcon(ACTION_BUTTON_ICON) : setChangeIcon(ADD_FOLDER_ICON);
    };
    handleChangeIcon();
    window.addEventListener("resize", handleChangeIcon);
    return () => {
      window.removeEventListener("resize", handleChangeIcon);
    };
  }, []);

  const handleModal = () => {
    setIsToggeldModal(!isToggledModal);
  };

  return (
    <S.Container onClick={handleModal}>
      <S.Title>폴더 추가</S.Title>
      <S.Image src={changeIcon} alt="add" />
      {isToggledModal && (
        <InputModal title="폴더 추가" placeholder="내용입력" onClose={handleModal}>
          추가하기
        </InputModal>
      )}
    </S.Container>
  );
};

export default ActionButton;
