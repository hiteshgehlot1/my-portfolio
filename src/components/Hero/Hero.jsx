import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="section-wrapper">
        <motion.span
          style={{
            display: 'block',
            fontFamily: '"DM Mono", monospace',
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Developer • Cloud Enthusiast
        </motion.span>

        <motion.h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontWeight: 500,
            marginBottom: '2rem',
            maxWidth: '900px',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          I'm Hitesh Gehlot,
        </motion.h1>

        <motion.p
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '680px',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A Computer Science undergraduate focused on software
          development, cloud infrastructure, and building scalable backends with
          premium frontends.
        </motion.p>

        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#work" className="btn-primary">
            Project ↓
          </a>
          <a href="#contact" className="btn-outline">
            Contact ↓
          </a>
        </motion.div>
      </div>

      <style>{`
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: "DM Mono", monospace;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          background: var(--text);
          color: var(--bg);
          border: 1px solid var(--text);
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: transparent;
          color: var(--text);
          transform: translateY(-2px);
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: "DM Mono", monospace;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
