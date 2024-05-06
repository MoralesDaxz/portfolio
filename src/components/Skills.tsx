"use client";
import { skills } from "@/utils/concepts";
import React from "react";
import TagSkill from "./TagSkill";
import { useControlDisplay } from "@/context/ControlDisplay";

const Skills = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <article className="box w-full" id="habilidades">
      <h2 className="box w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[4.5rem] pb-[2rem] ">
        Habilidades
      </h2>
      <section className="box w-full flex flex-wrap gap-6 justify-center">
        {skills.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              <TagSkill
                title={item}
                sizeImg={windowWidth < 640 ? "4rem" : "6rem"}
                classTag="text-bondiBlue-40 flex-col items-center"
              />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Skills;
