import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { SiRender, 
    SiCursor, 
    SiGoogleanalytics, 
    SiSentry, 
    SiTerraform, 
    SiTemporal, 
    SiNx ,
    SiDbeaver,
    SiMongodb 
} from "react-icons/si";
import { FaGitAlt, FaGithubSquare, FaFigma, FaDocker } from "react-icons/fa";
import { FaScrewdriverWrench, FaSquareGithub } from "react-icons/fa6";
import { LiaMicrosoft } from "react-icons/lia";

export default function TechTools() {
    const tools = [
        { name: "Visual Studio Code", icon: VscVscode},
        { name: "Cursor", icon: SiCursor },
        { name: "Google Analytics", icon: SiGoogleanalytics },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithubSquare },
        { name: "GitHub Desktop", icon: FaSquareGithub },
        { name: "Docker", icon: FaDocker },
        { name: "Sentry", icon: SiSentry },
        { name: "Terraform", icon: SiTerraform },
        { name: "Figma", icon: FaFigma },
        { name: "Microsoft Services", icon: LiaMicrosoft },
        { name: "XRM Toolbox", icon: FaScrewdriverWrench },
    ];

    return (
        <>
            {/* SVG Gradient Definition */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="toolsIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#a3e635" />
                    </linearGradient>
                </defs>
            </svg>

            <section id="tech-tools" className="flex min-h-screen items-center justify-center bg-[#091410] px-5 py-24 pr-20 sm:px-8 sm:pr-24 lg:px-12 lg:pr-28">
                <motion.div
                    className="max-w-6xl w-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="text-center mb-12">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/65">
                            What I use daily
                        </p>
                        <h2 className="font-sans text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                            <span className="gradient-text">Tools</span>
                        </h2>
                    </div>

                    {/* Tools Grid Section */}
                    <div className="max-h-[540px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                            {tools.map((tool, index) => {
                                const IconComponent = tool.icon;
                                return (
                                    <div
                                        key={index}
                                        className="
                                            group
                                            animated-border
                                            flex flex-col items-center justify-center gap-3
                                            p-5
                                            bg-white/[0.03]
                                            border border-white/10
                                            rounded-xl
                                            transition-all duration-300
                                            hover:bg-white/[0.05]
                                            hover:border-emerald-300/25
                                            hover:shadow-lg hover:shadow-emerald-950/30"
                                    >
                                        <IconComponent
                                            className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                                            style={{ fill: "url(#toolsIconGradient)" }}
                                        />

                                        <p className="font-jetbrains text-[12px] tracking-wider text-white/85 text-center">
                                            {tool.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
