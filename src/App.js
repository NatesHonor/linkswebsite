import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <div className="container">
      <div className="header">
        <h1>My Links</h1>
        <p>Connect with me through my social media channels and check out my portfolio.</p>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/nmarcellus/" target="_blank" className="link linkedin" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" className="link twitter" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <div 
          className={`link instagram ${isHovered ? 'hovered' : ''}`} 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faInstagram} /> {isHovered ? '9.5k Followers' : 'Instagram'}
        </div>
        <a href="https://github.com/NatesHonor/" target="_blank" className="link github" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://natemarcellus.com/portfolio" target="_blank" className="link portfolio" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} /> Portfolio
        </a>
      </div>
    </div>
  );
}

export default App;
