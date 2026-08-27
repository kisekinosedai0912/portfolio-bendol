import { motion } from "framer-motion";
import { Code2, GitBranch, ScanSearch } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
    SiCursor,
    SiGoogleanalytics,
    SiSentry,
    SiTerraform,
} from "react-icons/si";
import { FaDocker, FaFigma, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { FaScrewdriverWrench, FaSquareGithub } from "react-icons/fa6";
import { LiaMicrosoft } from "react-icons/lia";

const toolGroups = [
    {
        id: "workspace",
        label: "Workspace",
        description: "The everyday environment where ideas become interfaces and working systems.",
        icon: Code2,
        tools: [
            { name: "Visual Studio Code", icon: VscVscode, role: "Editor" },
            { name: "Cursor", icon: SiCursor, role: "AI editor" },
            { name: "Figma", icon: FaFigma, role: "Design" },
            { name: "Microsoft Services", icon: LiaMicrosoft, role: "Platform" },
            { name: "XRM Toolbox", icon: FaScrewdriverWrench, role: "CRM toolkit" },
        ],
    },
    {
        id: "delivery",
        label: "Build & delivery",
        description: "Versioning, packaging, and infrastructure for dependable releases.",
        icon: GitBranch,
        tools: [
            { name: "Git", icon: FaGitAlt, role: "Version control" },
            { name: "GitHub", icon: FaGithubSquare, role: "Collaboration" },
            { name: "GitHub Desktop", icon: FaSquareGithub, role: "Git client" },
            { name: "Docker", icon: FaDocker, role: "Containers" },
            { name: "Terraform", icon: SiTerraform, role: "Infrastructure" },
        ],
    },
    {
        id: "insight",
        label: "Insight & reliability",
        description: "Signals that keep products observable, measurable, and healthy.",
        icon: ScanSearch,
        tools: [
            { name: "Google Analytics", icon: SiGoogleanalytics, role: "Product analytics" },
            { name: "Sentry", icon: SiSentry, role: "Error monitoring" },
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: index * 0.045, ease: "easeOut" },
    }),
};

export default function TechTools() {
    return (
        <section
            id="tech-tools"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#091410] px-5 py-24 pr-20 sm:px-8 sm:pr-24 lg:px-12 lg:pr-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-emerald-400/[0.055] blur-[110px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-lime-300/[0.04] blur-[110px]"
            />

            <motion.div
                className="relative mx-auto w-full max-w-[82rem]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <ToolHeading />

                <div className="space-y-10 lg:space-y-12">
                    {toolGroups.map((group, groupIndex) => {
                        const GroupIcon = group.icon;

                        return (
                            <div key={group.id} className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-8">
                                <div className="flex items-start gap-3 lg:block">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200/10 bg-emerald-300/[0.06] text-emerald-300">
                                        <GroupIcon className="h-4 w-4" strokeWidth={1.8} />
                                    </span>
                                    <div className="lg:mt-4">
                                        <h3 className="font-sans text-sm font-medium text-white/85">
                                            {group.label}
                                        </h3>
                                        <p className="mt-1 max-w-xs font-sans text-xs leading-5 text-white/35 lg:mt-2">
                                            {group.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                                    {group.tools.map((tool, toolIndex) => {
                                        const ToolIcon = tool.icon;
                                        const animationIndex = groupIndex * 5 + toolIndex;

                                        return (
                                            <motion.div
                                                key={tool.name}
                                                custom={animationIndex}
                                                variants={cardVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-40px" }}
                                                whileHover={{ y: -4 }}
                                                data-cursor-grid-ignore
                                                className="hero-cursor-target group relative min-h-36 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-emerald-200/20 hover:bg-white/[0.045] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                                            >
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute -right-6 -top-8 h-20 w-20 rounded-full bg-emerald-300/0 blur-2xl transition-colors duration-300 group-hover:bg-emerald-300/[0.08]"
                                                />
                                                <div className="relative flex h-full flex-col justify-between gap-6">
                                                    <div className="flex items-start justify-between gap-3">
                                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0b1813] text-emerald-300 transition-colors duration-300 group-hover:border-emerald-200/15 group-hover:text-emerald-200">
                                                            <ToolIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                        <span className="font-mono text-[9px] tracking-[0.12em] text-white/20">
                                                            {String(animationIndex + 1).padStart(2, "0")}
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <p className="font-sans text-sm font-medium leading-5 text-white/82 transition-colors group-hover:text-white">
                                                            {tool.name}
                                                        </p>
                                                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-white/32">
                                                            {tool.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

function ToolHeading() {
    return (
        <div className="mb-12 grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:pb-12">
            <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                    02 / What I use daily
                </p>
                <h2 className="font-sans text-[clamp(1.875rem,3.5vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                    Tech <span className="text-emerald-300">Tools</span>
                </h2>
            </div>

            <p className="max-w-xl font-sans text-sm leading-7 text-white/50 sm:text-base">
                Practical tools I use daily to enhance, fix, and ship features—supporting every step from idea to 
                engineered systems that solves problems.
            </p>
        </div>
    )
}
