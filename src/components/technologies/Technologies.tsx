"use client";
import React from "react";
import { useControlDisplay } from "@/context/ControlDisplay";
import { stackTech } from "@/data/information/stack.tech";
import TagTech from "./TagTech";

const Technologies = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <article className="w-full px-4 sm:px-10" id="skill">
      <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[5.5rem] pb-[3rem] ">
        Habilidades
      </h2>
      <section className="w-full flex flex-wrap gap-5 justify-center">
        {stackTech.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              <TagTech
                title={item}
                sizeImg={windowWidth < 640 ? "4rem" : "5.5rem"}
                classTag="text-bondiBlue-40 flex-col items-center"
              />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Technologies;
