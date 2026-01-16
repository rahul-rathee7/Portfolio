'use client'

import { motion } from 'framer-motion'
import { title } from 'process'
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
                className='text-6xl font-bold'>
                Skills
            </motion.h2>
            <div className='grid md:grid-cols-2 gap-12 mt-10'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={index}
                        className="mt-10"
                    >
                        <h3 className="text-4xl font-semibold">{category.title}</h3>
                        {category.skills.map((skill, idx) => (
                            <p key={idx} className="text-2xl font-light text-background mt-2 border-2 border-foreground rounded-md px-4 py-2 bg-muted-foreground/9 hover:border-background m-5 transition-colors">{skill}</p>
                        ))}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
   )
}