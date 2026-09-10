import { FaPhp, FaNodeJs, FaCode, FaLaravel } from "react-icons/fa";
import { 
    SiExpress, 
    SiNextdotjs, 
    SiClerk , 
    SiNgrok, 
    SiTypescript,
    SiSentry,
    SiPostman,
    SiSwagger
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BsBing } from "react-icons/bs";
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const backendStack = [
        { name: "NodeJs", icon: FaNodeJs },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Express Js", icon: SiExpress },
        { name: "Laravel", icon: FaLaravel },
        { name: "Sentry", icon: SiSentry },
        { name: "Redis", icon: DiRedis },
        { name: "Ngrok", icon: SiNgrok },
        { name: "Postman", icon: SiPostman },
        { name: "Swagger", icon: SiSwagger },
        { name: "Browserless", icon: BsBing },
        { name: "Clerk", icon: SiClerk },
        { name: "PHP", icon: FaPhp },
];

export default function Backend() {
    return <StackGrid items={backendStack} />;
}
