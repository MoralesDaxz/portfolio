'use client'
import "./globals.css";
import React from 'react'
import Hero from '@/components/Hero'
import { AnimatePresence } from 'framer-motion'
import BackgroundStars from "@/components/BackgroundStars";

const Home = () => {
  return (
  <main>

      <BackgroundStars />
      <Hero />
  
  </main>
  )
}

export default Home