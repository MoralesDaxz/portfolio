'use client'

import { ControlDisplayProvider } from '@/context/ControlDisplay'
import React, { FC, ReactNode } from 'react'
import NavBar from './NavBar'
import { Footer } from './Footer'

const App:FC <{ children: React.ReactNode }>= ({children}) => {
    return (
            <ControlDisplayProvider>
                <NavBar />
                {children}
                <Footer />
            </ControlDisplayProvider>
    )
}

export default App