import React, { useState } from 'react';

const experiences = [
  {
    role: 'ICT Support & Systems Technician',
    company: 'Artic ICT Systems',
    date: 'Oct 2025 – Present',
    current: true,
    bullets: [
      'Monitor system performance and resolve technical incidents across hardware, software, and network environments',
      'Provide first-line technical support and end-user training to improve system adoption',
      'Install and configure OS, business applications, and peripheral devices for clients',
      'Support basic network infrastructure including routers and local connectivity setups',
      'Engage clients to identify ICT needs and recommend tailored solutions',
      'Maintain logs of technical incidents and resolutions for knowledge sharing',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'All Peoples Innovation Hub',
    date: 'Jul – Dec 2025',
    current: false,
    bullets: [
      'Built full-stack web applications using React, TypeScript, and NestJS with modular, scalable architecture',
      'Contributed to backend database design, API integration, and user authentication systems',
      'Applied agile methodology and version control (Git/GitHub) in collaborative development cycles',
      'Gained exposure to solution design, system architecture, and business-oriented tech applications',
    ],
  },
  {
    role: 'Enumerator – Child Health Project',
    company: 'InterAide Phalombe',
    date: 'Mar – Apr 2020',
    current: false,
    bullets: [
      'Collected and validated household survey data with high accuracy under strict deadlines',
      'Maintained data integrity and proper documentation throughout fieldwork',
    ],
  },
  {
    role: 'Administrative Assistant Intern',
    company: 'Phalombe District Council & District Health Office',
    date: 'May 2018 – Apr 2019',
    current: false,
    bullets: [
      'Supported district planning, records management, and inventory tracking',
      'Assisted in preparing reports and handling administrative data systems',
    ],
  },
  {
    role: 'Administrative Assistant Intern',
    company: 'Blantyre TTC',
    date: 'Jan – Dec 2017',
    current: false,
    bullets: [
      'Performed data entry and maintained office documentation systems',
      'Managed records and supported daily administrative operations',
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience">
      <div className="section-wrapper">
        <p className="section-label">// 03</p>
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div style={s.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} style={s.item}>
              {/* Timeline dot */}
              <div style={{
                ...s.dot,
                borderColor: exp.current ? '#63b3ed' : '#4a5568',
                boxShadow: exp.current ? '0 0 12px rgba(99,179,237,0.4)' : 'none',
              }}></div>

              {/* Content */}
              <div style={s.content}>
                <div
                  style={s.header}
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                >
                  <div>
                    <div style={s.role}>{exp.role}</div>
                    <div style={s.company}>{exp.company}</div>
                  </div>
                  <div style={s.right}>
                    <span style={{
                      ...s.date,
                      color: exp.current ? '#4fd1c5' : '#f6e05e',
                      borderColor: exp.current ? 'rgba(79,209,197,0.3)' : 'rgba(246,224,94,0.2)',
                    }}>
                      {exp.date}
                    </span>
                    <span style={{
                      ...s.toggle,
                      color: expanded === i ? '#63b3ed' : '#4a5568',
                    }}>
                      {expanded === i ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {expanded === i && (
                  <ul style={s.bullets}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={s.bullet}>
                        <span style={s.arrow}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  timeline: {
    position: 'relative',
    paddingLeft: '2rem',
  },
  item: {
    position: 'relative',
    marginBottom: '2rem',
    paddingLeft: '0.5rem',
  },
  dot: {
    position: 'absolute',
    left: '-2.15rem',
    top: '8px',
    width: '10px', height: '10px',
    borderRadius: '50%',
    background: '#080c14',
    border: '2px solid',
  },
  content: {
    background: '#0d1220',
    border: '1px solid rgba(99,179,237,0.12)',
    padding: '1.25rem',
    transition: 'border-color 0.2s',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    cursor: 'pointer',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  role: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: '2px',
  },
  company: {
    color: '#63b3ed',
    fontSize: '12px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  date: {
    fontSize: '11px',
    letterSpacing: '1px',
    border: '1px solid',
    padding: '2px 10px',
    whiteSpace: 'nowrap',
    fontFamily: "'Space Mono', monospace",
  },
  toggle: {
    fontSize: '10px',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  bullets: {
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(99,179,237,0.1)',
    listStyle: 'none',
  },
  bullet: {
    display: 'flex',
    gap: '8px',
    color: '#718096',
    fontSize: '12px',
    lineHeight: 1.8,
    marginBottom: '4px',
  },
  arrow: {
    color: '#4fd1c5',
    flexShrink: 0,
  },
};
