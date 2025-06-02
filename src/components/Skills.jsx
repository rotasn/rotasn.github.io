import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-item" data-proficiency="high">
            <div className="skill-icon">
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <h3>JavaScript</h3>
            <div className="skill-glow"></div>
          </div>

          <div className="skill-item" data-proficiency="high">
            <div className="skill-icon">
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <h3>TypeScript</h3>
            <div className="skill-glow"></div>
          </div>
          
          
          <div className="skill-item" data-proficiency="high">
            <div className="skill-icon">
              <i className="devicon-react-plain colored"></i>
            </div>
            <h3>React</h3>
            <div className="skill-glow"></div>
          </div>

          
          <div className="skill-item" data-proficiency="high">
            <div className="skill-icon">
              <i className="devicon-angularjs-plain colored"></i>
            </div>
            <h3>Angular</h3>
            <div className="skill-glow"></div>
          </div>


          <div className="skill-item" data-proficiency="high">
            <div className="skill-icon">
              <i className="devicon-electron-original colored"></i>
            </div>
            <h3>Electron</h3>
            <div className="skill-glow"></div>
          </div>

          
          <div className="skill-item" data-proficiency="medium">
            <div className="skill-icon">
              <i className="devicon-figma-plain colored"></i>
            </div>
            <h3>Figma</h3>
            <div className="skill-glow"></div>
          </div>



          <div className="skill-item" data-proficiency="medium">
            <div className="skill-icon">
              <i className="devicon-python-plain colored"></i>
            </div>
            <h3>Python</h3>
            <div className="skill-glow"></div>
          </div>

          
          <div className="skill-item" data-proficiency="medium">
            <div className="skill-icon">
              <i className="devicon-c-plain colored"></i>
            </div>
            <h3>C</h3>
            <div className="skill-glow"></div>
          </div>
          
          
          <div className="skill-item" data-proficiency="medium">
            <div className="skill-icon">
              <i className="devicon-matlab-plain colored"></i>
            </div>
            <h3>Matlab</h3>
            <div className="skill-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;