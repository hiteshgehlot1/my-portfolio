import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'var(--surface)' }}>
      <motion.div
        className="section-wrapper"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, marginBottom: '0.75rem' }}>
          Let's Connect.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Available to Work & Collaboration.
        </p>

        <a
          href="mailto:mrhiteshgehlot@gmail.com"
          className="btn-primary"
          style={{ fontSize: '0.85rem', padding: '1.2rem 3rem', marginBottom: '4rem' }}
        >
          Drop an Email
        </a>

        <div style={{ display: 'flex', gap: '3rem', fontFamily: '"DM Mono", monospace', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/hiteshgehlot1' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hitesh-gehlot-7b3228289' },
            
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>

      <style>{`
        .social-link {
          position: relative;
          transition: opacity 0.3s;
        }
        .social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--text);
          transition: width 0.3s ease;
        }
        .social-link:hover::after { width: 100%; }
        .social-link:hover { opacity: 0.7; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          font-family: "DM Mono", monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.8rem 2rem;
          background: var(--text);
          color: var(--bg);
          border: 1px solid var(--text);
          transition: all 0.3s;
        }
        .btn-primary:hover { background: transparent; color: var(--text); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
