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
    controlWidth: 'SM',
    setControlWidth: () => { },
    closeModal: false,
    setCloseModal: () => { },
    bgNavBar: false,
    setBgNavBar: () => { },
    windowWidth: 0,
    setWindowWidth: () => { },
});
export const ControlDisplayProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [controlWidth, setControlWidth] = useState<string>('SM');
    const [closeModal, setCloseModal] = useState<boolean>(true);
    const [bgNavBar, setBgNavBar] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth * 1)

            const handleResize = () => {
                setWindowWidth(window.innerWidth * 1);
                setControlWidth(window.innerWidth > 640 ? 'MD' : 'SM')
            };

            const handleScroll = () => {
                window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false)
            }
            window.addEventListener('resize',()=> handleResize());
            window.addEventListener('scroll', ()=> handleScroll());

            return () => {
                window.removeEventListener('resize', ()=> handleResize());
                window.removeEventListener('scroll', ()=> handleScroll());
            };
        }
    }, []);
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