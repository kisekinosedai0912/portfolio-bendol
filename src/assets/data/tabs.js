import { Code2, Globe, Server, Zap } from "lucide-react";
import Frontend from "@/components/pages/page-extensions/Frontend";
import Backend from "@/components/pages/page-extensions/Backend";
import WebDev from "@/components/pages/page-extensions/WebDev";
import SoftwareDev from "@/components/pages/page-extensions/SoftwareDev";

export const tabs = [
    {
        id: "frontend",
        label: "Front-end",
        eyebrow: "Interface systems",
        description: "Accessible, responsive interfaces with thoughtful state, data, and testing foundations.",
        icon: Code2,
        component: Frontend,
        count: 17,
    },
    {
        id: "backend",
        label: "Back-end",
        eyebrow: "Services & workflows",
        description: "Reliable APIs, event-driven workflows, infrastructure, and production observability.",
        icon: Server,
        component: Backend,
        count: 20,
    },
    {
        id: "webdev",
        label: "Web development",
        eyebrow: "End-to-end delivery",
        description: "The broader web ecosystem I use to move products from database to deployment.",
        icon: Globe,
        component: WebDev,
        count: 33,
    },
    {
        id: "softwaredev",
        label: "Software development",
        eyebrow: "Enterprise platforms",
        description: "Application tooling for building and maintaining business-critical software systems.",
        icon: Zap,
        component: SoftwareDev,
        count: 4,
    },
];
