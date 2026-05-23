import { useState } from "react"
import { Network, User, House, Mail, Menu, X } from "lucide-react"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full h-16 flex items-center justify-between px-6 md:px-12
            border-b border-white/5 backdrop-blur-xl bg-[#050515]/60">

            {/* Logo */}
            <a
                href="#home"
                className="group flex items-center gap-2 font-jetbrains text-white text-[15px] font-semibold tracking-[0.18em]"
            >
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-[#6162ff] to-[#b352ff] shadow-[0_0_10px_rgba(139,92,255,0.7)]" />
                <span>JASPER<span className="text-white/40">/</span>PORTFOLIO</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
                <NavItem icon={House} label="Home" link="#home" />
                <NavItem icon={User} label="About" link="#about" />
                <NavItem icon={Network} label="Projects" link="#projects" />
                <NavItem icon={Mail} label="Contact" link="#contact" />
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60"
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    className="absolute top-16 left-0 w-full
                    bg-[#050515]/95 backdrop-blur-xl
                    border-b border-white/5 md:hidden
                    animate-in fade-in slide-in-from-top-2 duration-200"
                >
                    <div className="flex flex-col items-stretch gap-1 px-4 py-4">
                        <NavItem icon={House} label="Home" link="#home" onClick={() => setOpen(false)} />
                        <NavItem icon={User} label="About" link="#about" onClick={() => setOpen(false)} />
                        <NavItem icon={Network} label="Projects" link="#projects" onClick={() => setOpen(false)} />
                        <NavItem icon={Mail} label="Contact" link="#contact" onClick={() => setOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    )
}

function NavItem({ icon: Icon, label, link, onClick }) {
    return (
        <a
            href={link}
            onClick={onClick}
            className="
                flex items-center gap-2 px-4 py-2
                font-jetbrains text-[12px] uppercase tracking-[0.18em]
                text-white/70
                rounded-lg
                hover:bg-white/5
                hover:text-white
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60
            "
        >
            <Icon size={16} className="text-[#8b5cff]" />
            <span>{label}</span>
        </a>
    )
}
