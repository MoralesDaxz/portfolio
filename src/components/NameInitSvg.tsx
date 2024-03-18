import React from 'react'
import { motion } from 'framer-motion';

const NameInitSvg = () => {
  const svg = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  const pathSvg = {

    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
        ease: 'easeInOut'
      },

    }
  }

  return (
      <div className='w-20 h-20'>
        <motion.svg
          variants={svg}
          initial='hidden'
          animate='visible'
          width="auto"
          height="auto"
          viewBox="0 0 256 176"
          version="1.1"
        >

          <g fill="#000">
            <motion.path stroke="#FFF" stroke-width={2} d="M147.486878,0 C147.486878,0 217.568251,175.780074 217.568251,175.780074 C217.568251,175.780074 256,175.780074 256,175.780074 C256,175.780074 185.918621,0 185.918621,0 C185.918621,0 147.486878,0 147.486878,0 C147.486878,0 147.486878,0 147.486878,0 Z"
              variants={pathSvg} initial='hidden' animate='visible' />
            <motion.path stroke="#FFF" stroke-width={2} d="M66.1828124,106.221191 C66.1828124,106.221191 90.1624677,44.4471185 90.1624677,44.4471185 C90.1624677,44.4471185 114.142128,106.221191 114.142128,106.221191 C114.142128,106.221191 66.1828124,106.221191 66.1828124,106.221191 C66.1828124,106.221191 66.1828124,106.221191 66.1828124,106.221191 Z M70.0705318,0 C70.0705318,0 0,175.780074 0,175.780074 C0,175.780074 39.179211,175.780074 39.179211,175.780074 C39.179211,175.780074 53.5097704,138.86606 53.5097704,138.86606 C53.5097704,138.86606 126.817544,138.86606 126.817544,138.86606 C126.817544,138.86606 141.145724,175.780074 141.145724,175.780074 C141.145724,175.780074 180.324935,175.780074 180.324935,175.780074 C180.324935,175.780074 110.254409,0 110.254409,0 C110.254409,0 70.0705318,0 70.0705318,0 C70.0705318,0 70.0705318,0 70.0705318,0 Z" variants={pathSvg} initial='hidden' animate='visible' />
          </g>
        </motion.svg>
      </div>
  )
}

export { NameInitSvg }