import { ArrowUp, Facebook, Github, Linkedin, Mail } from "lucide-react"

const socials = [
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/jasper.perks",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/kisekinosedai0912",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jasper-bendol-3532aa407/",
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:jasperbendol0329@gmail.com",
    },
]

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#06110e] px-5 py-10 pb-28 sm:px-8 sm:pt-12 md:py-12 md:pr-24 lg:px-12 lg:pr-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-emerald-400/[0.045] blur-[100px]"
            />

            <div className="relative mx-auto w-full max-w-[82rem]">
                <div className="grid gap-8 border-b border-white/[0.08] pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:pb-10">
                    <div>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/70">
                            Jasper Bendol
                        </p>
                        <p className="font-sans text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-[1.15] tracking-[-0.035em] text-white">
                            Engineering ideas <span className="text-emerald-300">through systems</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            {socials.map((social) => (
                                <SocialIcon key={social.label} {...social} />
                            ))}
                        </div>

                        <a
                            href="#home"
                            className="primary-action group inline-flex items-stretch bg-[#0b1713] font-mono text-[10px] font-medium uppercase tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <span className="primary-action__label">Back to top</span>
                            <span className="primary-action__end text-emerald-200">
                                <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/28">
                    <span>© 2026 Jasper Bendol · All rights reserved</span>
                    <span className="hidden sm:inline">Software Engineer · Philippines</span>
                </div>
            </div>
        </footer>
    )
}

function SocialIcon({ icon: Icon, href, label }) {
    const isExternal = href.startsWith("http")

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center border border-white/[0.08] bg-white/[0.025] text-white/55 transition-colors duration-200 hover:border-emerald-200/20 hover:bg-emerald-300/[0.07] hover:text-emerald-200 sm:h-11 sm:w-11"
        >
            <Icon className="h-4 w-4" strokeWidth={1.7} />
        </a>
    )
}
