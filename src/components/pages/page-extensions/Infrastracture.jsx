import { FaAws } from "react-icons/fa";
import {
    SiTerraform,
    SiTemporal,
    SiGooglecloud,
    SiVercel,
    SiRailway,
    SiRender,
} from "react-icons/si";
import { CiLink } from "react-icons/ci";
import { PiInfinityFill } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";
import { RiFirebaseLine } from "react-icons/ri";
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const infraStack = [
        { name: "Terraform", icon: SiTerraform },
        { name: "Temporal", icon: SiTemporal },
        { name: "Inngest", icon: CiLink },
        { name: "Infisical", icon: PiInfinityFill },
        { name: "AWS", icon: FaAws },
        { name: "Azure", icon: VscAzure },
        { name: "Google Cloud", icon: SiGooglecloud },
        { name: "Vercel", icon: SiVercel },
        { name: "Railway", icon: SiRailway },
        { name: "Render", icon: SiRender },
        { name: "Firebase", icon: RiFirebaseLine },
];

export default function Infrastracture() {
    return <StackGrid items={infraStack} />;
}
