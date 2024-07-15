import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = '#333';
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
    }

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="mode-switch" onClick={toggleDarkMode}>
          <div className={`slider ${isDarkMode ? 'slider-dark' : 'slider-light'}`}></div>
          <span className={`toggle-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
        <div className="header">
          <h1 style={{ color: isDarkMode ? '#fff' : '#333' }}>
            Nate
            <span className="subscript">All Round Developer | Content Creator</span>
          </h1>
          <p>Find ways to connect with me and view my work!</p>
        </div>
        <div className="links">
          <a href="mailto:contact@natemarcellus.com" className={`link portfolio ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email Me
          </a>
          <a 
          href="sms:+1234567890" 
          target="_blank"
          className={`link portfolio ${isHovered ? 'hovered' : ''} ${isDarkMode ? 'dark-link' : ''}`}
          rel="noopener noreferrer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
          <FontAwesomeIcon icon={faWhatsapp} /> Text Me
          </a>
          <a href="https://github.com/NatesHonor/" target="_blank" className={`link github ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a 
            href="https://www.instagram.com/nateshonor/" 
            target="_blank" 
            className={`link instagram ${isHovered ? 'hovered' : ''} ${isDarkMode ? 'dark-link' : ''}`} 
            rel="noopener noreferrer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <FontAwesomeIcon icon={faInstagram} /> {isHovered ? '9.5k Followers' : 'Instagram'}
          </a>
          <a href="https://natemarcellus.com/" target="_blank" className={`link portfolio ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFolder} /> Portfolio
          </a>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/nmarcellus/" target="_blank" className={`linkedin ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" className={`twitter ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default App;
