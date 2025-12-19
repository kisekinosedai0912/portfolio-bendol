import { FaPhp, FaNodeJs, FaCode, FaLaravel } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export default function Backend() {
    const backendStack = [
        { name: "PHP", icon: FaPhp },
        { name: "NodeJs", icon: FaNodeJs },
        { name: "C#", icon: FaCode },
        { name: "Laravel", icon: FaLaravel },
        { name: "Express Js", icon: SiExpress },
        { name: ".Net", icon: FaCode },
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
                {backendStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div key={index}
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
