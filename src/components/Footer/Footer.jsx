import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const socials = [
  { icon: FiGithub, label: 'GitHub', url: 'https://github.com/islamulhaq2811' },
  { icon: FiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/islam-ul-haq-89a8ab34a/' },
  { icon: FiMail, label: 'Email', url: 'mailto:islamulhaq2811@gmail.com' },
];

const navLinks = [
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

export function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Islam Ul haq</span>
          <p className="footer-tagline">Building modern web experiences.</p>
        </div>

        <div className="footer-nav">
          <span className="footer-nav-title">Navigation</span>
          <ul className="footer-nav-links">
            {navLinks.map((link) => (
              <li key={link.target}>
                <button onClick={() => scrollTo(link.target)} className="footer-link">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <span className="footer-nav-title">Connect</span>
          <div className="footer-social-links">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <p className="footer-copy">
          <FiHeart size={14} className="footer-heart" /> Built with React & Tailwind CSS
        </p> */}
        <p className="footer-year">&copy; {new Date().getFullYear()} Islam ul Haq. All rights reserved.</p>
      </div>
    </footer>
  );
}
