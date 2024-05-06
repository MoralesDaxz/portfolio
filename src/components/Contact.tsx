"use client";
import React, { useState } from "react";
import Form from "./Form";
import FormSend from "./FormSend";

const Contact = () => {
  const [registered, setRegistered] = useState(false);
  return (
    <article className="box w-full" id="contacto">
      <section className="w-full flex flex-col items-center py-4 px-5">
        <h2 className="box w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[3rem] pb-[2rem]">
          Contactame
        </h2>
        <div className="box w-full flex flex-col items-center">
          <FormSend registered={registered} />
          <Form registered={registered} setRegistered={setRegistered} />
        </div>
      </section>
    </article>
  );
};

export default Contact;
