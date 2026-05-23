export default function GridBackground({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050515] z-1">

            {/* Grid */}
            <div className="absolute inset-0 grid-bg" />

            {/* Ambient glows */}
            <div className="glow-blob-a animate-glow" />
            <div className="glow-blob-b animate-glow" />

            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050515]/30 to-[#050515]" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
