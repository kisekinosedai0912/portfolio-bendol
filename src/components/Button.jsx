export default function Button({ name, link }) {
    return (
        <a href={ link ? link : '#'}
            className="
                inline-flex items-center gap-2 px-7 py-2.5 rounded-lg
                bg-gradient-to-r from-[#6162ff] to-[#b352ff]
                text-white font-jetbrains text-sm tracking-wide
                shadow-lg shadow-[#6162ff]/20
                hover:-translate-y-0.5 hover:shadow-[#b352ff]/40
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60
            "
        >
            {name}
        </a>
    )
}
