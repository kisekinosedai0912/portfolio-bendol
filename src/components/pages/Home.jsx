import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTypewriter } from '../../hooks/typeWriterHook.js'

export default function Home() {
    const phrases = [
        "Jasper Bendol",
        "a Web Developer",
        "a Software Developer",
        "a System Designer",
        "a Full-stack Developer"
    ]
    const { phrase, index } = useTypewriter(phrases)

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 z-100">
            <motion.div
                className="flex flex-col items-center md:items-start gap-6 w-full max-w-4xl text-center md:text-left"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Availability pill */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-white/70">
                        Available for work
                    </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-[clamp(2.5rem,5vw,4.5rem)] md:whitespace-nowrap font-semibold tracking-tight leading-[1.05] text-white">
                    Hi! I am{" "}
                    <span className="relative inline-block align-baseline overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                className="gradient-text inline-block"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                            >
                                {phrase}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h1>

                {/* Line 2 */}
                <h2 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-white/90">
                    Engineering your ideas through systems
                </h2>

                {/* Line 3 */}
                <h2 className="font-display text-2xl md:text-4xl font-medium tracking-tight">
                    <span className="gradient-text">always building</span>{" "}
                    <span className="text-white/90">&</span>{" "}
                    <span className="gradient-text">shipping!</span>
                </h2>

                {/* CTA */}
                <a
                    href="#about"
                    className="
                        group mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-lg
                        bg-gradient-to-r from-[#6162ff] to-[#b352ff]
                        text-white font-jetbrains text-sm tracking-wide
                        shadow-lg shadow-[#6162ff]/25
                        hover:-translate-y-0.5 hover:shadow-[#b352ff]/40
                        transition-all duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60
                    "
                >
                    Explore me
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
            </motion.div>
        </section>
    )
}
