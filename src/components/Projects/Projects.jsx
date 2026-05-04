import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title fade-in-up">Projects</h2>
          <p className="section-subtitle fade-in-up stagger-1">
            A selection of my recent work and personal projects
          </p>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
