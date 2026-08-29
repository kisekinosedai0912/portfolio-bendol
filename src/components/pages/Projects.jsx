import { lazy, Suspense, useState } from "react";
import { ArrowUpRight, Grid3X3 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from '@/assets/data/projects'
import ProjectFeature from '@/components/ProjectFeatures'
import ProjectModal from '@/components/ProjectModal'

const ProjectsGallery = lazy(() => import('@/components/pages/Gallery'))

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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

                    <div className="max-w-xl">
                        <p className="font-sans text-sm leading-7 text-white/50 sm:text-base">
                            Production systems, client work, and personal builds—from media monitoring
                            and microservices to tourism, education, and operations tools.
                        </p>
                    </div>
                </div>

                <div className="relative border-y border-white/[0.09]">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-[2.45rem] top-0 hidden w-px bg-gradient-to-b from-emerald-300/35 via-white/10 to-transparent lg:block"
                    />
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectFeature
                            key={project.id}
                            project={project}
                            index={index}
                            totalProjects={projects.length}
                            onOpen={() => setActiveProject(project)}
                        />
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-6 border border-white/[0.09] bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div className="max-w-xl">
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                            Full project archive
                        </p>
                        <h3 className="text-xl font-medium tracking-[-0.025em] text-white/90 sm:text-2xl">
                            Explore all {projects.length} projects visually.
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/45">
                            Browse every project by its interface, then open any one for the full story,
                            technology stack, and live demo when available.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsGalleryOpen(true)}
                        data-cursor-grid-ignore
                        className="primary-action hero-cursor-target group inline-flex shrink-0 cursor-pointer items-stretch self-start bg-[#0b1713] font-mono text-[9px] font-medium uppercase tracking-[0.15em] shadow-[0_8px_18px_rgba(52,211,153,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(52,211,153,0.2)] focus-visible:outline-none sm:self-auto"
                    >
                        <span className="primary-action__label gap-2">
                            <Grid3X3 className="h-3.5 w-3.5" />
                            View all projects
                        </span>
                        <span className="primary-action__end text-emerald-200">
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </button>
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

            <Suspense fallback={<GalleryLoadingFallback />}>
                <AnimatePresence>
                    {isGalleryOpen ? (
                        <ProjectsGallery
                            onClose={() => setIsGalleryOpen(false)}
                            shouldReduceMotion={shouldReduceMotion}
                        />
                    ) : null}
                </AnimatePresence>
            </Suspense>
        </section>
    );
}

function GalleryLoadingFallback() {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#07100d]/92 backdrop-blur-xl"
            role="status"
            aria-live="polite"
        >
            <div className="flex items-center gap-3 border border-white/10 bg-[#091510] px-5 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden="true" />
                Loading project gallery
            </div>
        </div>
    );
}
