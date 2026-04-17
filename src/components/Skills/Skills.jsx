import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Code, MonitorSmartphone, GitBranch } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', desc: 'React, Tailwind, HTML/CSS, UI/UX', icon: MonitorSmartphone },
  { name: 'Backend Architecture', desc: 'Node.js, Express, REST APIs', icon: Server },
  { name: 'Cloud Infrastructure', desc: 'AWS, GCP, Cloud Architecture', icon: Cloud },
  { name: 'DevOps & CI/CD', desc: 'Docker, Dockerode, Pipelines', icon: GitBranch },
  { name: 'Core Languages', desc: 'JavaScript, C++, Python', icon: Code },
  { name: 'Databases', desc: 'MongoDB, PostgreSQL, SQL', icon: Database },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ padding: '8rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="section-wrapper">
        <motion.div
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, marginBottom: '0.5rem' }}>
            Capabilities
          </h2>
          <p style={{ fontFamily: '"DM Mono", monospace', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
            Technical stacks & disciplines
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                className="skill-card"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  transition: 'all 0.4s ease',
                  opacity: hovered !== null && hovered !== i ? 0.4 : 1,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--text-muted)',
                    transition: 'color 0.3s, border-color 0.3s',
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                  }}
                >
                  {skill.name}
                </h3>
                <div style={{ width: '2rem', height: '1px', background: 'var(--border)', marginBottom: '1rem', transition: 'background 0.3s' }} />
                <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .skill-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-4px);
          border-radius: 50px 10px;
          
        }
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
