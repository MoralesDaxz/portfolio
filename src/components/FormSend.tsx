import React from "react";
import { BsSendCheck } from "react-icons/bs";
const FormSend = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-medium text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] text-bondiBlue-40">
        ¡Genial tengo tu mensaje!
      </p>
      <BsSendCheck className=" w-14 h-14 mt-1 opacity-85" color="#145165" />
    </div>
  );
};

export default FormSend;
