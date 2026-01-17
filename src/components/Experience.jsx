import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
                <div className="meta-card">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expedia Group</h3>
                            <p className="text-gray-600 dark:text-gray-400">Software Development Engineer Intern</p>
                        </div>
                        <a href="https://drive.google.com/file/d/19Vzoy1T4bRWyKt1liBKukqM1AfJIzVCo/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 text-sm hover:underline mt-1 sm:mt-0">
                            View Certificate
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">June 2023 – July 2023</p>
                    <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Developed and deployed robust RESTful APIs using Java and Spring Boot to query large datasets directly from AWS S3, projected to improve data retrieval efficiency by 40%.</li>
                        <li>Collaborated with Data Engineering teams to design S3 data schemas, and partnered with Frontend engineers to ensure seamless integration.</li>
                        <li>Followed agile practices, participating in daily stand-ups and code reviews to maintain high software quality standards.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
