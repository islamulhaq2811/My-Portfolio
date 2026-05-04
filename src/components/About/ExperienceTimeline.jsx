import { motion } from 'framer-motion';

export function ExperienceTimeline({ items, type }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="timeline-marker" />
          <div className="timeline-content glass-card">
            {type === 'work' ? (
              <>
                <div className="timeline-header">
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-date">
                    {item.start_date} — {item.end_date || 'Present'}
                  </span>
                </div>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="timeline-header">
                  <h4 className="timeline-role">{item.degree}</h4>
                  <span className="timeline-date">{item.graduation_year}</span>
                </div>
                <p className="timeline-company">{item.field}</p>
                <p className="timeline-description">{item.institution}</p>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
