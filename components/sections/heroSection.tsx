'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRightIcon, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="md:h-screen mt-5 flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='font-[100] text-[#8E8E8F]'>
        <p className='text-[1.3rem]'>Full Stack Developer / India</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-bold text-center md:text-6xl lg:text-8xl text-white"
      >
        <h1 className='text-6xl md:text-8xl font-[900] text-white py-5 pb-10'>Rahul Rathee</h1>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='font-[100] text-[#8E8E8F]'>
        <p className='text-2xl md:text-[1.8rem] text-center px-4'>Building scalable web applications with clean code and thoughtful architecture. Passionate about solving real-world problems through modern full-stack development.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      className='flex flex-col gap-5 mt-5 items-center md:flex-row md:gap-10'>
        <a href='#projects'><Button size="lg" className='md:mt-10 bg-white text-black hover:bg-transparent hover:text-white hover:border-white border-1 transition duration-300 text-xl md:text-2xl'>View Projects<ArrowRightIcon className="ml-2" /></Button></a>
        <a href='#contact'><Button size="lg" className='md:mt-10 bg-black md:text-white border-1 text-2xl hover:bg-white hover:text-black transition duration-300'>Get in Touch</Button></a>
        <a href='/resume/Rahul_Rathee_Full_Stack_Developer_Resume.pdf' target='_blank' rel='noopener noreferrer'><Button size="lg" className='md:mt-10 bg-white border-1 text-black text-2xl hover:bg-transparent hover:text-white transition duration-300'>Download Resume</Button></a>
      </motion.div>
      <div
        className='absolute bottom-2 left-1/2 -translate-x-1/2'
      >
        <p className='text-2xl font-light text-background flex items-center gap-3'>Scroll Down <motion.i initial={{ y: 0}} animate={{ y: [0, 10, 0]}} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse"}}><ArrowDown className='mt-1'/></motion.i> </p>
      </div>
    </div>
  )
}