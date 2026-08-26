export default function Button({ name, link }) {
    return (
        <a href={ link ? link : '#'}
            className="
                inline-flex items-center gap-2 px-7 py-2.5 rounded-lg
                bg-emerald-400
                text-[#06100c] font-mono text-sm tracking-wide
                shadow-lg shadow-emerald-400/15
                hover:bg-emerald-300
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70
            "
        >
            {name}
        </a>
    )
}
