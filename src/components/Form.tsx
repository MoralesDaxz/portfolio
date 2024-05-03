"use client";

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  useState,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "@formspree/react";

type Props = {
  setRegistered: Dispatch<SetStateAction<boolean>>;
  registered:boolean
};

const Form: FC<Props> = ({ setRegistered,registered }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.NEXT_PUBLIC_SITE_WEB;
  const [captchaValue, setCaptchaValue] = useState("NO_DATA");
  const styleButtonOFF =
    "self-center cursor-pointer border-2 border-bondiBlue-800 w-fit py-1 px-5 rounded-md mt-2 font-medium opacity-30 transition-all duration-700";
  const styleButtonON =
    "self-center cursor-pointer border-2 border-bondiBlue-800 w-fit py-1 px-5 rounded-md mt-2 font-medium opacity-100 hover:border-bondiBlue-600 bg-bondiBlue-950 shadow-md hover:shadow-bondiBlue-800 transition-all duration-700";
  const [state, handleSubmit] = useForm("mleqdlee");
  
  return (
    <form
      className={`p-3 w-[80%] sm:w-[60%] md:w-[40%] flex flex-col rounded-md border-2 border-bondiBlue-900 text-bondiBlue-40 font-extralight text-[.8rem] sm:text-[1rem] lg:text-[1.1rem] bg-[#020c0f9d] gradientForm ${registered ?'opacity-0 z-0' :'w-full opacity-100 z-10'}` }
      onSubmit={() => {handleSubmit;setRegistered(true)} }
      action="https://formspree.io/f/mleqdlee"
      method="post"
    >
      <label className="font-medium">Correo</label>
      <input
        placeholder="persona@correo.com"
        className="bg-transparent outline-none border-[1px] border-bondiBlue-800 rounded-md p-1 focus-within:border-bondiBlue-600 focus-within:bg-transparent hover:border-bondiBlue-600 transition-all duration-700"
        type="email"
        required
        name="Email"
      />
      <label className="mt-2 font-medium">Deja tu mensaje</label>
      <textarea
        placeholder="Queremos un proyecto para ..."
        className="bg-transparent outline-none h-14 sm:h-24 border-[1px] border-bondiBlue-800 rounded-md p-1 focus-within:border-bondiBlue-600 focus-within:bg-transparent hover:border-bondiBlue-600 transition-all duration-700"
        minLength={5}
        required
        name="Mensaje"
      />
      <div className="w-full h-auto mt-2 flex justify-center">
        {siteKey && (
          <ReCAPTCHA
            ref={recaptchaRef}
            size={"compact"}
            sitekey={siteKey}
            onChange={(val) => val && setCaptchaValue(val)}
            theme="dark"
          />
        )}
      </div>
      <input
        disabled={captchaValue === "NO_DATA" ? true : false}
        type="submit"
        className={captchaValue === "NO_DATA" ? styleButtonOFF : styleButtonON}
        value="Enviar mensaje"
      />
    </form>
  );
};

export default Form;
