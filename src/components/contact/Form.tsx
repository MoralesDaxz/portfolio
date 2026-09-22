"use client";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import ReCAPTCHAClass from "react-google-recaptcha";
import { useForm } from "@formspree/react";

// 1. Definir el tipo para la instancia del useRef
type ReCAPTCHAInstance = ReCAPTCHAClass;

// 2. Castear el componente a un FC permisivo con props 'any' para ignorar la incompatibilidad JSX de React 19
const ReCAPTCHA = ReCAPTCHAClass as unknown as React.FC<any>;

type Props = {
  setRegistered: Dispatch<SetStateAction<boolean>>;
  registered: boolean;
};

const Form: FC<Props> = ({ setRegistered, registered }) => {
  // Se usa el tipo de instancia para tener autocompletado y acceso a métodos como recaptchaRef.current?.reset()
  const siteKey = process.env.NEXT_PUBLIC_SITE_WEB;
  const recaptchaRef = useRef<ReCAPTCHAInstance>(null);
  const [captchaValue, setCaptchaValue] = useState("NO_DATA");
  const styleButtonOFF =
    "self-center cursor-pointer border-2 border-bondiBlue-800 w-fit py-2 px-5 rounded-md mt-3 font-medium opacity-30 transition-all duration-700";
  const styleButtonON =
    "self-center cursor-pointer border-2 border-bondiBlue-800 w-fit py-2 px-5 rounded-md mt-3 font-medium opacity-100 hover:border-bondiBlue-600 bg-bondiBlue-950 shadow-md hover:shadow-bondiBlue-800 transition-all duration-700";
  const [state, handleSubmit] = useForm("mleqdlee");

  return (
    <form
      className={`p-5 w-[80%] sm:w-[60%] md:w-[40%] flex flex-col rounded-md border-2 border-bondiBlue-900 text-bondiBlue-40 font-extralight text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] bg-[#020c0f9d] gradientForm ${
        registered ? "opacity-0 z-0" : "w-full opacity-100 z-10"
      }`}
      onSubmit={(e) => {
        handleSubmit(e);
        setRegistered(true);
      }}
      action="https://formspree.io/f/mleqdlee"
      method="post"
    >
      <label className="font-medium mb-1">Correo</label>
      <input
        placeholder="persona@correo.com"
        className="bg-transparent outline-none border-[1px] border-bondiBlue-800 rounded-md p-2 focus-within:border-bondiBlue-600 focus-within:bg-transparent hover:border-bondiBlue-600 transition-all duration-700"
        type="email"
        required
        name="Email"
      />
      <label className="mt-3 font-medium mb-1">Deja tu mensaje</label>
      <textarea
        placeholder="Queremos un proyecto para ..."
        className="bg-transparent outline-none h-20 sm:h-24 border-[1px] border-bondiBlue-800 rounded-md p-2 focus-within:border-bondiBlue-600 focus-within:bg-transparent hover:border-bondiBlue-600 transition-all duration-700"
        minLength={5}
        required
        name="Mensaje"
      />
      <div className="w-full h-auto mt-2 flex justify-center">
        {siteKey && (
          <ReCAPTCHA
            ref={recaptchaRef}
            size="compact"
            sitekey={siteKey}
            onChange={(val: any) => val && setCaptchaValue(val)}
            theme="dark"
          />
        )}
      </div>
      <input
        disabled={captchaValue === "NO_DATA"}
        type="submit"
        className={captchaValue === "NO_DATA" ? styleButtonOFF : styleButtonON}
        value="Enviar mensaje"
      />
    </form>
  );
};

export default Form;
