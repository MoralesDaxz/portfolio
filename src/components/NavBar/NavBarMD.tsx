import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface NavBarProps {
  windowScroll: number;
  route: { link: string; title: string }[];
}
const NavBarMD: FC<NavBarProps> = ({ windowScroll, route }) => {
  const styleMD =
    "z-10 w-full fixed top-0 py-4 flex justify-center items-start sm:gap-10 md:gap-20 transition-all duration-300";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={
        windowScroll > 40
          ? `${styleMD} z-20 bg-[#02171fad] py-5 backdrop-blur-sm `
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
            className="z-10 text-base sm:text-lg lg:text-xl font-light transition-all duration-700 text-[white] opacity-80 hover:opacity-100 hover:bg-bondiBlue-950 rounded-md border-[3px] border-bondiBlue-900 hover:border-bondiBlue-500 hover:shadow-md hover:shadow-bondiBlue-800 p-2"
            key={index}
            onClick={() => scrollToSection(item.link)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default NavBarMD;
