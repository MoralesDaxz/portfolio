import React, { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { MdLibraryAdd } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";

type Prop = {
    title?: string,
    classTag?: string,
    children?: ReactElement,
    sizeImg?: string
    state?: boolean
    setState?: React.Dispatch<React.SetStateAction<boolean | undefined>> |undefined
}

const TagSkill: FC<Prop> = ({ title, classTag, children, setState, state, sizeImg = '1.2rem' }) => {

    const iconTag = title == 'React' ? <FaReact size={sizeImg} color='#0a7994' /> :
        title == 'TailwindCSS' ? <SiTailwindcss size={sizeImg} color='#38BDF8' /> :
            title == 'Api' ? <FaGear size={sizeImg} color='#94A3B8' /> :
                title == 'JavaScript' ? <DiJavascript size={sizeImg} color='#EFD81D' /> :
                    title == 'HTML' ? <DiHtml5 size={sizeImg} color='#DD4B25' /> :
                        title == 'CSS' ? <DiCss3 size={sizeImg} color='#0068BA' /> :
                            title == 'Typescript' ? <TbBrandTypescript size={sizeImg} color='#2F74C0' /> :
                                title == 'Library' || 'Libraries' ? <MdLibraryAdd size={sizeImg} color='#94A3B8' /> :
                                    ''


    return (
        <div onClick={() => setState(!state)} className={`flex gap-1 text-[.7rem] sm:text-[.9rem] lg:text-[1rem] ${classTag}`}>
            {iconTag}
            {children}
            <p>title</p>
        </div>
    )
}
export default TagSkill