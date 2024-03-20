'use client'

import React from 'react'
import { container, nextItems } from '@/utils/motionVariables'
import Image from 'next/image';
import pic from '../assets/Morales.jpg'
import { TypeLetters } from './TypeLetters';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.header
      variants={container}
      initial='hidden'
      animate='visible'
      className='z-10 w-full px-10 min-h-screen flex justify-center items-center '>
      <motion.article
        initial='hidden'
        animate='visible'
        variants={container}
        className='w-full h-full flex flex-col items-center mt-[5rem] gap-[8%] sm:flex sm:flex-row sm:mt-[6rem]'>
        <motion.section
          initial='hidden'
          animate='visible'
          variants={container}
          className='w-full h-full sm:w-[50%] flex flex-col items-center justify-start gap-2 sm:gap-4 md:gap-5 lg:gap-8' >
          <h1
            className='text-center font-bold text-4xl sm:text-[3rem] lg:text-[4rem] text-bondiBlue-400 '>Desarrollador web</h1>
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
        </motion.section>
        <motion.section
          initial='hidden'
          animate='visible'
          variants={container} className=' hover:backdrop-blur-md z-10  w-full sm:w-[40%] flex flex-col justify-start gap-4 text-xl font-light overflow-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-full' >
          <motion.p
            initial='hidden'
            animate='visible'
            variants={nextItems}>Desde corta edad me ha inquietado la tecnología me encanta estar en movimiento y aprendizaje, poseo estudios superiores en computación e informática, trayectoria como soporte IT y para fortalecer mi perfil tecnológico completé un Bootcamp de Desarrollo Web 500 horas, he participado en construcción de páginas (landing, formularios), en cursos especializados en maquetación de páginas web, adquiriendo habilidades en diferentes tecnologías.</motion.p>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={nextItems}>Además, he llevado a cabo un proceso autodidacta de enriquecimiento, he construido mini proyectos que han solidificado mi comprensión, lo que ha proporcionado una base sólida y estructurada para mis conocimientos.</motion.p>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={nextItems}>Estoy ansioso por aplicar las habilidades y destrezas que he adquirido en un entorno laboral.</motion.p>
        </motion.section>
      </motion.article>

    </motion.header>
  )
}


export default Hero