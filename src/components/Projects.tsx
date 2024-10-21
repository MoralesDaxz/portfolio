import React from "react";
import TagSkill from "./TagSkill";
import CardProject from "./CardProject";
import {
  aujData,
  cafeAlturaData,
  globalLogisticData,
  gtsData,
  pokemonData,
} from "../utils/concepts";

const Projects = () => {
  return (
    <article className="box w-full" id="proyectos">
      <section
        className="w-full min-h-screen flex flex-col items-center "
        id="projects"
      >
        <h2 className="box w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[4.5rem] pb-[3rem] ">
          Proyectos Desarrollados
        </h2>
        <article className="w-full flex flex-wrap gap-y-4 sm:gap-x-3 md:gap-x-5 justify-center ">
        <CardProject
            title={gtsData.title}
            ruteProject={gtsData.url}
            altImg={gtsData.alt}
            srcImg={gtsData.img}
            prf={gtsData.prf}
          >
            {gtsData.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500 items-center"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={cafeAlturaData.title}
            ruteProject={cafeAlturaData.url}
            altImg={cafeAlturaData.alt}
            srcImg={cafeAlturaData.img}
            prf={cafeAlturaData.prf}
          >
            {cafeAlturaData.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500 items-center"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={globalLogisticData.title}
            ruteProject={globalLogisticData.url}
            altImg={globalLogisticData.alt}
            srcImg={globalLogisticData.img}
            prf={globalLogisticData.prf}
          >
            {globalLogisticData.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500 items-center"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={pokemonData.title}
            ruteProject={pokemonData.url}
            altImg={pokemonData.alt}
            srcImg={pokemonData.img}
            prf={pokemonData.prf}
          >
            {pokemonData.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500 items-center"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={aujData.title}
            ruteProject={aujData.url}
            altImg={aujData.alt}
            srcImg={aujData.img}
            prf={aujData.prf}
          >
            {aujData.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500 items-center"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>
        </article>
      </section>
    </article>
  );
};

export default Projects;
