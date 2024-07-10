import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = '#333';
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <h1>
          Nate
          <span className="subscript">All Round Developer | Content Creator</span>
        </h1>
        <p>Find ways to connect with me and view my work!</p>
        <div className="mode-switch" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/nmarcellus/" target="_blank" className={`link linkedin ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/NatesHonor/" target="_blank" className={`link github ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" className={`link twitter ${isDarkMode ? 'dark-link' : ''}`} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
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
  );
}

export default App;
