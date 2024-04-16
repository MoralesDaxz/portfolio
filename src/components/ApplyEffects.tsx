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
    return (
        <div ref={container}>
            {children}
        </div>
    )
}

export default ApplyEffects