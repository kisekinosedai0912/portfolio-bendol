import { ArrowUpRight } from "lucide-react";

export default function Button({ name, link }) {
    return (
        <a href={ link ? link : '#'}
            className="
                primary-action inline-flex items-stretch bg-[#0b1713]
                text-[#06100c] font-mono text-sm tracking-wide
                shadow-lg shadow-emerald-400/15 transition-transform duration-200
                hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70
            "
        >
            <span className="primary-action__label">{name}</span>
            <span className="primary-action__end text-emerald-200">
                <ArrowUpRight className="h-4 w-4" />
            </span>
        </a>
    )
}
