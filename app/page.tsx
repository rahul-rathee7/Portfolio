'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from 'motion/react'
import { HeroSection } from '@/components/sections/heroSection'
import { AboutSection } from '@/components/sections/aboutSection'
import { ContactSection } from '@/components/sections/contactSection'
import { SkillSection } from '@/components/sections/skillSection'
import { ProjectSection } from '@/components/sections/projectSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'


export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <div className='h-full font-[Alegreya] md:w-4/7 px-4 md:px-0 mx-auto'>
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-[3px] bg-white origin-left z-50"
      />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}