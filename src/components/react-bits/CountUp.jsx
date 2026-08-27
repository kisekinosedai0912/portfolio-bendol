import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'

export default function CountUp({
    to,
    from = 0,
    direction = 'up',
    delay = 0,
    duration = 2,
    className = '',
    startWhen = true,
    separator = '',
    padStart = 0,
    prefix = '',
    suffix = '',
    onStart,
    onEnd
}) {
    const ref = useRef(null)
    const shouldReduceMotion = useReducedMotion()
    const motionValue = useMotionValue(direction === 'down' ? to : from)
    const damping = 20 + 40 * (1 / duration)
    const stiffness = 100 * (1 / duration)
    const springValue = useSpring(motionValue, { damping, stiffness })
    const isInView = useInView(ref, { once: true, margin: '0px' })

    const getDecimalPlaces = (num) => {
        const str = num.toString()
        if (!str.includes('.')) return 0
        const decimals = str.split('.')[1]
        return parseInt(decimals, 10) !== 0 ? decimals.length : 0
    }

    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to))

    const formatValue = useCallback(
        (latest) => {
            const hasDecimals = maxDecimals > 0
            const formattedNumber = Intl.NumberFormat('en-US', {
                useGrouping: Boolean(separator),
                minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                maximumFractionDigits: hasDecimals ? maxDecimals : 0
            }).format(latest)

            let result = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber
            if (padStart > 0) {
                result = result.padStart(padStart, '0')
            }

            return `${prefix}${result}${suffix}`
        },
        [maxDecimals, padStart, prefix, separator, suffix]
    )

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = formatValue(direction === 'down' ? to : from)
        }
    }, [direction, formatValue, from, to])

    useEffect(() => {
        if (shouldReduceMotion) {
            motionValue.set(direction === 'down' ? from : to)
            if (ref.current) ref.current.textContent = formatValue(to)
            return undefined
        }

        if (!isInView || !startWhen) return undefined

        onStart?.()

        const timeoutId = setTimeout(() => {
            motionValue.set(direction === 'down' ? from : to)
        }, delay * 1000)

        const durationTimeoutId = setTimeout(() => {
            onEnd?.()
        }, delay * 1000 + duration * 1000)

        return () => {
            clearTimeout(timeoutId)
            clearTimeout(durationTimeoutId)
        }
    }, [delay, direction, duration, formatValue, from, isInView, motionValue, onEnd, onStart, shouldReduceMotion, startWhen, to])

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = formatValue(latest)
            }
        })

        return () => unsubscribe()
    }, [formatValue, springValue])

    return (
        <span ref={ref} className={className}>
            {formatValue(direction === 'down' ? to : from)}
        </span>
    )
}
