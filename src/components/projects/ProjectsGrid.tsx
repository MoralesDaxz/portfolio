import React from "react";
import ProjectCard from "./ProjectCard";
import TagSkill from "../technologies/TagTech";
import { projects } from "../../data/information/projects";

interface ProjectsData {
  title: string;
  prf: string;
  img: string;
  alt: string;
  url: string;
  stackTech: string[];
}
const ProjectsGrid = () => {
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
          {projects.map((project: ProjectsData, index: number) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                ruteProject={project.url}
                altImg={project.alt}
                srcImg={project.img}
                prf={project.prf}
              >
                {project.stackTech.map((item, index) => {
                  return (
                    <TagSkill
                      classTag={"text-bondiBlue-500"}
                      key={item}
                      title={item}
                      show={true}
                    />
                  );
                })}
              </ProjectCard>
            );
          })}
        </article>
      </section>
    </article>
  );
};

export default ProjectsGrid;
