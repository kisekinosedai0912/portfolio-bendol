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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softwareDevStack.map((tech, index) => {
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
    );
}
