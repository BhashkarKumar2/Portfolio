import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
                <div className="space-y-6">
                    <div className="meta-card">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Delhi Technological University</h3>
                        <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Engineering</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">2022 – 2026</p>
                        <p className="mt-2 font-semibold text-primary-600 dark:text-primary-400">CGPA: 7.89/10</p>
                    </div>
                    <div className="meta-card">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">S M Arya Public School</h3>
                        <p className="text-gray-600 dark:text-gray-400">CBSE (Class XII)</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">2022</p>
                        <p className="mt-2 font-semibold text-gray-900 dark:text-white">Percentage: 96.2%</p>
                    </div>
                    <div className="meta-card">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">St. Theresa’s School</h3>
                        <p className="text-gray-600 dark:text-gray-400">ICSE (Class X)</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">2020</p>
                        <p className="mt-2 font-semibold text-gray-900 dark:text-white">Percentage: 92.6%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
