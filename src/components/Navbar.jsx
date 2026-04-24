import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Work',     href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
    borderBottom: '1px solid rgba(99,179,237,0.15)',
    padding: '0 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: '56px',
    transition: 'background 0.3s, backdropFilter 0.3s',
  },
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '18px',
    color: '#63b3ed',
    letterSpacing: '-0.5px',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#718096',
    textDecoration: 'none',
    fontSize: '12px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
  menuBtn: {
    display: 'none',
    background: 'none',
    border: '1px solid rgba(99,179,237,0.3)',
    color: '#63b3ed',
    cursor: 'pointer',
    padding: '6px 10px',
    fontFamily: "'Space Mono', monospace",
    fontSize: '11px',
    letterSpacing: '1px',
  },
  mobileMenu: {
    position: 'fixed',
    top: '56px', left: 0,
    width: '100%',
    background: '#0d1220',
    borderBottom: '1px solid rgba(99,179,237,0.15)',
    padding: '1.5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    zIndex: 99,
  },
  mobileLink: {
    color: '#718096',
    textDecoration: 'none',
    fontSize: '13px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    ...styles.nav,
    background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={navStyle}>
        <a href="#hero" style={styles.logo}>FRM</a>

        {/* Desktop links */}
        <div style={styles.links} className="nav-desktop">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={styles.link}
              onMouseEnter={e => e.target.style.color = '#63b3ed'}
              onMouseLeave={e => e.target.style.color = '#718096'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          style={{ ...styles.menuBtn, display: 'none' }}
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu} className="nav-mobile-menu">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={styles.mobileLink}
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
