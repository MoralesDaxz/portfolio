"use client";
import React from "react";
import Link from "next/link";
import { NavMovil } from "./NavMovil";
import Image from "next/image";
import { useControlDisplay } from "../context/ControlDisplay";

const NavBar = () => {
  const route = [
    { link: "projects", title: "Proyectos" },
    { link: "skill", title: "Habilidades" },
    { link: "contact", title: "Contacto" },
  ];

  const styleMD =
    "z-10 w-full fixed top-0 py-2 flex justify-center items-start sm:gap-10 md:gap-20 transition-all duration-300";
  const { windowWidth, windowScroll } = useControlDisplay();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
    }
  };
  return (
    <>
      {windowWidth > 640 ? (
        <div
          className={
            windowScroll > 40
              ? `z-20 bg-[#02171fad] py-3 backdrop-blur-sm ${styleMD}`
              : styleMD
          }
        >
          <Link className="absolute top-[26%] left-8 z-20" href={"/"}>
            <Image
              priority
              src={"https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png"}
              width={50}
              height={50}
              alt="Logo"
              title="Logo"
              className="w-7 h-7 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-500"
            />
          </Link>
         
          {route.map((item, index) => {
            return (
              <button
                className="z-10 text-base sm:text-lg lg:text-xl font-medium transition-all duration-700 text-[white] opacity-80 hover:opacity-100 hover:bg-bondiBlue-950  rounded-md border-[3px] border-bondiBlue-900 hover:border-bondiBlue-500  hover:shadow-md hover:shadow-bondiBlue-800 p-2"
                key={index}
                onClick={() => scrollToSection(item.link)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      ) : windowWidth < 640 ? (
        <NavMovil />
      ) : null}
    </>
  );
};

export default NavBar;
