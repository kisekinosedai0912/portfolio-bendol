export default function Button({ name }) {
    return (
        <button className="px-8 py-2.5 bg-[#373744] hover:bg-[#6b6974] text-white font-jetbrains text-sm rounded-md transition-colors duration-200">
            {name}
        </button>
    )
}