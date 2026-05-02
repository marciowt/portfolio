import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal, useActiveNav } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  useActiveNav();

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Custom Cursor */}
      <Cursor />

      {/* Background FX */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="noise" />
      <ParticlesCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
