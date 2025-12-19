import { useState } from 'react';
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
        <section id="tech-stack" className="flex justify-center px-4 md:px-8 py-12 bg-gradient-to-b from-[#010003] to-[#060023]">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-16">
                    <h2 className="font-jetbrains text-3xl md:text-4xl text-white mb-8">
                        <span className="gradient-text">Tech-Stack</span>
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-2.5 font-jetbrains text-sm md:text-base rounded-full transition-all duration-200 ${
                                    activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                                        : 'bg-[#5b5964] text-gray-300 hover:text-white hover:bg-[#6b6974]'
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="animate-fadeIn">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}
