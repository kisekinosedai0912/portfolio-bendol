import { Code2, Globe, Server, Zap, Database as DatabaseIcon } from "lucide-react";
import Frontend from "@/components/pages/page-extensions/Frontend";
import Backend from "@/components/pages/page-extensions/Backend";
import WebDev from "@/components/pages/page-extensions/WebDev";
import Enterprise from "@/components/pages/page-extensions/Enterprise";
import Infra from "@/components/pages/page-extensions/Infrastracture";
import Database from "@/components/pages/page-extensions/Database";

export const tabs = [
    {
        id: "infra",
        label: "Infrastructure",
        eyebrow: "Infrastructure tools",
        description: "End-to-end tools for building and maintaining systems infrastructure seamlessly.",
        icon: Zap,  
        component: Infra,
        count: 11,
    },
    {
        id: "backend",
        label: "Back-end",
        eyebrow: "Services & workflows",
        description: "Languages, frameworks, and services for building reliable application backends.",
        icon: Server,
        component: Backend,
        count: 13,
    },
    {
        id: "frontend",
        label: "Front-end",
        eyebrow: "Interface systems",
        description: "Accessible, responsive interfaces with thoughtful state, data, and testing foundations.",
        icon: Code2,
        component: Frontend,
        count: 18,
    },
    {
        id: "webdev",
        label: "Web development",
        eyebrow: "End-to-end delivery",
        description: "The broader web ecosystem I use to build and maintain web applications.",
        icon: Globe,
        component: WebDev,
        count: 20,
    },
    {
        id: "database",
        label: "Databases",
        eyebrow: "Data & storage",
        description: "Databases and tools for storing, querying, and managing application data.",
        icon: DatabaseIcon,
        component: Database,
        count: 8,
    },
    {
        id: "enterprise",
        label: "Enterprise systems",
        eyebrow: "Enterprise platforms",
        description: "Application tooling for building and maintaining business-critical software systems.",
        icon: Zap,
        component: Enterprise,
        count: 4,
    },
];
