export default function Loader() {
    return (
        <div
            className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[var(--theme-page)]"
            role="status"
            aria-label="Loading"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[18%] top-[28%] h-64 w-64 rounded-full bg-emerald-400/[0.08] blur-[110px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[18%] right-[12%] h-56 w-56 rounded-full bg-lime-300/[0.05] blur-[110px]"
            />

            <div className="relative flex flex-col items-center px-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                    00 / Initializing
                </p>

                <div className="relative mb-7 h-16 w-16">
                    <div className="loader-spin absolute inset-0">
                        <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-emerald-300" />
                        <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r border-t border-emerald-300" />
                        <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l border-emerald-300" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r border-emerald-300" />
                    </div>
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
                    <span className="loader-pulse absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/30" />
                </div>

                <p className="font-pixel text-lg tracking-[0.14em] text-white sm:text-xl">
                    Loading systems
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                    Jasper Bendol · Software Engineer
                </p>

                <div className="mt-8 h-px w-44 overflow-hidden bg-white/[0.08]">
                    <div className="loader-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                </div>
            </div>
        </div>
    )
}
