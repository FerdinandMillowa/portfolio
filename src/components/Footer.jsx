import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <span style={s.name}>Ferdinand Raymond Milowa</span>
        <span style={s.sep}>·</span>
        <span style={s.muted}>Built with React</span>
        <span style={s.sep}>·</span>
        <span style={s.muted}>Blantyre, Malawi</span>
        <span style={s.sep}>·</span>
        <span style={s.muted}>{year}</span>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    borderTop: '1px solid rgba(99,179,237,0.12)',
    textAlign: 'center',
    padding: '2rem',
    fontFamily: "'Space Mono', monospace",
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    fontSize: '11px',
    letterSpacing: '1px',
  },
  name: { color: '#63b3ed' },
  sep: { color: '#2d3748' },
  muted: { color: '#4a5568' },
};
