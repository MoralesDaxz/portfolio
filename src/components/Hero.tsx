'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
/* import AOS from "aos"; */
import 'aos/dist/aos.css';
import Image from 'next/image';
import pic from '../assets/Morales.jpg'

const Hero = () => {
  return (
    <header className='w-full px-10 min-h-screen'>
      <article className='w-full flex flex-col-reverse mt-[5rem] gap-3 sm:flex sm:flex-row sm:mt-[8rem]'>
        <section className='w-full sm:w-[40%] flex flex-col gap-4' >
          <section className='z-10 w-full text-xl font-light overflow-auto h-[300px] sm:h-[100%]'>
            <p>Desde corta edad me ha inquietado la tecnología me encanta estar en movimiento y aprendizaje, poseo estudios superiores en computación e informática, trayectoria como soporte IT y para fortalecer mi perfil tecnológico completé un Bootcamp de Desarrollo Web 500 horas, he participado en construcción de páginas (landing, formularios), en cursos especializados en maquetación de páginas web, adquiriendo habilidades en diferentes tecnologías.</p>
            <p>Además, he llevado a cabo un proceso autodidacta de enriquecimiento, he construido mini proyectos que han solidificado mi comprensión, lo que ha proporcionado una base sólida y estructurada para mis conocimientos.</p>
            <p>Estoy ansioso por aplicar las habilidades y destrezas que he adquirido en un entorno laboral.</p>
          </section>
        </section>
        <section className='w-full h-full sm:w-[60%] flex flex-col items-center gap-2 sm:gap-4 md:gap-5' >
          <h1
            className='text-center font-extrabold text-4xl sm:text-[3rem] lg:text-[4rem] text-bondiBlue-400 '>Desarrollador web</h1>
          <Image
            src={pic} width={0} height={0} alt='pic'
            title='foto'
            className='w-[120px] rounded-full'
          />
          <h2
            className='text-center font-bold text-3xl sm:text-[2.5rem] lg:text-[3.5rem] text-bondiBlue-50'
          >¡Hola! soy Alfredo Morales.</h2>
          <div className='font-bold text-2xl sm:text-[2rem] lg:text-[3rem] text-bondiBlue-300 h-[90px] sm:h-auto'>
            <TypeAnimation
              sequence={[
                'Piensa en lo que quieres',
                1500,
                'Desarrolla lo que imaginas',
                1500,
                'Implementa y perfecciona',
                1500,
                'Cada logro es un aprendizaje',
                1500
              ]}
              speed={60}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
          </div>
        </section>
      </article>

    </header>
  )
}
/* AOS.init(); */

export default Hero