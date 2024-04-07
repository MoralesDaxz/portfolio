import Image from 'next/image'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

type Prop = {
    ruteProject: string,
    title: string,
    srcImg: string,
    altImg: string,
    par: string,
    children: ReactNode,
}
const CardProject: FC<Prop> = ({ ruteProject, title, srcImg, altImg, children, par }) => {
    return (
        <>
            <Link href={ruteProject} target='_blank' className='flex flex-col gap-3 items-center justify-between w-[50%] sm:w-[30%] border-2 border-bondiBlue-900 hover:border-bondiBlue-500 hover:shadow-bondiBlue-800 hover:shadow-lg p-1 rounded-md transition-all duration-700'>
                <h2 className='text-center text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] font-medium text-bondiBlue-500'>{title}</h2>
                <div className=' h-auto w-[90%] flex justify-center'>
                    <Image
                        priority
                        className='w-auto  rounded opacity-90 hover:scale-105 hover:opacity-100 transition-all duration-700'
                        width={500} height={500}
                        alt={altImg}
                        src={srcImg} />
                </div>
                <p className='font-extralight text-[.8rem] sm:text-[1rem] lg:text-[1.1rem] h-[120px] overflow-y-auto w-[90%] border-b-2 border-b-bondiBlue-700'>{par}</p>
                <div className='w-full flex-wrap sm:flex sm:justify-evenly'>
                    {children}
                </div>
            </Link>
        </>
    )
}

export default CardProject