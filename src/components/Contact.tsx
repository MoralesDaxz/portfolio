import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* { defaultValues: { email: "", msg: "" } } */);
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[3rem] pb-[3rem]">
        Contactame
      </h2>
      <p className="text-lg sm:text-xl font-light text-bondiBlue-40 w-full">
        Aunque actualmente no estoy buscando nuevas oportunidades!
      </p>
      <form
        className="w-[80%] sm:w-[70%] py-2 px-5 flex flex-col rounded-md border-2 border-bondiBlue-900"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label className="mt-2">Correo</label>
        <input
        placeholder="persona@correo.com"
        className="bg-transparent outline-none border-[1px] border-bondiBlue-800 rounded-md p-1 "
          {...register("email", {
            required: "Campo requerido.",
          })}
          type="email"
        />
        <label className="mt-2">Deja tu mensaje</label>
        <textarea
        placeholder="Queremos un proyecto para ..."
          className="bg-transparent outline-none h-14 border-[1px] border-bondiBlue-800 rounded-md p-1"
          {...register("msg", {
            required: "Campo requerido.",
          })}
        ></textarea>
        <input type="submit" className="cursor-pointer border-2 border-bondiBlue-800 w-fit p-1 rounded-md mt-2" value="Enviar"/>
      </form>
    </section>
  );
};

export default Contact;
