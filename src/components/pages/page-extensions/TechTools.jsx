import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { SiRender, SiVercel } from "react-icons/si";
import { FaGitAlt, FaGithubSquare, FaFigma } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { LiaMicrosoft } from "react-icons/lia";

export default function TechTools() {
    const tools = [
        { name: "Visual Studio Code", icon: VscVscode},
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithubSquare },
        { name: "Figma", icon: FaFigma },
        { name: "Render", icon: SiRender },
        { name: "Vercel", icon: SiVercel },
        { name: "Microsoft Services", icon: LiaMicrosoft },
        { name: "XRM Toolbox", icon: FaScrewdriverWrench },
    ];

    return (
        <>
            {/* SVG Gradient Definition */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6162ff" />
                    <stop offset="100%" stopColor="#b352ff" />
                    </linearGradient>
                </defs>
            </svg>

            <section id="tech-tools" className="flex justify-center px-4 md:px-8 py-16 bg-gradient-to-b from-[#060023] to-[#010003]">
                <motion.div
                    className="max-w-6xl w-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="text-center mb-12">
                        <p className="font-jetbrains text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
                            What I use daily
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                            <span className="gradient-text">Tools</span>
                        </h2>
                    </div>

                    {/* Tools Grid Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                        {tools.map((tool, index) => {
                            const IconComponent = tool.icon;
                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        flex flex-col items-center justify-center gap-3
                                        p-5
                                        bg-white/[0.03]
                                        border border-white/10
                                        rounded-xl
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:border-[#8b5cff]/60
                                        hover:bg-white/[0.05]
                                        hover:shadow-lg hover:shadow-[#6162ff]/10"
                                >
                                    <IconComponent
                                        className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                                        style={{ fill: "url(#iconGradient)" }}
                                    />

                                    <p className="font-jetbrains text-[12px] tracking-wider text-white/85 text-center">
                                        {tool.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>
        </>
    );
}
