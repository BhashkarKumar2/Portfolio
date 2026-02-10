import React from 'react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <div key={index} className="meta-card">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{job.role}</p>
                                </div>
                                {job.certificate && (
                                    <a href={job.certificate} target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 text-sm hover:underline mt-1 sm:mt-0">
                                        View Certificate
                                    </a>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                                {job.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
