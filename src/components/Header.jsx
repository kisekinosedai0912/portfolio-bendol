import { useState } from "react"
import { Network, User, House, Mail, Menu, X } from "lucide-react"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full h-16 flex items-center justify-between px-6 md:px-12 
            border-b border-indigo-400/30 backdrop-blur-md bg-black/30">

            {/* Logo */}
            <a
                href="#home"
                className="font-jetbrains text-[#7252FF] font-bold tracking-wide text-lg"
            >
                Jasper-Portfolio
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
                <NavItem icon={House} label="Home" link="#home" />
                <NavItem icon={User} label="About" link="#about" />
                <NavItem icon={Network} label="Projects" link="#projects" />
                <NavItem icon={Mail} label="Contact" link="#contact" />
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-[#7252FF] hover:text-white transition"
                aria-label="Toggle menu"
            >
                {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    className="absolute top-16 left-0 w-full 
                    bg-gradient-to-b from-[#060023] to-[#010003]
                    border-b border-indigo-400/30 md:hidden"
                >
                    <div className="flex flex-col items-center gap-2 py-4">
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
                flex items-center gap-2 px-5 py-2
                font-jetbrains text-sm text-[#7252FF]
                rounded-xl
                hover:bg-indigo-900/60
                hover:text-white
                hover:shadow-[0_0_20px_rgba(99,102,241,0.45)]
                transition-all duration-200
            "
        >
            <Icon size={18} />
            <span>{label}</span>
        </a>
    )
}