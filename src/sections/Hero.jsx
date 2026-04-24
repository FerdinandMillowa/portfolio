import React, { useEffect, useState } from 'react';

const roles = [
  'Full-Stack Developer',
  'MIS Graduate (Aug 2026)',
  'ICT Support Specialist',
  'React & NestJS Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={s.section}>
      <div style={s.tag}>
        <span style={s.tagDot}></span>
        Available for opportunities
      </div>

      <h1 style={s.name}>
        Ferdinand<br />
        <span style={s.nameAccent}>Raymond</span><br />
        Milowa
      </h1>

      <div style={s.typeRow}>
        <span style={s.typeText}>{displayed}</span>
        <span style={s.cursor}>█</span>
      </div>

      <p style={s.subtitle}>
        Building scalable web systems, crafting clean APIs, and turning complex
        problems into elegant digital solutions — from Blantyre, Malawi.
      </p>

      <div style={s.ctas}>
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-outline">Get in Touch</a>
        <a
          href="mailto:ferdinandmillowa@gmail.com"
          className="btn btn-outline"
          style={{ borderColor: 'rgba(246,224,94,0.3)', color: '#f6e05e' }}
        >
          Hire Me
        </a>
      </div>

      <div style={s.stats}>
        {[
          { num: '2+', lbl: 'Years Exp.' },
          { num: '10+', lbl: 'Technologies' },
          { num: '∞',  lbl: 'Curiosity' },
        ].map(({ num, lbl }) => (
          <div key={lbl} style={s.statBox}>
            <span style={s.statNum}>{num}</span>
            <span style={s.statLbl}>{lbl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: '9rem 2rem 6rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  tag: {
    fontSize: '11px',
    letterSpacing: '3px',
    color: '#4fd1c5',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  tagDot: {
    display: 'inline-block',
    width: '8px', height: '8px',
    borderRadius: '50%',
    background: '#4fd1c5',
    animation: 'pulse 2s infinite',
  },
  name: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(2.5rem, 7vw, 4.8rem)',
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: '-2px',
    marginBottom: '1.25rem',
  },
  nameAccent: {
    color: '#63b3ed',
  },
  typeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    marginBottom: '1.5rem',
    minHeight: '28px',
  },
  typeText: {
    fontSize: '15px',
    color: '#f6e05e',
    fontFamily: "'Space Mono', monospace",
  },
  cursor: {
    fontSize: '14px',
    color: '#f6e05e',
    animation: 'blink 1s step-end infinite',
  },
  subtitle: {
    fontSize: '13px',
    color: '#718096',
    maxWidth: '520px',
    marginBottom: '2.5rem',
    lineHeight: 1.9,
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: '380px',
    border: '1px solid rgba(99,179,237,0.15)',
    gap: '1px',
    background: 'rgba(99,179,237,0.15)',
  },
  statBox: {
    padding: '1.25rem 1rem',
    background: '#0d1220',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#63b3ed',
  },
  statLbl: {
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#718096',
    marginTop: '2px',
  },
};
