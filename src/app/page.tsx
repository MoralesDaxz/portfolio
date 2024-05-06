"use client";
import "./globals.css";
import React, { useRef } from "react";
import Landing from "@/Page/Landing";
import BackgroundStars from "@/components/BackgroundStars";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToTop from "@/components/ToTop";
const Home = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  let tl = gsap.timeline({ paused: true });
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.4 }
      );
    },
    { scope: container }
  ); // <-- magic;
  return (
    <>
      <BackgroundStars />
        {/* <ToTop></ToTop> */}
      <main>
        <Landing container={container}/>
      </main>
    </>
  );
};

export default Home;
