import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: (index % 3) * 0.045, ease: "easeOut" },
    }),
};

export default function ProjectFeature({ project, index, totalProjects, onOpen }) {
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
                    className={`relative z-10 mb-3 font-mono text-[8px] uppercase tracking-[0.24em] text-emerald-300/45 sm:absolute sm:-top-7 sm:mb-0 ${
                        isReversed ? "text-right sm:right-0" : "sm:left-0"
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
                    <span>{String(index + 1).padStart(2, "0")} — {String(totalProjects).padStart(2, "0")}</span>
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
