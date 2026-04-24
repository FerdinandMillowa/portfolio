import React, { useState } from 'react';

const projects = [
  {
    num: 'PROJECT_01',
    title: 'Business Web System',
    desc: 'A full-stack business management platform with integrated database, user authentication, and modular API architecture. Built during internship at All Peoples Innovation Hub.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
    status: 'Internship Project',
  },
  {
    num: 'PROJECT_02',
    title: 'ICT Inventory Tracker',
    desc: 'A system for tracking hardware assets, service records, and client interactions — designed to streamline operations at Artic ICT Systems.',
    tags: ['Python', 'Flask', 'MySQL'],
    status: 'Work Project',
  },
  {
    num: 'PROJECT_03',
    title: 'Cross-Platform Mobile App',
    desc: 'A cross-platform mobile application exploring React Native capabilities, with Supabase as the backend for real-time data synchronization and authentication.',
    tags: ['React Native', 'Supabase', 'JavaScript'],
    status: 'Personal Project',
  },
  {
    num: 'PROJECT_04',
    title: 'Data Analysis Pipeline',
    desc: 'Statistical analysis and reporting pipeline for processing large datasets, identifying patterns, and generating automated reports for decision-making support.',
    tags: ['Python', 'SPSS', 'Data Analysis', 'Excel'],
    status: 'Academic Project',
  },
];

const statusColors = {
  'Internship Project': '#63b3ed',
  'Work Project':       '#4fd1c5',
  'Personal Project':   '#f6e05e',
  'Academic Project':   '#b794f4',
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects">
      <div className="section-wrapper">
        <p className="section-label">// 04</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        <div style={s.grid}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                ...s.card,
                borderColor: hovered === i
                  ? (statusColors[p.status] || '#63b3ed')
                  : 'rgba(99,179,237,0.12)',
                background: hovered === i ? '#111827' : '#0d1220',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top accent bar */}
              <div style={{
                ...s.topBar,
                transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)',
                background: statusColors[p.status] || '#63b3ed',
              }}></div>

              <div style={s.numRow}>
                <span style={s.num}>{p.num}</span>
                <span style={{
                  ...s.status,
                  color: statusColors[p.status] || '#63b3ed',
                  borderColor: `${statusColors[p.status]}40` || 'rgba(99,179,237,0.25)',
                }}>
                  {p.status}
                </span>
              </div>

              <div style={s.title}>{p.title}</div>
              <p style={s.desc}>{p.desc}</p>

              <div style={s.tags}>
                {p.tags.map(t => (
                  <span key={t} style={s.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={s.githubNote}>
          → More projects on{' '}
          <a
            href="https://github.com/ferdinandmillowa"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#63b3ed' }}
          >
            github.com/ferdinandmillowa
          </a>
        </p>
      </div>
    </section>
  );
}

const s = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1px',
    background: 'rgba(99,179,237,0.08)',
    border: '1px solid rgba(99,179,237,0.12)',
  },
  card: {
    background: '#0d1220',
    padding: '1.75rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid transparent',
    transition: 'background 0.2s, border-color 0.2s',
    cursor: 'default',
  },
  topBar: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '2px',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  numRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  num: {
    fontSize: '10px',
    letterSpacing: '2px',
    color: '#4a5568',
    fontFamily: "'Space Mono', monospace",
  },
  status: {
    fontSize: '9px',
    letterSpacing: '1px',
    border: '1px solid',
    padding: '2px 8px',
    textTransform: 'uppercase',
    fontFamily: "'Space Mono', monospace",
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: '0.5rem',
  },
  desc: {
    color: '#718096',
    fontSize: '12px',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  tag: {
    fontSize: '10px',
    letterSpacing: '1px',
    color: '#4fd1c5',
    border: '1px solid rgba(79,209,197,0.25)',
    padding: '2px 8px',
    textTransform: 'uppercase',
    fontFamily: "'Space Mono', monospace",
  },
  githubNote: {
    fontSize: '11px',
    color: '#718096',
    marginTop: '1.5rem',
    letterSpacing: '1px',
  },
};
