"use client";

import { stackTech } from "@/data/information/stack.tech";
import TagTech from "./TagTech";
import { useWindowWidth } from "../../../hooks/ControlDisplay/useWindowWidth";

const Technologies = () => {
  const windowWidth = useWindowWidth();
  const titleStyle =
    "w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[5.5rem] pb-[3rem]";
  return (
    <article className="w-full px-4 sm:px-10" id="skill">
      <h2 className={titleStyle}>Tecnologías</h2>
      <section className="w-full max-w-3xl mx-auto flex flex-wrap gap-5 justify-center">
        {stackTech.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              <TagTech
                title={item}
                sizeImg={windowWidth < 640 ? "2.5rem" : "4.5rem"}
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
