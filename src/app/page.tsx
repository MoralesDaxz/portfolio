'use client'
import "./globals.css";
import React from 'react'
import Hero from '../components/Hero'
import { AnimatePresence } from 'framer-motion'
import BackgroundStars from "@/components/BackgroundStars";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <BackgroundStars />
      <AnimatePresence>
        <Hero />
      </AnimatePresence>

    </div>

  )
}

export default Page