"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../aboutMe/AboutMe";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../form/Contact";
import Footer from "@/components/main/Footer";
import BackgroundBalls from "../backgrounds/BackgroundBalls";
import DisplayNavBar from "../navBar/DisplayNavBar";

const Landing = () => {
  return (
   
      <section className="relative w-full flex flex-col items-center justify-center">
      <BackgroundBalls />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <DisplayNavBar />
        </motion.div>
        {/* Secciones animadas cuando entran en pantalla */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }} // Solo se anima una vez cuando el 20% es visible
          className="w-full"
        >
          <AboutMe />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Contact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Footer />
        </motion.div>
      </section>
   
  );
};

export default Landing;
