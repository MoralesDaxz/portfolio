'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { Aside } from './Aside'
import Image from 'next/image'
import { container } from '@/utils/motionVariables'

/* const container = {
    hidden: {
        opacity: 0,
        y: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
}
const nextMotionItems = {
    hidden: {
        opacity: 0,
        x: 0
    },
    visible: {
        opacity: 1,
        x: 80,
        transition: {
            type: 'spring',
            delay: 0.5,
            stiffness: 300
        },
    }
} */
const NavBar = () => {
    const route = [
        { link: '/proyectos', title: 'Proyectos' },
        { link: '/habilidades', title: 'Habilidades' },
        { link: '/contacto', title: 'Contacto' },
    ]

    const styleMD = 'z-10 w-full fixed top-2 py-6 flex justify-center items-start sm:gap-10 md:gap-20'
    const [controlWidth, setControlWidth] = useState('')
    const [closeModal, setCloseModal] = useState(true)
    const [bgNavBar, setBgNavBar] = useState(false)
    const checkWidthDisplay = () => {
        return window.innerWidth < 640 ? setControlWidth('SM') : setControlWidth('MD')
    }
    const checkScrollDisplay = () => {
        return window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false)
    }

    useEffect(() => {
        checkScrollDisplay()
        checkWidthDisplay()

        window.addEventListener('resize', () => checkWidthDisplay())
        window.addEventListener('scroll', () => checkScrollDisplay())
        return (
            window.removeEventListener('resize', () => checkWidthDisplay()),
            window.removeEventListener('scroll', () => checkScrollDisplay())
        )
    }, [])

    return (
        < >
            {controlWidth === 'MD' ?
                <motion.div
                    className={bgNavBar ? `z-20 bg-[#02171fad] py-4 backdrop-blur-sm ${styleMD}` : styleMD}
                    variants={container}
                    initial={'hidden'}
                    animate={'visible'}>
                    <Link className='absolute top-[25%] left-8 z-20' href={'/'}>
                        <Image priority src={'https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png'} width={40} height={40} alt='logo' title='logo' />
                    </Link>
                    {route.map((item, index) => { return <Link className=' text-base sm:text-lg lg:text-xl font-medium shadow-bottom transition-all duration-400 text-[white] opacity-80 hover:opacity-100 hover:bg-bondiBlue-950 z-10 rounded-md border-[3px] border-blue-200  hover:border-blue-100 px-5 py-4 cursor-pointer' key={index} href={item.link}>{item.title}</Link> })}
                </motion.div> :
                <Aside closeModal={closeModal} controlWidth={controlWidth} setCloseModal={setCloseModal} />}
        </>
    )
}

export default NavBar