import { useEffect, useRef } from 'react'

const falloffCurves = {
    linear: (value) => value,
    smooth: (value) => value * value * (3 - 2 * value),
    sharp: (value) => value * value * value
}

export default function CursorGrid({
    cellSize = 72,
    color = '#34d399',
    radius = 150,
    falloff = 'smooth',
    holdTime = 300,
    fadeDuration = 700,
    lineWidth = 1,
    maxOpacity = 0.55,
    fillOpacity = 0.025,
    gridOpacity = 0,
    cellRadius = 0,
    clickPulse = true,
    pulseSpeed = 600,
    className = ''
}) {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const propertiesRef = useRef({
        cellSize,
        color,
        radius,
        falloff,
        holdTime,
        fadeDuration,
        lineWidth,
        maxOpacity,
        fillOpacity,
        gridOpacity,
        cellRadius,
        clickPulse,
        pulseSpeed
    })
    const wakeRef = useRef(null)

    useEffect(() => {
        propertiesRef.current = {
            cellSize,
            color,
            radius,
            falloff,
            holdTime,
            fadeDuration,
            lineWidth,
            maxOpacity,
            fillOpacity,
            gridOpacity,
            cellRadius,
            clickPulse,
            pulseSpeed
        }
        wakeRef.current?.()
    }, [
        cellRadius,
        cellSize,
        clickPulse,
        color,
        fadeDuration,
        falloff,
        fillOpacity,
        gridOpacity,
        holdTime,
        lineWidth,
        maxOpacity,
        pulseSpeed,
        radius
    ])

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return

        const context = canvas.getContext('2d')
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const pulses = []
        let columns = 0
        let rows = 0
        let offsetX = 0
        let offsetY = 0
        let alphas = new Float32Array(0)
        let touched = new Float64Array(0)
        let width = 0
        let height = 0
        let animationFrame = 0
        let running = false
        let lastFrame = 0

        const rebuild = () => {
            const properties = propertiesRef.current
            width = container.offsetWidth
            height = container.offsetHeight
            canvas.width = Math.max(1, Math.round(width * dpr))
            canvas.height = Math.max(1, Math.round(height * dpr))
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            context.setTransform(dpr, 0, 0, dpr, 0, 0)
            columns = Math.ceil(width / properties.cellSize) + 1
            rows = Math.ceil(height / properties.cellSize) + 1
            offsetX = (width - columns * properties.cellSize) / 2
            offsetY = (height - rows * properties.cellSize) / 2
            alphas = new Float32Array(columns * rows)
            touched = new Float64Array(columns * rows)
        }

        const cellCenter = (index) => {
            const properties = propertiesRef.current
            const x = offsetX + (index % columns) * properties.cellSize + properties.cellSize / 2
            const y = offsetY + Math.floor(index / columns) * properties.cellSize + properties.cellSize / 2

            return [x, y]
        }

        const energize = (x, y, boost = 1) => {
            const properties = propertiesRef.current
            const activeRadius = Math.max(properties.radius, 1)
            const ease = falloffCurves[properties.falloff] ?? falloffCurves.linear
            const now = performance.now()
            const minColumn = Math.max(0, Math.floor((x - activeRadius - offsetX) / properties.cellSize))
            const maxColumn = Math.min(columns - 1, Math.floor((x + activeRadius - offsetX) / properties.cellSize))
            const minRow = Math.max(0, Math.floor((y - activeRadius - offsetY) / properties.cellSize))
            const maxRow = Math.min(rows - 1, Math.floor((y + activeRadius - offsetY) / properties.cellSize))

            for (let row = minRow; row <= maxRow; row++) {
                for (let column = minColumn; column <= maxColumn; column++) {
                    const index = row * columns + column
                    const [centerX, centerY] = cellCenter(index)
                    const distance = Math.hypot(centerX - x, centerY - y)
                    if (distance > activeRadius) continue

                    const level = ease(1 - distance / activeRadius) * properties.maxOpacity * boost
                    if (level > alphas[index]) alphas[index] = level
                    if (level > 0) touched[index] = now
                }
            }
        }

        const roundedCell = (x, y, size, radiusValue) => {
            context.beginPath()
            if (radiusValue > 0) context.roundRect(x, y, size, size, radiusValue)
            else context.rect(x, y, size, size)
        }

        const draw = (now) => {
            const properties = propertiesRef.current
            const delta = Math.min(now - lastFrame, 50)
            const [red, green, blue] = hexToRgb(properties.color)
            lastFrame = now
            context.clearRect(0, 0, width, height)

            if (properties.gridOpacity > 0) {
                context.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${properties.gridOpacity})`
                context.lineWidth = 1
                context.beginPath()
                for (let column = 0; column <= columns; column++) {
                    const x = Math.round(offsetX + column * properties.cellSize) + 0.5
                    context.moveTo(x, 0)
                    context.lineTo(x, height)
                }
                for (let row = 0; row <= rows; row++) {
                    const y = Math.round(offsetY + row * properties.cellSize) + 0.5
                    context.moveTo(0, y)
                    context.lineTo(width, y)
                }
                context.stroke()
            }

            for (let pulseIndex = pulses.length - 1; pulseIndex >= 0; pulseIndex--) {
                const pulse = pulses[pulseIndex]
                const ringRadius = ((now - pulse.startedAt) / 1000) * properties.pulseSpeed
                if (ringRadius > Math.hypot(width, height)) {
                    pulses.splice(pulseIndex, 1)
                    continue
                }

                const band = properties.cellSize
                for (let index = 0; index < alphas.length; index++) {
                    const [centerX, centerY] = cellCenter(index)
                    const distance = Math.hypot(centerX - pulse.x, centerY - pulse.y)
                    if (Math.abs(distance - ringRadius) < band / 2) {
                        alphas[index] = Math.max(alphas[index], properties.maxOpacity)
                        touched[index] = now
                    }
                }
            }

            let anyVisible = pulses.length > 0
            const fadeStep = delta / Math.max(properties.fadeDuration, 16)
            const halfCell = properties.cellSize / 2

            for (let index = 0; index < alphas.length; index++) {
                let alpha = alphas[index]
                if (alpha <= 0) continue
                if (now - touched[index] > properties.holdTime) {
                    alpha = Math.max(0, alpha - fadeStep)
                    alphas[index] = alpha
                    if (alpha <= 0) continue
                }

                anyVisible = true
                const [centerX, centerY] = cellCenter(index)
                const gradient = context.createRadialGradient(
                    centerX,
                    centerY,
                    halfCell * 0.1,
                    centerX,
                    centerY,
                    properties.cellSize
                )
                gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha})`)
                gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`)

                const x = centerX - halfCell + 0.5
                const y = centerY - halfCell + 0.5
                const size = properties.cellSize - 1
                roundedCell(x, y, size, properties.cellRadius)
                if (properties.fillOpacity > 0) {
                    context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * properties.fillOpacity})`
                    context.fill()
                }
                context.strokeStyle = gradient
                context.lineWidth = properties.lineWidth
                context.stroke()
            }

            if (anyVisible) animationFrame = requestAnimationFrame(draw)
            else running = false
        }

        const wake = () => {
            if (running) return
            running = true
            lastFrame = performance.now()
            animationFrame = requestAnimationFrame(draw)
        }

        const isIgnoredTarget = (target) => {
            return target instanceof Element && target.closest('[data-cursor-grid-ignore]')
        }
        const clearGrid = () => {
            cancelAnimationFrame(animationFrame)
            alphas.fill(0)
            pulses.length = 0
            running = false
            context.clearRect(0, 0, width, height)
        }
        const handlePointerMove = ({ clientX, clientY, target }) => {
            if (isIgnoredTarget(target)) {
                clearGrid()
                return
            }
            energize(clientX, clientY)
            wake()
        }
        const handlePointerDown = ({ clientX, clientY, target }) => {
            if (isIgnoredTarget(target)) {
                clearGrid()
                return
            }
            if (!propertiesRef.current.clickPulse) return
            pulses.push({ x: clientX, y: clientY, startedAt: performance.now() })
            wake()
        }
        const resizeObserver = new ResizeObserver(() => {
            rebuild()
            wake()
        })

        wakeRef.current = wake
        resizeObserver.observe(container)
        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerdown', handlePointerDown)
        rebuild()
        wake()

        return () => {
            cancelAnimationFrame(animationFrame)
            resizeObserver.disconnect()
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerdown', handlePointerDown)
        }
    }, [cellSize])

    return (
        <div ref={containerRef} className={`pointer-events-none fixed inset-0 ${className}`} aria-hidden="true">
            <canvas ref={canvasRef} className="h-full w-full" />
        </div>
    )
}

function hexToRgb(hex) {
    const normalized = hex.replace('#', '')
    const value = normalized.length === 3
        ? normalized.split('').map((character) => character + character).join('')
        : normalized
    const number = parseInt(value.slice(0, 6), 16)

    return [(number >> 16) & 255, (number >> 8) & 255, number & 255]
}
