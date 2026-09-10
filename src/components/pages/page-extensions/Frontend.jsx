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
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const frontendStack = [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "TanStack Query", icon: SiReactquery },
        { name: "Zustand", icon: SiRedux },
        { name: "Typescript", icon: SiTypescript },
        { name: "Javascript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Clerk", icon: SiClerk },
        { name: "Axios", icon: SiAxios },
        { name: "Playwright", icon: LiaTheaterMasksSolid },
        { name: "Shadcn UI", icon: SiShadcnui },
        { name: "MUI", icon: SiMui },
        { name: "React Bits", icon: FaReact },
        { name: "Vite", icon: SiVite },
        { name: "jQuery", icon: SiJquery },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Bootstrap", icon: FaBootstrap },
];

export default function Frontend() {
    return <StackGrid items={frontendStack} />;
}
