"use client";
import React, { useState } from "react";
import Form from "./Form";
import FormSent from "./ModalFormSent";

const Contact = () => {
  const [registered, setRegistered] = useState(false);
  return (
    <article className="box w-full" id="contact">
      <section className="w-full flex flex-col items-center pb-4 px-5">
        <h2 className="box w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[5.5rem] pb-[3rem]">
          Contactame
        </h2>
        <div className="box w-full flex flex-col items-center">
          <FormSent registered={registered} />
          <Form registered={registered} setRegistered={setRegistered} />
        </div>
      </section>
    </article>
  );
};

export default Contact;
