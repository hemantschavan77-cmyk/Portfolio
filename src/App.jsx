import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
