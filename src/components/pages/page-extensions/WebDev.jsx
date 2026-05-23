import { SiMongodb, 
    SiMysql, 
    SiRender, 
    SiVercel, 
    SiJavascript, 
    SiJquery, 
    SiReactquery, 
    SiVite, 
    SiTailwindcss, 
    SiRedux,
    SiPostgresql,
    SiTemporal,
    SiNextdotjs,
    SiRailway,
    SiGoogleanalytics,
    SiNgrok,
    SiFastify,
    SiDrizzle,
    SiExpress
} from "react-icons/si";
import { BsBing } from "react-icons/bs";
import { RiFirebaseLine } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { FaReact, FaPhp, FaNodeJs, FaLaravel, FaCss3Alt } from "react-icons/fa";

export default function WebDev() {
    const webDevStack = [
        { name: "Google Analytics", icon: SiGoogleanalytics },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Postgresql", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Ngrok", icon: SiNgrok },
        { name: "Drizzle", icon: SiDrizzle },
        { name: "Firebase", icon: RiFirebaseLine },
        { name: "Azure DevOps", icon: VscAzureDevops },
        { name: "Temporal", icon: SiTemporal },
        { name: "Railway", icon: SiRailway },
        { name: "Render", icon: SiRender },
        { name: "Vercel", icon: SiVercel },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Express.Js", icon: SiExpress },
        { name: "Fastify", icon: SiFastify },
        { name: "PHP", icon: FaPhp },
        { name: "Javascript", icon: SiJavascript },
        { name: "Laravel", icon: FaLaravel },
        { name: "jQuery", icon: SiJquery },
        { name: "NodeJs", icon: FaNodeJs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Vite", icon: SiVite },
        { name: "Tanstack Query", icon: SiReactquery },
        { name: "Zustand", icon: SiRedux },
        { name: "Browserless", icon: BsBing },
        { name: "React Dev Tools", icon: FaReact },
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
                    {webDevStack.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div key={index}
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
