import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const TypeLetters = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          'Piensa en lo que quieres lograr',
          1500,
          'Desarrolla lo que imaginas con pasion',
          1500,
          'Implementa y perfecciona cada paso',
          1500,
          'Disfruta tus logros, es tú momento!',
          1500
        ]}
        speed={60}
        style={{ fontSize: '1em' }}
        repeat={Infinity}
      />
    </>
  )
}

export { TypeLetters }