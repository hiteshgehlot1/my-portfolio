import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </main>
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2rem 0',
          textAlign: 'center',
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
        }}
      >
        © {new Date().getFullYear()} Hitesh Gehlot. Minimalist Portfolio.
      </footer>
    </>
  );
}

export default App;
