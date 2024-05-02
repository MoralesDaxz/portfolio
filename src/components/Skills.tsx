'use client'
import { skills } from '@/utils/concepts';
import React from 'react'
import TagSkill from './TagSkill';
import { useControlDisplay } from '@/context/ControlDisplay';

const Skills = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <section className="w-full flex flex-wrap gap-6 justify-center">
        {skills.map((item, index) => {
              return (
                <div className="cursor-pointer" key={index}>
                  <TagSkill
                    title={item}
                    sizeImg={windowWidth < 640 ? "4rem" : "6rem"}
                    classTag="text-bondiBlue-40 flex-col items-center"
                  />
                </div>
              );
            })}
    </section>
  )
}

export default Skills