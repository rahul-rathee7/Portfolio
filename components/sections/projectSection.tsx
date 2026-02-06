'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, GithubIcon, ExternalLink } from 'lucide-react'

export function ProjectSection() {
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

    const projects = [
        {
            title: "Event Management System",
            status: "Live",
            description: "Full-stack event creation and registration platform with secure APIs and efficient database design.",
            problem: "Need for a comprehensive solution to manage events, registrations, and participant data.",
            solution:
                "Built a complete event management system with role-based access, real-time updates, and secure data handling.",
            tech: ["Next.js", "TailwindCSS", "ShadCN UI", "Node.js", "Express.js", "MongoDB"],
            features: [
                "Event CRUD operations",
                "User registration system",
                "Secure payment integration",
                "Admin dashboard",
                "Email notifications",
            ],
            highlights:
                "Designed responsive UI with ShadCN components and built scalable REST APIs with proper authentication.",
            liveUrl: "https://event-mangement-system-one.vercel.app/",
            githubUrl: "https://github.com/rahul-rathee7/Event-Mangement-System.git",
        },
        {
            title: "Job Portal",
            status: "Completed",
            description: "Job posting, applications, and authentication system with REST APIs and responsive frontend.",
            problem: "Job seekers needed a centralized platform to find opportunities employers needed to post jobs.",
            solution: "Developed a two-sided marketplace with job listings, application tracking, and user authentication.",
            tech: ["React", "Express.js", "MongoDB", "TailwindCSS"],
            features: [
                "Job search and filtering",
                "Application tracking",
                "User profiles",
                "Email notifications",
                "Admin panel",
            ],
            highlights: "Implemented JWT authentication and designed an intuitive UI for both job seekers and employers.",
            liveUrl: "#",
            githubUrl: "https://github.com/rahul-rathee7/Job-Portal.git",
        },
        {
            title: "Portfolio",
            status: "Live",
            description: "SEO-optimized portfolio website showcasing projects and experience.",
            problem: "Need to showcase technical work to recruiters and hiring managers effectively.",
            solution: "Built a modern, fast-loading portfolio with smooth animations and comprehensive project case studies.",
            tech: ["Next.js", "TailwindCSS", "Framer Motion"],
            features: [
                "SEO optimization",
                "Smooth animations",
                "Responsive design",
                "Project case studies",
                "Contact integration",
            ],
            highlights: "Optimized for performance with Lighthouse scores and accessibility best practices.",
            liveUrl: "#",
            githubUrl: "https://github.com/rahul-rathee7/Portfolio.git",
        },
    ]

    return (
        <section id="projects" className="py-20 md:py-50 project-section">
            <motion.div
                variants={customVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                ref={ref}
            >
            <motion.h2
                className='text-5xl text-center md:text-6xl md:text-left font-bold mb-10'>
                Projects
            </motion.h2>
            <motion.div
                variants={itemVariants}
                className='mt-20'
            >
                {projects.map((project, index) => (
                    <div key={index} className='my-20 border-l-2 pl-4 md:pl-10 border-background flex flex-col gap-4'>
                        <div>
                        <h3 className='text-2xl md:text-4xl font-bold'>{project.title}</h3>
                        <p className='text-sm mt-2 md:text-lg text-[#8e8e8f]'>{project.status}</p>
                        </div>
                        <p className='text-xl md:text-2xl'>{project.description}</p>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                            <h4 className='text-xl md:text-2xl mt-4'>PROBLEM</h4>
                            <p className='md:text-2xl py-2 text-[#8e8e8f]'>{project.problem}</p>
                            </div>
                            <div className='flex flex-col'>
                            <h4 className='text-xl md:text-2xl mt-4'>SOLUTION</h4>
                            <p className='md:text-2xl py-2 text-[#8e8e8f]'>{project.solution}</p>
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='text-xl md:text-2xl mt-4'>KEY FEATURES</h4>
                            <div className='grid md:grid-cols-2 gap-4 mt-3'>
                                {project.features.map((feature, idx) => (
                                    <p key={idx} className='md:text-xl text-[#8e8e8f] flex items-center gap-2'><ArrowRight strokeWidth={1} /> {feature}</p>
                                ))} 
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl mt-4'>HIGHLIGHTS</h4>
                            <p className='md:text-xl py-2 text-[#8e8e8f]'>{project.highlights}</p>
                        </div>
                        <div className='grid grid-cols-2 md:flex md:gap-2'>
                        {
                            project.tech.length > 0 && (
                                project.tech.map((tech, idx) => (
                                    <span key={idx} className='border-gray-800 text-[#8e8e8f] font-light border-1 rounded-xl px-3 my-2 w-fit'>{tech}</span>
                                ))
                            )
                        }
                        </div>
                        <hr className='mt-3 border-muted-foreground/40'/>
                        <div className='flex gap-10 mt-4'>
                            <a href={project.liveUrl} target="_blank" className='md:text-xl flex items-center gap-2 hover:opacity-80 rounded-full'>Live Site <ExternalLink size={20}/></a>
                            <a href={project.githubUrl} target="_blank" className='md:text-xl flex items-center gap-2 hover:opacity-80 rounded-full'>GitHub Repo <GithubIcon size={20}/></a>
                        </div>
                    </div>
                ))}
            </motion.div>
            </motion.div>
        </section>
    )
}