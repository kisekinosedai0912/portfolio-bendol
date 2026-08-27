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
import StackGrid from "./StackGrid";

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

export default function Frontend() {
    return <StackGrid items={frontendStack} />;
}
