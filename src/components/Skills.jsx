import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
                <div className="space-y-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span key={skill} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
