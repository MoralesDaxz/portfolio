import React from 'react'
import { container, nextItems } from '@/utils/motionVariables'
import Image from 'next/image';
import pic from '../assets/Morales.jpg'
import { TypeLetters } from './TypeLetters';
import { motion } from 'framer-motion';
import Projects from './Projects';
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
/* import {ScrollSmoother} from 'gsap/dist/ScrollSmoother'; */

const Hero = () => {
/*   gsap.registerPlugin( ScrollTrigger,ScrollSmoother); 
  gsap.to("#box", { rotation: 27, x: 100, duration: 1 });
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});
smoother.effects("#box"); */

  
  // create the smooth scroller FIRST!
/*   let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true
  }); */
  
  // pin box-c when it reaches the center of the viewport, for 300px
/*    ScrollTrigger.create({
    trigger: "#box",
    pin: true,
    start: "center center",
    end: "+=300",
    markers: true
  });  */
  
  return (
    <>
      <section
      id='box'
        className='z-10 w-full px-10 min-h-screen flex flex-col items-center justify-center '>
        <article data-aos="fade-up" data-aos-duration="600" className='w-full h-full flex flex-col items-center mt-[5rem] gap-[8%] sm:flex sm:flex-row sm:mt-[6rem]'>
          <section className='w-full h-full sm:w-[50%] flex flex-col items-center justify-start gap-2 sm:gap-4 md:gap-5 lg:gap-8' >
            <h1
              className='text-center font-bold text-4xl sm:text-[3rem] lg:text-[4rem] text-bondiBlue-400'>Desarrollador web</h1>
            <Image
              src={pic} width={0} height={0} alt='pic'
              title='foto'
              className='w-[120px] rounded-full'
            />
            <h2
              className='text-center font-bold text-3xl sm:text-[2rem] lg:text-[3rem] text-bondiBlue-50'
            >¡Hola! soy Alfredo Morales.</h2>
            <div className='font-bold text-2xl sm:text-[1.5rem] lg:text-[2rem] text-bondiBlue-300 h-[90px]'>
              <TypeLetters />
            </div>
          </section>
          <section className=' hover:backdrop-blur-md z-10  w-full sm:w-[40%] flex flex-col justify-start gap-4 text-xl font-light overflow-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-full' >
            <p >Desde corta edad me ha inquietado la tecnología me encanta estar en movimiento y aprendizaje, poseo estudios superiores en computación e informática, trayectoria como soporte IT y para fortalecer mi perfil tecnológico completé un Bootcamp de Desarrollo Web 500 horas, he participado en construcción de páginas (landing, formularios), en cursos especializados en maquetación de páginas web, adquiriendo habilidades en diferentes tecnologías.</p>
            <p>Además, he llevado a cabo un proceso autodidacta de enriquecimiento, he construido mini proyectos que han solidificado mi comprensión, lo que ha proporcionado una base sólida y estructurada para mis conocimientos.</p>
            <p>Estoy ansioso por aplicar las habilidades y destrezas que he adquirido en un entorno laboral.</p>
          </section>
        </article>
      </section>
      <Projects />

    </>
  )
}
AOS.init();

export default Hero