import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { about } from '../../data/portfolioData';
import { ExperienceTimeline } from './ExperienceTimeline';
import './About.css';

export function About() {
  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    email: FiMail,
  };

  return (
    <section id="about" className="section about-section">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="about-label">Get to know me</span>
          <h2 className="about-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left: Bio card */}
          <motion.div
            className="about-card-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card">
              <div className="about-image-container">
                <img
                  src={about.profile_image}
                  alt={about.name}
                  className="about-image"
                />
                <div className="about-image-border" />
              </div>

              <div className="about-info">
                <h3 className="about-name">{about.name}</h3>
                <p className="about-role">{about.title}</p>
                <p className="about-location">
                  <FiMapPin size={14} />
                  {about.location}
                </p>
              </div>

              <p className="about-bio">{about.bio}</p>

              <div className="about-social">
                {Object.entries(about.social_links).map(([key, url]) => {
                  const Icon = socialIcons[key];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={key}
                    >
                      <Icon size={18} />
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Stats row */}
            {/* <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div> */}
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            className="about-timeline-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* <div className="timeline-section">
              <h3 className="timeline-title">Work Experience</h3>
              <ExperienceTimeline items={about.experience} type="work" />
            </div> */}

            <div className="timeline-section">
              <h3 className="timeline-title">Education</h3>
              <ExperienceTimeline items={about.education} type="education" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
