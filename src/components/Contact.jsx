import React from 'react';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <a href="mailto:bhashkarkumar2063@gmail.com" className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <Mail size={24} />
                        </div>
                        <span className="text-sm font-medium">Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/bhashkar-kumar-351a77257/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a href="https://github.com/BhashkarKumar2/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <Github size={24} />
                        </div>
                        <span className="text-sm font-medium">GitHub</span>
                    </a>
                </div>

                <div className="text-gray-400 dark:text-gray-600 text-sm">
                    © 2026 Bhashkar Kumar. Built with Meta style.
                </div>
            </div>
        </section>
    );
};

export default Contact;
