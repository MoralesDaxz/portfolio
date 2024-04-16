import { useState, createContext, useContext, FC, Dispatch, SetStateAction } from "react";


type Children = {
    children: React.ReactNode
}
type StateWidth = {
    controlWidth: string ,
    setControlWidth: Dispatch<SetStateAction<string>>,
}
const initial = {
    controlWidth: '',
    setControlWidth: () => ''
  };
export const ControlDisplay = createContext<StateWidth>(initial); 
export const Control = ({ children }: Children) => {
  const [ controlWidth, setControlWidth ] = useState('');

  return (
    <ControlDisplay.Provider value={{ controlWidth, setControlWidth }}>
      {children}
    </ControlDisplay.Provider>
  );
};
// Optional: Create a custom hook to simplify context usage
/* export const useControlDisplay = () => {
    const context = useContext(ControlDisplay);
    if (!context) {
        throw new Error("useRegisterInformation must be used within a RegisterInformationProvider");
    }
    return context;
}; */