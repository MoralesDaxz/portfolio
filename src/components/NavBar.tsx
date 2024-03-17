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

    const styleMD = 'fixed rounded-xl border border-blue-950 h-auto flex justify-around gap-10 mt-5 py-3 px-3'
    const styleHidden = 'hidden'
    const [controlWidth, setControlWidth] = useState('')
    const [closeModal, setCloseModal] = useState(true)

    const checkDisplay = () => {
        return window.innerWidth < 640 ? setControlWidth('SM') : setControlWidth('MD')
    }

    useEffect(() => {
        checkDisplay()
        window.addEventListener('resize', () => checkDisplay())
        return window.removeEventListener('resize', () => checkDisplay())
    }, [])

    return (
        < >
            <AnimatePresence>
                <Link className='absolute top-3 left-3 z-10' href={'/'}>
                    <Image priority src={'https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png'} width={30} height={30} alt='menu' />
                </Link>
                {controlWidth === 'MD' ?
                    <motion.div
                        className={styleMD}
                        variants={container}
                        initial={'hidden'}
                        animate={'visible'}
                    >
                        {route.map((item, index) => { return <Link key={index} href={item.link}>{item.title}</Link> })}
                    </motion.div> : <Aside closeModal={closeModal} setCloseModal={setCloseModal} />}
            </AnimatePresence>
        </>
    )
}

export default NavBar