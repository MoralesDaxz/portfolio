"use client";

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";

type Props = {
  setRegistered: Dispatch<SetStateAction<boolean>>;
};

const Form: FC<Props> = ({ setRegistered }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.NEXT_PUBLIC_SITE_WEB;
  const [capVal, setCapVal] = useState("NO_DATA");
  const styleButton =
    "cursor-pointer border-2 border-bondiBlue-800 w-fit p-1 rounded-md mt-2 font-medium";
  const [state, handleSubmit] = useForm("mleqdlee");
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <form
      className="p-3 w-[80%] sm:w-[60%] md:w-[40%] flex flex-col rounded-md border-2 border-bondiBlue-900 text-bondiBlue-40 font-extralight text-[.8rem] sm:text-[1rem] lg:text-[1.1rem]"
      onSubmit={()=>handleSubmit}
      action="https://formspree.io/f/mleqdlee"
      method="post"
    >
      <label className="font-medium">Correo</label>
      <input
        placeholder="persona@correo.com"
        className="bg-transparent outline-none border-[1px] border-bondiBlue-800 rounded-md p-1 focus-within:border-bondiBlue-600 focus-within:bg-transparent"
        type="email"
        required
        id="EmailID"
        name="EmailName"
      />
      <label className="mt-2 font-medium">Deja tu mensaje</label>
      <textarea
        placeholder="Queremos un proyecto para ..."
        className="bg-transparent outline-none h-14 sm:h-24 border-[1px] border-bondiBlue-800 rounded-md p-1 focus-within:border-bondiBlue-600 focus-within:bg-transparent"
        minLength={5}
        required
        id="MensajeID"
        name="MensajeName"
      />
      <div className="w-full mt-2 flex justify-center">
        {siteKey && (
          <ReCAPTCHA
            ref={recaptchaRef}
            size={"compact"}
            sitekey={siteKey}
            onChange={(val) => val && setCapVal(val)}
            theme="dark"
          />
        )}
      </div>
      <input
        disabled={capVal === "NO_DATA" ? true : false}
        type="submit"
        className={
          capVal === "NO_DATA"
            ? styleButton + " opacity-30"
            : styleButton + " opacity-100 hover:border-bondiBlue-600"
        }
        value="Enviar"
      />
    </form>
  );
};

export default Form;
