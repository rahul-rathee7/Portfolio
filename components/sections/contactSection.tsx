'use client'
import { motion } from 'framer-motion'
import { label } from 'motion/react-client'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export function ContactSection() {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    const customVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2,
       }},
    }
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    }

    const contactLinks = [
      {
        label: 'Email',
        href: 'mailto:ratheerahul602@gmail.com',
        value: 'ratheerahul602@gmail.com',
        icon: Mail
      },
      {
        label: 'Phone',
        href: 'tel:+917988509202',
        value: '+91 79885 09202',
        icon: Phone
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rahul-rathee7/',
        value: 'linkedin.com/in/rahul-rathee7',
        icon: Linkedin
      },
      {
        label: 'GitHub',
        href: 'https://github.com/rahul-rathee7',
        value: 'github.com/rahul-rathee7',
        icon: Github
      }
    ]
  
    return (
    <section id="contact" className="contact-section">
      <motion.div
        ref={ref}
        variants={customVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2
          variants={itemVariants}
          className='text-6xl font-semibold'
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 py-5 text-lg max-w-2xl text-[#8e8e8f]"
        >
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you&apos;d like to discuss how I can help with your next web development project.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className='grid grid-cols-2 py-10'>
            {
              contactLinks.map((contact) => (
                <motion.a 
                  key={contact.label}
                  href={contact.href} 
                  className="group flex mt-6 border-1 w-11/12 p-8 transition-colors duration-300 border-white/10 hover:border-white rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon className="mr-4 group-hover:scale-125 transition-transform duration-300 ease-in-out" />
                  <div className='flex flex-col'>
                  <span className="font-medium text-[#8e8e8f]">{contact.label}</span>
                  <span className="text-lg font-semibold">{contact.value}</span>
                  </div>
                </motion.a>
              ))
            }
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-[#8e8e8f]"
          >
          <p>© 2025 Rahul Rathee. Built with Next.js, TailwindCSS, and Framer Motion.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}