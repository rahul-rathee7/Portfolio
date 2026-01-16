'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const customVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="about-section py-20 md:py-50">
      <motion.div
        ref={ref}
        variants={customVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className='text-6xl font-bold'
          >
          About Me
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-10 text-2xl mt-15'>
          <motion.div
            variants={itemVariants}>
            <p className='text-2xl font-light text-background'>I&apos;m a full-stack developer passionate about building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I focus on creating solutions that are not just functional, but also elegant and performant.</p><br />
            <p className='text-2xl font-light text-background'>My approach combines clean code architecture with user-centric design. I enjoy the entire development
                lifecycle—from conceptualizing features to deploying and maintaining systems in production.</p>
          </motion.div> 
          <motion.div
            variants={itemVariants}>
              <p className='text-2xl font-light text-background'>I&apos;m currently pursuing my B.Tech in Computer Science and Engineering at Geeta University, where I&apos;ve built a strong foundation in data structures, algorithms, and software design principles.</p>
              <br />
              <p className='text-2xl font-light text-background'>As a full-stack intern, I&apos;ve worked on building real-world applications using modern tech stacks, implementing REST APIs, and designing responsive user interfaces that solve actual problems.</p>
          </motion.div> 
        </div>
      </motion.div>
    </section>
  )
}