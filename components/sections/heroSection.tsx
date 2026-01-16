'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRightIcon, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="md:h-screen mt-20 flex flex-col justify-center">
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
        className="text-4xl font-bold"
      >
        <h1 className='text-8xl font-[900] text-white py-5 pb-10'>Rahul Rathee</h1>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='font-[100] text-[#8E8E8F]'>
        <p className='text-[1.8rem]'>Building scalable web applications with clean code and thoughtful architecture. Passionate about solving real-world problems through modern full-stack development.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      className='flex justify-between md:justify-start md:gap-10'>
        <a href='#projects'><Button size="lg" className='mt-10 bg-white text-black hover:bg-gray-200 border-0 text-2xl'>View Projects<ArrowRightIcon className="ml-2" /></Button></a>
        <a href='#contact'><Button size="lg" className='mt-10 bg-black text-white border-1 text-2xl hover:bg-white hover:text-black'>Get in Touch</Button></a>
      </motion.div>
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <p className='mt-20 text-2xl font-light text-background flex items-center gap-3'>Scroll Down <motion.i animate={{ scaleY: [1, 1.5, 1]}} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}><ArrowDown className='mt-1'/></motion.i> </p>
      </div>
    </div>
  )
}