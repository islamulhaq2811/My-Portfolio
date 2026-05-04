import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Contact.css';

const socials = [
  { icon: FiGithub, label: 'GitHub', url: 'https://github.com/islamulhaq2811' },
  { icon: FiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/islam-ul-haq-89a8ab34a/' },
  { icon: FiMail, label: 'Email', url: 'mailto:islamulhaq2811@gmail.com' },
];

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title fade-in-up">Get In Touch</h2>
          <p className="section-subtitle fade-in-up stagger-1">
            Have a project in mind? Let's work together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact form */}
          <motion.div
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-title">Let's connect</h3>
              <p className="contact-info-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="contact-socials">
                {socials.map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={label}
                  >
                    <Icon size={24} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
