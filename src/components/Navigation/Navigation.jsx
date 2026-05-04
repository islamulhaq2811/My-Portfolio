import { useState, useEffect } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import './Navigation.css';

const navLinks = [
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

export function Navigation() {
  const scrollToSection = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="#hero"  className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <h1>ISLAM UL HAQ</h1>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(link.target); setMobileOpen(false); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile ${mobileOpen ? 'nav-mobile-open' : ''}`}>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className="nav-mobile-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(link.target); setMobileOpen(false); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
