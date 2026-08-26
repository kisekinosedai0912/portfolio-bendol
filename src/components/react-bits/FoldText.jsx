import { useCallback, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

const hingeStyles = {
    top: { rotationX: -92, rotationY: 0, transformOrigin: '50% 0%' },
    bottom: { rotationX: 92, rotationY: 0, transformOrigin: '50% 100%' },
    left: { rotationX: 0, rotationY: 92, transformOrigin: '0% 50%' },
    right: { rotationX: 0, rotationY: -92, transformOrigin: '100% 50%' }
}

function splitText(text, splitBy) {
    if (splitBy === 'line') return text.split('\n')
    if (splitBy === 'word') return text.split(/(\s+)/).filter(Boolean)
    return Array.from(text)
}

export default function FoldText({
    text = 'Design unfolds',
    splitBy = 'char',
    hinge = 'top',
    duration = 0.65,
    stagger = 0.045,
    ease = 'power3.out',
    perspective = 700,
    creaseShading = 0.55,
    trigger = 'mount',
    fontSize = 'inherit',
    fontWeight = 'inherit',
    color = 'currentColor',
    className = '',
    style = {}
}) {
    const rootRef = useRef(null)
    const panelRefs = useRef([])
    const shadeRefs = useRef([])
    const timelineRef = useRef(null)
    const segments = useMemo(() => splitText(text, splitBy), [splitBy, text])

    const play = useCallback(() => {
        const panels = panelRefs.current.filter(Boolean)
        const shades = shadeRefs.current.filter(Boolean)
        const hingeStyle = hingeStyles[hinge] ?? hingeStyles.top

        timelineRef.current?.kill()
        gsap.set(panels, {
            ...hingeStyle,
            opacity: 0,
            transformPerspective: perspective,
            force3D: true
        })
        gsap.set(shades, { opacity: creaseShading })

        timelineRef.current = gsap.timeline()
            .to(panels, {
                rotationX: 0,
                rotationY: 0,
                opacity: 1,
                duration,
                stagger,
                ease
            })
            .to(shades, {
                opacity: 0,
                duration: duration * 0.75,
                stagger,
                ease: 'power2.out'
            }, 0)
    }, [creaseShading, duration, ease, hinge, perspective, stagger])

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(panelRefs.current.filter(Boolean), { clearProps: 'all', opacity: 1 })
            return undefined
        }

        if (trigger === 'mount') play()

        if (trigger === 'scroll' && rootRef.current) {
            const observer = new IntersectionObserver(([entry]) => {
                if (!entry.isIntersecting) return
                play()
                observer.disconnect()
            }, { threshold: 0.35 })

            observer.observe(rootRef.current)
            return () => observer.disconnect()
        }

        return () => timelineRef.current?.kill()
    }, [play, trigger])

    return (
        <span
            ref={rootRef}
            className={className}
            style={{
                color,
                fontSize,
                fontWeight,
                perspective: `${perspective}px`,
                ...style
            }}
            onMouseEnter={trigger === 'hover' ? play : undefined}
            aria-label={text}
        >
            {segments.map((segment, index) => (
                <span
                    key={`${segment}-${index}`}
                    className="relative inline-block"
                    style={{ perspective: `${perspective}px`, whiteSpace: 'pre' }}
                    aria-hidden="true"
                >
                    <span
                        ref={(element) => { panelRefs.current[index] = element }}
                        className="relative inline-block will-change-transform"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {segment}
                        <span
                            ref={(element) => { shadeRefs.current[index] = element }}
                            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"
                            aria-hidden="true"
                        />
                    </span>
                </span>
            ))}
        </span>
    )
}
