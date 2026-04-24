import React from 'react';

const interests = [
  'AI & Machine Learning',
  'Cybersecurity',
  'App Development',
  'Game Dev',
  'Foreign Languages',
  'Networking',
];

const terminalLines = [
  { key: '"name"',     val: '"Ferdinand Milowa"',       type: 'str' },
  { key: '"role"',     val: '"Full-Stack Developer"',   type: 'str' },
  { key: '"location"', val: '"Blantyre, Malawi"',       type: 'str' },
  { key: '"degree"',   val: '"MIS (Aug 2026)"',         type: 'str' },
  { key: '"stack"',    val: '["React","NestJS","Go"]',  type: 'arr' },
  { key: '"status"',   val: 'open_to_work',             type: 'val' },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <p className="section-label">// 01</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div style={s.grid}>
          {/* Text */}
          <div>
            <p style={s.para}>
              I'm a <strong style={s.strong}>Management Information Systems student</strong> at
              Malawi College of Accountancy (graduating August 2026), with hands-on experience
              building full-stack web systems and providing ICT support in real-world environments.
            </p>
            <p style={s.para}>
              At <strong style={s.strong}>All Peoples Innovation Hub</strong>, I developed modular
              web applications using React, TypeScript, and NestJS. At{' '}
              <strong style={s.strong}>Artic ICT Systems</strong>, I monitor infrastructure,
              resolve technical incidents, and support clients with tailored ICT solutions.
            </p>
            <p style={s.para}>
              Deeply curious about AI, cybersecurity, and the intersection of technology and
              human problems. I build things that work — and try to make them elegant in the process.
            </p>

            <div style={s.interestsWrap}>
              {interests.map(i => (
                <span key={i} style={s.tag}>{i}</span>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div style={s.terminal}>
            <div style={s.termHead}>
              <span style={{ ...s.dot, background: '#fc5753' }}></span>
              <span style={{ ...s.dot, background: '#fdbc40' }}></span>
              <span style={{ ...s.dot, background: '#33c748' }}></span>
              <span style={s.termTitle}>profile.json</span>
            </div>
            <div style={s.termBody}>
              <div style={s.line}><span style={s.cmd}>{'{'}</span></div>
              {terminalLines.map(({ key, val, type }) => (
                <div key={key} style={s.line}>
                  &nbsp;&nbsp;
                  <span style={s.cmd}>{key}</span>
                  <span style={s.muted}>: </span>
                  <span style={type === 'str' ? s.str : type === 'val' ? s.val2 : s.arr}>
                    {val}
                  </span>,
                </div>
              ))}
              <div style={s.line}><span style={s.cmd}>{'}'}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  para: {
    color: '#718096',
    marginBottom: '1rem',
    lineHeight: 1.9,
    fontSize: '13px',
  },
  strong: {
    color: '#e2e8f0',
  },
  interestsWrap: {
    marginTop: '1.5rem',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#111827',
    border: '1px solid rgba(99,179,237,0.15)',
    borderRadius: '2px',
    padding: '4px 12px',
    fontSize: '11px',
    margin: '4px 4px 0 0',
    color: '#4fd1c5',
    letterSpacing: '0.5px',
  },
  terminal: {
    background: '#0d1220',
    border: '1px solid rgba(99,179,237,0.15)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  termHead: {
    background: '#111827',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    borderBottom: '1px solid rgba(99,179,237,0.15)',
  },
  dot: {
    width: '10px', height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  termTitle: {
    fontSize: '11px',
    color: '#718096',
    marginLeft: '4px',
  },
  termBody: {
    padding: '1.25rem',
    fontFamily: "'Space Mono', monospace",
  },
  line: {
    fontSize: '12px',
    marginBottom: '4px',
    color: '#718096',
  },
  cmd: { color: '#63b3ed' },
  muted: { color: '#4a5568' },
  str: { color: '#f6e05e' },
  val2: { color: '#4fd1c5' },
  arr: { color: '#e2e8f0' },
};
