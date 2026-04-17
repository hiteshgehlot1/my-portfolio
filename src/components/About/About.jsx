import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="section-wrapper">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 500,
                lineHeight: 1.15,
              
              }}
            >
              About-
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
             I’m currently a CS student at Poornima University, Jaipur,  trying to figure out how real-world systems actually work beyond just theory.
             <br /> <br />
             Still learning, still experimenting, just trying to get better at building things that actually work well.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                'Continuous learner (Oracle, Google, AWS certs)',
                'CS core fundamentals, Data Structure &  algorithms',
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.85rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--text-muted)' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
