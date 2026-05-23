import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Container Launchpad',
    tech: ['Docker', 'React', 'Express'],
    shortDesc: 'A web application that simplifies Docker container management.',
    fullDesc: 'Container Launchpad provides an intuitive web interface for developers to control their Docker container lifecycles without opening a terminal.',
    problem: 'Command-line container management can be cumbersome for quick administrative tasks.',
    link: '#',
    github: 'https://github.com/hiteshgehlot1/container-launchpad',
  },
  {
    id: 2,
    title: 'SecureScope',
    tech: ['React', 'API', 'OWASP'],
    shortDesc: 'A lightweight security scanning tool evaluating against OWASP standards.',
    fullDesc: 'SecureScope takes an input URL, evaluates it against basic OWASP vulnerabilities, and generates an actionable security report.',
    problem: 'Small projects often lack basic automated security checks before production.',
    link: 'https://secure-scope-one.vercel.app/',
    github: 'https://github.com/hiteshgehlot1/SecureScope',
  },
  {
    id: 3,
    title: 'Cloud Cost Calculator',
    tech: ['React', 'Tailwind', 'API'],
    shortDesc: 'Estimate and compare cloud infrastructure costs in real time.',
    fullDesc: 'A dynamic application that aggregates pricing from major cloud providers (AWS, GCP, Azure) for comparative estimates.',
    problem: 'Cloud billing complexity often leads to surprise costs for simple projects.',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Path-Visualizer',
    tech: ['API', 'JavaScript'],
    shortDesc: 'Algorithm Based path finding.',
    fullDesc: 'Using algorithms BFS, Greedy a Path identify from source to destination, with Totally user interactive from implementing source, destination to Wall Blocks',
    problem: 'Visual Representation of Working of Algorithm Interactively.',
    link: '#',
    github: 'https://github.com/hiteshgehlot1/path-v-app',
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="work" style={{ padding: '8rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="section-wrapper">
        <motion.div
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, marginBottom: '0.5rem' }}>
            Projects
          </h2>
          <p style={{ fontFamily: '"DM Mono", monospace', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
            Live projects & tools
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              layoutId={`card-${p.id}`}
              className="project-card"
              onClick={() => setSelectedId(p.id)}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '2.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.h3
                layoutId={`title-${p.id}`}
                style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 500, marginBottom: '1rem' }}
              >
                {p.title}
              </motion.h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.06em',
                      padding: '0.3rem 0.8rem',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <motion.p
                layoutId={`desc-${p.id}`}
                style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}
              >
                {p.shortDesc}
              </motion.p>
              <div
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.5,
                  transition: 'opacity 0.3s',
                }}
              >
                VIEW DETAILS →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="modal-content"
              layoutId={`card-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                style={{
                  position: 'sticky',
                  top: 0,
                  float: 'right',
                  padding: '1.5rem',
                  background: 'var(--bg)',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: '1px solid var(--border)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>
              <div style={{ padding: '3rem', clear: 'both' }}>
                <motion.h2
                  layoutId={`title-${selectedId}`}
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, marginBottom: '1rem' }}
                >
                  {selectedProject.title}
                </motion.h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.7rem', padding: '0.3rem 0.8rem', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="modal-details">
                  <div>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem' }}>The Challenge</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem' }}>The Solution</h3>
                    <motion.p layoutId={`desc-${selectedId}`} style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{selectedProject.fullDesc}</motion.p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                  <a href={selectedProject.link} className="btn-primary" style={{ fontSize: '0.75rem' }}>
                    Live Demo <ExternalLink size={14} style={{ marginLeft: '0.5rem' }} />
                  </a>
                  <a href={selectedProject.github} className="btn-outline" style={{ fontSize: '0.75rem' }}>
                    GitHub ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .project-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-3px);
        }
        .project-card:hover div:last-child {
          opacity: 1 !important;
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(20px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .modal-content {
          background: var(--bg);
          border: 1px solid var(--border);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
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
        .btn-primary:hover { background: transparent; color: var(--text); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          font-family: "DM Mono", monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.8rem 2rem;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          transition: all 0.3s;
        }
        .btn-outline:hover { border-color: var(--border-hover); }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .modal-details { grid-template-columns: 1fr; gap: 2rem; }
          .modal-overlay { padding: 1rem; }
        }
      `}</style>
    </section>
  );
}
