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

            <section id="tech-tools" className="flex justify-center px-4 md:px-8 py-12 bg-gradient-to-b from-[#060023] to-[#010003]">
                <div className="max-w-6xl w-full">
                    <div className="text-center mb-16">
                        <h2 className="font-jetbrains text-3xl md:text-4xl text-white mb-4">
                            <span className="gradient-text">Tools</span>
                        </h2>
                    </div>

                    {/* Tools Grid Section */}
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {tools.map((tool, index) => {
                                const IconComponent = tool.icon;
                                return (
                                    <div
                                        key={index}
                                        className="
                                            flex flex-col items-center justify-center
                                            p-4
                                            bg-black/40
                                            border border-blue-600/30
                                            rounded-lg
                                            transition-all duration-200
                                            hover:border-blue-600
                                            hover:shadow-lg hover:shadow-blue-600/20"
                                    >
                                        <IconComponent
                                            className="w-8 h-8 mb-2"
                                            style={{ fill: "url(#iconGradient)" }}
                                        />
            
                                        <p className="font-jetbrains text-white text-center text-xs md:text-sm">
                                            {tool.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}