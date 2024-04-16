'use client'
import React, { FC, ReactElement, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
type Props = {
    children?:  React.ReactNode
}
const ApplyEffects: FC<Props> = ({ children }) => {
    const container = useRef(null)
    useGSAP(() => {
        gsap.fromTo(".box", { opacity: 0, y: 33}, { opacity: 1, y: 0,stagger:0.4 })
      }, { scope: container }); // <-- magic;
    return (
        <div className='w-full' ref={container}>
            {children}
        </div>
    )
}

export default ApplyEffects