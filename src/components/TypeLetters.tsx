import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeLetters = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Piensa en lo que quieres lograr",
          2000,
          "Desarrolla lo que imaginas con pasion",
          2000,
          "Implementa y perfecciona cada paso",
          2000,
          "Disfruta tus logros, es tú momento!",
          2000,
        ]}
        speed={60}
        style={{ fontSize: ".9em" }}
        repeat={Infinity}
      />
    </>
  );
};

export { TypeLetters };
