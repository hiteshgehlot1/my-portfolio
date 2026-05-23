import { motion } from 'framer-motion';
import CertificationCard from './CertificationCard';

const certs = [
  { title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', img: './assets/aws-ccp.png' },
  { title: 'Oracle Cloud Foundation', org: 'Oracle', img: '/assets/oracle.png' },
  { title: 'Associate Cloud Engineer SkillLabs', org: 'Google Cloud', img: '/assets/gcp.jpeg' },
  { title: 'AWS Academy', org: 'AWS', img: '/assets/aws-hitesh.png' },
  { title: 'Introduction to Cloud', org: 'IBM', img: '/assets/ibm.png' },
  { title: 'Foundation of Cloud IoT & Edge ML', org: 'NPTEL', img: null },
  { title: 'Developing Soft Skills', org: 'NPTEL', img: null },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '8rem 0', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="section-wrapper">
        <motion.div
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, marginBottom: '0.5rem' }}>
            Certifications
          </h2>
          <p style={{ fontFamily: '"DM Mono", monospace', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
            Courses & learning achievements
          </p>
        </motion.div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <CertificationCard key={i} cert={c} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .certs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
