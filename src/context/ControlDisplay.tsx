"use client";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  FC,
  useContext,
  ReactNode,
} from "react";

type ControlProps = {
  closeModal: boolean;
  setCloseModal: Dispatch<SetStateAction<boolean>>;
};

export const ControlDisplay = createContext<ControlProps>({
  closeModal: false,
  setCloseModal: () => {},
});
export const ControlDisplayProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [closeModal, setCloseModal] = useState<boolean>(true);

  return (
    <ControlDisplay.Provider
      value={{
        closeModal,
        setCloseModal,
      }}
    >
      {children}
    </ControlDisplay.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useControlDisplay = () => useContext<ControlProps>(ControlDisplay);
