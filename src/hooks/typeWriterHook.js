import { useEffect, useState } from "react"

export function useTypewriter(words, interval = 2200) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!words || words.length === 0) return

        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, interval)

        return () => clearInterval(id)
    }, [words, interval])

    return { phrase: words[index], index }
}
