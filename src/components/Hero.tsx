
import React, { useRef } from 'react'
import { container, nextItems } from '@/utils/motionVariables'
import Image from 'next/image';
import pic from '../assets/Morales.jpg'
import { TypeLetters } from './TypeLetters';
import { motion } from 'framer-motion';
import Projects from './Projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Hero = () => {

  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  let tl = gsap.timeline({ paused: true });
  useGSAP(() => {
    gsap.fromTo(".box", { opacity: 0, y: 33}, { opacity: 1, y: 0,stagger:0.4 })
  }, { scope: container }); // <-- magic;

  return (
    <>
      <section className='z-10 w-full px-4 sm:px-10 min-h-screen flex flex-col items-center justify-center ' ref={container}>
        <article className='box w-full h-full flex flex-col items-center mt-[5rem] gap-[8%] sm:flex sm:flex-row sm:mt-[8rem]'>
          <section className='box w-full h-full sm:w-[50%] flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-8' >
            <h1
              className=' text-center font-bold text-4xl sm:text-[3rem] lg:text-[4rem] text-bondiBlue-400'>Desarrollador web</h1>
            <Image
              src={pic} width={0} height={0} alt='pic'
              title='foto'
              className='mainPic w-[150px] rounded-full shadow-lg shadow-bondiBlue-400 border-4 border-bondiBlue-900'
            />
            <h2
              className='text-center font-bold text-3xl sm:text-[2rem] lg:text-[2.9rem] text-bondiBlue-40'
            >¡Hola! soy Alfredo Morales</h2>
            <div className='font-bold text-2xl sm:text-[1.5rem] lg:text-[2rem] text-bondiBlue-40 h-[90px]'>
              <TypeLetters />
            </div>
          </section>
          <section className='box hover:backdrop-blur-md z-10  w-full sm:w-[40%] flex flex-col justify-start gap-4 text-xl font-light overflow-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-full' >
            <p className='box text-bondiBlue-40'>Desde corta edad me ha inquietado la tecnología me encanta estar en movimiento y aprendizaje, poseo estudios superiores en computación e informática, trayectoria como soporte IT y para fortalecer mi perfil tecnológico completé un Bootcamp de Desarrollo Web 500 horas, he participado en construcción de páginas (landing, formularios), en cursos especializados en maquetación de páginas web, adquiriendo habilidades en diferentes tecnologías.</p>
            <p className='box text-bondiBlue-40'>Además, he llevado a cabo un proceso autodidacta de enriquecimiento, he construido mini proyectos que han solidificado mi comprensión, lo que ha proporcionado una base sólida y estructurada para mis conocimientos.</p>
            <p className='box text-bondiBlue-40'>Estoy ansioso por aplicar las habilidades y destrezas que he adquirido en un entorno laboral.</p>
          </section>
        </article>
        <article className='box w-full'>
        <Projects />
        </article>
      </section>

    </>
  )
}

export default Hero