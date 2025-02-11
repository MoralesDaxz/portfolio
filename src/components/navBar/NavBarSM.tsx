"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
import Image from "next/image";
import { useControlDisplay } from "@/context/ControlDisplay";
import SideModal from "./SideModal";
interface NavBarProps {
  windowScroll: number;
  route: { link: string; title: string }[];
}
const NavBarSM:FC<NavBarProps> = ({route, windowScroll}) => {
  const { closeModal, setCloseModal } = useControlDisplay();
  const [chooseLink, setChooseLink] = useState("");
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const styleSM =
    "gradientNavBarMovil absolute text-bondiBlue-50 w-full z-20 h-screen top-0 flex flex-col justify-around items-center gap-4 py-3 px-3 ";
  const classLinkActive =
    "text-2xl font-light text-[white] opacity-80 hover:opacity-100 ";
  return (
    <>
    <SideModal windowScroll={windowScroll} route={route} />
      {closeModal ? (
        <div className="w-full absolute top-0 flex items-center justify-between py-5 px-5">
          <Link className="z-10" href={"/"}>
            <Image
              priority
              src={"https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png"}
              width={40}
              height={40}
              alt="logo"
              title="Logo"
              className="w-7 h-7"
            />
          </Link>
          <Image
            priority
            className="opacity-80 z-10 cursor-pointer w-7 h-7"
            onClick={() => setCloseModal(false)}
            src={menu}
            color="#ebffff"
            width={40}
            height={40}
            alt="menu"
            title="Menu"
          />
        </div>
      ) : (
        <div className={styleSM}>
          <Image
            className="absolute top-3 right-3 cursor-pointer w-7 h-7"
            onClick={() => setCloseModal(true)}
            src={close}
            width={30}
            height={30}
            alt="close"
            title="Close"
          />
          {route.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setChooseLink(item.title);
                  setCloseModal(true);
                  scrollToSection(item.link);
                }}
                className={
                  chooseLink == item.title
                    ? classLinkActive + " text-bondiBlue-400 font-normal"
                    : classLinkActive
                }
                key={index}
                
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavBarSM ;
