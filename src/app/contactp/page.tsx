'use client'
import { AnimatePresence } from 'framer-motion';
import Test3 from '@/components/Test3'
import React from 'react'
import AllToChildren from '@/components/AllToChildren';

const page = () => {
  return (
    <div className='w-full h-[screen]'>
     <AllToChildren></AllToChildren>
    </div>
  )
}

export default page
