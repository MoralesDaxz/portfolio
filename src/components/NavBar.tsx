'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { Aside } from './Aside'
import Image from 'next/image'

const container = {
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
}
const NavBar = () => {
    const route = [
        { link: '/proyectos', title: 'Proyectos' },
        { link: '/contacto', title: 'Contacto' },
        { link: '/habilidades', title: 'Habilidades' },]

    const styleMD = 'z-10 w-full fixed top-0 py-4 flex justify-center items-start gap-20'
    const [controlWidth, setControlWidth] = useState('')
    const [closeModal, setCloseModal] = useState(true)
    const [bgNavBar, setBgNavBar] = useState(false)
    const checkWidthDisplay = () => {
        return window.innerWidth < 640 ? setControlWidth('SM') : setControlWidth('MD')
    }
    const checkScrollDisplay =()=>{
        if (window.scrollY > 40) {
          return  setBgNavBar(true);
          } else {
           return setBgNavBar(false);
          }
    }

    useEffect(() => {
        checkScrollDisplay()
        checkWidthDisplay()
        window.addEventListener('resize', () => checkWidthDisplay())
        window.addEventListener('scroll', () => checkScrollDisplay())
        return (
            window.removeEventListener('resize', () => checkWidthDisplay()),
            window.removeEventListener('resize', () => checkScrollDisplay())
            )
    }, [])

    return (
        < >
            <Link className='absolute top-3 left-3 z-20' href={'/'}>
                <Image priority src={'https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png'} width={40} height={40} alt='logo' title='logo' />
            </Link>
            {controlWidth === 'MD' ?
                <motion.div
                    className={bgNavBar?`bg-[#02171fad] py-4 backdrop-blur-sm ${styleMD}`:styleMD}
                    variants={container}
                    initial={'hidden'}
                    animate={'visible'}>
                    {route.map((item, index) => { return <Link className='text-base font-semibold shadow-bottom transition-all duration-400 text-bondiBlue-100 hover:bg-bondiBlue-950 z-10 rounded-md border-2 border-blue-200 px-5 py-4 cursor-pointer' key={index} href={item.link}>{item.title}</Link> })}
                </motion.div> :
                <Aside closeModal={closeModal} setCloseModal={setCloseModal} />}
        </>
    )
}

export default NavBar