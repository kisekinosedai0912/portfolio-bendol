import { Activity, Fingerprint, Lock } from "lucide-react";

export default function IdCard({
    imageSrc,
    imageAlt,
    name,
    title,
    idNumber,
}) {
    return (
        <div
            className="
                relative isolate h-[500px] w-[320px] overflow-hidden
                rounded-2xl border border-white/[0.08] bg-[#0a1210]/88
                shadow-xl shadow-emerald-950/35 backdrop-blur-sm
            "
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                }}
            />

            <div className="relative z-10 flex h-full flex-col p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div
                        data-cursor-grid-ignore
                        className="
                            hero-cursor-target inline-flex items-center gap-1.5 rounded-full
                            border border-emerald-200/12 bg-emerald-300/[0.045]
                            px-3 py-1.5 font-mono text-[9px] font-medium
                            uppercase tracking-[0.18em] text-emerald-100/75
                        "
                    >
                        <Lock size={12} className="text-emerald-300" />
                        <span>Secure Access</span>
                    </div>
                    <Activity size={18} className="text-emerald-300/80" />
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="flex flex-1 items-center justify-center py-4">
                        <div className="aspect-square w-full max-w-[11.5rem] overflow-hidden rounded-xl border border-emerald-200/12 bg-white/[0.025]">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                width="480"
                                height="768"
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    <h2 className="text-center font-sans text-2xl font-medium uppercase tracking-[-0.03em] text-white">
                        {name}
                    </h2>
                    <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200/75">
                        {title}
                    </p>
                </div>

                <div className="mt-4 flex items-end justify-between border-t border-white/[0.08] pt-5">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                            ID Number
                        </span>
                        <span className="font-mono text-sm tracking-[0.05em] text-white/90">
                            {idNumber}
                        </span>
                    </div>
                    <Fingerprint size={28} className="text-emerald-300/45" />
                </div>
            </div>
        </div>
    );
}
