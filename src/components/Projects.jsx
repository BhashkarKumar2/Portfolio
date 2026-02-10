import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 flex flex-col">
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden relative group">
                                {project.links.demo !== '#' ? (
                                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="block w-full h-full cursor-pointer">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </a>
                                ) : (
                                    <>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex gap-4">
                                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1 text-sm font-medium transition-colors">
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                        {project.links.demo !== '#' && (
                                            <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1 text-sm font-medium transition-colors">
                                                <ExternalLink size={18} />
                                                <span>Live</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
