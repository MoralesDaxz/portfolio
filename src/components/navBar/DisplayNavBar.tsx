"use client";
import React, { useEffect } from "react";
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
  useEffect(() => {
    return () => {
      windowWidth;
    };
  }, [windowWidth]);
  return (
    <>
      {windowWidth > 640 ? (
        <NavBarMD windowScroll={windowScroll} route={route} />
      ) : windowWidth < 640 ? (
        <NavBarSM windowScroll={windowScroll} route={route} />
      ) : null}
    </>
  );
};

export default DisplayNavBar;
