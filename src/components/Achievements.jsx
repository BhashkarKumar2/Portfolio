import React from 'react';
import { Trophy, Code, TrendingUp } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Achievements & Coding Profiles</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* LeetCode Card */}
                    <a
                        href="https://leetcode.com/u/Bhashkar_Kumar/"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full group-hover:scale-110 transition-transform">
                                <Code size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LeetCode</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Top 6.81% globally</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 dark:text-gray-400 font-medium">Contest Rating</span>
                                <span className="text-gray-900 dark:text-white font-bold">1840</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">600+ problems solved, 33 contests attended.</p>
                        </div>
                    </a>

                    {/* Codeforces Card */}
                    <a
                        href="https://codeforces.com/profile/bhashkarkumar2063"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Codeforces</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Competitive Programming</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 dark:text-gray-400 font-medium">Max Rating</span>
                                <span className="text-gray-900 dark:text-white font-bold">1200+</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Active participant in global coding rounds.</p>
                        </div>
                    </a>

                    {/* CodeChef Card */}
                    <a
                        href="https://www.codechef.com/users/bhashkarkumar2"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full group-hover:scale-110 transition-transform">
                                <Trophy size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">CodeChef</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">2★ Coder (Div 3)</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 dark:text-gray-400 font-medium">Max Rating</span>
                                <span className="text-gray-900 dark:text-white font-bold">1491</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Regular contest participant with 2-star rating.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
