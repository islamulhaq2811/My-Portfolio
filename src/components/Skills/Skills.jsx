import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { SkillBadge } from './SkillBadge';
import './Skills.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title fade-in-up">Skills</h2>
          <p className="section-subtitle fade-in-up stagger-1">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-categories">
          {skills.map((category) => (
            <motion.div
              key={category.name}
              className="skill-category glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={container}
            >
              <h3 className="skill-category-title">{category.name}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
