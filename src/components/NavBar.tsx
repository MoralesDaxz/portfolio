"use client";
import React from "react";
import Link from "next/link";
import { NavMovil } from "./NavMovil";
import Image from "next/image";
import { useControlDisplay } from "@/context/ControlDisplay";

const NavBar = () => {
  const route = [
    { link: "#proyectos", title: "Proyectos" },
    { link: "#habilidades", title: "Habilidades" },
    { link: "#contacto", title: "Contacto" },
  ];

  const styleMD =
    "z-10 w-full fixed top-0 py-2 flex justify-center items-start sm:gap-10 md:gap-20 transition-all duration-500";
  const { windowWidth, windowScroll } = useControlDisplay();

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
          <Link className="absolute top-[25%] left-8 z-20" href={"/"}>
            <Image
              priority
              src={"https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png"}
              width={40}
              height={40}
              alt="logo"
              title="logo"
            />
          </Link>
          {route.map((item, index) => {
            return (
              <Link
                className="text-base sm:text-lg lg:text-xl font-medium transition-all duration-700 text-[white] opacity-80 hover:opacity-100 hover:bg-bondiBlue-950 z-10 rounded-md border-[3px] border-bondiBlue-900 hover:border-bondiBlue-500  hover:shadow-md hover:shadow-bondiBlue-800 p-2"
                key={index}
                href={item.link}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      ) : (
        <NavMovil />
      )}
    </>
  );
};

export default NavBar;
