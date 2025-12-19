import TechTools from './page-extensions/TechTools';
import TechStack from './page-extensions/TechStack';
import Profile from '../../assets/img/profile.png';
import Button from '../Button';

export default function About() {
    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-[#010003] to-[#060023]">
                <div className="max-w-6xl w-full">
                    <h1 className="text-center text-4xl md:text-5xl font-jetbrains text-white mb-12">
                        <span className="gradient-text">Professional Summary</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                        {/* Image Container */}
                        <div className="flex-shrink-0">
                            <div className="w-64 h-80 rounded-lg border-2 border-blue-600 overflow-hidden bg-black/50">
                                <img 
                                    src={Profile} 
                                    alt="Professional portrait" 
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col items-center md:items-center gap-6 max-w-xl">
                            <p className="font-jetbrains text-sm md:text-base text-white/90 text-center leading-relaxed">
                                I am a professional with a degree in information technology,
                                with more than 1 year of experience as freelance and software developer.
                                I started Full-stack Web Development and gained my first Junior CRM Developer
                                role at Technosoft Automotive last year.
                            </p>

                            <div className="flex gap-4">
                                <Button name={'Portfolio'} />
                                <Button name={'Download CV'} />
                            </div>

                            <div className="flex gap-12 mt-4">
                                <DataContainer
                                    count="1+"
                                    unit="years"
                                    label="Experience"
                                />
                                <DataContainer
                                    count="9"
                                    unit="Projects"
                                    label="Projects"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TechTools />
            <TechStack />
        </>
    )
}

function DataContainer({ count, unit, label }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="font-jetbrains text-lg text-white">
                {count} {unit}
            </p>
            <span className="gradient-text font-jetbrains text-sm">
                {label}
            </span>
        </div>
    )
}