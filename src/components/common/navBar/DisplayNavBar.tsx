"use client";

import NavBarSM from "./NavBarSM";
import NavBarMD from "./NavBarMD";
import { useWindowWidth } from "../../../../hooks/ControlDisplay/useWindowWidth";

const DisplayNavBar = () => {
  const route = [
    { link: "projects", title: "Proyectos" },
    { link: "skill", title: "Habilidades" },
    { link: "contact", title: "Contacto" },
  ];
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth > 640 ? (
        <NavBarMD route={route} />
      ) : windowWidth < 640 ? (
        <NavBarSM route={route} />
      ) : null}
    </>
  );
};

export default DisplayNavBar;
