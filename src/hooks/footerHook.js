import { useEffect, useState } from "react"

export function useFooterVisibility(ref) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref])

    return visible
}