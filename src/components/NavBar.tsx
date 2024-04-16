'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Aside } from './Aside'
import Image from 'next/image'


const NavBar = () => {
    const route = [
        { link: '#projects', title: 'Proyectos' },
        { link: '/habilidades', title: 'Habilidades' },
        { link: '/contacto', title: 'Contacto' },
    ]

    const styleMD = 'z-10 w-full fixed top-0 py-2 flex justify-center items-start sm:gap-10 md:gap-20'

    const [controlWidth, setControlWidth] = useState('')
    const [closeModal, setCloseModal] = useState(true)
    const [bgNavBar, setBgNavBar] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)


    /*  useEffect(() => {
         window.addEventListener('resize', () => window.innerWidth < 640 ? setControlWidth('SM') : setControlWidth('MD'))
         window.addEventListener('scroll', () => window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false))
         return ()=>{
             window.removeEventListener('resize', () => window.innerWidth < 640 ? setControlWidth('SM') : setControlWidth('MD')),
             window.removeEventListener('scroll', () => window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false))
         }
     }) */
    useEffect(() => {

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            const handleScroll = () => {
                window.scrollY > 40 ? setBgNavBar(true) : setBgNavBar(false)
            }
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        < >
            {windowWidth > 640 ?
                <div className={bgNavBar ? `z-20 bg-[#02171fad] py-2 backdrop-blur-sm ${styleMD}` : styleMD} >
                    <Link className='absolute top-[25%] left-8 z-20' href={'/'}>
                        <Image priority src={'https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png'} width={40} height={40} alt='logo' title='logo' />
                    </Link>
                    {route.map((item, index) => { return <Link className=' text-base sm:text-lg lg:text-xl font-medium transition-all duration-700 text-[white] opacity-80 hover:opacity-100 hover:bg-bondiBlue-950 z-10 rounded-md border-[3px] border-bondiBlue-900 hover:border-bondiBlue-500  hover:shadow-md hover:shadow-bondiBlue-800 px-5 py-3' key={index} href={item.link}>{item.title}</Link> })}
                </div> :
                <Aside closeModal={closeModal} controlWidth={controlWidth} setCloseModal={setCloseModal} />}
        </>
    )
}

export default NavBar