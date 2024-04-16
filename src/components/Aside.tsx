import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useState  } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import Image from 'next/image';
type Props = {
    closeModal: boolean,
    controlWidth:string,
    setCloseModal: Dispatch<SetStateAction<boolean>>
}
const Aside: FC<Props> = ({ closeModal, controlWidth, setCloseModal }) => {
    const [chooseLink, setChooseLink] = useState('')
    const route = [
        { link: '/proyectos', title: 'Proyectos' },
        { link: '/contacto', title: 'Contacto' },
        { link: '/habilidades', title: 'Habilidades' },]

    const styleSM = 'bgGradient absolute text-bondiBlue-50 w-full z-20 h-screen top-0 flex flex-col justify-around items-center gap-4 py-3 px-3 '
    const classLinkActive = 'text-2xl font-light text-[white] opacity-80 hover:opacity-100 '
    return (
      
         <>
                {closeModal && controlWidth === 'SM'  ?
                <div className='w-full absolute top-0 flex items-center justify-between py-5 px-5'>
                    <Link className='' href={'/'}>
                        <Image priority src={'https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png'} width={40} height={40} alt='logo' title='logo' />
                    </Link>
                    <Image priority className='opacity-80 z-10' onClick={() => setCloseModal(false)}  src={menu} color='#ebffff' width={40} height={40} alt='menu'/>
                </div>
                 :<div className={styleSM}>
                    <Image className='absolute top-3 right-3 cursor-pointer' onClick={() => setCloseModal(true)} src={close} width={30} height={30} alt='close' title='close'/>
                    {route.map((item, index) => { return <Link 
                    onClick={()=> setChooseLink(item.title)}
                    className={ chooseLink == item.title? classLinkActive  + ' text-bondiBlue-400 font-normal':classLinkActive}
                    key={index} 
                    href={item.link}>{item.title}</Link> })}
                </div> }
         </>
       
    )
}

export { Aside }