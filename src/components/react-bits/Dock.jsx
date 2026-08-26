import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const spring = { mass: 0.1, stiffness: 150, damping: 12 }
const baseItemSize = 46
const magnification = 64
const interactionDistance = 110

export default function Dock({ items, className = '' }) {
    const mouseY = useMotionValue(Infinity)

    return (
        <motion.nav
            className={`flex h-auto w-[62px] flex-col items-end justify-center gap-2 overflow-visible rounded-[1.65rem] border border-white/10 bg-[#0a0f0e]/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl ${className}`}
            onPointerMove={({ clientY }) => mouseY.set(clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            aria-label="Primary navigation"
        >
            {items.map((item) => (
                <DockItem key={item.label} item={item} mouseY={mouseY} />
            ))}
        </motion.nav>
    )
}

function DockItem({ item, mouseY }) {
    const itemRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const mouseDistance = useTransform(mouseY, (value) => {
        const bounds = itemRef.current?.getBoundingClientRect() ?? { y: 0, height: baseItemSize }

        return value - bounds.y - bounds.height / 2
    })
    const size = useSpring(
        useTransform(
            mouseDistance,
            [-interactionDistance, 0, interactionDistance],
            [baseItemSize, magnification, baseItemSize]
        ),
        spring
    )

    return (
        <motion.a
            ref={itemRef}
            href={item.href}
            style={{ width: size, height: size }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="relative flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#111714] text-white/65 shadow-md shadow-black/20 transition-colors hover:border-emerald-300/35 hover:bg-[#14201b] hover:text-emerald-300 focus-visible:text-emerald-300"
            aria-label={item.label}
        >
            <item.icon className="h-[42%] w-[42%]" strokeWidth={1.7} />

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: -6 }}
                        exit={{ opacity: 0, x: 4 }}
                        transition={{ duration: 0.18 }}
                        className="pointer-events-none absolute right-[calc(100%+0.65rem)] whitespace-nowrap rounded-md border border-white/10 bg-[#101614] px-2.5 py-1 font-mono text-[10px] text-white shadow-xl"
                        role="tooltip"
                    >
                        {item.label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.a>
    )
}
