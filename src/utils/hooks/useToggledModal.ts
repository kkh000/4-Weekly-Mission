import { useState } from "react";

const useToggledModal = (initialState: Record<string, boolean> = {}) => {
  const [states, setStates] = useState(initialState);

  const toggleModal = (modalName: string) => {
    setStates((prevStates) => ({
      ...prevStates,
      [modalName]: !prevStates[modalName],
    }));
  };

  return { states, toggleModal };
};

export default useToggledModal;
