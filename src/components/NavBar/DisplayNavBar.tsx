"use client";
import React from "react";
import { useControlDisplay } from "@/context/ControlDisplay";
import NavBarSM from "./NavBarSM";
import NavBarMD from "./NavBarMD";
const DisplayNavBar = () => {
  const route = [
    { link: "projects", title: "Proyectos" },
    { link: "skill", title: "Habilidades" },
    { link: "contact", title: "Contacto" },
  ];
  const { windowWidth, windowScroll } = useControlDisplay();

  return (
    <>
      {windowWidth > 640 ? (
        <NavBarMD windowScroll={windowScroll} route={route} />
      ) : windowWidth < 640 ? (
        <NavBarSM route={route} />
      ) : null}
    </>
  );
};

export default DisplayNavBar;
