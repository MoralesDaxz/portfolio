import React, { FC, ReactElement, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { MdLibraryAdd } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
type Prop = {
    title?: string,
    classTag?: string,
    children?: ReactElement,
}

const TagSkill: FC<Prop> = ({ title, classTag, children }) => {

    const iconTag = title == 'React' ? <FaReact size={'1.2rem'} color='#0a7994' /> : 
    title == 'TailwindCSS' ? <SiTailwindcss size={'1.2rem'} color='#38BDF8' /> : 
    title == 'Api' ? <FaGear size={'1.2rem'} color='#94A3B8' /> : 
    title == 'JavaScript' ? <DiJavascript size={'1.2rem'} color='#EFD81D' />: 
    title == 'HTML' ? <IoLogoHtml5 size={'1.2rem'} color='#DD4B25'/>:
    title == 'CSS' ? <DiCss3 size={'1.2rem'} color='#0068BA'/>:
    title == 'Library' ? <MdLibraryAdd size={'1.2rem'} color='#94A3B8'/>:
    title == 'Typescript' ? <TbBrandTypescript size={'1.2rem'} color='#2F74C0'/>:''


    return (
        <>
            <span className={`text-bondiBlue-500 flex items-center gap-1 text-[.7rem] sm:text-[.9rem] lg:text-[1rem] ${classTag}`}>
                {iconTag}
                {children}
                {title}
            </span>
        </>
    )
}
export default TagSkill