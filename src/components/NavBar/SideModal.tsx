"use client";
import React, { FC, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
interface SideBarProps {
  windowScroll: number;
  route: { link: string; title: string }[];
}
const SideModal: FC<SideBarProps> = ({ route, windowScroll }) => {
  const [isActive, setisActive] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (windowScroll < 470) {
      setisActive(false);
    }
    return () => {};
  }, [windowScroll]);
  return (
    <>
      {windowScroll < 470 ? null : windowScroll > 470 && isActive ? (
        <div className="sideModal py-2 fixed z-50 w-[120px] h-[250px] font-light left-[2px] top-[35%] flex flex-col justify-center items-start gap-2 transition-all duration-500">
          <HiDotsVertical
            color="#0398b7"
            className="absolute z-60 top-[45%] right-0 w-5 h-7"
            onClick={() => setisActive(!isActive)}
          />
          <FaAngleUp color="#0398b7" className="w-4 h-4 ml-[2px]" />
          <div
            className="flex self-start items-center gap-2"
            onClick={() => scrollToSection("init")}
          >
            <div className="rounded-full ml-1 w-3 h-3 bg-bondiBlue-400"></div>
            <p className="font-thin">Inicio</p>
          </div>
          {route.map((item, index) => {
            return (
              <>
                <div className="h-8 w-[2px] ml-2 bg-bondiBlue-900"></div>
                <div
                  className=" flex self-start items-center gap-2"
                  key={index}
                  onClick={() => scrollToSection(item.link)}
                >
                  <div className="rounded-full ml-1 w-3 h-3 bg-bondiBlue-400"></div>
                  <p className="font-thin">{item.title}</p>
                </div>
              </>
            );
          })}

          <FaAngleDown color="#0398b7" className="w-4 h-4 ml-[2px]" />
        </div>
      ) : (
        <div className="sideModal fixed flex items-center justify-center z-50 w-4 h-[60px] left-[2px] top-[35%] opacity-80 transition-all duration-500">
          <HiDotsVertical
            color="#0398b7"
            className="absolute z-60 w-7 h-7"
            onClick={() => setisActive(!isActive)}
          />
        </div>
      )}
    </>
  );
};

export default SideModal;
