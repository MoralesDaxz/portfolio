import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";

interface ProjectCardProp {
  ruteProject: string;
  title: string;
  srcImg: string;
  altImg: string;
  prf: string;
  children: ReactNode;
  priority?: boolean; 
}

const ProjectCard: FC<ProjectCardProp> = ({
  ruteProject,
  title,
  srcImg,
  altImg,
  children,
  prf,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={ruteProject}
      target="_blank"
      className="group/card flex flex-col justify-between gap-4 items-center w-[90%] sm:max-w-[900px] sm:w-[40%] border-2 border-bondiBlue-900 hover:border-bondiBlue-500 hover:shadow-bondiBlue-800 hover:shadow-lg p-1 focus-within:border-bondiBlue-500 focus-within:shadow-bondiBlue-800 focus-within:shadow-lg rounded-md transition-all duration-700 outline-none sm:p-3"
    >
      <h2 className="text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] font-medium text-bondiBlue-40">
        {title}
      </h2>
      
      {/* Contenedor de la imagen con Skeleton Loader */}
      <div className="relative h-[200px] sm:h-[220px] w-[80%] sm:w-[90%] lg:w-[80%] flex justify-center items-center overflow-hidden rounded bg-bondiBlue-950/60">
        {/* Skeleton que parpadea mientras la imagen carga de la nube */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-bondiBlue-950 via-bondiBlue-900 to-bondiBlue-950 animate-pulse" />
        )}

        <Image
          priority={priority}
          className={`w-full h-full object-cover object-top rounded transition-all duration-700 group-hover/card:scale-105 ${
            isLoading ? "opacity-0 scale-95" : "opacity-80 group-hover/card:opacity-100"
          }`}
          width={500}
          height={500}
          alt={altImg}
          src={srcImg}
          onLoad={() => setIsLoading(false)} // Oculta el skeleton al completar la descarga
        />
      </div>

      <p className="text-bondiBlue-40 sm:font-extralight text-[.8rem] sm:text-[1rem] h-[120px] overflow-y-auto w-[85%] lg:w-[70%] border-b-2 border-b-bondiBlue-800 py-2">
        {prf}
      </p>
      <div className="w-full lg:w-[75%] flex flex-wrap justify-center gap-2">
        {children}
      </div>
    </Link>
  );
};

export default ProjectCard;