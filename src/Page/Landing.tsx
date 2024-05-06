"use client";
import React, { FC } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import ToTop from "@/components/ToTop";
type Props = {
  container: React.MutableRefObject<null>;
};
const Landing: FC<Props> = ({ container }) => {
  return (
    <section
      className="z-10 w-full px-4 sm:px-10 flex flex-col items-center justify-center "
      ref={container}
    >
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
     {/*  <ToTop></ToTop> */}
    </section>
  );
};

export default Landing;
