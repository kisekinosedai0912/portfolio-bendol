import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiJquery, SiAxios, SiShadcnui, SiMui, SiVite, SiReactquery, SiRedux  } from "react-icons/si";

export default function Frontend() {
    const frontendStack = [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "Javascript", icon: SiJavascript },
        { name: "React", icon: FaReact },
        { name: "jQuery", icon: SiJquery },
        { name: "Axios", icon: SiAxios },
        { name: "Shadcn UI", icon: SiShadcnui },
        { name: "MUI", icon: SiMui },
        { name: "Vite", icon: SiVite },
        { name: "TanStack Query", icon: SiReactquery },
        { name: "Zustand", icon: SiRedux },
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {frontendStack.map((tech, index) => {
                    const IconComponent = tech.icon;
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
                                {tech.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}