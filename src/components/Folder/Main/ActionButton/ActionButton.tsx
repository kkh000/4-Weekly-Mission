import { useState, useEffect } from "react";
import InputModal from "@/src/components/common/Modal/InputModal";
import useToggledModal from "@/src/utils/hooks/useToggledModal";
import { ADD_FOLDER_ICON, ACTION_BUTTON_ICON } from "@/src/constants/image";
import * as S from "@/src/components/Folder/Main/ActionButton/ActionButtonStyle";

const ActionButton = () => {
  const {
    states: { isToggled },
    toggleModal,
  } = useToggledModal({
    isToggled: false,
  });
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

  return (
    <S.Container onClick={() => toggleModal("isToggled")}>
      <S.Title>폴더 추가</S.Title>
      <S.Image src={changeIcon} alt="add" />
      {isToggled && (
        <InputModal
          isOpened={isToggled}
          title="폴더 추가"
          placeholder="내용입력"
          onClose={() => toggleModal("isToggled")}
        >
          추가하기
        </InputModal>
      )}
    </S.Container>
  );
};

export default ActionButton;
