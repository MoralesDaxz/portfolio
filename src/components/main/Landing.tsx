"use client";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMe from "../aboutMe/AboutMe";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import BackgroundEffect from "./BackgroundEffect";
import Contact from "../form/Contact";
import { useControlDisplay } from "@/context/ControlDisplay";

const Landing = () => {
  const { windowWidth, windowScroll } = useControlDisplay();
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
  useEffect(() => {
    return () => {
      windowWidth;
      windowScroll;
    };
  }, [windowWidth, windowScroll]);
  return (
    <>
      <section
        className="relative px-4 sm:px-10 flex flex-col items-center justify-center "
        ref={container}
      >
        <AboutMe />
        <Projects />
        {windowWidth > 640 ? <BackgroundEffect /> : null}
        <Skills />
        <Contact />
      </section>
    </>
  );
};

export default Landing;
