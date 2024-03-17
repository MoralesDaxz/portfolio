import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, ReactElement } from 'react'
type Elements = {
    children?: ReactElement
}
const Test3: FC<Elements> = ({ children }) => {
const variants = {
    hidden:{
        opacity: 0, y: 15
    },
    visible:{
        opacity: 1, y: 0
    }
}
    return (
        <div>
            <AnimatePresence >
                <motion.div
                    className='w-full flex flex-col justify-center items-center'
                    variants={variants}
                    initial=''
                    transition={{ delay: 1 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Test3