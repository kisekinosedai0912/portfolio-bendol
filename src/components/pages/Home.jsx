import { useTypewriter } from '../../hooks/typeWriterHook.js';

export default function Home() {
    const phrases = [
        "Jasper Bendol",
        "a Web Developer",
        "a Software Developer",
        "a System Designer",
        "a Full-stack Developer"
    ]
    const typedText = useTypewriter(phrases)

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 z-100">
            <div className="flex flex-col items-center gap-6">
                
                {/* Line 1 */}
                <h1 className="font-jetbrains text-4xl md:text-6xl text-white">
                    Hi! I am{" "}
                    <span className="gradient-text">
                        {typedText}
                    </span>
                    <span className="blinking-cursor">|</span>
                </h1>

                {/* Line 2 */}
                <h2 className="font-jetbrains text-2xl md:text-4xl text-white">
                    Engineering your ideas through systems
                </h2>

                {/* Line 3 */}
                <h2 className="font-jetbrains text-2xl md:text-4xl">
                    <span className="gradient-text">always building</span>{" "}
                    <span className="text-white">&</span>{" "}
                    <span className="gradient-text">shipping!</span>
                </h2>

                {/* Button */}
                <button
                    className="
                        mt-6 px-6 py-3 rounded-lg
                        bg-white/10 text-white font-jetbrains
                        hover:bg-white/20
                        transition-all duration-200
                    ">
                    Explore me
                </button>
            </div>
        </section>
    )
}