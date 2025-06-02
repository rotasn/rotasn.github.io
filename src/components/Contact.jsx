import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">I'm always open to discussing new projects, collaborations, or just saying hello. You can connect with me through:</p>
        
        <div className="contact-grid">
          <a href="mailto:rotasn@gmail.com" className="contact-card email">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info">
              <h3>Email</h3>
            </div>
            <div className="contact-glow"></div>
          </a>

          <a href="https://github.com/rotasn" className="contact-card github" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
            </div>
            <div className="contact-glow"></div>
          </a>

          <a href="https://linkedin.com/in/rotasn" className="contact-card linkedin" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
            </div>
            <div className="contact-glow"></div>
          </a>

          <a href="tel:+306982994556" className="contact-card phone">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
            </div>
            <div className="contact-glow"></div>
          </a>
        </div>
        
        
      </div>
    </section>
  );
}

export default Contact;