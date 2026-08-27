import { motion, useReducedMotion } from "framer-motion";

const gridVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.035 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

export default function StackGrid({ items }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="custom-scrollbar max-h-[31rem] overflow-y-auto pr-2">
            <motion.div
                role="list"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
                variants={gridVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
            >
                {items.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            role="listitem"
                            key={tech.name}
                            variants={cardVariants}
                            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                            data-cursor-grid-ignore
                            className="hero-cursor-target group relative min-h-28 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-emerald-200/20 hover:bg-white/[0.045] hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-5 -top-6 h-16 w-16 rounded-full bg-emerald-300/0 blur-2xl transition-colors duration-300 group-hover:bg-emerald-300/[0.08]"
                            />
                            <div className="relative flex h-full flex-col justify-between gap-5">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0b1813] text-emerald-300 transition-colors duration-300 group-hover:border-emerald-200/15 group-hover:text-emerald-200">
                                        <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                                    </span>
                                    <span className="font-mono text-[8px] tracking-[0.12em] text-white/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <p className="font-sans text-sm font-medium leading-5 text-white/78 transition-colors group-hover:text-white">
                                    {tech.name}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
