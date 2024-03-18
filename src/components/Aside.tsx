import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import Image from 'next/image';
type Props = {
    closeModal: boolean,
    setCloseModal: Dispatch<SetStateAction<boolean>>
}
const Aside: FC<Props> = ({ closeModal, setCloseModal }) => {
console.log(closeModal);

    const route = [
        { link: '/proyectos', title: 'Proyectos' },
        { link: '/contacto', title: 'Contacto' },
        { link: '/habilidades', title: 'Habilidades' },]

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
    const styleSM = 'bgGradient absolute text-bondiBlue-50 w-full z-10 h-screen top-0 flex flex-col justify-around items-center gap-4 py-3 px-3 '
    return (
        <>
            <AnimatePresence>
                {closeModal  ?
                     <Image priority className='absolute top-3 right-3 cursor-pointer z-10' onClick={() => setCloseModal(false)}  src={menu} width={30} height={30} alt='menu'/>
                 :<motion.div
                    className={styleSM}
                    variants={container}
                    initial={'hidden'}
                    animate={'visible'}
                >
                    <Image className='absolute top-3 right-3 cursor-pointer' onClick={() => setCloseModal(true)} src={close} width={30} height={30} alt='close' title='close'/>
                    {route.map((item, index) => { return <Link key={index} href={item.link}>{item.title}</Link> })}
                </motion.div> }
                
            </AnimatePresence>
        </>
    )
}

export { Aside }