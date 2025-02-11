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
import { TbBrandNextjs } from "react-icons/tb";
interface TagSkillProp  {
  title: string;
  classTag?: string;
  children?: ReactElement;
  sizeImg?: string;
  show?: boolean;
};

const TagSkill: FC<TagSkillProp> = ({
  title,
  classTag,
  children,
  show,
  sizeImg="1.5rem",
}) => {
  const [showSkill, setShowSkill] = useState(false);
  const getIconTag = (title: string): ReactElement | null => {
    switch (title) {
      case "React":
        return <FaReact size={sizeImg} color="#0a7994" />;
      case "Tailwind":
        return <SiTailwindcss size={sizeImg} color="#38BDF8" />;
      case "Api":
        return <FaGear size={sizeImg} color="#94A3B8" />;
      case "JavaScript":
        return <DiJavascript size={sizeImg} color="#EFD81D" />;
      case "HTML":
        return <DiHtml5 size={sizeImg} color="#DD4B25" />;
      case "CSS":
        return <DiCss3 size={sizeImg} color="#0068BA" />;
      case "Typescript":
        return <TbBrandTypescript size={sizeImg} color="#2F74C0" />;
      case "Postman":
        return <SiPostman size={sizeImg} color="#FF6C37" />;
      case "GitHub":
        return <FaGithub size={sizeImg} color="#5A5A5A" />;
      case "NextJS":
        return <TbBrandNextjs size={sizeImg} color="#FFFFFF" />;
      case "Library":
        return <MdLibraryAdd size={sizeImg} color="#94A3B8" />;
      case "Libraries":
        return <MdLibraryAdd size={sizeImg} color="#94A3B8" />;
      default:
        return null;
    }
  };

  const [iconTag, setIconTag] = useState<ReactElement | null>(
    getIconTag(title)
  );

  return (
    <div
      onMouseEnter={() => setShowSkill(true)}
      onMouseLeave={() => setShowSkill(false)}
      className={`flex items-center gap-1 font-normal text-[.7rem] sm:text-[.8rem] lg:text-[.9rem] border-t-[3px] border-t-bondiBlue-800 rounded-full p-2 ${classTag}`}
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
