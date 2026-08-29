import { useEffect, useRef } from "react";
import { ArrowUpRight, Lock, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose, shouldReduceMotion }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const previouslyFocused = document.activeElement;
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
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
            role="presentation"
        >
            <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`project-title-${project.id}`}
                tabIndex={-1}
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
                    <h2 id={`project-title-${project.id}`} className="mb-4 font-sans text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
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
