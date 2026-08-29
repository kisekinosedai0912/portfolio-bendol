import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Lock, X } from "lucide-react";
import { projects } from "@/assets/data/projects";

export default function AllProjectsGallery({ onClose, shouldReduceMotion }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const dialogRef = useRef(null);
    const backButtonRef = useRef(null);
    const projectButtonRefs = useRef(new Map());
    const lastSelectedId = useRef(null);

    useEffect(() => {
        const previouslyFocused = document.activeElement;
        const onKey = (event) => {
            if (event.key === "Escape") {
                if (selectedProject) setSelectedProject(null);
                else onClose();
            }

            if (event.key === "Tab" && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }
        };

        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            previouslyFocused?.focus?.();
        };
    }, [onClose, selectedProject]);

    useEffect(() => {
        if (selectedProject) {
            dialogRef.current?.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
            backButtonRef.current?.focus();
        }
    }, [selectedProject, shouldReduceMotion]);

    const openProject = (project) => {
        lastSelectedId.current = project.id;
        setSelectedProject(project);
    };

    const returnToGallery = () => {
        const projectId = lastSelectedId.current;
        setSelectedProject(null);
        window.requestAnimationFrame(() => projectButtonRefs.current.get(projectId)?.focus());
    };

    const motionDuration = shouldReduceMotion ? 0 : 0.28;

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#07100d]/92 p-3 backdrop-blur-xl sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionDuration }}
        >
            <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={selectedProject ? `archive-project-title-${selectedProject.id}` : "all-projects-title"}
                tabIndex={-1}
                className="custom-scrollbar mx-auto h-full w-full max-w-[92rem] overflow-y-auto border border-white/[0.1] bg-[#091510] shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.99 }}
                transition={{ duration: motionDuration, ease: "easeOut" }}
            >
                <header className="sticky top-0 z-30 flex items-center justify-between gap-5 border-b border-white/[0.09] bg-[#091510]/95 px-5 py-4 backdrop-blur-xl sm:px-8">
                    <div className="min-w-0">
                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-emerald-300/55">
                            {selectedProject ? "Project case details" : `${projects.length} projects / visual index`}
                        </p>
                        <p className="mt-1 truncate text-sm text-white/65">
                            {selectedProject ? selectedProject.title : "Select a project to see the complete story"}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close all projects"
                        className="shrink-0 border border-white/10 bg-white/[0.035] p-2.5 text-white/60 transition-colors hover:border-emerald-300/30 hover:text-emerald-200"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </header>

                {selectedProject ? (
                    <ProjectArchiveDetail
                        project={selectedProject}
                        onBack={returnToGallery}
                        backButtonRef={backButtonRef}
                    />
                ) : (
                    <div className="p-5 sm:p-8 lg:p-10">
                        <div className="mb-8 max-w-3xl">
                            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-emerald-300/65">
                                Complete work archive
                            </p>
                            <h2 id="all-projects-title" className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                                All projects, at a glance.
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                                The interfaces come first. Open any project for its full context, tools,
                                availability, and live experience.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {projects.map((project, index) => (
                                <button
                                    key={project.id}
                                    ref={(node) => {
                                        if (node) projectButtonRefs.current.set(project.id, node);
                                        else projectButtonRefs.current.delete(project.id);
                                    }}
                                    type="button"
                                    onClick={() => openProject(project)}
                                    aria-label={`View details for ${project.title}`}
                                    className="group relative overflow-hidden border border-white/[0.1] bg-[#07100d] text-left transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-emerald-300/35 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70"
                                >
                                    <img
                                        src={project.image}
                                        alt=""
                                        loading="eager"
                                        decoding="async"
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100d] via-[#07100d]/5 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-4">
                                        <div className="mb-2 flex items-center justify-between gap-3">
                                            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-200/65">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/55">
                                                <span className={`h-1.5 w-1.5 rounded-full ${project.link ? "bg-emerald-300" : "bg-white/40"}`} />
                                                {project.link ? "Live" : "Private"}
                                            </span>
                                        </div>
                                        <h3 className="line-clamp-2 text-base font-medium leading-snug tracking-[-0.025em] text-white sm:text-lg">
                                            {project.title}
                                        </h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

function ProjectArchiveDetail({ project, onBack, backButtonRef }) {
    return (
        <div className="mx-auto max-w-6xl p-5 sm:p-8 lg:p-12">
            <button
                ref={backButtonRef}
                type="button"
                onClick={onBack}
                className="mb-8 inline-flex items-center gap-2 border-b border-white/15 pb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to all projects
            </button>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-12">
                <div className="theme-preserve-dark relative self-start overflow-hidden border border-white/[0.1] bg-[#07100d] p-2">
                    <img src={project.image} alt={`Interface preview of ${project.title}`} className="aspect-[16/10] w-full object-cover" />
                    <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-[#07100d]/45 via-transparent to-transparent" />
                </div>

                <div className="self-center">
                    <span className={`mb-5 inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] ${project.link ? "border-emerald-300/20 text-emerald-200/75" : "border-white/10 text-white/45"}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${project.link ? "bg-emerald-300" : "bg-white/35"}`} />
                        {project.link ? "Live system" : "Private build"}
                    </span>
                    <h2 id={`archive-project-title-${project.id}`} className="text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl">
                        {project.title}
                    </h2>
                    <p className="mt-6 text-sm leading-7 text-white/52 sm:text-base">
                        {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="border border-emerald-200/12 bg-emerald-300/[0.045] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-emerald-100/65">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-9 border-t border-white/[0.09] pt-7">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-action hero-cursor-target group inline-flex items-stretch bg-[#0b1713] font-mono text-[9px] font-medium uppercase tracking-[0.14em] shadow-[0_8px_18px_rgba(52,211,153,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(52,211,153,0.2)]"
                            >
                                <span className="primary-action__label">Open live demo</span>
                                <span className="primary-action__end text-emerald-200">
                                    <ExternalLink className="h-4 w-4" />
                                </span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/42">
                                <Lock className="h-4 w-4" />
                                Not publicly deployed
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
