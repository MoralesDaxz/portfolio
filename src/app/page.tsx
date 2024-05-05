'use client'
import "./globals.css";
import React from 'react'
import Landing from '@/components/Landing'
import BackgroundStars from "@/components/BackgroundStars";
import { ControlDisplayProvider } from "@/context/ControlDisplay";

const Home = () => {
  return (
      <main>
        <BackgroundStars />
        <Landing />
      </main>
    
  )
}

export default Home