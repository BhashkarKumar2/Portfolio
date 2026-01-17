import React from 'react';
import { MapPin, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pb-10 transition-colors duration-300">
            {/* Clean Cover - Solid Color */}
            <div className="h-64 sm:h-80 relative overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="relative -mt-24 sm:-mt-32 sm:flex sm:items-end sm:gap-8">
                    {/* Profile Picture with premium ring */}
                    <div className="relative group">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-2xl ring-4 ring-white/50 dark:ring-gray-700/50 overflow-hidden transition-all duration-300">
                            <img
                                src="/linkedin_profile.png"
                                alt="Bhashkar Kumar"
                                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full shadow-sm" title="Available for work"></div>
                    </div>

                    {/* Name and Basic Info */}
                    <div className="mt-6 sm:mt-0 sm:pb-2 flex-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                        >
                            Bhashkar Kumar
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-300 font-medium mt-1"
                        >
                            Software Engineer | Full Stack Developer
                        </motion.p>

                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} className="text-gray-400 dark:text-gray-500" />
                                <span>New Delhi, India</span>
                            </div>
                            <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
                            <a href="https://www.linkedin.com/in/bhashkar-kumar-351a77257/" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 hover:underline">
                                500+ Connections
                            </a>
                        </div>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="mt-8 sm:mt-0 flex flex-col sm:flex-row gap-3">
                        <a href="#contact" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg shadow-primary-500/30 transition-all hover:scale-105 active:scale-95">
                            <Mail size={18} />
                            <span>Contact Me</span>
                        </a>
                        <a href="/resume.pdf" className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-all hover:border-gray-400">
                            <FileText size={18} />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>

                {/* Quick Bio / Featured Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50"
                >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                        Passionate SDE Intern ex-<strong>Expedia Group</strong>. Expert in building scalable web applications with
                        <span className="font-semibold text-gray-900 dark:text-white"> React, Spring Boot, and AWS</span>.
                        Top-rated competitive programmer (LeetCode 600+, Codeforces 1200+).
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
