'use client'
import "./globals.css";
import React from 'react'
import Hero from '@/components/Hero'
import BackgroundStars from "@/components/BackgroundStars";
import { ControlDisplayProvider } from "@/context/ControlDisplay";

const Home = () => {
  return (
      <main>
        <BackgroundStars />
        <Hero />
      </main>
    
  )
}

export default Home