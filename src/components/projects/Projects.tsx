import React from "react";
import CardProject from "./CardProject";
import {
  auj,
  cafeAltura,
  globalLogistic,
  gts,
  heroes,
  pokemon,
} from "@/data/information/proyects";
import TagSkill from "../skills/TagSkill";

const Projects = () => {
  return (
    <article className="w-full px-4 sm:px-10" id="proyectos">
      <section
        className="w-full min-h-screen flex flex-col items-center "
        id="projects"
      >
        <h2 className="w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[5.5rem] pb-[3rem] ">
          Proyectos Desarrollados
        </h2>
        <article className="w-full flex flex-wrap gap-y-4 sm:gap-x-3 md:gap-x-5 justify-center ">
        <CardProject
            title={gts.title}
            ruteProject={gts.url}
            altImg={gts.alt}
            srcImg={gts.img}
            prf={gts.prf}
          >
            {gts.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={cafeAltura.title}
            ruteProject={cafeAltura.url}
            altImg={cafeAltura.alt}
            srcImg={cafeAltura.img}
            prf={cafeAltura.prf}
          >
            {cafeAltura.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={globalLogistic.title}
            ruteProject={globalLogistic.url}
            altImg={globalLogistic.alt}
            srcImg={globalLogistic.img}
            prf={globalLogistic.prf}
          >
            {globalLogistic.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={pokemon.title}
            ruteProject={pokemon.url}
            altImg={pokemon.alt}
            srcImg={pokemon.img}
            prf={pokemon.prf}
          >
            {pokemon.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>

          <CardProject
            title={auj.title}
            ruteProject={auj.url}
            altImg={auj.alt}
            srcImg={auj.img}
            prf={auj.prf}
          >
            {auj.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
                  key={item}
                  title={item}
                  show={true}
                />
              );
            })}
          </CardProject>
           <CardProject
            title={heroes.title}
            ruteProject={heroes.url}
            altImg={heroes.alt}
            srcImg={heroes.img}
            prf={heroes.prf}
          >
            {heroes.skills.map((item, index) => {
              return (
                <TagSkill
                  classTag={"text-bondiBlue-500"}
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
