import { motion } from 'framer-motion';
import TechTools from './page-extensions/TechTools';
import TechStack from './page-extensions/TechStack';
import Profile from '../../assets/img/profile.png';
import Button from '../Button';

export default function About() {
    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-[#010003] to-[#060023]">
                <motion.div
                    className="max-w-6xl w-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="text-center mb-14">
                        <p className="font-jetbrains text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
                            About me
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                            <span className="gradient-text">Professional Summary</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                        {/* Image Container */}
                        <div className="flex-shrink-0">
                            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-[#6162ff] via-[#8b5cff] to-[#b352ff] shadow-2xl shadow-[#6162ff]/20">
                                <div className="w-64 h-80 rounded-2xl overflow-hidden bg-black/50">
                                    <img
                                        src={Profile}
                                        alt="Professional portrait of Jasper Bendol"
                                        className="w-full h-full object-cover opacity-90 hover:scale-[1.03] transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col items-center md:items-start gap-6 max-w-xl">
                            <p className="font-sans text-[15px] md:text-base text-white/80 text-center md:text-left leading-relaxed text-balance">
                                I am a professional developer with a degree in information technology,
                                with more than 2 years of experience as freelance and software developer.
                                The tech stack that I mainly use includes most of Javascript ecosystem such as React,
                                Next.js, Node.js, and MongoDB. I also have experience with PHP and Laravel framework.
                                Currently, I am focusing on automating workflows and systems to improve 
                                productivity and efficiency of the products and handling microservices architecture.
                                Implementing industry standards and best practices while keeping up on the current trends and technologies.
                            </p>

                            <div className="flex gap-4">
                                <Button name={'Portfolio'} link={'#projects'} />
                            </div>

                            <div className="flex gap-12 mt-4">
                                <DataContainer
                                    count="2"
                                    unit="years"
                                    label="Experience"
                                />
                                <DataContainer
                                    count="13"
                                    unit="Projects"
                                    label="Projects"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <TechTools />
            <TechStack />
        </>
    )
}

function DataContainer({ count, unit, label }) {
    return (
        <div className="flex flex-col items-center md:items-start gap-1.5">
            <p className="font-display text-3xl md:text-4xl font-semibold leading-none">
                <span className="gradient-text">{count}</span>
                <span className="font-jetbrains text-sm text-white/60 ml-2">{unit}</span>
            </p>
            <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-white/50">
                {label}
            </span>
        </div>
    )
}
