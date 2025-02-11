"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import AboutMe from "../aboutMe/AboutMe";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import BackgroundEffect from "./BackgroundEffect";
import Contact from "../form/Contact";

const Landing = ({}) => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  let tl = gsap.timeline({ paused: true });
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 }
      );
    },
    { scope: container }
  );
  return (
    <>
      <BackgroundEffect />
      <section
        className="px-4 sm:px-10 flex flex-col items-center justify-center "
        ref={container}
      >
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </section>
    </>
  );
};

export default Landing;
