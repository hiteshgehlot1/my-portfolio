import { motion } from 'framer-motion';

export default function CertificationCard({ cert, index }) {
  return (
    <motion.div
      className="cert-card"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        style={{
          width: '100%',
          height: '10rem',
          marginBottom: '1.2rem',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          overflow: 'hidden',
        }}
      >
        {cert.img ? (
          <img
            src={cert.img}
            alt={cert.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              transition: 'filter 0.4s ease',
            }}
            className="cert-img"
          />
        ) : (
          <span style={{ fontFamily: '"DM Mono", monospace', color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2em', border: '1px solid var(--border)', padding: '0.3rem 0.8rem' }}>
            CERT
          </span>
        )}
      </div>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.4rem', lineHeight: 1.3 }}>{cert.title}</h3>
      <p style={{ fontFamily: '"DM Mono", monospace', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.06em', marginTop: 'auto' }}>{cert.org}</p>

      <style>{`
        .cert-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-4px);
        }
        .cert-card:hover .cert-img {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </motion.div>
  );
}
