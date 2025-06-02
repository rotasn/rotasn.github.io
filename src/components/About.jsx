import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg';
import cvPdf from '../assets/Rotas_CV.pdf';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* left side - txt */}
          <div className="about-text">
            <div className="intro-text">
              <p className="greeting">Hi, My name is Nikolaos Rotas and I'm a</p>
              <br/>
              <h1 className="main-title">
                Software<br />
                Engineer
              </h1>
            </div>
            
            <p className="description">
              With a passion for frontend development, I build user-focused 
              applications with clean interfaces and smooth interactions. I'm 
              committed to growing my skills while contributing to meaningful 
              projects that make a difference.
            </p>
            
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            <button className="learn-more-btn">
              View my CV
            </button>
            </a>
          </div>
          
          {/* right side - img with geometric shape */}
          <div className="about-image-container">
            <div className="image-wrapper">
              {/* colorful geometric shape background */}
              <div className="geometric-shape"></div>
              
              {/* pfp container */}
              <div className="profile-image-container">
                <img 
                  src={profileImage}
                  alt="Nikolaos Rotas - Software Engineer" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;