import { aboutMe } from "@/utils/concepts";
import React from "react";
import PictureHero from "./PictureHero";
import { TypeLetters } from "./TypeLetters";

const AboutMe = () => {
  return (
    <article className="box w-full h-full flex flex-col items-center mt-[5rem] gap-[8%] sm:flex sm:flex-row sm:mt-[8rem]">
      <section className="box w-full h-full sm:w-[50%] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <h1 className="w-full text-center font-bold text-4xl sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3.2rem] text-bondiBlue-400">
          Desarrollador Web
        </h1>
        <PictureHero />
        <h2 className="text-center font-bold text-3xl sm:text-[2rem] lg:text-[2.5rem] text-bondiBlue-40">
          ¡Hola! soy Alfredo Morales
        </h2>
        <div className="font-bold text-2xl sm:text-[1.5rem] lg:text-[2rem] text-bondiBlue-40 h-[90px] opacity-80">
          <TypeLetters />
        </div>
      </section>
      <section className="box hover:backdrop-blur-md z-10 px-3 sm:px-0  w-full sm:w-[40%] flex flex-col justify-start gap-4 text-lg sm:text-xl font-light overflow-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-full">
        {aboutMe.map((item, index) => {
          return (
            <p key={index} className="box text-bondiBlue-40">
              {item}
            </p>
          );
        })}
      </section>
    </article>
  );
};

export default AboutMe;
