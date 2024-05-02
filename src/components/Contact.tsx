"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Form from "./Form";
import FormSend from "./FormSend";

const Contact = () => {
  const [registered, setRegistered] = useState(false);
  return (
    <section className="w-full flex flex-col items-center py-4 px-5">
      <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[3rem] pb-[2rem]">
        Contactame
      </h2>
      <div className="w-full flex flex-col items-center">
        {registered ? <FormSend /> : <Form setRegistered={setRegistered} />}
      </div>
    </section>
  );
};

export default Contact;
