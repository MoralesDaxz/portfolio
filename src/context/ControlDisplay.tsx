'use client'
import { useState, createContext, Dispatch, SetStateAction, useEffect, FC, useContext } from "react";

type ControlProps = {
    controlWidth: string;
    setControlWidth: Dispatch<SetStateAction<string>>;
    closeModal: boolean;
    setCloseModal: Dispatch<SetStateAction<boolean>>;
    bgNavBar: boolean;
    setBgNavBar: Dispatch<SetStateAction<boolean>>;
    windowWidth: number;
    setWindowWidth: Dispatch<SetStateAction<number>>;
}

export const ControlDisplay = createContext<ControlProps>({
    controlWidth: 'MD',
    setControlWidth: () => { },
    closeModal: false,
    setCloseModal: () => { },
    bgNavBar: false,
    setBgNavBar: () => { },
    windowWidth: 641,
    setWindowWidth: () => { },
});
export const ControlDisplayProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [controlWidth, setControlWidth] = useState<string>('');
    const [closeModal, setCloseModal] = useState<boolean>(true);
    const [bgNavBar, setBgNavBar] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(641);

    

    return (
        <ControlDisplay.Provider value={{
            controlWidth, setControlWidth,
            closeModal, setCloseModal,
            bgNavBar, setBgNavBar,
            windowWidth, setWindowWidth
        }}>
            {children}
        </ControlDisplay.Provider>
    )
}

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useControlDisplay = () => useContext<ControlProps>(ControlDisplay);