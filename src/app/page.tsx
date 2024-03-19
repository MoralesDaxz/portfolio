'use client'
import "./globals.css";
import React from 'react'
import Hero from '@/components/Hero'
import { AnimatePresence } from 'framer-motion'
import BackgroundStars from "@/components/BackgroundStars";

const Home = () => {
  return (
  <main>
    <AnimatePresence>
      <BackgroundStars />
      <Hero />
    </AnimatePresence>
  </main>
  )
}

export default Home