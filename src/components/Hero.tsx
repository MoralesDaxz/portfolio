"use client";
import React, { useRef, useState } from "react";
import { TypeLetters } from "./TypeLetters";
import Projects from "./Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutMe } from "@/utils/concepts";
import PictureHero from "./PictureHero";
import { useControlDisplay } from "@/context/ControlDisplay";
import Skills from "./Skills";
import Contact from "./Contact";

const Hero = () => {

  const { windowWidth } = useControlDisplay();

  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  let tl = gsap.timeline({ paused: true });
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.4 }
      );
    },
    { scope: container }
  ); // <-- magic;

  return (
    <>
      <section
        className="z-10 w-full px-4 sm:px-10 min-h-screen flex flex-col items-center justify-center "
        ref={container}
      >
        <article className="box w-full h-full flex flex-col items-center mt-[5rem] gap-[8%] sm:flex sm:flex-row sm:mt-[8rem]">
          <section className="box w-full h-full sm:w-[50%] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <h1 className="w-full text-center font-bold text-4xl sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3.2rem] text-bondiBlue-400">
              Desarrollador Web
            </h1>
            <PictureHero />
            <h2 className="text-center font-bold text-3xl sm:text-[2rem] lg:text-[2.5rem] text-bondiBlue-40">
              ¡Hola! soy Alfredo Morales
            </h2>
            <div className="font-bold text-2xl sm:text-[1.5rem] lg:text-[2rem] text-bondiBlue-40 h-[90px]">
              <TypeLetters />
            </div>
          </section>
          <section className="box hover:backdrop-blur-md z-10  w-full sm:w-[40%] flex flex-col justify-start gap-4 text-lg sm:text-xl font-light overflow-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-full">
            {aboutMe.map((item, index) => {
              return (
                <p key={index} className="box text-bondiBlue-40">
                  {item}
                </p>
              );
            })}
          </section>
        </article>
        <article className="box w-full" id="proyectos">
          <Projects />
        </article>
        <article className="box w-full" id="habilidades">
          <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[3rem] pb-[2rem] ">
            Habilidades
          </h2>
          <Skills />
        </article>
        <article className="w-full" id="contacto">
          <Contact />
        </article>
      </section>
    </>
  );
};

export default Hero;
