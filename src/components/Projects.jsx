import React, { useState } from 'react';
import '../styles/Projects.css';
import marauderIcon from '../assets/marauder.png';
import ballonbeamIcon from '../assets/ballonbeam.png';
import encryptorIcon from '../assets/encryptorpython.png';
import connect4Icon from '../assets/connect4.png';

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 'marauder',
      title: 'Marauder',
      icon: marauderIcon,
      description: 'An automatic mapping tool for Interactive Fiction games.',
      features: [
        'Automatic mapping of the game\'s rooms and connections',
        'Multi-layer display system for different floors',
        'Quick travel to desired rooms',
        'Note taking for rooms',
        'Automatic exploration using intelligent agents',
        'Save/Load maps for future playthroughs'
      ],
      tech: 'Electron • JavaScript • Python • NLP • BFS • DFS',
      link: 'https://github.com/rotasn/marauder/releases/tag/v-2.0'
    },
    {
      id: 'ballonbeam',
      title: 'Ball on Beam Simulation',
      icon: ballonbeamIcon,
      description: 'Dynamic simulation of a classic control systems problem.',
      features: [
        'Real-time PID control of ball position',
        'Responsive UI for parameter tuning',
        'Live visualization of control dynamics'
      ],
      tech: 'React • Kinematics • PID Control • SVG Animation',
      link: 'https://github.com/rotasn/ball-on-beam/'
    },
    {
      id: 'encryptor',
      title: 'File Encryptor',
      icon: encryptorIcon,
      description: 'Secure desktop application for file encryption with password protection.',
      features: [
        'Strong Fernet symmetric encryption',
        'Password-based encryption with PBKDF2',
        'Modern, intuitive UI design',
        'Automatic backup creation',
        'Password strength validation',
        'Automatic encryption detection'
      ],
      tech: 'PyQt5 • Python • Cryptography • PBKDF2',
      link: 'https://github.com/rotasn/file-encryptor/releases/tag/0.1'
    },
    {
      id: 'connect4',
      title: 'Connect 4',
      icon: connect4Icon,
      description: 'Revamped university project with enhanced AI and modern interface.',
      features: [
        'Improved AI difficulty algorithms',
        'Transition from console to GUI',
        'Keyboard and mouse input support'
      ],
      tech: 'SDL • C • Game AI',
      link: 'https://github.com/rotasn/connect4'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
              <div className="project-visual">
                <div className="project-icon">
                  <img src={project.icon} alt={`${project.title} icon`} />
                </div>
                <div className="project-shape"></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.description}</p>
                
                <button 
                  className="expand-btn"
                  onClick={() => toggleDescription(project.id)}
                >
                  {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                </button>
                
                {expandedProject === project.id && (
                  <div className="project-details">
                    <div className="features-list">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-dot"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="tech-stack">
                      <span className="tech-label">Built with:</span>
                      <span className="tech-tags">{project.tech}</span>
                    </div>
                  </div>
                )}
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;