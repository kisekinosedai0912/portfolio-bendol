import { Code2, GitBranch, ScanSearch } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
    SiCursor,
    SiGoogleanalytics,
    SiSentry,
    SiTerraform,
} from "react-icons/si";
import { FaDocker, FaFigma, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { FaScrewdriverWrench, FaSquareGithub } from "react-icons/fa6";
import { LiaMicrosoft } from "react-icons/lia";

export const toolGroups = [
    {
        id: "workspace",
        label: "Workspace",
        description: "The everyday environment where ideas become interfaces and working systems.",
        icon: Code2,
        tools: [
            { name: "Visual Studio Code", icon: VscVscode, role: "Editor" },
            { name: "Cursor", icon: SiCursor, role: "AI editor" },
            { name: "Figma", icon: FaFigma, role: "Design" },
            { name: "Microsoft Services", icon: LiaMicrosoft, role: "Platform" },
            { name: "XRM Toolbox", icon: FaScrewdriverWrench, role: "CRM toolkit" },
        ],
    },
    {
        id: "delivery",
        label: "Build & delivery",
        description: "Versioning, packaging, and infrastructure for dependable releases.",
        icon: GitBranch,
        tools: [
            { name: "Git", icon: FaGitAlt, role: "Version control" },
            { name: "GitHub", icon: FaGithubSquare, role: "Collaboration" },
            { name: "GitHub Desktop", icon: FaSquareGithub, role: "Git client" },
            { name: "Docker", icon: FaDocker, role: "Containers" },
            { name: "Terraform", icon: SiTerraform, role: "Infrastructure" },
        ],
    },
    {
        id: "insight",
        label: "Insight & reliability",
        description: "Signals that keep products observable, measurable, and healthy.",
        icon: ScanSearch,
        tools: [
            { name: "Google Analytics", icon: SiGoogleanalytics, role: "Product analytics" },
            { name: "Sentry", icon: SiSentry, role: "Error monitoring" },
        ],
    },
];