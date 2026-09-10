import { SiJavascript,
    SiJquery, 
    SiReactquery, 
    SiVite, 
    SiTailwindcss, 
    SiRedux,
    SiNextdotjs,
    SiGoogleanalytics,
    SiNgrok,
    SiExpress,
    SiTypescript,
    SiSentry,
} from "react-icons/si";
import { BsBing } from "react-icons/bs";
import { DiRedis } from "react-icons/di";
import { FaReact, FaPhp, FaNodeJs, FaLaravel, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const webDevStack = [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "Tanstack Query", icon: SiReactquery },
        { name: "Zustand", icon: SiRedux },
        { name: "Express.Js", icon: SiExpress },
        { name: "NodeJs", icon: FaNodeJs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Javascript", icon: SiJavascript },
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
        { name: "Redis", icon: DiRedis },
        { name: "Browserless", icon: BsBing },
        { name: "Sentry", icon: SiSentry },
        { name: "Google Analytics", icon: SiGoogleanalytics },
        { name: "Ngrok", icon: SiNgrok },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "jQuery", icon: SiJquery },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Vite", icon: SiVite },
];

export default function WebDev() {
    return <StackGrid items={webDevStack} />;
}
