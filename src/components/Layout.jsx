import { Suspense, useEffect, useState } from 'react'
import CursorGrid from './react-bits/CursorGrid'
import Loader from './Loader'

function useDocumentTheme() {
    const [theme, setTheme] = useState(() => (
        typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light'
            ? 'light'
            : 'dark'
    ))

    useEffect(() => {
        const root = document.documentElement
        const update = () => {
            setTheme(root.dataset.theme === 'light' ? 'light' : 'dark')
        }

        update()
        const observer = new MutationObserver(update)
        observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
        return () => observer.disconnect()
    }, [])

    return theme
}

export default function Layout({ children }) {
    const theme = useDocumentTheme()
    const isLight = theme === 'light'

    return (
        <main className="relative bg-[#07100d]">
            <CursorGrid
                className={`z-30 ${isLight ? 'mix-blend-multiply' : 'mix-blend-screen'}`}
                cellSize={76}
                color={isLight ? '#087b55' : '#34d399'}
                radius={165}
                maxOpacity={isLight ? 0.4 : 0.5}
                fillOpacity={isLight ? 0.045 : 0.02}
                holdTime={260}
                fadeDuration={720}
            />
            <Suspense fallback={<Loader />}>
                <div className="relative z-10">
                    {children}
                </div>
            </Suspense>
        </main>
    )
}
