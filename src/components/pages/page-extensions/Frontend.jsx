import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { 
    SiTailwindcss, 
    SiJavascript, 
    SiJquery, 
    SiAxios, 
    SiShadcnui, 
    SiMui, 
    SiVite, 
    SiReactquery, 
    SiRedux,
    SiNextdotjs,
    SiClerk,
    SiTypescript
} from "react-icons/si";

export default function Frontend() {
    const frontendStack = [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "Javascript", icon: SiJavascript },
        { name: "Typescript", icon: SiTypescript },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Clerk", icon: SiClerk },
        { name: "Playwright", icon: LiaTheaterMasksSolid },
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

            <div className="max-h-[540px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {frontendStack.map((tech, index) => {
                        const IconComponent = tech.icon;
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
                                    hover:shadow-lg hover:shadow-[#6162ff]/10"
                            >
                                <IconComponent
                                    className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                                    style={{ fill: "url(#iconGradient)" }}
                                />

                                <p className="font-jetbrains text-[12px] tracking-wider text-white/85 text-center">
                                    {tech.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
