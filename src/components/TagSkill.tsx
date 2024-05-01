"use client";
import React, { FC, ReactElement, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { MdLibraryAdd } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
type Prop = {
  title?: string;
  classTag?: string;
  children?: ReactElement;
  sizeImg?: string;
  show?: boolean;
};

const TagSkill: FC<Prop> = ({
  title,
  classTag,
  children,
  show,
  sizeImg = "1.2rem",
}) => {
  const [showSkill, setShowSkill] = useState(false);
  const iconTag =
    title == "React" ? (
      <FaReact size={sizeImg} color="#0a7994" />
    ) : title == "TailwindCSS" ? (
      <SiTailwindcss size={sizeImg} color="#38BDF8" />
    ) : title == "Api" ? (
      <FaGear size={sizeImg} color="#94A3B8" />
    ) : title == "JavaScript" ? (
      <DiJavascript size={sizeImg} color="#EFD81D" />
    ) : title == "HTML" ? (
      <DiHtml5 size={sizeImg} color="#DD4B25" />
    ) : title == "CSS" ? (
      <DiCss3 size={sizeImg} color="#0068BA" />
    ) : title == "Typescript" ? (
      <TbBrandTypescript size={sizeImg} color="#2F74C0" />
    ) : title == "Postman" ? (
      <SiPostman size={sizeImg} color="#FF6C37" />
    ) : title == "GitHub" ? (
      <FaGithub size={sizeImg} color="#5A5A5A" />
    ) : title == "Library" || "Libraries" ? (
      <MdLibraryAdd size={sizeImg} color="#94A3B8" />
    ) : (
      ""
    );

  return (
    <div
      onMouseEnter={() => setShowSkill(true)}
      onMouseLeave={() => setShowSkill(false)}
      className={`flex gap-1 font-medium text-[.9rem] sm:text-[1rem] lg:text-[1.1rem] ${classTag}`}
    >
      {iconTag}
      {children}
      {showSkill || show ? (
        <p className="h-auto opacity-100 transition-all duration-700">
          {title}
        </p>
      ) : (
        <p className="opacity-0 duration-700">{title}</p>
      )}
    </div>
  );
};
export default TagSkill;
