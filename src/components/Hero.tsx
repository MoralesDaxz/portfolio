'use client'

import React from 'react'
import BackgroundStars from './BackgroundStars'
import { TypeAnimation } from 'react-type-animation'
import AOS from "aos";
import 'aos/dist/aos.css';
const Hero = () => {
  AOS.init();
  return (
    <header className='w-full px-2'>
      <div>
      <h1 className='font-extrabold text-5xl mt-[8rem] sm:text-8xl text-bondiBlue-400 ' data-aos="fade-up" data-aos-duration="500">Desarrollador web </h1>
        <h2 className='font-bold text-5xl text-bondiBlue-50' data-aos="fade-up" data-aos-duration="1500">¡Hola! soy Alfredo Morales.</h2>
        <div className='font-bold text-3xl text-bondiBlue-300' data-aos="fade-up" data-aos-duration="2000">
          <TypeAnimation
            sequence={[
              'Piensa en lo que quieres',
              1000,
              'Desarrolla lo que imaginas',
              1000,
              'Implementa y perfecciona',
              1000,
              'Cada logro es un aprendizaje',
              1000
            ]}
            speed={50}
            style={{ fontSize: '1em' }}
            repeat={Infinity} 
           />
      </div>
      </div>

  
    </header>
  )
}

export default Hero