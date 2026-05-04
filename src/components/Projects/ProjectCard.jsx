import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { GlassCard } from '../ui/GlassCard';

export function ProjectCard({ project }) {
  return (
    <GlassCard hover className="project-card">
      <div className="project-image-container">
        <img
          src={project.image_url}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech_stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} GitHub repository`}
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
