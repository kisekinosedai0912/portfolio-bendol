import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
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

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
        {
            id: 8,
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
            id: 9,
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
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-4 md:px-8 py-20 bg-gradient-to-b from-[#060023] to-[#010003]"
        >
            {/* Title */}
            <h1 className="text-center text-3xl md:text-4xl font-jetbrains text-white mb-16">
                <span className="gradient-text">My Portfolio</span>
            </h1>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-black/40 rounded-xl overflow-hidden border border-blue-600/20 hover:border-blue-600 transition-all duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="font-jetbrains text-lg mb-4 gradient-text">
                                {project.title}
                            </h3>

                            <button
                                onClick={() => setActiveProject(project)}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-jetbrains
                                bg-gradient-to-r from-[#6162ff] to-[#b352ff] text-white
                                hover:opacity-90 transition"
                            >
                                <ExternalLink size={16} />
                                Details
                            </button>
                        </div>
                    </div>
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
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Modal Card */}
            <motion.div
                className="relative max-w-3xl w-full bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1c] rounded-xl overflow-hidden shadow-xl"
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-purple-400 transition"
                >
                    <X size={22} color="black" />
                </button>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                    <h2 className="font-jetbrains text-2xl mb-4 gradient-text">
                        {project.title}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-jetbrains rounded-full
                                bg-white/10 text-purple-300 border border-purple-500/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Button */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full
                            bg-gradient-to-r from-[#6162ff] to-[#b352ff] text-white
                            font-jetbrains text-sm hover:opacity-90 transition"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}