'use client'
import React from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const siteKey = `${process.env.SITE_KEY}`
  const secretPass = `${process.env.SECRET_PASS}`

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* { defaultValues: { email: "", msg: "" } } */);
  function onCaptcha(value:any) {
    console.log("Captcha value:", value);
  }
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[3rem] pb-[2rem]">
        Contactame
      </h2>
      <p className="text-lg sm:text-xl font-light text-bondiBlue-40 w-full">
       Intentare darte una respuesta lo mas pronto que pueda!
      </p>
      <form
        className="w-[80%] sm:w-[70%] py-4 px-5 flex flex-col rounded-md border-2 border-bondiBlue-900 text-bondiBlue-40 font-extralight text-[.8rem] sm:text-[1rem] lg:text-[1.1rem]"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label className="font-medium">Correo</label>
        <input
        placeholder="persona@correo.com"
        className="bg-transparent outline-none border-[1px] border-bondiBlue-800 rounded-md p-1 "
          {...register("email", {
            required: "Campo requerido.",
          })}
          type="email"
        />
        <label className="mt-2 font-medium">Deja tu mensaje</label>
        <textarea
        placeholder="Queremos un proyecto para ..."
          className="bg-transparent outline-none h-14 border-[1px] border-bondiBlue-800 rounded-md p-1"
          {...register("msg", {
            required: "Campo requerido.",
          })}
        ></textarea>
          
 

     {siteKey && <ReCAPTCHA sitekey={siteKey} accessKey={siteKey} onChange={onCaptcha}/>} 
        <input type="submit" className="cursor-pointer border-2 border-bondiBlue-800 w-fit p-1 rounded-md mt-2 font-medium" value="Enviar"/>
      
      </form>
    </section>
  );
};

export default Contact;
