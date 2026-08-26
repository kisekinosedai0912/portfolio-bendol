import { useEffect, useState } from "react";
import { ExternalLink, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"
import GeoQuest from '../../assets/img/geoquest.png'
import FretMuse from '../../assets/img/fretmuse.png'
import RAGPRES from '../../assets/img/ragpres.jpg'
import Scheduler from '../../assets/img/scheduler-event.png'
import Metrics from '../../assets/img/metrics-dashboard.png'
import POS from '../../assets/img/product-page.png'
import Gym from '../../assets/img/gym-dashboard.png'
import Chat from '../../assets/img/chat.jpg'
import Laundry from '../../assets/img/laundry.jpg'
import Uplow from '../../assets/img/uplow.png'
import Dahlings from '../../assets/img/dahlings.png'

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
		{
            id: 1,
            title: "Uplow - Media & reputation monitoring for the Icelandic market",
            image: Uplow,
            link: 'https://www.uplow.com/',
            description:
                `A media monitoring system built for Icelandic companies that tracks ads published in various platforms. These platforms
				includes meta, google, podcast & radio channels. It helps the businesses know the latest updates of their competitors,
				giving the business insights and most of all, efficiency of information especially with the built-in AI chat that 
				instantly gives the results you ask.
                `,
            tech: ["Next.Js", "Node Js", "Neon", "Typescript", "Tailwind", "Temporal", "Nx Workspace", "Sentry", "OpenAI Models"],
        },
		{
            id: 2,
            title: "Dahlings SPA & Salon",
            image: Dahlings,
            link: null,
            description:
                `A web system built for Dahlings to improve their marketing services through websites  with a POS & inventory system.
				This system is designed to solve the manual processes of Dahlings giving easier insights on their inventory levels,
				stocks & purchasing transactions. The architecture is designed as microservices that are seamless & scalable following
				modern structures & up to the standard.
                `,
            tech: ["React", "Express Js", "Node Js", "Typescript", "Tailwind", "Postgres SQL", "Redis", "Inngest", "Nx Workspace"],
        },
        {
            id: 3,
            title: "GeoQuest - Gamified Tourism Platform for Escalante City",
            image: GeoQuest,
            link: "https://geoquest-t9s2.onrender.com",
            description:
                `A gamified tourism web app built from React, Express, Nodejs & MongoDB. This platform was built and designed
                 to provide tourists and the townsfolk of Escalante City a unified platform with details of their tourist sites
                 found in the area. It features achievement based on user activity, quizzes and site visits allowing a gamified 
                 concept. The engineering of this web app was designed with MERN stack with OAuth, JWT, Push Notifications and Map
                 features all for better user engagement.
                `,
            tech: ["React", "JavaScript", "Express", "Node Js", "MongoDB", "Firebase", "Google Cloud", "Tailwind"],
        },
        {
            id: 4,
            title: "FretMuse - Open source website platform for beginner guitarists",
            image: FretMuse,
            link: "https://fret-muse.vercel.app",
            description:
                `A personal website intentionhally built to help fellow guitar enthusiasts to level up their guitar skills
                 with provided scale patterns, random note generation for fret memorization and interactive, responsive UI.
                 This website is hosted via Vercel and is available for all users and guitarists.
                `,
            tech: ["React", "JavaScript", "Tailwind", "CSS"],
        },
        {
            id: 5,
            title: "Live Chat App",
            image: Chat,
            link: null,
            description:
                `A simple live chat app built with native html, css, javascript in frontend with express and mongodb for backend.
                 It uses simple authentication system with web socket integration to allow live chatting towards all users available.
                 It is a personal project built to practice web socket integration and showcase my curiosity in developing systems/apps.
                `,
            tech: ["Express", "Node Js", "MongoDB", "Javascript", "HTML", "CSS"],
        },
        {
            id: 6,
            title: "Laundry Management System",
            image: Laundry,
            link: 'https://laundry-management-system-32ft.onrender.com',
            description:
                `A simple Laundry Management System built with React, Expres, Node Js and Tailwind. The data are only stored on JSON files
                 because the primary role of this system is just to demonstrate a solution in a project of a student in their specific
                 subject. It solves a problem found in the area specifically in laundry shops. The simple system was only built for a 
                 project and not implemented yet.
                `,
            tech: [ "React" ,"Express", "Node Js", "JSON", "Javascript", "Tailwind"],
        },
        {
            id: 7,
            title: "RAGPRES - Recycled and Greenery Points Reward Exchange System",
            image: RAGPRES,
            link: null,
            description:
                `A Barangay Community web system built with Laravel, jQuery and Admin LTE plugin to follow a fast development pace.
                 The system was made to give the Barangay Poblacion I of Sagay City, Negros Occidental a software & website that will
                 showcase their recycled products and allow profits of every recycled materials made by the people in the area. It 
                 features recycled materials as its primary asset as well as conducting commmunity campaigns, giving points to every
                 barangay participants and rewards them with points that they can use as well to purchase a product of their choice.
                `,
            tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
        },
        {
            id: 8,
            title: "Web Based Scheduler System with Automated Conflict Resolution",
            image: Scheduler,
            link: null,
            description:
                `A web app built with Laravel, jQuery and Tailwind, to address the manual scheduling process of Sagay City Senior
                 High School during enrollment scheduling to teachers, student's subjects, and classrooms. It features 
                 automated conflict resolution where the system detects if specific teacher schedules is conflicting with other or 
                 their own schedules. It also features and SMS notification for every school calendar events are made or changed to
                 the designated teachers of SCSHS. 
                `,
            tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
        },
        {
            id: 9,
            title: "Student Performance Metrics Management System",
            image: Metrics,
            link: null,
            description:
                `A web system designed and engineered for the needs of Sewahon National High School. It caters account creation automation, 
                 automated grade calculation and rankings. It was built as a collaboration project with a co-developer using native PHP and 
                 jQuery for the development utilizing Github for codebase management, updates and version control. Implemented 4 user role 
                 access such as admin, student, teacher and parent to the system, each with different controls.
                `,
            tech: ["PHP", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
        },
        {
            id: 10,
            title: "Rosejing Secure Inventory and Semi-POS Management System",
            image: POS,
            link: null,
            description:
                `A web system engineered using Laravel, jQuery and MySQL to ensure secure transactions, inventory & sales management
                 throughout every branch of Rosejing Computer Parts Shop. It features barcode generation of products, sales history,
                 delete history, user activity and a built-in POS for staff members during product selling. The system primarily ensures
                 security of the products and accurate inventory status delivering a seamless inventory management and business process.
                `,
            tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
        },
        {
            id: 11,
            title: "Muscle Hub - Gym Membership & Sales Management System",
            image: Gym,
            link: null,
            description:
                `A mockup web system built for Muscle Hub gym in our area. It features gym membership management, sales dashboard,
                 authentication and product selling parts. The implementation of the system is still on hold due to the gym's status
                 of not yet fully paid and will be implemented as soon as the owner contacts to proceed the development.
                `,
            tech: ["PHP", "jQuery", "MySQL", "HTML", "Tailwind", "CSS"],
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen bg-[#0a1411] px-5 py-24 pr-20 sm:px-8 sm:pr-24 lg:px-12 lg:pr-28"
        >
            {/* Title */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/65">
                    Selected work
                </p>
                <h1 className="font-sans text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                    <span className="gradient-text">My Portfolio</span>
                </h1>
            </motion.div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors duration-300 hover:border-emerald-300/25"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: 'easeOut' }}
                    >
                        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0a1210]/88 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-950/35">
                            {/* Media */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* fade the image into the card body */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1210] via-[#0a1210]/10 to-transparent" />

                                {/* status badge */}
                                <span
                                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-jetbrains uppercase tracking-[0.12em] backdrop-blur-md border ${
                                        project.link
                                            ? "bg-emerald-400/15 border-emerald-300/30 text-emerald-200"
                                            : "bg-yellow-500/15 border-yellow-400/30 text-yellow-300"
                                    }`}
                                >
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${
                                            project.link ? "bg-emerald-300 animate-pulse" : "bg-yellow-400"
                                        }`}
                                    />
                                    {project.link ? "Live" : "Private"}
                                </span>

                                {/* project index */}
                                <span className="absolute top-3 right-3 font-jetbrains text-[11px] tracking-wider text-white/45">
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <h3 className="min-h-[3.5rem] font-sans text-lg font-medium leading-snug tracking-[-0.025em] text-white line-clamp-2 md:text-xl">
                                    {project.title}
                                </h3>

                                <p className="font-sans text-[13px] leading-relaxed text-white/55 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.slice(0, 4).map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-0.5 text-[10px] font-jetbrains tracking-wider rounded-full bg-white/5 border border-white/10 text-white/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-0.5 text-[10px] font-jetbrains tracking-wider rounded-full bg-white/5 border border-white/10 text-white/50">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto flex items-center gap-2 pt-1">
                                    <button
                                        onClick={() => setActiveProject(project)}
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-[12px] font-jetbrains tracking-wider
                                        bg-emerald-400 text-[#06100c]
                                        hover:bg-emerald-300
                                        transition-colors duration-200
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                                    >
                                        <ExternalLink size={14} />
                                        Details
                                    </button>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${project.title} live site`}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/5 text-white/70
                                            hover:text-emerald-200 hover:border-emerald-300/40 hover:bg-emerald-300/[0.06]
                                            transition-all duration-200
                                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                                        >
                                            <ExternalLink size={15} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeProject && (
                    <ProjectModal
                        project={activeProject}
                        onClose={() => setActiveProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', onKey)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [onClose])

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Modal Card */}
            <motion.div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-emerald-200/10 bg-gradient-to-br from-[#0d1914] to-[#07100d] shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white/80 backdrop-blur-md transition hover:bg-black/60 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                >
                    <X size={20} />
                </button>

                {/* Image */}
                <div className="relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-[#07100d] via-transparent to-transparent" />

                    {/* status badge */}
                    <span
                        className={`absolute bottom-4 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-jetbrains uppercase tracking-[0.12em] backdrop-blur-md border ${
                            project.link
                                ? "bg-emerald-400/15 border-emerald-300/30 text-emerald-200"
                                : "bg-yellow-500/15 border-yellow-400/30 text-yellow-300"
                        }`}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${
                                project.link ? "bg-emerald-300 animate-pulse" : "bg-yellow-400"
                            }`}
                        />
                        {project.link ? "Live" : "Private"}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    <h2 className="mb-4 font-sans text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                        <span className="gradient-text">{project.title}</span>
                    </h2>

                    <p className="font-sans text-white/80 leading-relaxed mb-6 text-balance">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-[11px] font-jetbrains tracking-wider rounded-full
                                bg-white/5 border border-white/10 text-white/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Button */}
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                            bg-emerald-400 text-[#06100c]
                            font-jetbrains text-[12px] tracking-wider
                            hover:bg-emerald-300
                            transition-colors duration-200
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    ) : (
                        <span
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                            bg-white/5 border border-white/10 text-white/50
                            font-jetbrains text-[12px] tracking-wider cursor-not-allowed"
                        >
                            <Lock size={14} />
                            Not publicly deployed
                        </span>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
