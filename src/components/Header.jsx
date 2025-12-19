import { Network, User, House, Mail } from "lucide-react"

export default function Header() {
    return (
        <header className="fixed w-full h-16 flex items-center justify-between px-12 border-b border-indigo-400/30 backdrop-blur-md">
            {/* Logo */}
            <span className="font-jetbrains text-md-24 text-[#7252FF] font-bold tracking-wide cursor-pointer">
                <a href="">Jasper-Portfolio</a>
            </span>

            {/* Navigation */}
            <nav className="flex items-center gap-3">
                <NavItem icon={House} label="Home" />
                <NavItem icon={User} label="About" />
                <NavItem icon={Network} label="Projects" />
                <NavItem icon={Mail} label="Contact" />
            </nav>
        </header>
    )
}

function NavItem({ icon: Icon, label }) {
        return (
        <a
            href="#"
            className="
                flex items-center gap-2 px-5 py-2
                font-jetbrains text-xs-16 text-[#7252FF]
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