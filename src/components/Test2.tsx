'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React, { FC, ReactElement } from 'react'
import Hero from './Hero'
import Link from 'next/link'
type Elements = {
    children?: ReactElement
}
const Test2: FC<Elements> = () => {
    return (
        <AnimatePresence >
            <motion.div
                className='w-full flex flex-col justify-center items-center'
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 1 }}
            >
               <Link href={'/'}>Main</Link>
      <div className='w-full min-h-screen bg-[#6aac3e]'>
        Aqui 1
      l</div>
      <div className='w-full min-h-screen bg-[#3eaca7]'>
        Aqui 1
      </div>
      <div className='w-full min-h-screen bg-[#453eac]'>
        Aqui 1
      </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Test2