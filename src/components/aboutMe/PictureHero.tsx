"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic from "@/assets/picture/Morales.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";
import Link from "next/link";
const PictureHero = () => {
  const [modalPic, setModalPic] = useState(false);
  const modalClass =
    "pictureModal transition-all duration-700 absolute top-[12%] sm:top-[15%] lg:top-[18%] left-2 md:left-[5%] lg:left-[10%] h-[150px] w-[80px] flex flex-col items-center justify-around";
  return (
    <div>
      <Image
        onClick={() => setModalPic(!modalPic)}
        src={pic}
        width={0}
        height={0}
        alt="pic"
        className="cursor-pointer w-[150px] rounded-full shadow-lg shadow-bondiBlue-400 border-4 border-bondiBlue-900 hover:scale-105 transition-all duration-300"
      />
      <div
        className={modalPic ? modalClass : `${modalClass} opacity-0 w-[0px]`}
      >
        <Link
          className="w-full border-l-2 border-l-transparent hover:border-bondiBlue-500 transition-all duration-700"
          href={"https://github.com/MoralesDaxz"}
          title="GitHub"
          target="_blank"
        >
          <FaGithub className="h-[30px] w-full opacity-70 hover:opacity-100 transition-all duration-300" />
        </Link>
        <Link
          className="w-full border-l-2 border-l-transparent hover:border-bondiBlue-500 transition-all duration-700"
          href={
            "https://www.linkedin.com/in/alfredo-jose-morales-ramirez-6b664b1a7/"
          }
          title="Linkedin"
          target="_blank"
        >
          <FaLinkedin className="h-[30px] w-full opacity-70 hover:opacity-100 transition-all duration-300" />
        </Link>
        <a
          className="w-full border-l-2 border-l-transparent hover:border-bondiBlue-500 transition-all duration-700"
          href="/curriculum/Alfredo Morales - Madrid.pdf"
          download="Alfredo Morales - Madrid.pdf"
          title="Curriculum"
        >
          <IoDocumentAttach className="h-[30px] w-full opacity-70 hover:opacity-100 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};

export default PictureHero;
