import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    FolderGit2,
    MapPin,
} from "lucide-react";
import Profile from "../../assets/img/profile.png";
import IdCard from "../IdCard";
import CountUp from "../react-bits/CountUp";

const focusAreas = [
    "System architecture",
    "Event-driven services",
    "Workflow automation",
    "Full-stack engineering",
];

export default function About() {
    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1713] px-5 pb-32 pt-24 sm:px-8 md:py-24 md:pr-24 lg:px-12 lg:pr-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[14%] top-[18%] h-64 w-64 rounded-full bg-emerald-400/[0.07] blur-[100px]"
            />

            <motion.div
                className="relative mx-auto w-full max-w-[82rem]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <div className="mb-12 text-center lg:mb-16">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                        01 / About me
                    </p>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
                    <div
                        data-cursor-grid-ignore
                        className="mx-auto w-fit lg:mx-0"
                    >
                        <IdCard
                            imageSrc={Profile}
                            imageAlt="Professional portrait of Jasper Bendol"
                            name="Jasper Bendol"
                            title="Mid-Level Software Engineer"
                            idNumber="326-8685-170"
                        />
                    </div>

                    <div className="flex flex-col items-start">
                        <p className="max-w-3xl font-sans text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                            I&apos;m currently employed at Sourcefit Philippines
                            as Full-stack Software Engineer managing automated
                            workflows, implementing new microservices, features,
                            optimizations that scales & leading the
                            microservices architecture change. I have over 2+
                            years of hands-on experience building
                            production-focused web systems. My tech stack is
                            diverse, but I&apos;m mostly interested in the
                            architecture behind systems that scales and how
                            microservices communicate, how workflows recover,
                            and how teams keep complex systems understandable &
                            maintainable.
                        </p>

                        <p className="mt-5 max-w-3xl font-sans text-sm leading-7 text-white/45 sm:text-base">
                            My current work centers on event-driven
                            microservices, automated workflows, system
                            optimization, and full-stack product delivery using
                            the JavaScript ecosystem and pragmatic backend
                            tooling.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {focusAreas.map((focus) => (
                                <span
                                    key={focus}
                                    data-cursor-grid-ignore
                                    className="hero-cursor-target rounded-full border border-emerald-200/12 bg-emerald-300/[0.045] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-100/65 sm:text-[10px]"
                                >
                                    {focus}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
                            <Metric
                                icon={BriefcaseBusiness}
                                to={2}
                                suffix="+"
                                label="Years experience"
                            />
                            <Metric
                                icon={FolderGit2}
                                to={13}
                                label="Projects completed"
                            />
                            <Metric
                                icon={MapPin}
                                value="PH"
                                label="Available remotely"
                            />
                        </div>

                        <a
                            href="#projects"
                            data-cursor-grid-ignore
                            className="primary-action hero-cursor-target group mt-7 inline-flex items-stretch bg-[#0b1713] font-mono text-[10px] font-medium uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5 sm:text-xs"
                        >
                            <span className="primary-action__label">
                                Explore selected work
                            </span>
                            <span className="primary-action__end text-emerald-200">
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function Metric({ icon: Icon, value, to, suffix = "", label }) {
    return (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
                {typeof to === "number" ? (
                    <CountUp
                        to={to}
                        duration={1.6}
                        suffix={suffix}
                        className="font-sans text-2xl font-medium tracking-[-0.04em] text-emerald-300"
                    />
                ) : (
                    <span className="font-sans text-2xl font-medium tracking-[-0.04em] text-emerald-300">
                        {value}
                    </span>
                )}
                <Icon
                    className="h-4 w-4 text-emerald-200/45"
                    strokeWidth={1.7}
                />
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                {label}
            </p>
        </div>
    );
}
