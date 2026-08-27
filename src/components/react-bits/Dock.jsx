import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const spring = { mass: 0.1, stiffness: 150, damping: 12 }
const interactionDistance = 110

function useIsDesktopDock() {
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
    )

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)')
        const update = () => setIsDesktop(media.matches)
        update()
        media.addEventListener('change', update)
        return () => media.removeEventListener('change', update)
    }, [])

    return isDesktop
}

function useDockItemSize(mouseX, mouseY, baseSize, magSize) {
    const itemRef = useRef(null)
    const mouseDistance = useTransform([mouseX, mouseY], ([x, y]) => {
        const bounds = itemRef.current?.getBoundingClientRect()
        if (!bounds || !Number.isFinite(x) || !Number.isFinite(y)) return Infinity

        const dx = x - (bounds.x + bounds.width / 2)
        const dy = y - (bounds.y + bounds.height / 2)
        return Math.hypot(dx, dy)
    })
    const size = useSpring(
        useTransform(mouseDistance, [0, interactionDistance], [magSize, baseSize]),
        spring
    )

    return { itemRef, size }
}

export default function Dock({ items, theme, onToggleTheme, className = '' }) {
    const isDesktop = useIsDesktopDock()
    const mouseX = useMotionValue(Infinity)
    const mouseY = useMotionValue(Infinity)
    const baseSize = isDesktop ? 46 : 36
    const magSize = isDesktop ? 64 : 46

    return (
        <motion.nav
            className={`flex w-max max-w-[calc(100vw-1rem)] flex-row items-end gap-1.5 overflow-visible rounded-full border border-white/10 bg-[#0a0f0e]/85 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl md:w-[62px] md:max-w-none md:flex-col md:gap-2 md:rounded-[1.65rem] md:p-2 ${className}`}
            onPointerMove={({ clientX, clientY }) => {
                mouseX.set(clientX)
                mouseY.set(clientY)
            }}
            onPointerLeave={() => {
                mouseX.set(Infinity)
                mouseY.set(Infinity)
            }}
            aria-label="Primary navigation"
        >
            {items.map((item) => (
                <DockItem
                    key={item.label}
                    item={item}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    baseSize={baseSize}
                    magSize={magSize}
                    isDesktop={isDesktop}
                />
            ))}
            <span aria-hidden="true" className="h-7 w-px bg-white/10 md:mx-auto md:h-px md:w-7" />
            <DockThemeToggle
                theme={theme}
                onToggle={onToggleTheme}
                mouseX={mouseX}
                mouseY={mouseY}
                baseSize={baseSize}
                magSize={magSize}
                isDesktop={isDesktop}
            />
        </motion.nav>
    )
}

function DockTooltip({ label, isDesktop }) {
    return (
        <motion.span
            initial={isDesktop ? { opacity: 0, x: 4 } : { opacity: 0, y: 4 }}
            animate={isDesktop ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
            exit={isDesktop ? { opacity: 0, x: 4 } : { opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#101614] px-2.5 py-1 font-mono text-[10px] text-white shadow-xl md:bottom-auto md:left-auto md:right-[calc(100%+0.8rem)] md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
            role="tooltip"
        >
            {label}
        </motion.span>
    )
}

function DockThemeToggle({ theme, onToggle, mouseX, mouseY, baseSize, magSize, isDesktop }) {
    const [isHovered, setIsHovered] = useState(false)
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const Icon = theme === 'dark' ? Sun : Moon
    const { itemRef, size } = useDockItemSize(mouseX, mouseY, baseSize, magSize)

    return (
        <motion.button
            ref={itemRef}
            type="button"
            style={{ width: size, height: size }}
            onClick={onToggle}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="relative flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#111714] text-white/65 shadow-md shadow-black/20 transition-colors hover:border-emerald-300/35 hover:bg-[#14201b] hover:text-emerald-300 focus-visible:text-emerald-300"
            aria-label={`Switch to ${nextTheme} theme`}
            aria-pressed={theme === 'light'}
        >
            <Icon className="h-[42%] w-[42%]" strokeWidth={1.7} />

            <AnimatePresence>
                {isHovered ? (
                    <DockTooltip
                        label={nextTheme === 'light' ? 'Light mode' : 'Dark mode'}
                        isDesktop={isDesktop}
                    />
                ) : null}
            </AnimatePresence>
        </motion.button>
    )
}

function DockItem({ item, mouseX, mouseY, baseSize, magSize, isDesktop }) {
    const [isHovered, setIsHovered] = useState(false)
    const { itemRef, size } = useDockItemSize(mouseX, mouseY, baseSize, magSize)

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
                {isHovered ? <DockTooltip label={item.label} isDesktop={isDesktop} /> : null}
            </AnimatePresence>
        </motion.a>
    )
}
