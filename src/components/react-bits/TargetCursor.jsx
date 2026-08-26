import { useCallback, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import './TargetCursor.css'

const idleCornerPositions = [
    { x: -18, y: -18 },
    { x: 6, y: -18 },
    { x: 6, y: 6 },
    { x: -18, y: 6 }
]

export default function TargetCursor({
    targetSelector = '.cursor-target',
    spinDuration = 2,
    hideDefaultCursor = true,
    hoverDuration = 0.2,
    parallaxOn = true,
    cursorColor = '#ffffff',
    cursorColorOnTarget
}) {
    const cursorRef = useRef(null)
    const dotRef = useRef(null)
    const cornersRef = useRef([])
    const spinTimelineRef = useRef(null)
    const activeTargetRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const isMobile = useMemo(() => {
        if (typeof window === 'undefined') return false
        const touchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        const smallScreen = window.innerWidth <= 768
        const mobileAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
            .test(navigator.userAgent.toLowerCase())
        return (touchScreen && smallScreen) || mobileAgent
    }, [])

    const moveCursor = useCallback((x, y) => {
        if (!cursorRef.current) return
        mouseRef.current = { x, y }
        gsap.to(cursorRef.current, { x, y, duration: 0.1, ease: 'power3.out' })
    }, [])

    useEffect(() => {
        if (isMobile || !cursorRef.current) return undefined

        const cursor = cursorRef.current
        const corners = cornersRef.current.filter(Boolean)
        const originalCursor = document.body.style.cursor
        let tickerActive = false

        if (hideDefaultCursor) document.body.style.cursor = 'none'

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        })

        const startSpin = () => {
            spinTimelineRef.current?.kill()
            spinTimelineRef.current = gsap.timeline({ repeat: -1 })
                .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' })
        }

        const updateTargetCorners = () => {
            const target = activeTargetRef.current
            if (!target) return

            const rect = target.getBoundingClientRect()
            const { x, y } = mouseRef.current
            const positions = [
                { x: rect.left - 3 - x, y: rect.top - 3 - y },
                { x: rect.right - 9 - x, y: rect.top - 3 - y },
                { x: rect.right - 9 - x, y: rect.bottom - 9 - y },
                { x: rect.left - 3 - x, y: rect.bottom - 9 - y }
            ]

            corners.forEach((corner, index) => {
                gsap.to(corner, {
                    ...positions[index],
                    duration: parallaxOn ? 0.2 : 0,
                    ease: parallaxOn ? 'power1.out' : 'none',
                    overwrite: 'auto'
                })
            })
        }

        const ticker = () => updateTargetCorners()

        const leaveTarget = () => {
            if (!activeTargetRef.current) return
            activeTargetRef.current = null
            if (tickerActive) {
                gsap.ticker.remove(ticker)
                tickerActive = false
            }

            gsap.to(corners, {
                borderColor: cursorColor,
                duration: 0.15,
                ease: 'power2.out'
            })
            if (dotRef.current) {
                gsap.to(dotRef.current, { backgroundColor: cursorColor, duration: 0.15 })
            }

            corners.forEach((corner, index) => {
                gsap.to(corner, {
                    ...idleCornerPositions[index],
                    duration: 0.3,
                    ease: 'power3.out'
                })
            })
            gsap.delayedCall(0.05, startSpin)
        }

        const enterTarget = (target) => {
            if (activeTargetRef.current === target) return
            leaveTarget()
            activeTargetRef.current = target

            spinTimelineRef.current?.pause()
            gsap.set(cursor, { rotation: 0 })
            if (cursorColorOnTarget) {
                gsap.to(corners, {
                    borderColor: cursorColorOnTarget,
                    duration: 0.15,
                    ease: 'power2.out'
                })
                if (dotRef.current) {
                    gsap.to(dotRef.current, {
                        backgroundColor: cursorColorOnTarget,
                        duration: 0.15
                    })
                }
            }

            updateTargetCorners()
            gsap.to(corners, { duration: hoverDuration, ease: 'power2.out' })
            if (!tickerActive) {
                gsap.ticker.add(ticker)
                tickerActive = true
            }
        }

        const mouseMoveHandler = (event) => moveCursor(event.clientX, event.clientY)
        const mouseOverHandler = (event) => {
            const target = event.target.closest?.(targetSelector)
            if (target) enterTarget(target)
        }
        const mouseOutHandler = (event) => {
            const target = event.target.closest?.(targetSelector)
            if (!target || target.contains(event.relatedTarget)) return
            leaveTarget()
        }
        const mouseDownHandler = () => {
            gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 })
            gsap.to(cursor, { scale: 0.9, duration: 0.2 })
        }
        const mouseUpHandler = () => {
            gsap.to(dotRef.current, { scale: 1, duration: 0.3 })
            gsap.to(cursor, { scale: 1, duration: 0.2 })
        }

        startSpin()
        window.addEventListener('mousemove', mouseMoveHandler)
        window.addEventListener('mouseover', mouseOverHandler, { passive: true })
        window.addEventListener('mouseout', mouseOutHandler, { passive: true })
        window.addEventListener('scroll', updateTargetCorners, { passive: true })
        window.addEventListener('mousedown', mouseDownHandler)
        window.addEventListener('mouseup', mouseUpHandler)

        return () => {
            if (tickerActive) gsap.ticker.remove(ticker)
            window.removeEventListener('mousemove', mouseMoveHandler)
            window.removeEventListener('mouseover', mouseOverHandler)
            window.removeEventListener('mouseout', mouseOutHandler)
            window.removeEventListener('scroll', updateTargetCorners)
            window.removeEventListener('mousedown', mouseDownHandler)
            window.removeEventListener('mouseup', mouseUpHandler)
            spinTimelineRef.current?.kill()
            document.body.style.cursor = originalCursor
        }
    }, [cursorColor, cursorColorOnTarget, hideDefaultCursor, hoverDuration, isMobile, moveCursor, parallaxOn, spinDuration, targetSelector])

    if (isMobile) return null

    return (
        <div ref={cursorRef} className="target-cursor-wrapper" aria-hidden="true">
            <div ref={dotRef} className="target-cursor-dot" style={{ backgroundColor: cursorColor }} />
            {['corner-tl', 'corner-tr', 'corner-br', 'corner-bl'].map((className, index) => (
                <div
                    key={className}
                    ref={(element) => { cornersRef.current[index] = element }}
                    className={`target-cursor-corner ${className}`}
                    style={{ borderColor: cursorColor }}
                />
            ))}
        </div>
    )
}
