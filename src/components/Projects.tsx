import React from 'react'
import TagSkill from './TagSkill'
import CardProject from './CardProject'
import { aujData, cafeAlturaData, globalLogisticData, pokemonData } from '../utils/conceptsData'
const Projects = () => {

  return (
    <section className='w-full min-h-screen flex flex-col items-center ' id='projects'>
      <h2 className='w-full text-center font-bold text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] text-bondiBlue-200 py-[4rem] '>Proyectos Desarrollados</h2>
      <article className='w-[90%] flex flex-wrap justify-center gap-2'>
        <CardProject
          title={cafeAlturaData.title}
          ruteProject={cafeAlturaData.url}
          altImg={cafeAlturaData.alt}
          srcImg={cafeAlturaData.img}
          par={cafeAlturaData.par}>
          {cafeAlturaData.skills.map((item) => { return <TagSkill key={item} title={item} /> })}
        </CardProject>

        <CardProject
          title={globalLogisticData.title}
          ruteProject={globalLogisticData.url}
          altImg={globalLogisticData.alt}
          srcImg={globalLogisticData.img}
          par={globalLogisticData.par}>
          {globalLogisticData.skills.map((item) => { return <TagSkill key={item} title={item} /> })}
        </CardProject>

        <CardProject
          title={pokemonData.title}
          ruteProject={pokemonData.url}
          altImg={pokemonData.alt}
          srcImg={pokemonData.img}
          par={pokemonData.par}>
          {pokemonData.skills.map((item) => { return <TagSkill key={item} title={item} /> })}
        </CardProject>

        <CardProject
          title={aujData.title}
          ruteProject={aujData.url}
          altImg={aujData.alt}
          srcImg={aujData.img}
          par={aujData.par}>
          {aujData.skills.map((item) => { return <TagSkill key={item} title={item} /> })}
        </CardProject>
      </article>
    </section>
  )
}

export default Projects