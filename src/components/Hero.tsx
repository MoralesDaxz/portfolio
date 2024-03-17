'use client'

import React from 'react'
import BackgroundStars from './BackgroundStars'
import { ExampleMotion } from './ExampleMotion'
import { NameInitSvg } from './NameInitSvg'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {


  return (
    <div className='w-full '>
        <BackgroundStars />
      <div className='w-full p-2 bg-black flex flex-col'>
        <NameInitSvg />
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
          style={{ fontSize: '2em' }}
          repeat={Infinity} />
      </div>

      <div className='w-full  p-10 bg-black'>
        <ExampleMotion/>
      </div>

    </div>
  )
}

export default Hero