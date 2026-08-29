import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/react-bits/CountUp";
import { tabs } from '@/assets/data/tabs'

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("frontend");
    const shouldReduceMotion = useReducedMotion();
    const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
    const ActiveContent = activeTabData.component;
    const layoutTransition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.42, ease: [0.22, 1, 0.36, 1] };

    const selectTabFromKeyboard = (event, index) => {
        let nextIndex = index;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = tabs.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        const nextTab = tabs[nextIndex];
        setActiveTab(nextTab.id);
        document.getElementById(`stack-tab-${nextTab.id}`)?.focus();
    };

    return (
        <section
            id="tech-stack"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1a16] px-5 pb-32 pt-24 sm:px-8 md:py-24 md:pr-24 lg:px-12 lg:pr-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-[110px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-lime-300/[0.035] blur-[110px]"
            />

            <motion.div
                className="relative mx-auto w-full max-w-[82rem]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <div className="mb-12 grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:pb-12">
                    <div>
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                            03 / What I work with
                        </p>
                        <h2 className="font-sans text-[clamp(1.875rem,3.5vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                            Tech <span className="text-emerald-300">Stack</span>
                        </h2>
                    </div>

                    <p className="max-w-xl font-sans text-sm leading-7 text-white/50 sm:text-base">
                        Technologies I combine to build responsive, maintainable interfaces, dependable services, systems,
                        and ship as production ready solution.
                    </p>
                </div>

                <motion.div
                    layout={shouldReduceMotion ? false : "size"}
                    layoutDependency={activeTab}
                    transition={{ layout: layoutTransition }}
                    className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#091510]/80 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm"
                    style={{ overflowAnchor: "none" }}
                >
                    <motion.div
                        layout={shouldReduceMotion ? false : "size"}
                        layoutDependency={activeTab}
                        transition={{ layout: layoutTransition }}
                        className="grid lg:grid-cols-[17rem_1fr]"
                    >
                        <div
                            role="tablist"
                            aria-label="Technology stack categories"
                            className="grid grid-cols-2 gap-2 border-b border-white/[0.08] bg-white/[0.018] p-3 sm:grid-cols-4 lg:grid-cols-1 lg:border-b-0 lg:border-r lg:p-4"
                        >
                            {tabs.map((tab, index) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;

                                return (
                                    <button
                                        id={`stack-tab-${tab.id}`}
                                        key={tab.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-controls="stack-panel"
                                        tabIndex={isActive ? 0 : -1}
                                        onClick={() => setActiveTab(tab.id)}
                                        onKeyDown={(event) => selectTabFromKeyboard(event, index)}
                                        data-cursor-grid-ignore
                                        className={`hero-cursor-target group relative flex min-h-20 items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-[background-color,border-color,color] duration-200 sm:flex-col sm:items-start lg:min-h-0 lg:flex-row lg:items-center lg:px-4 ${
                                            isActive
                                                ? "border-emerald-200/15 bg-emerald-300/[0.09] text-white"
                                                : "border-transparent text-white/45 hover:border-white/[0.07] hover:bg-white/[0.03] hover:text-white/75"
                                        }`}
                                    >
                                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                                            isActive
                                                ? "border-emerald-200/15 bg-emerald-300 text-[#07100d]"
                                                : "border-white/[0.08] bg-white/[0.03] text-emerald-200/55 group-hover:text-emerald-200"
                                        }`}>
                                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block font-sans text-xs font-medium leading-4 sm:text-[11px] lg:text-xs">
                                                {tab.label}
                                            </span>
                                            <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.12em] text-white/28 lg:block">
                                                {String(tab.count).padStart(2, "0")} technologies
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <motion.div
                            id="stack-panel"
                            role="tabpanel"
                            aria-labelledby={`stack-tab-${activeTab}`}
                            layout={shouldReduceMotion ? false : "size"}
                            layoutDependency={activeTab}
                            transition={{ layout: layoutTransition }}
                            className="relative min-w-0 overflow-hidden p-4 sm:p-6 lg:p-8"
                        >
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.div
                                    key={activeTab}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                                    transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
                                >
                                    <div className="mb-6 flex items-end justify-between gap-5 border-b border-white/[0.07] pb-5">
                                        <div>
                                            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/55">
                                                {activeTabData.eyebrow}
                                            </p>
                                            <h3 className="mt-2 font-sans text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                                                {activeTabData.label}
                                            </h3>
                                            <p className="mt-2 max-w-2xl font-sans text-xs leading-5 text-white/38 sm:text-sm sm:leading-6">
                                                {activeTabData.description}
                                            </p>
                                        </div>

                                        <div className="hidden shrink-0 text-right sm:block">
                                            <CountUp
                                                key={activeTab}
                                                to={activeTabData.count}
                                                duration={1.4}
                                                padStart={2}
                                                className="font-sans text-2xl font-medium tracking-[-0.04em] text-emerald-300"
                                            />
                                            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/28">
                                                Technologies
                                            </p>
                                        </div>
                                    </div>

                                    <ActiveContent />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
