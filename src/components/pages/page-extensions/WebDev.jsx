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
    SiExpress,
    SiTypescript,
    SiSentry,
    SiXampp ,
	SiNeon
} from "react-icons/si";
import { BsBing } from "react-icons/bs";
import { RiFirebaseLine } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { FaReact, FaPhp, FaNodeJs, FaLaravel, FaCss3Alt } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { PiInfinityFill } from "react-icons/pi";
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const webDevStack = [
        { name: "Google Analytics", icon: SiGoogleanalytics },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Neon", icon: SiNeon },
        { name: "Postgresql", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "XAMPP", icon: SiXampp },
        { name: "Ngrok", icon: SiNgrok },
        { name: "Drizzle", icon: SiDrizzle },
        { name: "Firebase", icon: RiFirebaseLine },
        { name: "Azure DevOps", icon: VscAzureDevops },
        { name: "Sentry", icon: SiSentry },
        { name: "Temporal", icon: SiTemporal },
        { name: "Inngest", icon: CiLink },
        { name: "Infisical", icon: PiInfinityFill },
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
        { name: "Typescript", icon: SiTypescript },
];

export default function WebDev() {
    return <StackGrid items={webDevStack} />;
}
