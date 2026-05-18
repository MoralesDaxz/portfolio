"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutMe from "./aboutMe/AboutMe";
import Contact from "./contact/Contact";
import Footer from "@/components/footer/Footer";
import BackgroundBalls from "./common/backgrounds/BackgroundBalls";
import DisplayNavBar from "./common/navBar/DisplayNavBar";
import Technologies from "./technologies/Technologies";
import ProjectsGrid from "./projects/ProjectsGrid";
import { Separation } from "./common/separation/Separation";
import ToTop from "./common/toTop/ToTop";

const Landing = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      {/*  Animacion de bolas BG */}
      <BackgroundBalls />
      <ToTop/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full"
      >
        <DisplayNavBar />
      </motion.div>
      {/* AboutMe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }} // Solo se anima una vez cuando el 20% es visible
        className="w-full"
      >
        <AboutMe />
     {/*  <Separation /> */}
      </motion.div>
      {/* Proyectos */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <ProjectsGrid />
      </motion.div>
      {/* Tecnologias*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <Technologies />
      </motion.div>
      {/* Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <Contact />
      </motion.div>
      {/* Footer*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <Footer />
      </motion.div>
      
    </section>
  );
};

export default Landing;
