import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Globe, Zap } from 'lucide-react';
import Frontend from './Frontend';
import Backend from './Backend';
import WebDev from './WebDev';
import SoftwareDev from './SoftwareDev';

export default function TechStack() {
    const [activeTab, setActiveTab] = useState('frontend');

    const tabs = [
        { id: 'frontend', label: 'Front-end', icon: Code2 },
        { id: 'backend', label: 'Back-end', icon: Server },
        { id: 'webdev', label: 'Web Development', icon: Globe },
        { id: 'softwaredev', label: 'Software Development', icon: Zap },
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'frontend':
                return <Frontend />;
            case 'backend':
                return <Backend />;
            case 'webdev':
                return <WebDev />;
            case 'softwaredev':
                return <SoftwareDev />;
            default:
                return <Frontend />;
        }
    };

    return (
        <section id="tech-stack" className="flex min-h-screen items-center justify-center bg-[#0d1a16] px-5 py-24 pr-20 sm:px-8 sm:pr-24 lg:px-12 lg:pr-28">
            <motion.div
                className="max-w-6xl w-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="text-center mb-12">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300/65">
                        What I work with
                    </p>
                    <h2 className="font-sans text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                        <span className="gradient-text">Tech-Stack</span>
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`animated-border flex items-center gap-2 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.15em] rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 ${
                                    isActive
                                        ? 'bg-emerald-400 text-[#06100c] shadow-lg shadow-emerald-400/15'
                                        : 'bg-white/[0.04] text-white/70 border border-white/10 hover:text-white hover:bg-white/[0.07] hover:border-white/20'
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
