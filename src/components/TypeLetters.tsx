'use client'
import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeLetters = () => {
  return (
    <div className=" text-[.9em]">
      <TypeAnimation
        sequence={[
          "Piensa en lo que quieres lograr",
          2000,
          "Desarrolla con pasion lo que imaginas ",
          2000,
          "Perfecciona e implementa en cada paso",
          2000,
          "Disfruta tus logros, es tú momento!",
          2000,
        ]}
        speed={60}
        repeat={Infinity}
      />
    </div>
  );
};

export { TypeLetters };
