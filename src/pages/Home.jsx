import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

// Lazy load ChatWidget for better initial page performance
const ChatWidget = lazy(() => import('../components/ChatWidget'));

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Education />
                <Contact />
            </main>

            {/* AI Chatbot Widget */}
            <Suspense fallback={null}>
                <ChatWidget />
            </Suspense>
        </div>
    );
};

export default Home;
