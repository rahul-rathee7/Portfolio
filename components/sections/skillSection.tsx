'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export function SkillSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const customVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2} }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}
    }

    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion', 'TypeScript']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Database Design', 'Authentication & Authorization', 'json Web Tokens (JWT)']
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Clerk', 'Vercel', 'Netlify']
        },
        {
            title: 'Other',
            skills: ['SEO Optimization', 'Responsive Design', 'Performance Optimization', 'Problem-Solving']
        }
    ]

   return (
    <section id="skills" className="py-20 md:py-50 skill-section">
        <motion.div 
            ref={ref}
            variants={customVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <motion.h2
                variants={itemVariants}
                className='text-4xl text-center md:text-6xl md:text-left font-bold'>
                Skills
            </motion.h2>
            <div className='grid md:grid-cols-2 gap-12 mt-10'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={index}
                        className="mt-10 text-center md:text-left"
                    >
                        <h3 className="text-2xl md:text-6xl font-semibold">{category.title}</h3>
                        <div className='grid grid-cols-2 md:grid-cols-1 mt-10'>
                        {category.skills.map((skill, idx) => (
                            <p key={idx} className="text-md md:text-2xl font-light text-background mt-2 border-2 border-foreground rounded-md md:px-4 md:py-2 bg-muted-foreground/9 hover:border-background m-5 transition-colors">{skill}</p>
                        ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
   )
}