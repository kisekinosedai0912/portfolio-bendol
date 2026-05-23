import { Github, Linkedin, Mail, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <footer
            className="
                relative
                w-full
                py-8 sm:py-10
                flex flex-col items-center gap-5 sm:gap-6
                text-indigo-400
                bg-gradient-to-b from-[#060023] to-[#010003]
            "
        >
            {/* Top gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cff]/40 to-transparent" />

            {/* Social icons */}
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
                <SocialIcon icon={Facebook} label="Facebook" link="https://www.facebook.com/jasper.perks" />
                <SocialIcon icon={Github} label="GitHub" link="https://github.com/kisekinosedai0912" />
                <SocialIcon icon={Linkedin} label="LinkedIn" link="https://www.linkedin.com/in/jasper-bendol-3532aa407/" />
                <SocialIcon icon={Mail} label="Email" link="mailto:jasperbendol0329@gmail.com" />
            </div>

            {/* Copyright */}
            <p
                className="
                    font-jetbrains
                    text-[11px] sm:text-xs
                    text-white/50
                    tracking-[0.18em] uppercase
                    text-center
                    px-4
                "
            >
                © 2025 Jasper Bendol · All rights reserved
            </p>
        </footer>
    )
}

function SocialIcon({ icon: Icon, link, label }) {
    return (
        <a
            href={link ? link : "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="
                p-2.5 sm:p-3
                rounded-full
                text-white/60
                border border-white/10
                bg-white/[0.03]
                hover:text-white
                hover:bg-white/[0.07]
                hover:border-[#8b5cff]/60
                hover:shadow-[0_0_20px_rgba(139,92,255,0.35)]
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60
            "
        >
            <Icon size={18} className="sm:hidden" />
            <Icon size={20} className="hidden sm:block" />
        </a>
    )
}
