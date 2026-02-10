import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, MapPin, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const BentoGridItem = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, delay }}
            className={`
                relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 
                backdrop-blur-md transition-all hover:bg-white/[0.04] hover:border-white/20 
                shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                ${className}
            `}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
};

const About = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
                >
                    <span className="text-white">About</span> <span className="text-blue-500">Me</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Bio Card - Large */}
                    <BentoGridItem className="md:col-span-2 md:row-span-2">
                        <div className="flex flex-col h-full justify-center">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Code className="text-blue-400" /> The Code Journey
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                                {about.mission.split('**').map((part, index) =>
                                    index % 2 === 1 ? <span key={index} className="text-white font-medium">{part}</span> : part
                                )}
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {about.currentRole.split('**').map((part, index) =>
                                    index % 2 === 1 ? <span key={index} className="text-blue-400 font-bold">{part}</span> : part
                                )}
                            </p>
                        </div>
                    </BentoGridItem>

                    {/* Location Card */}
                    <BentoGridItem delay={0.1} className="md:col-span-1">
                        <div className="flex items-center gap-4 h-full">
                            <div className="p-3 bg-blue-500/20 rounded-full">
                                <MapPin className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Based in</h4>
                                <p className="text-gray-400">{about.location}</p>
                            </div>
                        </div>
                    </BentoGridItem>

                    {/* Status Card */}
                    <BentoGridItem delay={0.2} className="md:col-span-1">
                        <div className="flex items-center gap-4 h-full">
                            <div className="p-3 bg-green-500/20 rounded-full">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Status</h4>
                                <p className="text-green-400">{about.status}</p>
                            </div>
                        </div>
                    </BentoGridItem>

                    {/* Tech Stack Mini-Grid */}
                    <BentoGridItem delay={0.3} className="md:col-span-3">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Cpu className="text-purple-400" /> Tech Arsenal
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {about.techStack.map((tech) => (
                                <div key={tech} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                                    <span className="text-gray-300 font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </BentoGridItem>
                </div>
            </div>
        </section>
    );
};

export default About;
