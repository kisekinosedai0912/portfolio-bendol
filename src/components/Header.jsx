import { FolderKanban, House, Layers, Mail, User, Wrench } from 'lucide-react'
import Dock from './react-bits/Dock'

export default function Header() {
    const items = [
        { icon: House, label: 'Home', href: '#home' },
        { icon: User, label: 'About', href: '#about' },
        { icon: Wrench, label: 'Tools', href: '#tech-tools' },
        { icon: Layers, label: 'Stack', href: '#tech-stack' },
        { icon: FolderKanban, label: 'Projects', href: '#projects' },
        { icon: Mail, label: 'Contact', href: '#contact' }
    ]

    return (
        <header
            data-cursor-grid-ignore
            className="fixed right-3 top-1/2 z-50 -translate-y-1/2 sm:right-5 lg:right-7"
        >
            <Dock items={items} />
        </header>
    )
}
