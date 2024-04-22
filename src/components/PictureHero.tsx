import Image from 'next/image';
import React, { useState } from 'react';
import pic from '../assets/Morales.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
const PictureHero = () => {
  const [modalPic, setModalPic] = useState(false)
  const modalClass = 'modalPic transition-all duration-1000 absolute top-12 sm:top-14 left-[72%] sm:left-[80%] md:left-[70%]  h-[150px] w-[100px] flex flex-col items-center justify-around'
  return (
    <div>
      <Image
        onClick={() => setModalPic(!modalPic)}
        src={pic} width={0} height={0} alt='pic'
        title='foto'
        className='mainPic w-[150px] rounded-full shadow-lg shadow-bondiBlue-400 border-4 border-bondiBlue-900' />
      <div className={modalPic ? modalClass : `${modalClass} opacity-0 w-0`}>
        <Link href={'https://github.com/MoralesDaxz'} target='_blank'>
          <FaGithub className='h-[30px] w-full' />
        </Link>
        <Link href={'https://www.linkedin.com/in/alfredo-jose-morales-ramirez-6b664b1a7/'} target='_blank'>
          <FaLinkedin className='h-[30px] w-full' />
        </Link>



      </div>
    </div>



  )
}

export default PictureHero