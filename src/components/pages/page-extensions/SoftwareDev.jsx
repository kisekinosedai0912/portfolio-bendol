import { FaCode } from "react-icons/fa";
import { SiCivicrm } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import StackGrid from "./StackGrid";

const softwareDevStack = [
        { name: "C#", icon: FaCode },
        { name: ".Net", icon: FaCode },
        { name: "Dynamics 365", icon: SiCivicrm },
        { name: "Azure DevOps", icon: VscAzureDevops },
];

export default function SoftwareDev() {
    return <StackGrid items={softwareDevStack} />;
}
