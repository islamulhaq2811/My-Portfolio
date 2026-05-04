import * as Icons from 'react-icons/fi';

const iconMap = {
  FaReact: Icons.FiAward,
  FaJs: Icons.FiCode,
  FaHtml5: Icons.FiCode,
  FaCss3Alt: Icons.FiCode,
  FaNodeJs: Icons.FiServer,
  FaPython: Icons.FiCode,
  FaServer: Icons.FiServer,
  FaDatabase: Icons.FiDatabase,
  FaGitAlt: Icons.FiGitBranch,
  FaDocker: Icons.FiBox,
  FaCode: Icons.FiCode,
  FaFigma: Icons.FiAirplay,
};

export function SkillBadge({ skill }) {
  const IconComponent = iconMap[skill.icon] || Icons.FiStar;

  return (
    <div className="skill-badge-item">
      <div className="skill-badge-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-proficiency">{skill.proficiency}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}
