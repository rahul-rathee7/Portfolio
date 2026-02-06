'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ExperienceSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const customVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const experiences = [
        {
            role: "Full Stack Intern",
            company: "Geeta Technical Hub",
            period: "June – August 2025",
            description: "Designed and implemented full-stack web applications using modern technologies.",
            highlights: [
                "Built full-stack applications with Next.js, React, Node.js, and MongoDB",
                "Designed and implemented REST APIs with proper authentication and CRUD operations",
                "Worked in agile environment with sprint cycles and code reviews",
                "Implemented responsive UI components and optimized database queries",
            ],
        },
    ]

    const education = [
        {
            school: "Geeta University, Panipat",
            degree: "B.Tech in Computer Science & Engineering",
            period: "2022 – 2026",
            highlights: [
                "Core subjects: Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development",
                "Strong foundation in system design and software architecture",
            ],
        },
    ]

    const leaderships = [
        {
            title: "Coordinator - HACKFORGE Hackathon",
            description: "Led hackathon coordination, demonstrating organizational and leadership skills."
        },
        {
            title: "2nd Place – Typing Competition (YUGANTRAN Techfest)",
            description: "Demonstrated discipline, focus, and commitment to excellence in competitive environment."
        }
    ]

    return (
        <section id="experience" className="py-20 md:py-50 experience-section">
            <motion.div
                ref={ref}
                variants={customVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <motion.h2
                    variants={itemVariants}
                    className='text-4xl text-center md:text-6xl md:text-left font-bold'>
                    Experience & Education
                </motion.h2>
                <motion.div
                    variants={itemVariants}>
                        <h3 className='text-2xl text-center md:text-4xl md:text-left md:font-semibold mt-20'>Experience</h3>
                        <motion.div>
                            {experiences.map((item, index) => (
                                <div key={index} className='border-l-2 py-3 pl-4 md:pl-10 mb-10 mt-10 flex flex-col'>
                                    <h4 className='text-xl md:text-2xl font-semibold'>{item.role}</h4>
                                    <div className='mt-3 flex justify-between items-center'>
                                    <p className='md:text-lg font-light'>{item.company}</p>
                                    <p className='text-sm md:text-lg text-[#8e8e8f]'>{item.period}</p>
                                    </div>
                                    <p className='md:text-lg py-3'>{item.description}</p>
                                    <ul className='text-sm md:text-lg list-disc ml-4 text-[#8e8e8f]'>
                                        {item.highlights.map((point, idx) => (
                                            <li key={idx} className='py-1'>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                </motion.div>
                <motion.div
                    variants={itemVariants}>
                        <h3 className='text-2xl text-center md:text-4xl md:text-left mt-20 md:font-semibold'>Education</h3>
                        <motion.div>
                            {education.map((item, index) => (
                                <div key={index} className='border-l-2 py-3 pl-4 md:pl-10 mb-10 mt-10'>
                                    <h4 className='text-xl md:text-2xl font-semibold'>{item.degree}</h4>
                                    <div className='mt-3 flex justify-between items-center'>
                                    <p className='md:text-lg font-light'>{item.school}</p>
                                    <p className='text-sm md:text-lg text-[#8e8e8f]'>{item.period}</p>
                                    </div>
                                    <ul className='text-sm md:text-lg list-disc ml-4 text-[#8e8e8f] py-3'>
                                        {item.highlights.map((point, idx) => (
                                            <li key={idx} className='py-1'>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                </motion.div>
                <motion.div
                    variants={itemVariants}>
                        <h3 className='text-2xl text-center md:text-4xl md:text-left mt-20 md:font-semibold'>Leadership & Achievements</h3>
                        <motion.div>
                            {leaderships.map((item, index) => (
                                <div key={index} className='border-l-2 py-3 pl-4 md:pl-10 mb-10 mt-10'>
                                    <h4 className='text-xl md:text-2xl'>{item.title}</h4>
                                    <p className='text-[#8e8e8f] py-1'>{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}