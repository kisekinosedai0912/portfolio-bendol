import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Lock, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import GeoQuest from "../../assets/img/geoquest.png";
import FretMuse from "../../assets/img/fretmuse.png";
import RAGPRES from "../../assets/img/ragpres.jpg";
import Scheduler from "../../assets/img/scheduler-event.png";
import Metrics from "../../assets/img/metrics-dashboard.png";
import POS from "../../assets/img/product-page.png";
import Gym from "../../assets/img/gym-dashboard.png";
import Chat from "../../assets/img/chat.jpg";
import Laundry from "../../assets/img/laundry.jpg";
import Uplow from "../../assets/img/uplow.png";
import Dahlings from "../../assets/img/dahlings.png";

const projects = [
    {
        id: 1,
        title: "Uplow - Media & reputation monitoring for the Icelandic market",
        image: Uplow,
        link: "https://www.uplow.com/",
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
        link: null,
        description:
            `A simple Laundry Management System built with React, Expres, Node Js and Tailwind. The data are only stored on JSON files
                 because the primary role of this system is just to demonstrate a solution in a project of a student in their specific
                 subject. It solves a problem found in the area specifically in laundry shops. The simple system was only built for a
                 project and not implemented yet.
                `,
        tech: ["React", "Express", "Node Js", "JSON", "Javascript", "Tailwind"],
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

const liveCount = projects.filter((project) => project.link).length;

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: (index % 3) * 0.045, ease: "easeOut" },
    }),
};

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#0a1411] px-5 pb-32 pt-24 sm:px-8 md:py-24 md:pr-24 lg:px-12 lg:pr-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-emerald-400/[0.055] blur-[110px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-lime-300/[0.04] blur-[110px]"
            />

            <motion.div
                className="relative mx-auto w-full max-w-[82rem]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <div className="mb-12 grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:pb-12">
                    <div>
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                            04 / Selected work
                        </p>
                        <h2 className="font-sans text-[clamp(1.875rem,3.5vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                            Featured <span className="text-emerald-300">Projects</span>
                        </h2>
                    </div>

                    <div className="flex max-w-xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                        <p className="font-sans text-sm leading-7 text-white/50 sm:text-base">
                            Production systems, client work, and personal builds—from media monitoring
                            and microservices to tourism, education, and operations tools.
                        </p>
                        <div className="hidden shrink-0 text-right sm:block">
                            <span className="font-sans text-2xl font-medium tracking-[-0.04em] text-emerald-300">
                                {String(projects.length).padStart(2, "0")}
                            </span>
                            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/28">
                                {liveCount} live
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative border-y border-white/[0.09]">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-[2.45rem] top-0 hidden w-px bg-gradient-to-b from-emerald-300/35 via-white/10 to-transparent lg:block"
                    />
                    {projects.map((project, index) => (
                        <ProjectFeature
                            key={project.id}
                            project={project}
                            index={index}
                            onOpen={() => setActiveProject(project)}
                        />
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {activeProject ? (
                    <ProjectModal
                        project={activeProject}
                        onClose={() => setActiveProject(null)}
                        shouldReduceMotion={shouldReduceMotion}
                    />
                ) : null}
            </AnimatePresence>
        </section>
    );
}

function ProjectFeature({ project, index, onOpen }) {
    const isReversed = index % 2 === 1;

    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            data-project-card
            data-cursor-grid-ignore
            className="relative grid gap-6 border-b border-white/[0.09] py-9 last:border-b-0 sm:py-12 lg:grid-cols-[5rem_minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center lg:gap-8 lg:py-16"
        >
            <div className="relative z-10 flex items-center gap-3 lg:self-start lg:pt-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/30 bg-[#0a1411]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/75" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-white/35 lg:text-sm">
                    {String(project.id).padStart(2, "0")}
                </span>
            </div>

            <div className={`relative min-w-0 ${isReversed ? "lg:order-3" : "lg:order-2"}`}>
                <div
                    aria-hidden="true"
                    className={`absolute -top-7 z-10 font-mono text-[8px] uppercase tracking-[0.24em] text-emerald-300/45 ${
                        isReversed ? "right-0" : "left-0"
                    }`}
                >
                    frame / {String(project.id).padStart(2, "0")}
                </div>
                <div className="theme-preserve-dark relative overflow-hidden border border-white/[0.11] bg-[#07100d] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-1.5 bg-gradient-to-t from-[#07100d]/60 via-transparent to-black/10" />
                    <span
                        className={`absolute bottom-4 left-4 inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] backdrop-blur-md ${
                            project.link
                                ? "border-emerald-200/20 bg-[#07100d]/75 text-emerald-200/80"
                                : "border-white/15 bg-[#07100d]/75 text-white/50"
                        }`}
                    >
                        <span className={`h-1.5 w-1.5 rounded-full ${project.link ? "bg-emerald-300" : "bg-white/35"}`} />
                        {project.link ? "Live system" : "Private build"}
                    </span>
                </div>
                <div className="mt-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                    <span>Jasper Bendol / Selected work</span>
                    <span>{String(index + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}</span>
                </div>
            </div>

            <div className={`flex min-w-0 flex-col ${isReversed ? "lg:order-2 lg:pr-4" : "lg:order-3 lg:pl-4"}`}>
                <p className="mb-4 font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-300/55">
                    {project.link ? "Public release" : "Client / internal system"}
                </p>
                <h3 className="font-sans text-[clamp(1.45rem,2.4vw,2.2rem)] font-medium leading-[1.12] tracking-[-0.035em] text-white/90">
                    {project.title}
                </h3>

                <p className="mt-5 font-sans text-sm leading-7 text-white/48 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                    {project.tech.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="border-l border-emerald-300/30 pl-2 font-mono text-[8px] uppercase tracking-[0.14em] text-emerald-100/55"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 4 ? (
                        <span className="border-l border-white/15 pl-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/32">
                            +{project.tech.length - 4} tools
                        </span>
                    ) : null}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-5">
                    <button
                        type="button"
                        onClick={onOpen}
                        data-cursor-grid-ignore
                        className="primary-action hero-cursor-target group inline-flex cursor-pointer items-stretch bg-[#0b1713] font-mono text-[9px] font-medium uppercase tracking-[0.15em] shadow-[0_8px_18px_rgba(52,211,153,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(52,211,153,0.2)] focus-visible:outline-none"
                    >
                        <span className="primary-action__label">View case details</span>
                        <span className="primary-action__end text-emerald-200">
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </button>
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live site`}
                            className="inline-flex items-center gap-2 border-b border-white/20 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/48 transition-colors hover:border-emerald-300/60 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                        >
                            Visit live site
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    ) : null}
                </div>
            </div>
        </motion.article>
    );
}

function ProjectModal({ project, onClose, shouldReduceMotion }) {
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    const motionDuration = shouldReduceMotion ? 0 : 0.3;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#07100d]/72 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionDuration }}
            onClick={onClose}
        >
            <motion.div
                className="custom-scrollbar relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] border border-white/[0.08] bg-[#091510]/95 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                initial={shouldReduceMotion ? false : { scale: 0.96, opacity: 0, y: 24 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0, y: 24 }}
                transition={{ duration: motionDuration, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="theme-preserve-dark absolute right-4 top-4 z-10 rounded-xl border border-white/10 bg-[#07100d]/70 p-2 text-white/70 backdrop-blur-md transition-colors hover:border-emerald-200/20 hover:text-emerald-200"
                >
                    <X size={18} />
                </button>

                <div className="theme-preserve-dark relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full rounded-t-[1.75rem] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-t-[1.75rem] bg-gradient-to-t from-[#091510] via-transparent to-transparent" />

                    <span
                        className={`absolute bottom-4 left-6 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] backdrop-blur-md ${
                            project.link
                                ? "border-emerald-200/15 bg-emerald-300/[0.12] text-emerald-100/80"
                                : "border-white/10 bg-white/[0.06] text-white/50"
                        }`}
                    >
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${
                                project.link ? "animate-pulse bg-emerald-300" : "bg-white/35"
                            }`}
                        />
                        {project.link ? "Live" : "Private"}
                    </span>
                </div>

                <div className="p-6 md:p-8">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/55">
                        Project details
                    </p>
                    <h2 className="mb-4 font-sans text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
                        {project.title}
                    </h2>

                    <p className="mb-6 font-sans leading-relaxed text-white/55 text-balance">
                        {project.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-emerald-200/12 bg-emerald-300/[0.045] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-100/65"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-grid-ignore
                            className="primary-action hero-cursor-target group inline-flex items-stretch bg-[#0b1713] font-mono text-[10px] font-medium uppercase tracking-[0.12em] shadow-[0_8px_18px_rgba(52,211,153,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(52,211,153,0.2)]"
                        >
                            <span className="primary-action__label">Live demo</span>
                            <span className="primary-action__end text-emerald-200">
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                            <Lock className="h-4 w-4" />
                            Not publicly deployed
                        </span>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
