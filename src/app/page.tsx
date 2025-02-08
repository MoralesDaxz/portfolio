"use client";
import "./globals.css";
import React, { useRef } from "react";
import Landing from "@/Page/Landing";
import BackgroundStars from "@/components/BackgroundStars";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToTop from "@/components/ToTop";
import NavBar from "@/components/NavBar";
const Home = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  let tl = gsap.timeline({ paused: true });
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 }
      );
    },
    { scope: container }
  ); // <-- magic;
  return (
    <>
     {/*  <BackgroundStars /> */}
      <main>
        <NavBar/>
        <Landing container={container} />
      </main>
    </>
  );
};

export default Home;
