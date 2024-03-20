/* import React from 'react'
import Link from 'next/link';
import Hero from './Hero';
import Test3 from './Test3';
import { motion } from 'framer-motion';
const AllToChildren = () => {
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
    return (
        <>
            <Test3>
                <div className='w-full min-h-screen pt-3'>
                    <motion.div
                        variants={container}
                        initial='hidden'
                        animate='visible'
                        className='w-full flex flex-col items-center gap-3'
                    >
                        <Link href={"/"} >Menu</Link>
                        <motion.p
                            className=' w-[50%] h-9 bg-[#bd4343]'
                            variants={nextMotionItems}
                            whileHover={{ scale: 1.1, originX: 0, color: 'blue' }}
                        >Parasdhjasbdhjbashdjbasbhdhasd</motion.p>
                        <motion.p
                            className='w-[50%] h-9 bg-[#373797]'
                            variants={nextMotionItems}
                            whileHover={{ scale: 1.1, color: 'blue' }}
                        >Parasdhjasbdhjbashdjbasbhdhasd</motion.p>
                    </motion.div>
                    <Hero />
                    <div className='w-full h-[350px]'>
                    </div>
                    <div className='w-full h-[450px]'>
                       
                    </div>
                </div>
            </Test3>
        </>
    )
}

export default AllToChildren */