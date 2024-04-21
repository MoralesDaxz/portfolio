'use client'

import { useState, createContext, ReactElement, Dispatch, SetStateAction, useEffect, FC, useContext } from "react";
const windowDetail = typeof window !== 'undefined'?window.innerWidth *1:0;

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
    controlWidth: '',
    setControlWidth: () => {},
    closeModal: false,
    setCloseModal: () => {},
    bgNavBar: false,
    setBgNavBar: () => {},
    windowWidth: windowDetail,
    setWindowWidth: () => {},
});
export const ControlDisplayProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [controlWidth, setControlWidth] = useState<string>('');
    const [closeModal, setCloseModal] = useState<boolean>(true);
    const [bgNavBar, setBgNavBar] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(windowDetail);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    const handleScroll = () => {
        window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

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
export const useControlDisplay = ()=> useContext<ControlProps>(ControlDisplay);