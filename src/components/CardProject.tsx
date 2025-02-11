import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface CardProjectProp  {
  ruteProject: string;
  title: string;
  srcImg: string;
  altImg: string;
  prf: string;
  children: ReactNode;
};
const CardProject: FC<CardProjectProp> = ({
  ruteProject,
  title,
  srcImg,
  altImg,
  children,
  prf,
}) => {
  return (
    <>
      <Link
        href={ruteProject}
        target="_blank"
        className="box group/card flex flex-col justify-between gap-4 items-center w-[90%] sm:max-w-[900px] sm:w-[40%] border-2 border-bondiBlue-900 hover:border-bondiBlue-500 hover:shadow-bondiBlue-800 hover:shadow-lg p-1 focus-within:border-bondiBlue-500 focus-within:shadow-bondiBlue-800 focus-within:shadow-lg rounded-md transition-all duration-700 outline-none sm:p-3"
      >
        <h2 className="text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] font-medium text-bondiBlue-40">
          {title}
        </h2>
        <div className=" h-auto w-[80%] sm:w-[90%] lg:w-[80%] flex justify-center">
          <Image
            priority
            className="w-auto  rounded opacity-80 group-hover/card:scale-105 group-hover/card:opacity-100 transition-all duration-700"
            width={500}
            height={500}
            alt={altImg}
            src={srcImg}
          />
        </div>
        <p className=" text-bondiBlue-40 font-extralight text-[.9rem] sm:text-[1rem] lg:text-[1.1rem] h-[120px] overflow-y-auto w-[85%] lg:w-[70%] border-b-2 border-b-bondiBlue-800 py-2">
          {prf}
        </p>
        <div className="w-full flex flex-wrap justify-center gap-2">
          {children}
        </div>
      </Link>
    </>
  );
};

export default CardProject;
