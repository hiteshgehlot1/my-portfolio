import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'var(--bg)' : 'var(--bg)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="section-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: scrolled ? '1rem' : '1.5rem',
          paddingBottom: scrolled ? '1rem' : '1.5rem',
          transition: 'padding 0.4s ease',
        }}
      >
        <a href="#hero" style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
          Hitesh Gehlot
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div className="nav-desktop" style={{ display: 'flex', gap: '2.5rem' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'opacity 0.3s',
                }}
                onMouseEnter={e => (e.target.style.opacity = '0.6')}
                onMouseLeave={e => (e.target.style.opacity = '1')}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              padding: '0.6rem 1.4rem',
              borderRadius: '999px',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => (e.target.style.borderColor = 'var(--border-hover)')}
            onMouseLeave={e => (e.target.style.borderColor = 'var(--border)')}
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text)',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--border)',
              backgroundColor: 'var(--bg)',
            }}
          >
            <div className="section-wrapper" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
