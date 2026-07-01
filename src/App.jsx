import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-ink antialiased">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
