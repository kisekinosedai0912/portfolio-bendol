import { FaCode } from "react-icons/fa";
import { SiCivicrm } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

export default function SoftwareDev() {
    const softwareDevStack = [
        { name: "C#", icon: FaCode },
        { name: ".Net", icon: FaCode },
        { name: "Dynamics 365", icon: SiCivicrm },
        { name: "Azure DevOps", icon: VscAzureDevops },
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {softwareDevStack.map((tech, index) => {
                    const IconComponent = tech.icon;
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
                                {tech.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
