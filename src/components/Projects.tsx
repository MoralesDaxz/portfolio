import React, { useRef } from 'react'
import TagSkill from './TagSkill'
import CardProject from './CardProject'
import { aujData, cafeAlturaData, globalLogisticData, pokemonData } from '../utils/concepts'


const Projects = () => {

  return (
    <section className='w-full min-h-screen flex flex-col items-center ' id='projects'>
      <h2 className='w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-400 pt-[4.5rem] pb-[3rem] '>Proyectos Desarrollados</h2>
      <article className='w-full sm:w-[80%] l flex flex-wrap justify-center gap-3 sm:gap-x-4'>
        <CardProject
          title={cafeAlturaData.title}
          ruteProject={cafeAlturaData.url}
          altImg={cafeAlturaData.alt}
          srcImg={cafeAlturaData.img}
          prf={cafeAlturaData.prf}>
          {cafeAlturaData.skills.map((item,index) => { return <TagSkill key={index} title={item} /> })}
        </CardProject>

        <CardProject
          title={globalLogisticData.title}
          ruteProject={globalLogisticData.url}
          altImg={globalLogisticData.alt}
          srcImg={globalLogisticData.img}
          prf={globalLogisticData.prf}>
          {globalLogisticData.skills.map((item,index) => { return <TagSkill key={index} title={item} /> })}
        </CardProject>

        <CardProject
          title={pokemonData.title}
          ruteProject={pokemonData.url}
          altImg={pokemonData.alt}
          srcImg={pokemonData.img}
          prf={pokemonData.prf}>
          {pokemonData.skills.map((item,index) => { return <TagSkill key={index} title={item} /> })}
        </CardProject>

        <CardProject
          title={aujData.title}
          ruteProject={aujData.url}
          altImg={aujData.alt}
          srcImg={aujData.img}
          prf={aujData.prf}>
          {aujData.skills.map((item,index) => { return <TagSkill key={index} title={item} /> })}
        </CardProject>
      </article>
    </section>
  )
}

export default Projects