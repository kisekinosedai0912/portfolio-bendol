import { FaPhp, FaNodeJs, FaCode, FaLaravel } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiFastify, SiClerk , SiNgrok, SiDrizzle, SiTypescript } from "react-icons/si";
import { BsBing } from "react-icons/bs";

export default function Backend() {
    const backendStack = [
        { name: "NodeJs", icon: FaNodeJs },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Express Js", icon: SiExpress },
        { name: "Fastify", icon: SiFastify },
        { name: "Drizzle", icon: SiDrizzle },
        { name: "Clerk", icon: SiClerk },
        { name: "Ngrok", icon: SiNgrok },
        { name: "PHP", icon: FaPhp },
        { name: "C#", icon: FaCode },
        { name: "Laravel", icon: FaLaravel },
        { name: ".Net", icon: FaCode },
        { name: "Browserless", icon: BsBing },
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
                    {backendStack.map((tech, index) => {
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
