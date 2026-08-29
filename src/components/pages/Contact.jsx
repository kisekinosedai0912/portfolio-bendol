import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contacts } from "@/assets/data/contacts";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden bg-[#0c1915] px-5 pb-32 pt-24 sm:px-8 md:py-24 md:pr-24 lg:px-12 lg:pr-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-emerald-400/[0.05] blur-[110px]"
            />

            <motion.div
                className="relative mx-auto w-full max-w-[82rem]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="mb-12 grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:pb-12">
                    <div>
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                            05 / Contact Channel
                        </p>
                        <h2 className="font-sans text-[clamp(1.875rem,3.5vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                            Start a <span className="text-emerald-300">conversation</span>
                        </h2>
                    </div>

                    <p className="max-w-xl font-sans text-sm leading-7 text-white/50 sm:text-base">
                        Have a system to build, a product to improve, or an engineering problem worth
                        untangling? Contact me through the channel that works best for you.
                    </p>
                </div>

                <div className="grid border-y border-white/[0.09] lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="flex flex-col justify-between border-b border-white/[0.09] bg-white/[0.02] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                        <div>
                            <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/65">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)]" />
                                Available for meaningful work
                            </span>
                            <p className="mt-7 max-w-sm font-sans text-[clamp(1.5rem,2.5vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white/90">
                                Let's have a great and meaningful conversation.
                            </p>
                        </div>

                        <div className="mt-12 border-l border-emerald-300/30 pl-4">
                            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                                Based in
                            </p>
                            <p className="mt-1 font-sans text-sm text-white/70">Philippines · Available remotely</p>
                        </div>
                    </div>

                    <div className="divide-y divide-white/[0.08]">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            const Wrapper = contact.href ? "a" : "div";

                            return (
                                <motion.div
                                    key={contact.label}
                                    initial={{ opacity: 0, x: 14 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.38, delay: index * 0.045, ease: 'easeOut' }}
                                    className="group bg-[#0a1210]/82 transition-colors duration-200 hover:bg-white/[0.04]"
                                >
                                    <Wrapper
                                        href={contact.href || undefined}
                                        target={contact.href?.startsWith("http") ? "_blank" : undefined}
                                        rel={contact.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="grid min-h-[6rem] grid-cols-[2.25rem_2.75rem_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-200/70 sm:grid-cols-[2.75rem_3rem_minmax(0,1fr)_auto] sm:gap-4 sm:px-6 md:px-8"
                                    >
                                        <span className="font-mono text-[9px] tracking-[0.18em] text-white/28">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center border border-emerald-200/12 bg-emerald-300/[0.07] text-emerald-300 sm:h-11 sm:w-11">
                                            <Icon className="h-[1.125rem] w-[1.125rem]" />
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                                                {contact.label}
                                            </span>
                                            <span className="mt-1 block truncate font-sans text-sm text-white/90 md:text-[15px]">
                                                {contact.value}
                                            </span>
                                        </span>

                                        {contact.href ? (
                                            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/35 transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                                        ) : null}
                                    </Wrapper>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/28">
                    <span>Response time / usually within 24 hours</span>
                    <span className="hidden sm:inline">Jasper Bendol · Software Engineer</span>
                </div>
            </motion.div>
        </section>
    );
}
