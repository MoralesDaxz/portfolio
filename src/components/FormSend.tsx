import React, { FC } from "react";
import { BsSendCheck } from "react-icons/bs";
type Props ={
  registered:boolean;
}
const FormSend:FC <Props> = ({registered}) => {
  return (
    <div className={`w-full absolute flex flex-col items-center ${registered ?'opacity-100 z-10 h-full' :'opacity-0 z-0'}`}>
      <p className="font-medium text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] text-bondiBlue-40">
        ¡Genial tengo tu mensaje!
      </p>
      <BsSendCheck className=" w-14 h-14 mt-1 opacity-85" color="#145165" />
    </div>
  );
};

export default FormSend;
