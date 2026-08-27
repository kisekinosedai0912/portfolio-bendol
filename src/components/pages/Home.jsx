import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import FoldText from '../react-bits/FoldText'
import Orb from '../react-bits/Orb'
import TargetCursor from '../react-bits/TargetCursor'

export default function Home() {
    return (
        <section id="home" className="relative flex h-screen h-svh max-h-screen max-h-svh items-center overflow-hidden bg-[#07100d] px-5 py-5 pr-20 sm:px-8 sm:pr-24 lg:px-12 lg:pr-28">
            <TargetCursor
                targetSelector=".hero-cursor-target"
                cursorColor="#6ee7b7"
                cursorColorOnTarget="#ecfdf5"
                spinDuration={2}
                hoverDuration={0.2}
            />
            <motion.div
                className="mx-auto grid h-full w-full max-w-[82rem] content-center items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10 xl:gap-16"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <div className="flex flex-col items-start">
                    <a
                        href="#contact"
                        data-cursor-grid-ignore
                        className="primary-action hero-cursor-target group mb-5 inline-flex items-stretch border border-white/10 bg-[#0b1713] font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 shadow-lg shadow-black/15 transition-transform duration-200 hover:-translate-y-0.5 sm:mb-7 sm:text-[10px]"
                    >
                        <span className="primary-action__label">
                            Available
                        </span>
                        <span className="primary-action__end gap-2 whitespace-nowrap">
                            New projects
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <h1 className="max-w-2xl font-sans text-[clamp(2.5rem,4.15vw,4.125rem)] font-medium leading-[1.06] tracking-[-0.025em] text-white">
                        <FoldText
                            text="Engineering your ideas"
                            className="block"
                            color="var(--theme-heading)"
                        />
                        <FoldText
                            text="through systems"
                            className="block"
                            color="var(--theme-accent)"
                        />
                    </h1>

                    <p className="mt-5 max-w-xl font-sans text-sm leading-6 text-white/55 sm:mt-6 sm:text-base sm:leading-7">
                        I&apos;m Jasper, a software engineer building reliable full-stack systems,
                        scalable architecture, and thoughtful user/developer experiences.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                        <a
                            href="#projects"
                            data-cursor-grid-ignore
                            className="primary-action hero-cursor-target group inline-flex items-stretch bg-[#0b1713] font-mono text-[10px] font-medium uppercase tracking-[0.1em] shadow-lg shadow-emerald-400/15 transition-transform duration-200 hover:-translate-y-0.5 sm:text-xs"
                        >
                            <span className="primary-action__label">Browse projects</span>
                            <span className="primary-action__end text-emerald-200">
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                        <a
                            href="/Developer_Resume_Jasper_Bendol.pdf"
                            download
                            data-cursor-grid-ignore
                            className="hero-cursor-target inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:px-6 sm:text-xs"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    <p className="mt-5 font-pixel-line text-[9px] uppercase tracking-[0.2em] text-white/35 sm:mt-6 sm:text-[11px]">
                        Mid-level Software Engineer <span className="px-2 text-emerald-300/60">•</span> Clean code
                    </p>
                </div>

                <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[126%] max-w-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-100 drop-shadow-[0_0_36px_rgba(52,211,153,0.2)]">
                        <Orb hue={108} hoverIntensity={0.4} rotateOnHover={false} backgroundColor="#07100d" />
                    </div>
                    <div
                        data-cursor-grid-ignore
                        className="relative z-10 w-[86%] max-w-[29rem] overflow-hidden rounded-[1.15rem] shadow-[0_24px_80px_rgba(0,0,0,0.48)]"
                    >
                        <img
                            src="/snippet.png"
                            alt="JavaScript code describing Jasper's software engineering focus"
                            className="block h-auto w-full rounded-[1.15rem] opacity-[0.94]"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
