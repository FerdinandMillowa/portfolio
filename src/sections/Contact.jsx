import React, { useState } from 'react';

const contactLinks = [
  {
    icon: '@',
    label: 'Email',
    value: 'ferdinandmillowa@gmail.com',
    href: 'mailto:ferdinandmillowa@gmail.com',
  },
  {
    icon: '</>', 
    label: 'GitHub',
    value: 'github.com/ferdinandmillowa',
    href: 'https://github.com/ferdinandmillowa',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ferdinandmillowa',
    href: 'https://linkedin.com/in/ferdinandmillowa',
  },
  {
    icon: '#',
    label: 'Phone',
    value: '(+265) 882 657 965',
    href: 'tel:+265882657965',
  },
];

export default function Contact() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="contact">
      <div className="section-wrapper">
        <p className="section-label">// 05</p>
        <h2 className="section-title">Get in <span>Touch</span></h2>

        <div style={s.grid}>
          {/* Left text */}
          <div>
            <p style={s.para}>
              I'm currently open to new opportunities — whether that's a full-time role,
              freelance project, or a collaboration. If you're building something interesting,
              I'd love to hear about it.
            </p>
            <p style={s.para}>
              Based in <strong style={s.strong}>Blantyre, Malawi</strong>.
              Available for remote work globally.
            </p>
            <p style={s.para}>
              Currently finishing my Bachelor's degree in Management Information Systems
              (graduating August 2026) while working full-time in ICT support and systems.
            </p>
            <a
              href="mailto:ferdinandmillowa@gmail.com"
              className="btn btn-primary"
              style={{ marginTop: '1.5rem', display: 'inline-flex' }}
            >
              Send a Message →
            </a>
          </div>

          {/* Contact links */}
          <div style={s.links}>
            {contactLinks.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  ...s.link,
                  borderColor: hovered === i ? '#63b3ed' : 'rgba(99,179,237,0.12)',
                  background: hovered === i ? '#111827' : '#0d1220',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={s.icon}>{c.icon}</span>
                <div>
                  <div style={s.linklabel}>{c.label}</div>
                  <div style={s.linkval}>{c.value}</div>
                </div>
              </a>
            ))}
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
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.25rem',
    border: '1px solid',
    textDecoration: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    color: '#e2e8f0',
  },
  icon: {
    fontSize: '16px',
    color: '#63b3ed',
    width: '28px',
    textAlign: 'center',
    fontFamily: "'Space Mono', monospace",
    flexShrink: 0,
  },
  linklabel: {
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#718096',
    marginBottom: '2px',
  },
  linkval: {
    fontSize: '12px',
    color: '#e2e8f0',
    fontFamily: "'Space Mono', monospace",
  },
};
