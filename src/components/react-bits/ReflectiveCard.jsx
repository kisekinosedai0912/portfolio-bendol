import { useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function ReflectiveCard({
    imageSrc,
    imageAlt,
    children,
    roughness = 0.2,
    metalness = 0.65,
    displacementStrength = 8,
    glassDistortion = 8,
    grayscale = 0,
}) {
    const cardRef = useRef(null);
    const maxTilt = clamp(displacementStrength * 0.55, 2, 8);
    const reflectionOpacity = clamp(0.08 + metalness * 0.18, 0.08, 0.28);
    const reflectionBlur = clamp(roughness * 24, 2, 14);

    const handlePointerMove = (event) => {
        if (event.pointerType !== "mouse" || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);

        cardRef.current.style.setProperty("--card-rx", `${(0.5 - y) * maxTilt}deg`);
        cardRef.current.style.setProperty("--card-ry", `${(x - 0.5) * maxTilt}deg`);
        cardRef.current.style.setProperty("--shine-x", `${x * 100}%`);
        cardRef.current.style.setProperty("--shine-y", `${y * 100}%`);
    };

    const resetCard = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty("--card-rx", "0deg");
        cardRef.current.style.setProperty("--card-ry", "0deg");
        cardRef.current.style.setProperty("--shine-x", "50%");
        cardRef.current.style.setProperty("--shine-y", "38%");
    };

    return (
        <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetCard}
            onPointerCancel={resetCard}
            className="relative aspect-[4/5] w-full transition-transform duration-300 ease-out motion-reduce:transform-none"
            style={{
                "--card-rx": "0deg",
                "--card-ry": "0deg",
                "--shine-x": "50%",
                "--shine-y": "38%",
                transform: "perspective(900px) rotateX(var(--card-rx)) rotateY(var(--card-ry))",
                transformStyle: "preserve-3d",
            }}
        >
            <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[#0a1511] shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-top"
                    style={{ filter: `grayscale(${clamp(grayscale, 0, 1)})` }}
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at var(--shine-x) var(--shine-y), rgba(236, 253, 245, ${reflectionOpacity}) 0%, rgba(110, 231, 183, 0.055) 22%, transparent 52%)`,
                        filter: `blur(${reflectionBlur}px)`,
                    }}
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,transparent_24%,transparent_66%,rgba(52,211,153,0.08)_100%)]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07100d]/5 via-transparent to-[#07100d]/80"
                    style={{ backdropFilter: `blur(${clamp(glassDistortion * 0.08, 0, 1.2)}px)` }}
                />

                <div className="absolute inset-0 flex flex-col justify-between p-5">
                    {children}
                </div>
            </div>
        </div>
    );
}
