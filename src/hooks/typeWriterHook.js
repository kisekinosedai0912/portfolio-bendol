import { useEffect, useState } from "react"

export function useTypewriter(words, speed = 160, delay = 1200) {
    const [text, setText] = useState("")
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]
        let timeout

        if (!isDeleting) {
            // typing
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1))
                if (text === currentWord) {
                setTimeout(() => setIsDeleting(true), delay)
                }
            }, speed)
        } else {
            // deleting
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1))
                if (text === "") {
                setIsDeleting(false)
                setWordIndex((prev) => (prev + 1) % words.length)
                }
            }, speed / 1.5)
        }

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex, words, speed, delay])

    return text
}