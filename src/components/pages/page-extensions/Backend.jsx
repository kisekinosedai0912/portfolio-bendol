import { FaPhp, FaNodeJs, FaCode, FaLaravel } from "react-icons/fa";
import { 
    SiExpress, 
    SiNextdotjs, 
    SiFastify, 
    SiClerk , 
    SiNgrok, 
    SiDrizzle,
    SiTypescript,
    SiTerraform,
    SiSentry,
    SiTemporal,
    SiXampp
} from "react-icons/si";
import { BsBing } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { TbBrandTerraform } from "react-icons/tb";
import { PiInfinityFill } from "react-icons/pi";
import StackGrid from "./StackGrid";

const backendStack = [
        { name: "NodeJs", icon: FaNodeJs },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Express Js", icon: SiExpress },
        { name: "Fastify", icon: SiFastify },
        { name: "Drizzle", icon: SiDrizzle },
        { name: "XAMPP", icon: SiXampp },
        { name: "Tabularis", icon: TbBrandTerraform },
        { name: "Terraform", icon: SiTerraform },
        { name: "Sentry", icon: SiSentry },
        { name: "Temporal", icon: SiTemporal },
        { name: "Inngest", icon: CiLink },
        { name: "Infisical", icon: PiInfinityFill },
        { name: "Clerk", icon: SiClerk },
        { name: "Ngrok", icon: SiNgrok },
        { name: "PHP", icon: FaPhp },
        { name: "C#", icon: FaCode },
        { name: "Laravel", icon: FaLaravel },
        { name: ".Net", icon: FaCode },
        { name: "Browserless", icon: BsBing },
];

export default function Backend() {
    return <StackGrid items={backendStack} />;
}
