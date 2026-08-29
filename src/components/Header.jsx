import { useEffect, useState } from 'react'
import { FolderKanban, House, Layers, Mail, User, Wrench } from 'lucide-react'
import Dock from '@/components/react-bits/Dock'

export default function Header() {
    const [theme, setTheme] = useState(() => {
        if (typeof document === 'undefined') return 'dark'
        return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    })
    const items = [
        { icon: House, label: 'Home', href: '#home' },
        { icon: User, label: 'About', href: '#about' },
        { icon: Wrench, label: 'Tools', href: '#tech-tools' },
        { icon: Layers, label: 'Stack', href: '#tech-stack' },
        { icon: FolderKanban, label: 'Projects', href: '#projects' },
        { icon: Mail, label: 'Contact', href: '#contact' }
    ]

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        document.documentElement.style.colorScheme = theme
        document.querySelector('meta[name="theme-color"]')?.setAttribute(
            'content',
            theme === 'light' ? '#f3f7f4' : '#07100d'
        )

        try {
            localStorage.setItem('portfolio-theme', theme)
        } catch {
            // The selected theme still works for this session when storage is unavailable.
        }
    }, [theme])

    return (
        <header
            data-cursor-grid-ignore
            className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 lg:right-7"
        >
            <Dock
                items={items}
                theme={theme}
                onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            />
        </header>
    )
}
